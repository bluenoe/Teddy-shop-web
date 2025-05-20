// Mock product data
const productData = {
  id: "pd002",
  name: "Gấu Bông Panda Fluffy",
  category: "Gấu Bông",
  description:
    "Gấu bông Panda Fluffy - người bạn đồng hành ngộ nghĩnh với thiết kế dễ thương, chất liệu vải cao cấp và màu sắc tương phản nổi bật. Món quà tuyệt vời cho người thân và bạn bè trong mọi dịp đặc biệt!",
  fullDescription: `
    <div class="enhanced-description">
      <h3>Gấu Bông Panda Fluffy - Người bạn đáng yêu cho mọi nhà</h3>

      <div class="highlight-box">
        <p class="font-medium">Gấu bông Panda Fluffy được thiết kế với hình dáng gấu trúc dễ thương, màu đen trắng tương phản nổi bật. Được làm từ vải nhung cao cấp siêu mềm mịn, êm ái khi ôm ấp mà không gây kích ứng cho da nhạy cảm.</p>
      </div>

      <p>Gấu bông Panda Fluffy được nhồi bằng bông gòn cao cấp, có độ đàn hồi tốt, không bị vón cục hay xẹp lún sau thời gian dài sử dụng. Các đường may tỉ mỉ, chắc chắn đảm bảo độ bền và an toàn cho người sử dụng.</p>

      <h4>Đặc điểm nổi bật</h4>

      <div class="feature-grid">
        <div class="feature-card">
          <i class="fas fa-award"></i>
          <p class="font-medium">Thiết kế đặc biệt</p>
        </div>
        <div class="feature-card">
          <i class="fas fa-heart"></i>
          <p class="font-medium">Siêu mềm mịn</p>
        </div>
        <div class="feature-card">
          <i class="fas fa-shield-alt"></i>
          <p class="font-medium">An toàn mọi lứa tuổi</p>
        </div>
        <div class="feature-card">
          <i class="fas fa-check-circle"></i>
          <p class="font-medium">Độ bền cao</p>
        </div>
      </div>

      <ul>
        <li>Thiết kế gấu trúc dễ thương với đôi mắt to tròn, biểu cảm đáng yêu</li>
        <li>Vải nhung cao cấp, mềm mịn như nhung tơ tằm</li>
        <li>Bông nhồi cao cấp, không gây dị ứng, không vón cục</li>
        <li>Đường may tỉ mỉ, chắc chắn từng chi tiết</li>
        <li>Màu sắc đen trắng tương phản nổi bật, không phai màu sau nhiều lần giặt</li>
        <li>An toàn cho trẻ em và người lớn, không chứa hóa chất độc hại</li>
        <li>Có thể giặt máy với chế độ nhẹ nhàng, dễ dàng vệ sinh</li>
      </ul>

      <h4>Hướng dẫn sử dụng và bảo quản</h4>
      <ol>
        <li>Giặt bằng tay hoặc máy giặt với chế độ nhẹ nhàng, nhiệt độ nước dưới 30°C</li>
        <li>Sử dụng nước lạnh và xà phòng trung tính, tránh các chất tẩy có tính tẩy mạnh</li>
        <li>Không sử dụng chất tẩy có chứa clo hoặc thuốc tẩy</li>
        <li>Phơi khô tự nhiên ở nơi thoáng mát, tránh ánh nắng trực tiếp để không bị phai màu</li>
        <li>Không sử dụng máy sấy hoặc ủi trực tiếp lên bề mặt gấu bông</li>
        <li>Giặt riêng với quần áo màu để tránh lem màu sang sản phẩm khác</li>
      </ol>

      <div class="highlight-box">
        <p class="font-medium">Gấu bông Panda Fluffy là món quà ý nghĩa cho người thân, bạn bè trong các dịp sinh nhật, lễ tình nhân, kỷ niệm... Với thiết kế đáng yêu và chất lượng vượt trội, Panda Fluffy chắc chắn sẽ là người bạn đồng hành tuyệt vời của bạn.</p>
      </div>
    </div>
  `,
  specifications: `
    <table class="min-w-full border border-gray-300">
      <thead>
        <tr class="bg-gray-100">
          <th class="py-2 px-4 border-b border-r border-gray-300 text-left">Thông số</th>
          <th class="py-2 px-4 border-b border-gray-300 text-left">Chi tiết</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td class="py-2 px-4 border-b border-r border-gray-300">Tên sản phẩm</td>
          <td class="py-2 px-4 border-b border-gray-300">Gấu Bông Panda Fluffy</td>
        </tr>
        <tr>
          <td class="py-2 px-4 border-b border-r border-gray-300">Thương hiệu</td>
          <td class="py-2 px-4 border-b border-gray-300">BEMORI</td>
        </tr>
        <tr>
          <td class="py-2 px-4 border-b border-r border-gray-300">Xuất xứ</td>
          <td class="py-2 px-4 border-b border-gray-300">Việt Nam</td>
        </tr>
        <tr>
          <td class="py-2 px-4 border-b border-r border-gray-300">Chất liệu</td>
          <td class="py-2 px-4 border-b border-gray-300">Vải nhung cao cấp, bông gòn nhân tạo</td>
        </tr>
        <tr>
          <td class="py-2 px-4 border-b border-r border-gray-300">Màu sắc</td>
          <td class="py-2 px-4 border-b border-gray-300">Đen, Trắng</td>
        </tr>
        <tr>
          <td class="py-2 px-4 border-b border-r border-gray-300">Kích thước</td>
          <td class="py-2 px-4 border-b border-gray-300">S (30cm), M (50cm), L (80cm), XL (100cm), XXL (120cm)</td>
        </tr>
        <tr>
          <td class="py-2 px-4 border-b border-r border-gray-300">Trọng lượng</td>
          <td class="py-2 px-4 border-b border-gray-300">S (250g), M (500g), L (1kg), XL (1.5kg), XXL (2kg)</td>
        </tr>
        <tr>
          <td class="py-2 px-4 border-b border-r border-gray-300">Đối tượng sử dụng</td>
          <td class="py-2 px-4 border-b border-gray-300">Mọi lứa tuổi (Trẻ em dưới 3 tuổi cần có sự giám sát của người lớn)</td>
        </tr>
        <tr>
          <td class="py-2 px-4 border-b border-r border-gray-300">Bảo hành</td>
          <td class="py-2 px-4 border-b border-gray-300">12 tháng</td>
        </tr>
        <tr>
          <td class="py-2 px-4 border-b border-r border-gray-300">Chứng nhận</td>
          <td class="py-2 px-4 border-b border-gray-300">Tiêu chuẩn an toàn châu Âu EN71, Chứng nhận chất lượng ISO 9001:2015</td>
        </tr>
        <tr>
          <td class="py-2 px-4 border-b border-r border-gray-300">Hướng dẫn giặt</td>
          <td class="py-2 px-4 border-b border-gray-300">Giặt tay hoặc máy giặt chế độ nhẹ, không sử dụng chất tẩy mạnh</td>
        </tr>
      </tbody>
    </table>
  `,
  reviews: [
    {
      id: 1,
      user: "Trần Văn Minh",
      avatar: "assets/images/avatars/user1.jpg",
      rating: 5,
      date: "15/04/2025",
      comment:
        "Gấu bông panda rất dễ thương, bé nhà mình thích lắm. Chất liệu mềm mại, đường may chắc chắn, đóng gói cẩn thận. Đáng đồng tiền bát gạo.",
      images: [
        "assets/images/reviews/review1-1.jpg",
        "assets/images/reviews/review1-2.jpg",
      ],
    },
    {
      id: 2,
      user: "Nguyễn Thị Hoa",
      avatar: "assets/images/avatars/user2.jpg",
      rating: 4,
      date: "10/04/2025",
      comment:
        "Gấu bông xinh xắn, đáng yêu. Chất lượng tốt, đúng kích thước như mô tả. Tuy nhiên vải hơi xù lông khi mới mở ra.",
      images: [],
    },
    {
      id: 3,
      user: "Phạm Văn Đạt",
      avatar: "assets/images/avatars/user3.jpg",
      rating: 5,
      date: "05/04/2025",
      comment:
        "Mua làm quà sinh nhật cho bạn gái và cô ấy thích mê. Hàng đúng như hình, chất lượng tốt. Shop tư vấn nhiệt tình, sẽ ủng hộ dài dài.",
      images: ["assets/images/reviews/review3-1.jpg"],
    },
    {
      id: 4,
      user: "Lê Thị Hương",
      avatar: "assets/images/avatars/user4.jpg",
      rating: 5,
      date: "01/04/2025",
      comment:
        "Gấu panda quá đáng yêu. Mình đã sưu tầm nhiều loại gấu bông và đây là một trong những em ưng ý nhất. Vải êm, mềm mịn, màu sắc tương phản rõ nét.",
      images: [],
    },
    {
      id: 5,
      user: "Hoàng Văn Trung",
      avatar: "assets/images/avatars/user5.jpg",
      rating: 4,
      date: "28/03/2025",
      comment:
        "Panda siêu cute, con gái nhà mình mê tít. Có một vài chỗ đường may chưa thật sự hoàn hảo nhưng với giá tiền này là quá ổn rồi.",
      images: [
        "/api/placeholder/100/100",
        "/api/placeholder/100/100",
        "/api/placeholder/100/100",
      ],
    },
  ],
  price: 750000,
  originalPrice: 880000,
  discount: 15,
  rating: 4.7,
  reviewCount: 145,
  sizes: [
    { size: "S", price: 400000 },
    { size: "M", price: 600000 },
    { size: "L", price: 750000 },
    { size: "XL", price: 950000 },
    { size: "XXL", price: 1150000 },
  ],
  images: [
    "../assets/img/products/panda.jpg",
    "../assets/img/products/gaubong (29).jpg",
    "../assets/img/products/gaubong (28).jpg",
    "../assets/img/products/gaubong (24).jpg",
  ],
  relatedProducts: [
    {
      id: "rp001",
      name: "Gấu Bông Teddy Brown",
      price: 850000,
      originalPrice: 1000000,
      discount: 15,
      image: "../assets/img/products/gaubong (1).jpg",
      rating: 4.5,
    },
    {
      id: "rp002",
      name: "Thỏ Bông Baby",
      price: 550000,
      originalPrice: 650000,
      discount: 15,
      image: "../assets/img/products/rabbit.jpg",
      rating: 4.7,
    },
    {
      id: "rp003",
      name: "Gấu Bông Unicorn",
      price: 950000,
      originalPrice: 1100000,
      discount: 14,
      image: "../assets/img/products/unicorn.jpg",
      rating: 4.9,
    },
    {
      id: "rp004",
      name: "Mèo Bông Munchkin",
      price: 680000,
      originalPrice: 800000,
      discount: 15,
      image: "../assets/img/products/cat.jpg",
      rating: 4.6,
    },
    {
      id: "rp005",
      name: "Chó Bông Corgi",
      price: 720000,
      originalPrice: 850000,
      discount: 15,
      image: "../assets/img/products/corgi.jpg",
      rating: 4.7,
    },
    {
      id: "rp006",
      name: "Gấu Bông Polar",
      price: 850000,
      originalPrice: 990000,
      discount: 14,
      image: "../assets/img/products/polar.jpg",
      rating: 4.8,
    },
    {
      id: "rp007",
      name: "Voi Bông Mini",
      price: 480000,
      originalPrice: 560000,
      discount: 14,
      image: "../assets/img/products/elephant.jpg",
      rating: 4.5,
    },
    {
      id: "rp008",
      name: "Hà Mã Bông",
      price: 820000,
      originalPrice: 950000,
      discount: 14,
      image: "../assets/img/products/hippo.jpg",
      rating: 4.6,
    },
    {
      id: "rp009",
      name: "Khủng Long Teddy",
      price: 790000,
      originalPrice: 920000,
      discount: 14,
      image: "../assets/img/products/dino.jpg",
      rating: 4.7,
    },
    {
      id: "rp010",
      name: "Cáo Bông Orange",
      price: 580000,
      originalPrice: 680000,
      discount: 15,
      image: "../assets/img/products/fox.jpg",
      rating: 4.5,
    },
  ],
};

