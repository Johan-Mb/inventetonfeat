// fonction gérant le lancement du son, l'enchainement des tracks et le random

function audioPlayer()
{
    var currentSong = Math.floor(Math.random() * $("#playlist a").length);
    $("#audioPlayer")[0].src = $("#playlist a")[currentSong];
    $("#currentTrack").text($($("#playlist a")[currentSong]).text());

    $("#audioPlayer")[0].addEventListener("ended", function(){
        currentSong++;
        if(currentSong == $("#playlist a").length)
            currentSong = 0;
        $("#audioPlayer")[0].src = $("#playlist a")[currentSong].href;
        $("#currentTrack").text($($("#playlist a")[currentSong]).text());
        $("#audioPlayer")[0].play();
    });
}

// fonction gérant le bouton play / pause

var player = document.getElementById('audioPlayer');
var play_button = $('#play');
var text = $('#action');

play_button.click(function() {
    player[player.paused ? 'play' : 'pause']();
    $(this).toggleClass("fa-pause", !player.paused);

    if (player.paused) {
        text.text('Play');
    }
    else {
        text.text('Pause');
    }
    $(this).toggleClass("fa-play", player.paused);
});
