<script setup lang="ts">
const thing: Ref<string> = ref("prayers")
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
            <UCard>
                <template #header>
                    Hunter
                </template>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore aperiam nobis quia ut ullam, quos, iste
                ipsum ad nihil vel accusantium iure inventore error nulla aliquam at libero illum. Recusandae!
                <template #footer>
                    Ok
                </template>
            </UCard>
        </div>
    </div>
</template>

<style scoped></style>