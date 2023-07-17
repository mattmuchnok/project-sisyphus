<script setup lang="ts">
import { useSessionStore } from '@/store/session-store';

const router = useRouter();
const session = useSessionStore();

watchEffect(() => {
    if (session.user) {
        router.push('/dashboard');
    }
});
</script>

<template>
    <div class="flex flex-row w-full max-w-3xl m-auto">
        <div class="flex-shrink self-center cursor-pointer">
            <div class="h-full text-center">
                <UButton @click="session.signIn()" color="white">
                    Log In
                </UButton>
                <UButton @click="session.signIn()" class="ml-3">
                    Sign Up
                </UButton>
            </div>
        </div>
    </div>
</template>