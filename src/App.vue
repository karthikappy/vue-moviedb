<template>
  <div id="app">
    <popularMoviesList />
    <topRatedMoviesList />
    
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import PopularMoviesList from "./components/PopularMoviesList";
import TopRatedMoviesList from "./components/TopRatedMoviesList";

export default {
  name: 'app',
  components: {
    HelloWorld, PopularMoviesList, TopRatedMoviesList
  }
}
</script>

<style>

</style>
