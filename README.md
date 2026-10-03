# 🌟 DỰ ÁN LANDING PAGE: NHÀ GIẢ KIM (THE ALCHEMIST)

Giao diện Landing Page cao cấp, chuẩn mỹ thuật cổ điển hoàng kim (Vintage Editorial & Desert Alchemy Aesthetic) giới thiệu tác phẩm bất hủ **Nhà Giả Kim** của đại văn hào **Paulo Coelho**.

---

## 📁 CẤU TRÚC THƯ MỤC DỰ ÁN

Dự án được phân chia mô-đun hóa chính xác theo yêu cầu của bạn:

```
NhaGiaKim/
│
├── index.html                  # Trang chủ hoàn chỉnh tích hợp toàn bộ các phần
│
├── hero.html                   # File riêng: Phần 1 - Hero Banner
├── author.html                 # File riêng: Phần 2 - 01 THE AUTHOR (Tác giả)
├── review.html                 # File riêng: Phần 3 - 02 RECOGNITION (Đánh giá báo chí)
├── journey.html                # File riêng: Phần 4 - 03 THE JOURNEY (Hành trình)
├── feedback.html               # File riêng: Phần 5 - 04 READERS (Độc giả & Đánh giá)
├── purchase.html               # File riêng: Phần 6 - Mua sách & Footer
│
├── css/
│   ├── global.css              # 🎯 CSS DÙNG CHUNG: Design tokens, biến màu, font chữ, reset, buttons, animations
│   ├── header.css              # CSS riêng: Header & Thanh điều hướng cố định
│   ├── hero.css                # CSS riêng: Banner chính, hiệu ứng 3D cuốn sách, canvas hạt bụi vàng
│   ├── author.css              # CSS riêng: Chân dung, chữ ký mạ vàng, tiểu sử & bảng thông số
│   ├── recognition.css         # CSS riêng: Logo & nhận xét từ NYT, BBC, The Guardian, TIME, Washington Post
│   ├── journey.css             # CSS riêng: Nghệ thuật Typography châm ngôn trên nền sa mạc cổ
│   ├── readers.css             # CSS riêng: Feedback card, điểm 4.8/5 & thanh tỷ lệ xếp hạng sao
│   └── footer.css              # CSS riêng: Footer, form newsletter & modal đặt mua sách nhanh
│
├── js/
│   └── main.js                 # ⚡ JAVASCRIPT HIỆU ỨNG HIỆN RA XỊN:
│                               # - Scroll Reveal (IntersectionObserver mượt mà)
│                               # - Hiệu ứng 3D Tilt xoay theo chuột cho bìa sách
│                               # - Canvas bụi vàng lấp lánh (Golden Alchemy Dust)
│                               # - Thanh tiến trình phần trăm rating tự động chạy
│                               # - Navbar Sticky Glassmorphism đổi màu khi cuộn
│                               # - Modal đặt mua sách nhanh tương tác
│
├── components/                 # Các tệp thành phần nhỏ nếu cần nhúng include
│   ├── header.html
│   ├── hero.html
│   ├── author.html
│   ├── recognition.html
│   ├── journey.html
│   ├── readers.html
│   └── footer.html
│
├── img/                        # Chứa các ảnh nền có sẵn chất lượng cao:
│   ├── banner.png              # Ảnh núi đá và bìa sách chính
│   └── anh2.png                # Ảnh nền sa mạc, lữ khách và la bàn cổ cho phần 03 THE JOURNEY
│
└── images/                     # Thư mục để bạn thêm các ảnh tuỳ chỉnh:
    ├── README.txt              # Hướng dẫn chi tiết tên từng ảnh
    ├── hero-book.png           # (Tùy chọn) Bìa sách 3D riêng
    ├── author.jpg              # (Tùy chọn) Chân dung Paulo Coelho
    ├── avatar-1.jpg -> 4.jpg   # (Tùy chọn) Ảnh đại diện độc giả
    └── footer-desert.jpg       # (Tùy chọn) Ảnh thumbnail sa mạc đêm footer
```

---

## 🎨 ĐẶC ĐIỂM THIẾT KẾ & HIỆU ỨNG NỔI BẬT

1. **Hiệu ứng Scroll Reveal (Hiện ra mượt mà)**:
   - Các khối nội dung từ từ trượt lên (fade-up), trượt ngang (fade-left, fade-right) và phóng nhẹ (zoom-in) với stagger delay khi bạn cuộn màn hình tới.
2. **Hiệu ứng 3D Tilt trên Bìa Sách**:
   - Khi di chuyển chuột trên cuốn sách Nhà Giả Kim ở mục Hero, bìa sách sẽ nghiêng theo góc nhìn 3D chân thực kèm vệt sáng hoàng kim trượt qua.
3. **Canvas Hạt Bụi Vàng Giả Kim (Golden Alchemy Dust)**:
   - Tái hiện lại những hạt cát vàng lấp lánh bay lơ lửng trong không gian sa mạc huyền bí.
4. **Thanh Phân Bổ Đánh Giá (Rating Breakdown)**:
   - Khi cuộn đến mục Độc giả (04 READERS), các thanh tỉ lệ (78%, 15%, 5%, 1%, 1%) tự động chạy dài từ 0% đến vị trí thực tế.
5. **Cơ chế Fallback thông minh**:
   - Dù bạn chưa thêm bất kỳ ảnh nào, layout vẫn hiển thị đồ họa SVG & khung nền vàng hoàng gia tuyệt đẹp, không bao giờ bị vỡ layout hay lỗi ảnh!
   - Đã tích hợp sẵn ảnh `img/banner.png` và `img/anh2.png` của bạn vào nền Hero và Journey!
6. **Modal Mua Sách Nhanh**:
   - Bấm vào bất kỳ nút **MUA SÁCH** nào trên toàn trang đều sẽ bật Popup đặt hàng với tính năng chọn số lượng và tự động cập nhật tổng tiền.

---

## 🚀 CÁCH SỬ DỤNG

- **Xem toàn bộ Landing Page**: Mở trực tiếp file `index.html` bằng bất kỳ trình duyệt nào (Chrome, Edge, Firefox, Cốc Cốc...) hoặc dùng tiện ích **Live Server** trong VS Code.
- **Xem / chỉnh sửa từng phần riêng lẻ**: Mở các file tương ứng `hero.html`, `author.html`, `review.html`, `journey.html`, `feedback.html`, `purchase.html`.