// Format currency to VND
function formatCurrency(amount) {
  return new Intl.NumberFormat("vi-VN", {
    style: "currency",
    currency: "VND",
  }).format(amount);
}

// Get URL parameters
function getURLParameter(name) {
  const urlParams = new URLSearchParams(window.location.search);
  return urlParams.get(name);
}

// Display star rating
function displayStarRating(rating) {
  let stars = "";
  // Full stars
  for (let i = 1; i <= Math.floor(rating); i++) {
    stars += '<i class="fas fa-star"></i>';
  }
  // Half star
  if (rating % 1 !== 0) {
    stars += '<i class="fas fa-star-half-alt"></i>';
  }
  // Empty stars
  for (let i = 1; i <= 5 - Math.ceil(rating); i++) {
    stars += '<i class="far fa-star"></i>';
  }
  return stars;
}

// Load product data
function loadProductData() {
  try {
    // Show loading spinner
    document.getElementById("loading-spinner").classList.add("active");
    document.getElementById("product-details").classList.add("hidden");

    // Simulate API request
    setTimeout(() => {
      // Hide loading spinner and show product details
      document.getElementById("loading-spinner").classList.remove("active");
      document.getElementById("product-details").classList.remove("hidden");

      // Display product data
      displayProductData(productData);
    }, 800);
  } catch (error) {
    console.error("Error loading product data:", error);
    document.getElementById("loading-spinner").classList.remove("active");
    document.getElementById("error-state").classList.remove("hidden");
    document.querySelector(".error-details").textContent =
      error.message || "Không thể tải dữ liệu sản phẩm. Vui lòng thử lại sau.";
  }
}

