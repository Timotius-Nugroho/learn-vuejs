import axios from "axios";

const counter = {
  state: {
    count: 10,
    colorCode: "blue",
  },
  mutations: {
    inc(state, altNum) {
      state.count = altNum ? state.count + altNum : state.count + 1;
    },
    dec(state) {
      if (state.count > 0) {
        state.count--;
      }
    },
    setColorCode(state, newVal) {
      state.colorCode = newVal;
    },
  },
  getters: {
    counterSqrt: (state) => state.count * state.count,
  },
  actions: {
    inc({ commit }) {
      axios
        .get(
          "http://www.randomnumberapi.com/api/v1.0/random?min=100&max=1000&count=1"
        )
        .then((res) => {
          commit("inc", res.data[0]);
        });
    },
  },
};

export default counter;
