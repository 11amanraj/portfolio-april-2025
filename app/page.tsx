import { Project } from '@/app/Types/Interface'
import ProjectsList from "./Components/Project/ProjectsList";
import HeroSection from './Components/Hero/HeroSection';
import MySketch from './Components/Hero/MySketch';

export default function Home() {
  return (
    <div className='w-400 h-400'>
      <MySketch />
    </div>
    // <div className="flex flex-col gap-8 overflow-y-scroll snap-y snap-mandatory">
    //   <HeroSection />
    //   <ProjectsList />
    // </div>
  );
}
