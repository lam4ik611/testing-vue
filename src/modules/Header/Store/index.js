export default {
    namespaced: true,
    state: {
        toggleState: false,
    },
    mutations: {
        updateToggle(state, data) {
            state.toggleState = data;
        },
    },
    actions: {
        doToggle({state, commit}) {
            commit('updateToggle', !state.toggleState);
        },
    },
}