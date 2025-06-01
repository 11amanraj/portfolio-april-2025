"use client";

import dynamic from "next/dynamic";

const Sketch = dynamic(() => import("react-p5"), { ssr: false });

const HeroBg = () => {
  return (
    <div>HeroBg</div>
  )
}

export default HeroBg