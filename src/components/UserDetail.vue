<template>
  <div class="flex">
    <img src="../assets/logo.png" alt="IMG-DUMYY" class="h-8" />
    <div>{{ userData?.name ?? "none" }} - {{ userData.email }}</div>
  </div>
</template>

<script>
export default {
  name: "UserDetail",
  props: ["userData"],
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped></style>
