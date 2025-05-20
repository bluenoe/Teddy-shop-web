document.addEventListener("DOMContentLoaded", function () {
  const promoSidebar = document.querySelector(".promo-banners");
  const quickNavSidebar = document.querySelector(".quick-nav");
  const hotTrendSection = document.querySelector(
    "#gau-bong-hot-trend-products"
  );
  const footer = document.querySelector("#siteFooter");

  function handleScroll() {
    const scrollPosition = window.scrollY;
    const scrollHeight = window.innerHeight;
    const hotTrendPosition = hotTrendSection ? hotTrendSection.offsetTop : 0;
    const footerPosition = footer ? footer.offsetTop : 0;
    const footerThreshold = footerPosition - scrollHeight;

    // Hiển thị sidebar sau khi qua khỏi phần hot trend và trước khi đến footer
    if (
      scrollPosition >= hotTrendPosition &&
      scrollPosition < footerThreshold
    ) {
      promoSidebar && promoSidebar.classList.add("show");
      quickNavSidebar && quickNavSidebar.classList.add("show");
    } else {
      promoSidebar && promoSidebar.classList.remove("show");
      quickNavSidebar && quickNavSidebar.classList.remove("show");
    }
  }

  window.addEventListener("scroll", handleScroll);
  // Kiểm tra vị trí ban đầu
  handleScroll();
});
