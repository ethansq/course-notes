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

function getParameterByName(name, url) {
    if (!url) url = window.location.href;
    name = name.replace(/[\[\]]/g, "\\$&");
    var regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)"),
        results = regex.exec(url);
    if (!results) return null;
    if (!results[2]) return '';
    return decodeURIComponent(results[2].replace(/\+/g, " "));
}

function showClass(showClass) {
  $(".category .category-header").removeClass("active")
  $(".category[lecture="+showClass+"] .category-header").addClass("active");

  // show notes for this class, and hide notes for others
  // also update table of contents
  $(".markdown-body, .table-of-contents").removeClass("active");
  $(".markdown-body"+"."+showClass).addClass("active");
  $(".table-of-contents"+"."+showClass).addClass("active");
}

$(document).ready(function() {
  $(this).scrollTop(0);

  var classQuery = getParameterByName('class');

  if (classQuery === null || classQuery === '') {
    classQuery = "CLAS201";
  }

  $(".category[lecture='"+classQuery+"'] .category-header").addClass("active");
  setCookie("lecture", classQuery);
  showClass(classQuery);

  // Set the click listener for the class selection list
  $(".category").each(function(index) {
    $(this).click(function() {
      var newLecture = $(this).attr("lecture");
      setCookie("lecture", newLecture);

      showClass(newLecture);
    });
  });
});
