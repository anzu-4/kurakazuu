function audio() {
    document.getElementById('btn_audio').currentTime = 0; //連続クリックに対応
    document.getElementById('btn_audio').play(); //クリックしたら音を再生
}
function audio2() {
    document.getElementById('btn_audio').currentTime = 0; //連続クリックに対応
    document.getElementById('btn_audio').play(); //クリックしたら音を再生
    setTimeout(() => {
    document.getElementById('btn_audio').currentTime = 0; //連続クリックに対応
    document.getElementById('btn_audio').play(); //クリックしたら音を再生
    setTimeout(() => {
        document.getElementById('btn_audio').currentTime = 0; //連続クリックに対応
        document.getElementById('btn_audio').play(); //クリックしたら音を再生
    }, 500);
    setTimeout(() => {
        document.getElementById('btn_audio').currentTime = 0; //連続クリックに対応
        document.getElementById('btn_audio').play(); //クリックしたら音を再生
    }, 500);
    setTimeout(() => {
        document.getElementById('btn_audio').currentTime = 0; //連続クリックに対応
        document.getElementById('btn_audio').play(); //クリックしたら音を再生
    }, 500);
}, 500);
}