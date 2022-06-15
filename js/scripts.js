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
  var map = document.getElementById('map');

  if(myHobby == 'show'){
    title1.innerText = '이 지역의 #Musical #Play 관련 시설'; 
    if(myPrice == 'veryHigh'){
      title2.innerText = '송파구 신천동';
      map.src = './maps/show_veryhigh.html';
    }
    else if(myPrice == 'high'){
      title2.innerText = '금천구 시흥동';
      map.src = './maps/show_high.html';
    }
    else if(myPrice == 'low'){
      title2.innerText = '-';
      map.src = './maps/show_low.html';
    }
  }
  else if(myHobby == 'movie'){
    title1.innerText = '이 지역의 #Movie 관련 시설'; 
    if(myPrice == 'veryHigh'){
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