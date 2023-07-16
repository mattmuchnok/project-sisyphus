<script setup lang="ts">
import { useSessionStore } from '@/store/session-store';

const store = useSessionStore();
</script>

<template>
    <div>
        <h2 class="my-2">
            Profile
        </h2>
        <div class="flex items-center space-x-4" v-if="!store.session.user">
            <USkeleton class="h-12 w-12 rounded-full" />
            <div class="space-y-2">
                <USkeleton class="h-4 w-[250px]" />
                <USkeleton class="h-4 w-[200px]" />
            </div>
        </div>

        <div v-if="store.session.user">
            <div>
                <UAvatar :src="store.session.user?.image ?? ''" size="3xl" alt="avatar" class="align-middle" />
            </div>
            <div class="pt-2">
                <h2 class=" text-green-500">
                    Name
                </h2>
                <div>
                    {{ store.session.user?.name ?? '-' }}
                </div>
            </div>
            <div class="pt-2">
                <h2 class=" text-green-500">
                    Email
                </h2>
                <div>
                    {{ store.session.user?.email ?? '-' }}
                </div>
            </div>
            <div class="pt-4">
                <UButton @click="store.signOut()">
                    Sign Out
                </UButton>
            </div>
        </div>
    </div>
</template>

<style scoped></style>