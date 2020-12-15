const quiz = [
  {
    question: '100g中のビタミンCが最も多い食材はどれ？',
    answers: [
      'パプリカ', 
      'レモン', 
      'イチゴ', 
      '菜の花'
    ],
    correct: 'パプリカ'
  }, {
    question: '100mlあたりの糖質が最も多いお酒は？',
    answers: [
      'ハイボール', 
      '白ワイン', 
      '発泡酒', 
      'ラム酒'
    ],
    correct: '発泡酒'
  }, {
  question: '次のうち、鉄分補給の時に相性抜群の栄養素はどれ？',
    answers: [
      'たんぱく質', 
      'ビタミンC', 
      '葉酸', 
      '3つ全部'
    ],
    correct: '3つ全部'
  }
];
const quizLength = quiz.length;
let quizIndex = 0;
let score = 0;

const $button = document.getElementsByTagName('button');
const buttonLength = $button.length;

//クイズの問題文、選択肢定義
const setupQuiz = () => {
  document.getElementById('js-question').textContent = quiz[quizIndex].question;
// $button[0].textContent = answers[0];
// $button[1].textContent = answers[1];
// $button[2].textContent = answers[2];
// $button[3].textContent = answers[3];
// ⬇︎⬇︎リファクタリング
  let buttonIndex = 0;
  while(buttonIndex < buttonLength){
    $button[buttonIndex].textContent = quiz[quizIndex].answers[buttonIndex];
    buttonIndex++;
  }
}
setupQuiz();

const clickHandler = (e) => {
  if (quiz[quizIndex].correct === e.target.textContent){
    window.alert('正解！');
    score++;
  } else {
    window.alert('不正解！');
  }
  quizIndex++;

  if(quizIndex < quizLength){
    //問題数がまだあればこちらを実行
    setupQuiz();
  } else {
    //問題数がもうなければこちらを実行
    window.alert('終了！あなたの正解数は' + score + '/' + quizLength + 'です！');
  }
};

//ボタンをクリックしたら正誤判定
let handleIndex = 0;
while (handleIndex < buttonLength) {
  $button[handleIndex].addEventListener('click', (e) => {
    clickHandler(e);
  });
  handleIndex++;
}

