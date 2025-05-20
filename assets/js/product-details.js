// Function to format price
function formatPrice(price) {
  return new Intl.NumberFormat("vi-VN", {
    style: "currency",
    currency: "VND",
  }).format(price);
}

// Function to get product ID from URL
function getProductIdFromUrl() {
  const urlParams = new URLSearchParams(window.location.search);
  return urlParams.get("id");
}

// Function to display product details
function displayProductDetails(product) {
  const productDetailsContainer = document.getElementById("product-details");
  if (!productDetailsContainer) return;

  let imagesHtml = product.images
    .map(
      (image, index) => `
    <div class="swiper-slide">
      <img src="${image}" alt="${product.name} - Image ${
        index + 1
      }" class="w-full h-auto object-cover rounded-lg">
    </div>
  `
    )
    .join("");

  let colorsHtml =
    product.colors && product.colors.length > 0
      ? `
    <div class="mt-4">
      <h3 class="text-sm font-medium text-gray-900">Màu sắc:</h3>
      <div class="flex items-center space-x-2 mt-2">
        ${product.colors
          .map(
            (color) => `
          <span class="inline-block h-8 w-8 rounded-full border border-gray-300" style="background-color: ${color.code};" title="${color.name}"></span>
        `
          )
          .join("")}
      </div>
    </div>
  `
      : "";

  let sizesHtml =
    product.sizes && product.sizes.length > 0
      ? `
    <div class="mt-4">
      <h3 class="text-sm font-medium text-gray-900">Kích thước:</h3>
      <div class="flex flex-wrap gap-2 mt-2">
        ${product.sizes
          .map(
            (size) => `
          <button class="px-4 py-2 border border-gray-300 rounded-md text-sm hover:bg-gray-100">${size}</button>
        `
          )
          .join("")}
      </div>
    </div>
  `
      : "";

  productDetailsContainer.innerHTML = `
    <div class="grid md:grid-cols-2 gap-8">
      <!-- Product Images -->
      <div class="swiper product-image-swiper">
        <div class="swiper-wrapper">
          ${imagesHtml}
        </div>
        <div class="swiper-pagination"></div>
        <div class="swiper-button-next"></div>
        <div class="swiper-button-prev"></div>
      </div>

      <!-- Product Info -->
      <div>
        <h1 class="text-3xl font-bold text-pink-600 mb-2">${product.name}</h1>
        <div class="flex items-center mb-4">
          <div class="text-yellow-400">
            ${"★".repeat(Math.floor(product.rating))}${"☆".repeat(
    5 - Math.floor(product.rating)
  )}
          </div>
          <span class="ml-2 text-sm text-gray-600">(${
            product.reviews
          } đánh giá)</span>
        </div>

        <div class="mb-4">
          ${
            product.salePrice
              ? `
                <span class="text-3xl font-bold text-red-500 mr-2">${formatPrice(
                  product.salePrice
                )}</span>
                <span class="text-xl text-gray-500 line-through">${formatPrice(
                  product.price
                )}</span>
                <span class="ml-2 inline-block bg-red-100 text-red-500 text-xs font-semibold px-2.5 py-0.5 rounded">
                  -${Math.round((1 - product.salePrice / product.price) * 100)}%
                </span>
              `
              : `<span class="text-3xl font-bold text-red-500">${formatPrice(
                  product.price
                )}</span>`
          }
        </div>

        <p class="text-gray-700 mb-4 leading-relaxed">${product.description}</p>

        ${colorsHtml}
        ${sizesHtml}

        <div class="mt-6">
          <label for="quantity" class="block text-sm font-medium text-gray-700 mb-1">Số lượng:</label>
          <div class="flex items-center">
            <button onclick="updateQuantity(-1)" class="px-3 py-1 border border-gray-300 rounded-l-md hover:bg-gray-100">-</button>
            <input type="number" id="quantity" name="quantity" value="1" min="1" class="w-16 text-center border-t border-b border-gray-300 focus:outline-none focus:ring-pink-500 focus:border-pink-500">
            <button onclick="updateQuantity(1)" class="px-3 py-1 border border-gray-300 rounded-r-md hover:bg-gray-100">+</button>
          </div>
        </div>

        <button id="add-to-cart-button" class="mt-6 w-full bg-pink-500 hover:bg-pink-600 text-white font-semibold py-3 px-6 rounded-lg transition duration-300 ease-in-out transform hover:scale-105">
          <i class="fas fa-cart-plus mr-2"></i> Thêm vào giỏ hàng
        </button>
      </div>
    </div>

    <!-- Product Tabs (Description, Reviews, etc.) -->
    <div class="mt-12">
      <div class="border-b border-gray-200">
        <nav class="-mb-px flex space-x-8" aria-label="Tabs">
          <button class="tab-button active-tab" data-tab="description">Mô tả chi tiết</button>
          <button class="tab-button" data-tab="reviews">Đánh giá (${
            product.reviews
          })</button>
          <button class="tab-button" data-tab="shipping">Vận chuyển & Đổi trả</button>
        </nav>
      </div>
      <div class="mt-8">
        <div id="tab-description" class="tab-content active-content">
          <h3 class="text-xl font-semibold text-gray-800 mb-4">Mô tả sản phẩm</h3>
          <div class="prose max-w-none">
            ${product.longDescription || product.description}
          </div>
        </div>
        <div id="tab-reviews" class="tab-content">
          <h3 class="text-xl font-semibold text-gray-800 mb-4">Đánh giá từ khách hàng</h3>
          <!-- Placeholder for reviews -->
          <p class="text-gray-600">Hiện chưa có đánh giá nào cho sản phẩm này.</p>
        </div>
        <div id="tab-shipping" class="tab-content">
          <h3 class="text-xl font-semibold text-gray-800 mb-4">Thông tin vận chuyển & đổi trả</h3>
          <div class="prose max-w-none">
            <p><strong>Thời gian giao hàng:</strong></p>
            <ul>
              <li>Nội thành Hà Nội: 1-2 ngày.</li>
              <li>Các tỉnh thành khác: 3-5 ngày.</li>
            </ul>
            <p><strong>Chính sách đổi trả:</strong></p>
            <ul>
              <li>Đổi trả trong vòng 7 ngày nếu có lỗi từ nhà sản xuất.</li>
              <li>Sản phẩm còn nguyên tem mác, chưa qua sử dụng.</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  `;

  // Initialize Swiper for product images
  new Swiper(".product-image-swiper", {
    loop: true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });

  // Tab functionality
  const tabButtons = document.querySelectorAll(".tab-button");
  const tabContents = document.querySelectorAll(".tab-content");

  tabButtons.forEach((button) => {
    button.addEventListener("click", () => {
      tabButtons.forEach((btn) => btn.classList.remove("active-tab"));
      button.classList.add("active-tab");

      const tabId = button.getAttribute("data-tab");
      tabContents.forEach((content) => {
        content.classList.remove("active-content");
        if (content.id === `tab-${tabId}`) {
          content.classList.add("active-content");
        }
      });
    });
  });

  // Add to cart functionality
  const addToCartButton = document.getElementById("add-to-cart-button");
  if (addToCartButton) {
    addToCartButton.addEventListener("click", () => {
      const quantityInput = document.getElementById("quantity");
      const quantity = parseInt(quantityInput.value);
      addProductToCart(product, quantity);
    });
  }
}

