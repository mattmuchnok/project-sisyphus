<script setup lang="ts">
import { useSessionStore } from '@/store/session-store';

const store = useSessionStore();
</script>

<template>
    <div>
        <h2 class="my-2">
            Profile
        </h2>

        <div v-if="store.user">
            <div>
                <img :src="store.user.user_metadata.avatar_url ?? ''" size="3xl" alt="avatar" class="align-middle" />
            </div>
            <div class="pt-2">
                <h2 class=" text-green-500">
                    Name
                </h2>
                <div>
                    {{ store.user.user_metadata.name ?? '-' }}
                </div>
            </div>
            <div class="pt-2">
                <h2 class=" text-green-500">
                    Email
                </h2>
                <div>
                    {{ store.user.user_metadata.email ?? '-' }}
                </div>
            </div>
            <div class="pt-4">
                <button @click="store.signOut()">
                    Sign Out
                </button>
            </div>
        </div>
    </div>
</template>

<style scoped></style>