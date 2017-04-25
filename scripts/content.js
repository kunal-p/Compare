chrome.runtime.onMessage.addListener( function(request, sender, sendResponse) {

    $('html').css('background-color','white')
    $('body').css('overflow', 'hidden');
    $('<iframe src="'+request.data +'" frameborder="0" scrolling="no" id="myFrame" style="position:absolute;width:100%;height:100%;top:0;left:0;z-index:1000;mix-blend-mode:difference;background-color:white;"></iframe>').appendTo('body');

    sendResponse({data: request.data, success: true});
});
