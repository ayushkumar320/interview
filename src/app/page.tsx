"use client";

import BlurText from "@/components/BlurText";
import MagnetLines from "@/components/MagnetLines";

const handleAnimationComplete = () => {
  console.log("Animation completed!");
};

export default function Home() {
  return (
    <main className="min-h-screen w-full flex flex-col items-center justify-center bg-linear-to-b from-gray-900 to-black text-white px-4 py-12">
      
      {/* Title Animation */}
      <BlurText
        text="Isn't this so cool?!"
        delay={150}
        animateBy="words"
        direction="top"
        onAnimationComplete={handleAnimationComplete}
        className="text-4xl md:text-6xl font-semibold text-center mb-10"
      />

      {/* Magnet Lines Section */}
      <div className="flex items-center justify-center">
        <MagnetLines
          rows={9}
          columns={9}
          containerSize="60vmin"
          lineColor="tomato"
          lineWidth="0.8vmin"
          lineHeight="5vmin"
          baseAngle={0}
          style={{ margin: "2rem auto" }}
        />
      </div>

      {/* Bottom Note (Optional) */}
      <p className="mt-10 text-gray-400 text-sm">
        Built with Next.js, Tailwind, and Motion ⚡
      </p>

    </main>
  );
}
