document.addEventListener('DOMContentLoaded', function() {
    var button = document.getElementById('changelinks');
    button.addEventListener('click', function () {
        var text = $('#url').val();
        if (!text) {
            alert('invalid url');
            return;
        }
        chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
            chrome.tabs.sendMessage(tabs[0].id, {data: text}, function(response) {
                console.log('success');
            });
        });
    });
});
