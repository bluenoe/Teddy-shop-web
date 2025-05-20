// main.js (ES module)

// Create global bemoriHeader object to handle header initialization
window.bemoriHeader = {
  initHeaderEvents: function () {
    // 1. Sử dụng đúng ID từ header.html
    const hamburgerBtn = document.getElementById("mobile-menu-button");
    const navMenu = document.getElementById("mobile-menu");

    // 2. Kiểm tra tồn tại phần tử
    if (!hamburgerBtn || !navMenu) {
      console.error("Không tìm thấy phần tử menu mobile!");
      return;
    }

    // 3. Clone node để xóa event listeners cũ (tránh xung đột)
    const newHamburgerBtn = hamburgerBtn.cloneNode(true);
    hamburgerBtn.parentNode.replaceChild(newHamburgerBtn, hamburgerBtn);

    // 4. Gán sự kiện click mới
    newHamburgerBtn.addEventListener("click", function (e) {
      e.stopPropagation();
      const isOpening = navMenu.classList.contains("hidden");

      console.log(`Toggling mobile menu, isOpening: ${isOpening}`);

      // 5. Toggle trạng thái menu
      navMenu.classList.toggle("hidden");
      document.body.classList.toggle("mobile-menu-open");

      // 6. Xử lý overlay
      let overlay = document.getElementById("mobile-overlay");
      if (!overlay) {
        overlay = document.createElement("div");
        overlay.id = "mobile-overlay";
        overlay.className = "fixed inset-0 bg-black bg-opacity-50 z-30 hidden";
        document.body.appendChild(overlay);
      }
      overlay.classList.toggle("hidden");

      // 7. Sự kiện click overlay để đóng menu
      overlay.onclick = function () {
        navMenu.classList.add("hidden");
        overlay.classList.add("hidden");
        document.body.classList.remove("mobile-menu-open");
        newHamburgerBtn.setAttribute("aria-expanded", "false");
      };

      // 8. Cập nhật ARIA attributes
      newHamburgerBtn.setAttribute("aria-expanded", isOpening);
    });

    // 9. Xử lý responsive khi resize
    window.addEventListener("resize", () => {
      if (window.innerWidth >= 1024) {
        navMenu.classList.add("hidden");
        document.body.classList.remove("mobile-menu-open");
        const overlay = document.getElementById("mobile-overlay");
        if (overlay) overlay.classList.add("hidden");
        newHamburgerBtn.setAttribute("aria-expanded", "false");
      }
    });

    // Improved dropdown behavior for desktop
    if (window.innerWidth >= 768) {
      const dropdownWrappers = document.querySelectorAll(".dropdown-wrapper");

      dropdownWrappers.forEach((wrapper) => {
        const link = wrapper.querySelector("a");
        const dropdown = wrapper.querySelector(".dropdown-menu");

        if (link && dropdown) {
          // Variable to track if we're hovering on dropdown
          let isHovering = false;
          let timeout;

          // When hovering on parent menu item
          wrapper.addEventListener("mouseenter", () => {
            clearTimeout(timeout);
            isHovering = true;
            dropdown.classList.remove("hidden");
            dropdown.style.opacity = "1";
            dropdown.style.visibility = "visible";

            // Đảm bảo vị trí dropdown khớp với menu
            const menuHeight = wrapper.offsetHeight;
            dropdown.style.top = menuHeight + "px";
          });

          // When leaving parent menu item
          wrapper.addEventListener("mouseleave", () => {
            isHovering = false;

            // Add delay before hiding
            timeout = setTimeout(() => {
              if (!isHovering) {
                dropdown.classList.add("hidden");
                dropdown.style.opacity = "0";
                dropdown.style.visibility = "hidden";
              }
            }, 300); // 300ms delay before hiding
          });

          // When hovering on dropdown itself
          dropdown.addEventListener("mouseenter", () => {
            clearTimeout(timeout);
            isHovering = true;
          });

          // When leaving dropdown
          dropdown.addEventListener("mouseleave", () => {
            isHovering = false;

            // Add delay before hiding
            timeout = setTimeout(() => {
              if (!isHovering) {
                dropdown.classList.add("hidden");
                dropdown.style.opacity = "0";
                dropdown.style.visibility = "hidden";
              }
            }, 300); // 300ms delay before hiding
          });
        }
      });
    }

    // Handle mobile dropdown menus
    const dropdowns = document.querySelectorAll(".relative.group > a");
    dropdowns.forEach((dropdown) => {
      // Create dropdown toggle button for mobile
      if (window.innerWidth < 768) {
        const toggleBtn = document.createElement("button");
        toggleBtn.className = "dropdown-toggle";
        toggleBtn.setAttribute("aria-label", "Toggle submenu");
        toggleBtn.innerHTML = "+";

        dropdown.parentNode.appendChild(toggleBtn);

        toggleBtn.addEventListener("click", function (e) {
          e.preventDefault();
          e.stopPropagation();

          const parent = this.parentNode;
          const submenu = parent.querySelector(".dropdown-menu");

          // Toggle submenu visibility
          if (submenu) {
            submenu.style.display =
              submenu.style.display === "block" ? "none" : "block";
            parent.classList.toggle("open");
            this.innerHTML = parent.classList.contains("open") ? "-" : "+";
          }
        });
      }
    });

    // User dropdown toggle
    const userMenuBtn = document.getElementById("userMenuBtn");
    const userDropdown = document.getElementById("userDropdown");
    const userMenuBtnMobile = document.getElementById("userMenuBtnMobile");
    const userDropdownMobile = document.getElementById("userDropdownMobile");

    if (userMenuBtn && userDropdown) {
      userMenuBtn.addEventListener("click", function () {
        userDropdown.classList.toggle("hidden");
        userMenuBtn.setAttribute(
          "aria-expanded",
          userMenuBtn.getAttribute("aria-expanded") === "false"
            ? "true"
            : "false"
        );
      });
    }

    if (userMenuBtnMobile && userDropdownMobile) {
      userMenuBtnMobile.addEventListener("click", function () {
        userDropdownMobile.classList.toggle("hidden");
        userMenuBtnMobile.setAttribute(
          "aria-expanded",
          userMenuBtnMobile.getAttribute("aria-expanded") === "false"
            ? "true"
            : "false"
        );
      });
    }

    // Initialize auth links display
    this.checkLoginStatus();

    // Handle window resize for responsive menu adjustments
    window.addEventListener("resize", this.handleResize.bind(this));

    // Initialize first time
    this.handleResize();
  },

  // New method to handle resizing and responsive adjustments
  handleResize: function () {
    const navMenu = document.getElementById("navMenu");
    const hamburgerBtn = document.getElementById("hamburgerBtn");

    // Reset mobile menu state on window resize
    if (window.innerWidth >= 768) {
      if (navMenu) {
        navMenu.classList.remove("active");
        navMenu.classList.remove("hidden");
      }

      if (hamburgerBtn) {
        hamburgerBtn.classList.remove("active");
        hamburgerBtn.setAttribute("aria-expanded", "false");
      }

      const overlay = document.querySelector(".nav-overlay");
      if (overlay) {
        overlay.classList.remove("active");
      }

      document.body.style.overflow = "";

      // Reset all open submenus
      const openSubmenus = document.querySelectorAll(".relative.group.open");
      openSubmenus.forEach((submenu) => {
        submenu.classList.remove("open");
        const dropdownMenu = submenu.querySelector(".dropdown-menu");
        if (dropdownMenu) {
          dropdownMenu.style.display = "";
        }
      });
    }
  },

  checkLoginStatus: function () {
    const userInfo = JSON.parse(localStorage.getItem("teddy_user"));

    // Elements to toggle
    const authLinksMobile = document.querySelector(".auth-links-mobile");
    const authLinks = document.querySelector(".auth-links");
    const userSection = document.getElementById("userSection");
    const userSectionMobile = document.getElementById("userSectionMobile");

    if (userInfo) {
      // User is logged in
      if (authLinksMobile) authLinksMobile.classList.add("hidden");
      if (authLinks) authLinks.classList.add("hidden");

      // Show user sections
      if (userSection) {
        userSection.classList.remove("hidden");
        const userName = userSection.querySelector("#userName");
        const userAvatar = userSection.querySelector("#userAvatar");
        if (userName) userName.textContent = userInfo.name;
        if (userAvatar && userInfo.avatar) userAvatar.src = userInfo.avatar;
      }

      if (userSectionMobile) {
        userSectionMobile.classList.remove("hidden");
        const userNameMobile =
          userSectionMobile.querySelector("#userNameMobile");
        const userAvatarMobile =
          userSectionMobile.querySelector("#userAvatarMobile");
        if (userNameMobile) userNameMobile.textContent = userInfo.name;
        if (userAvatarMobile && userInfo.avatar)
          userAvatarMobile.src = userInfo.avatar;
      }

      // Set up logout
      const logoutBtn = document.getElementById("logoutBtn");
      const logoutBtnMobile = document.getElementById("logoutBtnMobile");

      if (logoutBtn) {
        logoutBtn.addEventListener("click", this.handleLogout);
      }

      if (logoutBtnMobile) {
        logoutBtnMobile.addEventListener("click", this.handleLogout);
      }
    } else {
      // User is not logged in
      if (authLinksMobile) authLinksMobile.classList.remove("hidden");
      if (authLinks) authLinks.classList.remove("hidden");

      // Hide user sections
      if (userSection) userSection.classList.add("hidden");
      if (userSectionMobile) userSectionMobile.classList.add("hidden");
    }
  },

  handleLogout: function () {
    localStorage.removeItem("teddy_user");
    localStorage.removeItem("teddy_token");
    window.location.reload();
  },

  // Add updateCartCount method
  updateCartCount: function () {
    // Use consistent cart storage key across all pages
    const cart = JSON.parse(localStorage.getItem("shopping-cart") || "[]");
    const totalItems = cart.reduce(
      (total, item) => total + (item.quantity || 1),
      0
    );

    // Update cart count in header
    const cartCountElement = document.getElementById("cartCount");
    if (cartCountElement) {
      cartCountElement.textContent = totalItems;

      // Handle both class-based and style-based visibility
      cartCountElement.classList.toggle("hidden", totalItems === 0);
      if (cartCountElement.style) {
        cartCountElement.style.display = totalItems > 0 ? "flex" : "none";
      }
    }
  },
};

