<script setup lang="ts">
const route = useRoute();
const rootPath = computed(() => {
    const root = '/' + route.path.split('/')[2];
    if (root === '/') return '--';

    return root;
});

const tabs = [
    { name: 'Prayers', href: '/faith/prayers' },
    { name: 'Devotional Journal', href: '/faith/devotional' },
    { name: 'Acts of Service', href: '/faith/acts-of-service' }
];
</script>

<template>
    <div>
        <h2 class="font-semibold text-green-500">
            Faith
        </h2>
        <div class="sm:hidden">
            <label for="tabs" class="sr-only">Select a tab</label>
            <!-- Use an "onChange" listener to redirect the user to the selected tab URL. -->
            <select id="tabs" name="tabs"
                class="block w-full rounded-md border-gray-300 py-2 pl-3 pr-10 text-base focus:border-green-500 focus:outline-none focus:ring-green-500 sm:text-sm">
                <option v-for="tab in tabs" :key="tab.name" :selected="tab.href.includes(rootPath)">{{ tab.name }}</option>
            </select>
        </div>
        <div class="hidden sm:block">
            <div class="border-b border-gray-200">
                <nav class="-mb-px flex space-x-8" aria-label="Tabs">
                    <a v-for="tab in tabs" :key="tab.name" :href="tab.href"
                        :class="[tab.href.includes(rootPath) ? 'border-green-500 text-green-600' : 'border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700', 'whitespace-nowrap border-b-2 py-4 px-1 text-sm font-medium']"
                        :aria-current="tab.href.includes(rootPath) ? 'page' : undefined">{{ tab.name }}</a>
                </nav>
            </div>
        </div>
        <NuxtPage class="mt-4" />
    </div>
</template>

<style scoped></style>