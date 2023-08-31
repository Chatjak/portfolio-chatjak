import About from "@/components/About";
import Contact from "@/components/Contact";
import Main from "@/components/Main";
import Work from "@/components/Work";

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
      <section className="max-w-5xl mx-auto" id="work">
        <Work />
      </section>
      <section className="bg-slate-950 text-white" id="contact">
        <div className="section__contact">
          <Contact />
        </div>
      </section>
    </>
  );
}
