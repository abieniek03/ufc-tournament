import { Navbar } from "../_components/main-page/Navbar";
import { Hero } from "../_components/main-page/Hero";
import { InfoSelectFighters } from "../_components/main-page/InfoSelectFighters";
import { InfoScoreStage } from "../_components/main-page/InfoScoreStage";
import { InfoKnockoutStage } from "../_components/main-page/InfoKnockoutStage";

export default function MainPage() {
  return (
    <>
      <Navbar />
      <Hero />
      <main className="mx-auto w-full max-w-screen-xl p-4 pt-36">
        <InfoSelectFighters />
        <InfoScoreStage />
        <InfoKnockoutStage />
      </main>
    </>
  );
}
