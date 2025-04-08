import ProjectCards from "./Components/Project/ProjectCards";

export default function Home() {
  return (
    <div className="flex flex-col gap-8">
      <div className="text-4xl text-blue-600">
        I’m Aman — blending UX research, design, and frontend development to build meaningful digital products.
      </div>
      <div className="flex flex-col w-full gap-8">
        <ProjectCards />
        <ProjectCards />
      </div>
    </div>
  );
}
