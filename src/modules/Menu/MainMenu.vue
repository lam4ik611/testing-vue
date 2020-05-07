<template>
    <ul class="main-menu">
        <li class="main-menu__item" @click="closeAside">
            <router-link
                    :to="{name: 'CreateNote', params: {type: 'create', pageTitle: 'Creating a note'}}"
                    class="main-menu__link"
            >
                <font-awesome-icon icon="plus-square" />
                <div class="main-menu__link-name">
                    Create a note
                </div>
            </router-link>
        </li>
        <li class="main-menu__item" v-show="Object.keys(notes).length" @click="deleteAll">
            <div class="main-menu__link">
                <font-awesome-icon icon="trash-alt" />
                <div class="main-menu__link-name">
                    Remove all notes
                </div>
            </div>
        </li>
    </ul>
</template>

<script>
    import {mapState, mapActions} from 'vuex';
    export default {
        computed: {
            ...mapState('Notes', ['notes']),
        },
        methods: {
            ...mapActions({
                deleteNote: 'Notes/deleteNote',
                doToggle: 'Header/doToggle',
            }),
            closeAside() {
                this.doToggle();
            },
            deleteAll() {
                this.deleteNote({
                    type: 'deleteAll',
                });

                this.closeAside();
            },
        },
    }
</script>