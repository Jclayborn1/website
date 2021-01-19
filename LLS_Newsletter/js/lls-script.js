
(function() {
// Declare Variables
    var $pedi = $('#pedi');
    var $unsub = $('#unsub');
    var $emailPref = $('#emailPref');
    var $1234 = $('#1234');
    var $disclaimer = $('#disclaimer');
    var $disclosure = $('#disclosure');
    var $fundraiser = $('#fundraiser');
    var $button = $('#button');
    var $donate = $('#donate');
    var $fb = $('#fb');
    var $ig = $('#ig');
    var $twitter = $('#twitter');
    var $pin = $('#pin');
    var learnMore = "https://www.lls.org/blood-cancer-awareness";
    var disclaimerHref = "https://www.lls.org/lls-us-hq/article/disclaimer";
    var disclosure = "https://www.lls.org/article/public-disclosure";

// All Links
    $("a").each(function(e){
        $(this).on('click', function(e){
            e.preventDefault();
        })
    })

// Pediatric Link
    $pedi.on('click', function(e){
       
        window.open("https://www.lls.org/childrens-initiative");
    })
// Learn More Button Functions
    $button.on('click', function(e){
                
                window.open(learnMore);
    }).hover( function() {
            setTimeout(function() {
            $(this).css("color", "#000000");
            }, 100);
        },
            function() {
            setTimeout(function() {
                $(this).css("color", "black");
                }, 100);
            }).css('cursor', 'pointer');

// Follow Us Section Links
    $fb.on('click', function(e){
        
        window.open("https://www.facebook.com/LLSusa/");
    }).css('cursor', 'pointer');

    $ig.on('click', function(e){
       
        window.open("https://www.instagram.com/llsusa/?hl=en");
    }).css('cursor', 'pointer');
    $twitter.on('click', function(e){
        
        window.open("https://twitter.com/LLSusa?ref_src=twsrc%5Egoogle%7Ctwcamp%5Eserp%7Ctwgr%5Eauthor");
    }).css('cursor', 'pointer');
    $pin.on('click', function(e){
        
        window.open("https://www.pinterest.com/LLSusa/_created/");
    }).css('cursor', 'pointer');


// Footer Links
    $unsub.on('click', function(e){ 
       
        window.open("http://email.lls.org/LLSUnsubscribe");
    }).css('cursor', 'pointer');

    $emailPref.on('click', function(e){
        
        window.open("https://email.lls.org/LLSPreferenceCenter/");
    }).css('cursor', 'pointer');

    $disclaimer.on('click', function(e){
        

        window.open(disclaimerHref);
    }).css('cursor', 'pointer');

    $disclosure.on('click', function(e){
      
        window.open(disclosure);
    }).css('cursor', 'pointer');

    $donate.on('click', function(e){
      
        window.open("https://donate.lls.org/lls/?ds_rl=1278572&ds_rl=1278572&gclid=CjwKCAiA8ov_BRAoEiwAOZogwbbdt52Aw1B98ZgMb8Vcg86qEIM7b3wQXywC6tnO7vR2VcUXPSr_oxoCWTMQAvD_BwE&gclsrc=aw.ds");
    }).css('cursor', 'pointer');

    $fundraiser.on('click', function(e){
        
        window.open("https://www.lls.org/fundraise");
    }).css('cursor', 'pointer');
    
    $('#randEmail').on('click', function(e){
      
    }).css('cursor', 'pointer');

}());