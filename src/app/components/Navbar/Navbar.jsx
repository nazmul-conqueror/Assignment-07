"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { RiHome4Line, RiTimeLine } from "react-icons/ri";
import { TfiStatsUp } from "react-icons/tfi";

const Navbar = () => {
  const pathname = usePathname();

  const linkClass = (path) =>
    `btn ${pathname === path ? "bg-[#244d3f] text-white" : ""}`;

  return (
    <div className="navbar bg-base-100 shadow-sm flex-wrap">
      <div className="navbar-start">
        <p className="text-xl md:text-xl font-bold">
          <span className="text-[#244d3f]">Keen</span>Keeeper
        </p>
      </div>

      <div className="navbar-end gap-2 flex-wrap">
        <Link href="/" className={linkClass("/")}>
          <RiHome4Line /> Home
        </Link>

        <Link href="/timeline"
          className={linkClass("/timeline")}>
          <RiTimeLine /> Timeline

        </Link>

        <Link href="/stats"
          className={linkClass("/stats")}>
          <TfiStatsUp /> Stats

        </Link>
      </div>
    </div>
  );
};

export default Navbar;