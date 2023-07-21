<script setup lang="ts">
import { useSessionStore } from '@/store/session-store';

const sessionStore = useSessionStore();
const layout = ref('default');

watchEffect(() => {
  if (!sessionStore.user) {
    layout.value = 'public';
  } else {
    layout.value = 'default';
  }
});
</script>

<template>
  <NuxtLayout :name="layout">
    <NuxtPage />
  </NuxtLayout>
</template>

<style>
.profile-menu-item {
  @apply block px-3 py-1 text-sm leading-6 text-gray-900
}
</style>
