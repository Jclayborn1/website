// NOTE: This example will not work locally in all browsers.
// In Chrome, if you try this locally, you may get an error along the lines of:
//       Origin 'null' is therefore not allowed access.
// You can try it out on the website for the book http://javascriptbook.com/code/c08/
// or run it on your own server.

function loadContent(url){                    // Load new content into page
  $('#content').load(url + ' #container').hide().fadeIn('slow');
}

$('nav a').on('click', function(e) {                 // User clicks nav link
  e.preventDefault();                                // Stop loading new link
  var url = this.href;                               // Get value of href

  $('nav a.current').removeClass('current');         // Clear current indicator
  $(this).addClass('current');                       // New current indicator

  loadContent(url);
    history.pushState(null, null, url);

  $('#container').remove();                          // Remove old content
  $('#content').load(url + ' #container').fadeIn( 300 ); // New content
});

window.onpopstate = function() {              // Handle back/forward buttons
  var path = location.pathname;               // Get file path
  loadContent(path);                          // Call function to load page
  var page = path.substring(location.pathname.lastIndexOf('/')+1);
  $('a').removeClass('current');              // Remove current from links
  $('[href="' + page + '"]').addClass('current'); // Update current link
};