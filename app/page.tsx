import ProjectCards from "./Components/Project/ProjectCards";

export default function Home() {
  return (
    <div className="flex flex-col gap-8">
      <div className="text-4xl text-blue-600">
        I’m Aman — blending UX research, design, and frontend development to build meaningful digital products.
      </div>
      <div className="flex flex-col w-full gap-8">
        <ProjectCards title="Project #1" description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ullamcorper ullamcorper vulputate. Phasellus efficitur lacus a lectus mollis, ut posuere tortor scelerisque"/>
        <ProjectCards title="Project #1" description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ullamcorper ullamcorper vulputate. Phasellus efficitur lacus a lectus mollis, ut posuere tortor scelerisque"/>
      </div>
    </div>
  );
}
