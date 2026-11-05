// Content for the landing scenes and discovery chapters. The itinerary remains in index.html.
window.JP_EXPERIENCE = {
  scenes: [
    {
      id:"fushimi", from:5, to:9, kicker:"KYOTO · DAWN / 京都・夜明け",
      title:"Fushimi Inari Taisha", titleJa:"伏見稲荷大社",
      caption:"At dawn, the vermilion gates fold into one another, and every quiet step feels like a wish for the year ahead.",
      captionJa:"朝の朱い鳥居をくぐるたび、静かな足音が新しい年への願いになる。",
      image:"hero/fushimi.jpg", fallback:"photos/fushimi.webp", alt:"Lối đi giữa những cổng torii đỏ tại Fushimi Inari",
      day:"d29", dayLabel:"29/12", credit:"Basile Morin · CC BY-SA 4.0",
      source:"https://commons.wikimedia.org/wiki/File:Torii_path_with_lantern_at_Fushimi_Inari_Taisha_Shrine,_Kyoto,_Japan.jpg", snow:false
    },
    {
      id:"katsuoji", from:9, to:12, kicker:"OSAKA · MORNING / 大阪・朝",
      title:"Katsuoji", titleJa:"勝尾寺",
      caption:"By the pond, red daruma keep watch over a thousand small hopes; we leave one of our own among them.",
      captionJa:"池のほとりで赤いだるまが小さな願いを見守る。私たちも、そのひとつをそっと預ける。",
      image:"hero/katsuoji.jpg", alt:"Những búp bê Daruma bên hồ trong khuôn viên Katsuoji",
      day:"d31", dayLabel:"31/12", credit:"Ouppygirl · CC BY-SA 4.0",
      source:"https://commons.wikimedia.org/wiki/File:Daruma_at_Katsu%C5%8D-ji_temple_overlooking_pond.jpg", snow:false
    },
    {
      id:"kawaguchiko", from:12, to:16, kicker:"FUJI · AFTERNOON / 富士・午後",
      title:"Lake Kawaguchi", titleJa:"河口湖",
      caption:"The lake holds the pale winter sky, while Fuji waits beyond the snow; we linger until the light begins to change.",
      captionJa:"湖は冬の淡い空を映し、雪の向こうに富士山が佇む。光が変わるまで、もう少しここにいたい。",
      image:"hero/kawaguchiko.jpg", fallback:"photos/kawaguchi.webp", alt:"Hồ Kawaguchi và khu dân cư phủ tuyết vào mùa đông",
      day:"d26", dayLabel:"26/12", credit:"Chris Moore · Public domain",
      source:"https://commons.wikimedia.org/wiki/File:Winterkawaguchiko.jpg", snow:true
    },
    {
      id:"kiyomizu", from:16, to:18, kicker:"KYOTO · DUSK / 京都・夕暮れ",
      title:"Kiyomizu-dera", titleJa:"清水寺",
      caption:"As evening settles over the temple, Kyoto turns to layers of rooftops and amber light; the old lanes invite us onward.",
      captionJa:"夕暮れが清水寺に降りるころ、京の屋根は琥珀色にほどける。古い坂道の先へ、歩いていこう。",
      image:"hero/kiyomizu.jpg", fallback:"photos/kiyomizu.webp", alt:"Chùa Kiyomizu-dera nhìn ra Kyoto",
      day:"d28", dayLabel:"28/12", credit:"Jordy Meow · CC BY-SA 3.0",
      source:"https://commons.wikimedia.org/wiki/File:Kiyomizu.jpg", snow:false
    },
    {
      id:"gion", from:18, to:22, kicker:"KYOTO · EVENING / 京都・夜",
      title:"Gion", titleJa:"祇園",
      caption:"Lanterns warm the narrow streets, and somewhere beyond the wooden facades the Kamo River carries the evening away.",
      captionJa:"灯籠のあかりが細い路地を包み、木の格子の向こうで鴨川が夜を運んでいく。",
      image:"hero/gion.jpg", fallback:"photos/gion.webp", alt:"Con phố ở Gion, Kyoto vào buổi tối",
      day:"d28", dayLabel:"28/12", credit:"663highland · CC BY 2.5",
      source:"https://commons.wikimedia.org/wiki/File:150124_Gion_Kyoto_Japan01s3.jpg", snow:false
    },
    {
      id:"dotonbori", from:22, to:5, kicker:"OSAKA · AFTER DARK / 大阪・夜",
      title:"Dotonbori", titleJa:"道頓堀",
      caption:"Neon scatters across the canal like confetti; beneath it, we let the last hours of the year drift by together.",
      captionJa:"運河に散るネオンは紙吹雪のよう。年の最後の時間を、ふたりでゆっくり見送る。",
      image:"hero/dotonbori.jpg", fallback:"photos/dotonbori.webp", alt:"Đèn đêm và kênh Dotonbori ở Osaka",
      day:"d31", dayLabel:"31/12", credit:"Type specimen · CC BY-SA 3.0",
      source:"https://commons.wikimedia.org/wiki/File:Osaka_Dotonbori_Ebisu_Bridge.jpg", snow:false
    }
  ],
  food: [
    {city:"Tokyo · Shinjuku",title:"Bữa tối đầu tiên gần ga",detail:"Tối đến Narita, ăn nhẹ quanh cửa Nam ga Shinjuku rồi về Shinjuku Washington Hotel nghỉ.",time:"Tối 23/12",day:"d23",query:"dinner near Shinjuku Station South Exit"},
    {city:"Tokyo · Shinjuku",title:"Bữa tối Noel",detail:"Chọn nhà hàng quanh cửa Nam ga trước khi dạo Shinjuku South Illumination; nên đặt bàn trước.",time:"Tối 24/12",day:"d24",query:"Christmas dinner Shinjuku South Exit"},
    {city:"Fuji · Kawaguchiko",title:"Bữa trưa gần ga Kawaguchiko",detail:"Ăn thuận đường ngay khi bus tới, để kịp taxi đi Nagaike và Hirano chiều 25/12.",time:"Trưa 25/12",day:"d25",query:"lunch near Kawaguchiko Station"},
    {city:"Fuji · Kawaguchiko",title:"Bữa tối sau hai hồ",detail:"Về Kawaguchiko ăn tối, rồi nghỉ và tắm onsen tại khách sạn nếu muốn.",time:"Tối 25/12",day:"d25",query:"dinner near Kawaguchiko Station"},
    {city:"Fuji · Fujiten",title:"Bữa trưa tại khu trượt",detail:"Ăn nhanh sau lớp trượt tuyết buổi sáng, trước khi về Oishi Park.",time:"Trưa 26/12",day:"d26",query:"Fujiten Snow Resort restaurant"},
    {city:"Kyoto · ga Kyoto",title:"Honke Daiichi Asahi Honten",detail:"Một lựa chọn ramen sau khi đến Kyoto; chỉ ghé nếu còn mở ngày 27/12 và hàng chờ không dài.",time:"Tối 27/12",day:"d27",query:"Honke Daiichi Asahi Honten Kyoto"},
    {city:"Kyoto · Higashiyama",title:"Starbucks Kyoto Nineizaka Yasaka Chaya",detail:"Quán nằm trên lối Sannenzaka–Ninenzaka; ghé ngắn khi hàng chờ vừa phải.",time:"Sáng 28/12",day:"d28",query:"Starbucks Kyoto Nineizaka Yasaka Chaya"},
    {city:"Kyoto · Gion",title:"Bữa trưa Gion hoặc Higashiyama",detail:"Chọn quán thuận đường giữa Kiyomizu-dera, Yasaka và Gion.",time:"Trưa 28/12",day:"d28",query:"lunch Gion Higashiyama Kyoto"},
    {city:"Kyoto · trung tâm",title:"Rokujuan",detail:"Một khoảng nghỉ café yên tĩnh, thay cho Nishiki nếu muốn đi chậm hơn.",time:"Chiều 28 hoặc 29/12",day:"d28",query:"Rokujuan Kyoto cafe"},
    {city:"Kyoto · Gojo",title:"Soba-no-Mi Yoshimura",detail:"Lựa chọn soba cho tối 28 hoặc 29/12; xác nhận giờ phục vụ cuối năm trước khi đi.",time:"Tối 28 hoặc 29/12",day:"d29",query:"Soba-no-Mi Yoshimura Kyoto"},
    {city:"Kyoto · Arashiyama",title:"Bữa trưa Arashiyama",detail:"Ăn tại khu Arashiyama sau rừng tre và cầu Togetsukyo, rồi về trung tâm nghỉ.",time:"Trưa 29/12",day:"d29",query:"lunch Arashiyama Kyoto"},
    {city:"Osaka · Dotonbori",title:"Okonomiyaki Mizuno",detail:"Quán trong danh sách cho bữa trưa muộn; kiểm tra ngày mở cửa và dự trù xếp hàng.",time:"Trưa 30/12",day:"d30",query:"Okonomiyaki Mizuno Dotonbori",official:"https://mizuno.gorp.jp/"},
    {city:"Osaka · Dojima",title:"Sushi Akazu Mochizuki",detail:"Omakase cần đặt trước; set niêm yết ¥19.800/người. Sau bữa tối cần đi tàu hoặc taxi về Namba.",time:"Tối 30/12 · tùy chọn",day:"d30",query:"Sushi Akazu Mochizuki Dojima",official:"https://sushiakazu.com/shop/25/"},
    {city:"Osaka · Honmachi",title:"Yoshitora",detail:"Lựa chọn món lươn thay cho omakase; cần xác nhận quán mở ngày 30/12.",time:"Tối 30/12 · tùy chọn",day:"d30",query:"Yoshitora unagi Honmachi Osaka"},
    {city:"Osaka · Namba",title:"Bữa tối giao thừa",detail:"Đặt bàn tại Namba và xác nhận giờ mở 31/12; ăn xong còn thời gian ra Nankai Namba để đến Sumiyoshi Taisha.",time:"18:00–20:00 · 31/12",day:"d31",query:"dinner Namba Osaka December 31"}
  ],
  shopping: [
    {city:"Tokyo",title:"Shibuya và Harajuku",detail:"Dạo phố, tìm quà nhỏ trong buổi chiều Tokyo trước khi về Shinjuku nghỉ.",time:"24/12",day:"d24",query:"Shibuya Harajuku shopping Tokyo"},
    {city:"Fuji",title:"Quà quanh ga Kawaguchiko",detail:"Chỉ ghé nếu còn thời gian sau Oishi Park; ưu tiên nghỉ trước chặng đi Kyoto.",time:"26/12 · tùy chọn",day:"d26",query:"souvenir near Kawaguchiko Station"},
    {city:"Kyoto",title:"Nishiki Market",detail:"Có thể ghé sau Gion nếu các quầy còn mở; cuối năm kiểm tra giờ từng nơi.",time:"Chiều 28/12 · tùy chọn",day:"d28",query:"Nishiki Market Kyoto"},
    {city:"Kyoto",title:"Gion và Pontocho",detail:"Sau khi về khách sạn nghỉ, đi dạo phố cổ ven kênh; chỉ mua quà nhỏ nếu bắt gặp cửa hàng hợp ý.",time:"Chiều 29/12",day:"d29",query:"Gion Shirakawa Pontocho Kyoto"},
    {city:"Osaka",title:"Kuromon và Dotonbori",detail:"Dạo phố khi mới đến Namba; một số quầy có thể đổi giờ cuối năm.",time:"30/12",day:"d30",query:"Kuromon Market Dotonbori Osaka"},
    {city:"Osaka",title:"Namba và Shinsaibashi",detail:"Ghé ngắn sau Katsuoji; kiểm tra cửa hàng còn mở và giữ thời gian nghỉ trước giao thừa.",time:"Trưa 31/12",day:"d31",query:"Shinsaibashi shopping Osaka"}
  ],
  photography: [
    {city:"Tokyo",title:"Shibuya",image:"shibuya",tip:"Tìm một góc cao để giữ nhịp người và biển hiệu trong cùng khung hình.",time:"Chiều 24/12",day:"d24"},
    {city:"Fuji",title:"Fujiten",image:"fujiten",tip:"Chụp đường tuyết và người mới tập sau lớp học; giữ an toàn trên dốc.",time:"Sáng 26/12",day:"d26"},
    {city:"Fuji",title:"Bờ bắc hồ Kawaguchi",image:"winterlake",tip:"Chờ khoảng trời quang để mặt hồ và Fuji có lớp lang mùa đông.",time:"Chiều 26/12",day:"d26"},
    {city:"Kyoto",title:"Kiyomizu-dera",image:"kiyomizu",tip:"Đi sớm để dãy mái Kyoto hiện rõ dưới ánh sáng dịu.",time:"Sáng 28/12",day:"d28"},
    {city:"Kyoto",title:"Gion",image:"gion",tip:"Đi chậm khi phố bắt đầu lên đèn; tôn trọng biển cấm chụp và sự riêng tư.",time:"Chiều 28 hoặc 29/12",day:"d29"},
    {city:"Kyoto",title:"Fushimi Inari",image:"fushimi",tip:"Đi sâu hơn qua các dãy torii và nhường đường cho người đi lễ.",time:"Sáng 29/12",day:"d29"},
    {city:"Osaka",title:"Dotonbori",image:"dotonbori",tip:"Tìm góc có phản chiếu của bảng hiệu trên kênh, tránh cản dòng người.",time:"Tối 30/12",day:"d30"},
    {city:"Osaka",title:"Katsuoji",image:"katsuoji",tip:"Chụp daruma cùng hồ và cây xanh, giữ khoảng cách với đồ lễ.",time:"Sáng 31/12",day:"d31"}
  ]
};