// Display product data
function displayProductData(product) {
  // Set basic product info
  document.getElementById("product-name").textContent = product.name;
  document.getElementById("product-name-breadcrumb").textContent = product.name;
  document.getElementById("product-category").textContent = product.category;
  document.getElementById("product-description").textContent =
    product.description;

  // Set rating
  document.getElementById("rating-stars").innerHTML = displayStarRating(
    product.rating
  );
  document.getElementById(
    "review-count"
  ).textContent = `(${product.reviewCount} đánh giá)`;

  // Set prices
  document.getElementById("product-price").textContent = formatCurrency(
    product.price
  );
  document.getElementById("original-price").textContent = formatCurrency(
    product.originalPrice
  );
  document.getElementById(
    "discount-badge"
  ).textContent = `-${product.discount}%`;

  // Set images
  const mainImage = document.getElementById("main-image");
  mainImage.src = product.images[0];
  mainImage.alt = product.name;

  const thumbnailGallery = document.getElementById("thumbnail-gallery");
  thumbnailGallery.innerHTML = "";

  // Create wrapper for consistent thumbnail size
  product.images.forEach((image, index) => {
    const thumbnail = document.createElement("div");
    thumbnail.className = `thumbnail ${index === 0 ? "active" : ""}`;

    // Create image element
    const img = document.createElement("img");
    img.src = image;
    img.alt = `${product.name} - Ảnh ${index + 1}`;
    img.className = "w-full h-full object-contain";

    // Add to thumbnail container
    thumbnail.appendChild(img);

    thumbnail.addEventListener("click", () => {
      mainImage.src = image;
      document.querySelectorAll(".thumbnail").forEach((thumb) => {
        thumb.classList.remove("active");
      });
      thumbnail.classList.add("active");
    });

    thumbnailGallery.appendChild(thumbnail);
  });

  // Set size options
  const sizeOptions = document.getElementById("size-options");
  sizeOptions.innerHTML = "";

  product.sizes.forEach((sizeOption, index) => {
    const size = document.createElement("div");
    size.className = `size-option ${index === 0 ? "selected" : ""}`;
    size.setAttribute("data-price", sizeOption.price);
    size.textContent = sizeOption.size;

    size.addEventListener("click", () => {
      document
        .querySelectorAll(".size-option")
        .forEach((opt) => opt.classList.remove("selected"));
      size.classList.add("selected");
      document.getElementById("product-price").textContent = formatCurrency(
        sizeOption.price
      );
      document.getElementById("original-price").textContent = formatCurrency(
        sizeOption.price * (1 + product.discount / 100)
      );
    });

    sizeOptions.appendChild(size);
  });

  // Add to cart button
  document.getElementById("add-to-cart").addEventListener("click", () => {
    // Kiểm tra đăng nhập trước khi thêm vào giỏ hàng
    const userInfo = localStorage.getItem("teddy_user");
    if (!userInfo) {
      alert("Vui lòng đăng nhập để thêm sản phẩm vào giỏ hàng!");

      // Lưu đường dẫn hiện tại để sau khi đăng nhập có thể quay lại
      sessionStorage.setItem("redirect_after_login", window.location.href);

      // Kiểm tra trang hiện tại để xác định đường dẫn tới login.html
      let loginPath = "login.html";

      // Kiểm tra nếu trang hiện tại là ở thư mục pages
      if (window.location.pathname.includes("/pages/")) {
        loginPath = "login.html";
      } else {
        loginPath = "pages/login.html";
      }

      // Chuyển hướng đến trang đăng nhập
      setTimeout(() => {
        window.location.href = loginPath;
      }, 1000);
      return;
    }

    // Lấy thông tin sản phẩm cần thêm vào giỏ hàng
    const selectedSizeElement = document.querySelector(".size-option.selected");
    const selectedSize = selectedSizeElement.textContent;
    const selectedPrice = parseInt(
      selectedSizeElement.getAttribute("data-price")
    );
    const quantity = parseInt(document.getElementById("quantity").value);
    const mainImage = document.getElementById("main-image").src;

    // Lấy giỏ hàng hiện tại từ localStorage
    const cartItems = JSON.parse(localStorage.getItem("shopping-cart") || "[]");

    // Kiểm tra xem sản phẩm đã có trong giỏ hàng chưa (cùng id và cùng size)
    const existingItemIndex = cartItems.findIndex(
      (item) => item.id === product.id && item.size === selectedSize
    );

    if (existingItemIndex !== -1) {
      // Nếu sản phẩm đã có trong giỏ hàng, cập nhật số lượng
      cartItems[existingItemIndex].quantity += quantity;
    } else {
      // Nếu sản phẩm chưa có trong giỏ hàng, thêm mới
      cartItems.push({
        id: product.id,
        name: product.name,
        size: selectedSize,
        price: selectedPrice,
        quantity: quantity,
        image: mainImage,
      });
    }

    // Lưu giỏ hàng đã cập nhật vào localStorage
    localStorage.setItem("shopping-cart", JSON.stringify(cartItems));

    // Cập nhật số lượng hiển thị trên icon giỏ hàng
    updateCartCount();

    // Hiển thị thông báo
    alert(
      `Đã thêm ${quantity} sản phẩm ${product.name} (Size: ${selectedSize}) vào giỏ hàng!`
    );
  });

  // Hàm cập nhật số lượng hiển thị trên icon giỏ hàng
  function updateCartCount() {
    const cartItems = JSON.parse(localStorage.getItem("shopping-cart") || "[]");
    const totalItems = cartItems.reduce(
      (total, item) => total + (item.quantity || 1),
      0
    );

    // Try to use the header's updateCartCount if available
    if (
      window.bemoriHeader &&
      typeof window.bemoriHeader.updateCartCount === "function"
    ) {
      window.bemoriHeader.updateCartCount();
    } else {
      // Fallback implementation
      const cartCountElement = document.getElementById("cartCount");
      if (cartCountElement) {
        cartCountElement.textContent = totalItems;
        cartCountElement.style.display = totalItems > 0 ? "block" : "none";
      }
    }
  }

  // Update tab contents
  document.getElementById("product-full-description").innerHTML =
    product.fullDescription;
  document.getElementById("product-specifications").innerHTML =
    product.specifications;

  // Add reviews
  const reviewsContainer = document.getElementById("product-reviews");
  reviewsContainer.innerHTML = "";

  // Add overall rating
  const overallRating = document.createElement("div");
  overallRating.className = "mb-8 p-6 bg-gray-50 rounded-lg";
  overallRating.innerHTML = `
    <div class="flex items-center justify-between mb-4">
      <div>
        <div class="text-3xl font-bold">${product.rating.toFixed(1)}/5</div>
        <div class="text-yellow-400 text-xl mt-2">${displayStarRating(
          product.rating
        )}</div>
        <div class="text-gray-500 mt-2">${product.reviewCount} đánh giá</div>
      </div>
      <div class="w-2/3">
        <div class="flex items-center mb-2">
          <span class="w-16 text-sm text-gray-600">5 sao</span>
          <div class="w-full bg-gray-200 rounded-full h-2 mx-2">
            <div class="bg-yellow-400 h-2 rounded-full" style="width: 80%"></div>
          </div>
          <span class="w-16 text-sm text-gray-600 text-right">80%</span>
        </div>
        <div class="flex items-center mb-2">
          <span class="w-16 text-sm text-gray-600">4 sao</span>
          <div class="w-full bg-gray-200 rounded-full h-2 mx-2">
            <div class="bg-yellow-400 h-2 rounded-full" style="width: 15%"></div>
          </div>
          <span class="w-16 text-sm text-gray-600 text-right">15%</span>
        </div>
        <div class="flex items-center mb-2">
          <span class="w-16 text-sm text-gray-600">3 sao</span>
          <div class="w-full bg-gray-200 rounded-full h-2 mx-2">
            <div class="bg-yellow-400 h-2 rounded-full" style="width: 5%"></div>
          </div>
          <span class="w-16 text-sm text-gray-600 text-right">5%</span>
        </div>
        <div class="flex items-center mb-2">
          <span class="w-16 text-sm text-gray-600">2 sao</span>
          <div class="w-full bg-gray-200 rounded-full h-2 mx-2">
            <div class="bg-yellow-400 h-2 rounded-full" style="width: 0%"></div>
          </div>
          <span class="w-16 text-sm text-gray-600 text-right">0%</span>
        </div>
        <div class="flex items-center">
          <span class="w-16 text-sm text-gray-600">1 sao</span>
          <div class="w-full bg-gray-200 rounded-full h-2 mx-2">
            <div class="bg-yellow-400 h-2 rounded-full" style="width: 0%"></div>
          </div>
          <span class="w-16 text-sm text-gray-600 text-right">0%</span>
        </div>
      </div>
    </div>
    <button class="bg-pink-600 text-white py-2 px-4 rounded hover:bg-pink-700 transition-colors">Viết đánh giá</button>
  `;
  reviewsContainer.appendChild(overallRating);

  // Add individual reviews
  product.reviews.forEach((review) => {
    const reviewElement = document.createElement("div");
    reviewElement.className = "border-t border-gray-200 py-6";

    let reviewImages = "";
    if (review.images.length > 0) {
      reviewImages = `
        <div class="flex mt-4 gap-2">
          ${review.images
            .map(
              (img) => `
            <div class="border border-gray-200 rounded overflow-hidden">
              <img src="${img}" alt="Review Image" class="w-16 h-16 object-cover">
            </div>
          `
            )
            .join("")}
        </div>
      `;
    }

    reviewElement.innerHTML = `
      <div class="flex items-center justify-between mb-4">
        <div class="flex items-center">
          <img src="${review.avatar}" alt="${
      review.user
    }" class="w-12 h-12 rounded-full mr-4">
          <div>
            <h4 class="font-medium">${review.user}</h4>
            <div class="flex items-center mt-1">
              <div class="text-yellow-400 mr-2">${displayStarRating(
                review.rating
              )}</div>
              <span class="text-gray-500 text-sm">${review.date}</span>
            </div>
          </div>
        </div>
      </div>
      <p class="text-gray-700">${review.comment}</p>
      ${reviewImages}
    `;

    reviewsContainer.appendChild(reviewElement);
  });

  // Add related products
  const relatedProductsContainer = document.getElementById("related-products");
  relatedProductsContainer.innerHTML = "";

  product.relatedProducts.forEach((relatedProduct) => {
    const productSlide = document.createElement("div");
    productSlide.className = "swiper-slide";

    productSlide.innerHTML = `
      <a href="product-details-1.html" class="block">
        <div class="bg-white rounded-lg shadow-sm overflow-hidden hover:shadow-md transition-shadow duration-300">
          <div class="relative">
            <img src="${relatedProduct.image}" alt="${
      relatedProduct.name
    }" class="w-full h-64 object-cover">
            <div class="absolute top-2 right-2 bg-pink-600 text-white text-xs px-2 py-1 rounded-full">-${
              relatedProduct.discount
            }%</div>
          </div>
          <div class="p-4">
            <h3 class="font-medium text-gray-900 mb-2">${
              relatedProduct.name
            }</h3>
            <div class="flex items-center text-yellow-400 mb-2">${displayStarRating(
              relatedProduct.rating
            )}</div>
            <div class="flex items-center justify-between">
              <div class="flex items-center">
                <span class="text-pink-600 font-bold mr-2">${formatCurrency(
                  relatedProduct.price
                )}</span>
                <span class="text-gray-400 text-sm line-through">${formatCurrency(
                  relatedProduct.originalPrice
                )}</span>
              </div>
              <button class="bg-pink-100 text-pink-600 p-2 rounded-full hover:bg-pink-200 transition-colors">
                <i class="fas fa-shopping-cart"></i>
              </button>
            </div>
          </div>
        </div>
      </a>
    `;

    relatedProductsContainer.appendChild(productSlide);
  });

  // Initialize related products swiper if needed
  if (window.relatedProductsSwiper) {
    window.relatedProductsSwiper.update();
  }
}

// Handle retry button
document.getElementById("retry-button").addEventListener("click", () => {
  document.getElementById("error-state").classList.add("hidden");
  loadProductData();
});

// Load product data when DOM is loaded
document.addEventListener("DOMContentLoaded", () => {
  loadProductData();
});
