import React from "react";
import Layout from "../../components/layout/Layout";

const SearchPage = () => {
  return (
    <Layout>
      <div className="p-4">
        {/* 검색창 */}
        <div className="relative w-full">
          <input
            type="text"
            placeholder="메뉴를 검색해보세요."
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none"
          />
        </div>

        {/* 인기 검색어 */}
        <div className="mt-6">
          <h2 className="text-lg font-semibold">인기 검색어</h2>
          <ul className="grid grid-rows-5 grid-flow-col gap-2 mt-2 text-gray-600">
            {[
              "히피펌",
              "리안헤어",
              "다운펌",
              "에이바헤어",
              "살롱드라피네",
              "매직",
              "준오헤어",
              "볼륨매직",
              "박승철헤어스투디오",
              "뿌리염색",
            ].map((keyword, index) => (
              <li key={index} className="text-sm">
                {index + 1}. {keyword}
              </li>
            ))}
          </ul>
        </div>

        {/* 스타일 추천 */}
        <div className="mt-6">
          <h2 className="text-lg font-semibold">지금 가장 많이 찾는 스타일은?</h2>
          <div className="flex gap-2 mt-2 overflow-auto">
            {["히피펌", "볼륨매직", "레이어드컷", "S컬펌"].map((style, index) => (
              <div key={index} className="px-4 py-2 bg-purple-100 rounded-lg text-sm">
                {style}
              </div>
            ))}
          </div>
        </div>

        {/* 브랜드 헤어샵 */}
        <div className="mt-6">
          <h2 className="text-lg font-semibold">브랜드 헤어샵</h2>
          <div className="flex gap-4 mt-2 overflow-auto">
            {[
              "에이바헤어",
              "리안헤어",
              "박승철헤어",
              "이철헤어커커",
              "준오헤어",
              "VOG hair",
              "XEO",
            ].map((brand, index) => (
              <div
                key={index}
                className="w-16 h-16 bg-gray-200 rounded-full flex items-center justify-center text-xs"
              >
                {brand}
              </div>
            ))}
          </div>
        </div>

        {/* 브랜드 네일샵 */}
        <div className="mt-6">
          <h2 className="text-lg font-semibold">브랜드 네일샵</h2>
          <div className="flex gap-4 mt-2 overflow-auto">
            {["포쉬네일", "네일끌리다", "골든네일"].map((brand, index) => (
              <div
                key={index}
                className="w-16 h-16 bg-gray-200 rounded-full flex items-center justify-center text-xs"
              >
                {brand}
              </div>
            ))}
          </div>
        </div>

        {/* 브랜드 에스테틱 */}
        <div className="mt-6">
          <h2 className="text-lg font-semibold">브랜드 네일샵</h2>
          <div className="flex gap-4 mt-2 overflow-auto">
            {[
              "에스테티아",
              "결이고은",
              "끌리메",
              "가인미가",
              "더맑은스킨",
              "세레니끄",
              "왁싱랩",
            ].map((brand, index) => (
              <div
                key={index}
                className="w-16 h-16 bg-gray-200 rounded-full flex items-center justify-center text-xs"
              >
                {brand}
              </div>
            ))}
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default SearchPage;
