import { UserButton } from "@clerk/nextjs";

export function DashboardNavbar() {
  return (
    <nav className="w-full border-b border-content/10">
      <div className="mx-auto flex max-w-screen-lg items-center justify-between p-4">
        <span className="uppercase">logo</span>
        <UserButton />
      </div>
    </nav>
  );
}
