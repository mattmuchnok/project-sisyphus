<script setup lang="ts">
  const name: Ref<string> = ref("Hunter");
</script>

<template>
    <div>
        <h1>Sign Up</h1>
        <p>My name is {{ name }}</p>
    </div>
</template>