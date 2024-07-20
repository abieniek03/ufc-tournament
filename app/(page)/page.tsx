import { Navbar } from "../_components/main-page/Navbar";
import { Hero } from "../_components/main-page/Hero";

export default function MainPage() {
  return (
    <>
      <Navbar />
      <Hero />

      <main className="min-h-screen">
        <h1>Hello!👋</h1>
      </main>
    </>
  );
}
