<script setup lang="ts">
const thing: Ref<string> = ref("friends")
</script>

<template>
    <div>
        {{ thing }}
    </div>
</template>

<style scoped></style>