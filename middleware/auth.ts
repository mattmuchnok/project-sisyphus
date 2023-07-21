import { useSessionStore } from "@/store/session-store";

export default defineNuxtRouteMiddleware((to, from) => {
    const sessionStore = useSessionStore();

    if (!sessionStore.user) {
        return navigateTo('/');
    }
})