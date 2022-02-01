var colors = new Array('#ff1a00', '#00a2ff', '#00b95d', '#000000', '#ff6f9b', '#a76700', '#867d00','#7b0041','#ff4800','#959595','#00a646','#009fe3','#1d0e46');
var num = alea();

$(document).ready(function() {
    $('body').css('background-color', colors[Math.floor(Math.random() * colors.length)]);
});

function alea() {
    var text = "";
    var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

    for (var i = 0; i < 10; i++)
        text += possible.charAt(Math.floor(Math.random() * possible.length));

    return text;
}
