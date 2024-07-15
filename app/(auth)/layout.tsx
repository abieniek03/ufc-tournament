import { IChildren as Props } from "../_types/types";

export default function AuthLayout({ children }: Readonly<Props>) {
  return (
    <main className="flex h-screen w-full items-center justify-between">
      {children}
    </main>
  );
}
