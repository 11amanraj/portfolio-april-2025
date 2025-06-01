import { Project } from '@/app/Types/Interface'
import ProjectsList from "./Components/Project/ProjectsList";
import HeroSection from './Components/Hero/HeroSection';

export default function Home() {
  return (
    <div className="flex flex-col gap-8">
      <HeroSection />
      <ProjectsList />
    </div>
  );
}
