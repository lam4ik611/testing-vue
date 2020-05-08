import Vue from 'vue';
import VueRouter from 'vue-router';

import Notes from './modules/Notes/Router/notes';
import CreateNote from './modules/Notes/Router/createNote';
import EditNote from './modules/Notes/Router/editNote';
import NoteShow from './modules/Notes/Router/noteShow';

Vue.use(VueRouter);

const Router = new VueRouter({
    mode: 'history',
    base: __dirname,
    routes: [
        Notes,
        CreateNote,
        EditNote,
        NoteShow,
    ],
});

export default Router;

