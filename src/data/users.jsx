const getUsers = [
  {
    "id": 1,
    "nome": "Wesley Oliveira",
    "email": "wesley.oliveira@example.com",
    "linkedin": "https://www.linkedin.com/in/oliveiralimadiogo",
    "github": "https://github.com/oliveiralimadiogo",
    "senha": "SenhaWesley123",
    "foto": "https://randomuser.me/api/portraits/men/24.jpg",
    "cargo": "Data Scientist",
    "resumo": "Profissional focado em Dados.",
    "localizacao": "Fortaleza/CE",
    "area": "Dados",
    "habilidadesTecnicas": [
      "Pandas",
      "Machine Learning",
      "Python"
    ],
    "softSkills": [
      "Organização",
      "Comunicação"
    ],
    "experiencias": [
      {
        "empresa": "TechCorp",
        "cargo": "Data Scientist",
        "inicio": "2019-01",
        "fim": "2024-01",
        "descricao": "Atuação na área de Dados."
      }
    ],
    "formacao": [
      {
        "curso": "Tecnologia da Informação",
        "instituicao": "Universidade XYZ",
        "ano": 2018
      }
    ],
    "projetos": [
      {
        "titulo": "Projeto Data",
        "link": "",
        "descricao": "Projeto relevante na área de Dados."
      }
    ],
    "certificacoes": [
      "Certificação XPTO"
    ],
    "idiomas": [
      {
        "idioma": "Inglês",
        "nivel": "Intermediário"
      }
    ],
    "areaInteresses": [
      "Inovação",
      "Dados"
    ]
  },
  {
    "id": 2,
    "nome": "Queila Gomes",
    "email": "queila.gomes@example.com",
    "linkedin": "https://www.linkedin.com/in/oliveiralimadiogo",
    "github": "https://github.com/oliveiralimadiogo",
    "senha": "SenhaQueila123",
    "foto": "https://randomuser.me/api/portraits/men/10.jpg",
    "cargo": "UI/UX Designer",
    "resumo": "Profissional focado em Design.",
    "localizacao": "São Paulo/SP",
    "area": "Design",
    "habilidadesTecnicas": [
      "Figma",
      "Prototipagem",
      "UI"
    ],
    "softSkills": [
      "Trabalho em equipe",
      "Comunicação"
    ],
    "experiencias": [
      {
        "empresa": "TechCorp",
        "cargo": "UI/UX Designer",
        "inicio": "2019-01",
        "fim": "2024-01",
        "descricao": "Atuação na área de Design."
      }
    ],
    "formacao": [
      {
        "curso": "Tecnologia da Informação",
        "instituicao": "Universidade XYZ",
        "ano": 2018
      }
    ],
    "projetos": [
      {
        "titulo": "Projeto UI/UX",
        "link": "",
        "descricao": "Projeto relevante na área de Design."
      }
    ],
    "certificacoes": [
      "Certificação XPTO"
    ],
    "idiomas": [
      {
        "idioma": "Inglês",
        "nivel": "Intermediário"
      }
    ],
    "areaInteresses": [
      "Inovação",
      "Design"
    ]
  },
  {
    "id": 3,
    "nome": "Zoe Barros",
    "email": "zoe.barros@example.com",
    "linkedin": "https://www.linkedin.com/in/oliveiralimadiogo",
    "github": "https://github.com/oliveiralimadiogo",
    "senha": "SenhaZoe123",
    "foto": "https://randomuser.me/api/portraits/men/41.jpg",
    "cargo": "UI/UX Designer",
    "resumo": "Profissional focado em Design.",
    "localizacao": "Fortaleza/CE",
    "area": "Design",
    "habilidadesTecnicas": [
      "UI",
      "Prototipagem",
      "Figma"
    ],
    "softSkills": [
      "Criatividade",
      "Pensamento crítico"
    ],
    "experiencias": [
      {
        "empresa": "TechCorp",
        "cargo": "UI/UX Designer",
        "inicio": "2019-01",
        "fim": "2024-01",
        "descricao": "Atuação na área de Design."
      }
    ],
    "formacao": [
      {
        "curso": "Tecnologia da Informação",
        "instituicao": "Universidade XYZ",
        "ano": 2018
      }
    ],
    "projetos": [
      {
        "titulo": "Projeto UI/UX",
        "link": "",
        "descricao": "Projeto relevante na área de Design."
      }
    ],
    "certificacoes": [
      "Certificação XPTO"
    ],
    "idiomas": [
      {
        "idioma": "Inglês",
        "nivel": "Intermediário"
      }
    ],
    "areaInteresses": [
      "Inovação",
      "Design"
    ]
  },
  {
    "id": 4,
    "nome": "João Oliveira",
    "email": "joão.oliveira@example.com",
    "linkedin": "https://www.linkedin.com/in/oliveiralimadiogo",
    "github": "https://github.com/oliveiralimadiogo",
    "senha": "SenhaJoão123",
    "foto": "https://randomuser.me/api/portraits/men/8.jpg",
    "cargo": "QA Engineer",
    "resumo": "Profissional focado em Qualidade.",
    "localizacao": "Fortaleza/CE",
    "area": "Qualidade",
    "habilidadesTecnicas": [
      "Selenium",
      "Testes automatizados"
    ],
    "softSkills": [
      "Criatividade",
      "Comunicação"
    ],
    "experiencias": [
      {
        "empresa": "TechCorp",
        "cargo": "QA Engineer",
        "inicio": "2019-01",
        "fim": "2024-01",
        "descricao": "Atuação na área de Qualidade."
      }
    ],
    "formacao": [
      {
        "curso": "Tecnologia da Informação",
        "instituicao": "Universidade XYZ",
        "ano": 2018
      }
    ],
    "projetos": [
      {
        "titulo": "Projeto QA",
        "link": "",
        "descricao": "Projeto relevante na área de Qualidade."
      }
    ],
    "certificacoes": [
      "Certificação XPTO"
    ],
    "idiomas": [
      {
        "idioma": "Inglês",
        "nivel": "Intermediário"
      }
    ],
    "areaInteresses": [
      "Inovação",
      "Qualidade"
    ]
  },
  {
    "id": 5,
    "nome": "Wesley Gomes",
    "email": "wesley.gomes@example.com",
    "linkedin": "https://www.linkedin.com/in/oliveiralimadiogo",
    "github": "https://github.com/oliveiralimadiogo",
    "senha": "SenhaWesley123",
    "foto": "https://randomuser.me/api/portraits/men/22.jpg",
    "cargo": "DevOps Engineer",
    "resumo": "Profissional focado em Infraestrutura.",
    "localizacao": "São Paulo/SP",
    "area": "Infraestrutura",
    "habilidadesTecnicas": [
      "Kubernetes",
      "Docker",
      "AWS"
    ],
    "softSkills": [
      "Pensamento crítico",
      "Organização"
    ],
    "experiencias": [
      {
        "empresa": "TechCorp",
        "cargo": "DevOps Engineer",
        "inicio": "2019-01",
        "fim": "2024-01",
        "descricao": "Atuação na área de Infraestrutura."
      }
    ],
    "formacao": [
      {
        "curso": "Tecnologia da Informação",
        "instituicao": "Universidade XYZ",
        "ano": 2018
      }
    ],
    "projetos": [
      {
        "titulo": "Projeto DevOps",
        "link": "",
        "descricao": "Projeto relevante na área de Infraestrutura."
      }
    ],
    "certificacoes": [
      "Certificação XPTO"
    ],
    "idiomas": [
      {
        "idioma": "Inglês",
        "nivel": "Intermediário"
      }
    ],
    "areaInteresses": [
      "Inovação",
      "Infraestrutura"
    ]
  },
  {
    "id": 6,
    "nome": "João Souza",
    "email": "joão.souza@example.com",
    "linkedin": "https://www.linkedin.com/in/oliveiralimadiogo",
    "github": "https://github.com/oliveiralimadiogo",
    "senha": "SenhaJoão123",
    "foto": "https://randomuser.me/api/portraits/men/35.jpg",
    "cargo": "Data Scientist",
    "resumo": "Profissional focado em Dados.",
    "localizacao": "Curitiba/PR",
    "area": "Dados",
    "habilidadesTecnicas": [
      "SQL",
      "Pandas",
      "Machine Learning"
    ],
    "softSkills": [
      "Criatividade",
      "Comunicação"
    ],
    "experiencias": [
      {
        "empresa": "TechCorp",
        "cargo": "Data Scientist",
        "inicio": "2019-01",
        "fim": "2024-01",
        "descricao": "Atuação na área de Dados."
      }
    ],
    "formacao": [
      {
        "curso": "Tecnologia da Informação",
        "instituicao": "Universidade XYZ",
        "ano": 2018
      }
    ],
    "projetos": [
      {
        "titulo": "Projeto Data",
        "link": "",
        "descricao": "Projeto relevante na área de Dados."
      }
    ],
    "certificacoes": [
      "Certificação XPTO"
    ],
    "idiomas": [
      {
        "idioma": "Inglês",
        "nivel": "Intermediário"
      }
    ],
    "areaInteresses": [
      "Inovação",
      "Dados"
    ]
  },
  {
    "id": 7,
    "nome": "Carla Oliveira",
    "email": "carla.oliveira@example.com",
    "linkedin": "https://www.linkedin.com/in/oliveiralimadiogo",
    "github": "https://github.com/oliveiralimadiogo",
    "senha": "SenhaCarla123",
    "foto": "https://randomuser.me/api/portraits/men/4.jpg",
    "cargo": "DevOps Engineer",
    "resumo": "Profissional focado em Infraestrutura.",
    "localizacao": "Recife/PE",
    "area": "Infraestrutura",
    "habilidadesTecnicas": [
      "AWS",
      "Docker",
      "Kubernetes"
    ],
    "softSkills": [
      "Trabalho em equipe",
      "Criatividade"
    ],
    "experiencias": [
      {
        "empresa": "TechCorp",
        "cargo": "DevOps Engineer",
        "inicio": "2019-01",
        "fim": "2024-01",
        "descricao": "Atuação na área de Infraestrutura."
      }
    ],
    "formacao": [
      {
        "curso": "Tecnologia da Informação",
        "instituicao": "Universidade XYZ",
        "ano": 2018
      }
    ],
    "projetos": [
      {
        "titulo": "Projeto DevOps",
        "link": "",
        "descricao": "Projeto relevante na área de Infraestrutura."
      }
    ],
    "certificacoes": [
      "Certificação XPTO"
    ],
    "idiomas": [
      {
        "idioma": "Inglês",
        "nivel": "Intermediário"
      }
    ],
    "areaInteresses": [
      "Inovação",
      "Infraestrutura"
    ]
  },
  {
    "id": 8,
    "nome": "Marina Pereira",
    "email": "marina.pereira@example.com",
    "linkedin": "https://www.linkedin.com/in/oliveiralimadiogo",
    "github": "https://github.com/oliveiralimadiogo",
    "senha": "SenhaMarina123",
    "foto": "https://randomuser.me/api/portraits/men/26.jpg",
    "cargo": "UI/UX Designer",
    "resumo": "Profissional focado em Design.",
    "localizacao": "Fortaleza/CE",
    "area": "Design",
    "habilidadesTecnicas": [
      "UI",
      "Prototipagem",
      "Figma"
    ],
    "softSkills": [
      "Trabalho em equipe",
      "Pensamento crítico"
    ],
    "experiencias": [
      {
        "empresa": "TechCorp",
        "cargo": "UI/UX Designer",
        "inicio": "2019-01",
        "fim": "2024-01",
        "descricao": "Atuação na área de Design."
      }
    ],
    "formacao": [
      {
        "curso": "Tecnologia da Informação",
        "instituicao": "Universidade XYZ",
        "ano": 2018
      }
    ],
    "projetos": [
      {
        "titulo": "Projeto UI/UX",
        "link": "",
        "descricao": "Projeto relevante na área de Design."
      }
    ],
    "certificacoes": [
      "Certificação XPTO"
    ],
    "idiomas": [
      {
        "idioma": "Inglês",
        "nivel": "Intermediário"
      }
    ],
    "areaInteresses": [
      "Inovação",
      "Design"
    ]
  },
  {
    "id": 9,
    "nome": "Isabela Souza",
    "email": "isabela.souza@example.com",
    "linkedin": "https://www.linkedin.com/in/oliveiralimadiogo",
    "github": "https://github.com/oliveiralimadiogo",
    "senha": "SenhaIsabela123",
    "foto": "https://randomuser.me/api/portraits/men/20.jpg",
    "cargo": "QA Engineer",
    "resumo": "Profissional focado em Qualidade.",
    "localizacao": "Belo Horizonte/MG",
    "area": "Qualidade",
    "habilidadesTecnicas": [
      "Testes automatizados",
      "Selenium"
    ],
    "softSkills": [
      "Organização",
      "Trabalho em equipe"
    ],
    "experiencias": [
      {
        "empresa": "TechCorp",
        "cargo": "QA Engineer",
        "inicio": "2019-01",
        "fim": "2024-01",
        "descricao": "Atuação na área de Qualidade."
      }
    ],
    "formacao": [
      {
        "curso": "Tecnologia da Informação",
        "instituicao": "Universidade XYZ",
        "ano": 2018
      }
    ],
    "projetos": [
      {
        "titulo": "Projeto QA",
        "link": "",
        "descricao": "Projeto relevante na área de Qualidade."
      }
    ],
    "certificacoes": [
      "Certificação XPTO"
    ],
    "idiomas": [
      {
        "idioma": "Inglês",
        "nivel": "Intermediário"
      }
    ],
    "areaInteresses": [
      "Inovação",
      "Qualidade"
    ]
  },
  {
    "id": 10,
    "nome": "Paulo Almeida",
    "email": "paulo.almeida@example.com",
    "linkedin": "https://www.linkedin.com/in/oliveiralimadiogo",
    "github": "https://github.com/oliveiralimadiogo",
    "senha": "SenhaPaulo123",
    "foto": "https://randomuser.me/api/portraits/men/62.jpg",
    "cargo": "Full Stack Developer",
    "resumo": "Profissional focado em Desenvolvimento.",
    "localizacao": "Belo Horizonte/MG",
    "area": "Desenvolvimento",
    "habilidadesTecnicas": [
      "JavaScript",
      "Node.js",
      "SQL"
    ],
    "softSkills": [
      "Criatividade",
      "Trabalho em equipe"
    ],
    "experiencias": [
      {
        "empresa": "TechCorp",
        "cargo": "Full Stack Developer",
        "inicio": "2019-01",
        "fim": "2024-01",
        "descricao": "Atuação na área de Desenvolvimento."
      }
    ],
    "formacao": [
      {
        "curso": "Tecnologia da Informação",
        "instituicao": "Universidade XYZ",
        "ano": 2018
      }
    ],
    "projetos": [
      {
        "titulo": "Projeto Full",
        "link": "",
        "descricao": "Projeto relevante na área de Desenvolvimento."
      }
    ],
    "certificacoes": [
      "Certificação XPTO"
    ],
    "idiomas": [
      {
        "idioma": "Inglês",
        "nivel": "Intermediário"
      }
    ],
    "areaInteresses": [
      "Inovação",
      "Desenvolvimento"
    ]
  },
  {
    "id": 11,
    "nome": "Karina Souza",
    "email": "karina.souza@example.com",
    "senha": "SenhaKarina123",
    "foto": "https://randomuser.me/api/portraits/men/64.jpg",
    "cargo": "Data Scientist",
    "resumo": "Profissional focado em Dados.",
    "localizacao": "Recife/PE",
    "area": "Dados",
    "habilidadesTecnicas": [
      "Machine Learning",
      "Python",
      "Pandas"
    ],
    "softSkills": [
      "Trabalho em equipe",
      "Organização"
    ],
    "experiencias": [
      {
        "empresa": "TechCorp",
        "cargo": "Data Scientist",
        "inicio": "2019-01",
        "fim": "2024-01",
        "descricao": "Atuação na área de Dados."
      }
    ],
    "formacao": [
      {
        "curso": "Tecnologia da Informação",
        "instituicao": "Universidade XYZ",
        "ano": 2018
      }
    ],
    "projetos": [
      {
        "titulo": "Projeto Data",
        "link": "",
        "descricao": "Projeto relevante na área de Dados."
      }
    ],
    "certificacoes": [
      "Certificação XPTO"
    ],
    "idiomas": [
      {
        "idioma": "Inglês",
        "nivel": "Intermediário"
      }
    ],
    "areaInteresses": [
      "Inovação",
      "Dados"
    ]
  },
  {
    "id": 12,
    "nome": "Isabela Lima",
    "email": "isabela.lima@example.com",
    "senha": "SenhaIsabela123",
    "foto": "https://randomuser.me/api/portraits/men/66.jpg",
    "cargo": "UI/UX Designer",
    "resumo": "Profissional focado em Design.",
    "localizacao": "Fortaleza/CE",
    "area": "Design",
    "habilidadesTecnicas": [
      "UI",
      "Figma",
      "Prototipagem"
    ],
    "softSkills": [
      "Organização",
      "Trabalho em equipe"
    ],
    "experiencias": [
      {
        "empresa": "TechCorp",
        "cargo": "UI/UX Designer",
        "inicio": "2019-01",
        "fim": "2024-01",
        "descricao": "Atuação na área de Design."
      }
    ],
    "formacao": [
      {
        "curso": "Tecnologia da Informação",
        "instituicao": "Universidade XYZ",
        "ano": 2018
      }
    ],
    "projetos": [
      {
        "titulo": "Projeto UI/UX",
        "link": "",
        "descricao": "Projeto relevante na área de Design."
      }
    ],
    "certificacoes": [
      "Certificação XPTO"
    ],
    "idiomas": [
      {
        "idioma": "Inglês",
        "nivel": "Intermediário"
      }
    ],
    "areaInteresses": [
      "Inovação",
      "Design"
    ]
  },
  {
    "id": 13,
    "nome": "Paulo Ferreira",
    "email": "paulo.ferreira@example.com",
    "senha": "SenhaPaulo123",
    "foto": "https://randomuser.me/api/portraits/men/26.jpg",
    "cargo": "DevOps Engineer",
    "resumo": "Profissional focado em Infraestrutura.",
    "localizacao": "Recife/PE",
    "area": "Infraestrutura",
    "habilidadesTecnicas": [
      "AWS",
      "Docker",
      "Kubernetes"
    ],
    "softSkills": [
      "Organização",
      "Pensamento crítico"
    ],
    "experiencias": [
      {
        "empresa": "TechCorp",
        "cargo": "DevOps Engineer",
        "inicio": "2019-01",
        "fim": "2024-01",
        "descricao": "Atuação na área de Infraestrutura."
      }
    ],
    "formacao": [
      {
        "curso": "Tecnologia da Informação",
        "instituicao": "Universidade XYZ",
        "ano": 2018
      }
    ],
    "projetos": [
      {
        "titulo": "Projeto DevOps",
        "link": "",
        "descricao": "Projeto relevante na área de Infraestrutura."
      }
    ],
    "certificacoes": [
      "Certificação XPTO"
    ],
    "idiomas": [
      {
        "idioma": "Inglês",
        "nivel": "Intermediário"
      }
    ],
    "areaInteresses": [
      "Inovação",
      "Infraestrutura"
    ]
  },
  {
    "id": 14,
    "nome": "Karina Barros",
    "email": "karina.barros@example.com",
    "senha": "SenhaKarina123",
    "foto": "https://randomuser.me/api/portraits/men/66.jpg",
    "cargo": "DevOps Engineer",
    "resumo": "Profissional focado em Infraestrutura.",
    "localizacao": "Belo Horizonte/MG",
    "area": "Infraestrutura",
    "habilidadesTecnicas": [
      "AWS",
      "Docker",
      "Kubernetes"
    ],
    "softSkills": [
      "Criatividade",
      "Comunicação"
    ],
    "experiencias": [
      {
        "empresa": "TechCorp",
        "cargo": "DevOps Engineer",
        "inicio": "2019-01",
        "fim": "2024-01",
        "descricao": "Atuação na área de Infraestrutura."
      }
    ],
    "formacao": [
      {
        "curso": "Tecnologia da Informação",
        "instituicao": "Universidade XYZ",
        "ano": 2018
      }
    ],
    "projetos": [
      {
        "titulo": "Projeto DevOps",
        "link": "",
        "descricao": "Projeto relevante na área de Infraestrutura."
      }
    ],
    "certificacoes": [
      "Certificação XPTO"
    ],
    "idiomas": [
      {
        "idioma": "Inglês",
        "nivel": "Intermediário"
      }
    ],
    "areaInteresses": [
      "Inovação",
      "Infraestrutura"
    ]
  },
  {
    "id": 15,
    "nome": "Yago Rodrigues",
    "email": "yago.rodrigues@example.com",
    "senha": "SenhaYago123",
    "foto": "https://randomuser.me/api/portraits/men/53.jpg",
    "cargo": "Backend Developer",
    "resumo": "Profissional focado em Desenvolvimento.",
    "localizacao": "Belo Horizonte/MG",
    "area": "Desenvolvimento",
    "habilidadesTecnicas": [
      "JavaScript",
      "SQL",
      "React"
    ],
    "softSkills": [
      "Comunicação",
      "Pensamento crítico"
    ],
    "experiencias": [
      {
        "empresa": "TechCorp",
        "cargo": "Backend Developer",
        "inicio": "2019-01",
        "fim": "2024-01",
        "descricao": "Atuação na área de Desenvolvimento."
      }
    ],
    "formacao": [
      {
        "curso": "Tecnologia da Informação",
        "instituicao": "Universidade XYZ",
        "ano": 2018
      }
    ],
    "projetos": [
      {
        "titulo": "Projeto Backend",
        "link": "",
        "descricao": "Projeto relevante na área de Desenvolvimento."
      }
    ],
    "certificacoes": [
      "Certificação XPTO"
    ],
    "idiomas": [
      {
        "idioma": "Inglês",
        "nivel": "Intermediário"
      }
    ],
    "areaInteresses": [
      "Inovação",
      "Desenvolvimento"
    ]
  },
  {
    "id": 16,
    "nome": "Lucas Oliveira",
    "email": "lucas.oliveira@example.com",
    "senha": "SenhaLucas123",
    "foto": "https://randomuser.me/api/portraits/men/16.jpg",
    "cargo": "Backend Developer",
    "resumo": "Profissional focado em Desenvolvimento.",
    "localizacao": "Fortaleza/CE",
    "area": "Desenvolvimento",
    "habilidadesTecnicas": [
      "Node.js",
      "React",
      "SQL"
    ],
    "softSkills": [
      "Organização",
      "Trabalho em equipe"
    ],
    "experiencias": [
      {
        "empresa": "TechCorp",
        "cargo": "Backend Developer",
        "inicio": "2019-01",
        "fim": "2024-01",
        "descricao": "Atuação na área de Desenvolvimento."
      }
    ],
    "formacao": [
      {
        "curso": "Tecnologia da Informação",
        "instituicao": "Universidade XYZ",
        "ano": 2018
      }
    ],
    "projetos": [
      {
        "titulo": "Projeto Backend",
        "link": "",
        "descricao": "Projeto relevante na área de Desenvolvimento."
      }
    ],
    "certificacoes": [
      "Certificação XPTO"
    ],
    "idiomas": [
      {
        "idioma": "Inglês",
        "nivel": "Intermediário"
      }
    ],
    "areaInteresses": [
      "Inovação",
      "Desenvolvimento"
    ]
  },
  {
    "id": 17,
    "nome": "Queila Souza",
    "email": "queila.souza@example.com",
    "senha": "SenhaQueila123",
    "foto": "https://randomuser.me/api/portraits/men/13.jpg",
    "cargo": "Data Analyst",
    "resumo": "Profissional focado em Dados.",
    "localizacao": "Curitiba/PR",
    "area": "Dados",
    "habilidadesTecnicas": [
      "SQL",
      "Python",
      "Pandas"
    ],
    "softSkills": [
      "Pensamento crítico",
      "Trabalho em equipe"
    ],
    "experiencias": [
      {
        "empresa": "TechCorp",
        "cargo": "Data Analyst",
        "inicio": "2019-01",
        "fim": "2024-01",
        "descricao": "Atuação na área de Dados."
      }
    ],
    "formacao": [
      {
        "curso": "Tecnologia da Informação",
        "instituicao": "Universidade XYZ",
        "ano": 2018
      }
    ],
    "projetos": [
      {
        "titulo": "Projeto Data",
        "link": "",
        "descricao": "Projeto relevante na área de Dados."
      }
    ],
    "certificacoes": [
      "Certificação XPTO"
    ],
    "idiomas": [
      {
        "idioma": "Inglês",
        "nivel": "Intermediário"
      }
    ],
    "areaInteresses": [
      "Inovação",
      "Dados"
    ]
  },
  {
    "id": 18,
    "nome": "Paulo Lima",
    "email": "paulo.lima@example.com",
    "senha": "SenhaPaulo123",
    "foto": "https://randomuser.me/api/portraits/men/48.jpg",
    "cargo": "UI/UX Designer",
    "resumo": "Profissional focado em Design.",
    "localizacao": "Fortaleza/CE",
    "area": "Design",
    "habilidadesTecnicas": [
      "Figma",
      "UI",
      "Prototipagem"
    ],
    "softSkills": [
      "Comunicação",
      "Pensamento crítico"
    ],
    "experiencias": [
      {
        "empresa": "TechCorp",
        "cargo": "UI/UX Designer",
        "inicio": "2019-01",
        "fim": "2024-01",
        "descricao": "Atuação na área de Design."
      }
    ],
    "formacao": [
      {
        "curso": "Tecnologia da Informação",
        "instituicao": "Universidade XYZ",
        "ano": 2018
      }
    ],
    "projetos": [
      {
        "titulo": "Projeto UI/UX",
        "link": "",
        "descricao": "Projeto relevante na área de Design."
      }
    ],
    "certificacoes": [
      "Certificação XPTO"
    ],
    "idiomas": [
      {
        "idioma": "Inglês",
        "nivel": "Intermediário"
      }
    ],
    "areaInteresses": [
      "Inovação",
      "Design"
    ]
  },
  {
    "id": 19,
    "nome": "Ximena Gomes",
    "email": "ximena.gomes@example.com",
    "senha": "SenhaXimena123",
    "foto": "https://randomuser.me/api/portraits/men/21.jpg",
    "cargo": "Cybersecurity Analyst",
    "resumo": "Profissional focado em Segurança.",
    "localizacao": "Belo Horizonte/MG",
    "area": "Segurança",
    "habilidadesTecnicas": [
      "Firewalls",
      "Pentest",
      "Linux"
    ],
    "softSkills": [
      "Criatividade",
      "Trabalho em equipe"
    ],
    "experiencias": [
      {
        "empresa": "TechCorp",
        "cargo": "Cybersecurity Analyst",
        "inicio": "2019-01",
        "fim": "2024-01",
        "descricao": "Atuação na área de Segurança."
      }
    ],
    "formacao": [
      {
        "curso": "Tecnologia da Informação",
        "instituicao": "Universidade XYZ",
        "ano": 2018
      }
    ],
    "projetos": [
      {
        "titulo": "Projeto Cybersecurity",
        "link": "",
        "descricao": "Projeto relevante na área de Segurança."
      }
    ],
    "certificacoes": [
      "Certificação XPTO"
    ],
    "idiomas": [
      {
        "idioma": "Inglês",
        "nivel": "Intermediário"
      }
    ],
    "areaInteresses": [
      "Inovação",
      "Segurança"
    ]
  },
  {
    "id": 20,
    "nome": "Tiago Ferreira",
    "email": "tiago.ferreira@example.com",
    "senha": "SenhaTiago123",
    "foto": "https://randomuser.me/api/portraits/men/50.jpg",
    "cargo": "Frontend Developer",
    "resumo": "Profissional focado em Desenvolvimento.",
    "localizacao": "Recife/PE",
    "area": "Desenvolvimento",
    "habilidadesTecnicas": [
      "JavaScript",
      "Node.js",
      "SQL"
    ],
    "softSkills": [
      "Pensamento crítico",
      "Trabalho em equipe"
    ],
    "experiencias": [
      {
        "empresa": "TechCorp",
        "cargo": "Frontend Developer",
        "inicio": "2019-01",
        "fim": "2024-01",
        "descricao": "Atuação na área de Desenvolvimento."
      }
    ],
    "formacao": [
      {
        "curso": "Tecnologia da Informação",
        "instituicao": "Universidade XYZ",
        "ano": 2018
      }
    ],
    "projetos": [
      {
        "titulo": "Projeto Frontend",
        "link": "",
        "descricao": "Projeto relevante na área de Desenvolvimento."
      }
    ],
    "certificacoes": [
      "Certificação XPTO"
    ],
    "idiomas": [
      {
        "idioma": "Inglês",
        "nivel": "Intermediário"
      }
    ],
    "areaInteresses": [
      "Inovação",
      "Desenvolvimento"
    ]
  },
  {
    "id": 21,
    "nome": "Queila Rodrigues",
    "email": "queila.rodrigues@example.com",
    "senha": "SenhaQueila123",
    "foto": "https://randomuser.me/api/portraits/men/45.jpg",
    "cargo": "QA Engineer",
    "resumo": "Profissional focado em Qualidade.",
    "localizacao": "Belo Horizonte/MG",
    "area": "Qualidade",
    "habilidadesTecnicas": [
      "Selenium",
      "Testes automatizados"
    ],
    "softSkills": [
      "Criatividade",
      "Comunicação"
    ],
    "experiencias": [
      {
        "empresa": "TechCorp",
        "cargo": "QA Engineer",
        "inicio": "2019-01",
        "fim": "2024-01",
        "descricao": "Atuação na área de Qualidade."
      }
    ],
    "formacao": [
      {
        "curso": "Tecnologia da Informação",
        "instituicao": "Universidade XYZ",
        "ano": 2018
      }
    ],
    "projetos": [
      {
        "titulo": "Projeto QA",
        "link": "",
        "descricao": "Projeto relevante na área de Qualidade."
      }
    ],
    "certificacoes": [
      "Certificação XPTO"
    ],
    "idiomas": [
      {
        "idioma": "Inglês",
        "nivel": "Intermediário"
      }
    ],
    "areaInteresses": [
      "Inovação",
      "Qualidade"
    ]
  },
  {
    "id": 22,
    "nome": "João Costa",
    "email": "joão.costa@example.com",
    "senha": "SenhaJoão123",
    "foto": "https://randomuser.me/api/portraits/men/48.jpg",
    "cargo": "DevOps Engineer",
    "resumo": "Profissional focado em Infraestrutura.",
    "localizacao": "São Paulo/SP",
    "area": "Infraestrutura",
    "habilidadesTecnicas": [
      "AWS",
      "Kubernetes",
      "Docker"
    ],
    "softSkills": [
      "Criatividade",
      "Organização"
    ],
    "experiencias": [
      {
        "empresa": "TechCorp",
        "cargo": "DevOps Engineer",
        "inicio": "2019-01",
        "fim": "2024-01",
        "descricao": "Atuação na área de Infraestrutura."
      }
    ],
    "formacao": [
      {
        "curso": "Tecnologia da Informação",
        "instituicao": "Universidade XYZ",
        "ano": 2018
      }
    ],
    "projetos": [
      {
        "titulo": "Projeto DevOps",
        "link": "",
        "descricao": "Projeto relevante na área de Infraestrutura."
      }
    ],
    "certificacoes": [
      "Certificação XPTO"
    ],
    "idiomas": [
      {
        "idioma": "Inglês",
        "nivel": "Intermediário"
      }
    ],
    "areaInteresses": [
      "Inovação",
      "Infraestrutura"
    ]
  },
  {
    "id": 23,
    "nome": "Tiago Rodrigues",
    "email": "tiago.rodrigues@example.com",
    "senha": "SenhaTiago123",
    "foto": "https://randomuser.me/api/portraits/men/39.jpg",
    "cargo": "Data Analyst",
    "resumo": "Profissional focado em Dados.",
    "localizacao": "São Paulo/SP",
    "area": "Dados",
    "habilidadesTecnicas": [
      "Python",
      "Pandas",
      "SQL"
    ],
    "softSkills": [
      "Comunicação",
      "Pensamento crítico"
    ],
    "experiencias": [
      {
        "empresa": "TechCorp",
        "cargo": "Data Analyst",
        "inicio": "2019-01",
        "fim": "2024-01",
        "descricao": "Atuação na área de Dados."
      }
    ],
    "formacao": [
      {
        "curso": "Tecnologia da Informação",
        "instituicao": "Universidade XYZ",
        "ano": 2018
      }
    ],
    "projetos": [
      {
        "titulo": "Projeto Data",
        "link": "",
        "descricao": "Projeto relevante na área de Dados."
      }
    ],
    "certificacoes": [
      "Certificação XPTO"
    ],
    "idiomas": [
      {
        "idioma": "Inglês",
        "nivel": "Intermediário"
      }
    ],
    "areaInteresses": [
      "Inovação",
      "Dados"
    ]
  },
  {
    "id": 24,
    "nome": "Henrique Barros",
    "email": "henrique.barros@example.com",
    "senha": "SenhaHenrique123",
    "foto": "https://randomuser.me/api/portraits/men/17.jpg",
    "cargo": "Cloud Engineer",
    "resumo": "Profissional focado em Infraestrutura.",
    "localizacao": "Rio de Janeiro/RJ",
    "area": "Infraestrutura",
    "habilidadesTecnicas": [
      "AWS",
      "Docker",
      "Kubernetes"
    ],
    "softSkills": [
      "Comunicação",
      "Pensamento crítico"
    ],
    "experiencias": [
      {
        "empresa": "TechCorp",
        "cargo": "Cloud Engineer",
        "inicio": "2019-01",
        "fim": "2024-01",
        "descricao": "Atuação na área de Infraestrutura."
      }
    ],
    "formacao": [
      {
        "curso": "Tecnologia da Informação",
        "instituicao": "Universidade XYZ",
        "ano": 2018
      }
    ],
    "projetos": [
      {
        "titulo": "Projeto Cloud",
        "link": "",
        "descricao": "Projeto relevante na área de Infraestrutura."
      }
    ],
    "certificacoes": [
      "Certificação XPTO"
    ],
    "idiomas": [
      {
        "idioma": "Inglês",
        "nivel": "Intermediário"
      }
    ],
    "areaInteresses": [
      "Inovação",
      "Infraestrutura"
    ]
  },
  {
    "id": 25,
    "nome": "Ursula Almeida",
    "email": "ursula.almeida@example.com",
    "senha": "SenhaUrsula123",
    "foto": "https://randomuser.me/api/portraits/men/42.jpg",
    "cargo": "Backend Developer",
    "resumo": "Profissional focado em Desenvolvimento.",
    "localizacao": "Belo Horizonte/MG",
    "area": "Desenvolvimento",
    "habilidadesTecnicas": [
      "SQL",
      "Node.js",
      "React"
    ],
    "softSkills": [
      "Comunicação",
      "Organização"
    ],
    "experiencias": [
      {
        "empresa": "TechCorp",
        "cargo": "Backend Developer",
        "inicio": "2019-01",
        "fim": "2024-01",
        "descricao": "Atuação na área de Desenvolvimento."
      }
    ],
    "formacao": [
      {
        "curso": "Tecnologia da Informação",
        "instituicao": "Universidade XYZ",
        "ano": 2018
      }
    ],
    "projetos": [
      {
        "titulo": "Projeto Backend",
        "link": "",
        "descricao": "Projeto relevante na área de Desenvolvimento."
      }
    ],
    "certificacoes": [
      "Certificação XPTO"
    ],
    "idiomas": [
      {
        "idioma": "Inglês",
        "nivel": "Intermediário"
      }
    ],
    "areaInteresses": [
      "Inovação",
      "Desenvolvimento"
    ]
  },
  {
    "id": 26,
    "nome": "Karina Oliveira",
    "email": "karina.oliveira@example.com",
    "senha": "SenhaKarina123",
    "foto": "https://randomuser.me/api/portraits/men/32.jpg",
    "cargo": "Backend Developer",
    "resumo": "Profissional focado em Desenvolvimento.",
    "localizacao": "Recife/PE",
    "area": "Desenvolvimento",
    "habilidadesTecnicas": [
      "React",
      "Node.js",
      "SQL"
    ],
    "softSkills": [
      "Comunicação",
      "Organização"
    ],
    "experiencias": [
      {
        "empresa": "TechCorp",
        "cargo": "Backend Developer",
        "inicio": "2019-01",
        "fim": "2024-01",
        "descricao": "Atuação na área de Desenvolvimento."
      }
    ],
    "formacao": [
      {
        "curso": "Tecnologia da Informação",
        "instituicao": "Universidade XYZ",
        "ano": 2018
      }
    ],
    "projetos": [
      {
        "titulo": "Projeto Backend",
        "link": "",
        "descricao": "Projeto relevante na área de Desenvolvimento."
      }
    ],
    "certificacoes": [
      "Certificação XPTO"
    ],
    "idiomas": [
      {
        "idioma": "Inglês",
        "nivel": "Intermediário"
      }
    ],
    "areaInteresses": [
      "Inovação",
      "Desenvolvimento"
    ]
  },
  {
    "id": 27,
    "nome": "Henrique Lima",
    "email": "henrique.lima@example.com",
    "senha": "SenhaHenrique123",
    "foto": "https://randomuser.me/api/portraits/men/36.jpg",
    "cargo": "Cloud Engineer",
    "resumo": "Profissional focado em Infraestrutura.",
    "localizacao": "Rio de Janeiro/RJ",
    "area": "Infraestrutura",
    "habilidadesTecnicas": [
      "AWS",
      "Docker",
      "Kubernetes"
    ],
    "softSkills": [
      "Comunicação",
      "Pensamento crítico"
    ],
    "experiencias": [
      {
        "empresa": "TechCorp",
        "cargo": "Cloud Engineer",
        "inicio": "2019-01",
        "fim": "2024-01",
        "descricao": "Atuação na área de Infraestrutura."
      }
    ],
    "formacao": [
      {
        "curso": "Tecnologia da Informação",
        "instituicao": "Universidade XYZ",
        "ano": 2018
      }
    ],
    "projetos": [
      {
        "titulo": "Projeto Cloud",
        "link": "",
        "descricao": "Projeto relevante na área de Infraestrutura."
      }
    ],
    "certificacoes": [
      "Certificação XPTO"
    ],
    "idiomas": [
      {
        "idioma": "Inglês",
        "nivel": "Intermediário"
      }
    ],
    "areaInteresses": [
      "Inovação",
      "Infraestrutura"
    ]
  },
  {
    "id": 28,
    "nome": "Carla Almeida",
    "email": "carla.almeida@example.com",
    "senha": "SenhaCarla123",
    "foto": "https://randomuser.me/api/portraits/men/37.jpg",
    "cargo": "Full Stack Developer",
    "resumo": "Profissional focado em Desenvolvimento.",
    "localizacao": "Rio de Janeiro/RJ",
    "area": "Desenvolvimento",
    "habilidadesTecnicas": [
      "JavaScript",
      "React",
      "SQL"
    ],
    "softSkills": [
      "Comunicação",
      "Criatividade"
    ],
    "experiencias": [
      {
        "empresa": "TechCorp",
        "cargo": "Full Stack Developer",
        "inicio": "2019-01",
        "fim": "2024-01",
        "descricao": "Atuação na área de Desenvolvimento."
      }
    ],
    "formacao": [
      {
        "curso": "Tecnologia da Informação",
        "instituicao": "Universidade XYZ",
        "ano": 2018
      }
    ],
    "projetos": [
      {
        "titulo": "Projeto Full",
        "link": "",
        "descricao": "Projeto relevante na área de Desenvolvimento."
      }
    ],
    "certificacoes": [
      "Certificação XPTO"
    ],
    "idiomas": [
      {
        "idioma": "Inglês",
        "nivel": "Intermediário"
      }
    ],
    "areaInteresses": [
      "Inovação",
      "Desenvolvimento"
    ]
  },
  {
    "id": 29,
    "nome": "Diego Rodrigues",
    "email": "diego.rodrigues@example.com",
    "senha": "SenhaDiego123",
    "foto": "https://randomuser.me/api/portraits/men/40.jpg",
    "cargo": "Full Stack Developer",
    "resumo": "Profissional focado em Desenvolvimento.",
    "localizacao": "Belo Horizonte/MG",
    "area": "Desenvolvimento",
    "habilidadesTecnicas": [
      "JavaScript",
      "React",
      "Node.js"
    ],
    "softSkills": [
      "Trabalho em equipe",
      "Organização"
    ],
    "experiencias": [
      {
        "empresa": "TechCorp",
        "cargo": "Full Stack Developer",
        "inicio": "2019-01",
        "fim": "2024-01",
        "descricao": "Atuação na área de Desenvolvimento."
      }
    ],
    "formacao": [
      {
        "curso": "Tecnologia da Informação",
        "instituicao": "Universidade XYZ",
        "ano": 2018
      }
    ],
    "projetos": [
      {
        "titulo": "Projeto Full",
        "link": "",
        "descricao": "Projeto relevante na área de Desenvolvimento."
      }
    ],
    "certificacoes": [
      "Certificação XPTO"
    ],
    "idiomas": [
      {
        "idioma": "Inglês",
        "nivel": "Intermediário"
      }
    ],
    "areaInteresses": [
      "Inovação",
      "Desenvolvimento"
    ]
  },
  {
    "id": 30,
    "nome": "Olivia Rodrigues",
    "email": "olivia.rodrigues@example.com",
    "senha": "SenhaOlivia123",
    "foto": "https://randomuser.me/api/portraits/men/41.jpg",
    "cargo": "QA Engineer",
    "resumo": "Profissional focado em Qualidade.",
    "localizacao": "Curitiba/PR",
    "area": "Qualidade",
    "habilidadesTecnicas": [
      "Selenium",
      "Testes automatizados"
    ],
    "softSkills": [
      "Pensamento crítico",
      "Criatividade"
    ],
    "experiencias": [
      {
        "empresa": "TechCorp",
        "cargo": "QA Engineer",
        "inicio": "2019-01",
        "fim": "2024-01",
        "descricao": "Atuação na área de Qualidade."
      }
    ],
    "formacao": [
      {
        "curso": "Tecnologia da Informação",
        "instituicao": "Universidade XYZ",
        "ano": 2018
      }
    ],
    "projetos": [
      {
        "titulo": "Projeto QA",
        "link": "",
        "descricao": "Projeto relevante na área de Qualidade."
      }
    ],
    "certificacoes": [
      "Certificação XPTO"
    ],
    "idiomas": [
      {
        "idioma": "Inglês",
        "nivel": "Intermediário"
      }
    ],
    "areaInteresses": [
      "Inovação",
      "Qualidade"
    ]
  },
  {
    "id": 31,
    "nome": "Marina Ferreira",
    "email": "marina.ferreira@example.com",
    "senha": "SenhaMarina123",
    "foto": "https://randomuser.me/api/portraits/men/60.jpg",
    "cargo": "Data Analyst",
    "resumo": "Profissional focado em Dados.",
    "localizacao": "Curitiba/PR",
    "area": "Dados",
    "habilidadesTecnicas": [
      "Python",
      "Pandas",
      "Machine Learning"
    ],
    "softSkills": [
      "Criatividade",
      "Trabalho em equipe"
    ],
    "experiencias": [
      {
        "empresa": "TechCorp",
        "cargo": "Data Analyst",
        "inicio": "2019-01",
        "fim": "2024-01",
        "descricao": "Atuação na área de Dados."
      }
    ],
    "formacao": [
      {
        "curso": "Tecnologia da Informação",
        "instituicao": "Universidade XYZ",
        "ano": 2018
      }
    ],
    "projetos": [
      {
        "titulo": "Projeto Data",
        "link": "",
        "descricao": "Projeto relevante na área de Dados."
      }
    ],
    "certificacoes": [
      "Certificação XPTO"
    ],
    "idiomas": [
      {
        "idioma": "Inglês",
        "nivel": "Intermediário"
      }
    ],
    "areaInteresses": [
      "Inovação",
      "Dados"
    ]
  },
  {
    "id": 32,
    "nome": "Wesley Rodrigues",
    "email": "wesley.rodrigues@example.com",
    "senha": "SenhaWesley123",
    "foto": "https://randomuser.me/api/portraits/men/10.jpg",
    "cargo": "Cloud Engineer",
    "resumo": "Profissional focado em Infraestrutura.",
    "localizacao": "Curitiba/PR",
    "area": "Infraestrutura",
    "habilidadesTecnicas": [
      "Kubernetes",
      "AWS",
      "Docker"
    ],
    "softSkills": [
      "Criatividade",
      "Trabalho em equipe"
    ],
    "experiencias": [
      {
        "empresa": "TechCorp",
        "cargo": "Cloud Engineer",
        "inicio": "2019-01",
        "fim": "2024-01",
        "descricao": "Atuação na área de Infraestrutura."
      }
    ],
    "formacao": [
      {
        "curso": "Tecnologia da Informação",
        "instituicao": "Universidade XYZ",
        "ano": 2018
      }
    ],
    "projetos": [
      {
        "titulo": "Projeto Cloud",
        "link": "",
        "descricao": "Projeto relevante na área de Infraestrutura."
      }
    ],
    "certificacoes": [
      "Certificação XPTO"
    ],
    "idiomas": [
      {
        "idioma": "Inglês",
        "nivel": "Intermediário"
      }
    ],
    "areaInteresses": [
      "Inovação",
      "Infraestrutura"
    ]
  },
  {
    "id": 33,
    "nome": "Zoe Ferreira",
    "email": "zoe.ferreira@example.com",
    "senha": "SenhaZoe123",
    "foto": "https://randomuser.me/api/portraits/men/70.jpg",
    "cargo": "Full Stack Developer",
    "resumo": "Profissional focado em Desenvolvimento.",
    "localizacao": "Curitiba/PR",
    "area": "Desenvolvimento",
    "habilidadesTecnicas": [
      "Node.js",
      "JavaScript",
      "React"
    ],
    "softSkills": [
      "Comunicação",
      "Pensamento crítico"
    ],
    "experiencias": [
      {
        "empresa": "TechCorp",
        "cargo": "Full Stack Developer",
        "inicio": "2019-01",
        "fim": "2024-01",
        "descricao": "Atuação na área de Desenvolvimento."
      }
    ],
    "formacao": [
      {
        "curso": "Tecnologia da Informação",
        "instituicao": "Universidade XYZ",
        "ano": 2018
      }
    ],
    "projetos": [
      {
        "titulo": "Projeto Full",
        "link": "",
        "descricao": "Projeto relevante na área de Desenvolvimento."
      }
    ],
    "certificacoes": [
      "Certificação XPTO"
    ],
    "idiomas": [
      {
        "idioma": "Inglês",
        "nivel": "Intermediário"
      }
    ],
    "areaInteresses": [
      "Inovação",
      "Desenvolvimento"
    ]
  },
  {
    "id": 34,
    "nome": "Nicolas Almeida",
    "email": "nicolas.almeida@example.com",
    "senha": "SenhaNicolas123",
    "foto": "https://randomuser.me/api/portraits/men/18.jpg",
    "cargo": "DevOps Engineer",
    "resumo": "Profissional focado em Infraestrutura.",
    "localizacao": "Rio de Janeiro/RJ",
    "area": "Infraestrutura",
    "habilidadesTecnicas": [
      "Docker",
      "Kubernetes",
      "AWS"
    ],
    "softSkills": [
      "Pensamento crítico",
      "Criatividade"
    ],
    "experiencias": [
      {
        "empresa": "TechCorp",
        "cargo": "DevOps Engineer",
        "inicio": "2019-01",
        "fim": "2024-01",
        "descricao": "Atuação na área de Infraestrutura."
      }
    ],
    "formacao": [
      {
        "curso": "Tecnologia da Informação",
        "instituicao": "Universidade XYZ",
        "ano": 2018
      }
    ],
    "projetos": [
      {
        "titulo": "Projeto DevOps",
        "link": "",
        "descricao": "Projeto relevante na área de Infraestrutura."
      }
    ],
    "certificacoes": [
      "Certificação XPTO"
    ],
    "idiomas": [
      {
        "idioma": "Inglês",
        "nivel": "Intermediário"
      }
    ],
    "areaInteresses": [
      "Inovação",
      "Infraestrutura"
    ]
  },
  {
    "id": 35,
    "nome": "Ursula Costa",
    "email": "ursula.costa@example.com",
    "senha": "SenhaUrsula123",
    "foto": "https://randomuser.me/api/portraits/men/31.jpg",
    "cargo": "Full Stack Developer",
    "resumo": "Profissional focado em Desenvolvimento.",
    "localizacao": "Rio de Janeiro/RJ",
    "area": "Desenvolvimento",
    "habilidadesTecnicas": [
      "Node.js",
      "SQL",
      "JavaScript"
    ],
    "softSkills": [
      "Pensamento crítico",
      "Trabalho em equipe"
    ],
    "experiencias": [
      {
        "empresa": "TechCorp",
        "cargo": "Full Stack Developer",
        "inicio": "2019-01",
        "fim": "2024-01",
        "descricao": "Atuação na área de Desenvolvimento."
      }
    ],
    "formacao": [
      {
        "curso": "Tecnologia da Informação",
        "instituicao": "Universidade XYZ",
        "ano": 2018
      }
    ],
    "projetos": [
      {
        "titulo": "Projeto Full",
        "link": "",
        "descricao": "Projeto relevante na área de Desenvolvimento."
      }
    ],
    "certificacoes": [
      "Certificação XPTO"
    ],
    "idiomas": [
      {
        "idioma": "Inglês",
        "nivel": "Intermediário"
      }
    ],
    "areaInteresses": [
      "Inovação",
      "Desenvolvimento"
    ]
  },
  {
    "id": 36,
    "nome": "Yago Gomes",
    "email": "yago.gomes@example.com",
    "senha": "SenhaYago123",
    "foto": "https://randomuser.me/api/portraits/men/25.jpg",
    "cargo": "Cybersecurity Analyst",
    "resumo": "Profissional focado em Segurança.",
    "localizacao": "Fortaleza/CE",
    "area": "Segurança",
    "habilidadesTecnicas": [
      "Pentest",
      "Firewalls",
      "Linux"
    ],
    "softSkills": [
      "Organização",
      "Criatividade"
    ],
    "experiencias": [
      {
        "empresa": "TechCorp",
        "cargo": "Cybersecurity Analyst",
        "inicio": "2019-01",
        "fim": "2024-01",
        "descricao": "Atuação na área de Segurança."
      }
    ],
    "formacao": [
      {
        "curso": "Tecnologia da Informação",
        "instituicao": "Universidade XYZ",
        "ano": 2018
      }
    ],
    "projetos": [
      {
        "titulo": "Projeto Cybersecurity",
        "link": "",
        "descricao": "Projeto relevante na área de Segurança."
      }
    ],
    "certificacoes": [
      "Certificação XPTO"
    ],
    "idiomas": [
      {
        "idioma": "Inglês",
        "nivel": "Intermediário"
      }
    ],
    "areaInteresses": [
      "Inovação",
      "Segurança"
    ]
  },
  {
    "id": 37,
    "nome": "Nicolas Pereira",
    "email": "nicolas.pereira@example.com",
    "senha": "SenhaNicolas123",
    "foto": "https://randomuser.me/api/portraits/men/19.jpg",
    "cargo": "Cloud Engineer",
    "resumo": "Profissional focado em Infraestrutura.",
    "localizacao": "Fortaleza/CE",
    "area": "Infraestrutura",
    "habilidadesTecnicas": [
      "Docker",
      "AWS",
      "Kubernetes"
    ],
    "softSkills": [
      "Pensamento crítico",
      "Organização"
    ],
    "experiencias": [
      {
        "empresa": "TechCorp",
        "cargo": "Cloud Engineer",
        "inicio": "2019-01",
        "fim": "2024-01",
        "descricao": "Atuação na área de Infraestrutura."
      }
    ],
    "formacao": [
      {
        "curso": "Tecnologia da Informação",
        "instituicao": "Universidade XYZ",
        "ano": 2018
      }
    ],
    "projetos": [
      {
        "titulo": "Projeto Cloud",
        "link": "",
        "descricao": "Projeto relevante na área de Infraestrutura."
      }
    ],
    "certificacoes": [
      "Certificação XPTO"
    ],
    "idiomas": [
      {
        "idioma": "Inglês",
        "nivel": "Intermediário"
      }
    ],
    "areaInteresses": [
      "Inovação",
      "Infraestrutura"
    ]
  },
  {
    "id": 38,
    "nome": "Diego Pereira",
    "email": "diego.pereira@example.com",
    "senha": "SenhaDiego123",
    "foto": "https://randomuser.me/api/portraits/men/52.jpg",
    "cargo": "Cloud Engineer",
    "resumo": "Profissional focado em Infraestrutura.",
    "localizacao": "Belo Horizonte/MG",
    "area": "Infraestrutura",
    "habilidadesTecnicas": [
      "Docker",
      "AWS",
      "Kubernetes"
    ],
    "softSkills": [
      "Organização",
      "Pensamento crítico"
    ],
    "experiencias": [
      {
        "empresa": "TechCorp",
        "cargo": "Cloud Engineer",
        "inicio": "2019-01",
        "fim": "2024-01",
        "descricao": "Atuação na área de Infraestrutura."
      }
    ],
    "formacao": [
      {
        "curso": "Tecnologia da Informação",
        "instituicao": "Universidade XYZ",
        "ano": 2018
      }
    ],
    "projetos": [
      {
        "titulo": "Projeto Cloud",
        "link": "",
        "descricao": "Projeto relevante na área de Infraestrutura."
      }
    ],
    "certificacoes": [
      "Certificação XPTO"
    ],
    "idiomas": [
      {
        "idioma": "Inglês",
        "nivel": "Intermediário"
      }
    ],
    "areaInteresses": [
      "Inovação",
      "Infraestrutura"
    ]
  },
  {
    "id": 39,
    "nome": "Zoe Lima",
    "email": "zoe.lima@example.com",
    "senha": "SenhaZoe123",
    "foto": "https://randomuser.me/api/portraits/men/56.jpg",
    "cargo": "Cloud Engineer",
    "resumo": "Profissional focado em Infraestrutura.",
    "localizacao": "Recife/PE",
    "area": "Infraestrutura",
    "habilidadesTecnicas": [
      "AWS",
      "Docker",
      "Kubernetes"
    ],
    "softSkills": [
      "Criatividade",
      "Organização"
    ],
    "experiencias": [
      {
        "empresa": "TechCorp",
        "cargo": "Cloud Engineer",
        "inicio": "2019-01",
        "fim": "2024-01",
        "descricao": "Atuação na área de Infraestrutura."
      }
    ],
    "formacao": [
      {
        "curso": "Tecnologia da Informação",
        "instituicao": "Universidade XYZ",
        "ano": 2018
      }
    ],
    "projetos": [
      {
        "titulo": "Projeto Cloud",
        "link": "",
        "descricao": "Projeto relevante na área de Infraestrutura."
      }
    ],
    "certificacoes": [
      "Certificação XPTO"
    ],
    "idiomas": [
      {
        "idioma": "Inglês",
        "nivel": "Intermediário"
      }
    ],
    "areaInteresses": [
      "Inovação",
      "Infraestrutura"
    ]
  },
  {
    "id": 40,
    "nome": "Isabela Lima",
    "email": "isabela.lima@example.com",
    "senha": "SenhaIsabela123",
    "foto": "https://randomuser.me/api/portraits/men/60.jpg",
    "cargo": "Data Analyst",
    "resumo": "Profissional focado em Dados.",
    "localizacao": "Rio de Janeiro/RJ",
    "area": "Dados",
    "habilidadesTecnicas": [
      "Machine Learning",
      "Pandas",
      "SQL"
    ],
    "softSkills": [
      "Criatividade",
      "Organização"
    ],
    "experiencias": [
      {
        "empresa": "TechCorp",
        "cargo": "Data Analyst",
        "inicio": "2019-01",
        "fim": "2024-01",
        "descricao": "Atuação na área de Dados."
      }
    ],
    "formacao": [
      {
        "curso": "Tecnologia da Informação",
        "instituicao": "Universidade XYZ",
        "ano": 2018
      }
    ],
    "projetos": [
      {
        "titulo": "Projeto Data",
        "link": "",
        "descricao": "Projeto relevante na área de Dados."
      }
    ],
    "certificacoes": [
      "Certificação XPTO"
    ],
    "idiomas": [
      {
        "idioma": "Inglês",
        "nivel": "Intermediário"
      }
    ],
    "areaInteresses": [
      "Inovação",
      "Dados"
    ]
  },
  {
    "id": 41,
    "nome": "Yago Costa",
    "email": "yago.costa@example.com",
    "senha": "SenhaYago123",
    "foto": "https://randomuser.me/api/portraits/men/66.jpg",
    "cargo": "Full Stack Developer",
    "resumo": "Profissional focado em Desenvolvimento.",
    "localizacao": "Fortaleza/CE",
    "area": "Desenvolvimento",
    "habilidadesTecnicas": [
      "React",
      "JavaScript",
      "SQL"
    ],
    "softSkills": [
      "Comunicação",
      "Pensamento crítico"
    ],
    "experiencias": [
      {
        "empresa": "TechCorp",
        "cargo": "Full Stack Developer",
        "inicio": "2019-01",
        "fim": "2024-01",
        "descricao": "Atuação na área de Desenvolvimento."
      }
    ],
    "formacao": [
      {
        "curso": "Tecnologia da Informação",
        "instituicao": "Universidade XYZ",
        "ano": 2018
      }
    ],
    "projetos": [
      {
        "titulo": "Projeto Full",
        "link": "",
        "descricao": "Projeto relevante na área de Desenvolvimento."
      }
    ],
    "certificacoes": [
      "Certificação XPTO"
    ],
    "idiomas": [
      {
        "idioma": "Inglês",
        "nivel": "Intermediário"
      }
    ],
    "areaInteresses": [
      "Inovação",
      "Desenvolvimento"
    ]
  },
  {
    "id": 42,
    "nome": "Lucas Rodrigues",
    "email": "lucas.rodrigues@example.com",
    "senha": "SenhaLucas123",
    "foto": "https://randomuser.me/api/portraits/men/53.jpg",
    "cargo": "Cloud Engineer",
    "resumo": "Profissional focado em Infraestrutura.",
    "localizacao": "Curitiba/PR",
    "area": "Infraestrutura",
    "habilidadesTecnicas": [
      "AWS",
      "Docker",
      "Kubernetes"
    ],
    "softSkills": [
      "Comunicação",
      "Trabalho em equipe"
    ],
    "experiencias": [
      {
        "empresa": "TechCorp",
        "cargo": "Cloud Engineer",
        "inicio": "2019-01",
        "fim": "2024-01",
        "descricao": "Atuação na área de Infraestrutura."
      }
    ],
    "formacao": [
      {
        "curso": "Tecnologia da Informação",
        "instituicao": "Universidade XYZ",
        "ano": 2018
      }
    ],
    "projetos": [
      {
        "titulo": "Projeto Cloud",
        "link": "",
        "descricao": "Projeto relevante na área de Infraestrutura."
      }
    ],
    "certificacoes": [
      "Certificação XPTO"
    ],
    "idiomas": [
      {
        "idioma": "Inglês",
        "nivel": "Intermediário"
      }
    ],
    "areaInteresses": [
      "Inovação",
      "Infraestrutura"
    ]
  },
  {
    "id": 43,
    "nome": "Marina Rodrigues",
    "email": "marina.rodrigues@example.com",
    "senha": "SenhaMarina123",
    "foto": "https://randomuser.me/api/portraits/men/9.jpg",
    "cargo": "Backend Developer",
    "resumo": "Profissional focado em Desenvolvimento.",
    "localizacao": "Fortaleza/CE",
    "area": "Desenvolvimento",
    "habilidadesTecnicas": [
      "SQL",
      "React",
      "JavaScript"
    ],
    "softSkills": [
      "Trabalho em equipe",
      "Comunicação"
    ],
    "experiencias": [
      {
        "empresa": "TechCorp",
        "cargo": "Backend Developer",
        "inicio": "2019-01",
        "fim": "2024-01",
        "descricao": "Atuação na área de Desenvolvimento."
      }
    ],
    "formacao": [
      {
        "curso": "Tecnologia da Informação",
        "instituicao": "Universidade XYZ",
        "ano": 2018
      }
    ],
    "projetos": [
      {
        "titulo": "Projeto Backend",
        "link": "",
        "descricao": "Projeto relevante na área de Desenvolvimento."
      }
    ],
    "certificacoes": [
      "Certificação XPTO"
    ],
    "idiomas": [
      {
        "idioma": "Inglês",
        "nivel": "Intermediário"
      }
    ],
    "areaInteresses": [
      "Inovação",
      "Desenvolvimento"
    ]
  },
  {
    "id": 44,
    "nome": "Bruno Almeida",
    "email": "bruno.almeida@example.com",
    "senha": "SenhaBruno123",
    "foto": "https://randomuser.me/api/portraits/men/25.jpg",
    "cargo": "UI/UX Designer",
    "resumo": "Profissional focado em Design.",
    "localizacao": "São Paulo/SP",
    "area": "Design",
    "habilidadesTecnicas": [
      "Figma",
      "UI",
      "Prototipagem"
    ],
    "softSkills": [
      "Trabalho em equipe",
      "Pensamento crítico"
    ],
    "experiencias": [
      {
        "empresa": "TechCorp",
        "cargo": "UI/UX Designer",
        "inicio": "2019-01",
        "fim": "2024-01",
        "descricao": "Atuação na área de Design."
      }
    ],
    "formacao": [
      {
        "curso": "Tecnologia da Informação",
        "instituicao": "Universidade XYZ",
        "ano": 2018
      }
    ],
    "projetos": [
      {
        "titulo": "Projeto UI/UX",
        "link": "",
        "descricao": "Projeto relevante na área de Design."
      }
    ],
    "certificacoes": [
      "Certificação XPTO"
    ],
    "idiomas": [
      {
        "idioma": "Inglês",
        "nivel": "Intermediário"
      }
    ],
    "areaInteresses": [
      "Inovação",
      "Design"
    ]
  },
  {
    "id": 45,
    "nome": "Vinicius Barros",
    "email": "vinicius.barros@example.com",
    "senha": "SenhaVinicius123",
    "foto": "https://randomuser.me/api/portraits/men/35.jpg",
    "cargo": "Data Scientist",
    "resumo": "Profissional focado em Dados.",
    "localizacao": "Fortaleza/CE",
    "area": "Dados",
    "habilidadesTecnicas": [
      "Pandas",
      "SQL",
      "Machine Learning"
    ],
    "softSkills": [
      "Organização",
      "Trabalho em equipe"
    ],
    "experiencias": [
      {
        "empresa": "TechCorp",
        "cargo": "Data Scientist",
        "inicio": "2019-01",
        "fim": "2024-01",
        "descricao": "Atuação na área de Dados."
      }
    ],
    "formacao": [
      {
        "curso": "Tecnologia da Informação",
        "instituicao": "Universidade XYZ",
        "ano": 2018
      }
    ],
    "projetos": [
      {
        "titulo": "Projeto Data",
        "link": "",
        "descricao": "Projeto relevante na área de Dados."
      }
    ],
    "certificacoes": [
      "Certificação XPTO"
    ],
    "idiomas": [
      {
        "idioma": "Inglês",
        "nivel": "Intermediário"
      }
    ],
    "areaInteresses": [
      "Inovação",
      "Dados"
    ]
  },
  {
    "id": 46,
    "nome": "Bruno Souza",
    "email": "bruno.souza@example.com",
    "senha": "SenhaBruno123",
    "foto": "https://randomuser.me/api/portraits/men/66.jpg",
    "cargo": "Frontend Developer",
    "resumo": "Profissional focado em Desenvolvimento.",
    "localizacao": "Recife/PE",
    "area": "Desenvolvimento",
    "habilidadesTecnicas": [
      "React",
      "Node.js",
      "SQL"
    ],
    "softSkills": [
      "Organização",
      "Trabalho em equipe"
    ],
    "experiencias": [
      {
        "empresa": "TechCorp",
        "cargo": "Frontend Developer",
        "inicio": "2019-01",
        "fim": "2024-01",
        "descricao": "Atuação na área de Desenvolvimento."
      }
    ],
    "formacao": [
      {
        "curso": "Tecnologia da Informação",
        "instituicao": "Universidade XYZ",
        "ano": 2018
      }
    ],
    "projetos": [
      {
        "titulo": "Projeto Frontend",
        "link": "",
        "descricao": "Projeto relevante na área de Desenvolvimento."
      }
    ],
    "certificacoes": [
      "Certificação XPTO"
    ],
    "idiomas": [
      {
        "idioma": "Inglês",
        "nivel": "Intermediário"
      }
    ],
    "areaInteresses": [
      "Inovação",
      "Desenvolvimento"
    ]
  },
  {
    "id": 47,
    "nome": "Diego Oliveira",
    "email": "diego.oliveira@example.com",
    "senha": "SenhaDiego123",
    "foto": "https://randomuser.me/api/portraits/men/48.jpg",
    "cargo": "Full Stack Developer",
    "resumo": "Profissional focado em Desenvolvimento.",
    "localizacao": "Rio de Janeiro/RJ",
    "area": "Desenvolvimento",
    "habilidadesTecnicas": [
      "React",
      "SQL",
      "Node.js"
    ],
    "softSkills": [
      "Trabalho em equipe",
      "Criatividade"
    ],
    "experiencias": [
      {
        "empresa": "TechCorp",
        "cargo": "Full Stack Developer",
        "inicio": "2019-01",
        "fim": "2024-01",
        "descricao": "Atuação na área de Desenvolvimento."
      }
    ],
    "formacao": [
      {
        "curso": "Tecnologia da Informação",
        "instituicao": "Universidade XYZ",
        "ano": 2018
      }
    ],
    "projetos": [
      {
        "titulo": "Projeto Full",
        "link": "",
        "descricao": "Projeto relevante na área de Desenvolvimento."
      }
    ],
    "certificacoes": [
      "Certificação XPTO"
    ],
    "idiomas": [
      {
        "idioma": "Inglês",
        "nivel": "Intermediário"
      }
    ],
    "areaInteresses": [
      "Inovação",
      "Desenvolvimento"
    ]
  },
  {
    "id": 48,
    "nome": "Carla Barros",
    "email": "carla.barros@example.com",
    "senha": "SenhaCarla123",
    "foto": "https://randomuser.me/api/portraits/men/6.jpg",
    "cargo": "Backend Developer",
    "resumo": "Profissional focado em Desenvolvimento.",
    "localizacao": "Rio de Janeiro/RJ",
    "area": "Desenvolvimento",
    "habilidadesTecnicas": [
      "JavaScript",
      "SQL",
      "Node.js"
    ],
    "softSkills": [
      "Organização",
      "Criatividade"
    ],
    "experiencias": [
      {
        "empresa": "TechCorp",
        "cargo": "Backend Developer",
        "inicio": "2019-01",
        "fim": "2024-01",
        "descricao": "Atuação na área de Desenvolvimento."
      }
    ],
    "formacao": [
      {
        "curso": "Tecnologia da Informação",
        "instituicao": "Universidade XYZ",
        "ano": 2018
      }
    ],
    "projetos": [
      {
        "titulo": "Projeto Backend",
        "link": "",
        "descricao": "Projeto relevante na área de Desenvolvimento."
      }
    ],
    "certificacoes": [
      "Certificação XPTO"
    ],
    "idiomas": [
      {
        "idioma": "Inglês",
        "nivel": "Intermediário"
      }
    ],
    "areaInteresses": [
      "Inovação",
      "Desenvolvimento"
    ]
  },
  {
    "id": 49,
    "nome": "Zoe Gomes",
    "email": "zoe.gomes@example.com",
    "senha": "SenhaZoe123",
    "foto": "https://randomuser.me/api/portraits/men/15.jpg",
    "cargo": "UI/UX Designer",
    "resumo": "Profissional focado em Design.",
    "localizacao": "Rio de Janeiro/RJ",
    "area": "Design",
    "habilidadesTecnicas": [
      "Prototipagem",
      "UI",
      "Figma"
    ],
    "softSkills": [
      "Organização",
      "Criatividade"
    ],
    "experiencias": [
      {
        "empresa": "TechCorp",
        "cargo": "UI/UX Designer",
        "inicio": "2019-01",
        "fim": "2024-01",
        "descricao": "Atuação na área de Design."
      }
    ],
    "formacao": [
      {
        "curso": "Tecnologia da Informação",
        "instituicao": "Universidade XYZ",
        "ano": 2018
      }
    ],
    "projetos": [
      {
        "titulo": "Projeto UI/UX",
        "link": "",
        "descricao": "Projeto relevante na área de Design."
      }
    ],
    "certificacoes": [
      "Certificação XPTO"
    ],
    "idiomas": [
      {
        "idioma": "Inglês",
        "nivel": "Intermediário"
      }
    ],
    "areaInteresses": [
      "Inovação",
      "Design"
    ]
  },
  {
    "id": 50,
    "nome": "Rafael Almeida",
    "email": "rafael.almeida@example.com",
    "senha": "SenhaRafael123",
    "foto": "https://randomuser.me/api/portraits/men/6.jpg",
    "cargo": "Data Scientist",
    "resumo": "Profissional focado em Dados.",
    "localizacao": "Curitiba/PR",
    "area": "Dados",
    "habilidadesTecnicas": [
      "SQL",
      "Python",
      "Pandas"
    ],
    "softSkills": [
      "Criatividade",
      "Pensamento crítico"
    ],
    "experiencias": [
      {
        "empresa": "TechCorp",
        "cargo": "Data Scientist",
        "inicio": "2019-01",
        "fim": "2024-01",
        "descricao": "Atuação na área de Dados."
      }
    ],
    "formacao": [
      {
        "curso": "Tecnologia da Informação",
        "instituicao": "Universidade XYZ",
        "ano": 2018
      }
    ],
    "projetos": [
      {
        "titulo": "Projeto Data",
        "link": "",
        "descricao": "Projeto relevante na área de Dados."
      }
    ],
    "certificacoes": [
      "Certificação XPTO"
    ],
    "idiomas": [
      {
        "idioma": "Inglês",
        "nivel": "Intermediário"
      }
    ],
    "areaInteresses": [
      "Inovação",
      "Dados"
    ]
  },
  {
    "id": 51,
    "nome": "Nicolas Gomes",
    "email": "nicolas.gomes@example.com",
    "senha": "SenhaNicolas123",
    "foto": "https://randomuser.me/api/portraits/men/31.jpg",
    "cargo": "Data Scientist",
    "resumo": "Profissional focado em Dados.",
    "localizacao": "Curitiba/PR",
    "area": "Dados",
    "habilidadesTecnicas": [
      "Machine Learning",
      "Python",
      "SQL"
    ],
    "softSkills": [
      "Trabalho em equipe",
      "Organização"
    ],
    "experiencias": [
      {
        "empresa": "TechCorp",
        "cargo": "Data Scientist",
        "inicio": "2019-01",
        "fim": "2024-01",
        "descricao": "Atuação na área de Dados."
      }
    ],
    "formacao": [
      {
        "curso": "Tecnologia da Informação",
        "instituicao": "Universidade XYZ",
        "ano": 2018
      }
    ],
    "projetos": [
      {
        "titulo": "Projeto Data",
        "link": "",
        "descricao": "Projeto relevante na área de Dados."
      }
    ],
    "certificacoes": [
      "Certificação XPTO"
    ],
    "idiomas": [
      {
        "idioma": "Inglês",
        "nivel": "Intermediário"
      }
    ],
    "areaInteresses": [
      "Inovação",
      "Dados"
    ]
  },
  {
    "id": 52,
    "nome": "Wesley Ferreira",
    "email": "wesley.ferreira@example.com",
    "senha": "SenhaWesley123",
    "foto": "https://randomuser.me/api/portraits/men/42.jpg",
    "cargo": "Data Scientist",
    "resumo": "Profissional focado em Dados.",
    "localizacao": "Curitiba/PR",
    "area": "Dados",
    "habilidadesTecnicas": [
      "Python",
      "SQL",
      "Pandas"
    ],
    "softSkills": [
      "Criatividade",
      "Pensamento crítico"
    ],
    "experiencias": [
      {
        "empresa": "TechCorp",
        "cargo": "Data Scientist",
        "inicio": "2019-01",
        "fim": "2024-01",
        "descricao": "Atuação na área de Dados."
      }
    ],
    "formacao": [
      {
        "curso": "Tecnologia da Informação",
        "instituicao": "Universidade XYZ",
        "ano": 2018
      }
    ],
    "projetos": [
      {
        "titulo": "Projeto Data",
        "link": "",
        "descricao": "Projeto relevante na área de Dados."
      }
    ],
    "certificacoes": [
      "Certificação XPTO"
    ],
    "idiomas": [
      {
        "idioma": "Inglês",
        "nivel": "Intermediário"
      }
    ],
    "areaInteresses": [
      "Inovação",
      "Dados"
    ]
  },
  {
    "id": 53,
    "nome": "Ximena Costa",
    "email": "ximena.costa@example.com",
    "senha": "SenhaXimena123",
    "foto": "https://randomuser.me/api/portraits/men/47.jpg",
    "cargo": "Full Stack Developer",
    "resumo": "Profissional focado em Desenvolvimento.",
    "localizacao": "Curitiba/PR",
    "area": "Desenvolvimento",
    "habilidadesTecnicas": [
      "JavaScript",
      "Node.js",
      "React"
    ],
    "softSkills": [
      "Pensamento crítico",
      "Trabalho em equipe"
    ],
    "experiencias": [
      {
        "empresa": "TechCorp",
        "cargo": "Full Stack Developer",
        "inicio": "2019-01",
        "fim": "2024-01",
        "descricao": "Atuação na área de Desenvolvimento."
      }
    ],
    "formacao": [
      {
        "curso": "Tecnologia da Informação",
        "instituicao": "Universidade XYZ",
        "ano": 2018
      }
    ],
    "projetos": [
      {
        "titulo": "Projeto Full",
        "link": "",
        "descricao": "Projeto relevante na área de Desenvolvimento."
      }
    ],
    "certificacoes": [
      "Certificação XPTO"
    ],
    "idiomas": [
      {
        "idioma": "Inglês",
        "nivel": "Intermediário"
      }
    ],
    "areaInteresses": [
      "Inovação",
      "Desenvolvimento"
    ]
  },
  {
    "id": 54,
    "nome": "Diego Oliveira",
    "email": "diego.oliveira@example.com",
    "senha": "SenhaDiego123",
    "foto": "https://randomuser.me/api/portraits/men/36.jpg",
    "cargo": "Cloud Engineer",
    "resumo": "Profissional focado em Infraestrutura.",
    "localizacao": "Recife/PE",
    "area": "Infraestrutura",
    "habilidadesTecnicas": [
      "Docker",
      "Kubernetes",
      "AWS"
    ],
    "softSkills": [
      "Pensamento crítico",
      "Criatividade"
    ],
    "experiencias": [
      {
        "empresa": "TechCorp",
        "cargo": "Cloud Engineer",
        "inicio": "2019-01",
        "fim": "2024-01",
        "descricao": "Atuação na área de Infraestrutura."
      }
    ],
    "formacao": [
      {
        "curso": "Tecnologia da Informação",
        "instituicao": "Universidade XYZ",
        "ano": 2018
      }
    ],
    "projetos": [
      {
        "titulo": "Projeto Cloud",
        "link": "",
        "descricao": "Projeto relevante na área de Infraestrutura."
      }
    ],
    "certificacoes": [
      "Certificação XPTO"
    ],
    "idiomas": [
      {
        "idioma": "Inglês",
        "nivel": "Intermediário"
      }
    ],
    "areaInteresses": [
      "Inovação",
      "Infraestrutura"
    ]
  },
  {
    "id": 55,
    "nome": "Ana Almeida",
    "email": "ana.almeida@example.com",
    "senha": "SenhaAna123",
    "foto": "https://randomuser.me/api/portraits/men/19.jpg",
    "cargo": "Cybersecurity Analyst",
    "resumo": "Profissional focado em Segurança.",
    "localizacao": "Recife/PE",
    "area": "Segurança",
    "habilidadesTecnicas": [
      "Pentest",
      "Firewalls",
      "Linux"
    ],
    "softSkills": [
      "Pensamento crítico",
      "Organização"
    ],
    "experiencias": [
      {
        "empresa": "TechCorp",
        "cargo": "Cybersecurity Analyst",
        "inicio": "2019-01",
        "fim": "2024-01",
        "descricao": "Atuação na área de Segurança."
      }
    ],
    "formacao": [
      {
        "curso": "Tecnologia da Informação",
        "instituicao": "Universidade XYZ",
        "ano": 2018
      }
    ],
    "projetos": [
      {
        "titulo": "Projeto Cybersecurity",
        "link": "",
        "descricao": "Projeto relevante na área de Segurança."
      }
    ],
    "certificacoes": [
      "Certificação XPTO"
    ],
    "idiomas": [
      {
        "idioma": "Inglês",
        "nivel": "Intermediário"
      }
    ],
    "areaInteresses": [
      "Inovação",
      "Segurança"
    ]
  },
  {
    "id": 56,
    "nome": "João Almeida",
    "email": "joão.almeida@example.com",
    "senha": "SenhaJoão123",
    "foto": "https://randomuser.me/api/portraits/men/47.jpg",
    "cargo": "Cybersecurity Analyst",
    "resumo": "Profissional focado em Segurança.",
    "localizacao": "Fortaleza/CE",
    "area": "Segurança",
    "habilidadesTecnicas": [
      "Firewalls",
      "Linux",
      "Pentest"
    ],
    "softSkills": [
      "Pensamento crítico",
      "Criatividade"
    ],
    "experiencias": [
      {
        "empresa": "TechCorp",
        "cargo": "Cybersecurity Analyst",
        "inicio": "2019-01",
        "fim": "2024-01",
        "descricao": "Atuação na área de Segurança."
      }
    ],
    "formacao": [
      {
        "curso": "Tecnologia da Informação",
        "instituicao": "Universidade XYZ",
        "ano": 2018
      }
    ],
    "projetos": [
      {
        "titulo": "Projeto Cybersecurity",
        "link": "",
        "descricao": "Projeto relevante na área de Segurança."
      }
    ],
    "certificacoes": [
      "Certificação XPTO"
    ],
    "idiomas": [
      {
        "idioma": "Inglês",
        "nivel": "Intermediário"
      }
    ],
    "areaInteresses": [
      "Inovação",
      "Segurança"
    ]
  },
  {
    "id": 57,
    "nome": "Tiago Costa",
    "email": "tiago.costa@example.com",
    "senha": "SenhaTiago123",
    "foto": "https://randomuser.me/api/portraits/men/44.jpg",
    "cargo": "QA Engineer",
    "resumo": "Profissional focado em Qualidade.",
    "localizacao": "Curitiba/PR",
    "area": "Qualidade",
    "habilidadesTecnicas": [
      "Selenium",
      "Testes automatizados"
    ],
    "softSkills": [
      "Comunicação",
      "Criatividade"
    ],
    "experiencias": [
      {
        "empresa": "TechCorp",
        "cargo": "QA Engineer",
        "inicio": "2019-01",
        "fim": "2024-01",
        "descricao": "Atuação na área de Qualidade."
      }
    ],
    "formacao": [
      {
        "curso": "Tecnologia da Informação",
        "instituicao": "Universidade XYZ",
        "ano": 2018
      }
    ],
    "projetos": [
      {
        "titulo": "Projeto QA",
        "link": "",
        "descricao": "Projeto relevante na área de Qualidade."
      }
    ],
    "certificacoes": [
      "Certificação XPTO"
    ],
    "idiomas": [
      {
        "idioma": "Inglês",
        "nivel": "Intermediário"
      }
    ],
    "areaInteresses": [
      "Inovação",
      "Qualidade"
    ]
  },
  {
    "id": 58,
    "nome": "Karina Almeida",
    "email": "karina.almeida@example.com",
    "senha": "SenhaKarina123",
    "foto": "https://randomuser.me/api/portraits/men/61.jpg",
    "cargo": "Full Stack Developer",
    "resumo": "Profissional focado em Desenvolvimento.",
    "localizacao": "Belo Horizonte/MG",
    "area": "Desenvolvimento",
    "habilidadesTecnicas": [
      "SQL",
      "React",
      "Node.js"
    ],
    "softSkills": [
      "Trabalho em equipe",
      "Pensamento crítico"
    ],
    "experiencias": [
      {
        "empresa": "TechCorp",
        "cargo": "Full Stack Developer",
        "inicio": "2019-01",
        "fim": "2024-01",
        "descricao": "Atuação na área de Desenvolvimento."
      }
    ],
    "formacao": [
      {
        "curso": "Tecnologia da Informação",
        "instituicao": "Universidade XYZ",
        "ano": 2018
      }
    ],
    "projetos": [
      {
        "titulo": "Projeto Full",
        "link": "",
        "descricao": "Projeto relevante na área de Desenvolvimento."
      }
    ],
    "certificacoes": [
      "Certificação XPTO"
    ],
    "idiomas": [
      {
        "idioma": "Inglês",
        "nivel": "Intermediário"
      }
    ],
    "areaInteresses": [
      "Inovação",
      "Desenvolvimento"
    ]
  },
  {
    "id": 59,
    "nome": "Isabela Costa",
    "email": "isabela.costa@example.com",
    "senha": "SenhaIsabela123",
    "foto": "https://randomuser.me/api/portraits/men/6.jpg",
    "cargo": "Full Stack Developer",
    "resumo": "Profissional focado em Desenvolvimento.",
    "localizacao": "Curitiba/PR",
    "area": "Desenvolvimento",
    "habilidadesTecnicas": [
      "Node.js",
      "React",
      "JavaScript"
    ],
    "softSkills": [
      "Pensamento crítico",
      "Criatividade"
    ],
    "experiencias": [
      {
        "empresa": "TechCorp",
        "cargo": "Full Stack Developer",
        "inicio": "2019-01",
        "fim": "2024-01",
        "descricao": "Atuação na área de Desenvolvimento."
      }
    ],
    "formacao": [
      {
        "curso": "Tecnologia da Informação",
        "instituicao": "Universidade XYZ",
        "ano": 2018
      }
    ],
    "projetos": [
      {
        "titulo": "Projeto Full",
        "link": "",
        "descricao": "Projeto relevante na área de Desenvolvimento."
      }
    ],
    "certificacoes": [
      "Certificação XPTO"
    ],
    "idiomas": [
      {
        "idioma": "Inglês",
        "nivel": "Intermediário"
      }
    ],
    "areaInteresses": [
      "Inovação",
      "Desenvolvimento"
    ]
  },
  {
    "id": 60,
    "nome": "Ursula Barros",
    "email": "ursula.barros@example.com",
    "senha": "SenhaUrsula123",
    "foto": "https://randomuser.me/api/portraits/men/68.jpg",
    "cargo": "Backend Developer",
    "resumo": "Profissional focado em Desenvolvimento.",
    "localizacao": "Rio de Janeiro/RJ",
    "area": "Desenvolvimento",
    "habilidadesTecnicas": [
      "React",
      "Node.js",
      "JavaScript"
    ],
    "softSkills": [
      "Trabalho em equipe",
      "Organização"
    ],
    "experiencias": [
      {
        "empresa": "TechCorp",
        "cargo": "Backend Developer",
        "inicio": "2019-01",
        "fim": "2024-01",
        "descricao": "Atuação na área de Desenvolvimento."
      }
    ],
    "formacao": [
      {
        "curso": "Tecnologia da Informação",
        "instituicao": "Universidade XYZ",
        "ano": 2018
      }
    ],
    "projetos": [
      {
        "titulo": "Projeto Backend",
        "link": "",
        "descricao": "Projeto relevante na área de Desenvolvimento."
      }
    ],
    "certificacoes": [
      "Certificação XPTO"
    ],
    "idiomas": [
      {
        "idioma": "Inglês",
        "nivel": "Intermediário"
      }
    ],
    "areaInteresses": [
      "Inovação",
      "Desenvolvimento"
    ]
  }
]


export default getUsers