const yourYear = document.getElementById("your-year");
const yearButton = document.getElementById("year-button");

yearButton.onclick = function () {
  if (yourYear.value > 21) {
    alert("私より年上の方ですね。目上の方には敬語を使わせて頂きます！！");
  } else if (yourYear.value === 21) {
    alert("同い年か！、タメ語でいいよね");
  } else if (yourYear.value === "") {
    alert("年齢を入力してください");
  } else {
    alert("お、年下か。タメ語にするね");
  }
};

const timeDisplay = document.getElementById("timer");
let countdown = function (due) {
  let now = new Date();
  let rest = due.getTime() - now.getTime();
  let sec = Math.floor((rest / 1000) % 60);
  let min = Math.floor(rest / 1000 / 60) % 60;
  let hours = Math.floor(rest / 1000 / 60 / 60) % 24;
  let days = Math.floor(rest / 1000 / 60 / 60 / 24);
  let months = Math.floor(rest / 1000 / 60 / 60 / 24 / 30);
  let count = [months, days, hours, min, sec];

  return count;
};

let goal = new Date();
goal.setMonth(4);
//Dateオブジェクトの「月」が0から11だから
goal.setDate(21);
goal.setHours(12);
goal.setMinutes(30);
goal.setSeconds(00);

let recalc = function () {
  let counter = countdown(goal);
  let time =
    counter[1] +
    "日　" +
    counter[2] +
    "時間　" +
    counter[3] +
    "分" +
    counter[4] +
    "秒";
  timeDisplay.textContent = time;
  refresh();
};

let refresh = function () {
  setInterval(recalc, 1000);
};

recalc();

const hand = ["janken-gu.png", "janken-choki.png", "janken-pa.png"];
let pointDisply = document.getElementById("point");

let timer = 0;
let count = 0;

let point = 1000;
pointDisply.textContent = point;

timer = setInterval("getahand()", 100);
document.getElementById("message").innerHTML = "<h3>レッツジャンケン</h3>";

function getbhand(btn) {
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
}

function handreset() {
  getahand();
  document.getElementById("reset").value = "リセット";
  document.janken.elements[0].disabled = false;
  document.janken.elements[1].disabled = false;
  document.janken.elements[2].disabled = false;
  timer = setInterval("getahand()", 100);
}

function getahand() {
  document.getElementById("ahand").innerHTML = "<img src=" + hand[count] + " >";
  document.getElementById("bhand").innerHTML = "<img src=" + hand[count] + ">";
  count++;
  if (count > 2) {
    count = 0;
    //timer = setInterval("getahand()", 500);
  }
}
