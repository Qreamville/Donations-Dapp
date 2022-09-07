import { useEffect, useState } from "react";
import Donators from "./components/Donators";
import Donation from "./components/Donation";
import { useGlobalContext } from "./context/DonationsContext";

declare var window: any;

const App = () => {
  const { connectWallet, isConnected } = useGlobalContext();

  return (
    <main className="h-screen w-full bg-[#100e34] grid place-items-center px-2">
      <div className="bg-[#100e49] md:w-[800px] rounded-lg text-white/80 flex flex-col px-6 items-center py-4 min-h-[300px] justify-center gap-y-4">
        <button
          className={`font-bold text-xl cursor-pointer px-2 ${
            isConnected ? "bg-green-600" : "bg-red-600"
          } rounded-lg py-1 mr-auto`}
          onClick={connectWallet}
        >
          {isConnected ? "connected!" : "connect"}
        </button>
        <div className="flex flex-col gap-y-6 md:flex-row justify-between items-center w-full">
          <Donation />
          <Donators />
        </div>
      </div>
    </main>
  );
};

export default App;
