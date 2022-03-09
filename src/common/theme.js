import { onMounted } from "vue"

export async function setTheme(theme) {
    if (theme === "dark") {
        document.body.classList.add("dark");
        return;
    }

    document.body.classList.remove("dark");
}

export function getSystemScheme() {
    if (
        window.matchMedia &&
        window.matchMedia("(prefers-color-scheme: dark)").matches
    ) {
        return "dark";
    }
    
    return "light";
}

export async function toggleTheme() {
    setTheme(getSystemScheme())
};

export function useTheme() {
    onMounted(() => {
        toggleTheme();
    });
}