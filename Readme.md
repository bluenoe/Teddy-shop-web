# Teddy Shop - Website Bán Gấu Bông Online

## Giới thiệu

Teddy Shop là một website thương mại điện tử chuyên về gấu bông, được phát triển với mục tiêu mang đến trải nghiệm mua sắm trực tuyến tốt nhất cho khách hàng. Website được xây dựng với các công nghệ web hiện đại, giao diện thân thiện và đầy đủ tính năng cần thiết.

## Tính năng chính

- **Trang chủ**: Hiển thị sản phẩm nổi bật, banner quảng cáo, và các danh mục sản phẩm
- **Cửa hàng**: Danh sách sản phẩm với bộ lọc theo kích thước, giá, và loại gấu
- **Chi tiết sản phẩm**: Thông tin chi tiết, hình ảnh, đánh giá và mô tả sản phẩm
- **Giỏ hàng**: Quản lý sản phẩm, cập nhật số lượng và tính tổng tiền
- **Thanh toán**: Quy trình thanh toán an toàn với nhiều phương thức
- **Tài khoản người dùng**: Đăng ký, đăng nhập, quản lý thông tin cá nhân
- **Blog**: Chia sẻ thông tin và tin tức về gấu bông
- **Liên hệ**: Thông tin liên hệ và form gửi tin nhắn

## Công nghệ sử dụng

### Frontend

- **HTML5 & CSS3**

  - Semantic HTML cho cấu trúc trang web rõ ràng
  - CSS3 với các tính năng hiện đại như Flexbox, Grid, Animations
  - Tối ưu SEO với các thẻ meta và semantic tags

- **Tailwind CSS**

  - Framework CSS utility-first giúp phát triển nhanh
  - Responsive design dễ dàng với các breakpoints có sẵn
  - Tùy chỉnh theme với màu sắc và font chữ riêng
  - Tối ưu performance với PurgeCSS

- **JavaScript (ES6+)**

  - Xử lý tương tác người dùng
  - Quản lý state với localStorage
  - Xử lý form validation
  - Tạo animations mượt mà
  - Tích hợp với REST API

- **Font Awesome**
  - Icon library phong phú
  - Dễ dàng tùy chỉnh kích thước và màu sắc
  - Tối ưu performance với subset loading

### Backend

- **Node.js & Express.js**

  - Xây dựng RESTful API
  - Middleware cho xử lý request/response
  - Routing system linh hoạt
  - Error handling tập trung
  - File upload và xử lý

- **JWT (JSON Web Tokens)**

  - Xác thực người dùng an toàn
  - Stateless authentication
  - Token refresh mechanism
  - Secure cookie handling

- **CORS (Cross-Origin Resource Sharing)**

  - Bảo mật cross-origin requests
  - Cấu hình linh hoạt cho development/production
  - Whitelist domains được phép truy cập

- **dotenv**
  - Quản lý biến môi trường
  - Tách biệt configuration và code
  - Bảo mật thông tin nhạy cảm
  - Dễ dàng deploy trên nhiều môi trường

### Công cụ phát triển

- **VS Code**

  - IDE chính với các extensions hữu ích
  - Live Server cho development
  - Git integration
  - Code formatting và linting

- **Git & GitHub**

  - Version control
  - Branch management
  - Code review
  - Issue tracking

- **npm**
  - Package management
  - Script automation
  - Dependency tracking
  - Security auditing

### Performance & Optimization

- **Image Optimization**

  - Lazy loading
  - Responsive images
  - WebP format support
  - Image compression

- **Code Optimization**

  - Minification
  - Tree shaking
  - Code splitting
  - Caching strategies

- **Security**
  - HTTPS enforcement
  - Content Security Policy
  - XSS protection
  - SQL injection prevention

## Cấu trúc dự án

```
teddy_shop/
├── assets/          # Tài nguyên tĩnh (CSS, JS)
├── data/           # Dữ liệu mẫu
├── img/            # Hình ảnh
├── partials/       # Components tái sử dụng
├── server/         # Backend API
└── *.html          # Các trang chính
```

## Các trang chính

1. `index.html` - Trang chủ
2. `shop.html` - Cửa hàng
3. `product-details.html` - Chi tiết sản phẩm
4. `cart.html` - Giỏ hàng
5. `checkout.html` - Thanh toán
6. `login.html` & `register.html` - Đăng nhập/Đăng ký
7. `profile.html` - Tài khoản người dùng
8. `blog.html` - Blog
9. `about.html` - Giới thiệu
10. `contact.html` - Liên hệ

## Tính năng bảo mật

- Xác thực JWT
- Bảo vệ CSRF
- Mã hóa mật khẩu
- CORS configuration
- Input validation

## Responsive Design

- Mobile-first approach
- Breakpoints cho tablet và desktop
- Tối ưu hiển thị trên mọi thiết bị
- Menu responsive

## Cài đặt và Chạy

1. Clone repository
2. Cài đặt dependencies:
   ```bash
   npm install
   ```
3. Tạo file .env và cấu hình:
   ```
   PORT=3000
   JWT_SECRET=your_secret_key
   ```
4. Chạy server:
   ```bash
   npm start
   ```

## Tương lai phát triển

- Tích hợp thanh toán online
- Thêm tính năng đánh giá sản phẩm
- Tối ưu SEO
- Thêm tính năng tìm kiếm nâng cao
- Tích hợp chatbot hỗ trợ

## Tác giả

[Your Name] - Sinh viên [Your University]

## Giấy phép

MIT License
