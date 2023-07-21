<script setup lang="ts">
import { useSessionStore } from '@/store/session-store';

const router = useRouter();
const sessionStore = useSessionStore();
</script>

<template>
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>

<style>
.profile-menu-item {
  @apply block px-3 py-1 text-sm leading-6 text-gray-900
}
</style>
