// 물품 목록을 모두 불러와서 페이지에 띄우기 -> productList.getProductList

import { fetchSectionListData } from "./module/fetch.js";
import { setButtonEvent, setFilterEvent } from "./module/productFilter.js";
import { getProductList } from "./module/productList.js";

const sectionInfoList = await fetchSectionListData();

const productList = sectionInfoList.reduce((prev, curr) => [...prev, ...curr.productList], []);
// newArray는 prev + curr.productList

const section = document.getElementsByTagName("section")[0];
const productListDOM = getProductList(productList);
section.appendChild(productListDOM);

setFilterEvent();
setButtonEvent(productList);