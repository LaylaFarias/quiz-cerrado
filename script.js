const PHOTOS = [
  'https://ispn.org.br/wp-content/uploads/2022/03/CERRADO.jpg',
  'https://www.produzindocerto.com.br/wp-content/uploads/2024/09/dia-nacional-do-cerrado-produzindocerto-1280x720-1.jpg',
  'https://static.wixstatic.com/media/480088_801764772d7049309155b44b11a99889~mv2.jpg/v1/fill/w_326,h_215,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/Buriti_AcervoISPN_Bento%20Viana.jpg',
  'https://static.wixstatic.com/media/a27d24_cb62d38c8bea46f6a142f5420bba408e~mv2.jpg/v1/fill/w_1000,h_750,al_c,q_90,usm_0.66_1.00_0.01/a27d24_cb62d38c8bea46f6a142f5420bba408e~mv2.jpg',
  'https://live.staticflickr.com/1860/44373091462_2058d946e0_b.jpg',
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
      explanation: "O Cerrado é classificado como savana tropical — mais especificamente, é considerado a maior savana da América do Sul e a savana com maior biodiversidade do mundo."
    },
    {
      text: "Qual apelido é dado ao Cerrado por abrigar nascentes que alimentam as principais bacias hidrográficas brasileiras?",
      options: [
        { text: "Pulmão do Brasil", correct: false },
        { text: "Jardim das Águas", correct: false },
        { text: "Berço das Águas do Brasil", correct: true },
        { text: "Caixa d'Água da Amazônia", correct: false }
      ],
      explanation: "O Cerrado é chamado de 'Berço das Águas do Brasil' porque abriga nascentes que alimentam as bacias dos rios São Francisco, Tocantins-Araguaia e Paraná-Paraguai, entre outras."
    },
    {
      text: "Qual porcentagem aproximada do território brasileiro o Cerrado ocupa?",
      options: [
        { text: "Cerca de 8%", correct: false },
        { text: "Cerca de 33%", correct: false },
        { text: "Cerca de 50%", correct: false },
        { text: "Cerca de 22% a 24%", correct: true }
      ],
      explanation: "O Cerrado ocupa aproximadamente 2 milhões de km², representando cerca de 22% a 24% do território nacional — é o segundo maior bioma do Brasil, atrás apenas da Floresta Amazônica."
    },
    {
      text: "Como é o clima predominante no Cerrado em relação às estações do ano?",
      options: [
        { text: "Chuvoso o ano inteiro, sem estação seca definida", correct: false },
        { text: "Verão chuvoso e inverno seco bem definidos", correct: true },
        { text: "Inverno chuvoso e verão seco", correct: false },
        { text: "Clima equatorial sem variações sazonais", correct: false }
      ],
      explanation: "O clima tropical sazonal do Cerrado é marcado por duas estações bem definidas: verão muito chuvoso (outubro a abril) e inverno rigorosamente seco (maio a setembro)."
    },
    {
      text: "Qual das alternativas apresenta frutos nativos do Cerrado?",
      options: [
        { text: "Maçã, uva e ameixa", correct: false },
        { text: "Pequi, baru e cagaita", correct: true },
        { text: "Açaí, cupuaçu e graviola", correct: false },
        { text: "Manga, abacate e goiaba", correct: false }
      ],
      explanation: "Pequi, baru, cagaita, mangaba e buriti são exemplos de frutos nativos e típicos do Cerrado. O açaí e o cupuaçu são típicos da Amazônia, enquanto maçã e uva são de clima temperado."
    }
  ],

  medio: [
    {
      text: "Qual característica do solo do Cerrado é responsável pelo crescimento tortuoso dos troncos das árvores?",
      options: [
        { text: "Solo arenoso com baixa capacidade de retenção de água", correct: false },
        { text: "Solo muito ácido e rico em alumínio", correct: true },
        { text: "Solo argiloso com alta salinidade", correct: false },
        { text: "Solo calcário com pH alcalino", correct: false }
      ],
      explanation: "O solo do Cerrado é antigo, ácido e pobre em nutrientes, mas muito rico em alumínio. O excesso de alumínio interfere no metabolismo das plantas e é o principal responsável pelo crescimento tortuoso dos troncos."
    },
    {
      text: "O lobo-guará e a lobeira (Solanum lycocarpum) são exemplos de qual tipo de relação ecológica?",
      options: [
        { text: "Parasitismo — a planta se beneficia às custas do lobo", correct: false },
        { text: "Competição interespecífica por recursos alimentares", correct: false },
        { text: "Mutualismo — ambas as espécies se beneficiam", correct: true },
        { text: "Comensalismo — apenas o lobo é beneficiado", correct: false }
      ],
      explanation: "É um mutualismo: o lobo-guará se alimenta dos frutos da lobeira e, ao defecar, espalha as sementes da planta, favorecendo sua dispersão e reprodução. Ambos os organismos são beneficiados."
    },
    {
      text: "A vegetação do Cerrado é descrita como 'floresta invertida'. Qual é o significado biológico dessa expressão?",
      options: [
        { text: "As árvores crescem de baixo para cima, ao contrário das florestas tropicais", correct: false },
        { text: "A maior parte da biomassa está no subsolo, nas raízes profundas", correct: true },
        { text: "As folhas ficam voltadas para o solo para absorver umidade do ar", correct: false },
        { text: "As raízes crescem acima do nível do solo, como no manguezal", correct: false }
      ],
      explanation: "A expressão 'floresta invertida' refere-se ao fato de que a maior parte da biomassa do Cerrado está no subsolo, em raízes extremamente profundas. Essas raízes captam água nos lençóis freáticos durante a seca e armazenam carbono."
    },
    {
      text: "Quais são as adaptações físicas mais comuns nas plantas do Cerrado para sobreviver ao fogo e à seca?",
      options: [
        { text: "Folhas largas e caducas, raízes superficiais e xilema reduzido", correct: false },
        { text: "Cascas grossas (cortiça), folhas rígidas e raízes profundas", correct: true },
        { text: "Espinhos, caule suculento e folhas transformadas em acúleos", correct: false },
        { text: "Folhas cobertas de cera e caule oco para armazenar água", correct: false }
      ],
      explanation: "As plantas do Cerrado apresentam cascas grossas que protegem contra o fogo, folhas esclerófilas que reduzem a perda de água e raízes profundas que buscam água no lençol freático durante os longos períodos de seca."
    },
    {
      text: "Qual formação vegetal do Cerrado apresenta a fisionomia mais densa, com cobertura arbórea fechada semelhante a uma floresta?",
      options: [
        { text: "Campo Limpo", correct: false },
        { text: "Campo Cerrado", correct: false },
        { text: "Cerrado Stricto Sensu", correct: false },
        { text: "Cerradão", correct: true }
      ],
      explanation: "O Cerradão é a formação mais densa do Cerrado, com cobertura arbórea fechada que se assemelha a uma floresta. O Campo Limpo tem predomínio de gramíneas; o Cerrado Stricto Sensu possui árvores esparsas sobre estrato herbáceo."
    }
  ],

  dificil: [
    {
      text: "O processo de evapotranspiração realizado pela vegetação nativa do Cerrado tem importância direta em qual fenômeno climático de escala regional?",
      options: [
        { text: "Formação de geadas no planalto central durante o inverno", correct: false },
        { text: "Manutenção dos 'rios voadores' e do regime de chuvas no Sul e Sudeste do Brasil", correct: true },
        { text: "Aumento da amplitude térmica diária na região Centro-Oeste", correct: false },
        { text: "Redução da intensidade dos ventos alísios na zona intertropical", correct: false }
      ],
      explanation: "A vegetação nativa libera grandes quantidades de vapor d'água, contribuindo para os chamados 'rios voadores' — fluxos de vapor que alimentam as chuvas no Centro-Oeste, Sul e Sudeste. Com o desmatamento, esse mecanismo é comprometido, agravando secas regionais."
    },
    {
      text: "Do ponto de vista do ciclo do carbono, o que torna o Cerrado especialmente relevante para as mudanças climáticas globais?",
      options: [
        { text: "Sua biomassa aérea (troncos e galhos) é comparável à da Amazônia em estoque de carbono", correct: false },
        { text: "Sua rede de raízes profundas armazena enormes quantidades de carbono no subsolo", correct: true },
        { text: "A grande quantidade de metano liberado por cupinzeiros compensa o CO2 absorvido", correct: false },
        { text: "O Cerrado absorve mais CO2 do que qualquer outro bioma brasileiro por unidade de área", correct: false }
      ],
      explanation: "A 'floresta invertida' do Cerrado armazena toneladas de carbono no subsolo, acumulado ao longo de milênios. Quando a vegetação é retirada ou queimada, esse carbono é liberado na atmosfera como CO2, contribuindo significativamente para o efeito estufa."
    },
    {
      text: "A espécie Tibouchina papyrus (pau-papel) é endêmica do Cerrado e ocorre principalmente em qual tipo de ambiente?",
      options: [
        { text: "Veredas úmidas às margens de cursos d'água", correct: false },
        { text: "Campos rupestres rochosos de altitude em Goiás", correct: true },
        { text: "Cerradão fechado de solos argilosos profundos", correct: false },
        { text: "Matas de galeria ao longo de rios e córregos", correct: false }
      ],
      explanation: "A Tibouchina papyrus, o pau-papel, é encontrada especialmente nas regiões rochosas de altitude (campos rupestres) de Goiás. Sua casca solta em películas transparentes que lembram papel de seda, daí o nome popular."
    },
    {
      text: "O fenômeno das voçorocas no Cerrado está diretamente associado a qual processo resultante do desmatamento?",
      options: [
        { text: "Salinização do solo causada pela irrigação excessiva da agricultura", correct: false },
        { text: "Erosão hídrica intensa que cria ravinas profundas no solo exposto", correct: true },
        { text: "Subsidência do solo por colapso de cavernas do aquífero Guarani", correct: false },
        { text: "Acidificação extrema do solo por deposição ácida das queimadas", correct: false }
      ],
      explanation: "Voçorocas são erosões profundas causadas pela ação da água das chuvas sobre o solo exposto e sem proteção vegetal. Com o desmatamento, as chuvas intensas escavam sulcos cada vez maiores, removendo nutrientes e assoreando os rios."
    },
    {
      text: "Segundo o Código Florestal brasileiro, qual é a principal razão pela qual o Cerrado sofre desmatamento mais acelerado em comparação com a Amazônia?",
      options: [
        { text: "O Cerrado tem menos fiscalização por parte do IBAMA e dos estados", correct: false },
        { text: "O Cerrado possui menor exigência de reserva legal (20%) em propriedades rurais", correct: true },
        { text: "As empresas do agronegócio preferem o Cerrado por ter solos mais férteis", correct: false },
        { text: "A Amazônia recebe mais recursos para monitoramento por satélite", correct: false }
      ],
      explanation: "Pelo Código Florestal, propriedades rurais na Amazônia devem manter 80% de reserva legal nativa, enquanto no Cerrado a exigência é de apenas 20%. Essa diferença legal permite muito mais desmatamento no Cerrado, tornando-o o bioma mais desmatado do Brasil."
    },
    {
      text: "Qual aquífero, parcialmente recarregado pelas chuvas infiltradas pelo solo do Cerrado, é considerado um dos maiores reservatórios de água doce subterrânea do mundo?",
      options: [
        { text: "Aquífero Alter do Chão", correct: false },
        { text: "Aquífero Guarani", correct: true },
        { text: "Aquífero Urucuia", correct: false },
        { text: "Aquífero Cabeças", correct: false }
      ],
      explanation: "O Aquífero Guarani, um dos maiores do mundo, é parcialmente recarregado pela infiltração das águas das chuvas através do solo do Cerrado. O desmatamento reduz essa infiltração, comprometendo a recarga do aquífero e o abastecimento de milhões de pessoas."
    },
    {
      text: "A Vellozia squamata (canela-de-ema) apresenta uma adaptação notável ao fogo. Qual é essa adaptação?",
      options: [
        { text: "Suas folhas secretam substâncias que retardam a combustão", correct: false },
        { text: "Após a carbonização do tronco, suas flores rebrotam rapidamente no pós-queimada", correct: true },
        { text: "Entra em dormência completa antes de cada incêndio, retomando o crescimento após as chuvas", correct: false },
        { text: "Produz casca grossa que impede a carbonização mesmo em incêndios intensos", correct: false }
      ],
      explanation: "A canela-de-ema é notável por sua resiliência ao fogo: embora o tronco possa ficar completamente carbonizado, a planta rebrota rapidamente, exibindo flores em tons de azul, roxo ou lilás logo após a queimada — uma adaptação evolutiva ao regime natural de incêndios do Cerrado."
    },
    {
      text: "O tatu-canastra (Priodontes maximus) é classificado como ameaçado de extinção. Qual é a principal ameaça a essa espécie no Cerrado?",
      options: [
        { text: "Predação excessiva por onças-pintadas cuja população aumentou recentemente", correct: false },
        { text: "Expansão agropecuária que destrói e fragmenta seu habitat", correct: true },
        { text: "Parasitismo por nematódeos introduzidos pelo gado bovino", correct: false },
        { text: "Competição com o tatu-peba por cupinzeiros e formigas", correct: false }
      ],
      explanation: "O tatu-canastra, o maior tatu do mundo, é ameaçado principalmente pela expansão agropecuária, que destrói e fragmenta seu habitat. A espécie também sofre com caça ilegal e atropelamentos. Sua reprodução lenta — geralmente um filhote por vez — torna a recuperação populacional muito difícil."
    },
    {
      text: "Qual iniciativa de conservação foi criada com apoio do Banco Mundial e do Fundo Global para o Meio Ambiente para financiar projetos no Cerrado entre 2010 e 2014?",
      options: [
        { text: "PPCerrado — Plano de Prevenção e Controle do Desmatamento no Cerrado", correct: false },
        { text: "Iniciativa Cerrado Sustentável", correct: true },
        { text: "Cerrado Resiliente", correct: false },
        { text: "Programa Cerrado Vivo", correct: false }
      ],
      explanation: "A Iniciativa Cerrado Sustentável, coordenada pelo Ministério do Meio Ambiente com apoio do Banco Mundial e do GEF, investiu em projetos de conservação e monitoramento ambiental entre 2010 e 2014. O PPCerrado é uma iniciativa distinta, voltada ao controle do desmatamento."
    },
    {
      text: "Qual afirmativa é biologicamente correta sobre o status de 'hotspot' de biodiversidade do Cerrado?",
      options: [
        { text: "É hotspot porque tem a maior área contínua de vegetação preservada das Américas", correct: false },
        { text: "É hotspot por apresentar altíssima riqueza de espécies endêmicas sob severa ameaça de extinção", correct: true },
        { text: "É hotspot porque concentra o maior número de espécies de anfíbios do mundo", correct: false },
        { text: "É hotspot por ser área de refúgio de espécies vindas de outros biomas em extinção", correct: false }
      ],
      explanation: "Um hotspot é definido por dois critérios: alta riqueza de espécies endêmicas e perda severa de habitat (ao menos 70% da cobertura original). O Cerrado se qualifica em ambos — abriga cerca de 5% das espécies do mundo e já perdeu mais da metade de sua vegetação nativa."
    }
  ]
};

