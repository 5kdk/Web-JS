import { getCartInfo } from "./cartToggleButton.js";

const DELIVERY_FREE_PRICE = 20000;
const DELIVERY_PRICE = 3000;

{
  /* <div id="cart-pay-container">
  <ul>
    <li>
      <span class="cart-pay-info-title">상품 금액</span>
      <span id="original-price" class="cart-pay-info-value">
        38,000
      </span>
    </li>
    <li>
      <span class="cart-pay-info-title">할인 금액</span>
      <span id="discount-price" class="cart-pay-info-value">
        0
      </span>
    </li>
    <li>
      <span class="cart-pay-info-title">배송비</span>
      <span id="delivery-price" class="cart-pay-info-value">
        +3,000
      </span>
      <span id="delivery-description">20,000원 이상 주문 시 무료배송</span>
    </li>
    <li>
      <span class="cart-pay-info-title">결제예정금액</span>
      <span id="total-price" class="cart-pay-info-value">
        41,000
      </span>
    </li>
  </ul>
  <button type="button">결제하기</button>
</div>; */
}

// {
//   "id": 1,
//   "imgSrc": "/js_basic_market/public/assets/파프리카.jpg",
//   "name": "파프리카",
//   "discountPercent": 20,
//   "price": 2000,
//   "originalPrice": 2500
// }

const originalPriceDOM = document.getElementById("original-price");
const discountPriceDOM = document.getElementById("discount-price");
const deliveryPriceDOM = document.getElementById("delivery-price");
const totallPriceDOM = document.getElementById("total-price");

export const setPayInfo = () => {
  // 1. 장바구니에서 물품 정보 얻어오기
  // 2. 물품 정보들을 순회하면서 총 가격, 할인된 가격, 배송비, 결제 금액을 계산하기
  // 3. 2번에서 계산된 금액들을 DOM.innerHTML로 할당하기

  const cartInfoList = getCartInfo();
  // let originalPrice = 0;
  // let discountPrice = 0;
  let deliveryPrice = 0; // 2만원 미만 구매 -> 3000, 이상 구매 -> 0
  let totalPrice = 0;

  const { originalPrice, discountPrice } = cartInfoList.reduce(
    (prev, curr) => ({
      originalPrice: prev.originalPrice + curr.originalPrice,
      discountPrice: prev.discountPrice + (curr.originalPrice - curr.price),
    }),
    {
      originalPrice: 0,
      discountPrice: 0,
    }
  );

  // cartInfoList.forEach((cartInfo) => {
  //   originalPrice += cartInfo.originalPrice;
  //   discountPrice += cartInfo.originalPrice - cartInfo.price;
  // });

  const payPrice = originalPrice - discountPrice;

  if (payPrice >= DELIVERY_FREE_PRICE) {
    deliveryPrice = 0;
  } else {
    deliveryPrice = DELIVERY_PRICE;
  }
  totalPrice = payPrice + deliveryPrice;

  originalPriceDOM.innerText = `${originalPrice.toLocaleString()}원`;
  discountPriceDOM.innerText = discountPrice ? `-${discountPrice.toLocaleString()}원` : "0원"; // 할인금액 (-3000원) (0원)
  deliveryPriceDOM.innerHTML = deliveryPrice ? `+${deliveryPrice.toLocaleString()}원` : "0원";
  totallPriceDOM.innerHTML = `${totalPrice.toLocaleString()}원`;

  // 할인된 가격 -> 원래 가격 - 판매 가격
};
