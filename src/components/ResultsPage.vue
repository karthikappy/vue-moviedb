<template>
  <v-sheet>
    <v-row>
      <v-col cols="6" md="4" v-for="result in results" v-bind:key="result.id">
        <v-card>
          <v-img
            height="250"
            :src="'https://image.tmdb.org/t/p/w500/' +result.backdrop_path"
          ></v-img>
          <v-list-item two-line>
            <v-list-item-content>
              <div class="text-overline mb-4">
                {{ result.original_language }}
              </div>
              <v-list-item-title class="text-h5 mb-1">
                {{ result.title }}
              </v-list-item-title>
            </v-list-item-content>
            <!-- <v-list-item-avatar tile size="80" color="grey">
              <img
                :src="'https://image.tmdb.org/t/p/w500/' +result.poster_path"
              >
            </v-list-item-avatar> -->
          </v-list-item>
          <v-card-text>{{ result.overview }}</v-card-text>
        </v-card>
      </v-col>
    </v-row>
      
  </v-sheet>
</template>

<script>
export default {
  props: {
    "api-version": {
      required: false,
      default: "3"
    },
    "endpoint": {
      required: true
    },
    "page-num": {
      required: false,
      default: 1
    },
    "language": {
      required: false,
      default: "en-US"
    }
  },
  data() {
    return {
      searching: false,
      results: []
    };
  },
  created: function() {
    this.loadData();
  },
  methods: {
    loadData: function() {
      this.searching = true;
      fetch(
        `https://api.themoviedb.org/`+this.apiVersion+`/`+this.endpoint+`?page=`+this.pageNum+`&language=`+this.language+`&api_key=` +
          process.env.VUE_APP_MOVIEDB_API_KEY
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
  },
  watch: {
    endpoint: function() {
      this.loadData();
    }
  }
}
</script>

<style>

</style>