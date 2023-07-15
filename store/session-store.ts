import { Session } from "next-auth";

export const useSessionStore = defineStore('session', () => {
    const session: Ref<Session> = ref({
        user: undefined,
        expires: Date.now().toString()
    });

    async function hydrateSession(): Promise<void> {
        const response = await useFetch('/api/auth/session');

        session.value = response.data.value as Session;
    }

    return { session, hydrateSession };
})