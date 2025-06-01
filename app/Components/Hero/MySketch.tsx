// components/MySketch.tsx
"use client";

import dynamic from "next/dynamic";
import type p5 from "p5";

const Sketch = dynamic(() => import("react-p5"), { ssr: false });

const MySketch = () => {
  const setup = (p: p5, canvasParentRef: Element) => {
    const width = canvasParentRef.clientWidth;
    const height = canvasParentRef.clientHeight;
    p.createCanvas(width, height).parent(canvasParentRef);
  };

  const draw = (p: p5) => {
    p.background(240);
    p.fill(210);
    p.ellipse(100, 100, 80, 80);
  };

  return (
    <div className="w-full h-96">
      <Sketch setup={setup} draw={draw} />
    </div>
  );
};

export default MySketch;
