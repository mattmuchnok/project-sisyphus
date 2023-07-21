export const useSessionStore = defineStore('session', () => {
    const router = useRouter()
    const user = useSupabaseUser()
    const client = useSupabaseAuthClient()

    async function signIn(): Promise<void> {
        const { error } = await client.auth.signInWithOAuth({ provider: 'github' })
        if (error) {
            console.error(error.message);
            return;
        }
    }

    async function signOut(): Promise<void> {
        const { error } = await client.auth.signOut()
        if (error) {
            console.error(error.message);
            return;
        }

        user.value = null;

        router.push('/');
    }

    return { user, signIn, signOut };
})