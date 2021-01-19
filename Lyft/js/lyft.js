(function() {
    var $link = $("a");

    $link.each(function(e){
        $(this).on('click', function(e){
            e.preventDefault();
        })
    })

}());