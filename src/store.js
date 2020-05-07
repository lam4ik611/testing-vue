import Vue from 'vue';
import Vuex from 'vuex';

// modules
import Header from './modules/Header/Store';
import Notes from './modules/Notes/Store';

Vue.use(Vuex);

export default new Vuex.Store({
    namespaced: true,
    state: {
        modalState: false,
        modalType: '',
        noteId: '',
    },
    mutations: {
        updateModalState(state, data) {
            state.modalState = data.modalState;
            state.noteId = data.noteId;
            state.modalType = data.modalType;
        },
    },
    actions: {
        setModalState({state, commit}, data) {
            commit('updateModalState', {
                noteId: data.noteId,
                modalState: !state.modalState,
                modalType: data.type,
            });
        },
    },
    modules: {
        Header,
        Notes,
    },
});