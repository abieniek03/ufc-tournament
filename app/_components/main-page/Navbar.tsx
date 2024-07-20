"use client";

import Image from "next/image";
import { useState, useEffect } from "react";
import { SignUpButton, SignInButton } from "@clerk/nextjs";

import { Button } from "../Button";
import clsx from "clsx";

export function Navbar() {
  const [navbarFixed, setNavbarFixed] = useState<boolean>(false);

  const isNavbarFixed = () => {
    window.scrollY > 100 ? setNavbarFixed(true) : setNavbarFixed(false);
  };

  useEffect(() => {
    window.addEventListener("scroll", isNavbarFixed);

    return () => {
      window.removeEventListener("scroll", isNavbarFixed);
    };
  }, []);

  return (
    <header
      className={clsx(
        "fixed z-50 w-full transition-all duration-300",
        navbarFixed &&
          "backdrop-blur supports-[backdrop-filter]:bg-background/50",
      )}
    >
      <div className="mx-auto flex max-w-screen-xl items-center justify-between px-4 py-2">
        <div>
          <a href="#">
            <Image
              src="/logo.svg"
              alt="Tournament logo"
              width={50}
              height={50}
            />
          </a>
        </div>
        <div className="flex gap-2">
          <SignInButton mode="modal">
            <Button styleType="secondary">Sign In</Button>
          </SignInButton>
          <SignUpButton mode="modal">
            <Button styleType="primary">Sign Up</Button>
          </SignUpButton>
        </div>
      </div>
    </header>
  );
}
