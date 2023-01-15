import Player from '@vimeo/player';
import { throttle } from 'lodash';

const iframe = document.querySelector('iframe');
const player = new Player(iframe);

player.on('timeupdate', throttle( (ev)=> {
    // const a =ev.seconds;
    // console.log(a);
    localStorage.setItem("videoplayer-current-time",ev.seconds);
},1000));

const getUpdateTime =localStorage.getItem("videoplayer-current-time");
// console.log( getUpdateTime);
if (getUpdateTime === null){
    player.setCurrentTime(0)
} else {
    player.setCurrentTime(getUpdateTime)
}
