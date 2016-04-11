$(function(){

    var calc = {

      divide : function(x,y){return x/y;},
      clickbtndivide: function(event){
        var x =  parseInt($("#varx").val());
        var y = parseInt($("#vary").val());
       console.log(this.divide(x,y));
      $('#out1').append('<br/>'+ this.divide(x,y));
      },
      
      add : function(x,y){return (x+y);},
      clickbtnadd: function(event){
        var x =  parseInt($("#varx").val());
        var y = parseInt($("#vary").val());
    console.log(this.add(x,y));
      $('#out1').append('<br/>'+ this.add(x,y));
      },

          subs : function(x,y){return x-y;},
          clickbtnsubs: function(event){
            var x =  parseInt($("#varx").val());
            var y = parseInt($("#vary").val());
        console.log(this.subs(x,y));
           $('#out1').append('<br/>'+ this.subs(x,y));
          },

          mult : function(x,y){return x*y;},
          clickbtnmult: function(event){
            var x =  parseInt($("#varx").val());
            var y = parseInt($("#vary").val());
        console.log(this.mult(x,y));
           $('#out1').append('<br/>'+ this.mult(x,y));
          },
    }
   $(function(){
      $('#clickAdd').click($.proxy(calc.clickbtnadd, calc));
   });
   $(function(){
      $('#clickDivide').click($.proxy(calc.clickbtndivide, calc));
   });
   $(function(){
      $('#clickSubs').click($.proxy(calc.clickbtnsubs, calc));
   });
   $(function(){
      $('#clickMult').click($.proxy(calc.clickbtnmult, calc));
   });
});
