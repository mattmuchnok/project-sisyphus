<script setup lang="ts">
const name: Ref<string> = ref("Hunter");

const { signIn } = useAuth()

await signIn(undefined, {
  callbackUrl: '/'
}) // Sign in the user
</script>

<template>
  <div>
    <h1>Log In</h1>
    <p>My name is {{ name }}</p>
  </div>
</template>