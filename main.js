const yourYear = document.getElementById("your-year");
const yearButton = document.getElementById("year-button");
const title = document.getElementById("title");
const yearMessage = document.getElementById("year-message");
const giftMessage = document.getElementById("gift-message");
const receiveMessage = document.getElementById("receive-message");
const pointupMessage = document.getElementById("pointup-message");
const giftButton1 = document.getElementById("gift-button1");
const giftButton2 = document.getElementById("gift-button2");
const giftButton3 = document.getElementById("gift-button3");
const giftNumber1 = document.getElementById("gift-number1");
const giftNumber2 = document.getElementById("gift-number2");
const giftNumber3 = document.getElementById("gift-number3");

let pointDisply = document.getElementById("point");
let point = 1000;
pointDisply.textContent = point;

////年齢設定
let old = 0;

yearButton.onclick = function () {
  if (yourYear.value > 21) {
    alert("私より年上の方ですね。目上の方には敬語を使わせて頂きます！！");
    old = 0;
  } else if (yourYear.value === 21) {
    alert("同い年か！、タメ語でいいよね");
    old = 1;
    change();
  } else if (yourYear.value === "") {
    alert("年齢を入力してください");
  } else {
    alert("お、年下か。タメ語にするね");
    old = 1;
    change();
  }
};

function change() {
  if (old === 0) {
    title.textContent = "浦部蒼太の誕生日をお祝いしてください!!";
    yearMessage.textContent = "あなたの年齢を選択してください";
    giftMessage.textContent = "ギフトをプレゼントしてください!!";
    receiveMessage.textContent = "頂いたプレゼントはここに保管されています";
    pointupMessage.textContent = "ゲームでポイントを獲得しましょう";
  } else {
    title.textContent = "浦部蒼太の誕生日をお祝いしてくれ!!";
    yearMessage.textContent = "あなたの年齢を選択してくれ";
    giftMessage.textContent = "ギフトをプレゼントしてくれ!!";
    receiveMessage.textContent = "もらったプレゼントはここに保管されているよ";
    pointupMessage.textContent = "ゲームでポイントを獲得しよう";
  }
}

////カウントダウン
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
  let time = counter[1] + "日　" + counter[2] + "時間　" + counter[3] + "分"; //+
  //counter[4] +
  //"秒";
  timeDisplay.textContent = time;
  refresh();
};

let refresh = function () {
  setInterval(recalc, 60000);
};

recalc();

////ギフト
let giftList = {
  num1: 0,
  num2: 0,
  num3: 0,
};
//giftList = JSON.parse(localStorage.getItem("giftList"));
giftNumber1.textContent = giftList.num1;
giftNumber2.textContent = giftList.num2;
giftNumber3.textContent = giftList.num3;

giftButton1.onclick = function () {
  if (point >= 1000) {
    point = point - 1000;
    pointDisply.textContent = point;
    //giftList = JSON.parse(localStorage.giftList);
    giftList.num1 += 1;
    //localStorage.giftList = JSON.stringify(giftList);
    giftNumber1.textContent = giftList.num1;
  } else {
    alert("ポイントが不足しています！");
  }
};

giftButton2.onclick = function () {
  if (point >= 500) {
    point = point - 500;
    pointDisply.textContent = point;
    //giftList = JSON.parse(localStorage.giftList);
    giftList.num2 += 1;
    //localStorage.giftList = JSON.stringify(giftList);
    giftNumber2.textContent = giftList.num2;
  } else {
    alert("ポイントが不足しています！");
  }
};

giftButton3.onclick = function () {
  if (point >= 100) {
    point = point - 100;
    pointDisply.textContent = point;
    //giftList = JSON.parse(localStorage.getItem("giftList"));
    giftList.num3 += 1;
    //localStorage.setItem("giftList", JSON.stringify(giftList));
    giftNumber3.textContent = giftList.num3;
  } else {
    alert("ポイントが不足しています！");
  }
};

////ジャンケン
const hand = [
  "../images/janken-gu.png",
  "../images/janken-choki.png",
  "../images/janken-pa.png",
];
document.getElementById("message").innerHTML = "<h3>レッツジャンケン</h3>";
const startButton = document.getElementById("start-button");
const finishButton = document.getElementById("finish-button");

//let pointDisply = document.getElementById("point");
//let point = 1000;
//pointDisply.textContent = point;

let timer = 0;
let count = 0;

let game = 0;

startButton.onclick = function () {
  if (point >= 100) {
    game = 1;
    clearInterval(timer);
    timer = setInterval("getahand()", 500);
  } else {
    alert("100pt以上でないとジャンケンはできません");
  }
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
        "<h3>勝ったー 500円ゲット</h3>";
      point = point + 500;
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
  if (point >= 100) {
    if (game === 1) {
      clearInterval(timer);
      document.getElementById("reset").value = "リセット";
      document.janken.elements[0].disabled = false;
      document.janken.elements[1].disabled = false;
      document.janken.elements[2].disabled = false;
      timer = setInterval("getahand()", 500);
    } else {
      alert("「ゲームを始める」を押してください");
    }
  } else {
    alert("100pt以上でないとジャンケンはできません");
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
