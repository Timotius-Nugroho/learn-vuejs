<template>
  <div>
    <h1>HOME....</h1>
    <HelloWorld msg="Timotius" alias="Tims " />
    <div :style="{ marginTop: '20px', color: $store.state.counter.colorCode }">
      Init: {{ this.$store.state.counter.count }} - Sqrt:
      {{ this.$store.getters.counterSqrt }}
    </div>
    <div>
      <button
        :style="{ padding: '10px', margin: '2px', backgroundColor: 'aqua' }"
        @click="$store.dispatch('inc')"
      >
        +
      </button>
      <button
        :style="{ padding: '10px', margin: '2px', backgroundColor: 'aqua' }"
        @click="$store.commit('dec')"
      >
        -
      </button>
    </div>
    <input
      v-model="$store.state.counter.colorCode"
      type="text"
      placeholder="NEW COLOR"
    />
  </div>
</template>

<script>
import HelloWorld from "@/components/HelloWorld.vue";

export default {
  name: "Home",
  components: {
    HelloWorld,
  },
  computed: {
    // colorCode: {
    //   get() {
    //     return this.$store.state.counter.colorCode;
    //   },
    //   set(newValue) {
    //     this.$store.commit("setColorCode", newValue);
    //   },
    // },
  },
};
</script>
