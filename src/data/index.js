import HomePage from "../components/Pages/HomePage/index.vue"
import WritingsPage from "../components/Pages/WritingsPage/index.vue"
import WritingsSinglePage from "../components/Pages/WritingsSinglePage/index.vue"
import AboutPage from "../components/Pages/AboutPage/index.vue"
import NotFound from "../components/Partials/NotFound/index.vue"

export const routes = [
    { path: "/", component: HomePage },
    { path: "/writings", component: WritingsPage },
    { path: "/writings/:slug", component: WritingsSinglePage },
    { path: "/about", component: AboutPage },
    { path: '/:pathMatch(.*)*', name: 'NotFound', component: NotFound },
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
            cpp: { name: "C/C++", icon: "/assets/icons/c-plusplus.svg" },
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

export const pages = {
    home: {},
    writings: {
        title: "Writings",
        description: "Tempatku mencatat dan menuangkan hal-hal yang ingin kusimpan.",
        notFoundMessage: "Tulisan tidak ditemukan! Bisa jadi sudah dihapus atau link tidak tepat.",
        notFoundEmoticons: ["🤔", "😕", "😔", "😭", "😟", "😦", "🤷‍♀️", "🤷‍♂️"],
    },
    about: {
        title: "About me",
        description: "Yess, me! In a nutshell."
    }
}

export const contents = {
    about: "/contents/about/about.md",
    writings: [
        {
            title: "Test Test <h>1</h1>",
            date: "2022-03-13 08:09",
            content: "/contents/test.md",
            slug: "test",
        }
    ],
}
