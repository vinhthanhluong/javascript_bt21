import Product from "../js/controller/product.js";
import CartItem from "./controller/cart-item.js";
import ProductServices from "../js/services/product-services.js";
import CartList from "./controller/cart-list.js";

const getEle = (id) => document.getElementById(id);

const servicesPro = new ProductServices();
const cartList = new CartList();

const formatMoney = (val) => {
  return new Intl.NumberFormat("vi-VN", {
    style: "currency",
    currency: "VND",
  })
    .format(val)
    .replace("₫", "đ")
    .trim();
};

const renderListProduct = (data) => {
  return data
    .map((product) => {
      const img = product.img || "https://placehold.jp/600x600.png";
      return `<div class="product-item">
                <p class="product-news">${product.type}</p>
                <div class="product-img">
                    <img src="${img}" alt="${
        product.name
      }" onerror="this.onerror=null;this.src='https://placehold.jp/600x600.png';">
                </div>
                <div class="product-txt">
                    <p class="product-tt">${product.name}</p>
                    <p class="product-price"><span>${formatMoney(
                      product.price
                    )}</span></p>
                    <div class="product-if">
                        <dl>
                            <dt>Màn hình:</dt>
                            <dd>${product.screen}</dd>
                        </dl>
                        <dl>
                            <dt>Camera sau:</dt>
                            <dd>${product.backCamera}</dd>
                        </dl>
                        <dl>
                            <dt>Camera trước:</dt>
                            <dd>${product.frontCamera}</dd>
                        </dl>
                    </div>
                    <p class="product-desc">${product.desc}</p>
                    <div class="product-act">
                        <div class="product-rating">
                            <i class="fa fa-star"></i>
                            <i class="fa fa-star"></i>
                            <i class="fa fa-star"></i>
                            <i class="fa fa-star"></i>
                            <i class="fa fa-star"></i>
                        </div>
                        <div class="product-heart"><i class="fa fa-heart-o" aria-hidden="true"></i></div>
                    </div>
                    <div class="product-ic" onclick="onCart(${product.id})">
                        <i class="fa fa-shopping-cart" aria-hidden="true"></i>
                    </div>
                </div>
            </div>`;
    })
    .join(" ");
};

const showListProduct = () => {
  const promise = servicesPro.getListProduct();

  promise
    .then((rs) => {
      document.querySelector(".product-load").style.display = "block";
      getEle("loadListProduct").innerHTML = renderListProduct(rs.data);
      document.querySelector(".product-load").style.display = "none";
    })
    .catch((er) => {
      console.log(er);
      document.querySelector(".product-load").style.display = "none";
    });
};
showListProduct();

// Select Product
getEle("typeProduct").onchange = function () {
  const promise = servicesPro.getListProduct();
  promise
  .then((rs) => {
      if(this.value == 'all') return getEle("loadListProduct").innerHTML = renderListProduct(rs.data);

      const arrSelect = rs.data.filter(item => item.type.toLowerCase() == this.value) ;
      getEle("loadListProduct").innerHTML = renderListProduct(arrSelect);
    })
    .catch((er) => {
    });
};

// Cart
document.querySelector(".header-rt a").onclick = function () {
  document.querySelector(".cart").classList.add("active");
};
const setLocal = (val) => {
  localStorage.setItem("CART_LIST", JSON.stringify(val));
};
const getLocal = () => {
  return JSON.parse(localStorage.getItem("CART_LIST")) || [];
};

const renderProductCart = (data) => {
  getEle("loadCartProduct").innerHTML = data
    .map((product) => {
      const img = product.img || "https://placehold.jp/600x600.png";
      return `<li>
                <div class="cart-img">
                  <img src="${img}" alt="${
        product.name
      }" onerror="this.onerror=null;this.src='https://placehold.jp/600x600.png';">
                </div>
                <div class="cart-txt">
                    <p class="cart-tt">${product.name}</p>
                    <p class="cart-price"><span>${formatMoney(
                      product.price
                    )}</span></p>
                    <div class="cart-quality">
                        <span class="cart-minus" onclick="onMinus(${
                          product.id
                        })">-</span>
                        <input type="text" class="fcontrol" value="${
                          product.quality || 1
                        }" min="1">
                        <span class="cart-plus" onclick="onPlus(${
                          product.id
                        })">+</span>
                    </div>
                    <p class="cart-delete" onclick="onDelete(${
                      product.id
                    })"><i class="fa fa-trash-o" aria-hidden="true"></i></p>
                </div>
            </li>`;
    })
    .join(" ");
};

const showProductCart = () => {
  cartList.arr = getLocal();
  renderProductCart(cartList.arr);

  const total = cartList.arr.reduce(
    (total, item) => total + item.price * (item.quality || 1),
    0
  );

  document.querySelector(".cart-tl-sum span").innerHTML = formatMoney(total);
};
showProductCart();

const onCart = (id) => {
  document.querySelector(".cart").classList.add("active");
  const promise = servicesPro.getIdProduct(id);

  promise
    .then((rs) => {
      const item = cartList.getIdProduct(id);
      // const isCart = cartList.arr.filter((el) => el.id == item.id);
      // console.log(!!isCart);
      if (item) {
        console.log("true");

        let qualityNew = item.quality + 1;
        cartList.updateQuality(id, qualityNew);
        setLocal(cartList.arr);
        showProductCart();
        return;
      }

      const dataNew = new CartItem(
        rs.data.id,
        rs.data.name,
        rs.data.price,
        rs.data.img,
        1
      );
      cartList.addProduct(dataNew);
      setLocal(cartList.arr);
      showProductCart();
    })
    .catch((er) => {
      console.log(er);
    });
};
window.onCart = onCart;

document.querySelector(".cart .cart-close").onclick = function () {
  document.querySelector(".cart").classList.remove("active");
};

const onDelete = (id) => {
  cartList.removeProduct(id);
  setLocal(cartList.arr);
  showProductCart();
};
window.onDelete = onDelete;

const onPlus = (id) => {
  const item = cartList.getIdProduct(id);

  let qualityNew = item.quality + 1;
  cartList.updateQuality(id, qualityNew);
  setLocal(cartList.arr);
  showProductCart();
};
window.onPlus = onPlus;

const onMinus = (id) => {
  const item = cartList.getIdProduct(id);
  if (item.quality < 1) return;

  let qualityNew = item.quality - 1;
  cartList.updateQuality(id, qualityNew);
  setLocal(cartList.arr);
  showProductCart();
};
window.onMinus = onMinus;
