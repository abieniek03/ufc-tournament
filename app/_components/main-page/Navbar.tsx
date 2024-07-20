"use client";

import Image from "next/image";
import { UserButton, useUser } from "@clerk/nextjs";
import { useState, useEffect } from "react";
import { SignUpButton, SignInButton } from "@clerk/nextjs";

import { Button } from "../Button";
import clsx from "clsx";
import Link from "next/link";

export function Navbar() {
  const [navbarFixed, setNavbarFixed] = useState<boolean>(false);

  const { isSignedIn } = useUser();

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
        {isSignedIn ? (
          <div className="flex items-center gap-8">
            <Link
              href="/tournaments"
              className="duration-3000 transition-all hover:underline"
            >
              Tournaments
            </Link>
            <UserButton afterSignOutUrl="/" />
          </div>
        ) : (
          <div className="flex gap-2">
            <SignInButton mode="modal">
              <Button styleType="secondary">Sign In</Button>
            </SignInButton>
            <SignUpButton mode="modal">
              <Button styleType="primary">Sign Up</Button>
            </SignUpButton>
          </div>
        )}
      </div>
    </header>
  );
}
