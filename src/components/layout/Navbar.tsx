import React from "react";
import Link from "next/link";

type NavItem = {
  label: string;
  href: string;
};

const NAV_ITEMS: NavItem[] = [
  { label: "홈", href: "/main" },
  { label: "내 주변", href: "/location" },
  { label: "스타일북", href: "/styles" },
  { label: "예약", href: "/reservations" },
  { label: "마이", href: "/user" },
];

const Navbar: React.FC = () => {
  return (
    <nav className="w-full bg-white border-b">
      <ul className="flex justify-around py-3">
        {NAV_ITEMS.map((item) => (
          <li key={item.href}>
            <Link href={item.href} className="text-gray-700 hover:text-black">
              {item.label}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
