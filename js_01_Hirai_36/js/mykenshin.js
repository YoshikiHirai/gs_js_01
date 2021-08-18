
const btn = document.getElementsByClassName("btns");
const preBtn = document.querySelector(".prev-btn");
const nextBtn = document.querySelector(".next-btn");

for (let i = 0; i < btn.length; i++) {
  btn[i].addEventListener("click", () => {
    const slide = document.querySelector(".slide ul").children;
    const Indicator = document.querySelector(".indicator").children;

    const lastSlideIndex = slide.length - 1;
    const firstSlideIndex = 0;
    const lastIndicatorIndex = Indicator.length - 1;
    const firstIndicatorIndex = 0;

    const firstItem = slide.item(firstSlideIndex);
    const lastItem = slide.item(lastSlideIndex);
    const firstIndicator = Indicator.item(firstIndicatorIndex);
    const lastIndicator = Indicator.item(lastIndicatorIndex);

    if (btn[i] === preBtn) {
      setTimeout(() => {
        firstItem.parentNode.insertBefore(lastItem, firstItem);
        firstIndicator.parentNode.insertBefore(
          firstIndicator,
          lastIndicator.nextSibling
        );
      }, 400);
    } else if (btn[i] === nextBtn) {
      setTimeout(() => {
        lastItem.parentNode.insertBefore(firstItem, lastItem.nextSibling);
        firstIndicator.parentNode.insertBefore(lastIndicator, firstIndicator);
      }, 400);
    }
  });
}


// 最初は問診以下は非表示にする

$(function() {
  $('button').click(function() {
    $('#non-display').fadeIn(1000);
  });
});
  
    $(function(){
    $('#result-btn').click( function (){
      var cm = Number($('#height').val());
      var kg = Number($('#weight').val());
      var m = (cm/100);
      var bmi = (kg/(m*m));
      $('#bmi_input').replaceWith(bmi.toFixed(2));
      if ( bmi <= 20) {
      $('#risk-bmi').html('✓');
      }
    })})
    
    $(function(){
    $('#result-btn').click( function(){
          if ($('#fam-yes').prop("checked") == true) {
        $('#risk-fam').html('✓');
      }
     })})
    
     $(function(){
      $('#result-btn').click( function(){
            if ($('#tooth-yes').prop("checked") == true) {
          $('#risk-tooth').html('✓');
        }
       })})
     
     $(function(){
      $('#result-btn').click( function(){
              if ($('#tabaco-yes').prop("checked") == true) {
            $('#risk-smk').html('✓')
          }})})
    
     $(function(){
      $('#result-btn').click( function(){
              if ($('#passive-yes').prop("checked") == true) {
            $('#risk-psv').html('✓')
            } 
         })})
         
     
