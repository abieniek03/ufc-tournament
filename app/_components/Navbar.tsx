"use client";

import { useState, useEffect } from "react";
import { useUser, UserButton } from "@clerk/nextjs";

import clsx from "clsx";

import { Button } from "./Button";

export function Navbar() {
  const { isSignedIn } = useUser();

  const [navbarFixed, setNavbarFixed] = useState<boolean>(false);

  const isNavbarFixed = () => {
    window.scrollY ? setNavbarFixed(true) : setNavbarFixed(false);
  };

  useEffect(() => {
    window.addEventListener("scroll", isNavbarFixed);
    return () => {
      window.removeEventListener("scroll", isNavbarFixed);
    };
  });
  return (
    <nav
      className={clsx(
        "transition-background fixed w-full duration-300",
        navbarFixed && "bg-background",
      )}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between p-4">
        <div>
          <span className="uppercase">logo</span>
        </div>
        {isSignedIn ? (
          <UserButton />
        ) : (
          <div className="flex gap-2">
            <Button styleType="secondary" path="/sign-in">
              Sign In
            </Button>
            <Button styleType="primary" path="/sign-up">
              Sign Up
            </Button>
          </div>
        )}
      </div>
    </nav>
  );
}
