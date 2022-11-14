import { appendChildrenList, makeDOMwithProperties } from "./utils/dom.js";

{
  /* <div class="product-card">
  <div class="product-image-con">
    <img src="public/assets/파프리카.jpg" alt="파프리카 2입" />
    <button type="button" class="cart-toggle-btn">
      <img src="public/assets/cart.png" class="cart-image" />
    </button>
  </div>
  <div class="product-description">
    <div class="product-name">파프리카 2입</div>
    <div class="product-price-con">
      <div class="product-discount-percent">20%</div>
      <div class="product-price">2,000원</div>
    </div>
    <div class="product-original-price">2,500원</div>
  </div>
</div>; */
}

const sectionDOM = document.getElementsByTagName("section")[0];

const productCard = makeDOMwithProperties("div", {
  className: "product-card",
});

/* --- product-image-con --- */
const productImageCon = makeDOMwithProperties("div", {
  className: "product-image-con",
});
const productImage = makeDOMwithProperties("img", {
  src: "./public/assets/파프리카.jpg",
  alt: "파프리카",
});
const cartToggleBtn = makeDOMwithProperties("button", {
  className: "cart-toggle-btn",
  type: "button",
});
const cartImage = makeDOMwithProperties("img", {
  className: "cart-image",
  src: "./public/assets/cart.png",
});

cartToggleBtn.appendChild(cartImage);
// Node.appendChild
// Node.insertBefore

appendChildrenList(productImageCon, [productImage, cartToggleBtn]);
/* --- // product-image-con --- */

/*  -- product-description --- */
const productDescription = makeDOMwithProperties("div", {
  className: "product-description",
});

const productName = makeDOMwithProperties("div", {
  className: "product-name",
  innerHTML: "파프리카",
});

const productPriceContainer = makeDOMwithProperties("div", {
  className: "product-price-con",
});

const productDiscount = makeDOMwithProperties("div", {
  className: "product-discount-percent",
  innerHTML: "20%",
});

const productPrice = makeDOMwithProperties("div", {
  className: "pruduct-discount-percent",
  innerHTML: "2000원",
});

const productOriginalPrice = makeDOMwithProperties("div", {
  className: "product-original-price",
  innerHTML: "2500원",
});

appendChildrenList(productPriceContainer, [productDiscount, productPrice]);
appendChildrenList(productDescription, [productName, productPriceContainer, productOriginalPrice]);

/*  -- // product-description --- */

appendChildrenList(productCard, [productImageCon, productDescription]);

sectionDOM.appendChild(productCard);
