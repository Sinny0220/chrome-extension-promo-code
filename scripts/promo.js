$(function(){
  $(document).ready(function(){
    $("#merchant-submit").click(function(){
      var merchant = $("#merchant-input").val();
      if (merchant != null && merchant.length !== 0) {
        $("#merchant-result").append("<p>Search results for " + merchant + " are coming</p>");
      }
    });
    
    $("#merchant-clear").click(function(){
      $("#merchant-result").text("");
    });
  });
})
