import React from "react";
import Link from "next/link";

export default function Navbar() {
  return (
    <nav>
      <ul>
        <Link href="/blog">Blog</Link>
      </ul>
    </nav>
  );
}
