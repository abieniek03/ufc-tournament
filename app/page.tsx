import { UserButton } from "@clerk/nextjs";

export default function Home() {
  return (
    <main>
      <h1>Hello!👋</h1>
      <UserButton />
    </main>
  );
}
