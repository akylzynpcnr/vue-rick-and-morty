<template>
  <div class="container--list">
    <ul class="list-group container--list__ul ">
      <li class="list-group-item card--detail__li" aria-disabled="true">Episode Name: <strong> {{episode.name}} </strong></li>
      <li class="list-group-item disabled">Air Date: <strong> {{episode.air_date}} </strong></li>
      <li class="list-group-item disabled">Episode: <strong> {{episode.episode}} </strong></li>
    </ul>
  </div>
</template>

<script>
export default {
    props: ["episode"],
};
</script>

<style lang="scss">
.list-group-item{
  background-color: rgb(32, 35, 41);
  color:#fff;
  border: 1px solid #9e9e9e;;
}
.list-group-item.disabled{
  background-color: rgb(32, 35, 41);
  color:#9e9e9e
}
</style>