// Function to update quantity
window.updateQuantity = (change) => {
  const quantityInput = document.getElementById("quantity");
  let currentValue = parseInt(quantityInput.value);
  currentValue += change;
  if (currentValue < 1) {
    currentValue = 1;
  }
  quantityInput.value = currentValue;
};

// Function to add product to cart (using localStorage)
function addProductToCart(product, quantity) {
  const CART_STORAGE_KEY = "shopping-cart";
  let cart = JSON.parse(localStorage.getItem(CART_STORAGE_KEY) || "[]");

  const existingProductIndex = cart.findIndex((item) => item.id === product.id);

  if (existingProductIndex > -1) {
    cart[existingProductIndex].quantity += quantity;
  } else {
    cart.push({ ...product, quantity: quantity });
  }

  localStorage.setItem(CART_STORAGE_KEY, JSON.stringify(cart));
  showNotification(
    `${quantity} "${product.name}" đã được thêm vào giỏ hàng!`,
    "success"
  );
  updateCartCount(); // Assuming updateCartCount is available globally from main.js
}

// Function to show notification
function showNotification(message, type = "info") {
  const notificationArea =
    document.getElementById("notification-area") || createNotificationArea();
  const notification = document.createElement("div");
  notification.className = `fixed top-20 right-5 p-4 rounded-lg shadow-lg text-white z-50 transition-all duration-300 ease-in-out transform translate-x-full`;

  if (type === "success") {
    notification.classList.add("bg-green-500");
  } else if (type === "error") {
    notification.classList.add("bg-red-500");
  } else {
    notification.classList.add("bg-blue-500");
  }
  notification.textContent = message;
  notificationArea.appendChild(notification);

  // Animate in
  setTimeout(() => {
    notification.classList.remove("translate-x-full");
    notification.classList.add("translate-x-0");
  }, 10);

  setTimeout(() => {
    // Animate out
    notification.classList.remove("translate-x-0");
    notification.classList.add("translate-x-full");
    setTimeout(() => {
      notification.remove();
      if (notificationArea.children.length === 0) {
        notificationArea.remove();
      }
    }, 300);
  }, 3000);
}

