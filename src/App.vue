<template>
  <div id="app">
    <popularMoviesList />
    <topRatedMoviesList />
    <movie-search-app />
  </div>
</template>

<script>
//import HelloWorld from './components/HelloWorld.vue'
import PopularMoviesList from "./components/PopularMoviesList";
import TopRatedMoviesList from "./components/TopRatedMoviesList";
import MovieSearchApp from "./components/MovieSearchApp.vue";

export default {
  name: 'app',
  components: {
    /* HelloWorld, */ PopularMoviesList, TopRatedMoviesList, MovieSearchApp
  }
}
</script>

<style>

</style>
