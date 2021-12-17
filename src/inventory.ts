import { Product } from "./products";

interface InventoryItem {
  product: Product;
  quantity: number;
}

const inventory: InventoryItem[] = [
  {
    product: { name: "motor", price: 10.0 },
    quantity: 10,
  },
  {
    product: { name: "sensor", price: 12.5 },
    quantity: 4,
  },
  {
    product: { name: "LED", price: 1.0 },
    quantity: 20,
  },
];

export function calcInventoryValue(inventory: InventoryItem[]): number {
  let total: number = 0;
  inventory.forEach((item) => {
    total += item.product.price * item.quantity;
  });
  return total;
}

let inventoryValue: number = calcInventoryValue(inventory);
console.log(inventoryValue);
// console.log(calcInventoryValue([]));
