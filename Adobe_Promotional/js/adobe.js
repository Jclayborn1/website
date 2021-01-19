(function(){
    var $button, $fb, $twitter, $ig, $yt, $unsub, $terms, $policy;
    
    $button = $('#button');
    $fb = $('#fb');
    $twitter = $('#twitter');
    $ig = $('#insta');
    $yt = $('#yt');
    $unsub = $('#unsub');
    $terms = $('#terms');
    $policy = $('.policy');

    // All Links
    $("a").each(function(e){
        $(this).on('click', function(e){
            e.preventDefault();
        })
    })

    $button.on('click',function(){
        window.open("https://www.adobe.com/creativecloud/buy/students/all-apps.html?sdid=1XGJD51M&mv=search&ef_id=Cj0KCQiAlZH_BRCgARIsAAZHSBmH8oHPBvHdhKybDfmwNwObe9uZMpmC8hnf5MEngg63zZEQ2pPEUjQaAlFYEALw_wcB:G:s&s_kwcid=AL!3085!3!271598496219!b!!g!!adobe%20teacher%20discount");
    }).css('cursor', 'pointer');

    $fb.on('click',function(){
        window.open("https://www.facebook.com/Adobe/");
    }).css('cursor', 'pointer');

    $twitter.on('click',function(){
        window.open("https://twitter.com/creativecloud?lang=en");
    }).css('cursor', 'pointer');

    $ig.on('click',function(){
        window.open("https://www.instagram.com/adobecreativecloud/");
    }).css('cursor', 'pointer');

    $yt.on('click',function(){
        window.open("https://www.youtube.com/user/AdobeCreativeCloud");
    }).css('cursor', 'pointer');

    $unsub.on('click', function(e){
        
        window.open("https://www.adobe.com/privacy/opt-out.html");
    }).css('cursor', 'pointer')

    $terms.on('click', function(e){
        
        window.open("https://www.adobe.com/legal/terms.html");
    }).css('cursor', 'pointer')

    $policy.on('click', function(e){
        
        window.open("https://www.adobe.com/privacy/policy.html");
    }).css('cursor', 'pointer')

}());
    
