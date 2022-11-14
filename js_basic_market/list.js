import { getProductCard } from "./module/productCard.js";

const sectionDOM = document.getElementsByTagName("section")[0];

const productCard = getProductCard({
  id: 1,
  imgSrc: "/js_basic_market/public/assets/파프리카.jpg",
  name: "파프리카",
  discountPercent: 20,
  price: 2000,
  originalPrice: 2500,
});

const productCard2 = getProductCard({
  id: 2,
  imgSrc: "/js_basic_market/public/assets/당근.jpg",
  name: "친환경 당근 400g",
  discountPercent: 33,
  price: 2000,
  originalPrice: 3000,
});

sectionDOM.appendChild(productCard);
sectionDOM.appendChild(productCard2);
