import Image from "next/image";

const Header = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 md:pt-6">
      <div className="container mx-auto py-4 flex flex-col sm:flex-row items-center justify-center sm:justify-between gap-1">
        {/* Logo + Brand Name */}
        <div className="flex items-center">
          <div className="relative w-10 h-8 sm:w-20 sm:h-10 shrink-0">
            <Image
              src="/logo-nobg.png"
              alt="Marcanza logo"
              fill
              className="object-contain"
              priority
            />
          </div>
          <h1 className="text-2xl sm:text-3xl font-light tracking-wide select-none">
            <span className="font-bold">MARC</span>ANZA
          </h1>
        </div>

        {/* Tagline */}
        <div className="text-lg sm:text-2xl font-light select-none cursor-default flex items-center gap-2 relative">
          <span className="font-bold">Clarity. Purpose. </span>
          <span className="relative">
            Vision.
          </span>
        </div>
      </div>
    </header>
  );
};

export default Header;
