<template>
  <div class="home">
    <div class="card--container" v-for="(item, index) in characters" :key="index">
        <Card :character="item" />
    </div>
  </div>
</template>

<style lang="scss">

.home{
  display: flex;
  flex-wrap: wrap;
}

.card--container{
  width:48%;
  border-sizing: border-box;
  margin:8px;

  @media screen and (max-width:768px) {
    width:100%;
  }
}

</style>

<script>
import Card from '@/components/card.vue'
import { API } from "../api/api.service";

export default {
  name: 'Home',
  components: {
    Card
  },
   data () {
    return {
      characters: null,
    }
  },  
  mounted(){
    API.getCharacters().then(response => this.characters = response.data.results)
  }
}
</script>
