import i18n from 'i18next'
import LanguageDetector from 'i18next-browser-languagedetector'
import { initReactI18next } from 'react-i18next'

i18n.use(LanguageDetector).use(initReactI18next).init({
    debug: true,
    fallbackLng: 'pt',
    returnObjects: true,
    resources: {
        pt: {
            translation: {
                Navbar: {
                    about: 'Sobre Mim',
                    experiences: 'Experiências',
                    skills: 'Competências',
                    projects: 'Projetos',
                    contact: 'Contato'
                },
                Title: {
                    title1: 'Front-End',
                    title2: 'Desenvolvimento Web',
                    title3: 'Desenvolvimento de jogos'
                },
                About: {
                    text: 'Graduado em Engenharia de Computação na FURG e mestrando no Programa de Pós-Graduação em Computação da FURG.  Possuo conhecimentos nas linguagens Python, HTML, CSS, JavaScript e c# e nas frameworks React Native, React e Vue. Também tenho experiência com o desenvolvimento de jogos utilizando a engine Unity, como um hobby. Grande vontade de aprender e adaptável a novas tecnologias.',
                    education: 'Educação',
                    college: 'Universidade Federal do Rio Grande (FURG)',
                    course: 'Graduação no curso de Engenharia da Computação',
                    masters: 'Mestrado no Programa de Pós-Graduação em Computação (PPGComp)'
                },
                Experience: {
                    experience: 'Experiência Profissional'
                },
                Experiences: [
                    {
                        title: 'Estágio - Analista de dados',
                        place: 'Universidade Federal do Rio Grande (FURG)',
                        date: '2022 - 2023',
                        work: 'Trabalhei com um colega para a análise de dados de uma base de dados climáticos utilizando a linguagem python. Criei gráficos interativos com a biblioteca bokeh para a visualização dos dados e encontrar outliers, e criei um modelo de predição para prever os dados climáticos nos próximos 6 meses.'
                    },
                    {
                        title: 'Bolsista',
                        place: 'CNPq',
                        date: '2023 - 2025',
                        work: 'Realizei a pesquisa e o desenvolvimento de um jogo de realidade virtual sobre a importância dos oceanos. Eu criei o design, as mecânicas e as interfaces do jogo com a Unity Engine.'
                    }
                ],
                Skills: {
                    skills: 'Competências'
                },
                Project: {
                    projects: 'Projetos'
                },
                Projects: [
                    {
                        name: 'Portfolio Web',
                        tecnology: 'React',
                        text: 'Portfolio desenvolvido com React, possuindo informações sobre mim, competências, projetos e formas de contato. foi criado um botão estilo toggle, para alterar entre "Dark Mode" e "Light Mode" e foi utilizada a biblioteca i18next para trocar a linguagem do portfolio entre Português e Inglês.',
                        reference: 'https://github.com/Leonardo-chagas/Web-Portfolio',
                        hasLink: true,
                        linkText: 'Repositório para esse projeto',
                        image: 'images/portfolio.JPG'
                    },
                    {
                        name: 'Aplicativo Mobile',
                        tecnology: 'React Native',
                        text: 'Trabalho da faculdade feito em grupo com outros 5 integrantes, onde o objetivo era o desenvolvimento de um aplicativo de celular. Eu fiquei com a realização do front-end junto com outra integrante do grupo, criando o layout das telas do aplicativo bem como a comunicação entre o aplicativo e o servidor back-end. O front-end foi realizado com React Native.',
                        reference: 'https://github.com/Leonardo-chagas/planalto-front-viagens',
                        hasLink: true,
                        linkText: 'Repositório para esse projeto',
                        image: 'images/planalto.jpeg'
                    },
                    {
                        name: 'Jogo de Cartas',
                        tecnology: 'Unity',
                        text: 'Projeto de TCC desenvolvido em Unity, que se trata de um jogo de cartas para ensinar conceitos de programação. O jogador deve colocar cartas na tela para formar o programa solicitado pelo desafio. Para validar o código dos jogadores, foi utilizado o ANTLR4 para criar uma linguagem de programação simples.',
                        reference: 'https://github.com/Leonardo-chagas/Code_In_Hand',
                        hasLink: true,
                        linkText: 'Repositório para esse projeto',
                        image: 'images/Game2.png'
                    },
                    {
                        name: 'Jogo de Realidade Virtual',
                        tecnology: 'Unity',
                        text: 'Projeto de mestrado desenvolvido em Unity, que se trata de um jogo de realidade virtual para conscientização sobre a importância dos oceanos. Foi criado um cenário aquático utilizando assets da loja da Unity para o jogador explorar, tirando fotos das espécies da cena e coletando o lixo espalhado pelo mapa. As informações dos animais marinhos foram armanezadas em um arquivo JSON, para mostrar na interface quando o jogador tira a foto daquela espécie.',
                        reference: 'https://github.com/Leonardo-chagas/Imerso-no-Mar-Dados',
                        hasLink: true,
                        linkText: 'Repositório para esse projeto',
                        image: 'images/GamePhoto.JPG'
                    },
                ],
                Contact: {
                    phone: 'Celular'
                }
            },
        },
        en: {
            translation: {
                Navbar: {
                    about: 'About',
                    experiences: 'Experiences',
                    skills: 'Skills',
                    projects: 'Projects',
                    contact: 'Contact'
                },
                Title: {
                    title1: 'Front-End',
                    title2: 'Web Development',
                    title3: 'Game Development'
                },
                About: {
                    text: "I have a degree in Computer Engineering from FURG and I'm studying for a master's degree in the Graduate Program in Computing at FURG.  I have knowledge of the Python, HTML, CSS, JavaScript and c# languages and the React Native, React and Vue frameworks. I also have experience developing games using the Unity engine, as a hobby. I'm eager to learn and adaptable to new technologies.",
                    education: 'Education',
                    college: 'Federal University of Rio Grande (FURG)',
                    course: 'Graduation in Computer Engineering',
                    masters: "Master's degree in the Graduate Program in Computing (PPGComp)"
                },
                Experience: {
                    experience: 'Professional Experience'
                },
                Experiences: [
                    {
                        title: 'Internship - Data analyst',
                        place: 'Federal University of Rio Grande (FURG)',
                        date: '2022 - 2023',
                        work: 'I worked with a colleague to analyze data from a climate database using the python language. I created interactive graphs with the bokeh library to visualize the data and find outliers, and created a prediction model to forecast the climate data over the next 6 months.'
                    },
                    {
                        title: 'Scholarship',
                        place: 'CNPq',
                        date: '2023 - 2025',
                        work: "I researched and developed a virtual reality game about the importance of the oceans. I created the game's design, mechanics and interfaces using the Unity Engine."
                    }
                ],
                Skills: {
                    skills: 'Skills'
                },
                Project: {
                    projects: 'Projects'
                },
                Projects: [
                    {
                        name: 'Web Portfolio',
                        tecnology: 'React',
                        text: 'Portfolio developed with React, with information about me, skills, projects and ways to contact me. A toggle button was created to change between “Dark Mode” and “Light Mode” and the i18next library was used to change the language of the portfolio between Portuguese and English.',
                        reference: 'https://github.com/Leonardo-chagas/Web-Portfolio',
                        hasLink: true,
                        linkText: 'Repository for this project',
                        image: 'images/portfolio.JPG'
                    },
                    {
                        name: 'Mobile App',
                        tecnology: 'React Native',
                        text: 'College assignment in a group with 5 other members, where the aim was to develop a mobile application. I was responsible for the front-end along with another member of the group, creating the layout of the application screens as well as the communication between the application and the back-end server. The front-end was developed using React Native.',
                        reference: 'https://github.com/Leonardo-chagas/planalto-front-viagens',
                        hasLink: true,
                        linkText: 'Repository for this project',
                        image: 'images/planalto.jpeg'
                    },
                    {
                        name: 'Card Game',
                        tecnology: 'Unity',
                        text: "Graduation project developed in Unity, which consists of a card game to teach programming concepts. The player must place cards on the screen to form the program requested by the challenge. To validate the players' code, ANTLR4 was used to create a simple programming language.",
                        reference: 'https://github.com/Leonardo-chagas/Code_In_Hand',
                        hasLink: true,
                        linkText: 'Repository for this project',
                        image: 'images/Game2.png'
                    },
                    {
                        name: 'Virtual Reality Game',
                        tecnology: 'Python',
                        text: "Master's degree project developed in Unity, which consists of a virtual reality game to raise awareness about the importance of the oceans. An aquatic scene was created using assets from the Unity store for the player to explore, taking photos of the species in the scene and collecting the garbage scattered around the map. The information on the marine animals was stored in a JSON file, to be displayed on the interface when the player takes a photo of that species.",
                        reference: 'https://github.com/Leonardo-chagas/Imerso-no-Mar-Dados',
                        hasLink: true,
                        linkText: 'Repository for this project',
                        image: 'images/GamePhoto.JPG'
                    },
                ],
                Contact: {
                    phone: 'Phone Number'
                }
            },
        }
    }
})