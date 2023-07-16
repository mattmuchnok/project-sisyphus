<script setup lang="ts">
const thing: Ref<string> = ref("dashboard")
</script>

<template>
    <div>
        {{ thing }}
    </div>
</template>

<style scoped></style>