<template>
  <div id="app">
    <main-container id="main"/>
  </div>
</template>

<script>
import MainContainer from './components/Main'
export default {
  components: {
    MainContainer
  }
}
</script>

<style scoped>
    div#app {
        height: 100vh;
        display: flex;
        align-items: center;
        justify-content: center;
    }
    #main {
        vertical-align: middle;
    }
</style>
