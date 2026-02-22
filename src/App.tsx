import Navbar from "./component/Navbar";
import Hero from "./component/Hero";
import Technologies from "./component/Technologies";
import Project from "./component/project";
import Experience from "./component/Experience";
import Contact from "./component/Contact";

function App() {
  return (
    <div className="overflow-x-hidden antialiased text-stone-300">
      <div className="fixed inset-0 top-0 w-full h-full -z-10">
        <div className="relative w-full h-full bg-black text-neutral-300 slec ">
          <div className="absolute  w-full h-full  bottom-0 left-0 right-0 top-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:14px_24px]"></div>
          <div className="absolute left-0 right-0 top-[-10%] h-[1000px] w-[1000px] rounded-full bg-[radial-gradient(circle_400px_at_50%_300px,#fbfbfb36,#000)]"></div>
        </div>
      </div>
      <div className="container px-8 mx-auto">
        <Navbar />
        <Hero />
        <Technologies />
        <Project />
        <Experience />
        <Contact />
      </div>
    </div>
  );
}

export default App;
