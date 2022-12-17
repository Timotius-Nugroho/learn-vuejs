<template>
  <div>
    <p class="text-red-400">
      Hallloo.... {{ msg }} --- {{ alias && alias + "-fix" }}
    </p>
    <div class="m-1">
      <input type="text" v-model="fullName" />
    </div>
    <p class="mt-2">First NAME : {{ fullName }}</p>
    <p class="mt-2">Last NAME : {{ lastName }}</p>
    <p class="text-blue-600 mt-2">Quote : {{ quote }}</p>
    <button
      class="rounded-md bg-blue-700 p-3 m-2 text-white"
      @click="showQuote(30)"
    >
      Get New Quote
    </button>
    <button
      class="rounded-md bg-blue-700 p-3 m-2 text-white"
      @click="goToAbout()"
    >
      Go To About
    </button>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "HelloWorld",
  props: {
    msg: String,
    alias: String,
  },
  data() {
    return {
      fullName: this.$props.msg,
      quote: "",
    };
  },
  computed: {
    lastName: {
      get: function () {
        return this.fullName + " " + this.$props.alias;
      },
    },
  },
  methods: {
    showQuote(limit) {
      console.log(limit);
      axios
        .get("https://api.quotable.io/random")
        .then((res) => {
          console.log(res);
          this.quote = res.data.content;
        })
        .catch((err) => {
          console.warn(err);
        });
    },
    goToAbout() {
      this.$router.push("/about");
    },
  },
  mounted() {
    this.showQuote();
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped></style>