// Utility functions
function showNotification(message, type = "success") {
  const notification = document.createElement("div");
  notification.className = `fixed top-4 right-4 p-4 rounded-lg ${
    type === "success" ? "bg-green-500" : "bg-red-500"
  } text-white z-50`;
  notification.textContent = message;
  document.body.appendChild(notification);

  setTimeout(() => {
    notification.remove();
  }, 3000);
}

function checkAuth() {
  const token = localStorage.getItem("teddy_token");
  if (!token) return false;

  try {
    const payload = JSON.parse(atob(token.split(".")[1]));
    if (payload.exp * 1000 < Date.now()) {
      localStorage.removeItem("teddy_token");
      localStorage.removeItem("teddy_user");
      return false;
    }
    return true;
  } catch {
    return false;
  }
}

async function fetchWithAuth(url, options = {}) {
  const token = localStorage.getItem("teddy_token");
  if (!token) throw new Error("Unauthorized");

  return fetch(url, {
    ...options,
    headers: {
      ...options.headers,
      Authorization: `Bearer ${token}`,
    },
  });
}

// Update user info in header
function updateUserInfo() {
  const userInfo = JSON.parse(localStorage.getItem("teddy_user"));

  if (userInfo) {
    // Ẩn auth links (đăng ký/đăng nhập)
    const authLinks = document.querySelectorAll(
      ".auth-links, .auth-links-mobile"
    );
    authLinks.forEach((link) => link.classList.add("hidden"));

    // Hiển thị các phần user section có sẵn
    const userSection = document.getElementById("userSection");
    const userSectionMobile = document.getElementById("userSectionMobile");

    if (userSection) {
      userSection.classList.remove("hidden");
      const userName = document.getElementById("userName");
      const userAvatar = document.getElementById("userAvatar");
      if (userName) userName.textContent = userInfo.name;
      if (userAvatar)
        userAvatar.src =
          userInfo.avatar ||
          (window.location.pathname.includes("/pages/")
            ? "../img/avatars/bk_Ava.jpg"
            : "img/avatars/bk_Ava.jpg");
    }

    if (userSectionMobile) {
      userSectionMobile.classList.remove("hidden");
      const userNameMobile = document.getElementById("userNameMobile");
      const userAvatarMobile = document.getElementById("userAvatarMobile");
      if (userNameMobile) userNameMobile.textContent = userInfo.name;
      if (userAvatarMobile)
        userAvatarMobile.src =
          userInfo.avatar ||
          (window.location.pathname.includes("/pages/")
            ? "../img/avatars/bk_Ava.jpg"
            : "img/avatars/bk_Ava.jpg");
    }
  } else {
    // Khi không đăng nhập, hiện auth links và ẩn user section
    const authLinks = document.querySelectorAll(
      ".auth-links, .auth-links-mobile"
    );
    authLinks.forEach((link) => link.classList.remove("hidden"));

    const userSection = document.getElementById("userSection");
    const userSectionMobile = document.getElementById("userSectionMobile");
    if (userSection) userSection.classList.add("hidden");
    if (userSectionMobile) userSectionMobile.classList.add("hidden");
  }
}

