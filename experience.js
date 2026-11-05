(function(){
  "use strict";
  var data=window.JP_EXPERIENCE;
  if(!data)return;
  var scenes=data.scenes;
  var $=function(id){return document.getElementById(id)};
  var esc=function(value){return String(value).replace(/[&<>"']/g,function(c){return {"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[c]})};
  var mapUrl=function(query){return "https://www.google.com/maps/search/?api=1&query="+encodeURIComponent(query)};

  var menuButton=$("menu-toggle"),menuPanel=$("menu-panel"),snowButton=$("snow-toggle");
  function closeMenu(){menuPanel.hidden=true;menuButton.setAttribute("aria-expanded","false");menuButton.setAttribute("aria-label","Open menu")}
  menuButton.addEventListener("click",function(){
    var open=menuPanel.hidden;
    menuPanel.hidden=!open;
    menuButton.setAttribute("aria-expanded",String(open));
    menuButton.setAttribute("aria-label",open?"Close menu":"Open menu");
  });
  menuPanel.querySelectorAll("a").forEach(function(a){a.addEventListener("click",closeMenu)});
  document.addEventListener("click",function(e){if(!menuPanel.hidden&&!menuPanel.contains(e.target)&&!menuButton.contains(e.target))closeMenu()});
  document.addEventListener("keydown",function(e){if(e.key==="Escape")closeMenu()});

  // Theme switcher
  var menuThemeButton=$("menu-theme-toggle");
  function isDarkMode(){
    var t=document.documentElement.getAttribute("data-theme");
    if(t==="dark")return true;
    if(t==="light")return false;
    return !!(window.matchMedia&&window.matchMedia("(prefers-color-scheme: dark)").matches);
  }
  function updateThemeUI(dark){
    var tip=dark?"Chuyển sang giao diện sáng":"Chuyển sang giao diện tối";
    document.querySelectorAll(".theme-toggle").forEach(function(b){
      b.setAttribute("title",tip);
      b.setAttribute("aria-label",tip);
      b.setAttribute("aria-pressed",String(dark));
    });
    if(menuThemeButton){
      menuThemeButton.textContent="Theme · 画面: "+(dark?"Dark · 夜":"Light · 昼");
      menuThemeButton.setAttribute("aria-pressed",String(dark));
    }
  }
  function toggleTheme(){
    var next=!isDarkMode();
    var val=next?"dark":"light";
    document.documentElement.setAttribute("data-theme",val);
    try{localStorage.setItem("jp-theme",val)}catch(e){}
    updateThemeUI(next);
  }
  document.querySelectorAll(".theme-toggle").forEach(function(b){
    b.addEventListener("click",toggleTheme);
  });
  if(menuThemeButton){
    menuThemeButton.addEventListener("click",toggleTheme);
  }
  updateThemeUI(isDarkMode());
  if(window.matchMedia){
    try{
      window.matchMedia("(prefers-color-scheme: dark)").addEventListener("change",function(e){
        if(!localStorage.getItem("jp-theme")){
          updateThemeUI(e.matches);
        }
      });
    }catch(err){}
  }

  var reduceMotion=window.matchMedia("(prefers-reduced-motion: reduce)");
  var snowWanted=true;
  try{snowWanted=localStorage.getItem("jp-snow")!=="off"}catch(e){}
  var currentIndex=0,manual=false,swapVersion=0;
  var image=$("scene-image"),fallback=$("scene-image-fallback"),snowLayer=$("snow-layer");
  var jstFormatter=new Intl.DateTimeFormat("en-GB",{timeZone:"Asia/Tokyo",hour:"2-digit",minute:"2-digit",hourCycle:"h23"});
  function japanTime(){
    var parts=jstFormatter.formatToParts(new Date());
    var hour=Number(parts.find(function(p){return p.type==="hour"}).value);
    var minute=parts.find(function(p){return p.type==="minute"}).value;
    var test=new URLSearchParams(location.search).get("previewHour");
    if(test!==null&&/^(?:[01]?\d|2[0-3])$/.test(test))hour=Number(test);
    return {hour:hour,text:String(hour).padStart(2,"0")+":"+minute};
  }
  function indexForHour(hour){
    return scenes.findIndex(function(s){return s.from<s.to?(hour>=s.from&&hour<s.to):(hour>=s.from||hour<s.to)});
  }
  var flakes=document.createDocumentFragment();
  for(var i=0;i<28;i++){
    var flake=document.createElement("span");flake.className="flake";
    flake.style.setProperty("--x",((i*37)%98+1)+"%");
    flake.style.setProperty("--size",(i%5===0?5:2+i%3)+"px");
    flake.style.setProperty("--duration",(6+i%7)+"s");
    flake.style.setProperty("--delay",(-i*.52)+"s");
    flake.style.setProperty("--drift",((i%2?1:-1)*(8+i%6*6))+"px");
    flake.style.setProperty("--opacity",(.28+(i%5)*.12).toFixed(2));
    flakes.appendChild(flake);
  }
  snowLayer.appendChild(flakes);
  function updateSnow(){
    var forced=reduceMotion.matches;
    snowLayer.classList.toggle("is-snowing",!!(scenes[currentIndex].snow&&snowWanted&&!forced));
    snowButton.textContent=forced?"Snow · 雪: off (reduced motion)":"Snow · 雪: "+(snowWanted?"on":"off");
    snowButton.setAttribute("aria-pressed",String(snowWanted&&!forced));
    snowButton.disabled=forced;
  }
  snowButton.addEventListener("click",function(){
    snowWanted=!snowWanted;
    try{localStorage.setItem("jp-snow",snowWanted?"on":"off")}catch(e){}
    updateSnow();
  });
  if(reduceMotion.addEventListener)reduceMotion.addEventListener("change",updateSnow);
  else if(reduceMotion.addListener)reduceMotion.addListener(updateSnow);

  function setImage(scene){
    var version=++swapVersion;
    image.classList.add("is-changing");fallback.hidden=true;image.hidden=false;
    image.onload=function(){if(version===swapVersion){image.hidden=false;fallback.hidden=true;image.classList.remove("is-changing")}};
    image.onerror=function(){
      if(version!==swapVersion)return;
      if(scene.fallback&&image.getAttribute("src")!==scene.fallback){image.src=scene.fallback;return}
      image.hidden=true;fallback.hidden=false;image.classList.remove("is-changing");
    };
    image.alt=scene.alt;
    if(image.getAttribute("src")===scene.image&&image.complete&&image.naturalWidth){image.classList.remove("is-changing");return}
    image.src=scene.image;
  }
  function renderScene(index){
    currentIndex=(index+scenes.length)%scenes.length;
    var scene=scenes[currentIndex];
    $("scene-period").textContent=scene.kicker;
    $("scene-position").textContent=String(currentIndex+1).padStart(2,"0")+"/"+String(scenes.length).padStart(2,"0");
    $("scene-title").textContent=scene.title;
    $("scene-title-ja").textContent=scene.titleJa;
    $("scene-caption").textContent=scene.caption;
    $("scene-caption-ja").textContent=scene.captionJa;
    var dateParts=scene.dayLabel.split("/");
    $("scene-day").textContent="Open Dec "+Number(dateParts[0])+" · "+Number(dateParts[1])+"月"+Number(dateParts[0])+"日 ↗";
    $("scene-day").href="#"+scene.day;
    $("scene-credit").textContent="Photo / 写真: "+scene.credit+" ↗";
    $("scene-credit").href=scene.source;
    $("scene-dots").querySelectorAll("button").forEach(function(dot,i){dot.classList.toggle("active",i===currentIndex);dot.setAttribute("aria-current",i===currentIndex?"true":"false")});
    setImage(scene);updateSnow();
  }
  $("scene-dots").innerHTML=scenes.map(function(scene,i){return '<button type="button" aria-label="View '+esc(scene.title)+'" data-scene="'+i+'"></button>'}).join("");
  $("scene-dots").addEventListener("click",function(e){var n=e.target.getAttribute("data-scene");if(n===null)return;manual=true;renderScene(Number(n))});
  $("scene-prev").addEventListener("click",function(){manual=true;renderScene(currentIndex-1)});
  $("scene-next").addEventListener("click",function(){manual=true;renderScene(currentIndex+1)});
  $("scene-frame").addEventListener("keydown",function(e){
    if(e.key==="ArrowLeft"){e.preventDefault();manual=true;renderScene(currentIndex-1)}
    if(e.key==="ArrowRight"){e.preventDefault();manual=true;renderScene(currentIndex+1)}
  });
  function tick(){
    var t=japanTime();
    $("scene-time").textContent=t.text+" · JST (UTC+9)";
    if(!manual){var next=indexForHour(t.hour);if(next>=0&&next!==currentIndex)renderScene(next)}
  }
  var initial=japanTime();
  renderScene(Math.max(0,indexForHour(initial.hour)));tick();setInterval(tick,60000);
  window.JPScene={indexForHour:indexForHour,currentIndex:function(){return currentIndex},show:function(index){manual=true;renderScene(index)}};

  function renderRecommendations(items,id){
    $(id).innerHTML=items.map(function(item){return '<article class="discover-card">'+
      '<p class="locale">'+esc(item.city)+'</p><h3>'+esc(item.title)+'</h3><p>'+esc(item.detail)+'</p>'+
      '<div class="discover-meta"><span>'+esc(item.time)+'</span></div>'+
      '<div class="discover-actions"><a href="#'+esc(item.day)+'">Xem trong lịch trình ↗</a><a href="'+mapUrl(item.query)+'" target="_blank" rel="noopener noreferrer">Mở Google Maps ↗</a>'+
      (item.official?'<a href="'+esc(item.official)+'" target="_blank" rel="noopener noreferrer">Trang chính thức ↗</a>':'')+'</div></article>'}).join("");
  }
  renderRecommendations(data.food,"food-grid");renderRecommendations(data.shopping,"shop-grid");
  var photos=window.JP_PHOTOS||{};
  $("photo-grid").innerHTML=data.photography.map(function(item){
    var ph=photos[item.image];if(!ph)return "";
    return '<article class="photo-card"><img src="'+esc(ph.src)+'" alt="'+esc(item.title)+'" loading="lazy" width="'+ph.w+'" height="'+ph.h+'">'+
      '<div class="photo-body"><p class="locale">'+esc(item.city)+' · '+esc(item.time)+'</p><h3>'+esc(item.title)+'</h3><p class="photo-tip">'+esc(item.tip)+'</p>'+
      '<div class="photo-links"><a href="#'+esc(item.day)+'">Xem ngày ↗</a><a href="'+esc(ph.file)+'" target="_blank" rel="noopener noreferrer">Ảnh: '+esc(ph.credit)+' ↗</a></div></div></article>';
  }).join("");

  // The day and recommendation sections are created after the browser's initial hash jump.
  // Revisit the requested anchor once every section has its final position.
  if(location.hash.length>1){
    requestAnimationFrame(function(){
      requestAnimationFrame(function(){
        var target=document.getElementById(decodeURIComponent(location.hash.slice(1)));
        if(target)window.scrollTo({top:target.getBoundingClientRect().top+window.scrollY-80,behavior:"instant"});
      });
    });
  }
})();
