<script setup lang="ts">
definePageMeta({
    middleware: 'auth'
})
</script>

<template>
    <div>
        <h2 class="my-2">
            Function
        </h2>
        <ul>
            <li>
                pets: meds, vet
            </li>
            <li>
                shopping: groceries, clothes, etc
            </li>
            <li>
                cleaning: house, car, bathrooms, bed sheets, clothes, dishes
            </li>
            <li>
                house: repairs, maintenance, etc, address history
            </li>
            <li>
                car: repairs, maintenance, etc
            </li>
        </ul>
    </div>
</template>

<style scoped></style>