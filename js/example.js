// NOTE: This example will not work locally in all browsers. 
// Please try it out on the website for the book http://javascriptbook.com/code/c08/
// or run it on your own server.

$(function() {                                    // When the DOM is ready

  var times;                                      // Declare global variable
  $.ajax({
    beforeSend: function(xhr) {                   // Before requesting data
      if (xhr.overrideMimeType) {                 // If supported
        xhr.overrideMimeType("application/json"); // set MIME to prevent errors
      }
    }
  });

  // FUNCTION THAT COLLECTS DATA FROM THE JSON FILE
  function loadTimetable() {                    // Declare function
    $.getJSON('data/portfolio.json')              // Try to collect JSON data
    .done( function(data){                      // If successful
      times = data;                             // Store it in a variable
    }).fail( function() {                       // If a problem: show message
      $('#event').html('Sorry! We could not load the timetable at the moment');
    });
  }

  loadTimetable();                              // Call the function


  // CLICK ON THE EVENT TO LOAD A TIMETABLE 
  $('#content').on('click', '#event a', function(e) {  // User clicks on event

    e.preventDefault();                                // Prevent loading page
    var loc = this.id.toUpperCase();                   // Get value of id attr

    var newContent = '';                               // Build up timetable by
    for (var i = 0; i < times[loc].length; i++) {      // looping through events
      newContent += '<li><div class="time">' + times[loc][i].time + '</div>';
      newContent += '<p><a href="';
      newContent += times[loc][i].title + '">';
      newContent += 'visit website</a></p></li>';
    }

    $('#sessions').html('<ul>' + newContent + '</ul>').hide().fadeIn( 700 ); // Display times on page

    $('#event a.current').removeClass('current');       // Update selected item
    $(this).addClass('current');

    $('#details').text('');                             // Clear third column
  });

  // CLICK ON A SESSION TO LOAD THE DESCRIPTION
  $('#content').on('click', '#sessions li a', function(e) { // Click on session
    e.preventDefault();                                     // Prevent loading
    var fragment = this.href; 
    window.open(fragment);                             // Title is in href

    fragment = fragment.replace('#', ' #');                 // Add space after#
    $('#details').load(fragment);                           // To load info

    $('#sessions a.current').removeClass('current');        // Update selected
    $(this).addClass('current');
  });

  
  function loadContent(url){                    // Load new content into page
      $('#content').load(url + ' #container').hide().fadeIn('slow');
    }

  // CLICK ON PRIMARY NAVIGATION
  $('nav a').on('click', function(e) {                       // Click on nav
    e.preventDefault();  
                                        // Prevent loading
    var url = this.href;
                                         // Get URL to load

    $('nav a.current').removeClass('current');               // Update nav
    $(this).addClass('current');

    loadContent(url);
    history.pushState(null, null, url);

    $('#container').remove();                                // Remove old part
    $('#content').load(url + ' #container').fadeIn( 300 ); // Add new
  });

  

  window.onpopstate = function() {              // Handle back/forward buttons
    var path = location.pathname;               // Get file path
    loadContent(path);                          // Call function to load page
    var page = path.substring(location.pathname.lastIndexOf('/')+1);
    $('a').removeClass('current');              // Remove current from links
    $('[href="' + page + '"]').addClass('current'); // Update current link
  };

});