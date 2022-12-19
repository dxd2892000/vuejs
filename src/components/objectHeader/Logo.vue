<template>
  <img src="@/assets/codLuck.png" height="60px" @click="homeRouter" />
</template>

<script>
export default {
name: 'Logo',
methods: {
  homeRouter() {
    this.$router.push('/');
  }
}
}
</script>

<style>
</style>