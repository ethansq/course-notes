function setCookie(cname, cvalue, exdays) {
  var d = new Date();
  d.setTime(d.getTime() + (exdays*24*60*60*1000));
  var expires = "expires="+ d.toUTCString();
  document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}

function getCookie(name) {
    var nameEQ = name + "=";
    var ca = document.cookie.split(';');
    for(var i=0;i < ca.length;i++) {
        var c = ca[i];
        while (c.charAt(0)==' ') {
            c = c.substring(1,c.length);
        }
        if (c.indexOf(nameEQ) == 0) {
            return c.substring(nameEQ.length,c.length);
        }
    }
    return null;
}

$(document).ready(function() {
  $(this).scrollTop(0);

  $(".category[lecture='CLAS201'] .category-header").addClass("active");
  setCookie("lecture", "CLAS201");

  $(".category").each(function(index) {
    $(this).click(function() {
      var newLecture = $(this).attr("lecture");
      setCookie("lecture", newLecture);
      console.log(getCookie("lecture"));
      $(".category .category-header").removeClass("active")
      $(".category[lecture="+newLecture+"] .category-header").addClass("active");
    });
  });
});
