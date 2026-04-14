import Image from "next/image";
import Navbar from "./components/Navbar/Navbar";
import { useDebugValue } from "react";
import Banner from "./components/Banner/Banner";
import FriendSection from "./components/FriendSection/FriendSection";


export default function Home() {
  return (
   <div>
   <Banner/>
 <FriendSection/>
   </div>
  );
}
