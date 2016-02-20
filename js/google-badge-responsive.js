$(document).ready(function() {
   var id = '111746071444691234996'; // change this with your google plus id;//
   var w=$(".gplusbadage").width();
   var gurl = '<script src="https://apis.google.com/js/platform.js" async defer>{parsetags: \'explicit\'}</script><div class="g-page" data-href="//plus.google.com/u/0/'+ id +'" data-width="'+ w +'" data-rel="publisher"></div><script type="text/javascript">gapi.page.go();</script>';
   $(".gplusbadage").html(gurl);
   $(window).resize(function(){
   w=$(".gplusbadage").width();
   gurl = '<script src="https://apis.google.com/js/platform.js" async defer>{parsetags: \'explicit\'}</script><div class="g-page" data-href="//plus.google.com/u/0/'+ id +'" data-width="'+ w +'" data-rel="publisher"></div><script type="text/javascript">gapi.page.go();</script>';
   $(".gplusbadage").empty();
   $(".gplusbadage").html(gurl);
});
});