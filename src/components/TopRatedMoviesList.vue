<template>
  <div class="popular-movies-list">
    <h1>Top Rated Movies</h1>
    <div v-if="searching">Searching...</div>
    <div class="row">
      <resultCard v-for="movie in results" :key="movie.id" :movie="movie" />
    </div>
  </div>
</template>

<script>
import ResultCard from "./ResultCard.vue";

export default {
  components: {
    ResultCard
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
      `https://api.themoviedb.org/3/movie/top_rated?page=1&language=en-US&api_key=` +
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
