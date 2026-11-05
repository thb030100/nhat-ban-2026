(function(){
  "use strict";
  var S={
    manners:"https://www.japan.travel/en/responsible-travel-guide/japanese-customs-and-etiquette/",
    mindful:"https://www.japan.travel/en/responsible-travel-guide/traveling-mindfully/",
    food:"https://www.japan.travel/en/guide/japanese-food-etiquette/",
    seasons:"https://www.japan.travel/en/plan/weather/",
    crafts:"https://www.japan.travel/en/sports/adventure/activities/craftsmanship-move-your-hands/",
    kintsugi:"https://www.japan.travel/en/blog/the-art-of-imperfection-kintsugi-pottery-and-wabi-sabi/",
    shrine:"https://www.japan.travel/en/guide/shrine-and-temple-traditions/",
    onsen:"https://www.japan.travel/en/guide/how-to-best-enjoy-onsen/",
    gion:"https://kyoto.travel/en/responsible-travel/gion-manner-message-from-southern-gionmachi/",
    katsuoji:"https://katsuo-ji-temple.or.jp/audioguidance/index.php",
    fuji:"https://www.japan.travel/en/destinations/tokai/yamanashi/fuji-five-lakes/"
  };
  function letter(id,category,title,text,source,label){return {id:id,category:category,title:title,text:text,source:source,sourceLabel:label||"JNTO"}}
  window.JP_COMPANION={
    characters:[
      {id:"doraemon-snack",src:"assets/characters/doraemon-snack.png",categories:["food","daily-life"]},
      {id:"doraemon-walk",src:"assets/characters/doraemon-walk.png",categories:["daily-life","rituals","food"]},
      {id:"doraemon-broom",src:"assets/characters/doraemon-broom.png",categories:["seasons","crafts","words"]},
      {id:"naruto",src:"assets/characters/naruto.png",categories:["words","rituals","seasons"]},
      {id:"kuromi",src:"assets/characters/kuromi.png",categories:["crafts","words","rituals","seasons"]}
    ],
    letters:[
      letter("omoiyari","daily-life","Omoiyari","Ở Nhật có một từ rất dịu dàng: omoiyari—nghĩ cho người khác trước khi họ phải lên tiếng. Đôi khi, đó chỉ là hạ giọng trên tàu hay né sang bên để một người đang vội bước qua.",S.mindful),
      letter("sumimasen","daily-life","Một lời sumimasen","Sumimasen không chỉ có nghĩa là xin lỗi. Người Nhật còn dùng nó để gọi ai đó, cảm ơn một sự giúp đỡ, hay nhẹ nhàng xin được đi qua. Một từ nhỏ, nhưng chứa rất nhiều sự ý tứ.",S.manners),
      letter("itadakimasu","daily-life","Trước một bữa cơm","Itadakimasu gần với “xin được trân trọng đón nhận bữa ăn này”. Lời ấy không chỉ dành cho người nấu, mà còn cho nguyên liệu, thiên nhiên và mọi bàn tay đã đưa món ăn đến trước mặt mình.",S.food),
      letter("gochisosama","daily-life","Sau khi dùng bữa","Khi rời một quán ăn nhỏ, bạn có thể nói gochisōsama deshita. Đó là cách gửi lại căn bếp một lời cảm ơn ấm áp—như khép lại bữa ăn bằng một nụ cười.",S.food),
      letter("quiet-lines","daily-life","Những hàng người yên lặng","Người Nhật xếp hàng ở ga tàu, quầy tính tiền và cả trước một tiệm bánh nhỏ. Không ai cần nhắc ai; trật tự được tạo nên từ rất nhiều người cùng nghĩ cho nhau.",S.manners),
      letter("quiet-train","daily-life","Một toa tàu thật khẽ","Trên tàu điện, điện thoại thường được để im lặng và các cuộc trò chuyện diễn ra rất nhỏ. Thành phố vẫn đông, nhưng người ta dành cho nhau một khoảng bình yên vừa đủ.",S.mindful),
      letter("genkan","daily-life","Bậc cửa genkan","Khi bước vào một ngôi nhà Nhật, đôi giày dừng lại ở genkan. Khoảnh khắc thay dép cũng giống như để bụi đường ở ngoài và bước vào không gian riêng của ai đó bằng sự trân trọng.",S.manners),
      letter("oshibori","daily-life","Chiếc khăn oshibori","Chiếc khăn ấm hoặc lạnh được trao trước bữa ăn gọi là oshibori. Nó dành để lau tay, như một lời mời nhỏ rằng: hãy gác lại hành trình bên ngoài và thong thả thưởng thức bữa cơm.",S.manners),
      letter("no-tipping","daily-life","Không cần để lại tiền tip","Ở Nhật, sự chu đáo thường đã nằm trong cách phục vụ, nên tiền tip không phải thông lệ. Một lời arigatō gozaimashita chân thành thường là món quà đẹp hơn.",S.manners),
      letter("mottainai","daily-life","Mottainai","Mottainai là cảm giác tiếc khi một món đồ, thức ăn hay cơ hội chưa được trân trọng đúng mức. Từ ấy nhắc chúng ta dùng mọi thứ lâu hơn và biết đủ hơn một chút.",S.mindful),

      letter("sakura","seasons","Mùa hoa không ở lại lâu","Hoa anh đào đẹp một phần vì chóng tàn. Người Nhật ngắm những cánh hoa rơi như một lời nhắc rằng điều mong manh không vì ngắn ngủi mà kém phần quý giá.",S.seasons),
      letter("momijigari","seasons","Momijigari","Người Nhật gọi việc đi ngắm lá đỏ là momijigari—“săn” mùa thu. Không cần mang gì về; món quà chỉ là một buổi chiều đã đứng thật lâu dưới những tán phong.",S.seasons),
      letter("tsukimi","seasons","Ngắm trăng tsukimi","Tsukimi là dịp ngắm trăng mùa thu, thường đi cùng cỏ susuki và bánh dango. Người ta không cần làm gì nhiều, chỉ để ánh trăng khiến một buổi tối bình thường trở nên đáng nhớ.",S.seasons),
      letter("hydrangea","seasons","Cẩm tú cầu trong mưa","Mùa mưa ở Nhật không chỉ là những ngày xám. Đây cũng là lúc cẩm tú cầu nở đầy lối đi, khiến giọt nước trên cánh hoa trở thành một phần của vẻ đẹp.",S.seasons),
      letter("cicadas","seasons","Tiếng ve của mùa hè","Trong phim Nhật, chỉ cần nghe tiếng ve là người ta biết mùa hè đã đến. Âm thanh ấy gợi sân trường, kỳ nghỉ dài và những ngày nắng tưởng như không bao giờ kết thúc.",S.seasons),
      letter("furin","seasons","Chiếc chuông fūrin","Chuông gió fūrin không thật sự làm căn phòng mát hơn. Nhưng tiếng leng keng mỏng như thuỷ tinh khiến người nghe tưởng tượng ra một cơn gió, và lòng cũng dịu đi đôi chút.",S.seasons),
      letter("kotatsu","seasons","Kotatsu mùa đông","Kotatsu là chiếc bàn thấp có chăn và nguồn sưởi bên dưới. Vào mùa đông, đó thường là nơi cả gia đình quây quần, ăn quýt và vô tình ở lại lâu hơn dự định.",S.seasons),
      letter("microseasons","seasons","Bảy mươi hai mùa nhỏ","Lịch truyền thống Nhật Bản từng chia năm thành 72 tiết khí rất nhỏ. Có mùa “gió đông làm tan băng” và mùa “đom đóm bay lên”—thiên nhiên được lắng nghe bằng những thay đổi thật khẽ.",S.seasons),
      letter("hatsuyuki","seasons","Hatsuyuki","Hatsuyuki là trận tuyết đầu tiên của mùa. Người ta nhớ nó không vì tuyết dày, mà vì khoảnh khắc quen thuộc bỗng trở nên mới mẻ dưới một lớp trắng đầu tiên.",S.seasons),
      letter("komorebi","seasons","Ánh nắng komorebi","Komorebi là ánh nắng lọt qua kẽ lá. Tiếng Nhật dành riêng một từ cho khoảnh khắc ấy, như thể vẻ đẹp nhỏ bé cũng xứng đáng được gọi đúng tên.",S.seasons),

      letter("dashi","food","Vị umami trong dashi","Nhiều món Nhật bắt đầu bằng dashi—nước dùng từ kombu, cá bào hoặc cá khô. Nó không lấn át nguyên liệu, chỉ lặng lẽ khiến mọi hương vị trở nên tròn đầy hơn.",S.food),
      letter("rice-left","food","Cơm ở bên trái","Trong một bữa cơm truyền thống, bát cơm thường ở phía trái và bát canh ở phía phải. Cách sắp đặt nhỏ ấy đã được gìn giữ qua nhiều thế hệ.",S.food),
      letter("slurping","food","Húp mì không phải thất lễ","Với ramen, soba hay udon, tiếng húp mì là điều rất bình thường. Bạn không bắt buộc phải làm theo, nhưng cũng đừng ngạc nhiên khi một quán mì yên tĩnh vang lên những âm thanh vui vẻ.",S.food),
      letter("gari","food","Một lát gừng giữa hai miếng sushi","Gari dùng để làm sạch vị giác trước khi thử loại cá tiếp theo. Hãy ăn một lát nhỏ giữa các món, như một khoảng nghỉ dịu dàng cho đầu lưỡi.",S.food),
      letter("wagashi","food","Wagashi kể chuyện mùa","Bánh wagashi thường mang màu sắc và hình dáng của mùa đang đến: cánh hoa xuân, dòng nước mùa hè hay chiếc lá thu. Có những chiếc bánh nhỏ đến mức ta thấy tiếc khi ăn.",S.food),
      letter("ekiben","food","Ekiben—một vùng đất trong chiếc hộp","Ekiben là cơm hộp bán ở nhà ga. Mỗi vùng có thể gói đặc sản và cảnh sắc của mình vào một chiếc hộp, để chuyến tàu còn mang theo cả hương vị nơi vừa đi qua.",S.food),
      letter("depachika","food","Tầng hầm depachika","Dưới nhiều trung tâm thương mại Nhật là depachika—một thế giới đầy bentō, bánh ngọt và món ăn theo mùa. Chỉ đi dạo thôi cũng giống như ghé qua một triển lãm ẩm thực.",S.food),
      letter("kissaten","food","Buổi sáng ở kissaten","Những quán cà phê kissaten cổ thường phục vụ “morning set”: cà phê, bánh mì nướng và trứng. Đó là một buổi sáng chậm rãi còn sót lại giữa thành phố rất nhanh.",S.food),
      letter("onigiri","food","Tam giác onigiri","Onigiri không cần cầu kỳ: chỉ là cơm, chút nhân và rong biển. Nhưng chính sự giản dị ấy khiến nó có mặt trong hộp cơm, chuyến tàu và ký ức tuổi thơ của rất nhiều người Nhật.",S.food),
      letter("mochi","food","Mochi đầu năm","Mochi xuất hiện nhiều trong dịp năm mới, mang ý nghĩa về sức bền và sự gắn kết. Một miếng bánh nhỏ, dẻo và tròn, gửi theo mong ước cho một năm đủ đầy.",S.food),

      letter("kintsugi","crafts","Kintsugi","Kintsugi hàn đồ gốm vỡ bằng sơn mài và bột vàng. Vết nứt không bị che đi; nó trở thành phần sáng nhất, như lời nhắc rằng những điều từng tổn thương vẫn có thể đẹp theo cách mới.",S.kintsugi),
      letter("furoshiki","crafts","Tấm vải furoshiki","Furoshiki có thể bọc quà, mang chai rượu hoặc biến thành một chiếc túi. Khi mở món quà ra, tấm vải vẫn tiếp tục một đời sống khác thay vì trở thành rác.",S.crafts),
      letter("aizome","crafts","Màu chàm aizome","Vải nhuộm aizome có màu xanh sâu và càng dùng lâu càng có sắc thái riêng. Một món đồ chàm đẹp không chỉ lúc mới mua; nó lớn lên cùng người sử dụng.",S.crafts),
      letter("washi","crafts","Tờ giấy washi","Washi có vẻ mỏng manh nhưng các sợi dài giúp giấy bền và dẻo. Người Nhật dùng nó cho thư pháp, cửa shōji, đèn và những món đồ cần ánh sáng đi qua thật mềm.",S.crafts),
      letter("kokeshi","crafts","Búp bê kokeshi","Kokeshi truyền thống có thân gỗ đơn giản và không có tay chân. Mỗi vùng Tōhoku phát triển nét vẽ riêng, vì thế một cô búp bê nhỏ cũng có thể mang theo dấu tay của quê hương mình.",S.crafts),
      letter("maneki-neko","crafts","Maneki-neko đang gọi ai?","Chú mèo giơ tay được gọi là maneki-neko. Có nơi tin tay trái gọi khách, tay phải gọi tài lộc; nhưng ý nghĩa có thể thay đổi theo vùng và người làm ra nó.",S.crafts),
      letter("daruma","crafts","Con mắt của Daruma","Daruma thường để trắng hai mắt. Người ta tô một mắt khi đặt mục tiêu và mắt còn lại khi hoàn thành—như một lời hứa lặng lẽ với chính mình.",S.katsuoji,"Katsuoji"),
      letter("ema","crafts","Tấm gỗ ema","Ema là tấm gỗ nhỏ để viết lời nguyện tại đền. Ngày xưa người ta từng dâng ngựa; về sau hình ảnh con ngựa được thu nhỏ trên tấm gỗ thay cho lễ vật lớn ấy.",S.shrine),
      letter("goshuin","crafts","Một trang goshuin","Goshuin là dấu son và thư pháp nhận tại đền chùa sau khi viếng lễ. Nó không đơn thuần là con dấu du lịch, mà là kỷ niệm của một cuộc gặp gỡ trang nghiêm.",S.shrine),
      letter("omamori","crafts","Omamori nhỏ bé","Mỗi omamori thường gửi gắm một lời cầu riêng: bình an, học hành hay chuyến đi thuận lợi. Người ta thường giữ nguyên túi bùa, không mở ra xem điều gì nằm bên trong.",S.shrine),

      letter("natsukashii","words","Natsukashii","Natsukashii là cảm giác ấm áp khi một mùi hương, bài hát hay con phố đưa ta về ký ức cũ. Không hẳn là buồn; giống như được quá khứ khẽ chạm vào vai.",S.manners),
      letter("ichigo-ichie","words","Ichigo ichie","Ichigo ichie nhắc rằng mỗi cuộc gặp chỉ xảy ra đúng một lần theo cách ấy. Dù có gặp lại, con người và khoảnh khắc đã khác—vì vậy hãy có mặt thật trọn vẹn.",S.manners),
      letter("ma","words","Ma—khoảng trống có ý nghĩa","Ma là khoảng nghỉ giữa hai âm thanh, hai đồ vật hoặc hai câu nói. Trong thẩm mỹ Nhật, khoảng trống không phải nơi thiếu điều gì; chính nó cho mọi thứ được thở.",S.crafts),
      letter("yugen","words","Yūgen","Yūgen là vẻ đẹp sâu kín, chỉ được gợi ra chứ không phô bày hoàn toàn. Như ngọn núi sau màn sương—điều không nhìn thấy hết đôi khi lại ở lại lâu nhất.",S.crafts),
      letter("wabi-sabi","words","Wabi-sabi","Wabi-sabi trân trọng sự không hoàn hảo, dấu vết thời gian và vẻ đẹp giản dị. Một chiếc chén cũ có thể quý chính vì nó đã được cầm qua rất nhiều mùa.",S.kintsugi),
      letter("otsukaresama","words","Otsukaresama","Otsukaresama thường được nói sau một ngày làm việc: “Bạn đã vất vả rồi.” Đó vừa là lời chào, vừa là cách thừa nhận những nỗ lực đôi khi không ai nhìn thấy.",S.manners),
      letter("yoroshiku","words","Yoroshiku onegaishimasu","Cụm từ này khó dịch trọn vẹn. Nó có thể mang nghĩa “mong được bạn giúp đỡ” hay “xin hãy đối đãi tốt với tôi”—một lời gửi gắm cho mối quan hệ sắp bắt đầu.",S.manners),
      letter("shoganai","words","Shōganai","Shōganai nghĩa là “không còn cách nào khác”. Nhưng trong nhiều lúc, nó không phải đầu hàng; đó là chấp nhận điều không thể đổi để dành sức cho phần mình vẫn còn có thể làm.",S.manners),
      letter("kokoro","words","Kokoro","Kokoro vừa có thể là trái tim, tâm trí và tinh thần. Trong tiếng Nhật, cảm xúc và suy nghĩ không phải lúc nào cũng tách rời—chúng cùng ở trong một chữ.",S.manners),
      letter("kaizen","words","Kaizen","Kaizen là cải thiện bằng những bước nhỏ và liên tục. Không cần thay đổi tất cả trong một ngày; chỉ cần ngày mai dịu dàng tốt hơn hôm nay một chút.",S.mindful),

      letter("torii-path","rituals","Lối giữa cổng torii","Khi qua cổng torii, nhiều người bước lệch sang bên vì chính giữa được xem là lối dành cho thần linh. Một cái cúi đầu nhẹ cũng đủ để báo rằng mình đang bước vào nơi linh thiêng.",S.shrine),
      letter("shrine-temple","rituals","Đền vỗ tay, chùa lặng yên","Tại nhiều đền Thần đạo, nghi thức phổ biến là cúi hai lần, vỗ tay hai lần rồi cúi lần nữa. Ở chùa Phật giáo, người ta thường chắp tay cầu nguyện mà không vỗ tay.",S.shrine),
      letter("inari-fox","rituals","Cáo ở Fushimi Inari","Những chú cáo tại đền Inari không phải vị thần; chúng là sứ giả. Chìa khoá trong miệng cáo thường gợi đến kho lúa và phúc lành được gìn giữ.",S.shrine),
      letter("geiko-maiko","rituals","Geiko và maiko","Geiko là cách Kyoto gọi geisha đã thành nghề, còn maiko đang trong thời gian học việc. Nếu gặp họ ở Gion, hãy ngắm từ xa—đừng chặn đường hoặc chụp ảnh khi chưa được đồng ý.",S.gion,"Kyoto Travel"),
      letter("onsen","rituals","Nước onsen được sẻ chia","Trước khi xuống onsen, mọi người tắm sạch để giữ nước chung tinh khiết. Chiếc khăn nhỏ được đặt trên đầu hoặc thành bồn, không thả xuống nước.",S.onsen),
      letter("yukata","rituals","Vạt áo yukata","Khi mặc yukata hay kimono, vạt trái luôn phủ lên vạt phải. Một chi tiết rất nhỏ, nhưng người Nhật sẽ nhận ra ngay nếu nó bị đảo ngược.",S.manners),
      letter("hatsumode","rituals","Hatsumōde","Hatsumōde là lần viếng đền hoặc chùa đầu tiên trong năm. Không nhất thiết phải đúng nửa đêm; nhiều gia đình thong thả đi trong ba ngày đầu năm.",S.shrine),
      letter("omikuji","rituals","Một quẻ omikuji","Omikuji không quyết định tương lai, chỉ gửi một lời để suy ngẫm. Nếu nhận quẻ chưa tốt, bạn có thể buộc nó tại nơi được chỉ dẫn và để nỗi lo ở lại.",S.shrine),
      letter("kachi-daruma","rituals","Kachi-Daruma của Katsuoji","Daruma ở Katsuoji không hứa làm điều ước thành sự thật. Nó nhắc người cầu nguyện đối diện với mình và chiến thắng sự yếu lòng trước khi mong chiến thắng bên ngoài.",S.katsuoji,"Katsuoji"),
      letter("mount-fuji","rituals","Phú Sĩ—một nơi để ngước nhìn","Phú Sĩ được trân trọng không chỉ vì độ cao, mà còn như một nơi thờ phụng và nguồn cảm hứng nghệ thuật. Có lẽ vì thế, mỗi lần ngọn núi hiện ra, người ta thường im lặng thêm một chút.",S.fuji)
    ]
  };
})();
