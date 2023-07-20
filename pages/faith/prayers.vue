<script setup lang="ts">
import { usePrayerStore } from '@/store/prayer-store';
import { TrashIcon } from '@heroicons/vue/24/outline';
import { Prayer } from '@/types/supabase-tables';

const store = usePrayerStore();
store.getPrayers();

const remove = async (prayer: Prayer) => {
    await store.deletePrayer(prayer);
}

const results = await store.searchPrayers('test');
console.log(results);
</script>

<template>
    <div>
        <PrayerAdd />

        <ul role="list" class="divide-y divide-gray-100">
            <li v-for="prayer in store.prayers" :key="prayer.id" class="flex justify-between gap-x-6 py-5">
                <div class="flex gap-x-4">
                    <div class="min-w-0 flex-auto">
                        <p class="text-sm font-semibold leading-6 text-gray-900">{{ prayer.for }}</p>
                        <p class="mt-1 truncate text-xs leading-5 text-gray-500">{{ prayer.text }}</p>
                    </div>
                </div>
                <div class="hidden sm:flex sm:flex-col sm:items-end">
                    <button class="secondary" @click="remove(prayer)">
                        <TrashIcon class="w-4 h-4" aria-hidden="true" />
                    </button>
                </div>
            </li>
        </ul>
    </div>
</template>

<style scoped></style>