"use client"
import React from "react";
import Header from "./Header";
import Navbar from "./Navbar";
import { usePathname } from "next/navigation";

const Layout = ({ children }: { children: React.ReactNode }) => {
  const pathname = usePathname();
  const isLoginPage = pathname === "/auth/login"; // 로그인 페이지 여부 확인

  return (
    <div className="w-full max-w-[660px] mx-auto min-h-screen flex flex-col bg-white">
      {/* 로그인 페이지가 아니면 헤더와 네브바 표시 */}
      {!isLoginPage && <Header />}
      {!isLoginPage && <Navbar />}

      {/* 메인 컨텐츠 */}
      <main className="flex-1 px-4">{children}</main>
    </div>
  );
};

export default Layout;
