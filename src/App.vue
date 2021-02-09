<template>
  <v-app>
    <v-main>
      <div class="app">
        <h1>
          <span>y</span><span>o</span><span>u</span><span>2</span><span>m</span
          ><span>a</span><span>t</span>
          <span>e</span>
        </h1>
        <small>Developed by <span>Crispen Gari</span></small>
        <form class="app__form" @submit.prevent="searchVideos">
          <input
            type="text"
            placeholder="Search Video..."
            v-model.lazy="searchQuery"
          />
        </form>
        <div class="app__videos__container" v-if="searchResults.length > 0">
          <Video
            v-for="(video, index) in searchResults"
            :key="index"
            :video="video"
          />
        </div>
        <div class="app__noresults" v-else>
          <h1>Opps, No Results Found</h1>

          <small>Try a key word search</small>
        </div>
      </div>
    </v-main>
  </v-app>
</template>

<script>
import axios from "./data";
import { Video } from "./components";
export default {
  name: "App",
  components: { Video },
  data() {
    return {
      searchQuery: "",
      searchResults: [],
    };
  },
  methods: {
    searchVideos() {
      console.log(this.searchQuery);
      if (this.searchQuery) {
        const self = this;
        (async () => {
          const data = await axios.get(self.searchQuery);
          console.log(data?.data?.items[0]);
          self.searchResults = data?.data?.items;
        })();
      }
    },
  },
};
</script>
<style scoped>
.app {
  background-color: #f5f5f5;
  width: 100vw;
  height: 100vh;
  padding: 10px;
  user-select: none;
}
.app__form {
  width: 100%;
  max-width: 600px;
  margin: 10px auto;
  background: white;
  border-radius: 5px;
  border-bottom: 1px solid lightgrey;
  padding: 10px;
  display: flex;
}
.app__form > input {
  flex: 1;
  padding: 10px;
  text-align: center;
  outline: none;
  border: none;
  background: #f5f5f5;
}

.app__videos__container {
  display: flex;
  max-width: 600px;
  flex-direction: column;
  flex-wrap: wrap;
  margin: 10px auto;
  background-color: white;
  padding: 5px;
  border-bottom: 1px solid lightgrey;
  border-radius: 5px;
}
.app > h1 {
  text-align: center;
}
.app > small {
  color: gray;
  text-align: center;
}
.app > small > span {
  color: green;
  font-weight: bold;
  text-align: center;
  width: 100%;
}
.app__noresults {
  width: 100%;
  max-width: 600px;
  margin: 10px auto;
  border-radius: 5px;
  border-bottom: 1px solid lightgrey;
  background-color: white;
  padding: 10px;
  height: 50vh;
  display: grid;
  place-items: center;
}
.app__noresults {
  color: gray;
}
.app > h1 > span:nth-child(1) {
  color: lightseagreen;
}
.app > h1 > span:nth-child(2) {
  color: red;
}
.app > h1 > span:nth-child(3) {
  color: orange;
}
.app > h1 > span:nth-child(4) {
  color: lightseagreen;
}
.app > h1 > span:nth-child(5) {
  color: green;
}
.app > h1 > span:nth-child(6) {
  color: lightseagreen;
}
.app > h1 > span:nth-child(7) {
  color: black;
}
.app > h1 > span:nth-child(8) {
  color: orange;
}
</style>
