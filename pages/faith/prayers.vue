<script setup lang="ts">
const client = useSupabaseClient()


let { data: prayers, error } = await client
    .from('prayer')
    .select('*')

if (error) {
    console.error(error);
}

// const prayers = data as any[];

console.log(prayers);
</script>

<template>
    <div>
        <h2 class="my-2">
            Prayers
        </h2>
        <div>
            <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio cupiditate doloremque quibusdam delectus
                tempora
                voluptates dignissimos quis, nemo non odit dicta tempore? Rerum sit, distinctio atque porro laborum
                perferendis
                voluptas!
            </p>
        </div>
        <div>
            <a href="https://ui.nuxtlabs.com/layout/card" class="text-green-500">Cards</a>
            <UCard v-for="prayer of prayers">
                <template #header>
                    {{ prayer.id }}
                </template>
                {{ prayer.text }}
                <template #footer>
                    Ok
                </template>
            </UCard>
        </div>
    </div>
</template>

<style scoped></style>