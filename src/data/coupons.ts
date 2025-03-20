export type Coupon = {
  id: number;
  name: string;
  image: string;
};

export const coupons: Coupon[] = [
  { id: 1, name: "웰컴쿠폰", image: "/image/welcome.png" },
  { id: 2, name: "첫방문할인", image: "/image/firstdiscount.png" },
  { id: 3, name: "타임세일", image: "/image/timesale.png" },
  { id: 4, name: "스타일TIP", image: "/image/styletip.png" },
];
