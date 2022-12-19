<template>
  <div>
    <h1>This is an about page edit</h1>
    <div class="grid grid-cols-2 gap-4">
      <div>
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
      <div>
        <div v-if="this.payloads.length > 0">
          <div
            class="mt-2 p-4 bg-blue-300"
            v-for="(payload, index) in payloads"
            :key="index"
          >
            {{ payload.id }} - {{ payload.orbit }} - {{ payload.payload_type }}
          </div>
        </div>
        <p v-show="$apollo.queries.payloads.loading">Loading....</p>
        <button @click="showMorepayloads()">SHOW</button>
      </div>
    </div>
  </div>
</template>

<script>
/* eslint-disable */
import { GET_PAYLOAD } from "@/apis/gql_query";
import axios from "axios";
import UserDetail from "@/components/UserDetail.vue";

export default {
  name: "About",
  components: {
    UserDetail,
  },
  apollo: {
    payloads: {
      query: GET_PAYLOAD,
      variables: {
        limit: 3,
        offset: 0,
      },
    },
  },
  data() {
    return {
      offset: 0,
      users: [],
      payloads: [],
    };
  },
  methods: {
    showMorepayloads() {
      this.offset += 3;

      this.$apollo.queries.payloads.fetchMore({
        variables: {
          limit: 3,
          offset: this.offset,
        },
        updateQuery: (previousResult, { fetchMoreResult }) => {
          const newList = fetchMoreResult.payloads;

          return {
            payloads: [...previousResult.payloads, ...newList],
          };
        },
      });
    },
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
