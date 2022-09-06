import React from "react";
import Donators from "./components/Donators";
import Donation from "./components/Donation";

const App = () => {
  return (
    <main className="h-screen w-full bg-[#100e34] grid place-items-center px-2">
      <div className="bg-[#100e49] md:w-[800px] rounded-lg text-white/80 flex flex-col gap-y-6 md:flex-row justify-between px-6 items-center py-4 min-h-[300px]">
        <Donation />
        <Donators />
      </div>
    </main>
  );
};

export default App;
