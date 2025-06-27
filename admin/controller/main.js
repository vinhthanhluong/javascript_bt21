// main.js
import ProductService from "../services/product-services.js";
import Products from "../model/products.js";
const services = new ProductService();

const getEle = (id) => document.getElementById(id);

const getListProduct = () => {
    // getEle("loader").style.display = "block";
    const promise = services.getListProductApi();
    promise
        .then((result) => {
        // Loader hide
            renderListProduct(result.data);
            // getEle("loader").style.display = "none";
        })
        .catch((error) => {
            // getEle("loader").style.display = "none";
            console.log(error);
        });

    services.getListProductApi()
    .then((result) => {
        renderListProduct(result.data);
        // getEle("loader").style.display = "none";
    })
    .catch((error) => {
        // getEle("loader").style.display = "none";
        console.log(error);
    });
};

const modal = document.getElementById('productModal');
const form = document.getElementById('productForm');

const closeModal = () => {
    modal.classList.remove('show');
    form.reset();
    getEle('idProduct').value = '';
};

const closeModalBtn = document.getElementById('closeModalBtn');
if (closeModalBtn) {
    closeModalBtn.onclick = closeModal;
}
// window.onclick = (e) => e.target == modal && closeModal();


const openModal = () => modal.classList.add('show');

const getValue = () => {
    const nameProduct = getEle("nameProduct").value;
    const priceProduct = getEle("priceProduct").value;
    const screenProduct = getEle("screenProduct").value;
    const backCamera = getEle("screenProduct").value;
    const frontCamera = getEle("frontCamera").value;
    const imgProduct = getEle("imgProduct").value;
    const descProduct = getEle("descProduct").value;
    const typeProduct = getEle("typeProduct").value;

    const product = new Products(
            '',
            nameProduct,
            priceProduct,
            screenProduct,
            backCamera,
            frontCamera,
            imgProduct,
            descProduct,
            typeProduct
    );
    return product;
};

const validateForm = () => {
    let isValid = true;

    const fields = [
        'nameProduct',
        'priceProduct',
        'screenProduct',
        'backCamera',
        'frontCamera',
        'imgProduct',
        'descProduct',
        'typeProduct',
    ];

    fields.forEach((fieldId) => {
        const input = getEle(fieldId);
        const errorSpan = getEle(`error__${fieldId}`);
        if (!input.value.trim()) {
            errorSpan.innerHTML = 'Trường này không được để trống';
            isValid = false;
        } else {
            errorSpan.innerHTML = '';
        }
    });

    return isValid;
};

// Thêm sản phẩm
const onAddProduct = () => {
    if (!validateForm()) return;
    const nameProduct = getEle('nameProduct').value;
    const priceProduct = getEle('priceProduct').value;
    const screenProduct = getEle('screenProduct').value;
    const backCamera = getEle('backCamera').value;
    const frontCamera = getEle('frontCamera').value;
    const imgProduct = getEle('imgProduct').value;
    const descProduct = getEle('descProduct').value;
    const typeProduct = getEle('typeProduct').value;
    const product = {
        name: nameProduct,
        price: priceProduct,
        screen: screenProduct,
        backCamera: backCamera,
        frontCamera: frontCamera,
        img: imgProduct,
        desc: descProduct,
        type: typeProduct
    };
    const promise = services.addProductApi(product);
    promise
        .then((result) => {
            console.log(result.data);
            getListProduct();
            getEle('formAddProduct').reset();
        })
        .catch((error) => {
            console.log(error);
        });
        closeModal();
    showNotification(nameProduct);   
}
window.onBtnAdd = () => {
    document.getElementsByClassName("modal__title")[0].innerHTML = "Thêm sản phẩm";
    const btnAdd = `<button class="btn__save" onclick="onAddProduct()">Thêm</button>`;
    document.getElementsByClassName("modal__footer")[0].innerHTML = btnAdd;
    openModal();
}
window.onAddProduct = onAddProduct;
// End thêm sản phẩm


// Xóa sản phẩm
let productIdToDelete = null;
window.onDeleteProduct = (id) => {
    productIdToDelete = id;
    getEle("confirmDeleteModal").classList.add("show");   
};

const closeConfirmModal = () => {
    getEle("confirmDeleteModal").classList.remove("show");
    productIdToDelete = null;
};
window.closeConfirmModal = closeConfirmModal;

getEle("confirmDeleteBtn").onclick = () => {
    if (productIdToDelete) {
        services.deleteProductApi(productIdToDelete)
            .then(() => {
                getListProduct();
                closeConfirmModal();
            })
            .catch(console.log);
    }
};
// End xóa sản phẩm



// Sửa sản phẩm - đổ dữ liệu vào form
window.onEditProduct = (id) => {
    services.getListProductApi()
        .then((result) => {
            const product = result.data.find((item) => item.id == id);
            if (product) {
                // getEle('idProduct').value = product.id;
                getEle('nameProduct').value = product.name;
                getEle('priceProduct').value = product.price;
                getEle('screenProduct').value = product.screen;
                getEle('backCamera').value = product.backCamera;
                getEle('frontCamera').value = product.frontCamera;
                getEle('imgProduct').value = product.img;
                getEle('descProduct').value = product.desc;
                getEle('typeProduct').value = product.type;
                openModal();
            }
        })
        .catch(console.log);

    document.getElementsByClassName("modal__title")[0].innerHTML = "Cập nhật sản phẩm";
    const btnUpdate = `<button class="btn__save" onclick="onUpdateProduct('${id}')">Cập nhật</button>`;
    document.getElementsByClassName("modal__footer")[0].innerHTML = btnUpdate;
};
window.onEditProduct = onEditProduct;
// End sửa sản phẩm - đổ dữ liệu vào form



