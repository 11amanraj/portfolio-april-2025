import { Project } from '@/app/Types/Interface'
import ProjectsList from "./Components/Project/ProjectsList";
import HeroSection from './Components/Hero/HeroSection';

export default function Home() {
  return (
    <div className="flex flex-col gap-8">
      <HeroSection />
      {/* <div className="min-h-[calc(100vh-88px)] responsive-padding flex flex-col justify-center gap-8 sm:max-w-250 lg:max-w-280 xl:max-w-320">
        <div className="text-3xl font-heading md:text-[64px]">
          Hey! I’m Aman — blending <span className="text-primary">UX research</span>, <span className="text-primary">design</span>, and <span className="text-primary">frontend development</span> to build meaningful digital products.
        </div>
        <div className="text-xl font-heading md:text-4xl">I aim to craft experiences that are not only functional, but emotionally resonant and inclusive.</div>
      </div> */}
      <ProjectsList />
    </div>
  );
}
