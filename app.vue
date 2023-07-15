<script setup lang="ts">
import { useSessionStore } from '@/store/session-store';

const router = useRouter();

const routes = router.getRoutes();

const store = useSessionStore();
store.hydrateSession();
</script>

<template>
  <NuxtLayout>
    <div>

      <div v-if="store.session.user">
        {{ store.session.user?.name }}

        <img class="w-20 rounded-full" :src="store.session.user?.image || ''" alt="avatar" />

        {{ store.session.user?.email }}
      </div>

      <UtilBadge />
      <div class="my-4">
        <NuxtLink v-for="route in routes" :key="route.name" :to="route.path" class="mr-5 my-2">
          {{ route.name }}
        </NuxtLink>
      </div>

      <NuxtPage />
    </div>
  </NuxtLayout>
</template>

<style>
.page-enter-active,
.page-leave-active {
  transition: all 0.4s;
}

.page-enter-from,
.page-leave-to {
  opacity: 0;
  filter: blur(1rem);
}
</style>