export function loadPartials() {
  ["Header", "Footer"].forEach(async (part) => {
    const el = document.getElementById(`site${part}`);
    if (el) {
      try {
        // Get current path and determine the correct path to partials
        const currentPath = window.location.pathname;
        const isInPagesDir = currentPath.includes("/pages/");

        // Determine the correct path to partials
        let partialsPath;
        if (isInPagesDir) {
          // When in pages directory, always go up one level to reach partials
          partialsPath = "../partials/";
        } else {
          // When in root directory, use direct path
          partialsPath = "partials/";
        }

        // Log the path for debugging
        console.log(
          `Loading ${part} from: ${partialsPath}${part.toLowerCase()}.html`
        );

        const res = await fetch(`${partialsPath}${part.toLowerCase()}.html`);
        if (res.ok) {
          const content = await res.text();
          el.innerHTML = content;
          if (part === "Header") {
            updateUserInfo(); // Update user info after header is loaded

            // Update cart count after header is loaded
            setTimeout(() => {
              if (window.bemoriHeader) {
                // Initialize header events
                window.bemoriHeader.initHeaderEvents();

                // Update cart count
                if (typeof window.bemoriHeader.updateCartCount === "function") {
                  window.bemoriHeader.updateCartCount();
                }
              }
            }, 100);
          }
        } else {
          console.error(
            `Không thể tải ${part.toLowerCase()}.html:`,
            res.status
          );
          // Log the full URL that failed
          console.error(
            `Failed URL: ${partialsPath}${part.toLowerCase()}.html`
          );
        }
      } catch (error) {
        console.error(`Lỗi fetch ${part.toLowerCase()}.html:`, error);
      }
    }
  });
}

