
import { useRouter } from "next/router";
import React from "react";

const SearchByLocation = () => {
  const router = useRouter();
  const { location } = router.query;

  return (
    <div>
      <h1>{location ? `${location} 주변 검색 결과` : "로딩 중..."}</h1>
      {/* 위치 기반 검색 결과 표시 */}
    </div>
  );
};

export default SearchByLocation;