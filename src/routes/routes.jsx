import { createBrowserRouter } from "react-router-dom"

import App from "../App"
import MainContent from "../layouts/Main/MainContent/MainContent"

import Study from "../pages/Study/Study"
import Projects from "../pages/Projects/Projects"
import Recommendations from "../pages/Recommendations/Recommendations"
import Working from "../pages/Working/Working"
import Blog from "../pages/Blog/Blog"
import Community from "../pages/Community/Community"

import Intro from "../pages/Study/StudyContent/Intro/Intro"
import HtmlCss from "../pages/Study/StudyContent/HtmlCss/HtmlCss"
import Javascript from "../pages/Study/StudyContent/Javascript/Javascript"
import Typescript from "../pages/Study/StudyContent/Typescript/Typescript"
import React from "../pages/Study/StudyContent/React/React"
import Vue from "../pages/Study/StudyContent/Vue/Vue"
import Git from "../pages/Study/StudyContent/Git/Git"
import Linux from "../pages/Study/StudyContent/Linux/Linux"
import Outros from "../pages/Study/StudyContent/Outros/Outros"


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
                        {path: "javascript", element: <Javascript />},
                        {path: "typescript", element: <Typescript />},
                        {path: "react", element: <React />},
                        {path: "vue", element: <Vue />},
                        {path: "git", element: <Git />},
                        {path: "linux", element: <Linux />},
                        {path: "outros", element: <Outros />}
                    ]
                },

                {path: "projetos", element: < Projects/>},
                {path: "recomendações", element: < Recommendations/>},
                {path: "trabalhando", element: < Working/>},
                {path: "blog", element: < Blog/>},
                {path: "comunidade", element: < Community/>}
            ]
        }
    ]
)
