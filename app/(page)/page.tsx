import { Navbar } from "../_components/main-page/Navbar";
import { Hero } from "../_components/main-page/Hero";
import { InfoSelectFighters } from "../_components/main-page/InfoSelectFighters";
import { InfoScoreStage } from "../_components/main-page/InfoScoreStage";
import { InfoKnockoutStage } from "../_components/main-page/InfoKnockoutStage";
import { Footer } from "../_components/main-page/Footer";

export default function MainPage() {
  return (
    <>
      <Navbar />
      <Hero />
      <main className="main-page mx-auto w-full max-w-screen-xl p-4 pt-16 lg:pt-24">
        <InfoSelectFighters />
        <InfoScoreStage />
        <InfoKnockoutStage />
      </main>
      <Footer />
    </>
  );
}
