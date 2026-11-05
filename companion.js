(function(){
  "use strict";
  var data=window.JP_COMPANION;
  if(!data||!Array.isArray(data.letters)||!data.letters.length)return;
  var $=function(id){return document.getElementById(id)};
  var query=new URLSearchParams(location.search);
  var current=0;
  var expanded=false;
  var sealed=false;
  var imageVersion=0;
  var currentCharacter="";
  var mobileQuery=window.matchMedia("(max-width: 680px)");

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
  function setExpanded(next){
    expanded=!!next;
    $("companion-letter").classList.toggle("is-expanded",expanded);
    updateLetterAffordance();
  }
  function setLetterContentHidden(hidden){
    $("companion-city-stamp").setAttribute("aria-hidden","true");
    ["companion-eyebrow","companion-title","companion-copy-wrap"].forEach(function(id){
      $(id).setAttribute("aria-hidden",String(!!hidden));
    });
  }
  function updateLetterAffordance(){
    var element=$("companion-letter");
    if(sealed){
      element.setAttribute("role","button");element.setAttribute("tabindex","0");
      element.setAttribute("aria-expanded","false");element.setAttribute("aria-label","Mở lá thư bí mật");
      element.removeAttribute("aria-controls");
    }else if(data.letters[current]&&data.letters[current].secret){
      expanded=false;element.classList.remove("is-expanded");
      ["role","tabindex","aria-controls","aria-expanded","aria-label"].forEach(function(name){element.removeAttribute(name)});
    }else if(mobileQuery.matches){
      element.setAttribute("role","button");element.setAttribute("tabindex","0");
      element.setAttribute("aria-controls","companion-copy-wrap");
      element.setAttribute("aria-expanded",String(expanded));
      element.setAttribute("aria-label",expanded?"Thu gọn lá thư":"Mở rộng lá thư");
    }else{
      expanded=false;element.classList.remove("is-expanded");
      ["role","tabindex","aria-controls","aria-expanded","aria-label"].forEach(function(name){element.removeAttribute(name)});
    }
  }
  function openSecret(){
    if(!sealed)return;
    sealed=false;
    $("companion-letter").classList.remove("is-sealed");
    setLetterContentHidden(false);updateLetterAffordance();
  }
  function setCharacter(letter){
    var all=Array.isArray(data.characters)?data.characters:[];
    var preview=query.get("previewCharacter");
    var candidates=all.filter(function(character){return character.categories.indexOf(letter.category)>=0});
    if(preview){var selected=all.find(function(character){return character.id===preview});if(selected)candidates=[selected]}
    if(!candidates.length)candidates=all;
    var last=currentCharacter;
    if(!last){try{last=localStorage.getItem("jp-companion-character")||""}catch(e){}}
    var available=candidates.filter(function(character){return character.id!==last});
    if(available.length)candidates=available;
    var character=candidates[randomIndex(candidates.length)];
    var image=$("companion-image"),fallback=$("companion-fallback"),version=++imageVersion;
    if(!character){image.hidden=true;fallback.hidden=false;return}
    currentCharacter=character.id;
    image.hidden=true;fallback.hidden=false;image.dataset.character=character.id;
    image.onload=function(){if(version===imageVersion){image.hidden=false;fallback.hidden=true}};
    image.onerror=function(){if(version===imageVersion){image.hidden=true;fallback.hidden=false}};
    image.src=character.src;
    try{localStorage.setItem("jp-companion-character",character.id)}catch(e){}
  }
  function render(index,remember){
    current=(index+data.letters.length)%data.letters.length;
    var letter=data.letters[current];
    var stamps=Array.isArray(data.stamps)?data.stamps:[];
    var stamp=stamps.length?stamps[current%stamps.length]:null;
    $("companion-title").textContent=letter.title;
    $("companion-copy").textContent=letter.text;
    if(stamp){$("companion-stamp-ja").textContent=stamp.ja;$("companion-stamp-en").textContent=stamp.en}
    sealed=!!letter.secret;
    $("companion-letter").classList.toggle("is-secret",sealed);
    $("companion-letter").classList.toggle("is-sealed",sealed);
    expanded=false;$("companion-letter").classList.remove("is-expanded");
    setLetterContentHidden(sealed);updateLetterAffordance();setCharacter(letter);
    if(remember){try{localStorage.setItem("jp-companion-last",letter.id)}catch(e){}}
  }
  $("companion-prev").addEventListener("click",function(){render(current-1,true)});
  $("companion-next").addEventListener("click",function(){render(current+1,true)});
  $("companion-letter").addEventListener("click",function(event){
    if(sealed){openSecret();return}
    if(mobileQuery.matches&&!data.letters[current].secret)setExpanded(!expanded);
  });
  $("companion-letter").addEventListener("keydown",function(event){
    if(event.key!=="Enter"&&event.key!==" ")return;
    if(sealed){event.preventDefault();openSecret();return}
    if(mobileQuery.matches&&!data.letters[current].secret){event.preventDefault();setExpanded(!expanded)}
  });
  $("travel-companion").addEventListener("keydown",function(event){
    if(event.key==="ArrowLeft"){event.preventDefault();render(current-1,true)}
    if(event.key==="ArrowRight"){event.preventDefault();render(current+1,true)}
  });
  if(mobileQuery.addEventListener)mobileQuery.addEventListener("change",updateLetterAffordance);
  else if(mobileQuery.addListener)mobileQuery.addListener(updateLetterAffordance);
  updateLetterAffordance();
  current=initialIndex();render(current,true);
  window.JPCompanion={show:function(id){var index=data.letters.findIndex(function(letter){return letter.id===id});if(index>=0)render(index,true)},current:function(){return data.letters[current]}};
})();
