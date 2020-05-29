import * as firebase from "firebase";
import authAxios from "@/services/axios-auth";

export default {
  state: {
    user: null
  },
  mutations: {
    setUser(state, payload) {
      state.user = payload;
    }
  },
  actions: {
    signUserUp: ({ commit }, payload) => {
      commit("setLoading", true);
      commit("clearError");

      const data = {
        displayName: payload.displayName,
        email: payload.email,
        password: payload.password,
        returnSecureToken: true
      };
      authAxios
        .post("/accounts:signUp", data)
        .then(res => {
          
          commit("setLoading", false);
          const newUser = {
            id: res.uid,
            name: res.displayName,
            email: res.email,
            password: res.password
          };
          commit("setUser", newUser);
          const { idToken, localId } = res.data;

          localStorage.setItem("token", idToken);
          localStorage.setItem("userId", localId);
        })
        .catch(err => {
          commit("setLoading", false);
          commit("setError", err);
        });
    },
    signUserIn: ({ commit }, payload) => {
      commit("setLoading", true);
      commit("clearError");

      authAxios
        .post("/accounts:signInWithPassword", {
          displayName: payload.displayName,
          email: payload.email,
          password: payload.password
        })
        .then(user => {
          commit("setLoading", false);
          const newUser = {
            id: user.uid,
            name: user.displayName,
            email: user.email,
            photoUrl: user.photoURL
          };

          commit("setUser", newUser);
          const { idToken, localId } = user.data;

          localStorage.setItem("token", idToken);
          localStorage.setItem("userId", localId);
        })
        .catch(err => {
          commit("setLoading", false);
          commit("setError", err);
        });
    },
    logout({ commit }) {
      firebase
        .auth()
        .signOut()
        .then(res => {
          commit("setUser", null);
        })
        .catch(error => {
          commit("setLoading", false);
          commit("setError", error);
        });
    }
  },
  getters: {
    user(state) {
      return state.user;
    }
  }
};
