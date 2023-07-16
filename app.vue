<script setup lang="ts">
import { useSessionStore } from '@/store/session-store';
const store = useSessionStore();

store.hydrateSession();

const dashboardLinks = [
  {
    label: 'Dashboard',
    icon: 'i-heroicons-home',
    to: '/dashboard'
  },
  {
    label: 'Getting Started',
    icon: 'i-heroicons-rocket-launch',
    to: '/getting-started'
  }
];

const appLinks = [{
  label: 'Faith',
  icon: 'i-heroicons-book-open',
  to: '/faith'
}, {
  label: 'Family',
  icon: 'i-heroicons-user-circle',
  to: '/family'
}, {
  label: 'Friends',
  icon: 'i-heroicons-user',
  to: '/friends'
}, {
  label: 'Finances',
  icon: 'i-heroicons-credit-card',
  to: '/finances'
}, {
  label: 'Fitness',
  icon: 'i-heroicons-heart',
  to: '/fitness'
},
{
  label: 'Function',
  icon: 'i-heroicons-cog-6-tooth',
  to: '/function'
}];

const profileLinks = [{
  label: 'Profile',
  avatar: {
    src: store.session.user?.image ?? '',
  },
  to: '/profile'
}];
</script>

<template>
  <NuxtLayout>
    <div class="full-container border-b border-b-gray-200">
      <AppBar class="full-main" />
    </div>

    <div class="full-container">
      <main class="full-main flex flex-row gap-4 flex-wrap">
        <section class="flex-shrink min-w-[15%] pr-3">
          <UVerticalNavigation :links="dashboardLinks" />
          <hr class="my-3" />
          <UVerticalNavigation :links="appLinks" />
          <hr class="my-3" />
          <UVerticalNavigation :links="profileLinks" />
        </section>
        <section class="flex-grow">
          <NuxtPage />
        </section>
      </main>
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

.full-container {
  @apply flex flex-row w-full justify-center;
}

.full-main {
  @apply text-left flex-1 max-w-6xl py-3 px-3;
}
</style>
