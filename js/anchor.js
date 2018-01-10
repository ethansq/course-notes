// Inject anchor links to headers using jQuery
$(function () {
  'use strict';

  /* selector for headers */
  var classArray = ["CLAS201", "CS349", "CS350", "MSCI311", "SCI207", "CS343"];

  classArray.forEach(function(curr, index, array) {
    var prefix = ".markdown-body."+curr;
    var postHeader =
        prefix+' .post-section > h1, '+
        prefix+' .post-section > h2, '+
        prefix+' .post-section > h3, '+
        prefix+' .post-section > h4, '+
        prefix+' .post-section > h5, '+
        prefix+' .post-section > h6';

    postHeader = ".markdown-body."+curr+" "+postHeader;
    console.log(postHeader);

    var activeClass = (curr === "CLAS201") ? "active" : "";
    var $contents = $(".table-of-contents-container");
    $contents.append("<div class='table-of-contents "+curr+" "+activeClass+"'></div>");
    $contents = $(".table-of-contents."+curr);

    $(postHeader).filter('[id]').each(function () {
      var header      = $(this),
          headerID    = header.attr('id'),
          anchorClass = 'header-link',
          anchorIcon  = '<i class="fa fa-link" title="Link" aria-hidden="true"></i>';

      if (headerID) {
        // header.prepend($('<a />').addClass(anchorClass).attr({ 'href': '#' + headerID, 'aria-hidden': 'true' }).html(anchorIcon));
        header.prepend(anchorIcon);
        header.wrap(
          $('<a />').addClass('no-decoration header-anchor').attr({ 'href':'#'+headerID })
        );

        var element = header.prop('nodeName');
        $contents.append(
          "<a class='content-section' href=#"+headerID+">" +
            "<"+element+">"+header.text()+"</"+element+">" +
          "</a>"
        );
      }

      $("a.content-section").first().addClass("active");
      
      return this;
    });

  });
});
