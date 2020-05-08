import EditNote from '../Components/NotePage';

export default {
    path: process.env.NODE_ENV === 'production' ? '/testing-vue/edit-note/:id' : '/edit-note/:id',
    name: 'EditNote',
    component: EditNote,
    props: true,
}
