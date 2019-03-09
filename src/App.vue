<template>
  <div id="app">
    <popularMoviesList />
    
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import PopularMoviesList from "./components/PopularMoviesList";

export default {
  name: 'app',
  components: {
    HelloWorld, PopularMoviesList
  }
}
</script>

<style>

</style>
