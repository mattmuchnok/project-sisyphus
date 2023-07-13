<script setup lang="ts">
const { data: getData } = await useFetch('/api/hello-world');
console.log((getData.value as any).hello);

const { data: postData } = await useFetch('/api/hello-world', {
  method: "POST",
  body: null
});
console.log((postData.value as any).hello);

const { status, data } = useAuth()
console.log(status, data);

</script>

<template>
  <div>
    <h1>Hello World</h1>
  </div>
</template>