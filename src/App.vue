<template>
  <div class="app">
    <Header/>
    <router-view></router-view>
  </div>
</template>

<script>
import Header from '@/components/Header'

export default {
  name: 'App',
  components: {
    Header
  }
}
</script>

<style lang="scss">
  @font-face {
    font-family: "Alegreya";
    font-weight: 400;
    src: local("Alegreya"), url("./fonts/Alegreya/Alegreya-Regular.ttf") format("truetype");
  }
  @font-face {
    font-family: "Alegreya";
    font-weight: 500;
    src: local("Alegreya"), url("./fonts/Alegreya/Alegreya-Bold.ttf") format("truetype");
  }
  .app {
    font-family: 'Alegreya', serif;
    font-weight: 400;
  }
</style> >

