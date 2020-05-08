import NoteShow from '../Components/NoteShow';

export default {
    path: process.env.NODE_ENV === 'production' ? '/testing-vue/note/:id' : '/note/:id',
    name: 'NoteShow',
    component: NoteShow,
    props: true,
}