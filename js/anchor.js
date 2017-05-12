// Inject anchor links to headers using jQuery
$(function () {
  'use strict';

  /* selector for headers */
  var postHeader = '.markdown-body h1, '
    +'.markdown-body h2, '
    +'.markdown-body h3, '
    +'.markdown-body h4, '
    +'.markdown-body h5, '
    +'.markdown-body h6';

  $(postHeader).filter('[id]').each(function () {
    var header      = $(this),
        headerID    = header.attr('id'),
        anchorClass = 'header-link',
        anchorIcon  = '<i class="fa fa-link" title="Link" aria-hidden="true"></i>';

    if (headerID) {
      header.prepend($('<a />').addClass(anchorClass).attr({ 'href': '#' + headerID, 'aria-hidden': 'true' }).html(anchorIcon));
    }

    return this;
  });
});
