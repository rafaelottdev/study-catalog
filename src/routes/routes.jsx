import { createBrowserRouter } from "react-router-dom"

import App from "../App"
import MainContent from "../layouts/Main/MainContent/MainContent"


import ProjectsPage from "../pages/ProjectsPage/ProjectsPage"
import Working from "../pages/Working/Working"
import Blog from "../pages/Blog/Blog"
import BlogPost from "../pages/Blog/BlogPost/BlogPost"
import Community from "../pages/Community/Community"

import Study from "../pages/Study/Study"
import Intro from "../pages/Study/StudyContent/Intro/Intro"

import HtmlCss from "../pages/Study/StudyContent/HtmlCss/HtmlCss"
    import HtmlCssCursos from "../pages/Study/StudyContent/HtmlCss/Cursos/HtmlCssCursos"
    import HtmlCssEspecificos from "../pages/Study/StudyContent/HtmlCss/Especificos/HtmlCssEspecificos"
        import Modulo1 from "../pages/Study/StudyContent/HtmlCss/Cursos/Modulos/Modulo1/Modulo1"
        import Modulo2 from "../pages/Study/StudyContent/HtmlCss/Cursos/Modulos/Modulo2/Modulo2"
        import Modulo3 from "../pages/Study/StudyContent/HtmlCss/Cursos/Modulos/Modulo3/Modulo3"
        import Modulo4 from "../pages/Study/StudyContent/HtmlCss/Cursos/Modulos/Modulo4/Modulo4"
        import Modulo5 from "../pages/Study/StudyContent/HtmlCss/Cursos/Modulos/Modulo5/Modulo5"

import Javascript from "../pages/Study/StudyContent/Javascript/Javascript"
    import JsCursos from "../pages/Study/StudyContent/Javascript/Cursos/JsCursos"
    import JsEspecificos from "../pages/Study/StudyContent/Javascript/Especificos/JsEspecificos"

import Typescript from "../pages/Study/StudyContent/Typescript/Typescript"
    import TsCursos from "../pages/Study/StudyContent/Typescript/Cursos/TsCursos"
    import TsDocs from "../pages/Study/StudyContent/Typescript/Documentações/TsDocs"

import React from "../pages/Study/StudyContent/React/React"
    import ReactCursos from "../pages/Study/StudyContent/React/Cursos/ReactCursos"
    import ReactPratica from "../pages/Study/StudyContent/React/Pratica/ReactPratica"

import Vue from "../pages/Study/StudyContent/Vue/Vue"
    import VueCursos from "../pages/Study/StudyContent/Vue/Cursos/VueCursos"
    import VuePratica from "../pages/Study/StudyContent/Vue/Pratica/VuePratica"

import Git from "../pages/Study/StudyContent/Git/Git"
    import GitCursos from "../pages/Study/StudyContent/Git/Cursos/GitCursos"

import Linux from "../pages/Study/StudyContent/Linux/Linux"
    import LinuxCursos from "../pages/Study/StudyContent/Linux/Cursos/LinuxCursos"

import Outros from "../pages/Study/StudyContent/Outros/Outros"

import Recommendations from "../pages/Recommendations/Recommendations"
    import Videos from "../pages/Recommendations/RecommendationContent/Videos/Videos"
    import Canais from "../pages/Recommendations/RecommendationContent/Canais/Canais"
    import Sites from "../pages/Recommendations/RecommendationContent/Sites/Sites"
    import Ferramentas from "../pages/Recommendations/RecommendationContent/Ferramentas/Ferramentas"
    import Plataformas from "../pages/Recommendations/RecommendationContent/Plataformas/Plataformas"
    import Livros from "../pages/Recommendations/RecommendationContent/Livros/Livros"
    import Cursos from "../pages/Recommendations/RecommendationContent/Cursos/Cursos"
    import Inspirações from "../pages/Recommendations/RecommendationContent/Inspirações/Inspirações"
    import Imagens from "../pages/Recommendations/RecommendationContent/Imagens/Imagens"

export const router = createBrowserRouter(
    [
        {
            path: "/*",
            element: <App />,
            children: [
                {path: "", element: <MainContent />},

                {
                    path: "estudando", 
                    element: <Study />,
                    children: [
                        { index: true, element: <Intro /> },

                        {path: "htmlcss", element: <HtmlCss />},
                            {path: "htmlcss/cursos", element: <HtmlCssCursos />},
                            {path: "htmlcss/cursos/cev/modulo1", element: <Modulo1 />},
                            {path: "htmlcss/cursos/cev/modulo2", element: <Modulo2 />},
                            {path: "htmlcss/cursos/cev/modulo3", element: <Modulo3 />},
                            {path: "htmlcss/cursos/cev/modulo4", element: <Modulo4 />},
                            {path: "htmlcss/cursos/cev/modulo5", element: <Modulo5 />},
                            {path: "htmlcss/especificos", element: <HtmlCssEspecificos />},

                        {path: "javascript", element: <Javascript />},
                            {path: "javascript/cursos", element: <JsCursos />},
                            {path: "javascript/especificos", element: <JsEspecificos />},

                        {path: "typescript", element: <Typescript />},
                            {path: "typescript/cursos", element: <TsCursos />},
                            {path: "typescript/docs", element: <TsDocs />},

                        {path: "react", element: <React />},
                            {path: "react/cursos", element: <ReactCursos />},
                            {path: "react/pratica", element: <ReactPratica />},

                        {path: "vue", element: <Vue />},
                            {path: "vue/cursos", element: <VueCursos />},
                            {path: "vue/pratica", element: <VuePratica />},

                        {path: "git", element: <Git />},
                            {path: "git/cursos", element: <GitCursos />},

                        {path: "linux", element: <Linux />},
                            {path: "linux/cursos", element: <LinuxCursos />},

                        {path: "outros", element: <Outros />}
                    ]
                },

                {path: "projetos", element: <ProjectsPage />},

                {
                    path: "recomendações", 
                    element: <Recommendations />,
                    children: [
                        {index: true, element: <Videos />},
                        {path: "canais", element: <Canais />},
                        {path: "sites", element: <Sites />},
                        {path: "ferramentas", element: <Ferramentas />},
                        {path: "plataformas", element: <Plataformas />},
                        {path: "livros", element: <Livros />},
                        {path: "cursos", element: <Cursos />},
                        {path: "inspiracoes", element: <Inspirações />},
                        {path: "imagens", element: <Imagens />}
                    ]
                },

                {path: "trabalhando", element: < Working/>},
                {path: "blog", element: < Blog/>},
                {path: "blog/:slug", element: <BlogPost />},

                {path: "comunidade", element: <Community />}
            ]
        }
    ]
)
