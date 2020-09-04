<template>
  <div class="popular-movies-list">
    <h1>Popular Movies</h1>
    <div v-if="searching">Searching...</div>
    <mdb-row>
      <resultCard v-for="movie in results" :key="movie.id" :movie="movie" />
    </mdb-row>
  </div>
</template>

<script>
import ResultCard from "./ResultCard.vue";
import {mdbRow} from 'mdbvue';

export default {
  components: {
    ResultCard, mdbRow
  },
  data() {
    return {
      searching: false,
      results: []
    };
  },
  created: function() {
    this.searching = true;
    fetch(
      `https://api.themoviedb.org/3/movie/popular?page=1&language=en-US&api_key=` +
        process.env.VUE_APP_API_KEY
    )
      .then(res => {
        if (res.ok) {
          this.searching = false;
          return res.json();
        } else {
          this.searching = false;
        }
      })
      .then(res => {
        if (res) {
          this.results = res.results;
        }
      });
  }
};
</script>

<style scoped>
  
</style>
