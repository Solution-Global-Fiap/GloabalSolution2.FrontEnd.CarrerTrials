const getPosts = [
    {
      id: "a1f7c9e8-49d3-4ab7-94df-21bb10c1d100",
      authorId: 12,
      content:
        "Acabei de finalizar meu primeiro projeto full-stack! 🎉 Aprendi MUITO durante o processo.",
      likes: 9,
      comments: [
        {
          id: "c01d88d0-847e-4c07-8eb8-905b2fc7e900",
          authorId: 7,
          content: "Parabéns! Qual stack você usou?",
          timestamp: "2025-11-01T14:20:33.000Z",
        },
      ],
      timestamp: "2025-11-01T14:10:22.000Z",
      tags: ["#fullstack", "#carreira", "#progresso"],
    },

    {
      id: "b23fd2e7-aa55-46f3-9bc8-0fd2da1e6b11",
      authorId: 44,
      content:
        "Dica do dia: escreva código simples antes de escrever código otimizado.",
      likes: 20,
      comments: [
        {
          id: "6c52b898-fe94-4fa9-b81b-ad182b762100",
          authorId: 18,
          content: "Isso salvou meu projeto hoje! Valeu.",
          timestamp: "2025-11-02T09:02:10.000Z",
        },
      ],
      timestamp: "2025-11-02T09:00:00.000Z",
      tags: ["#boaspraticas", "#cleanCode"],
    },

    {
      id: "cd9912ef-d541-4b45-b55f-1d1346acb300",
      authorId: 3,
      content:
        "Alguém recomenda materiais para aprender testes unitários em Java?",
      likes: 12,
      comments: [
        {
          id: "af32d1a5-2280-4c51-9fb3-ab0084b75640",
          authorId: 25,
          content: "Junit + Mockito é o combo perfeito. Comece por eles!",
          timestamp: "2025-11-03T18:32:44.000Z",
        },
      ],
      timestamp: "2025-11-03T18:20:10.000Z",
      tags: ["#java", "#tests", "#ajuda"],
    },

    {
      id: "de713af4-4fc9-48b5-9bdd-7ccc33df5600",
      authorId: 59,
      content:
        "Desafio de hoje: criar uma API REST em menos de 1 hora. Tempo total: 58 minutos 😎",
      likes: 7,
      comments: [
        {
          id: "60f24b17-8f05-4ffa-a0b7-6b502d61a550",
          authorId: 11,
          content: "Insano! Usou qual framework?",
          timestamp: "2025-11-04T10:15:00.000Z",
        },
      ],
      timestamp: "2025-11-04T10:00:00.000Z",
      tags: ["#desafio", "#backend", "#dev"],
    },

    {
      id: "e91f49d3-11c3-4f71-b60a-878d92b14020",
      authorId: 28,
      content:
        "Começando hoje minha jornada para virar desenvolvedor front-end! 🚀",
      likes: 1,
      comments: [
        {
          id: "f73dc326-5c45-4b78-aa63-7f2ff6522e20",
          authorId: 2,
          content: "Boa! CSS vai te dar trabalho mas vale a pena 😂",
          timestamp: "2025-11-05T16:55:00.000Z",
        },
      ],
      timestamp: "2025-11-05T16:40:00.000Z",
      tags: ["#frontend", "#carreira", "#motivação"],
    },
    {
      id: "fa11e2c5-3553-4b49-a233-83b9206e8301",
      authorId: 6,
      content:
        "Finalmente entendi useEffect! Agora sim meu React não parece mágica negra 😂",
      likes: 20,
      comments: [
        {
          id: "240c3de3-295f-4a9d-9087-2cd7fd1f8701",
          authorId: 14,
          content: "Mano, esse hook é um divisor de águas!",
          timestamp: "2025-11-10T12:10:30.000Z",
        },
        {
          id: "d682fbaf-6e52-4bc3-bf7e-e9110f1dbb01",
          authorId: 33,
          content: "Agora aprende memoization pra completar o combo.",
          timestamp: "2025-11-10T12:12:02.000Z",
        },
      ],
      timestamp: "2025-11-10T12:00:00.000Z",
      tags: ["#react", "#frontend", "#hooks"],
    },

    {
      id: "be192ba8-c8ea-4b64-bd8d-fc090272dd02",
      authorId: 51,
      content: "Hoje resolvi meu primeiro bug crítico em produção 😭🔥",
      likes: 12,
      comments: [
        {
          id: "f9bdde50-f042-491b-93de-7d0cd734c902",
          authorId: 5,
          content: "Parabéns! O frio na barriga é real kkkkk",
          timestamp: "2025-11-11T08:44:00.000Z",
        },
        {
          id: "7f44cc5d-a50e-4c19-b41a-2063cb81c403",
          authorId: 20,
          content: "A melhor sensação é ver o deploy passar sem falhar 😂",
          timestamp: "2025-11-11T08:45:40.000Z",
        },
        {
          id: "38027ec7-4ab1-4a76-b8d0-2ee2db2ffc04",
          authorId: 39,
          content: "Bem-vindo ao jogo!",
          timestamp: "2025-11-11T08:48:10.000Z",
        },
      ],
      timestamp: "2025-11-11T08:40:00.000Z",
      tags: ["#backend", "#devlife", "#bugs"],
    },

    {
      id: "18daec04-fe69-4eec-bdac-62d084adf205",
      authorId: 9,
      content:
        "Comecei a estudar DSA (estrutura de dados e algoritmos). Minha cabeça dói mas tô gostando 🤓",
      likes: 4,
      comments: [
        {
          id: "0bc0655a-1e65-49b5-98d5-76192e5d1805",
          authorId: 41,
          content: "Força! Árvore binária cobra almas.",
          timestamp: "2025-11-12T17:01:00.000Z",
        },
        {
          id: "e63116ef-1fde-433d-af38-98ae3d2f3906",
          authorId: 13,
          content: "Depois que entende, tudo no mundo faz mais sentido.",
          timestamp: "2025-11-12T17:02:55.000Z",
        },
      ],
      timestamp: "2025-11-12T17:00:00.000Z",
      tags: ["#DSA", "#algoritmos", "#estudos"],
    },

    {
      id: "c1c0d402-b242-4f14-af5d-16d7a7198a07",
      authorId: 27,
      content:
        "Fiz meu primeiro deploy na AWS hoje 🚀 Estou dominando o mundo aos poucos.",
      likes: 7,
      comments: [
        {
          id: "29a5204b-5d30-49a5-b7c7-d77b5a8c6507",
          authorId: 8,
          content: "AWS sempre dá medo no início kkkk",
          timestamp: "2025-11-13T10:10:20.000Z",
        },
        {
          id: "9fb3fbd1-36bb-4ac4-9b26-73a67a7f1408",
          authorId: 35,
          content: "Qual serviço você usou?",
          timestamp: "2025-11-13T10:12:40.000Z",
        },
      ],
      timestamp: "2025-11-13T10:00:00.000Z",
      tags: ["#aws", "#cloud", "#deploy"],
    },

    {
      id: "d7aaf481-870d-47f0-9f62-a1a58bc1c309",
      authorId: 58,
      content: "Alguém recomenda bons desafios para treinar lógica?",
      likes: 4,
      comments: [
        {
          id: "4a875ce9-20c1-41e8-994f-57246c8ab910",
          authorId: 3,
          content: "Codewars e LeetCode são top!",
          timestamp: "2025-11-14T09:40:00.000Z",
        },
        {
          id: "745d768e-5e9d-4aac-bacd-f1a936409211",
          authorId: 30,
          content: "Faz seus próprios desafios também, ajuda muito.",
          timestamp: "2025-11-14T09:41:30.000Z",
        },
      ],
      timestamp: "2025-11-14T09:30:00.000Z",
      tags: ["#logica", "#desafios", "#aprender"],
    },

    {
      id: "afd27b7d-ae1b-4d59-97e3-3d367fe1d310",
      authorId: 46,
      content: "Hoje aprendi Promise.all e minha cabeça explodiu 😂",
      likes: 12,
      comments: [
        {
          id: "b83eac71-1c29-4f22-9f2e-66f4eaf0d612",
          authorId: 21,
          content: "Agora aprende Promise.race, aí fica brabo 🔥",
          timestamp: "2025-11-15T14:05:00.000Z",
        },
      ],
      timestamp: "2025-11-15T14:00:00.000Z",
      tags: ["#javascript", "#promises", "#async"],
    },

    {
      id: "511b0902-36e9-4b7b-9340-f159544c6f11",
      authorId: 17,
      content:
        "Tô refazendo meu portfólio do zero. Adeus vergonha, olá oportunidades!",
      likes: 20,
      comments: [
        {
          id: "c8a20cde-e767-47e8-bf68-fffbd4016113",
          authorId: 52,
          content: "Mandou bem! Posta o link depois!",
          timestamp: "2025-11-16T20:31:00.000Z",
        },
        {
          id: "99677f23-bd73-4062-a767-eba97bd7b714",
          authorId: 10,
          content: "Refazer é sempre o melhor jeito de aprender.",
          timestamp: "2025-11-16T20:32:40.000Z",
        },
      ],
      timestamp: "2025-11-16T20:20:00.000Z",
      tags: ["#portfolio", "#carreira", "#design"],
    },

    {
      id: "e3a3eca1-c31c-4c0c-87d8-7ae106cdad12",
      authorId: 34,
      content:
        "Fiz um clone simples do Twitter pra praticar. Me surpreendi com o resultado!",
      likes: 4,
      comments: [
        {
          id: "e67a7479-b979-4da6-81f8-9b28a24a3421",
          authorId: 4,
          content: "Quero ver! Publica o repo!",
          timestamp: "2025-11-17T11:11:00.000Z",
        },
      ],
      timestamp: "2025-11-17T11:00:00.000Z",
      tags: ["#projetos", "#frontend", "#fullstack"],
    },
    {
      id: "8e5f5f47-0c89-4a9a-b0d9-0d9ed58f3e6b",
      authorId: 12,
      content: "Começando mais um dia de estudos focado em frontend!",
      likes: 0,
      comments: [
        {
          id: "3abc975a-7df5-4ccf-8f7e-b9d474ab2b75",
          authorId: 33,
          content: "Boa! Também estou nessa.",
          timestamp: "2025-11-18T12:41:22.000Z",
        },
      ],
      timestamp: "2025-11-18T11:03:10.000Z",
      tags: ["#frontend", "#dev"],
    },
    {
      id: "e46ff3d0-f77d-4e8c-8c2a-e0b4a2e51a18",
      authorId: 5,
      content: "Alguém recomenda cursos bons de arquitetura limpa?",
      likes: 12,
      comments: [],
      timestamp: "2025-01-22T09:12:44.000Z",
      tags: ["#arquitetura", "#cleanarch"],
    },
    {
      id: "98fd34b8-f8fd-41fd-8e03-e42c8872d9b3",
      authorId: 28,
      content: "Terminei meu primeiro projeto usando WebSockets!",
      likes: 0,
      comments: [
        {
          id: "92a9eba5-8d1a-4de1-b5ed-5a67d5738cd5",
          authorId: 10,
          content: "Parabéns! WebSockets são incríveis.",
          timestamp: "2025-03-02T16:11:03.000Z",
        },
        {
          id: "02f76801-2e8c-43f8-9162-b83222c31f63",
          authorId: 44,
          content: "Posta no GitHub!",
          timestamp: "2025-03-02T16:45:10.000Z",
        },
      ],
      timestamp: "2025-03-02T15:58:51.000Z",
      tags: ["#websockets", "#backend"],
    },
    {
      id: "edb3419d-3aa2-4bf0-8261-66cc6b4f97fa",
      authorId: 7,
      content: "Finalmente entendi como funciona o Docker networking!",
      likes: 7,
      comments: [],
      timestamp: "2025-01-14T18:21:40.000Z",
      tags: ["#docker", "#devops"],
    },
    {
      id: "56f4cb3d-4462-49e9-b4d0-5f733b4e66a0",
      authorId: 40,
      content: "Começando os estudos de DDD hoje.",
      likes: 20,
      comments: [
        {
          id: "5b808b5b-85ea-4564-9fb7-3ff5ae2e2b3f",
          authorId: 15,
          content: "Boa! É desafiador mas vale a pena.",
          timestamp: "2025-01-25T13:48:03.000Z",
        },
      ],
      timestamp: "2025-01-25T13:12:22.000Z",
      tags: ["#ddd", "#arquitetura"],
    },

    {
      id: "aefc4c9b-9393-4ed9-b926-9f2bbd9f69f0",
      authorId: 3,
      content: "Alguém aí já trabalhou com PostgreSQL vector search?",
      likes: 4,
      comments: [],
      timestamp: "2025-04-01T20:11:30.000Z",
      tags: ["#postgres", "#ai"],
    },
    {
      id: "91de8d94-b4ea-4a70-a6ba-32b2597df55a",
      authorId: 50,
      content: "Como vocês organizam seus estudos semanais?",
      likes: 12,
      comments: [
        {
          id: "bb0ee13d-1a83-4fdf-8347-739a4efaf12b",
          authorId: 9,
          content: "Planejo no domingo e ajusto conforme avanço.",
          timestamp: "2025-03-12T10:32:21.000Z",
        },
      ],
      timestamp: "2025-03-12T09:44:00.000Z",
      tags: ["#estudos", "#produtividade"],
    },
    {
      id: "d9bd8f05-21ba-4f74-af43-52b154b77b03",
      authorId: 11,
      content: "Primeira vez configurando CI/CD no GitHub Actions!",
      likes: 4,
      comments: [
        {
          id: "89a77e6d-523f-4acc-8ca7-19353f625b5c",
          authorId: 42,
          content: "É viciante depois que aprende.",
          timestamp: "2025-11-02T14:33:19.000Z",
        },
        {
          id: "7e235a84-0c06-4b07-9838-caf3bcf63d9e",
          authorId: 19,
          content: "Se precisar ajuda manda DM.",
          timestamp: "2025-11-02T14:44:11.000Z",
        },
      ],
      timestamp: "2025-11-02T14:00:10.000Z",
      tags: ["#cicd", "#devops"],
    },

    {
      id: "ea34bc76-9325-4e69-b0f9-2b8f2d53bb25",
      authorId: 20,
      content:
        "Refatorei meu código e cortei 40% das linhas. Sensação incrível.",
      likes: 0,
      comments: [],
      timestamp: "2025-01-19T17:22:12.000Z",
      tags: ["#cleanCode", "#refatoração"],
    },
    {
      id: "56caa4b8-6ded-47aa-a9c4-483f85361195",
      authorId: 18,
      content: "Alguém recomenda biblioteca de charts para React?",
      likes: 12,
      comments: [
        {
          id: "0fad8df0-28d8-43a0-95cf-3d543e5df4bc",
          authorId: 25,
          content: "Recharts é simples e poderoso.",
          timestamp: "2025-03-05T12:04:55.000Z",
        },
      ],
      timestamp: "2025-03-05T11:42:34.000Z",
      tags: ["#react", "#frontend"],
    },

    {
      id: "cb6e772a-3734-465f-a0de-c86f052f0570",
      authorId: 2,
      content: "Hoje aprendi a importância de testes bem escritos.",
      likes: 20,
      comments: [],
      timestamp: "2025-11-27T08:14:52.000Z",
      tags: ["#tests", "#tdd"],
    },
    {
      id: "fb468db0-f378-41f1-bab3-6d969a1dfe39",
      authorId: 31,
      content: "Fiz meu primeiro deploy no ECS!",
      likes: 0,
      comments: [
        {
          id: "a1f3ca4c-c323-4cb9-aabd-0133e2b9c78a",
          authorId: 46,
          content: "Bem vindo ao mundo AWS 😄",
          timestamp: "2025-04-08T19:41:10.000Z",
        },
      ],
      timestamp: "2025-04-08T19:22:30.000Z",
      tags: ["#aws", "#ecs"],
    },

    {
      id: "257c741b-0b48-42c8-8657-e152a6c2b11d",
      authorId: 59,
      content: "Estou curtindo estudar Rust mais do que imaginei.",
      likes: 12,
      comments: [],
      timestamp: "2025-03-29T21:21:44.000Z",
      tags: ["#rust", "#linguagens"],
    },
    {
      id: "f0f7b3fa-71b7-45c9-8b7d-1fa1d8282082",
      authorId: 16,
      content: "Finalmente entendi porque TypeScript é tão amado.",
      likes: 9,
      comments: [
        {
          id: "bd6e56d0-b2db-4da5-98be-ea2dcc4de49c",
          authorId: 39,
          content: "Bem vindo ao time!",
          timestamp: "2025-01-30T10:17:03.000Z",
        },
      ],
      timestamp: "2025-01-30T10:10:45.000Z",
      tags: ["#typescript"],
    },

    {
      id: "aca4d9e5-a53d-4094-9b2a-737cbd26a918",
      authorId: 14,
      content: "Hoje fiz minha primeira contribuição open source!",
      likes: 20,
      comments: [],
      timestamp: "2025-03-14T15:32:22.000Z",
      tags: ["#opensource"],
    },

    {
      id: "2f412f65-9a8b-4c75-9d78-eefbe9c0b7b1",
      authorId: 24,
      content: "Testando microservices pela primeira vez.",
      likes: 7,
      comments: [
        {
          id: "5f88c66a-b33c-4800-a1a3-89b16ac2f574",
          authorId: 8,
          content: "Microservices são um caminho sem volta 😂",
          timestamp: "2025-03-21T13:31:03.000Z",
        },
      ],
      timestamp: "2025-03-21T12:58:41.000Z",
      tags: ["#microservices"],
    },

    {
      id: "a89004fb-19f8-4ad8-b6af-ab166a3a369a",
      authorId: 53,
      content: "Estudando acessibilidade hoje!",
      likes: 0,
      comments: [],
      timestamp: "2025-04-10T17:22:44.000Z",
      tags: ["#a11y"],
    },

    {
      id: "d9ebf7ab-7824-4f27-a917-dbea59de7bd2",
      authorId: 27,
      content: "Começando na área de dados 🚀",
      likes: 1,
      comments: [],
      timestamp: "2025-01-15T10:01:00.000Z",
      tags: ["#data"],
    },

    {
      id: "b20b9c13-06d4-4cbb-9a59-ab0d8e6636e8",
      authorId: 21,
      content: "Primeira API REST completa!",
      likes: 9,
      comments: [],
      timestamp: "2025-01-12T16:18:54.000Z",
      tags: ["#api", "#backend"],
    },

    {
      id: "fc371041-1abe-40cc-ac30-71cb43bf34e7",
      authorId: 6,
      content: "Hoje entendi de verdade o que é idempotência.",
      likes: 0,
      comments: [
        {
          id: "2d1f09e8-1712-4cf1-a04f-f8cfb92a7240",
          authorId: 54,
          content: "Salvou meu código várias vezes já 😂",
          timestamp: "2025-11-19T14:08:11.000Z",
        },
      ],
      timestamp: "2025-11-19T13:59:13.000Z",
      tags: ["#backend"],
    },

    {
      id: "88dafd1c-0a61-4bb0-88e0-e77de04faf17",
      authorId: 48,
      content: "Hoje o debug decidiu não colaborar 😭",
      likes: 0,
      comments: [],
      timestamp: "2025-03-08T09:55:08.000Z",
      tags: ["#programming"],
    },

    {
      id: "0d5d3969-9878-4219-ba48-04df23e2c3f0",
      authorId: 52,
      content: "Aprendendo GraphQL!",
      likes: 1,
      comments: [],
      timestamp: "2025-03-23T18:02:14.000Z",
      tags: ["#graphql"],
    },

    {
      id: "495342d7-0df5-4a74-8654-521e1f766ecf",
      authorId: 37,
      content: "Como vocês lidam com burnout?",
      likes: 9,
      comments: [
        {
          id: "abdf071c-72fb-4624-afbb-4d61e07d0d73",
          authorId: 1,
          content: "Pausas estratégicas e rotina.",
          timestamp: "2025-04-11T11:22:41.000Z",
        },
      ],
      timestamp: "2025-04-11T10:49:23.000Z",
      tags: ["#saúde", "#produtividade"],
    },

    {
      id: "c7e0b6eb-ed98-4a72-9bda-c74b08f76570",
      authorId: 26,
      content: "Comecei meus estudos sobre filas 🎯",
      likes: 0,
      comments: [],
      timestamp: "2025-11-03T20:18:33.000Z",
      tags: ["#queues"],
    },

    {
      id: "e4ea06cd-cc0e-4959-a078-076e6c830771",
      authorId: 34,
      content: "Hoje consegui resolver um bug de 3 dias!",
      likes: 1,
      comments: [
        {
          id: "a89c66b1-84e0-4393-b7a6-2d891e3aadbb",
          authorId: 32,
          content: "Sensação indescritível 😂",
          timestamp: "2025-01-28T15:32:18.000Z",
        },
      ],
      timestamp: "2025-01-28T14:41:50.000Z",
      tags: ["#debug"],
    },

    {
      id: "c8255312-5ab1-4fd6-a64a-4d8acfafd60d",
      authorId: 23,
      content: "Usando Tailwind pela primeira vez!",
      likes: 20,
      comments: [],
      timestamp: "2025-11-16T12:11:22.000Z",
      tags: ["#tailwind", "#css"],
    },

    {
      id: "e34cfb76-8fc4-4e6a-b0c0-e3127e3d5688",
      authorId: 17,
      content: "Começando a estudar IA aplicada a recomendações.",
      likes: 0,
      comments: [],
      timestamp: "2025-04-07T09:19:42.000Z",
      tags: ["#ia", "#recommendations"],
    },

    {
      id: "fe44de15-71ad-48f1-86c9-3df93b2a49d5",
      authorId: 45,
      content: "Dois dias tentando fazer deploy no Vercel 😂",
      likes: 9,
      comments: [
        {
          id: "c3be9579-9c5c-43d3-9e8d-34dd36f03d6f",
          authorId: 41,
          content: "Já apanhei desse também!",
          timestamp: "2025-03-19T13:31:21.000Z",
        },
      ],
      timestamp: "2025-03-19T12:44:17.000Z",
      tags: ["#vercel"],
    },

    {
      id: "39d4b829-0500-4994-8eca-6d6e3f6ad0b3",
      authorId: 36,
      content: "Finalizei meu portfólio hoje!",
      likes: 0,
      comments: [],
      timestamp: "2025-11-14T17:31:32.000Z",
      tags: ["#portfolio"],
    },

    {
      id: "e5f4745c-31f0-4a98-bc17-75e84878d139",
      authorId: 30,
      content: "Hoje escrevi minha primeira API GraphQL real!",
      likes: 1,
      comments: [],
      timestamp: "2025-03-11T11:14:09.000Z",
      tags: ["#graphql", "#backend"],
    },
];

export default getPosts;