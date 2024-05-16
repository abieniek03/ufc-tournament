import type { Metadata } from "next";
import { DashboardNavbar } from "../_components/dashboard/DashboardNavbar";
import { Children as Props } from "../_types/types";

export const metadata: Metadata = {
  title: "Dashboard",
};

export default function DashboardLayout({ children }: Readonly<Props>) {
  return (
    <>
      <DashboardNavbar />
      <main className="mx-auto max-w-screen-lg p-4">{children}</main>
    </>
  );
}
