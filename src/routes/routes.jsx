import { createBrowserRouter } from "react-router-dom"

import App from "../App"
import MainContent from "../layouts/Main/MainContent/MainContent"

import Study from "../pages/Study/Study"
import Projects from "../pages/Projects/Projects"
import Recommendations from "../pages/Recommendations/Recommendations"
import Working from "../pages/Working/Working"
import Blog from "../pages/Blog/Blog"
import Community from "../pages/Community/Community"


export const router = createBrowserRouter(
    [
        {
            path: "/*",
            element: <App />,
            children: [
                {path: "", element: <MainContent />},

                {path: "estudando", element: <Study />},
                {path: "projetos", element: < Projects/>},
                {path: "recomendações", element: < Recommendations/>},
                {path: "trabalhando", element: < Working/>},
                {path: "blog", element: < Blog/>},
                {path: "comunidade", element: < Community/>}
            ]
        }
    ]
)
