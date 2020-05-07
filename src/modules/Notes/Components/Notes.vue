<template>
    <div class="notes">
        <div class="notes__row">
            <ul class="notes__cards" v-if="Object.keys(notes).length">
                <li class="notes__card" v-for="note in notes" :key="note.id">
                    <NoteCard :note="note"></NoteCard>
                </li>
                <li class="notes__card">
                    <router-link
                            :to="{name: 'CreateNote', params: {type: 'create', pageTitle: 'Creating a note'}}"
                            class="note-card note-card--custom"
                    >
                        <div class="note-card__title">
                            Click to create one more note...
                        </div>
                    </router-link>
                </li>
            </ul>
            <div class="notes__empty" v-else>
                <h1 class="notes__title">
                    There's no exist notes. Click down to create a note.
                </h1>
                <router-link
                        :to="{name: 'CreateNote', params: {type: 'create', pageTitle: 'Creating a note'}}"
                        class="note-page__button"
                >
                    <font-awesome-icon icon="plus-square" />
                    <div class="main-menu__link-name">
                        Create a note
                    </div>
                </router-link>
            </div>
        </div>
    </div>
</template>

<script>
    import NoteCard from './NoteCard';
    import {mapState} from 'vuex';

    export default {
        computed: {
            ...mapState('Notes', ['notes']),
        },
        components: {
            NoteCard,
        },
    }
</script>