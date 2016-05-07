$.fx.speeds.slow = 3000;
$.fx.speeds.medium = 1000;
$.fx.speeds.fast = 300;

$(function(){
  $('#fadeElem').click(function(){
    // thus way it disappears
    $(this).fadeOut($("input:radio[name=group1]:checked").val(), function(){
      // it appears again
      $(this).show();
    });
  });

});
console.log('fadeinout run');
