export type Category = {
  id: number;
  name: string;
  image: string;
};

export const categories: Category[] = [
  { id: 1, name: "헤어샵", image: "/image/hairshop.png" },
  { id: 2, name: "네일샵", image: "/image/nailshop.png" },
  { id: 3, name: "왁싱", image: "/image/waxing.png" },
  { id: 4, name: "눈썹&속눈썹", image: "/image/eyebrow.png" },
  { id: 5, name: "에스테틱", image: "/image/estatic.png" },
  { id: 6, name: "디자이너", image: "/image/designer.png" },
  { id: 7, name: "바버샵", image: "/image/barber.png" },
  { id: 8, name: "당일예약", image: "/image/reserve.png" },
];
