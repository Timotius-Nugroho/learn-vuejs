<template>
  <div class="flex">
    <div class="p-2 m-1 bg-amber-500">
      <router-link to="/">Home</router-link>
    </div>
    <div class="p-2 m-1 bg-amber-500">
      <router-link to="/about">About</router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: "NavBar",
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped></style>
