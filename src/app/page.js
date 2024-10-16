export const dynamic = "force-dynamic"
import Image from "next/image";
import Navbar from "./Components/Shared/Navbar";
import HomePage from "./Components/Homepage/HomePage";

export default function Home() {
  return (
    <div className="">
      <main className="">
       <HomePage></HomePage>
        
      </main>
     
    </div>
  );
}
