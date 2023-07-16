<script setup lang="ts">

const links = [{
    label: 'Prayers',
    to: '/faith/prayers'
}, {
    label: 'Devotional Journal',
    to: '/faith/devotional'
}, {
    label: 'Acts of Service',
    to: '/faith/acts-of-service'
}];

</script>

<template>
    <div>
        <h1 class="my-2">
            Faith
        </h1>
        <div>
            <UVerticalNavigation :links="links" />
        </div>
        <div class="my-4 mx-3">
            <NuxtPage />
        </div>
    </div>
</template>

<style scoped></style>