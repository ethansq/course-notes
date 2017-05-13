// Inject anchor links to headers using jQuery
$(function () {
  'use strict';

  /* selector for headers */
  var postHeader = '.post-section > h1, '
    +'.post-section > h2, '
    +'.post-section > h3, '
    +'.post-section > h4, '
    +'.post-section > h5, '
    +'.post-section > h6';

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
    }

    return this;
  });
});
