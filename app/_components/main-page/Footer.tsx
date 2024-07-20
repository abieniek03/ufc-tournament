import Image from "next/image";
import abLogo from "@/app/_assets/ab-logo.svg";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-primary-500/50">
      <div className="mx-auto flex max-w-screen-xl flex-col items-center justify-center gap-1 p-4 opacity-50 sm:flex-row sm:justify-between">
        <div className="flex items-center">
          <p className="text-sm">Made by ♥️ from </p>
          <Image
            src={abLogo}
            alt="AB Web Project"
            width={22}
            height={22}
            className="ml-1"
          />
        </div>
        <p className="text-sm">&copy; {currentYear}</p>
      </div>
    </footer>
  );
}
