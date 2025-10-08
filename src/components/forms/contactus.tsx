'use client';

import { useState } from "react";
import { toast } from "sonner";

interface ContactFormData {
  name: string;
  email: string;
  phone: string;
  message: string;
}

export default function ContactUs() {
  const [formData, setFormData] = useState<ContactFormData>({
    name: "",
    email: "",
    phone: "",
    message: ""
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const resetForm = () => {
    setFormData({
      name: "",
      email: "",
      phone: "",
      message: "",
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch("/api/forms/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: formData.email,
          attributes: {
            NAME: formData.name,
            PHONE: formData.phone,
            MESSAGE: formData.message,
          },
          /** Check this in BREVO CRM lists*/
          listIds: [2],
        }),
      });

      const data = await response.json();

      if (response.ok) {
        toast.success("Application Submitted!", {
          description:
            "Thank you for your interest in our Ambassador Program. We'll be in touch soon!",
        });
        // show thank you text
        // Reset form
        resetForm();
      } else {
        if (data?.code === "duplicate_parameter") {
          toast.success("Already Subscribed", {
            description: data.message,
          });

          resetForm();
        } else {
          toast.error(data.error || "Submission Failed", {
            description:
              data.message ||
              "An error occured while submitting, please try again later",
          });
        }
      }
    } catch (error) {
      toast.error("Submission Failed", {
        description:
          "There was an error submitting your form. Please try again.",
      });
      console.log(error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="w-full h-[60vh] mx-auto p-6">
      <form className="bg-transparent p-6 h-full" onSubmit={handleSubmit}>
        {/* Name */}
        <div className="mb-8">
          <input
            id="name"
            name="name"
            type="text"
            required
            placeholder="Name *"
            value={formData.name}
            onChange={handleInputChange}
            className="w-full p-2 pb-6 border-b border-gray-500 rounded 
            bg-transparent text-white placeholder-gray-300 focus:outline-none focus:ring-0"
          />
        </div>

        {/* Email */}
        <div className="mb-8">
          <input
            id="email"
            name="email"
            type="email"
            placeholder="Email *"
            required
            value={formData.email}
            onChange={handleInputChange}
            className="w-full p-2 pb-6 border-b border-b-gray-500 rounded 
            bg-transparent text-white placeholder-gray-300 focus:outline-none focus:ring-0"
          />
        </div>

        {/* Phone */}
        <div className="mb-8">
          <input
            id="phone"
            name="phone"
            type="tel"
            placeholder="Phone"
            required
            value={formData.phone}
            onChange={handleInputChange}
            className="w-full p-2 pb-6 border-b border-gray-500 rounded 
            bg-transparent text-white placeholder-gray-300 focus:outline-none focus:ring-0"
          />
        </div>

        {/* Message */}
        <div className="mb-8">
          <textarea
            id="message"
            name="message"
            required
            placeholder="Message *"
            value={formData.message}
            onChange={handleInputChange}
            className="w-full p-2 pb-6 border-b border-b-gray-500 rounded 
            bg-transparent text-white placeholder-gray-300 focus:outline-none focus:ring-0"
          ></textarea>
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="bg-transparent border border-gray-500 text-white py-2 px-4 
          rounded-full hover:bg-white hover:text-black transition-colors duration-300"
        >
          {isSubmitting ? "Submitting..." : "Submit"}
        </button>
      </form>
    </div>
  );
}

