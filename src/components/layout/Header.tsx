import Link from "next/link";
import React from "react";

const Header = () => {
  return (
    <header className="flex items-center justify-center relative px-4 py-3">
      <img src="/image/header_logo.png" alt="로고" className="w-2/3 max-w-[120px]" />
      <Link href="/search" >
      <button className="absolute right-4">검색</button>
      </Link>
    </header>
  );
};

export default Header;
