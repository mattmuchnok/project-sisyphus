<script setup lang="ts">
import { usePrayerStore } from '@/store/prayer-store';

const store = usePrayerStore();
store.getPrayers();
</script>

<template>
    <div>
        <h2 class="my-2">
            Prayers
        </h2>
        <div>

        </div>
        <div>
            <a href="https://ui.nuxtlabs.com/layout/card" class="text-green-500">Cards</a>
            <UCard v-for="prayer of store.prayers">
                <template #header>
                    {{ prayer.for }}
                </template>
                {{ prayer.text }}
                <template #footer>
                    Ok
                </template>
            </UCard>
        </div>
    </div>
</template>

<style scoped></style>