const perguntas = [
    {
      pergunta: "O que é JavaScript?",
      respostas: [
        "Uma linguagem de programação para estilizar páginas web",
        "Um tipo de café altamente energético",
        "Uma linguagem de programação para tornar páginas web interativas",
      ],
      correta: 2
    },
    {
      pergunta: "Qual é a função do operador '==' em JavaScript?",
      respostas: [
        "Comparação estrita de valores e tipos",
        "Atribuição de valores",
        "Comparação de valores, ignorando tipos",
      ],
      correta: 3
    },
    {
      pergunta: "Como se declara uma variável em JavaScript?",
      respostas: [
        "let myVar = 42",
        "variable myVar = 42",
        "var myVar = 42",
      ],
      correta: 1
    },
    {
      pergunta: "O que é o DOM em JavaScript?",
      respostas: [
        "Documento Objeto Móvel",
        "Modelo de Objeto de Documento",
        "Documento Objeto de Manipulação",
      ],
      correta: 2
    },
    {
      pergunta: "Qual é a finalidade do comando 'console.log()' em JavaScript?",
      respostas: [
        "Exibir mensagens de erro no console",
        "Registrar informações no console para depuração",
        "Definir variáveis no console",
      ],
      correta: 2
    },
    {
      pergunta: "O que é um callback em JavaScript?",
      respostas: [
        "Uma função que é executada automaticamente",
        "Uma função passada como argumento para outra função e executada posteriormente",
        "Um tipo de loop em JavaScript",
      ],
      correta: 2
    },
    {
      pergunta: "Como se faz um loop 'for' em JavaScript?",
      respostas: [
        "for (i = 0; i < 10; i++)",
        "loop (i = 0; i < 10; i++)",
        "while (i = 0; i < 10; i++)",
      ],
      correta: 1
    },
    {
      pergunta: "O que é o AJAX em JavaScript?",
      respostas: [
        "Um novo framework para desenvolvimento web",
        "Uma técnica para atualização síncrona de páginas web",
        "Uma técnica para comunicação assíncrona com o servidor",
      ],
      correta: 3
    },
    {
      pergunta: "Qual é a diferença entre 'let' e 'var' na declaração de variáveis?",
      respostas: [
        "'let' é para variáveis locais, enquanto 'var' é para variáveis globais",
        "'let' é para variáveis globais, enquanto 'var' é para variáveis locais",
        "Não há diferença, ambos são usados da mesma forma",
      ],
      correta: 1
    },
    {
      pergunta: "O que é uma closure em JavaScript?",
      respostas: [
        "Um tipo de estrutura de controle de fluxo",
        "Uma função que não tem acesso a variáveis fora de seu escopo",
        "Um tipo de erro comum em programação",
      ],
      correta: 2
    },
  ];
// faz parte da Dom
const quiz = document.querySelector('#quiz')  // como pegar elementos
const template = document.querySelector('template')

const corretas = new Set()
const totalDePerguntas = perguntas.length
const mostrarTotal = document.querySelectorAll('#acertos span')
mostrarTotal.textContent = corretas.size + ' de ' + totalDePerguntas

for(const item of perguntas) {
  const quizItem = template.content.cloneNode(true) // fazer um clone
  quizItem.querySelector('h3').textContent = item.pergunta

  for(let resposta of item.respostas) {
    const dt = quizItem.querySelector('dl dt').cloneNode(true) // cloneNode - clonar
    dt.querySelector('span').textContent = resposta
    dt.querySelector('input').setAttribute('name', 'pergunta-' + perguntas.indexOf(item))
    dt.querySelector('input').value = item.respostas.indexOf(resposta)
    dt.querySelector('input').onchange = (event) => {  
      const estaCorreta = event.target.value == item.correta
//manipulador de eventos
    corretas.delete(item)  
   if(estaCorreta) {
    corretas.add(item)
    
   }

   mostrarTotal.textContent = corretas.size + ' de ' + totalDePerguntas


    }


    quizItem.querySelector('dl').appendChild(dt)// adicionar um filho
  }

  quizItem.querySelector('dl dt').remove() // deletar um elemento

  // coloca a pergunta na tela
  quiz.appendChild(quizItem)
}