import Link from "next/link";
import Image from "next/image";
import { UserButton } from "@clerk/nextjs";

export function DashboardNavbar() {
  return (
    <nav className="w-full border-b border-content/10">
      <div className="mx-auto flex max-w-screen-lg items-center justify-between px-4 py-2">
        <Link href="/">
          <Image src="/logo.svg" alt="" width={45} height={45} />
        </Link>
        <UserButton afterSignOutUrl="/" />
      </div>
    </nav>
  );
}
