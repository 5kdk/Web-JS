import { getProductList } from "./module/productList.js";
import { getProductSection } from "./module/productSection.js";

const productSection = getProductSection('인기 상품', [
  {
    id: 3,
    imgSrc: "/js_basic_market/public/assets/바나나.jpg",
    name: "바나나 1.3kg",
    discountPercent: 10,
    price: 11700,
    originalPrice: 13000,
  },
  {
    id: 4,
    imgSrc: "/js_basic_market/public/assets/원두.jpg",
    name: "원두 1kg",
    discountPercent: 10,
    price: 9000,
    originalPrice: 1000,
  },
  {
    id: 5,
    imgSrc: "/js_basic_market/public/assets/아보카도.jpg",
    name: "아보카도",
    discountPercent: 20,
    price: 16000,
    originalPrice: 20000,
  },
]);

document.body.appendChild(productSection);
