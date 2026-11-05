# Lịch trình Nhật Bản 23/12/2026 – 01/01/2027

Bản kế hoạch chi tiết chuyến đi Nhật Bản 10 ngày 9 đêm (Tokyo · Phú Sĩ · Kyoto · Osaka).

Lịch trình, nơi ở và các gợi ý ăn uống được cập nhật theo file `lich-trinh-nhat-ban-23-12-2026_den_01-01-2027.md` người đi cung cấp ngày 04/11/2026. Chuyến bay là VietJet Air HAN → Narita ngày 23/12 và Kansai → HAN ngày 01/01; số hiệu và terminal cần đối chiếu trên vé. Phương án lưu trú là Tokyo 2 đêm, Fuji 2 đêm, Kyoto 3 đêm, Osaka 2 đêm. Ba khách sạn đầu đã được chọn nhưng chưa được xác nhận là đã đặt hoặc thanh toán; Osaka chưa chọn. Lịch Fujiten là nửa ngày 26/12, giao thừa dự kiến ở Sumiyoshi Taisha với Hōzenji là phương án dự phòng.

Trang chủ mang phong cách nhật ký hành trình vintage: giấy ngà, mực nâu, ảnh như dán vào trang sổ và mục lục dạng thẻ. Cảnh thay theo giờ Nhật Bản, có nút xem thủ công sáu cảnh và bốn lối vào Lịch trình, Ăn uống, Mua sắm, Chụp ảnh. Menu chứa Chỗ ở, Chi phí, Chuẩn bị, nút bật/tắt tuyết và nút chuyển đổi giao diện Sáng / Tối (Dark mode). Giao diện tối được tối ưu hóa theo phong cách đêm đông Nhật Bản, có thể bật/tắt từ thanh tiêu đề, menu hoặc thanh điều hướng chọn ngày, và được ghi nhớ trên thiết bị. Tuyết chỉ xuất hiện ở ảnh Kawaguchiko có tuyết và tự tắt khi thiết bị bật chế độ giảm chuyển động.

Phần trang chủ dùng copy song ngữ Anh–Nhật; các chương thông tin và lịch trình chi tiết vẫn dùng tiếng Việt. Chữ của sáu cảnh nằm trong `experience-data.js`.

## Chạy tại máy

Trong thư mục repo, chạy `python3 -m http.server 8000`, rồi mở `http://127.0.0.1:8000/`. Đây là website tĩnh, không cần cài thư viện hay chạy build. GitHub Pages có thể phục vụ trực tiếp từ nhánh `main`.

Để kiểm tra cảnh theo từng giờ, dùng `?previewHour=7` (giá trị 0–23). Tải lại trang sẽ chọn cảnh theo giờ Nhật Bản hoặc giờ giả lập; thao tác bấm mũi tên chỉ giữ cảnh được chọn trong phiên xem hiện tại.

Widget “Một lá thư nhỏ từ Nhật Bản” chọn ngẫu nhiên một trong 60 lá thư và ghép với một nhân vật phù hợp chủ đề. Có thể kiểm tra trực tiếp bằng `?previewLetter=kaizen&previewCharacter=naruto`; các mã nhân vật gồm `doraemon-snack`, `doraemon-walk`, `doraemon-broom`, `naruto` và `kuromi`.

Ảnh trang chủ, nguồn và giấy phép nằm trong `experience-data.js`; các ảnh trong `hero/` được thu nhỏ và cắt khung khi hiển thị. Dữ liệu thẻ Ăn uống, Mua sắm, Chụp ảnh cũng ở file này. `trip-data.js` chứa lịch 10 ngày; `experience.js` dựng giao diện; bộ ảnh và phần HTML các chương nằm trong `index.html`.

Lịch trình 31/12 dành buổi sáng cho Katsuoji. Giờ mở cửa và xe buýt dịp cuối năm 2026 cần được xác nhận lại gần ngày đi.

- **Trang web xem online:** https://thb030100.github.io/nhat-ban-2026/
- **File Google My Maps:** `nhat-ban-23-01.kml` và `nhat-ban-23-01.csv`
