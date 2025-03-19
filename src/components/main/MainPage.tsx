import React from "react";
import Layout from "../layout/Layout";
import { categories } from "@/data/categories";
import CategoryItem from "./CategoryItem";
import { coupons } from "@/data/coupons";
import CouponItem from "./CouponItem";

const MainPage = () => {
  return (
    <Layout>
      <div className="mt-6">
        <h1 className="m-4 font-bold text-2xl">강남구 역삼동</h1>
        {/* 검색 바 */}
        <div className="flex justify-center">
          <input
            type="text"
            placeholder="검색어를 입력하세요"
            className="w-10/12 px-2 py-1.5 border-2 border-violet-500 rounded-full"
          />
        </div>

        {/* 카테고리 (4개씩 2줄) */}
        <div className="grid grid-cols-4 gap-x-2 gap-y-4 mt-4">
          {categories.map((category) => (
            <CategoryItem key={category.id} category={category} />
          ))}
        </div>

        {/* 쿠폰 슬릭 메뉴 (추후 추가) */}
        <div className="mt-4 flex items-center justify-center rounded-md">
          <img src="/coupon1.png" alt="쿠폰1" />
        </div>

        {/* 쿠폰 카테고리 */}
        <div className="grid grid-cols-4 gap-x-2 gap-y-4 mt-4">
          {coupons.map((coupon) => (
            <CouponItem key={coupon.id} coupon={coupon} />
          ))}
        </div>

        {/* 게시판 링크 메뉴 (추후 추가) */}
        <div className="mt-4 flex flex-col gap-2">
          {["공지사항", "이벤트", "FAQ", "문의하기"].map((text, idx) => (
            <div key={idx} className="p-3 bg-gray-100 rounded-md">
              {text}
            </div>
          ))}
        </div>
      </div>
    </Layout>
  );
};

export default MainPage;
