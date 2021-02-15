<template>
  <div class="detail">
    <Character :character="character" />
  </div>
</template>

<style lang="scss">
.detail {
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;

  @media screen and (max-width:768px) {
    width:100%;
  } 
}


</style>

<script>
import Character from "@/components/character.vue";
import { API } from "../api/api.service";

export default {
  name: "Detail",
  components: {
    Character,
  },
  data() {
    return {
      character: null,
    };
  },
  mounted() {
    API.getCharacter(this.$route.params.id).then(
      (response) => (this.character = response.data)
    );
  },
};
</script>