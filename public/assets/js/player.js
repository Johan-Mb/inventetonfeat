// fonction gérant le player
const player = {
    number1: document.getElementById('audioPlayer1'),
    number2: document.getElementById('audioPlayer2')
};
const play_button = $('#play');
const text = $('#action');
let mySongUrl = '';

$("input[name=acapella]").on("change", function(){
    getSongUrl(1, 'acapella')
})
$("input[name=beat]").on("change", function(){
    getSongUrl(2, 'beat')
})

const getSongUrl = (id, style) => {
    const songlist = document.querySelectorAll(`.acapella${id}`);
    let songId = '';
    songlist.forEach(song => {
        if (song.checked === true) {
            mySongUrl = song.value;
            songId = song.id;
        }
    })
    let label = document.getElementById(`labelfor_${songId}`);
    const songName = document.getElementById(`songname${id}`);
    songName.innerText = label.innerText;

    const number = `number${id}`;
    player[number].src = mySongUrl;
}

play_button.click(function() {
    managePlayer(1);
    managePlayer(2);

    const actualPlayer = player.number1;
    $(this).toggleClass("fa-pause", !actualPlayer.paused ),
    $(this).toggleClass("fa-play", actualPlayer.paused )

});

const managePlayer = (id) => {
    const number = `number${id}`
    const myPlayer = player[number];

    if (!myPlayer.paused) {
        text.text('Play');
        myPlayer.pause()
    }
    else {
        text.text('Pause');
        myPlayer.play()
    }
}
