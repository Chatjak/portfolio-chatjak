"use client";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { usePathname } from "next/navigation";

export default function Topbar() {
  const pathname = usePathname();
  console.log(pathname);

  return (
    <nav className="topbar">
      <div className="topbar__nav">
        <Link href={"/"}>
          <Image src={"/favicon.ico"} width={32} height={32} alt="logo" />
        </Link>
        <ul className="topbar__list">
          <li>
            <Link
              href={"/about"}
              className={`topbar__item ${
                pathname === "/about" ? "border-b-4 border-b-amber-400" : ""
              }`}
            >
              About
            </Link>
          </li>
          <li>
            <Link href={"/work"} className="topbar__item">
              Work
            </Link>
          </li>
          <li>
            <Link href={"/contact"} className="topbar__item">
              Contact
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}