// Collection Slider Enhancement
function initCollectionSlider() {
  const collectionSwiper = new Swiper(".collection-swiper", {
    loop: true,
    autoplay: {
      delay: 3000,
      disableOnInteraction: false,
      pauseOnMouseEnter: true,
    },
    slidesPerView: "auto",
    centeredSlides: true,
    spaceBetween: 20,
    grabCursor: true,
    pagination: {
      el: ".collection-pagination",
      clickable: true,
      dynamicBullets: true,
    },
    navigation: {
      nextEl: ".collection-next",
      prevEl: ".collection-prev",
    },
    breakpoints: {
      320: {
        slidesPerView: 1,
        spaceBetween: 10,
      },
      480: {
        slidesPerView: 2,
        spaceBetween: 15,
      },
      768: {
        slidesPerView: 3,
        spaceBetween: 20,
      },
      1024: {
        slidesPerView: 4,
        spaceBetween: 30,
      },
    },
    on: {
      init: function () {
        this.slides.forEach((slide) => {
          slide.style.transition = "transform 0.3s ease";
        });
      },
      slideChange: function () {
        this.slides.forEach((slide, index) => {
          if (index === this.activeIndex) {
            slide.style.transform = "scale(1.05)";
          } else {
            slide.style.transform = "scale(1)";
          }
        });
      },
    },
  });

  // Add touch interaction
  const slider = document.querySelector(".collection-swiper");
  if (slider) {
    slider.addEventListener("touchstart", function () {
      collectionSwiper.autoplay.stop();
    });

    slider.addEventListener("touchend", function () {
      collectionSwiper.autoplay.start();
    });
  }

  return collectionSwiper;
}

