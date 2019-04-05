<template>
  <div class="popular-movies-list">
    <h1>Top Rated TV</h1>
    <div v-if="searching">Searching...</div>
    <div class="row">
      <t-v-card v-for="movie in results" :key="movie.id" :movie="movie">
        
      </t-v-card>
    </div>
  </div>
</template>

<script>
import TVCard from "./TVCard.vue";

export default {
  components: {
    TVCard
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
      `https://api.themoviedb.org/3/tv/top_rated?page=1&language=en-US&api_key=` +
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
