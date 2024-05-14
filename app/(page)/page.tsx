import { Button } from "../_components/Button";

export default function MainPage() {
  return (
    <>
      <header className="before:bg-lights relative z-0 h-screen bg-background/75 bg-[url('https://i.imgur.com/mczZKW0.png')] bg-cover bg-center bg-no-repeat bg-blend-multiply before:absolute before:-top-[85vh] before:left-1/2 before:-z-10 before:h-full before:w-full before:-translate-x-1/2 before:rounded-full before:blur-[100px] after:absolute after:-bottom-1/3 after:-z-10 after:h-screen after:w-full after:bg-gradient-to-t after:from-background after:via-background after:to-transparent lg:before:-top-[90vh]">
        <div className="z-20 mx-auto flex h-screen max-w-screen-xl flex-col items-center justify-center px-2 text-center sm:px-4">
          <div>
            <h1 className="mb-2 text-4xl font-extrabold uppercase leading-none tracking-tight text-white md:mb-4 md:text-5xl lg:text-6xl xl:text-8xl">
              Diversify your gameplay
            </h1>
            <p className="mb-4 text-lg uppercase sm:px-16 md:text-xl lg:mb-8  lg:text-3xl xl:text-4xl">
              create a tournament emotionous in the game
            </p>
          </div>
          <div className="z-40 mb-20 flex gap-2 md:gap-4 lg:mb-28">
            <Button styleType="secondary" path="/sign-in">
              <span className="md:p-2 md:text-xl">Sign In</span>
            </Button>
            <Button styleType="primary" path="/sign-up">
              <span className="md:p-2 md:text-xl">Sign Up</span>
            </Button>
          </div>
        </div>
      </header>

      <main className="min-h-screen">
        <h1>Hello!👋</h1>
      </main>
    </>
  );
}
