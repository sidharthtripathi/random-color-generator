function change_bg(){
  function random_rgb(){
    let r = Math.ceil(Math.random()*255);
    let g = Math.ceil(Math.random()*255);
    let b = Math.ceil(Math.random()*255);
    let color = "rgb("+r +","+g+ ","+b+")";
    return color
  }
  let color = random_rgb()
  document.body.style.backgroundColor = color;
  document.getElementById("color_val").innerText = color;
}


let change_btn = document.getElementById("change_color");
change_btn.setAttribute('onclick','change_bg()')