export function fullScreen(){
    return ()=>{
        var el = document.documentElement;
        var rfs = el.requestFullScreen || el.webkitRequestFullScreen || el.mozRequestFullScreen || el.msRequestFullscreen;      
        if(typeof rfs != "undefined" && rfs) {
            rfs.call(el);
        };
    }
}