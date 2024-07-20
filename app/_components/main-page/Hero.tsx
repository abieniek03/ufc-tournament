export function Hero() {
  return (
    <section className="before:bg-lights relative z-0 h-screen bg-background/75 bg-[url('https://i.imgur.com/WdmN7Yq.jpg')] bg-cover bg-center bg-no-repeat bg-blend-multiply before:absolute before:-top-[85vh] before:left-1/2 before:-z-10 before:h-full before:w-full before:-translate-x-1/2 before:rounded-full before:blur-[100px] after:absolute after:-bottom-1/3 after:-z-10 after:h-screen after:w-full after:bg-gradient-to-t after:from-background after:via-background after:to-transparent lg:before:-top-[90vh]">
      <div className="z-20 mx-auto flex h-screen max-w-screen-xl flex-col items-center justify-center px-2 text-center sm:px-4">
        <div>
          <h1 className="mb-4 text-4xl font-extrabold uppercase tracking-tight text-white md:mb-8 md:text-5xl lg:text-6xl xl:text-8xl">
            Make your gameplay <br /> more interesting
          </h1>
          <p className="mb-4 text-xl sm:px-16 md:text-2xl lg:mb-8">
            Create an exciting tournament competition.
          </p>
        </div>
      </div>
    </section>
  );
}
