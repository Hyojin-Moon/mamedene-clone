import React from "react";

interface CouponProps {
  coupon: {
    id: number;
    name: string;
    image: string;
  };
}

const CouponItem: React.FC<CouponProps> = ({ coupon }) => {
  return (
    <div className="flex flex-col items-center">
      <img src={coupon.image} alt={coupon.name} className="h-12 w-12 object-cover rounded-md" />
      <span className="text-xs mt-2">{coupon.name}</span>
    </div>
  );
};

export default CouponItem
