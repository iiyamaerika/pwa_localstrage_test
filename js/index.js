// 必要な定数を作成
const rememberDiv = document.querySelector(".remember");
const forgetDiv = document.querySelector(".forget");
const form = document.querySelector("form");
const nameInput = document.querySelector("#entername");
const submitBtn = document.querySelector("#submitname");
const forgetBtn = document.querySelector("#forgetname");

const h1 = document.querySelector("h1");
const personalGreeting = document.querySelector(".index");

// ボタンが押されたときにフォームを送信しないようにする
form.addEventListener('submit', e => e.preventDefault());

// 'Say hello' ボタンがクリックされたら関数を実行する
submitBtn.addEventListener('click', () => {
  // 入力された名前をウェブストレージに保存
  localStorage.setItem('name', nameInput.value);
  // nameDisplayCheck() を動作させ、パーソナライズされた挨拶の表示と、フォームの表示を更新する
  nameDisplayCheck();
});

// 'Forget' ボタンがクリックされたら関数を実行する
forgetBtn.addEventListener('click', () => {
  // 保存してある名前をウェブストレージから削除
  localStorage.removeItem('name');
  // 再び nameDisplayCheck() を実行して、一般的な挨拶を表示するとともにフォーム表示を更新する
  nameDisplayCheck();
});

// nameDisplayCheck() という関数を定義する
function nameDisplayCheck() {
  // 'name' というデータ項目がウェブストレージに保存されているかどうかを調べる
  if(localStorage.getItem('name')) {
    // もし保存されていたら、個人に合わせた挨拶を表示
    const name = localStorage.getItem('name');
    h1.textContent = `Welcome, ${name}`;
    personalGreeting.textContent = `Welcome to our website, ${name}! We hope you have fun while you are here.`;
    // フォームのうち 'remember' の部分を隠し、'forget' の部分を表示
    forgetDiv.style.display = 'block';
    rememberDiv.style.display = 'none';
  } else {
    // もし保存されていなければ、一般的な挨拶を表示
    h1.textContent = 'Welcome to our website ';
    personalGreeting.textContent = 'Welcome to our website. We hope you have fun while you are here.';
    // フォームのうち 'forget' の部分を隠し、'remember' の部分を表示
    forgetDiv.style.display = 'none';
    rememberDiv.style.display = 'block';
  }
}

// ページ読み込み時にローカルストレージから値を取得してフォームに再表示する
window.onload = function() {
  var input = document.getElementById('input');
  input.value = localStorage.getItem('inputValue');
  if (InputValue !== null) {
    input.value = inputValue;
  }
}

// フォームの値が変更されたらローカルストレージに保存する
document.getElementById('input').addEventListener('change',function(){
  var input = document.getElementById('input');
  localStorage.setItem('inputValue',input.value);
});

// run nameDisplayCheck() when the page first loads to check wether a personal name was previously
// set, and if so display the personalized greeting. If not, show the generic greeting
nameDisplayCheck();