const LEVEL_LABELS = { facil: 'Fácil', medio: 'Médio', dificil: 'Difícil' };
const KEYS = ['a', 'b', 'c', 'd'];

let currentLevel = null, currentQuestions = [], currentIndex = 0, score = 0, answered = false;

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
  document.querySelectorAll('.level-btn').forEach(b => b.classList.remove('selected'));
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
  document.getElementById('result-screen').classList.remove('active');
  document.getElementById('quiz-level-name').textContent = 'Cerrado — ' + LEVEL_LABELS[currentLevel];
  buildDots();
  renderQuestion();
}

function buildDots() {
  const container = document.getElementById('prog-dots');
  container.innerHTML = '';
  currentQuestions.forEach((_, i) => {
    const d = document.createElement('div');
    d.className = 'prog-dot';
    d.id = 'dot-' + i;
    container.appendChild(d);
  });
}

function updateDots() {
  currentQuestions.forEach((_, i) => {
    const d = document.getElementById('dot-' + i);
    if (!d) return;
    d.className = 'prog-dot' + (i < currentIndex ? ' done' : i === currentIndex ? ' current' : '');
  });
}

function renderQuestion() {
  answered = false;
  const q = currentQuestions[currentIndex];
  updateDots();

  document.getElementById('q-index').textContent = 'Questão ' + (currentIndex + 1) + ' de ' + currentQuestions.length;
  document.getElementById('q-text').textContent = q.text;
  document.getElementById('score-val').textContent = score;

  const photo = PHOTOS[currentIndex % PHOTOS.length];
  const img = document.getElementById('quiz-photo');
  img.style.opacity = '0';
  img.src = photo;
  img.onload = () => { img.style.opacity = '1'; };

  const shuffled = shuffle(q.options.map(o => ({ ...o })));
  const list = document.getElementById('options-list');
  list.innerHTML = '';
  shuffled.forEach((opt, i) => {
    const li = document.createElement('li');
    const btn = document.createElement('button');
    btn.className = 'opt-btn';
    btn.dataset.correct = opt.correct ? '1' : '0';
    btn.innerHTML = '<span class="opt-key">' + KEYS[i] + '</span><span>' + opt.text + '</span>';
    btn.onclick = () => selectAnswer(btn);
    li.appendChild(btn);
    list.appendChild(li);
  });

  const expl = document.getElementById('explanation');
  expl.classList.remove('visible');
  document.getElementById('explanation-body').textContent = '';
  document.getElementById('btn-next').style.display = 'none';
}

