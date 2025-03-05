import Link from "next/link";
import React from "react";

function Nav() {
  return (
    <>
      <div className="flex justify-start gap-4 mt-4 mb-6 py-2 text-[17px]">
        <Link href="/">
          {" "}
          <h3 className="cursor-pointer font-normal">Home</h3>
        </Link>
        <Link href="/projects">
          <h3 className="cursor-pointer font-normal">Projects</h3>
        </Link>
        <Link href="/resume">
          <h3 className="cursor-pointer font-normal">Resume</h3>
        </Link>
        <Link href="/contact">
          <h3 className="cursor-pointer font-normal">Contact</h3>
        </Link>
      </div>
    </>
  );
}

export default Nav;
