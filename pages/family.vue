<script setup lang="ts">
const thing: Ref<string> = ref("family")
</script>

<template>
    <div>
        {{ thing }}
    </div>
</template>

<style scoped></style>