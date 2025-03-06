"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

function Nav() {
  const handlePrint = () => {
    window.print();
  };
  const curentPathname = usePathname();
  return (
    <aside className="">
      <nav className="flex scroll-pr-6 relative md:overflow-auto  justify-between items-center">
        <div className="flex justify-start gap-4 mt-4 mb-6 py-2 text-[17px]">
          <Link href="/">
            {" "}
            <h3 className="cursor-pointer font-sans text-white/85 hover:text-white">
              Home
            </h3>
          </Link>
          <Link href="/projects">
            <h3 className="cursor-pointer font-normal text-white/85 hover:text-white">
              Projects
            </h3>
          </Link>
          <Link href="/resume">
            <h3 className="cursor-pointer font-normal text-white/85 hover:text-white">
              Resume
            </h3>
          </Link>
          <Link href="/contact">
            <h3 className="cursor-pointer font-normal text-white/85 hover:text-white">
              Contact
            </h3>
          </Link>
        </div>
        <div>
          {curentPathname === "/resume" && (
            <div
              className="flex gap-1.5 hover:cursor-pointer font-sans text-white hover:bg-white/5 rounded  border-solid border-1 p-1 mr-4"
              onClick={handlePrint}
            >
              Print <span>🖨️</span>
            </div>
          )}
        </div>
      </nav>
    </aside>
  );
}

export default Nav;
