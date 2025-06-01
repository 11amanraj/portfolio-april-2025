import { Project } from '@/app/Types/Interface'
import ProjectsList from "./Components/Project/ProjectsList";

export default function Home() {
  return (
    <div className="flex flex-col gap-8">
      <div className="outline-1 min-h-[calc(100vh-88px)] responsive-padding flex flex-col gap-8 sm:max-w-250">
        {/* <div className="w-50 h-50 ml-16 sm:w-65 sm:h-65 sm:ml-20 bg-green-600 rounded-full">
          <img src="/hero-image.jpg" alt="hero-image" className="w-full h-full rounded-full overflow-clip"/>
        </div> */}
        {/* <img src="/hero-image.jpg" alt="hero-image" className="w-50 h-50 ml-16 sm:w-70 sm:h-70 sm:ml-20 md:w-84 md:h-84 md:mb-16 rounded-full overflow-clip"/> */}
        <div className="text-3xl font-heading md:text-[64px]">
          I’m Aman — blending <span className="text-primary">UX research</span>, <span className="text-primary">design</span>, and <span className="text-primary">frontend development</span> to build meaningful digital products.
        </div>
        <div className="text-xl font-heading md:text-4xl">I aim to craft experiences that are not only functional, but emotionally resonant and inclusive.</div>
      </div>
      <ProjectsList />
    </div>
  );
}
