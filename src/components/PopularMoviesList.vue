<template>
  <div class="popular-movies-list">
    <div v-if="searching">Searching...</div>
    <div class="row">
      <div class="col-md-6" v-for="movie in results" :key="movie.id">
        <div class="card">
			<img :src="'https://image.tmdb.org/t/p/w780' + movie.backdrop_path" alt="Backdrop" class="card-img-top">
          <h5 class="card-title">{{movie.title}}</h5>
          <p class="card-text">{{movie.overview}}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
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

<style>
</style>
