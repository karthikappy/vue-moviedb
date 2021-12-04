<template>
  <v-app>
    <v-app-bar
      app
      color="primary"
      dark
    >
      <div class="d-flex align-center">
        <v-img
          alt="Vuetify Logo"
          class="shrink mr-2"
          contain
          src="https://cdn.vuetifyjs.com/images/logos/vuetify-logo-dark.png"
          transition="scale-transition"
          width="40"
        />

        <v-img
          alt="Vuetify Name"
          class="shrink mt-1 hidden-sm-and-down"
          contain
          min-width="100"
          src="https://cdn.vuetifyjs.com/images/logos/vuetify-name-dark.png"
          width="100"
        />
      </div>

      <v-spacer></v-spacer>

      <v-btn
        href="https://github.com/vuetifyjs/vuetify/releases/latest"
        target="_blank"
        text
      >
        <span class="mr-2">Latest Release</span>
        <v-icon>mdi-open-in-new</v-icon>
      </v-btn>

      <template v-slot:extension>
        <v-tabs v-model="tabIndex" align-with-title>
          <v-tab>Popular Movies</v-tab>
          <v-tab>Popular TV</v-tab>
          <v-tab>Top Rated Movies</v-tab>
          <v-tab>Top Rated TV</v-tab>
          <v-tab>Search</v-tab>
        </v-tabs>
      </template>
    </v-app-bar>

    <v-main>
      <v-container v-if="tabIndex==0">
        <results-page endpoint="movie/popular"></results-page>
      </v-container>
      <v-container v-if="tabIndex==1">
        <results-page endpoint="tv/popular"></results-page>
      </v-container>
      <v-container v-if="tabIndex==2">
        <results-page endpoint="movie/top_rated"></results-page>
      </v-container>
      <v-container v-if="tabIndex==3">
        <results-page endpoint="tv/top_rated"></results-page>
      </v-container>
      <v-container v-if="tabIndex==4">
        
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
import ResultsPage from './components/ResultsPage.vue';

export default {
  name: 'App',

  components: {
    ResultsPage
  },

  data: () => ({
    tabIndex:0
  }),
};
</script>
