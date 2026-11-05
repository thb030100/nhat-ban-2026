// Lịch và nơi lưu trú được đồng bộ từ file Markdown người đi cung cấp ngày 04/11/2026.
// "Đã chọn" là phương án lưu trú, không đồng nghĩa đã đặt phòng hoặc thanh toán.
(function(){
  function S(n,q,m,h){return {n:n,q:q||n,m:m||"train",h:!!h}}
  window.JP_TRIP={
    overview:{numbered:false,pts:[
      S("Narita · 23/12","Narita International Airport"),S("Tokyo · 23–24/12","Shinjuku Washington Hotel","train"),
      S("Fuji · 25–26/12","Super Hotel Fujikawaguchiko Natural Hot Spring","road"),
      S("Mishima · 27/12","Mishima Station","road"),S("Kyoto · 27–29/12","Miyako Hotel Kyoto Hachijo","train"),
      S("Osaka · 30–31/12","Namba Station Osaka","train"),S("Kansai · 01/01","Kansai International Airport","train")
    ]},
    days:[
      {id:"d23",dnum:"23",dateLabel:"23",w:"Thứ 4",k:"東京",title:"Đến Narita, về Shinjuku nghỉ ngơi",sleep:"Shinjuku Washington Hotel",
       maps:[{pts:[S("Narita Airport","Narita International Airport"),S("Shinjuku Station","Shinjuku Station Tokyo","train"),S("Shinjuku Washington Hotel","Shinjuku Washington Hotel","walk",true)]}],
       items:[
        ["08:20 VN","Cất cánh từ Hà Nội","VietJet Air HAN → NRT, bay thẳng; giờ khởi hành là giờ Việt Nam.","move"],
        ["15:25 JST","Hạ cánh Narita","Đến sân bay NRT theo ảnh hành trình; kiểm tra terminal trên vé điện tử.","move"],
        ["15:25–17:00","Nhập cảnh và nhận hành lý","Dành khoảng 75–95 phút; có thể lâu hơn khi sân bay đông."],
        ["17:00–18:45","Narita Express về Shinjuku","Chọn chuyến thẳng phù hợp; tính 1 giờ 20–40 phút trên tàu và thêm thời gian chờ.","move"],
        ["18:45–19:30","Nhận phòng Shinjuku Washington Hotel","Đi từ cửa Nam ga Shinjuku đến khách sạn; cộng thời gian tìm lối ra và kéo vali."],
        ["19:30–21:00","Ăn tối gần ga Shinjuku","Đi dạo nhẹ và ngủ sớm, không xếp thêm điểm tham quan xa."]
       ],notes:[["tip","Giờ bay HAN dùng giờ Việt Nam; các mốc tại Nhật dùng JST. Xem <a href=\"https://www.narita-airport.jp/en/access/train/\" target=\"_blank\" rel=\"noopener\">hướng dẫn tàu từ Narita</a> và <a href=\"https://whgshinjuku.washington-hotels.jp/access/\" target=\"_blank\" rel=\"noopener\">đường đến khách sạn</a>."]]},

      {id:"d24",dnum:"24",dateLabel:"24",w:"Thứ 5",k:"東京",title:"Tokyo ngày Noel, đèn Shinjuku buổi tối",sleep:"Shinjuku Washington Hotel",
       maps:[{pts:[S("Khách sạn","Shinjuku Washington Hotel",null,true),S("Meiji Jingu","Meiji Jingu Tokyo"),S("Harajuku · Omotesando","Harajuku Omotesando Tokyo","walk"),S("Shibuya","Shibuya Crossing"),S("Shinjuku South","Shinjuku Southern Terrace")]}],
       items:[
        ["08:30–10:30","Meiji Jingu","Dạo lối rừng và khu đền; đi JR đến Harajuku.",null,"meiji"],
        ["10:30–12:30","Harajuku và Omotesando","Đi bộ, ăn trưa trong khu vực."],
        ["13:30–16:00","Shibuya","Ngắm giao lộ, phố mua sắm và café; nếu muốn lên đài quan sát, đặt vé riêng.",null,"shibuya"],
        ["16:00–18:00","Về Shinjuku nghỉ","Chuẩn bị hành lý cho chặng Fuji sáng hôm sau."],
        ["18:00–19:30","Ăn tối Noel","Chọn nhà hàng quanh cửa Nam ga Shinjuku, nên đặt bàn trước."],
        ["19:30–20:30","Shinjuku South Illumination","Dạo New South Gate và Southern Terrace dưới ánh đèn cuối năm."],
        ["20:30–21:30","Về khách sạn","Nghỉ sớm trước chuyến bus 09:15 ngày 25/12."]
       ],notes:[["tip","Xem <a href=\"https://www.gotokyo.org/en/spot/ev134/index.html\" target=\"_blank\" rel=\"noopener\">thông tin Shinjuku South Illumination</a> và xác nhận lịch sự kiện gần ngày đi."]]},

      {id:"d25",dnum:"25",dateLabel:"25",w:"Thứ 6",k:"富士",title:"Kawaguchiko và ánh chiều Yamanakako",sleep:"Super Hotel Fujikawaguchiko Natural Hot Spring",
       maps:[{pts:[S("Busta Shinjuku","Shinjuku Expressway Bus Terminal"),S("Kawaguchiko Station","Kawaguchiko Station","road"),S("Super Hotel","Super Hotel Fujikawaguchiko Natural Hot Spring","road",true),S("Nagaike Shinsui Park","Nagaike Shinsui Park","road"),S("Hirano Beach","Hirano Beach Yamanakako","road")]}],
       items:[
        ["08:00–09:05","Ăn sáng, trả phòng và đến Busta Shinjuku","Mang toàn bộ vali theo chặng Fuji; dành 25–30 phút đi bộ và có mặt trước giờ bus.","move","busta"],
        ["09:15–11:00","Bus Shinjuku → Kawaguchiko","Chuyến thẳng dự kiến khoảng 1 giờ 45 phút; giữ đệm nếu đường đông.","move"],
        ["11:00–11:30","Gửi vali tại Super Hotel","Taxi từ ga khoảng 5 phút; khách sạn nhận phòng từ 15:00."],
        ["11:30–12:15","Ăn trưa Kawaguchiko","Ưu tiên quán gần ga hoặc khách sạn trước khi đi Yamanakako."],
        ["12:15–13:45","Nagaike Shinsui Park","Taxi có tài xế đưa tới bờ hồ Yamanaka; chụp Fuji và mặt hồ tùy mây."],
        ["13:45–15:15","Hirano Beach","Đi dọc hồ, dừng chụp ảnh và uống đồ nóng."],
        ["15:15–16:45","Ánh chiều ở Hirano","Chọn điểm dừng ven hồ hợp lệ; mặt trời lặn khoảng 16:38 nhưng có thể khuất núi sớm hơn."],
        ["16:45–20:00","Về Kawaguchiko, nhận phòng và ăn tối","Taxi trở lại Super Hotel; nghỉ và dùng onsen nếu muốn."]
       ],notes:[["warn","Nếu bus muộn 45–60 phút, rút ngắn Nagaike và ưu tiên Hirano trước 15:30. Đây không phải cam kết thấy Diamond Fuji đúng vị trí Hirano."],["tip","Đặt taxi khoảng 12:15–17:30 và hỏi rõ phụ phí chờ, lộ trình, giờ trả khách."]]},

      {id:"d26",dnum:"26",dateLabel:"26",w:"Thứ 7",k:"富士",title:"Fujiten nửa ngày, chiều bên hồ Kawaguchi",sleep:"Super Hotel Fujikawaguchiko Natural Hot Spring",
       maps:[{pts:[S("Super Hotel","Super Hotel Fujikawaguchiko Natural Hot Spring",null,true),S("Fujiten","Fujiten Snow Resort","road"),S("Oishi Park","Oishi Park Fujikawaguchiko","road"),S("Bờ bắc Kawaguchiko","Lake Kawaguchi north shore","walk")]}],
       items:[
        ["07:30–08:45","Ăn sáng và đi Fujiten","Chỉ đi nếu khu trượt mở đường cho người mới và lớp học còn chỗ; taxi khoảng 20–30 phút.","move"],
        ["08:45–10:15","Thuê đồ và làm quen","Nhận vé lift, mặc đồ; cuối tuần có thể xếp hàng."],
        ["10:15–12:15","Lớp trượt tuyết cơ bản","Dự kiến lớp 2 giờ nếu được mở đúng ngày; thử thêm đường dễ sau lớp.","ski","fujiten"],
        ["12:15–13:30","Trả đồ, ăn trưa và về hồ","Taxi về Kawaguchiko sau khi ăn nhanh tại khu trượt.","move"],
        ["13:30–16:15","Oishi Park và bờ bắc hồ","Ngắm Fuji qua mặt hồ, nghỉ café. Nếu mây che, có thể quay lại sáng 27/12.",null,"winterlake"],
        ["18:00–20:00","Ăn tối Kawaguchiko","Nghỉ sớm tại khách sạn."]
       ],notes:[["warn","Giờ lớp, đường trượt và tình trạng mở cửa 2026–27 cần xác nhận. Vé lift 4 giờ cuối tuần đang niêm yết ¥5.800/người, chưa gồm thuê đồ, lớp và taxi. <a href=\"https://www.fujiten.net/en/charges/\" target=\"_blank\" rel=\"noopener\">Giá Fujiten</a> · <a href=\"https://www.fujiten.net/en/school/\" target=\"_blank\" rel=\"noopener\">lớp học</a>."]]},

      {id:"d27",dnum:"27",dateLabel:"27",w:"Chủ nhật",k:"京都",title:"Rời Fuji, đến Kyoto qua Mishima",sleep:"Miyako Hotel Kyoto Hachijo",
       maps:[{pts:[S("Super Hotel","Super Hotel Fujikawaguchiko Natural Hot Spring",null,true),S("Kawaguchiko Station","Kawaguchiko Station","road"),S("Mishima North Exit","Mishima Station North Exit","road"),S("Kyoto Station","Kyoto Station","train"),S("Miyako Hotel","Miyako Hotel Kyoto Hachijo","walk",true)]}],
       items:[
        ["07:00–09:10","Ăn sáng, ngắm Fuji hoặc quay lại Oishi","Chỉ đi Oishi nếu chiều hôm trước bị mây che; còn lại dành sáng nghỉ."],
        ["09:10–10:30","Trả phòng và đến ga Kawaguchiko","Lấy toàn bộ vali tại khách sạn, mang theo lên bus đi Mishima và có mặt trước giờ xe chạy.","move"],
        ["10:55–12:25","Mishima–Kawaguchiko Liner","Bus đặt chỗ trước đến Mishima Station North Exit; giờ thực tế cần xác nhận.","move"],
        ["12:25–13:30","Đệm chuyển tàu và ăn trưa","Chừa ít nhất 45–60 phút trước Shinkansen để phòng bus trễ."],
        ["13:30–16:15","Shinkansen Mishima → Kyoto","Mang vali theo cùng chuyến tàu. Ưu tiên Hikari có dừng Mishima; nếu không phù hợp dùng Kodama/đổi tàu. Nozomi không dừng Mishima.","move","shinkansen"],
        ["16:15–17:30","Nhận phòng Miyako Hotel Kyoto Hachijo","Cùng vali ra cửa Hachijo của ga Kyoto, đi bộ khoảng 2 phút đến khách sạn."],
        ["18:00–20:30","Ăn tối gần ga Kyoto","Honke Daiichi Asahi Honten là một lựa chọn nếu còn mở và hàng chờ vừa phải."]
       ],notes:[["warn","Đặt bus Mishima trước; chưa khóa chuyến Shinkansen cho tới khi kiểm tra lịch 27/12. <a href=\"https://bus.fujikyu.co.jp/highway/mishima/\" target=\"_blank\" rel=\"noopener\">Fujikyu Liner</a> · <a href=\"https://travel.jr-central.co.jp/plan/tokushu/shinkansen/station/\" target=\"_blank\" rel=\"noopener\">ga dừng Shinkansen</a>."]]},

      {id:"d28",dnum:"28",dateLabel:"28",w:"Thứ 2",k:"京都",title:"Kimono và Kyoto phía Đông",sleep:"Miyako Hotel Kyoto Hachijo",
       maps:[{pts:[S("Miyako Hotel","Miyako Hotel Kyoto Hachijo",null,true),S("Okamoto Gion","Okamoto Kimono Rental Gion","road"),S("Gion Shirakawa · cầu Tatsumi","Tatsumi Bridge Gion Kyoto","walk"),S("Yasaka Shrine","Yasaka Shrine Kyoto","walk"),S("Maruyama Park","Maruyama Park Kyoto","walk"),S("Ninenzaka · Sannenzaka","Ninenzaka Sannenzaka Kyoto","walk"),S("Kiyomizu-dera","Kiyomizu-dera","walk")]}],
       items:[
        ["08:00–09:00","Ăn sáng và đến tiệm kimono ở Gion","Đi từ Miyako Hotel Kyoto Hachijo; chừa thời gian tìm cửa hàng và làm thủ tục."],
        ["09:00–09:45","Chọn và mặc kimono","Làm tóc nếu đã đặt. Okamoto Gion là một lựa chọn; xác nhận giờ hoạt động ngày 28/12."],
        ["09:45–11:45","Chụp ảnh Gion Shirakawa và cầu Tatsumi","Dành hai giờ đi chậm dọc ven kênh; có thể nghỉ café ngắn. Chỉ chụp nơi được phép và giữ lối đi thông thoáng.",null,"gion"],
        ["11:45–12:15","Trả kimono và thay đồ","Quay lại cửa hàng đúng hạn, kiểm tra đủ phụ kiện trước khi trả."],
        ["12:15–13:15","Ăn trưa ở Gion","Chọn quán gần cửa hàng để không mất thêm thời gian di chuyển."],
        ["13:15–14:45","Yasaka Shrine và Maruyama Park","Dạo chậm, ngồi nghỉ trong công viên."],
        ["14:45–16:45","Ninenzaka, Sannenzaka và Kiyomizu-dera","Đi bộ qua hai con dốc; chỉ vào Kiyomizu-dera nếu còn sức.",null,"sannenzaka"],
        ["17:00–20:00","Về nghỉ rồi ăn tối","Nếu muốn ngày nhẹ hơn, bỏ Kiyomizu-dera và ở lại Gion hoặc Maruyama lâu hơn."]
       ],notes:[["warn","Xác nhận giờ hoạt động và đặt trước việc làm tóc tại <a href=\"https://www.okamoto-kimono.com/storeinfo/gion.html\" target=\"_blank\" rel=\"noopener\">Okamoto Gion</a>. Khi chụp ảnh, tuân thủ <a href=\"https://kyoto.travel/en/responsible-travel/\" target=\"_blank\" rel=\"noopener\">hướng dẫn du lịch có trách nhiệm của Kyoto</a>; không vào lối tư, không cản đường và không chụp người khác khi chưa được phép."]]},

      {id:"d29",dnum:"29",dateLabel:"29",w:"Thứ 3",k:"京都",title:"Fushimi Inari và Arashiyama",sleep:"Miyako Hotel Kyoto Hachijo",
       maps:[
        {cap:"Tuyến chính buổi sáng",pts:[S("Miyako Hotel","Miyako Hotel Kyoto Hachijo",null,true),S("Fushimi Inari","Fushimi Inari Taisha"),S("Kyoto Station","Kyoto Station"),S("Saga-Arashiyama","Saga-Arashiyama Station"),S("Rừng tre","Arashiyama Bamboo Grove","walk"),S("Togetsukyo","Togetsukyo Bridge","walk")]},
        {cap:"Tùy chọn tàu Sagano buổi chiều",pts:[S("Arashiyama","Arashiyama Kyoto",null,true),S("Umahori Station","Umahori Station","train"),S("Torokko Kameoka","Torokko Kameoka Station","walk"),S("Torokko Saga","Torokko Saga Station","train"),S("Kyoto Station","Kyoto Station","train")]}
       ],
       items:[
        ["07:15–09:00","Fushimi Inari Taisha","Tàu JR Nara Line từ Kyoto Station đến Inari; đi sớm qua rừng cổng torii.",null,"fushimi"],
        ["09:00–10:15","Qua ga Kyoto đến Saga-Arashiyama","Tính thời gian đổi tàu và đi bộ.","move"],
        ["10:15–12:30","Rừng tre và cầu Togetsukyo","Tenryu-ji nếu mở ngày 29/12; không xếp thêm điểm xa.",null,"arashiyama"],
        ["12:30–13:30","Ăn trưa Arashiyama","Chọn quán thuận đường."],
        ["13:30–18:00","Phương án nhẹ · về trung tâm Kyoto","Nghỉ café, mua quà hoặc về khách sạn; để buổi chiều tự do và ăn tối khoảng 18:00."],
        ["14:45–18:00","Tùy chọn · tàu Sagano","Ở lại Arashiyama nghỉ café; khoảng 14:45 đi JR đến Umahori, đi bộ tới Torokko Kameoka, lên chuyến 16:30 → 17:04 về Torokko Saga rồi trở lại Kyoto Station khoảng 18:00.","move"],
        ["18:00–20:00","Ăn tối Kyoto","Giờ ăn có thể muộn hơn một chút nếu chọn tàu Sagano."]
       ],notes:[["tip","Chọn một trong hai phương án buổi chiều. Nếu đi tàu Sagano, kiểm tra và đặt chỗ theo <a href=\"https://www.sagano-kanko.co.jp/en/train-info/\" target=\"_blank\" rel=\"noopener\">lịch tàu chính thức</a>, đồng thời xác nhận chương trình chiếu sáng 2026 trên <a href=\"https://www.sagano-kanko.co.jp/news/5197/\" target=\"_blank\" rel=\"noopener\">thông báo của Sagano</a>. <a href=\"https://inari.jp/en/access/\" target=\"_blank\" rel=\"noopener\">Đường đến Fushimi Inari</a>."]]},

      {id:"d30",dnum:"30",dateLabel:"30",w:"Thứ 4",k:"大阪",title:"Từ Kyoto đến Namba, dạo phố Osaka",sleep:"Namba/Nipponbashi · chưa chọn khách sạn",
       maps:[{pts:[S("Miyako Hotel","Miyako Hotel Kyoto Hachijo",null,true),S("Kyoto Station","Kyoto Station","walk"),S("Osaka Station","Osaka Station","train"),S("Namba","Namba Station Osaka","train"),S("Kuromon Market","Kuromon Market Osaka","walk"),S("Dotonbori · Hōzenji","Hozenji Yokocho Osaka","walk")]}],
       items:[
        ["08:00–10:00","Ăn sáng và trả phòng Miyako Hotel","Chỉ thêm điểm gần ga như Higashi Hongan-ji nếu còn thời gian."],
        ["10:00–11:15","Kyoto Station → Namba","JR Special Rapid đến Osaka Station rồi đổi Midosuji; tính 50–75 phút với vali.","move"],
        ["11:15–12:00","Gửi hành lý khách sạn Osaka","Ưu tiên nơi ở quanh Namba/Nipponbashi; khách sạn chưa chọn."],
        ["12:00–15:00","Kuromon, Dotonbori và Hōzenji Yokocho","Okonomiyaki Mizuno là lựa chọn bữa trưa muộn nếu mở và chấp nhận xếp hàng.",null,"kuromon"],
        ["15:00–17:00","Nhận phòng và nghỉ","Nếu muốn ngắm Osaka Castle, chỉ thay bằng công viên/lâu đài bên ngoài và kiểm tra lịch bảo tàng."],
        ["18:00–21:00","Ăn tối khu Namba","Sushi Akazu Mochizuki ở Dojima cần đặt trước và ngân sách cao; Yoshitora ở Honmachi là lựa chọn lươn thay thế.",null,"dotonbori"]
       ],notes:[["warn","Kiểm tra từng nơi còn mở ngày 30/12. <a href=\"https://mizuno.gorp.jp/\" target=\"_blank\" rel=\"noopener\">Okonomiyaki Mizuno</a> · <a href=\"https://sushiakazu.com/shop/25/\" target=\"_blank\" rel=\"noopener\">Sushi Akazu Mochizuki</a>."]]},

      {id:"d31",dnum:"31",dateLabel:"31",w:"Thứ 5",k:"大阪",title:"Katsuoji buổi sáng, giao thừa Sumiyoshi",sleep:"Namba/Nipponbashi · chưa chọn khách sạn",
       maps:[{pts:[S("Namba","Namba Station Osaka",null,true),S("Minoh-Kayano · bến 8","Minoh-kayano Station bus stop 8"),S("Katsuoji","Katsuoji Temple Minoh","road"),S("Namba · Dotonbori","Dotonbori Osaka"),S("Sumiyoshi Taisha","Sumiyoshi Taisha Osaka","train"),S("Namba","Namba Station Osaka","train",true)]}],
       items:[
        ["07:15–08:15","Namba → Minoh-Kayano","Đi Metro Midosuji/Kita-Osaka Kyuko; kiểm tra giờ chuyến đúng 31/12.","move"],
        ["08:15–09:15","Bus Hankyu đến Katsuoji","Lên ở bến số 8; trên xe khoảng 20 phút cộng chờ. Tuyến không nhận tiền mặt: dùng IC hoặc vé riêng; niêm yết ¥800/chiều.","move"],
        ["09:15–11:15","Tham quan Katsuoji","Dành 1,5–2 giờ đi dạo, ngắm daruma và lễ chùa; vé thường ngày ¥500/người.",null,"katsuoji"],
        ["11:15–15:00","Về Namba, ăn trưa và dạo Shinsaibashi","Để đệm chờ bus; xem giờ từng cửa hàng vì nhiều nơi đóng sớm.","move","shinsaibashi"],
        ["15:00–18:00","Nghỉ trước buổi tối","Giữ sức cho việc đi đền và về muộn."],
        ["18:00–20:45","Ăn tối giao thừa, dạo ngắn Dotonbori","Đặt bàn và xác nhận giờ mở 31/12; sau đó tới ga Nankai Namba.",null,"dotonbori"],
        ["20:45–21:30","Nankai Namba → Sumiyoshitaisha","Đi tàu thường, sau đó đi bộ khoảng 3 phút; đối chiếu thời khóa biểu thực tế.","move"],
        ["21:30–00:30","Đón năm mới ở Sumiyoshi Taisha","Xếp hàng, tham quan và lễ đầu năm. Giờ mở cổng 2026–27 chưa công bố; không mặc định có pháo hoa hay sân khấu."],
        ["00:30–02:00","Trở về Namba","Chỉ dùng tàu nếu có chuyến phù hợp; dự phòng taxi đêm từ điểm đón ngoài vùng hạn chế giao thông.","move"]
       ],notes:[["warn","Xác nhận giờ Katsuoji, bus Hankyu, đền Sumiyoshi và tàu Nankai dịp 31/12. Không dựa vào tàu chạy xuyên đêm. <a href=\"https://www.hankyubus.co.jp/news/2026101.html\" target=\"_blank\" rel=\"noopener\">Thanh toán bus</a> · <a href=\"https://sumiyoshitaisha.net/newyear/\" target=\"_blank\" rel=\"noopener\">lịch đền năm trước</a> · <a href=\"https://www.nankai.co.jp/news/251127_1.html\" target=\"_blank\" rel=\"noopener\">lịch tàu năm trước</a>."],["tip","Nếu lịch đền hoặc tàu không phù hợp, đón năm mới ở <a href=\"https://www.houzenji.jp/\" target=\"_blank\" rel=\"noopener\">chùa Hōzenji</a> tại Namba rồi đi bộ về khách sạn."]]},

      {id:"d1",dnum:"1/1",dateLabel:"1/1",w:"Thứ 6",k:"大阪",title:"Sáng nhẹ ở Namba, bay về Hà Nội",sleep:"Bay về Hà Nội",
       maps:[{pts:[S("Namba","Namba Station Osaka",null,true),S("Nankai Namba","Nankai Namba Station","walk"),S("Kansai Airport","Kansai International Airport","train")]}],
       items:[
        ["09:00–10:00","Ăn sáng và thu dọn","Không xếp thêm điểm tham quan xa sau đêm giao thừa."],
        ["10:00–10:45","Trả phòng và đến Nankai Namba","Đi bộ hoặc taxi ngắn; tìm đúng sân ga và nhận vé.","move"],
        ["10:45–11:45","Tàu Nankai đến KIX","Airport Express hoặc Rapi:t; thời gian trên tàu khoảng 34–43 phút cộng chờ.","move"],
        ["11:45–12:30","Đến sân bay, tìm terminal VietJet","Xem vé điện tử và bảng điện tử; nhắm tới quầy chậm nhất khoảng 12:30."],
        ["15:30 JST","Bay KIX → HAN","VietJet Air, bay thẳng; tới Hà Nội 19:15 theo giờ Việt Nam.","move"]
       ],notes:[["warn","Ảnh hành trình chưa có số hiệu chuyến bay hoặc terminal. Xác nhận trên vé và thông báo của hãng trước ngày đi. <a href=\"https://www.kansai-airport.or.jp/en/access/from-airport/train\" target=\"_blank\" rel=\"noopener\">Tàu đi KIX</a>."]]}
    ]
  };
})();
