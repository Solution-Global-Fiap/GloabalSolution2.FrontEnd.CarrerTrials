export const challengesData = [
  {
    id: 1,
    title: "Fundamentos de HTML",
    description: "Construa uma página simples utilizando HTML semântico e boas práticas.",
    type: "Código",
    difficulty: "Fácil",
    xp: 100,
    level: 1
  },
  {
    id: 2,
    title: "Quiz de HTML",
    description: "Teste seus conhecimentos sobre tags, atributos e estrutura semântica.",
    type: "Quiz",
    difficulty: "Fácil",
    xp: 80,
    level: 1,
    questions: [
      {
        id: 1,
        question: "Qual tag representa o conteúdo principal da página?",
        choices: ["<section>", "<main>", "<body>", "<header>"],
        answer: "<main>"
      },
      {
        id: 2,
        question: "Qual atributo define o texto alternativo de uma imagem?",
        choices: ["title", "src", "alt", "description"],
        answer: "alt"
      },
      {
        id: 3,
        question: "Qual destas tags é estritamente semântica?",
        choices: ["<b>", "<i>", "<div>", "<article>"],
        answer: "<article>"
      }
    ]
  },
  {
    id: 3,
    title: "Introdução ao CSS",
    description: "Aplique estilos básicos utilizando classes, cores, espaçamentos e tipografia.",
    type: "Código",
    difficulty: "Fácil",
    xp: 120,
    level: 1
  },
  {
    id: 4,
    title: "Quiz de CSS",
    description: "Teste seu conhecimento sobre seletores, display e propriedades essenciais.",
    type: "Quiz",
    difficulty: "Fácil",
    xp: 90,
    level: 1,
    questions: [
      {
        id: 1,
        question: "Qual propriedade altera a cor do texto?",
        choices: ["font-color", "text-style", "color", "foreground"],
        answer: "color"
      },
      {
        id: 2,
        question: "Qual valor de display deixa os elementos lado a lado?",
        choices: ["block", "inline", "flex", "grid"],
        answer: "inline"
      },
      {
        id: 3,
        question: "Qual seletor seleciona um elemento pelo ID?",
        choices: ["#", ".", "id()", "select-id"],
        answer: "#"
      }
    ]
  },
  {
    id: 5,
    title: "Desafio básico de JavaScript",
    description: "Resolva um problema simples manipulando variáveis e funções.",
    type: "Código",
    difficulty: "Média",
    xp: 200,
    level: 1
  },

  {
    id: 6,
    title: "Projeto: Página Responsiva",
    description: "Crie uma página mobile-first utilizando Flexbox e media queries.",
    type: "Projeto",
    difficulty: "Média",
    xp: 350,
    level: 2
  },
  {
    id: 7,
    title: "DOM Challenge",
    description: "Manipule elementos da página utilizando JavaScript e eventos.",
    type: "Código",
    difficulty: "Média",
    xp: 300,
    level: 2
  },
  {
    id: 8,
    title: "Quiz de JavaScript",
    description: "Teste seus conhecimentos sobre arrays, objetos e lógica.",
    type: "Quiz",
    difficulty: "Média",
    xp: 150,
    level: 2,
    questions: [
      {
        id: 1,
        question: "Como se declara uma constante em JavaScript?",
        choices: ["constant x = 10", "let x = 10", "const x = 10", "fix x = 10"],
        answer: "const x = 10"
      },
      {
        id: 2,
        question: "Qual método adiciona um item ao final de um array?",
        choices: ["push()", "append()", "add()", "insert()"],
        answer: "push()"
      },
      {
        id: 3,
        question: "Qual é o tipo de dado de `true`?",
        choices: ["string", "number", "boolean", "undefined"],
        answer: "boolean"
      }
    ]
  },
  {
    id: 9,
    title: "Mini Projeto: To-Do List",
    description: "Crie uma lista de tarefas com adição, remoção e marcação de tarefas.",
    type: "Projeto",
    difficulty: "Média",
    xp: 400,
    level: 2
  },

  {
    id: 10,
    title: "Fundamentos de React",
    description: "Crie componentes reutilizáveis utilizando JSX e props.",
    type: "Código",
    difficulty: "Difícil",
    xp: 450,
    level: 3
  },
  {
    id: 11,
    title: "Quiz de React",
    description: "Avalie seus conhecimentos sobre estado, ciclos de vida e hooks básicos.",
    type: "Quiz",
    difficulty: "Média",
    xp: 200,
    level: 3,
    questions: [
      {
        id: 1,
        question: "Qual hook é utilizado para gerenciar estado?",
        choices: ["useEffect", "useState", "useReducer", "useMemo"],
        answer: "useState"
      },
      {
        id: 2,
        question: "Qual sintaxe representa um componente React?",
        choices: ["function MyComponent()", "component MyComponent()", "react Component()", "new Component()"],
        answer: "function MyComponent()"
      },
      {
        id: 3,
        question: "Qual hook executa algo quando o componente monta?",
        choices: ["useMemo", "useCallback", "useState", "useEffect"],
        answer: "useEffect"
      }
    ]
  },
  {
    id: 12,
    title: "Projeto: Aplicação React Básica",
    description: "Construa um pequeno projeto utilizando componentes e useState.",
    type: "Projeto",
    difficulty: "Difícil",
    xp: 550,
    level: 3
  },
  {
    id: 13,
    title: "React Hooks Challenge",
    description: "Use useState e useEffect para implementar funcionalidades dinâmicas.",
    type: "Código",
    difficulty: "Difícil",
    xp: 500,
    level: 3
  },
  {
    id: 14,
    title: "Introdução ao Node.js",
    description: "Crie um servidor básico utilizando Node e HTTP nativo.",
    type: "Código",
    difficulty: "Difícil",
    xp: 600,
    level: 4
  },
  {
    id: 15,
    title: "Quiz de Backend",
    description: "Teste seus conhecimentos sobre APIs, HTTP, rotas e middlewares.",
    type: "Quiz",
    difficulty: "Difícil",
    xp: 250,
    level: 4,
    questions: [
      {
        id: 1,
        question: "Qual método HTTP é utilizado para atualizar um recurso?",
        choices: ["GET", "POST", "PUT", "DELETE"],
        answer: "PUT"
      },
      {
        id: 2,
        question: "O que significa o status HTTP 404?",
        choices: ["Servidor indisponível", "Recurso não encontrado", "Erro do cliente", "Sem conteúdo"],
        answer: "Recurso não encontrado"
      },
      {
        id: 3,
        question: "O que é um middleware no Express?",
        choices: [
          "Uma função executada entre requisições",
          "Um banco de dados",
          "Uma biblioteca externa",
          "Um servidor interno"
        ],
        answer: "Uma função executada entre requisições"
      }
    ]
  },
  {
    id: 16,
    title: "Projeto: API com Express",
    description: "Crie uma API REST com rotas, validações e respostas JSON.",
    type: "Projeto",
    difficulty: "Difícil",
    xp: 650,
    level: 4
  },
  {
    id: 17,
    title: "Desafio Avançado: Autenticação JWT",
    description: "Implemente login, tokens e rotas protegidas.",
    type: "Código",
    difficulty: "Difícil",
    xp: 700,
    level: 4
  }
];

export default challengesData;
