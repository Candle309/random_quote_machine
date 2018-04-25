var randomQuote = "";
var randomAuthor = "";
var colors = ['#16a085', '#27ae60', '#2c3e50', '#f39c12', '#e74c3c', '#9b59b6', '#FB6964', '#342224', '#472E32', '#BDBB99', '#77B1A9', '#73A857', '#d9c226', '#a60036','#c9e07a', '#f47a0b', '#007100', '#8080ff', '#3711ee', '#77B1A9', '#7d007d', '#ff0dc2', '#ff88ff', '#b14e94'];
function getQuote(){
  var url = "https://api.forismatic.com/api/1.0/?method=getQuote&lang=en&format=jsonp&jsonp=?";
  var i = 0;
  $.getJSON(url, function(data){
    randomQuote = data.quoteText;
    randomAuthor = data.quoteAuthor;    
    if (randomAuthor.length == 0) randomAuthor = "Anonymous";    
    $(".quote-text").animate({
      opacity: 0
    }, 500, function() {
      $(this).animate({
        opacity: 1
      }, 500);
      $('.quote').html(randomQuote);
    });
    $(".author").animate({
      opacity: 0
    }, 500, function() {
      $(this).animate({
        opacity: 1
      }, 500);
      $('.author').html('-' + randomAuthor);
    });
    var color = Math.floor(Math.random() * colors.length);
    $("html body").animate({
      backgroundColor: colors[color],
      color: colors[color]
    }, 1000);
    $("#new-quote").animate({
      backgroundColor: colors[color],
    }, 1000);
  })
}
$(document).ready(function(){
  getQuote();
  $("#new-quote").on("click", function(){
    getQuote();
  })
  $("#twitterIcon").on("click", function(){
    window.open("http://twitter.com/intent/tweet?text="+randomQuote + "     -" + randomAuthor);
  })
  $("#tumblrIcon").on("click", function(){
    window.open('https://www.tumblr.com/widgets/share/tool?posttype=quote&tags=quotes&caption='+randomAuthor+'&content=' + randomQuote+'&canonicalUrl=https%3A%2F%2Fwww.tumblr.com%2Fbuttons&shareSource=tumblr_share_button');
  })
       
})