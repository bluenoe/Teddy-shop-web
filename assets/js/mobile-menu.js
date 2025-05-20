// Mobile Menu Functionality
document.addEventListener("DOMContentLoaded", function () {
  // Elements
  const hamburgerBtn = document.getElementById("hamburgerBtn");
  const navMenu = document.getElementById("navMenu");
  const userMenuBtnMobile = document.getElementById("userMenuBtnMobile");
  const userDropdownMobile = document.getElementById("userDropdownMobile");
  const dropdownGroups = document.querySelectorAll(".dropdown-wrapper");

  // Create overlay element
  const overlay = document.createElement("div");
  overlay.className = "nav-overlay";
  document.body.appendChild(overlay);

  // Toggle mobile menu
  if (hamburgerBtn) {
    hamburgerBtn.addEventListener("click", function () {
      navMenu.classList.toggle("active");
      overlay.classList.toggle("active");

      // Toggle hamburger icon
      const spans = hamburgerBtn.querySelectorAll("span");
      if (navMenu.classList.contains("active")) {
        spans[0].style.transform = "rotate(45deg) translate(5px, 5px)";
        spans[1].style.opacity = "0";
        spans[2].style.transform = "rotate(-45deg) translate(5px, -5px)";
        hamburgerBtn.setAttribute("aria-expanded", "true");
      } else {
        spans[0].style.transform = "none";
        spans[1].style.opacity = "1";
        spans[2].style.transform = "none";
        hamburgerBtn.setAttribute("aria-expanded", "false");
      }
    });
  }

  // Close menu when clicking overlay
  overlay.addEventListener("click", function () {
    navMenu.classList.remove("active");
    overlay.classList.remove("active");

    // Reset hamburger icon
    if (hamburgerBtn) {
      const spans = hamburgerBtn.querySelectorAll("span");
      spans[0].style.transform = "none";
      spans[1].style.opacity = "1";
      spans[2].style.transform = "none";
      hamburgerBtn.setAttribute("aria-expanded", "false");
    }
  });

  // Toggle user dropdown on mobile
  if (userMenuBtnMobile) {
    userMenuBtnMobile.addEventListener("click", function (e) {
      e.stopPropagation();
      userDropdownMobile.classList.toggle("hidden");
      userMenuBtnMobile.setAttribute(
        "aria-expanded",
        userDropdownMobile.classList.contains("hidden") ? "false" : "true"
      );
    });
  }

  // Handle dropdown menus on mobile
  dropdownGroups.forEach((group) => {
    const link = group.querySelector("a");

    // Thêm icon mũi tên cho menu mobile
    if (window.innerWidth <= 767 && link) {
      // Kiểm tra xem đã có icon chưa để tránh thêm nhiều lần
      if (!link.querySelector(".mobile-dropdown-arrow")) {
        const arrow = document.createElement("i");
        arrow.className = "fas fa-chevron-down ml-2 mobile-dropdown-arrow";
        link.appendChild(arrow);
      }

      link.addEventListener("click", function (e) {
        e.preventDefault();
        group.classList.toggle("active");

        // Xoay mũi tên khi mở dropdown
        const arrow = link.querySelector(".mobile-dropdown-arrow");
        if (arrow) {
          if (group.classList.contains("active")) {
            arrow.style.transform = "rotate(180deg)";
          } else {
            arrow.style.transform = "rotate(0deg)";
          }
        }
      });
    }
  });

  // Đảm bảo các dropdown menu đóng khi click vào menu item
  const dropdownMenuItems = document.querySelectorAll(".dropdown-menu a");
  dropdownMenuItems.forEach((item) => {
    item.addEventListener("click", function () {
      // Đóng mobile menu khi chọn một mục
      navMenu.classList.remove("active");
      overlay.classList.remove("active");

      // Reset hamburger icon
      if (hamburgerBtn) {
        const spans = hamburgerBtn.querySelectorAll("span");
        spans[0].style.transform = "none";
        spans[1].style.opacity = "1";
        spans[2].style.transform = "none";
        hamburgerBtn.setAttribute("aria-expanded", "false");
      }
    });
  });

  // Close dropdowns when clicking outside
  document.addEventListener("click", function (e) {
    // Close user dropdown if clicked outside
    if (
      userDropdownMobile &&
      !userMenuBtnMobile.contains(e.target) &&
      !userDropdownMobile.contains(e.target)
    ) {
      userDropdownMobile.classList.add("hidden");
      if (userMenuBtnMobile) {
        userMenuBtnMobile.setAttribute("aria-expanded", "false");
      }
    }
  });

  // Handle window resize
  window.addEventListener("resize", function () {
    if (window.innerWidth > 767) {
      // Reset mobile menu when resizing to desktop
      navMenu.classList.remove("active");
      overlay.classList.remove("active");

      if (hamburgerBtn) {
        const spans = hamburgerBtn.querySelectorAll("span");
        spans[0].style.transform = "none";
        spans[1].style.opacity = "1";
        spans[2].style.transform = "none";
        hamburgerBtn.setAttribute("aria-expanded", "false");
      }
    }
  });
});
