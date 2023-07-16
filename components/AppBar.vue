<script setup lang="ts">
import { useSessionStore } from '@/store/session-store';

const store = useSessionStore();

const router = useRouter();
</script>

<template>
    <div class="flex flex-row w-full">
        <h1 class="flex-1 text-green-500">
            <NuxtLink to="/">project sisyphus</NuxtLink>
        </h1>
        <div class="flex-shrink self-center cursor-pointer">
            <div class="h-full" v-if="store.isLoggedIn" @click="router.push('/profile')">
                <UTooltip :text="store.session.user?.name ?? ''">
                    <UAvatar :src="store.session.user?.image ?? ''" alt="avatar" class="align-middle" />
                </UTooltip>
            </div>
            <div class="h-full" v-if="!store.isLoggedIn">
                <UButton @click="store.signIn()" color="white">
                    Log In
                </UButton>
                <UButton @click="store.signIn()" class="ml-3">
                    Sign Up
                </UButton>
            </div>
        </div>
    </div>
</template>

<style scoped></style>