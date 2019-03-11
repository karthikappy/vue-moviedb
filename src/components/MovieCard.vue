<template>
    <div class="col-md-6 col-xs-12">
        <div class="card movie-card">
          <div class="card-bgimage" :style="{'background-image': 'url(https://image.tmdb.org/t/p/w780'+movie.backdrop_path+')'}" />
		  <div class="movie-info col-md-12">
            <div class="row">
              <div class="col-4">
                <img :src="'https://image.tmdb.org/t/p/w780' + movie.poster_path" alt="" width="100%">
              </div>
              <div class="col-8">
                <h5 class="card-title">{{movie.title}}</h5>
                <p class="card-text">{{movie.overview}}</p>
                <div class="row">
                    <div class="col-4" v-if="movie.release_date">
                        <div class="col-12">Released</div>
                        <div class="col-12">{{movie.release_date}}</div>
                    </div>
                    <div class="col-4" v-if="movie.adult">
                        <div class="col-12">Adult</div>
                    </div>
                   <div class="col-4" v-if="movie.original_language">
                        <div class="col-12">{{movie.original_language}}</div>
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
    name: "MovieCard",
    props: ["movie"]
}
</script>

<style>
.card-bgimage {
    height: 100%;
    background-size: cover;
    filter: blur(8px)
  }
  .movie-card {
    width:100%;
    height:330px;
    max-height:500px;
  }
  .movie-info {
    position:absolute !important;
    color:white;
    background-color:rgba(0, 0, 0, 0.281);

  }
</style>
