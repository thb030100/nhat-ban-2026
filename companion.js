(function(){
  "use strict";
  var data=window.JP_COMPANION;
  if(!data||!Array.isArray(data.letters)||!data.letters.length)return;
  var $=function(id){return document.getElementById(id)};
  var query=new URLSearchParams(location.search);
  var current=0;
  var expanded=false;
  var imageVersion=0;

  function randomIndex(max){
    if(window.crypto&&window.crypto.getRandomValues){
      var values=new Uint32Array(1);window.crypto.getRandomValues(values);return values[0]%max;
    }
    return Math.floor(Math.random()*max);
  }
  function initialIndex(){
    var preview=query.get("previewLetter");
    if(preview){var found=data.letters.findIndex(function(letter){return letter.id===preview});if(found>=0)return found}
    var last="";
    try{last=localStorage.getItem("jp-companion-last")||""}catch(e){}
    if(data.letters.length===1)return 0;
    var index=randomIndex(data.letters.length);
    while(data.letters[index].id===last)index=randomIndex(data.letters.length);
    return index;
  }
  function japanHour(){
    var hour=Number(new Intl.DateTimeFormat("en-GB",{timeZone:"Asia/Tokyo",hour:"2-digit",hourCycle:"h23"}).format(new Date()));
    var preview=query.get("previewHour");
    if(preview!==null&&/^(?:[01]?\d|2[0-3])$/.test(preview))hour=Number(preview);
    return hour;
  }
  function periodForHour(hour){return hour>=5&&hour<12?"morning":hour>=12&&hour<18?"afternoon":"evening"}
  function setExpanded(next){
    expanded=!!next;
    $("companion-letter").classList.toggle("is-expanded",expanded);
    $("companion-expand").setAttribute("aria-expanded",String(expanded));
    $("companion-expand").textContent=expanded?"Thu gọn":"Đọc tiếp";
  }
  function setPose(){
    var period=periodForHour(japanHour());
    var poses=data.poses&&data.poses[period]||[];
    var src=poses[current%Math.max(poses.length,1)];
    var image=$("companion-image"),fallback=$("companion-fallback"),version=++imageVersion;
    if(!data.assetsReady||!src){image.hidden=true;fallback.hidden=false;return}
    image.hidden=true;fallback.hidden=false;
    fetch(src,{method:"HEAD"}).then(function(response){
      if(version!==imageVersion||!response.ok)return;
      image.onload=function(){if(version===imageVersion){image.hidden=false;fallback.hidden=true}};
      image.onerror=function(){if(version===imageVersion){image.hidden=true;fallback.hidden=false}};
      image.src=src;
    }).catch(function(){});
  }
  function render(index,remember){
    current=(index+data.letters.length)%data.letters.length;
    var letter=data.letters[current];
    $("companion-title").textContent=letter.title;
    $("companion-copy").textContent=letter.text;
    $("companion-position").textContent=String(current+1).padStart(2,"0")+"/"+String(data.letters.length).padStart(2,"0");
    var source=$("companion-source");
    source.hidden=!letter.source;
    if(letter.source){source.href=letter.source;source.textContent=(letter.sourceLabel||"Nguồn")+" ↗"}
    setExpanded(false);setPose();
    if(remember){try{localStorage.setItem("jp-companion-last",letter.id)}catch(e){}}
  }
  $("companion-prev").addEventListener("click",function(){render(current-1,true)});
  $("companion-next").addEventListener("click",function(){render(current+1,true)});
  $("companion-expand").addEventListener("click",function(){setExpanded(!expanded)});
  $("companion-letter").addEventListener("click",function(event){
    if(event.target.closest("a,button"))return;
    if(window.matchMedia("(max-width: 680px)").matches)setExpanded(!expanded);
  });
  $("travel-companion").addEventListener("keydown",function(event){
    if(event.key==="ArrowLeft"){event.preventDefault();render(current-1,true)}
    if(event.key==="ArrowRight"){event.preventDefault();render(current+1,true)}
  });
  var lastPeriod=periodForHour(japanHour());
  setInterval(function(){var period=periodForHour(japanHour());if(period!==lastPeriod){lastPeriod=period;setPose()}},60000);
  current=initialIndex();render(current,true);
  window.JPCompanion={show:function(id){var index=data.letters.findIndex(function(letter){return letter.id===id});if(index>=0)render(index,true)},current:function(){return data.letters[current]}};
})();
