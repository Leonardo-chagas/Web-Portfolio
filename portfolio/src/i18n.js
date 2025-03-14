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
                    text: 'Mestre formado no Programa de Pós-Graduação em Computação (PPGComp) da Universidade Federal do Rio Grande (FURG).',
                    education: 'Educação',
                    college: 'Universidade Federal do Rio Grande (FURG)',
                    course: 'Graduação no curso de Engenharia da Computação',
                    masters: 'Mestrado no Programa de Pós-Graduação em Computação (PPGComp)'
                },
                Skills: {
                    skills: 'Competências'
                },
                Projects: [
                    {
                        name: 'Portfolio Web',
                        tecnology: 'React',
                        text: '',
                        reference: 'https://github.com/Leonardo-chagas/Web-Portfolio',
                        hasLink: true,
                        image: ''
                    },
                    {
                        name: 'Aplicativo Mobile',
                        tecnology: 'React Native',
                        text: '',
                        reference: 'https://github.com/Leonardo-chagas/planalto-front-viagens',
                        hasLink: true,
                        image: ''
                    },
                    {
                        name: 'Jogo de Cartas',
                        tecnology: 'Unity',
                        text: '',
                        reference: 'https://github.com/Leonardo-chagas/Code_In_Hand',
                        hasLink: true,
                        image: 'images/Game2.png'
                    },
                    {
                        name: '',
                        tecnology: '',
                        text: '',
                        reference: '',
                        hasLink: false,
                        image: ''
                    },
                ],
                Contact: {

                }
            },
        },
        en: {
            translation: {
                Navbar: {
                    about: 'About',
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
                    text: 'Master formed in the Graduate Program in Computing (PPGComp) of the Federal University of Rio Grande (FURG).',
                    education: 'Education',
                    college: 'Federal University of Rio Grande (FURG)',
                    course: 'Graduation in Computer Engineering',
                    masters: "Master's degree in the Graduate Program in Computing (PPGComp)"
                },
                Skills: {
                    skills: 'Skills'
                },
                Projects: {
                    project1: {
                        name: 'Web Portfolio',
                        tecnology: 'React',
                        text: '',
                        reference: 'https://github.com/Leonardo-chagas/Web-Portfolio',
                        hasLink: true,
                        image: ''
                    },
                    project2: {
                        name: 'Mobile App',
                        tecnology: 'React Native',
                        text: '',
                        reference: 'https://github.com/Leonardo-chagas/planalto-front-viagens',
                        hasLink: true,
                        image: ''
                    },
                    project3: {
                        name: 'Card game',
                        tecnology: 'Unity',
                        text: '',
                        reference: 'https://github.com/Leonardo-chagas/Code_In_Hand',
                        hasLink: true,
                        image: 'images/Game2.png'
                    },
                    project4: {
                        name: '',
                        tecnology: '',
                        text: '',
                        reference: '',
                        hasLink: false,
                        image: ''
                    },
                },
                Contact: {

                }
            },
        }
    }
})