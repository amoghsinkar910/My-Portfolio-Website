
//simple jquery
// $(document).ready(()=>{
  // $(".skill").css({border:"5px solid red"});
// });




var btnp = document.getElementById('btp');
var btnm = document.getElementById('btm');
var bar = document.getElementById('bar');
var txt = document.getElementById('txt');

var btnp1 = document.getElementById('btp1');
var btnm1 = document.getElementById('btm1');
var bar1 = document.getElementById('bar1');
var txt1 = document.getElementById('txt1');

var btnp3 = document.getElementById('btp3');
var btnm3 = document.getElementById('btm3');
var bar3 = document.getElementById('bar3');
var txt3 = document.getElementById('txt3');

var btnp2 = document.getElementById('btp2');
var btnm2 = document.getElementById('btm2');
var bar2 = document.getElementById('bar2');
var txt2 = document.getElementById('txt2');
var count = 0;
var count1 = 0;
var count2 = 0;
var count3 = 0;

btnp.addEventListener('click', ()=>{
  bar.style.width = count + '%';
  txt.innerHTML = count + '%';
  if(count === 100){
    count = 100;
  }
  else
  {
      count = count + 10;
  }
});

btnm.addEventListener('click', ()=>{
  bar.style.width = count + '%';
  txt.innerHTML = count + '%';
  if(count === 0){
    count = 0;
  }
  else
  {
      count = count - 10;
  }
});


btnp1.addEventListener('click', ()=>{
  bar1.style.width = count1 + '%';
  txt1.innerHTML = count1 + '%';
  if(count1 === 100){
    count1 = 100;
  }
  else
  {
      count1 = count1 + 10;
  }
});

btnm1.addEventListener('click', ()=>{
  bar1.style.width = count1 + '%';
  txt1.innerHTML = count1 + '%';
  if(count1 === 0){
    count1 = 0;
  }
  else
  {
      count1 = count1 - 10;
  }
});


btnp2.addEventListener('click', ()=>{
  bar2.style.width = count2 + '%';
  txt2.innerHTML = count2 + '%';
  if(count2 === 100){
    count2 = 100;
  }
  else
  {
      count2 = count2 + 10;
  }
});

btnm2.addEventListener('click', ()=>{
  bar2.style.width = count2 + '%';
  txt2.innerHTML = count2 + '%';
  if(count2 === 0){
    count2 = 0;
  }
  else
  {
      count2 = count2 - 10;
  }
});


btnp3.addEventListener('click', ()=>{
  bar3.style.width = count3 + '%';
  txt3.innerHTML = count3 + '%';
  if(count3 === 100){
    count3 = 100;
  }
  else
  {
      count3 = count3 + 10;
  }
});

btnm3.addEventListener('click', ()=>{
  bar3.style.width = count3 + '%';
  txt3.innerHTML = count3 + '%';
  if(count3 === 0){
    count3 = 0;
  }
  else
  {
      count3 = count3 - 10;
  }
});
