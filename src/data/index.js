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
    desciption: "IoT Maker | Front-End Developer | Back-End Developer | Software Engineer | Electrician ",
    role: "Software and Web Developer",
    speaks: [
        { lang: "Indonesia", flag: "🇮🇩" },
        { lang: "Javanese", flag: "🇮🇩" },
        { lang: "English", flag: "🇺🇸" },
    ]
}

export const techStacks = {
    services: {
        name: "Services",
        lists: {
            github: { name: "Github", icon: "/assets/icons/github-icon.svg" }
        }
    }
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
