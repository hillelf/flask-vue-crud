<template>
  <div id="app">
    <router-view/>
		<hello-world />
  </div>
</template>

<script>
export default {
  name: 'app'
}
</script>

<style>
#app {
  margin-top: 60px
}
</style>