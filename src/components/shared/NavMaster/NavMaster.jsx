'use client'
import { useState } from "react";
import Link from "next/link";
import { IoMenu } from "react-icons/io5"; 

import "./NavMaster.styles.css";

export default function NavMaster() {
  const [showMenu, setShowMenu] = useState(false);

  const toggleMenu = () => {
    setShowMenu((prevShowMenu) => !prevShowMenu);
  };

  return (
    <>
    <nav>
      <IoMenu className={`menu-toggle ${showMenu ? "active" : ""}`} onClick={toggleMenu} />
      <div className={`menu-items ${showMenu ? "show" : ""}`}>
        <Link href="/notes">My Notes</Link>
        <Link href="/archived">Archived Notes</Link>
      </div>
    </nav>
    </>
  );
}
