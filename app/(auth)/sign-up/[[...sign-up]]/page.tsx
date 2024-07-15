import type { Metadata } from "next";
import Image from "next/image";
import { SignUp } from "@clerk/nextjs";

import signUpImage from "@/app/_assets/sign-up.png";

export const metadata: Metadata = {
  title: "Sign Up",
};

export default function SignUpPage() {
  return (
    <>
      <Image
        src={signUpImage}
        alt=""
        width="1920"
        height="1080"
        className="hidden h-screen w-1/2 object-cover lg:block"
      />
      <div className="mx-auto">
        <SignUp path="/sign-up" />
      </div>
    </>
  );
}
