import Image from "next/image";
import Introduction from "./components/Introduction";
import NavBar from "./components/NavBar";
import RecentWork from "./components/RecentWork";

export default function Home() {
  return (
    <main className='flex min-h screen flex-col'>
      <NavBar />
      <div className="container mt-15 mx-auto px-12 py-4">
        <Introduction />
      </div>
      <div className="container mx-auto px-12 py-4">
        <RecentWork />
      </div>
    </main>
  );
}