import { DashboardNavbar } from "../_components/dashboard/DashboardNavbar";
import { IChildren as Props } from "../_types/types";

export default function DashboardLayout({ children }: Readonly<Props>) {
  return (
    <>
      <DashboardNavbar />
      <main className="mx-auto max-w-screen-lg p-4">{children}</main>
    </>
  );
}
