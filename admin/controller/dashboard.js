// dashboard.js
import ProductService from "../services/product-services.js";

const services = new ProductService();
const getEle = (id) => document.getElementById(id);

const loadDashboardStats = () => {
    services.getListProductApi()
        .then((result) => {
            const products = result.data;

            // Tổng số sản phẩm tồn kho
            const totalStock = products.length;

            // Tổng doanh thu (giả định = tổng giá tất cả sản phẩm)
            const totalRevenue = products.reduce((sum, p) => sum + Number(p.price || 0), 0);

            // Gán vào giao diện
            const stockEl = getEle("stockCount");
            const revTodayEl = getEle("revenueToday");
            const revMonthEl = getEle("revenueMonth");
            const revYearEl = getEle("revenueYear");

            if (stockEl) stockEl.innerHTML = `${totalStock}<span> Cái</span>`;
            if (revTodayEl) revTodayEl.innerHTML = `${totalRevenue.toLocaleString()}<span>đ</span>`;
            if (revMonthEl) revMonthEl.innerHTML = `${(totalRevenue * 3).toLocaleString()}<span>đ</span>`;
            if (revYearEl) revYearEl.innerHTML = `${(totalRevenue * 12).toLocaleString()}<span>đ</span>`;
        })
        .catch(console.log);
};

// Gọi hàm khi tải trang
loadDashboardStats();


const ctx = document.getElementById("myChart");

// Khởi tạo mảng doanh thu từng tháng (Tháng 7 -> Tháng 12)
const revenuePerMonth = [0, 0, 0, 0, 0, 0];
const monthLabels = ["Tháng 7", "Tháng 8", "Tháng 9", "Tháng 10", "Tháng 11", "Tháng 12"];

// Gọi API sản phẩm
services.getListProductApi()
.then((result) => {
    const products = result.data;

    // Giả lập: gán mỗi sản phẩm cho 1 tháng random từ 7 → 12
    products.forEach((p) => {
    const price = parseFloat(p.price || 0);
    const monthIndex = Math.floor(Math.random() * 6); // 0 -> 5 tương ứng tháng 7 -> 12
    revenuePerMonth[monthIndex] += price / 1_000_000; // Chuyển sang triệu VNĐ
    });

    // Vẽ biểu đồ
    new Chart(ctx, {
    type: "bar",
    data: {
        labels: monthLabels,
        datasets: [
        {
            label: "Doanh số (triệu VNĐ)",
            data: revenuePerMonth.map((v) => Math.round(v)),
            backgroundColor: "rgba(255, 255, 255, 0.3)",
            borderColor: "white",
            borderWidth: 2,
            borderRadius: 6,
            barThickness: 40,
        },
        ],
    },
    options: {
        responsive: true,
        maintainAspectRatio: false,
        scales: {
        x: {
            ticks: {
            color: "white",
            font: { size: 16 },
            },
            grid: { color: "rgba(255,255,255,0.1)" },
        },
        y: {
            beginAtZero: true,
            ticks: {
            color: "white",
            font: { size: 16 },
            },
            grid: { color: "rgba(255,255,255,0.1)" },
        },
        },
        plugins: {
        legend: {
            labels: {
            color: "white",
            font: { size: 16 },
            },
        },
        },
    },
    });
})
.catch(console.log);