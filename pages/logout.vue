<script setup lang="ts">
const router = useRouter()
const { signOut } = useAuth()

await signOut({ callbackUrl: '/' });

router.push('/');
</script>

<template>
    <div>
        <h1>Log out</h1>
    </div>
</template>