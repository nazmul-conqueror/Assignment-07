import Link from "next/link";
import { RiHome4Line, RiTimeLine } from "react-icons/ri";
import { TfiStatsUp } from "react-icons/tfi";

const Navbar = () => {
    return (
       <div className="navbar bg-base-100 shadow-sm">
  <div className="navbar-start">
    <p className="  text-xl font-bold"><span className="text-[#244d3f]">Keen</span>Keeeper</p>
  </div>
 
  <div className="navbar-end gap-2">
    <Link href={"/"}><li className="btn"><RiHome4Line/>Home</li></Link>
    <Link href={"/timeline"}><li className="btn"><RiTimeLine/>Timeline</li></Link>
    <Link href={"/stats"}><li className="btn"><TfiStatsUp />Stats</li></Link>
  </div>
</div>
    );
};

export default Navbar;