function createNotificationArea() {
  const area = document.createElement("div");
  area.id = "notification-area";
  area.className = "fixed top-20 right-5 z-50 space-y-2";
  document.body.appendChild(area);
  return area;
}

// Function to fetch product data
async function fetchProductData(productId) {
  console.log(
    "[Debug] fetchProductData called with productId (raw from URL):",
    productId
  ); // Log 1
  const loadingSpinner = document.getElementById("loading-spinner");
  const errorState = document.getElementById("error-state");
  const productDetailsContainer = document.getElementById("product-details");
  const errorDetailsP = errorState.querySelector(".error-details");
  const retryButton = document.getElementById("retry-button");

  loadingSpinner.classList.add("active");
  errorState.classList.add("hidden");
  productDetailsContainer.classList.add("hidden");

  try {
    // Use the correct path based on context
    const isInPagesDir = window.location.pathname.includes("/pages/");
    const dataPath = isInPagesDir ? "../assets/data/" : "assets/data/";
    const response = await fetch(`${dataPath}products.json`);

    console.log(
      "[Debug] Fetch response status:",
      response.status,
      "ok:",
      response.ok
    ); // Log 2a
    if (!response.ok) {
      const errorText = await response.text();
      console.error("[Debug] Fetch response error text:", errorText); // Log 2b
      throw new Error(
        `HTTP error! status: ${response.status} - ${response.statusText}`
      );
    }
    const data = await response.json();
    console.log("[Debug] Parsed JSON data:", data); // Log 3

    const numericProductId = parseInt(productId);
    console.log("[Debug] Parsed numericProductId:", numericProductId); // Log for parsed ID

    const product = data.products.find((p) => p.id === numericProductId);
    console.log("[Debug] Product found:", product); // Log 4

    if (product) {
      displayProductDetails(product);
      productDetailsContainer.classList.remove("hidden");
    } else {
      throw new Error(`Sản phẩm với ID "${numericProductId}" không tìm thấy.`);
    }
  } catch (error) {
    console.error("Error fetching product data:", error);
    errorState.classList.remove("hidden");
    if (errorDetailsP) {
      errorDetailsP.textContent = error.message;
    }
  } finally {
    loadingSpinner.classList.remove("active");
  }
}

// Load product data when the page loads
document.addEventListener("DOMContentLoaded", () => {
  const productId = getProductIdFromUrl();
  const siteHeader = document.getElementById("siteHeader");
  const siteFooter = document.getElementById("siteFooter");
  const retryButton = document.getElementById("retry-button");

  // Load partials
  if (siteHeader) {
    fetch("../partials/header.html")
      .then((response) => response.text())
      .then((data) => {
        siteHeader.innerHTML = data;
        // Re-initialize cart count after header is loaded
        if (typeof updateCartCount === "function") {
          updateCartCount();
        }
      });
  }
  if (siteFooter) {
    fetch("../partials/footer.html")
      .then((response) => response.text())
      .then((data) => (siteFooter.innerHTML = data));
  }

  if (productId) {
    fetchProductData(productId);
  } else {
    const errorState = document.getElementById("error-state");
    const productDetailsContainer = document.getElementById("product-details");
    const loadingSpinner = document.getElementById("loading-spinner");
    const errorDetailsP = errorState.querySelector(".error-details");

    loadingSpinner.classList.remove("active");
    productDetailsContainer.classList.add("hidden");
    errorState.classList.remove("hidden");
    if (errorDetailsP) {
      errorDetailsP.textContent =
        "Không có ID sản phẩm nào được cung cấp trong URL.";
    }
  }

  if (retryButton) {
    retryButton.addEventListener("click", () => {
      if (productId) {
        fetchProductData(productId);
      } else {
        // Optionally, redirect or show a more general error if no ID was ever present
        const errorState = document.getElementById("error-state");
        const errorDetailsP = errorState.querySelector(".error-details");
        if (errorDetailsP) {
          errorDetailsP.textContent =
            "Không thể thử lại vì không có ID sản phẩm.";
        }
      }
    });
  }
});
