function audio() {
    new Audio("./jiho-kurakazu.mp3").play()
 //   document.getElementById('btn_audio').currentTime = 0; //連続クリックに対応
  //  document.getElementById('btn_audio').play(); //クリックしたら音を再生
}
function hide() {
    const kurakazu =  new Audio("./jiho-kurakazu.mp3")
    for(let i=0;i<100;i++){
    kurakazu.play()
}
    
}