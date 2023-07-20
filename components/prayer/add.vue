<script setup lang="ts">
import { initFlowbite, Modal, ModalInterface } from 'flowbite';
import { usePrayerStore } from '@/store/prayer-store';
import { useSessionStore } from '@/store/session-store';
import { Prayer } from '@/types/supabase-tables';

const prayerStore = usePrayerStore();
const sessionStore = useSessionStore();

const prayer: Prayer = ref({
    user_id: sessionStore.user?.id
})

const modal = ref<ModalInterface>();

onMounted(() => {
    initFlowbite();

    const modalOptions = {};
    const $modalElement = document.querySelector('#addPrayerModal');

    if ($modalElement) {
        modal.value = new Modal($modalElement as HTMLElement, modalOptions);
    }
})

const add = async () => {
    try {
        await prayerStore.upsertPrayer(prayer.value);
        modal.value?.hide();
        reset();
    } catch (error) {
        console.error(error);
    }
}

const close = () => {
    modal.value?.hide();
    reset();
}

const reset = () => {
    prayer.value = {
        user_id: sessionStore.user?.id
    }
}
</script>

<template>
    <div>
        <!-- Modal toggle -->
        <button data-modal-target="addPrayerModal" data-modal-toggle="addPrayerModal" id="addButton" class="primary"
            type="button">
            Add Prayer
        </button>

        <!-- Main modal -->
        <div id="addPrayerModal" tabindex="-1" aria-hidden="true"
            class="fixed top-0 left-0 right-0 z-50 hidden w-full p-4 overflow-x-hidden overflow-y-auto md:inset-0 h-[calc(100%-1rem)] max-h-full">
            <div class="relative w-full max-w-2xl max-h-full">
                <!-- Modal content -->
                <div class="relative bg-white rounded-lg shadow dark:bg-gray-700">
                    <!-- Modal header -->
                    <div class="flex items-start justify-between p-4 border-b rounded-t dark:border-gray-600">
                        <h3 class="text-xl font-semibold text-gray-900 dark:text-white">
                            Add Prayer
                        </h3>
                        <button type="button"
                            class="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ml-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white"
                            data-modal-hide="addPrayerModal" @click="close()">
                            <svg class="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none"
                                viewBox="0 0 14 14">
                                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                    d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6" />
                            </svg>
                            <span class="sr-only">Close modal</span>
                        </button>
                    </div>
                    <!-- Modal body -->
                    <div class="p-6 space-y-6">
                        <form>
                            <div class="mb-6">
                                <label for="for" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Who or
                                    what would you like to pray for?</label>
                                <input type="for" id="for"
                                    class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                    placeholder="" v-model="prayer.for" required>
                            </div>
                            <label for="message"
                                class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Note</label>
                            <textarea id="message" rows="4"
                                class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                placeholder="Enter a note..." v-model="prayer.text" required></textarea>
                        </form>
                    </div>
                    <!-- Modal footer -->
                    <div
                        class="flex flex-col items-end p-6 space-x-2 border-t border-gray-200 rounded-b dark:border-gray-600">
                        <div class="flex">
                            <button data-modal-hide="addPrayerModal" type="button" class="secondary" @click="close()">
                                Cancel </button>
                            <button data-modal-hide="addPrayerModal" type="button" class="primary ml-4" @click="add()"> Add
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped></style>