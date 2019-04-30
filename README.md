# vue-moviedb

This is my first NodeJS application. It is basically a simple interface to view and explore movie data from https://www.themoviedb.org/. This is my effort to learn and experiment with the core features of VueJS such as components and '''v-''' attributes

## Movie DB API

This application makes use of the Movie-DB API. You will need to obtain an API KEY from the website. See https://developers.themoviedb.org/3/getting-started/introduction for instructions on obtaining an API key

## Setup
### Prerequisites

You must already have NodeJS installed. I recommend installing the latest LTS version from https://nodejs.org/en/.

### STEP 1: Install dependencies
After you have downloaded or cloned the git repository, run:

```
npm install
```

to install all required dependencies ... this might take a while, so why not grab a cup of cofee while the installation is running?

### STEP 2: Set up the API key
Did you get an API key yet?
No? Well, go and do it now because we need it to proceed.

We must now create a ```.env``` file (i.e. A file with no name and an 'env' extension)  in the root of our project (in the same folder as package.json)

This file must have the following contents:

```
VUE_APP_API_KEY={YOUR-KEY-HERE}
```

where ```{YOUR-KEY-HERE}``` must be replaced by your API key
That's it! You are all set!

### STEP 3: Running the application

To run the application, just use the following command:
'''
npm run serve
'''
