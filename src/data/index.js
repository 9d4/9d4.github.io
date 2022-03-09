import HomePage from "../components/Pages/HomePage/index.vue"
import AboutPage from "../components/Pages/AboutPage/index.vue"

export const routes = [
    { path: "/", component: HomePage },
    { path: "/about", component: AboutPage },
]

export const personalInformation = {
    name: "Dimas Ananda Putra Perdana",
    nickname: "traper",
    pictureUrl: "https://avatars.githubusercontent.com/u/52043756",
    location: "Central Java, Indonesia",
    desciption: "Software and Web Developer | IoT Maker"
}

export const navigation = {
    title: "Dimas Ananda Putra Perdana",
    navs: [
        {
            name: "home",
            url: "/",
        },
        {
            name: "writings",
            url: "/writings",
        },
        {
            name: "about",
            url: "/about",
        }
    ]
}
