// File: app/api/forms/ambassador/route.ts

import { type NextRequest, NextResponse } from "next/server";
import { env } from "@/env";

export async function POST(request: NextRequest) {
  try {
    const { email, attributes = {}, listIds = [2] } = await request.json();

    if (!email) {
      return NextResponse.json({ error: "Email is required" }, { status: 400 });
    }

    if (
      !attributes.NAME ||
      !attributes.MESSAGE
    ) {
      return NextResponse.json(
        {
          error:
            "Name and Message are required to connect",
        },
        { status: 400 },
      );
    }

    const options = {
      method: "POST",
      headers: {
        accept: "application/json",
        "content-type": "application/json",
        "api-key": env.BREVO_API_KEY,
      },
      body: JSON.stringify({
        attributes: {
          NAME: attributes.NAME,
          PHONE: attributes.PHONE,
          MESSAGE: attributes.MESSAGE,
        },
        updateEnabled: false,
        email,
        listIds,
      }),
    };

    const response = await fetch("https://api.brevo.com/v3/contacts", options);
    const data = await response.json();

    if (!response.ok) {
      const errorCode = data?.code ?? "unknown_error";

      if (errorCode === "duplicate_parameter") {
        return NextResponse.json(
          {
            error: "Duplicate Parameters",
            message:
              "This email address is already in our contact list",
            code: errorCode,
          },
          { status: 409 }, //conflict
        );
      }
      return NextResponse.json(
        { error: "Failed to create contact", details: data },
        { status: response.status },
      );
    }

    return NextResponse.json({ success: true, data }, { status: 201 });
  } catch (error) {
    console.error("Error creating contact:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 },
    );
  }
}
