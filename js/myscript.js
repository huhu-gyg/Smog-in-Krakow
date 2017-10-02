$(document).ready(function(){
    $("#causes_1").onclick, function(){
      $(".btn#causes_1").html('<span class="glyphicon glyphicon-collapse-down"></span> Show');
    });
    $("#causes_1").on("show.bs.collapse", function(){
      $(".btn#causes_1").html('<span class="glyphicon glyphicon-collapse-up"></span> Hide');
    });
  });

  $(document).ready(function(){
    $("#causes_2").onclick, function(){
      $(".btn#causes_2").html('<span class="glyphicon glyphicon-collapse-down"></span> Show');
    });
    $("#causes_2").on("show.bs.collapse", function(){
      $(".btn#causes_2").html('<span class="glyphicon glyphicon-collapse-up"></span> Hide');
    });
  });

  $(document).ready(function(){
    $("#causes_3").on("hide.bs.collapse", function(){
      $(".btn").html('<span class="glyphicon glyphicon-collapse-down"></span> Show');
    });
    $("#causes_3").on("show.bs.collapse", function(){
      $(".btn").html('<span class="glyphicon glyphicon-collapse-up"></span> Hide');
    });
  });