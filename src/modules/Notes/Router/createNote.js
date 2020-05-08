import CreateNote from '../Components/NotePage';

export default {
    path: process.env.NODE_ENV === 'production' ? '/testing-vue/create-note' : '/create-note',
    name: 'CreateNote',
    component: CreateNote,
    props: true,
}
