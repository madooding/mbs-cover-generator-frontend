<template>
  <div id="app">
    <Main id="main"></Main>
  </div>
</template>

<script>
import Main from './components/Main'
export default {
  data: () => ({
    msg: "Fuck"
  }),
  components: {
    Main
  },
  mounted () {
    console.log(this.$el)
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
