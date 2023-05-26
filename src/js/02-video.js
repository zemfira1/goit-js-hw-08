import Player from '@vimeo/player';

const iframe = document.querySelector('iframe');
const player = new Player(iframe);

const onTimeupdate = function (event) { 
// {
//     duration: 61.857
//     percent: 0.049
//     seconds: 3.034
//     }
    const a = event.currentTarget.value;
    console.log(a);
};

player.on('timeupdate', onTimeupdate);
player.off('timeupdate', onTimeupdate);