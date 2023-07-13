<template>
    <div id="default-layout">
        <main>
            <slot />
        </main>
    </div>
</template>

<style scoped>
#default-layout {
    @apply flex flex-row w-full justify-center;
}

main {
    @apply text-left flex-1 max-w-2xl;
}
</style>