// Enhanced Product Loading
export async function initProductsBySections() {
  try {
    // Kiểm tra xem trang hiện tại có nằm trong thư mục pages hay không
    const isInPagesDir = window.location.pathname.includes("/pages/");
    const dataPath = isInPagesDir ? "../assets/data/" : "assets/data/";

    const [productsRes, sectionsRes] = await Promise.all([
      fetch(`${dataPath}products.json`),
      fetch(`${dataPath}sections.json`),
    ]);

    if (!productsRes.ok || !sectionsRes.ok)
      throw new Error("Không thể load JSON");

    const products = await productsRes.json();
    const sections = await sectionsRes.json();

    sections.forEach((section) => {
      const container = document.getElementById(`${section.category}-products`);
      if (!container) return;

      const items = products.filter((p) => p.category === section.category);

      // Add loading animation
      container.innerHTML = '<div class="loading-spinner"></div>';

      // Simulate loading delay for better UX
      setTimeout(() => {
        container.innerHTML = items
          .map(
            (p, index) => `
<a href="${isInPagesDir ? "" : "pages/"}product-details-1.html?id=${
              index + 1
            }" class="product block" data-aos="fade-up">
              <div class="product-img-wrapper">
                <img src="${isInPagesDir ? "../" : ""}${p.image}" alt="${
              p.name
            }" loading="lazy">
                ${p.oldPrice ? `<span class="label-sale">GIẢM GIÁ!</span>` : ""}
              </div>
              <div class="product-info">
                <h3 class="product-name">${p.name}</h3>
                <div class="price">
                  ${
                    p.oldPrice
                      ? `<span class="old-price">${p.oldPrice.toLocaleString()}đ</span>`
                      : ""
                  }
                  <span class="current-price">${p.price.toLocaleString()}đ</span>
                </div>
                <div class="sizes">
                  ${
                    p.sizes
                      ? p.sizes.map((s) => `<span>${s}</span>`).join("")
                      : ""
                  }
                </div>
              </div>
            </a>
          `
          )
          .join("");
      }, 500);
    });
  } catch (err) {
    console.error("Lỗi khi load dữ liệu sản phẩm + section:", err);
    showNotification("Không thể tải dữ liệu sản phẩm", "error");
  }
}

// Function to load cart items into cart.html
export function loadCartItems() {
  const cartKey = "teddy_cart"; // Key for localStorage
  const cart = JSON.parse(localStorage.getItem(cartKey)) || [];

  const cartContainer = document.getElementById("cart-items");
  if (!cartContainer) return;

  if (cart.length === 0) {
    cartContainer.innerHTML = "<p>Giỏ hàng của bạn đang trống.</p>";
    return;
  }

  cartContainer.innerHTML = cart
    .map(
      (item) => `
      <div class="cart-item flex items-center justify-between border-b py-4">
        <div class="flex items-center gap-4">
          <img src="${item.image}" alt="${item.name}" class="w-16 h-16 rounded">
          <div>
            <h4 class="font-medium">${item.name}</h4>
            <p class="text-sm text-gray-500">Size: ${item.size}</p>
          </div>
        </div>
        <div class="flex items-center gap-4">
          <p class="font-medium">${
            item.quantity
          } x ${item.price.toLocaleString()}đ</p>
          <button class="remove-item text-red-500 hover:underline" data-id="${
            item.id
          }" data-size="${item.size}">Xóa</button>
        </div>
      </div>
    `
    )
    .join("");

  // Add event listeners to remove buttons
  document.querySelectorAll(".remove-item").forEach((button) => {
    button.addEventListener("click", (e) => {
      const id = button.dataset.id;
      const size = button.dataset.size;

      // Remove item from cart
      const updatedCart = cart.filter(
        (item) => !(item.id === id && item.size === size)
      );

      // Save updated cart to localStorage
      localStorage.setItem(cartKey, JSON.stringify(updatedCart));

      // Reload cart items
      loadCartItems();
    });
  });
}

