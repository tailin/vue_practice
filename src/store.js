import Vue from 'vue';
import Vuex from 'vuex';
import { mapActions } from 'vuex';
import moduleA from './modules/moduleA';

Vue.use(Vuex);

// export default new Vuex.Store({
// 	state: {
// 		count: 0
// 	},
// 	mutations: {
// 		increment(state, payload=1) {
// 			state.count+= payload;
// 		}
// 	},
// 	actions: {
// 		incrementAsync({ commit, state }, payload) {
// 			setTimeout(() => {
// 				commit('increment',payload.amount)
// 			}, 1000)
// 		}
// 	}
// });
export default new Vuex.Store({
    modules:{
        a:moduleA
    },
    getters: {
        rootDoubleCount: state => {
            return 99;
        }
    }
})