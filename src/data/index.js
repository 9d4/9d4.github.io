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
    buildTools: {
        name: "Build Tools",
        lists: {
            vite: { name: "Vite", icon: "/assets/icons/vitejs.svg" }
        }
    },
    framework: {
        name: "Web Framework",
        lists: {
            laravel: { name: "Laravel", icon: "/assets/icons/laravel.svg" }
        }
    },
    iot: {
        name: "Internet of Thing",
        lists: {
            arduino: { name: "Arduino", icon: "/assets/icons/arduino.svg" }
        }
    },
    languages: {
        name: "Languages",
        lists: {
            c: { name: "C", icon: "/assets/icons/c.svg" },
            cpp: { name: "C++", icon: "/assets/icons/c-plusplus.svg" },
            go: { name: "Go", icon: "/assets/icons/go.svg" },
            javascript: { name: "Javascript", icon: "/assets/icons/javascript.svg" },
            php: { name: "PHP", icon: "/assets/icons/php.svg" },
        }
    },
    services: {
        name: "Services",
        lists: {
            github: { name: "Github", icon: "/assets/icons/github-icon.svg" },
            ifttt: { name: "IFTTT", icon: "/assets/icons/ifttt.svg" },
        }
    },
    ui: {
        name: "UI Framework",
        lists: {
            vue: { name: "Vue.js", icon: "/assets/icons/vue.svg" }
        }
    },
    virtualization: {
        name: "Virtualization",
        lists: {
            docker: { name: "Docker", icon: "/assets/icons/docker-icon.svg" }
        }
    },
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
