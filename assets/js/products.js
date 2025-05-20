// Hàm để format giá tiền
function formatPrice(price) {
  return new Intl.NumberFormat("vi-VN", {
    style: "currency",
    currency: "VND",
  }).format(price);
}

// Hàm tạo HTML cho một sản phẩm
function createProductCard(product) {
  return `
    <a href="product-details-1.html?id=${product.id}" class="product-card">
      <div class="product-image">
        <img src="${product.images[0]}" alt="${product.name}" loading="lazy">
        ${
          product.salePrice
            ? `<span class="sale-badge">-${Math.round(
                (1 - product.salePrice / product.price) * 100
              )}%</span>`
            : ""
        }
      </div>
      <div class="product-info">
        <div>
          <h3 class="product-name">${product.name}</h3>
          <div class="product-price">
            ${
              product.salePrice
                ? `<span class="original-price">${formatPrice(
                    product.price
                  )}</span>
                  <span class="sale-price">${formatPrice(
                    product.salePrice
                  )}</span>`
                : `<span class="price">${formatPrice(product.price)}</span>`
            }
          </div>
        </div>
        <div class="product-rating">
          <span class="stars">${"★".repeat(
            Math.floor(product.rating)
          )}${"☆".repeat(5 - Math.floor(product.rating))}</span>
          <span class="rating-count">(${product.reviews} đánh giá)</span>
        </div>
      </div>
    </a>
  `;
}

// Hàm load sản phẩm theo category
async function loadProductsByCategory(categoryId, category) {
  try {
    // Use the correct path based on context
    const isInPagesDir = window.location.pathname.includes("/pages/");
    const dataPath = isInPagesDir ? "../assets/data/" : "assets/data/";
    const response = await fetch(`${dataPath}products.json`);

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const data = await response.json();

    const products = data.products.filter(
      (product) => product.category === category
    );
    const container = document.getElementById(categoryId);

    if (container) {
      container.innerHTML = products
        .map((product) => createProductCard(product))
        .join("");
    }
  } catch (error) {
    console.error("Error loading products:", error);
    const container = document.getElementById(categoryId);
    if (container) {
      container.innerHTML =
        '<p class="text-center text-red-500">Có lỗi xảy ra khi tải sản phẩm</p>';
    }
  }
}

// Load tất cả sản phẩm khi trang được tải
document.addEventListener("DOMContentLoaded", () => {
  loadProductsByCategory("gau-bong-hot-trend-products", "GẤU BÔNG HOT TREND");
  loadProductsByCategory("gau-bong-khong-lo-products", "GẤU BÔNG KHỔNG LỒ");
  loadProductsByCategory("gau-bong-giam-gia-products", "GẤU BÔNG SIÊU SALE");
  loadProductsByCategory("gau-bong-couple-products", "GẤU BÔNG COUPLE");
  loadProductsByCategory("gau-teddy-cao-cap-products", "GẤU TEDDY CAO CẤP");
  loadProductsByCategory("gau-bong-ghi-am-products", "GẤU BÔNG GHI ÂM");
  loadProductsByCategory(
    "goi-bong-and-phu-kien-products",
    "GỐI BÔNG & PHỤ KIỆN"
  );
  loadProductsByCategory("goi-chan--goi-men-products", "GỐI CHĂN | GỐI MỀN");
  loadProductsByCategory("goi-om-dai-products", "GỐI ÔM DÀI");
  loadProductsByCategory("bst-gau-lena-products", "BST GẤU LENA");
});