function selectAnswer(btn) {
  if (answered) return;
  answered = true;

  const all = document.querySelectorAll('.opt-btn');
  all.forEach(b => { b.disabled = true; });

  if (btn.dataset.correct === '1') {
    btn.classList.add('correct');
    score++;
  } else {
    btn.classList.add('wrong');
    all.forEach(b => { if (b.dataset.correct === '1') b.classList.add('reveal'); });
  }

  document.getElementById('score-val').textContent = score;

  const q = currentQuestions[currentIndex];
  document.getElementById('explanation-body').textContent = q.explanation;
  document.getElementById('explanation').classList.add('visible');

  const nextBtn = document.getElementById('btn-next');
  const isLast = currentIndex === currentQuestions.length - 1;
  nextBtn.textContent = isLast ? 'Ver resultado' : 'Continuar';
  nextBtn.style.display = 'inline-block';
}

function nextQuestion() {
  currentIndex++;
  if (currentIndex >= currentQuestions.length) {
    showResult();
  } else {
    renderQuestion();
  }
}

function showResult() {
  document.getElementById('quiz-screen').style.display = 'none';
  const rs = document.getElementById('result-screen');
  rs.classList.add('active');

  const total = currentQuestions.length;
  const pct = Math.round((score / total) * 100);

  document.getElementById('res-score').textContent = score;
  document.getElementById('res-denom').textContent = '/' + total;
  document.getElementById('res-pct').textContent = pct + '% de aproveitamento';

  let title, msg, caption;
  if (pct === 100) {
    title = 'Domínio completo.';
    msg = 'Você acertou todas as questões e demonstra conhecimento profundo sobre o Bioma Cerrado. Resultado exemplar.';
    caption = '"O Cerrado guarda segredos que levam décadas para aprender."';
  } else if (pct >= 80) {
    title = 'Excelente desempenho.';
    msg = 'Você tem sólido conhecimento sobre o Cerrado. Revise os pontos que escaparam e tente a pontuação perfeita.';
    caption = '"A savana mais biodiversa do planeta merece ser conhecida."';
  } else if (pct >= 60) {
    title = 'Bom resultado.';
    msg = 'Você domina os aspectos principais do bioma. Com mais estudo, chegará ao topo — o Cerrado tem muito a ensinar.';
    caption = '"Conhecer é o primeiro passo para proteger."';
  } else if (pct >= 40) {
    title = 'Conhecimento básico.';
    msg = 'Você reconhece o essencial, mas o Cerrado é um universo rico e complexo. Revise o conteúdo e tente novamente.';
    caption = '"Cada árvore tortuosa carrega a história de milhões de anos."';
  } else {
    title = 'Ainda há muito a descobrir.';
    msg = 'O Cerrado é um dos biomas mais fascinantes e pouco compreendidos do mundo. Estude e volte — vale a pena.';
    caption = '"A maior savana da América do Sul espera ser desvendada."';
  }

  document.getElementById('res-title').textContent = title;
  document.getElementById('res-msg').textContent = msg;
  document.getElementById('result-caption').textContent = caption;
}

function restartSameLevel() {
  document.getElementById('result-screen').classList.remove('active');
  startQuiz();
}

function goToStart() {
  document.getElementById('result-screen').classList.remove('active');
  document.getElementById('cover').style.display = 'grid';
  document.querySelectorAll('.level-btn').forEach(b => b.classList.remove('selected'));
  document.getElementById('start-btn').disabled = true;
  currentLevel = null;
}
