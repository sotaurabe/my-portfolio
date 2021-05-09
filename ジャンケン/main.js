const hand = ["janken-gu.png", "janken-choki.png", "janken-pa.png"];
document.getElementById("message").innerHTML = "<h3>レッツジャンケン</h3>";
const startButton = document.getElementById("start-button");
const finishButton = document.getElementById("finish-button");

let pointDisply = document.getElementById("point");
let point = 1000;
pointDisply.textContent = point;

let timer = 0;
let count = 0;

let game = 0;

startButton.onclick = function () {
  game = 1;
  clearInterval(timer);
  timer = setInterval("getahand()", 100);
};

finishButton.onclick = function () {
  game = 0;
  document.getElementById("message").innerHTML = "<h3>レッツジャンケン</h3>";
  document.janken.elements[0].disabled = false;
  document.janken.elements[1].disabled = false;
  document.janken.elements[2].disabled = false;
  document.getElementById("ahand").innerHTML = "";
  document.getElementById("bhand").innerHTML = "";
};

function getbhand(btn) {
  if (game === 1) {
    clearInterval(timer);
    let r = Math.floor(Math.random() * 3);
    document.getElementById("ahand").innerHTML = "<img src=" + hand[r] + ">";
    document.getElementById("bhand").innerHTML = "<img src=" + hand[btn] + ">";
    document.janken.elements[0].disabled = true;
    document.janken.elements[1].disabled = true;
    document.janken.elements[2].disabled = true;
    let num = 3;
    if (
      (btn === 0 && r === 1) ||
      (btn === 1 && r === 2) ||
      (btn === 2 && r === 0)
    ) {
      document.getElementById("message").innerHTML =
        "<h3>勝ったー 100円ゲット</h3>";
      point = point + 100;
      pointDisply.textContent = point;
    } else if (
      (btn === 0 && r === 2) ||
      (btn === 1 && r === 0) ||
      (btn === 2 && r === 1)
    ) {
      document.getElementById("message").innerHTML =
        "<h3>負けたー　100円没収</h3>";
      point = point - 100;
      pointDisply.textContent = point;
    } else {
      document.getElementById("message").innerHTML = "<h3>あいこだね</h3>";
      document.getElementById("reset").value = "あいこでー";
    }
  } else {
    alert("「ゲームを始める」を押してください");
  }
}

function handreset() {
  if (game === 1) {
    //getahand();
    clearInterval(timer);
    document.getElementById("reset").value = "リセット";
    document.janken.elements[0].disabled = false;
    document.janken.elements[1].disabled = false;
    document.janken.elements[2].disabled = false;
    timer = setInterval("getahand()", 100);
  } else {
    alert("「ゲームを始める」を押してください");
  }
}

function getahand() {
  if (game === 1) {
    document.getElementById("ahand").innerHTML =
      "<img src=" + hand[count] + " >";
    document.getElementById("bhand").innerHTML =
      "<img src=" + hand[count] + ">";
    count++;
    if (count > 2) {
      count = 0;
      //timer = setInterval("getahand()", 500);
    }
  }
}
