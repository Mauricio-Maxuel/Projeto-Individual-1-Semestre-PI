var imgBenefits1 = document.getElementById("imgbenefits1")
var btn1 = document.getElementById("btnMostrar1");
var teste1 = document.querySelector('.item1');
btn1.addEventListener('click', function(){
    if(teste1.className == 'cardBenefits item1') {
  teste1.className = 'cardBenefitsactive'
  btn1.className = 'imgMoreActive'
  imgBenefits1.style.display = "none"
} else {
  teste1.className = 'cardBenefits item1';
  imgBenefits1.style.display = "flex"
  imgBenefits1.style.transition="2s";
}
});
var imgBenefits2 = document.getElementById("imgbenefits2")
var btn2 = document.getElementById("btnMostrar2");
var teste2 = document.querySelector('.item2');
btn2.addEventListener('click', function(){
    if(teste2.className == 'cardBenefits item2') {
  teste2.className = 'cardBenefitsactive'
  btn2.className = 'imgMoreActive'
  imgBenefits2.style.display = "none"

  
} else {
  teste2.className = 'cardBenefits item2';
  imgBenefits2.style.display = "block"
}
});
var imgBenefits3 = document.getElementById("imgbenefits3")
var btn3 = document.getElementById("btnMostrar3");
var teste3 = document.querySelector('.item3');
btn3.addEventListener('click', function(){
    if(teste3.className == 'cardBenefits item3') {
  teste3.className = 'cardBenefitsactive'
  btn3.className = 'imgMoreActive'
  imgBenefits3.style.display = "none"

} else {
  teste3.className = 'cardBenefits item3';
  imgBenefits3.style.display = "block"
}
});