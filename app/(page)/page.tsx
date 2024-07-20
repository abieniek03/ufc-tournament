import { Navbar } from "../_components/main-page/Navbar";
import { Hero } from "../_components/main-page/Hero";
import { InfoSelectFighters } from "../_components/main-page/InfoSelectFighters";

export default function MainPage() {
  return (
    <>
      <Navbar />
      <Hero />
      <main className="sticky z-50 mx-auto w-full max-w-screen-xl p-4">
        <InfoSelectFighters />
      </main>
    </>
  );
}
