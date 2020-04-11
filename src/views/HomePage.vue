<template>
  <h1 class="pt-3">Welcome back {{User.username}}!</h1>  
</template>

<script>
import auth from '@/mixins/auth'
export default {
    mixins: [auth],
}
</script>

<style>

</style>