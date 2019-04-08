<template>
  <div>
    <div class="row">
      <h1>Movie Search</h1>
      
    </div>
    <div class="row">
        <div class="col-9">
            <input type="text" v-model="query">
        </div>
        <div class="col-3">
            <div class="btn btn-default" @click="performSearch">Search</div>
        </div>
    </div>
    <div class="row">
        <resultCard v-for="movie in results" :key="movie.id" :movie="movie"/>
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
      query: "",
      results:[]
    };
  },
  methods: {
    performSearch: function() {
      this.searching = true;
      fetch(
        "https://api.themoviedb.org/3/search/movie?query=" +
          this.query +
          "&page=1&language=en-US&api_key=" +
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
  }
};
</script>

<style>
</style>
