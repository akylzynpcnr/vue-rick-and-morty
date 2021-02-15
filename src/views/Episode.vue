<template>
  <div class="episode">
    <div
      class="episode--container"
      v-for="(item, index) in episodes"
      :key="index"
    >
      <episode-list :episode="item" />
    </div>
  </div>
</template>

<script>
import EpisodeList from "@/components/episode.vue";
import { API } from "../api/api.service";

export default {
  components: {
    EpisodeList,
  },

  data() {
    return {
      episodes: null,
    };
  },

  mounted() {
    API.getEpisodes().then( response =>  { this.episodes = response.data.results });
    console.log("rrr");
  },
};
</script>


<style lang="scss">
.episode{
    display: flex;
    flex-wrap: wrap;
    padding:0 80px;
}

.episode--container{
    width: 48%;
    margin: 10px;
    cursor: pointer;
    
}
</style>