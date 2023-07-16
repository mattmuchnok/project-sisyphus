<script setup lang="ts">
const thing: Ref<string> = ref("finances")
</script>

<template>
    <div>
        {{ thing }}
    </div>
</template>

<style scoped></style>