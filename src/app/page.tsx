import About from "@/components/About";
import Main from "@/components/Main";

export default function Home() {
  return (
    <>
      <div className="max-w-5xl mx-auto">
        <section className="section__main md:h-[50vh] text-slate-950">
          <Main />
        </section>
      </div>
      <section className="bg-slate-950">
        <div className="max-w-5xl mx-auto px-4">
          <About />
        </div>
      </section>
    </>
  );
}
