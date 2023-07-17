<script setup lang="ts">
import { usePrayerStore } from '@/store/prayer-store';

const store = usePrayerStore();
store.getPrayers();
</script>

<template>
    <div>
        <div>
            <a href="https://ui.nuxtlabs.com/layout/card" class="text-green-500">Cards</a>
            <div v-for="prayer of store.prayers">
                <div>
                    {{ prayer.for }}
                </div>
                <div>
                    {{ prayer.text }}
                </div>
                <div>
                    Ok
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped></style>