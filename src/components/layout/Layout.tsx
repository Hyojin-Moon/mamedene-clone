import React from "react";
import Header from "./Header";
import Navbar from "./Navbar";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="w-full max-w-[660px] mx-auto min-h-screen flex flex-col bg-white">
      {/* 헤더 */}
      <Header />

      {/* 네비게이션 바 */}
      <Navbar />

      {/* 메인 컨텐츠 */}
      <main className="flex-1 px-4">{children}</main>
    </div>
  );
};

export default Layout;
