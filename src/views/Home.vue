<template>
  <div>
    <h1>HOME....</h1>
    <HelloWorld msg="Timotius" alias="Tims " />
  </div>
</template>

<script>
import HelloWorld from "@/components/HelloWorld.vue";

export default {
  name: "Home",
  components: {
    HelloWorld,
  },
};
</script>