// Initialize everything when DOM is loaded
document.addEventListener("DOMContentLoaded", () => {
  loadPartials();
  initProductsBySections();
  const collectionSlider = initCollectionSlider();

  // Setup hamburger menu functionality - ensure this runs after partials are loaded
  setTimeout(() => {
    const hamburgerBtn = document.getElementById("hamburgerBtn");
    const navMenu = document.getElementById("navMenu");

    if (hamburgerBtn && navMenu) {
      hamburgerBtn.addEventListener("click", function () {
        // Toggle menu visibility
        if (navMenu.classList.contains("hidden")) {
          navMenu.classList.remove("hidden");
          hamburgerBtn.setAttribute("aria-expanded", "true");
        } else {
          navMenu.classList.add("hidden");
          hamburgerBtn.setAttribute("aria-expanded", "false");
        }
      });
    }

    // Add click event for mobile submenus
    const mobileNavItems = document.querySelectorAll("#navMenu .group");
    mobileNavItems.forEach((item) => {
      const link = item.querySelector("a");
      const dropdown = item.querySelector(".dropdown-menu");

      if (window.innerWidth < 768) {
        link.addEventListener("click", function (e) {
          if (window.innerWidth < 768) {
            e.preventDefault();
            if (dropdown.classList.contains("hidden")) {
              // Close all other dropdowns
              document
                .querySelectorAll("#navMenu .dropdown-menu")
                .forEach((menu) => {
                  if (menu !== dropdown) menu.classList.add("hidden");
                });
              // Open this dropdown
              dropdown.classList.remove("hidden");
            } else {
              dropdown.classList.add("hidden");
            }
          }
        });
      }
    });
  }, 500);

  // Add event listeners for login/register forms if they exist
  const loginForm = document.getElementById("loginForm");
  const registerForm = document.getElementById("registerForm");

  if (loginForm) {
    loginForm.addEventListener("submit", async function (e) {
      e.preventDefault();

      const submitBtn = this.querySelector('button[type="submit"]');
      submitBtn.disabled = true;
      submitBtn.innerHTML =
        '<i class="fas fa-spinner fa-spin"></i> Đang xử lý...';

      try {
        const email = document.getElementById("email").value.trim();
        const password = document.getElementById("password").value;

        const response = await fetch("http://localhost:5000/api/auth/login", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
          body: JSON.stringify({ email, password }),
        });

        const data = await response.json();

        if (!response.ok) {
          throw new Error(data.error || "Đăng nhập thất bại");
        }

        localStorage.setItem("teddy_user", JSON.stringify(data.user));
        localStorage.setItem("teddy_token", data.token);

        showNotification("Đăng nhập thành công!");
        window.location.href = "index.html";
      } catch (error) {
        showNotification(error.message, "error");
      } finally {
        submitBtn.disabled = false;
        submitBtn.innerHTML = "Đăng nhập";
      }
    });
  }

  if (registerForm) {
    registerForm.addEventListener("submit", async function (e) {
      e.preventDefault();

      const submitBtn = this.querySelector('button[type="submit"]');
      submitBtn.disabled = true;
      submitBtn.innerHTML =
        '<i class="fas fa-spinner fa-spin"></i> Đang xử lý...';

      try {
        const name = document.getElementById("name").value.trim();
        const email = document.getElementById("email").value.trim();
        const password = document.getElementById("password").value;
        const confirmPassword =
          document.getElementById("confirm-password").value;
        const agreed = document.getElementById("terms").checked;

        if (!name || !email || !password || !confirmPassword) {
          throw new Error("Vui lòng điền đầy đủ thông tin.");
        }

        if (password !== confirmPassword) {
          throw new Error("Mật khẩu không khớp.");
        }

        if (!/.+@.+\..+/.test(email)) {
          throw new Error("Email không hợp lệ.");
        }

        if (!agreed) {
          throw new Error("Bạn cần đồng ý với điều khoản dịch vụ.");
        }

        const response = await fetch(
          "http://localhost:5000/api/auth/register",
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              name,
              email,
              password,
              avatar:
                "https://via.placeholder.com/40/fdafbc/ffffff?text=" +
                name.charAt(0).toUpperCase(),
            }),
          }
        );

        const data = await response.json();

        if (!response.ok) {
          throw new Error(data.error || "Đăng ký thất bại");
        }

        localStorage.setItem("teddy_user", JSON.stringify(data.user));
        localStorage.setItem("teddy_token", data.token);

        showNotification("Đăng ký thành công!");
        window.location.href = "index.html";
      } catch (error) {
        showNotification(error.message, "error");
      } finally {
        submitBtn.disabled = false;
        submitBtn.innerHTML = "Đăng ký";
      }
    });
  }
});
