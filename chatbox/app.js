$("document").ready(function(){
    $("#firstButton").click(function(event){
    var userName = $("#userbox").val();
    var userMessage = $("#textbox").val();
    var state = "(" + userMessage + ")  " + userName + ";";
    $("#state").val("");
    var prevState = $("#container").html();
    $("#container").html(prevState + "</br>" + state).append('<div><textarea id="textcom" placeholder="Please enter comments"></textarea><textarea type="text" id="usercom" placeholder="name"></textarea><button type="button" id="secondButton" class="btn btn-success">comments</button></div>').trigger('create');
    console.log("mouse clicked on button");


      $("#secondButton").click(function(){


        var fod = $("#usercom").val();
        var god = $("#textcom").val();
        var godfod = fod + ";" + god;
        $newdiv = $("<div id='first'></div>");
        $('#container').append($newdiv);
        $("#first").html(godfod);




        // $newdiv = $("<div id='first'> fuck you </div>");
        // $('body').append($newdiv);
        // var textCom = $("#textcom").val;
        // var userCom = $("#usercom").val;
        // var stateCom = "(" + textCom + ")  " + userCom + ";";
        // $("#stateCom").val("");
        // $("#first").html(stateCom);



        //
        // $newdiv = $('<div id="commentone"></div>');
        // $('#container').append($newdiv);
        // $("#stateCom").val("");
        // var prevStatecom = $("#commentone").html();
        // $("#commentone").html(prevStatecom + "</br>" + stateCom);

        console.log("comments");
      });



  });
});