// Cập nhật sản phẩm
const onUpdateProduct = (id) => {
    if (!validateForm()) return;
    const product = getValue();
    product.id = id;

    const promise = services.updateProductApi(product);
    promise
        .then((result) => {
            document.getElementsByClassName("close-btn")[0].click();
            getListProduct();
        })
        .catch((error) => {
            console.log(error);
        });
};
window.onUpdateProduct = onUpdateProduct;
// End cập nhật sản phẩm



// Tìm kiếm
let debounceTimer;
const searchInput = document.getElementById("mysearch");
searchInput.addEventListener("input", function () {
    clearTimeout(debounceTimer);
    debounceTimer = setTimeout(() => {
        const keyword = this.value.toLowerCase();
        services.getListProductApi()
            .then((result) => {
                const filtered = result.data.filter(product => {
                    // Nếu muốn tìm kiếm thêm theo thuộc tính khác thì thêm vào ví dụ muốn tìm theo screen thì => ${product.screen}
                    const combinedValues = `
                        ${product.name}
                    `.toLowerCase();
                    return combinedValues.includes(keyword);
                });

                renderListProduct(filtered);
            })
            .catch(console.log);
    }, 300);
});
// End tìm kiếm

// Hiển thị danh sách sản phẩm
// Format đơn vị tiền
const formatCurrencyVND = () => {
    document.querySelectorAll('.money').forEach((el) => {
        const number = parseFloat(el.textContent.replace(/[^\d]/g, ''));
        if (!isNaN(number)) {
            el.textContent = number.toLocaleString('vi-VN', {
                style: 'currency',
                currency: 'VND'
            });
        }
    });
};

let productData = [];
const renderListProduct = (data) => {
    productData = data;
    const tbody = document.querySelector('#tblDanhSachSP');
    let contentHTML = '';
    data.forEach((product) => {
        contentHTML += `
            <tr>
                <td><p class="name">${product.name}</p></td>
                <td><p class="money">${product.price}</p></td>
                <td><p class="screen">${product.screen}</p></td>
                <td><p class="backCamera">${product.backCamera}</p></td>
                <td><p class="frontCamera">${product.frontCamera}</p></td>
                <td><p class="image"><img src="${product.img}" width="50" alt=""></p></td>
                <td><p class="desc">${product.desc}</p></td>
                <td><p class="type">${product.type}</p></td>
                <td class="sticky-col">
                    <div class="action">
                        <button class="edit" onclick="onEditProduct('${product.id}')"><ion-icon name="create-outline"></ion-icon></button>
                        <button class="delete" onclick="onDeleteProduct('${product.id}')"><ion-icon name="trash-outline"></ion-icon></button>
                    </div>
                </td>
            </tr>
        `;
    });
    tbody.innerHTML = contentHTML;
    // Format VND sau khi render
    formatCurrencyVND();
};
getListProduct();

// Sắp xếp 
const sortSelect = getEle("sortSelect");

if (sortSelect) {
    sortSelect.addEventListener("change", () => {
        const value = sortSelect.value;
        let sorted = [...productData];
        switch (value) {
        case "name_asc":
            sorted.sort((a, b) => a.name.localeCompare(b.name));
            break;
        case "name_desc":
            sorted.sort((a, b) => b.name.localeCompare(a.name));
            break;
        case "price_asc":
            sorted.sort((a, b) => parseFloat(a.price) - parseFloat(b.price));
            break;
        case "price_desc":
            sorted.sort((a, b) => parseFloat(b.price) - parseFloat(a.price));
            break;
        default:
            return renderListProduct(productData);
        }
        renderListProduct(sorted);
    });
}
// End Sắp xếp


// Tạo thông báo khi add sản phẩm
let notificationCount = 0;
const notifCount = document.getElementById("notifCount");
const notifList = document.getElementById("notifList");
const notifDropdown = document.getElementById("notifDropdown");
const notifIcon = document.getElementById("notification");

function showNotification(productName) {
    notificationCount++;
    const stored = localStorage.getItem("notifications");
    let notifications = stored ? JSON.parse(stored) : [];
    const message = `Đã thêm sản phẩm: ${productName}`;
    notifications.unshift(message);
    localStorage.setItem("notifications", JSON.stringify(notifications));
    notifCount.innerText = notificationCount;
    notifCount.style.display = "inline-block";
    notifIcon.classList.add("active");
    const li = document.createElement("li");
    li.innerText = message;
    notifList.prepend(li);
}

function loadNotificationsFromStorage() {
    const stored = localStorage.getItem("notifications");
    if (!stored) return;
    const notifications = JSON.parse(stored);
    notificationCount = notifications.length;
    if (notificationCount > 0) {
        notifCount.innerText = notificationCount;
        notifCount.style.display = "inline-block";
        notifIcon.classList.add("active");
        notifications.forEach((msg) => {
            const li = document.createElement("li");
            li.innerText = msg;
            notifList.appendChild(li);
        });
    }
}

loadNotificationsFromStorage();

notifIcon.addEventListener("click", () => {
    const isVisible = notifDropdown.style.display === "block";
    notifDropdown.style.display = isVisible ? "none" : "block";
    if (!isVisible) {
        notifCount.style.display = "none";
        notificationCount = 0;
        notifIcon.classList.remove("active");
        localStorage.removeItem("notifications");
    }
});

document.addEventListener("click", function (e) {
    const isNotifIcon = notifIcon.contains(e.target);
    const isDropdown = notifDropdown.contains(e.target);

    if (!isNotifIcon && !isDropdown) {
        notifDropdown.style.display = "none";
    }
});
// End tạo thông báo khi thêm sản phảm