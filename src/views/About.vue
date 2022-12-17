<template>
  <div>
    <h1>This is an about page edit</h1>
    <div v-if="this.users.length > 0">
      <div
        class="mt-2 p-4 bg-blue-300"
        v-for="(user, index) in users"
        :key="index"
      >
        <UserDetail :user-data="user" />
      </div>
    </div>
    <p v-show="this.users.length === 0">Loading....</p>
  </div>
</template>

<script>
/* eslint-disable */
import axios from "axios";
import UserDetail from "@/components/UserDetail.vue";

export default {
  name: "About",
  components: {
    UserDetail,
  },
  data() {
    return {
      users: [],
    };
  },
  mounted() {
    axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then((res) => {
        this.users = res.data.map((e) => ({
          name: e.name,
          email: e.email,
        }));
      })
      .catch((err) => {
        console.log(err);
      });
  },
};
</script>
