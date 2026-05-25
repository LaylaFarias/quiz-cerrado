const PHOTOS = [
  'https://images.unsplash.com/photo-1597305877032-0668b3c8fc8e?w=900&q=80&fm=jpg&fit=crop',
  'https://images.unsplash.com/photo-1504208434309-cb69f4fe52b0?w=900&q=80&fm=jpg&fit=crop',
  'https://images.unsplash.com/photo-1518020382113-a7e8fc38eac9?w=900&q=80&fm=jpg&fit=crop',
  'https://images.unsplash.com/photo-1475113548986-5a7b9f55f951?w=900&q=80&fm=jpg&fit=crop',
  'https://images.unsplash.com/photo-1516026672322-bc52d61a55d5?w=900&q=80&fm=jpg&fit=crop',
];

const QUESTIONS = {
  facil: [
    {
      text: "O Cerrado é classificado como qual tipo de formação vegetal em escala global?",
      options: [
        { text: "Floresta tropical úmida", correct: false },
        { text: "Savana tropical", correct: true },
        { text: "Estepe temperada", correct: false },
        { text: "Tundra subtropical", correct: false }
      ],
      explanation: "O Cerrado é classificado como savana tropical."
    }
  ]
};

const LEVEL_LABELS = {
  facil: 'Fácil',
  medio: 'Médio',
  dificil: 'Difícil'
};

const KEYS = ['a', 'b', 'c', 'd'];

let currentLevel = null;
let currentQuestions = [];
let currentIndex = 0;
let score = 0;
let answered = false;

function shuffle(arr) {
  const a = [...arr];

  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));

    [a[i], a[j]] = [a[j], a[i]];
  }

  return a;
}

function selectLevel(level, el) {
  currentLevel = level;

  document
    .querySelectorAll('.level-btn')
    .forEach(b => b.classList.remove('selected'));

  el.classList.add('selected');

  document.getElementById('start-btn').disabled = false;
}

function startQuiz() {
  if (!currentLevel) return;

  currentQuestions = shuffle(QUESTIONS[currentLevel]);

  currentIndex = 0;
  score = 0;

  document.getElementById('cover').style.display = 'none';

  document.getElementById('quiz-screen').style.display = 'block';

  document
    .getElementById('result-screen')
    .classList.remove('active');

  document.getElementById('quiz-level-name').textContent =
    'Cerrado — ' + LEVEL_LABELS[currentLevel];

  buildDots();
  renderQuestion();
}

/* CONTINUE COLANDO TODO O JS DO <script> AQUI */
