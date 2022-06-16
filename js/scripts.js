/*!
* Start Bootstrap - Shop Item v5.0.5 (https://startbootstrap.com/template/shop-item)
* Copyright 2013-2022 Start Bootstrap
* Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-shop-item/blob/master/LICENSE)
*/

var myHobby = '';
var myPrice = '';

// temp
var recommendHobby1 = 'show';
var recommendHobby2 = 'movie';

var contents = document.getElementById('contents');

// Hobby
var show = document.getElementById('show');
show.addEventListener('click', function () {
  myHobby = 'show';
  alert(myHobby);
  setContent();
})

var movie = document.getElementById('movie');
movie.addEventListener('click', function () {
  myHobby = 'movie';
  alert(myHobby);
  setContent();
})

// Price
var veryHigh = document.getElementById('veryHigh');
veryHigh.addEventListener('click', function () {
  myPrice = 'veryHigh';
  alert(myPrice);
  setContent();
})

var high = document.getElementById('high');
high.addEventListener('click', function () {
  myPrice = 'high';
  alert(myPrice);
  setContent();
})

var low = document.getElementById('low');
low.addEventListener('click', function () {
  myPrice = 'low';
  alert(myPrice);
  setContent();
})

// Reset
var reset = document.getElementById('reset');
reset.addEventListener('click', function () {
  myHobby = '';
  myPrice = '';
  contents.style.visibility = 'hidden';
})

// Recommended Hobbies
var recommend1 = document.getElementById('recommend1');
recommend1.addEventListener('click', function () {
  myHobby = recommend1.innerText; // required
  setContent();
})

var recommend2 = document.getElementById('recommend2');
recommend2.addEventListener('click', function () {
  myHobby = recommend2.innerText; // required
  setContent();
})

function setContent(){
  var title1 = document.getElementById('title1');
  var title2 = document.getElementById('title2');
  var title3 = document.getElementById('title3');
  var title4 = document.getElementById('title4');
  var title5 = document.getElementById('title5');
  var map = document.getElementById('map');

  if(myHobby == 'show'){
    title1.innerText = '이 지역의 #Musical #Play 관련 시설'; 
    if(myPrice == 'veryHigh'){
      title2.innerText = '송파구 신천동';
      title3.innerText = 'A. 롯데콘서트홀';
      title4.innerText = 'B. 샤롯데 씨어터';
      title5.innerText = 'C. 가든스테이지';
      map.src = './maps/show_veryhigh.html';
    }
    else if(myPrice == 'high'){
      title2.innerText = '종로구 명륜동';
      title3.innerText = 'A. 나온씨어터';
      title4.innerText = 'B. 선돌극장';
      title5.innerText = 'C. Ground-SYN(그라운드 씬)';
      map.src = './maps/show_high.html';
    }
    else if(myPrice == 'low'){
      title1.innerText = '해당 조건의 추천 지역이 존재하지 않습니다.'; 
      title2.innerText = '-';
      title3.innerText = ' ';
      title4.innerText = ' ';
      title5.innerText = ' ';
      map.src = './maps/show_low.html';
    }
  }
  else if(myHobby == 'movie'){
    title1.innerText = '이 지역의 #Movie 관련 시설'; 
    if(myPrice == 'veryHigh'){
      title2.innerText = '용산구 한강로3가';
      title3.innerText = 'A. CGV 용산아이파크몰';
      title4.innerText = 'B. 롯데시네마 용산';
      title5.innerText = ' ';
      map.src = './maps/theaterMapVeryHigh.html';
    }
    else if(myPrice == 'high'){
      map.src = './maps/theaterMapHigh.html';
    }
    else if(myPrice == 'low'){
      map.src = './maps/theaterMapLow.html';
    }
  }

  if(myPrice != '' && myHobby != ''){
    contents.style.visibility = 'visible';
  }
}