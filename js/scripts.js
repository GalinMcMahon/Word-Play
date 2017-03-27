$(function(){

  var longWords = [];

  $("#submit").click(function(event) {
    var originalSentence = $("#sentence").val();
    var space = " ";
    var splitSentence = originalSentence.split(space);
    var three = splitSentence.forEach(function(split){
      if (split.length > 2){
        longWords.push(split);
      }
    });
    var reversedThree = longWords.reverse().toString().toUpperCase();
    var reversedLongWords = reversedThree.replace(/[,.]/g , " ");
    $("#result").text(reversedLongWords);
    event.preventDefault();
  });
});
