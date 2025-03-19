import React from "react";

const Header = () => {
  return (
    <header className="flex items-center justify-center relative px-4 py-3">
      <img src="/header_logo.png" alt="로고" className="w-2/3 max-w-[120px]" />
      <button className="absolute right-4">검색</button>
    </header>
  );
};

export default Header;
