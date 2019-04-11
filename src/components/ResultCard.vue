<template>
  <div class="col-xs-12" :class="{'col-md-6': !expanded, 'col-md-12': expanded}">
    <div class="card" :class="{'movie-card': !expanded, 'movie-card-expanded': expanded}">
      <div
        class="card-bgimage"
        :style="{'background-image': 'url(https://image.tmdb.org/t/p/w780'+movie.backdrop_path+')'}"
      />
      <div class="movie-info col-md-12">
        <div class="row">
          <div class="col-4">
            <img v-if="movie.poster_path" :src="'https://image.tmdb.org/t/p/w780' + movie.poster_path" alt width="100%">
          </div>
          <div class="col-8">
            <div class="row" @click="expanded=!expanded" style="cursor:pointer">
              <div class="col-1">
                <div v-if="expanded">
                  <div><font-awesome-icon icon="chevron-down" /></div>
                </div>
                <div v-else>
                  <div><font-awesome-icon icon="chevron-right" /></div>
                </div>
              </div>
              <div class="col-8">
                <h5 class="card-title" v-if="movie.title">{{movie.title}}</h5>
                <h5 class="card-title" v-else-if="movie.name">{{movie.name}}</h5>
              </div>
              <div class="col-3" v-if="movie.original_language">
                {{movie.original_language}}
              </div>
            </div>
            <div class="row" v-if="expanded">
              <p class="font-weight-light">{{details.tagline}}</p>
            </div>
            <div class="row">
              <p class="card-text">{{movie.overview}}</p>
            </div>
            <div class="row" v-if="movie.release_date">
              <span class="font-weight-light">Released</span>
              :
              <span class="font-weight-bold">{{movie.release_date}}</span>
            </div>
            <div class="row">
              <div class="row">
                <div class="col-4" v-if="movie.adult">
                  <div class="col-12">Adult</div>
                </div>
              </div>
            </div>
            <div class="row" v-if="images.backdrops && expanded">
              <div class="col-md-3" v-for="backdrop in images.backdrops" v-bind:key="backdrop.file_path">
                <img :src="'https://image.tmdb.org/t/p/w300' + backdrop.file_path">
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ResultCard",
  props: ["movie"],
  data() {
    return {
      expanded: false,
      details: {},
      images: {},
      searching:false
    };
  },
  watch: {
    expanded: function(expanded) {
      if (expanded) {
        if (!this.details.id) {
          this.searching = true;
          fetch(
            `https://api.themoviedb.org/3/movie/`+this.movie.id+`?language=en-US&api_key=` +
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
                this.details = res;
              }
            });
        }
        if (!this.images.id) {
          fetch(
            `https://api.themoviedb.org/3/movie/`+this.movie.id+`/images?language=en-US&include_image_language=en,null&api_key=` +
              process.env.VUE_APP_API_KEY
          )
          .then(res => {
            if (res.ok) {
              this.searching = false;
              return res.json();
            } else {
              //this.searching = false;
            }
          })
          .then(res => {
            if (res) {
              this.images = res;
            }
          });
        }
      }
    }
  }
};
</script>

<style>
.card-bgimage {
  height: 100%;
  background-size: cover;
  filter: blur(8px);
}
.movie-card {
  width: 100%;
  height: 330px;
  max-height: 330px;
  overflow: hidden;
}
.movie-card-expanded {
  width: 100%;
  height:700px;
  overflow:auto;
}
.movie-info {
  position: absolute !important;
  color: white;
  background-color: rgba(0, 0, 0, 0.281);
}
</style>
