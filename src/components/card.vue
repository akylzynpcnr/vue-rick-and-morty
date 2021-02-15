<template>
  <div class="card--character" @click="goToDetail">
    <div class="card--character__body">
      <div class="card--character__img">
        <img :src="character.image" class="img" alt="" />
      </div>
      <div class="card--character__detail">
        <h2 class="card--character__title">{{ character.name }}</h2>
        <div>
          <p class="card--character__summary">{{ character.status }}</p>
          <p class="card--character__summary">First Seen in:</p>
          <h3 class="card--character__content">{{ character.location.name }}</h3>
          <p class="card--character__summary">{{ character.gender }}</p>
          <p class="card--character__summary">{{ character.human }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import router from "../router/index";
export default {
  props: ["character"],
  methods: {
    goToDetail () {
        router.push(`/detail/${this.character.id}`);
    }
}
};
</script>

<style lang="scss">
.card--character {
  border-radius: 10px;
  padding: 0;
  cursor: pointer;
  background: rgb(32, 35, 41);

  &__body {
    display: flex;
  }

  &__img {
    width: 230px;
    height: 220px;
    border-top-left-radius: 10px;
    border-bottom-left-radius: 10px;

    img {
      border-top-left-radius: 10px;
      border-bottom-left-radius: 10px;
      width: 100%;
      height: 100%;
    }
  }

  &__detail {
    padding: 0 13px;
    width: calc(100% - 230px);
    margin: auto;
  }

  &__title {
    font-size: 1.51572rem;
    color: #f5f5f5;
  }

  &__summary {
    color: #f5f5f5;
  }

  &__content {
    color: #9e9e9e;
    font-size: 18px;
  }
}
</style>