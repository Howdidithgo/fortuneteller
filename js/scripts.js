$(document).ready(function() {
  $("form").submit(function(event){
    event.preventDefault();
    var lucky = 0;
    var unlucky = 0;
    $("input:checkbox[name=unlucky]:checked").each(function(){
      unlucky += parseInt($(this).val());
      console.log(unlucky);
    });
    $("input:checkbox[name=lucky]:checked").each(function(){
      lucky += parseInt($(this).val());
      console.log(lucky);
    });
    var score = (lucky - unlucky);
    console.log(score);
    if (score < 0) {
      $("#unlucky").show();
    }else if (score === 0) {
      $("#neither").show();
    }else {
      $("#lucky").show();
    }

  });
});
