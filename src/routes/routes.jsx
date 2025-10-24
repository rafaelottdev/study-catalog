import { createBrowserRouter } from "react-router-dom"

import App from "../App"
import MainContent from "../layouts/Main/MainContent/MainContent"

import Study from "../pages/Study/Study"
import Projects from "../pages/Projects/Projects"
import Recommendations from "../pages/Recommendations/Recommendations"
import Working from "../pages/Working/Working"
import Blog from "../pages/Blog/Blog"
import Community from "../pages/Community/Community"

import StudyContent from "../pages/Study/StudyContent/StudyContent"
import Intro from "../pages/Study/StudyContent/Intro/Intro"


export const router = createBrowserRouter(
    [
        {
            path: "/*",
            element: <App />,
            children: [
                {path: "", element: <MainContent />},
                {path: "estudando", element: <Study />,
                    children: [
                        { index: true, element: <Intro /> }
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
