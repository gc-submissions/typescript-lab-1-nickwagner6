export interface Product {
  name: string;
  price: number;
}

const products: Product[] = [
  {
    name: "penci",
    price: 2.0,
  },
  {
    name: "pen",
    price: 3.0,
  },
  {
    name: "marker",
    price: 4.0,
  },
  {
    name: "eraser",
    price: 1.0,
  },
];
export function calcAverageProductPrice(products: Product[]): number {
  let sum: number = 0;
  let count: number = products.length;
  products.forEach((item) => {
    sum = sum + item.price;
  });
  if (products.length === 0) {
    return 0;
  }
  return sum / count;
}
let averagePrice: number = calcAverageProductPrice(products);
console.log(averagePrice);
let emptyProducts: Product[] = [];
console.log(calcAverageProductPrice(emptyProducts));
