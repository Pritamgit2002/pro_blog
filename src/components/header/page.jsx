import Link from "next/link";
import React from "react";

const Header = () => {
  return (
    <div className="w-full  py-6 border-b-2 border-[#414750]">
      <Link>Home</Link>
      <Link>All Blogs</Link>
    </div>
  );
};

export default Header;
