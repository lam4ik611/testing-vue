import Notes from '../Components/Notes';

export default {
    path: process.env.NODE_ENV === 'production' ? '/testing-vue' : '/',
    name: 'Home',
    component: Notes,
};
