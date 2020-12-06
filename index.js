// var btnp = document.getElementById('btp');
// var btnm = document.getElementById('btm');
// var bar = document.getElementById('bar');
// var txt = document.getElementById('txt');
//
// var btnp1 = document.getElementById('btp1');
// var btnm1 = document.getElementById('btm1');
// var bar1 = document.getElementById('bar1');
// var txt1 = document.getElementById('txt1');
//
// var btnp3 = document.getElementById('btp3');
// var btnm3 = document.getElementById('btm3');
// var bar3 = document.getElementById('bar3');
// var txt3 = document.getElementById('txt3');
//
// var btnp2 = document.getElementById('btp2');
// var btnm2 = document.getElementById('btm2');
// var bar2 = document.getElementById('bar2');
// var txt2 = document.getElementById('txt2');

var count = 0;
var count1 = 0;
var count2 = 0;
var count3 = 0;

var width=0;
var width1=0;
var width2=0;
var width3=0;

$('#btp').click(function(){
  if(width===100){
    width=100;
  }
  else{
    width=width+10;
  }
  $('#bar').css('width',width+"%");
  $('#txt').html(width + "%");
})

$('#btm').click(function(){
  if(width===0){
    width=0;
  }
  else{
    width=width-10;
  }
  $('#bar').css('width',width+"%");
  $('#txt').html(width + "%");
})

$('#btp1').click(function(){
  if(width1===100){
    width1=100;
  }
  else{
    width1=width1+10;
  }
  $('#bar1').css('width',width1+"%");
  $('#txt1').html(width1 + "%");
})

$('#btm1').click(function(){
  if(width1===0){
    width1=0;
  }
  else{
    width1=width1-10;
  }
  $('#bar1').css('width',width1+"%");
  $('#txt1').html(width1 + "%");
})

$('#btp2').click(function(){
  if(width2===100){
    width2=100;
  }
  else{
    width2=width2+10;
  }
  $('#bar2').css('width',width2+"%");
  $('#txt2').html(width2 + "%");
})

$('#btm2').click(function(){
  if(width2===0){
    width2=0;
  }
  else{
    width2=width2-10;
  }
  $('#bar2').css('width',width2+"%");
  $('#txt2').html(width2 + "%");
})

$('#btp3').click(function(){
  if(width3===100){
    width3=100;
  }
  else{
    width3=width3+10;
  }
  $('#bar3').css('width',width3+"%");
  $('#txt3').html(width3 + "%");
})

$('#btm3').click(function(){
  if(width3===0){
    width3=0;
  }
  else{
    width3=width3-10;
  }
  $('#bar3').css('width',width3+"%");
  $('#txt3').html(width3 + "%");
})

// btnp.addEventListener('click', ()=>{
//   bar.style.width = count + '%';
//   txt.innerHTML = count + '%';
//   if(count === 100){
//     count = 100;
//   }
//   else
//   {
//       count = count + 10;
//   }
// });
//
//
//
// btnm.addEventListener('click', ()=>{
//   bar.style.width = count + '%';
//   txt.innerHTML = count + '%';
//   if(count === 0){
//     count = 0;
//   }
//   else
//   {
//       count = count - 10;
//   }
// });
//
//
// btnp1.addEventListener('click', ()=>{
//   bar1.style.width = count1 + '%';
//   txt1.innerHTML = count1 + '%';
//   if(count1 === 100){
//     count1 = 100;
//   }
//   else
//   {
//       count1 = count1 + 10;
//   }
// });
//
// btnm1.addEventListener('click', ()=>{
//   bar1.style.width = count1 + '%';
//   txt1.innerHTML = count1 + '%';
//   if(count1 === 0){
//     count1 = 0;
//   }
//   else
//   {
//       count1 = count1 - 10;
//   }
// });
//
//
// btnp2.addEventListener('click', ()=>{
//   bar2.style.width = count2 + '%';
//   txt2.innerHTML = count2 + '%';
//   if(count2 === 100){
//     count2 = 100;
//   }
//   else
//   {
//       count2 = count2 + 10;
//   }
// });
//
// btnm2.addEventListener('click', ()=>{
//   bar2.style.width = count2 + '%';
//   txt2.innerHTML = count2 + '%';
//   if(count2 === 0){
//     count2 = 0;
//   }
//   else
//   {
//       count2 = count2 - 10;
//   }
// });
//
//
// btnp3.addEventListener('click', ()=>{
//   bar3.style.width = count3 + '%';
//   txt3.innerHTML = count3 + '%';
//   if(count3 === 100){
//     count3 = 100;
//   }
//   else
//   {
//       count3 = count3 + 10;
//   }
// });
//
// btnm3.addEventListener('click', ()=>{
//   bar3.style.width = count3 + '%';
//   txt3.innerHTML = count3 + '%';
//   if(count3 === 0){
//     count3 = 0;
//   }
//   else
//   {
//       count3 = count3 - 10;
//   }
// });
