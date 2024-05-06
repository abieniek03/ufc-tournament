import { IChildren as Props } from "../_types/types";

export default function AuthLayout({ children }: Readonly<Props>) {
  return (
    <main className="flex h-screen items-center justify-center">
      {children}
    </main>
  );
}
