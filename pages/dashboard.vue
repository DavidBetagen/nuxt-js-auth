<template>
    <div>
        Dashboard
        <div v-if="$auth.loggedIn">
          Hello {{ $auth.user.name }}
        </div>
    </div>
</template>

<script>
export default {
    middleware: "auth"
}
</script>
