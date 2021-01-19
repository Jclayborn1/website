(function() {

    $("a").each(function(){
        $(this).on('click', function(e){
           e.preventDefault(); 
        })
        
    });
}());