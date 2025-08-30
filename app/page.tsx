import ProjectsList from "./Components/Project/ProjectsList";
import HeroSection from './Components/Hero/HeroSection';
import CaseStudy from "./Components/CaseStudy/CaseStudy";

export default function Home() {
  return (
    <div className="flex flex-col gap-8 overflow-y-scroll snap-y snap-mandatory">
      <CaseStudy />
      {/* <HeroSection />
      <ProjectsList /> */}
      {/* <div className="bg-red-300 sm:bg-green-400 md:bg-blue-600 lg:bg-yellow-500 xl:bg-violet-700 text-black m-4 p-12 rounded-xl">This is a test</div> */}
    </div>
  );
}
