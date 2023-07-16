import { Session } from "next-auth";

export const useSessionStore = defineStore('session', () => {
    const session: Ref<Session> = ref({
        user: {},
        expires: Date.now().toString()
    });

    const isLoggedIn = computed(() => {
        return session.value.user !== undefined;
    });

    async function hydrateSession(): Promise<void> {
        const response = await useFetch('/api/auth/session');

        session.value = response.data.value as Session;
    }

    async function signIn(): Promise<void> {
        const { signIn } = useAuth();

        await signIn(undefined, {
            callbackUrl: '/'
        });

        await hydrateSession();
    }

    async function signOut(): Promise<void> {
        const { signOut } = useAuth();
        await signOut({ callbackUrl: '/' });

        session.value = {
            user: {},
            expires: Date.now().toString()
        };
    }

    return { session, isLoggedIn, hydrateSession, signIn, signOut };
})