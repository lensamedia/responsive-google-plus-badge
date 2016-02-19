$(document).ready(function() {
   var w=$(".gplusbadage").width();
   $(".gplusbadage").html('<script src="https://apis.google.com/js/platform.js" async defer>{parsetags: \'explicit\'}</script><div class="g-page" data-href="//plus.google.com/u/0/111746071444691234996" data-width="'+ w +'" data-rel="publisher"></div><script type="text/javascript">gapi.page.go();</script>');
   $(window).resize(function(){
     w = $(".gplusbadage").width();
    $(".gplusbadage").empty();
    $(".gplusbadage").html('<script src="https://apis.google.com/js/platform.js" async defer>{parsetags: \'explicit\'}</script><div class="g-page" data-href="//plus.google.com/u/0/111746071444691234996" data-width="'+ w +'" data-rel="publisher"></div><script type="text/javascript">gapi.page.go();</script>');
});
});