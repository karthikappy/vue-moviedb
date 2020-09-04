<template>
  <mdb-container>
    <div id="app">
      <popularMoviesList />
      <topRatedMoviesList />
      <movie-search-app />
      <PopularTVList/>
      <topRatedTVList />
    </div>
  </mdb-container>
</template>

<script>
//import HelloWorld from './components/HelloWorld.vue'
import PopularMoviesList from "./components/PopularMoviesList";
import TopRatedMoviesList from "./components/TopRatedMoviesList";
import MovieSearchApp from "./components/MovieSearchApp.vue";
import PopularTVList from "./components/PopularTVList";
import TopRatedTVList from "./components/TopRatedTVList";

import {mdbContainer} from 'mdbvue';

export default {
  name: 'app',
  components: {
    /* HelloWorld, */ PopularMoviesList, TopRatedMoviesList, MovieSearchApp, PopularTVList, TopRatedTVList,
    mdbContainer
  }
}
</script>

<style>

</style>
