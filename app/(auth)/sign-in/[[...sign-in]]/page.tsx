import type { Metadata } from "next";
import Image from "next/image";
import { SignIn } from "@clerk/nextjs";

import signInImage from "@/app/_assets/sign-in.png";

export const metadata: Metadata = {
  title: "Sign In",
};

export default function SignInPage() {
  return (
    <>
      <Image
        src={signInImage}
        alt=""
        width="900"
        height="1800"
        className="hidden h-screen w-1/2 object-cover lg:block"
      />
      <div className="mx-auto">
        <SignIn path="/sign-in" />
      </div>
    </>
  );
}
