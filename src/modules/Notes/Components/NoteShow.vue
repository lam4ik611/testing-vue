<template>
    <div class="note-show">
        <h1 class="note-show__title">
            {{ note.title }}
        </h1>
        <ul class="note-show__list">
            <li
                class="note-show__item"
                :class="[todo.checked ? 'note-show__item--checked' : '', !todo.value ? 'note-show__item--empty' : '']"
                v-for="todo in note.todos"
                :key="todo.id"
            >
                {{ todo.value || '*Todo is empty' }}
            </li>
        </ul>
        <div class="note-show__navigation">
            <router-link :to="{name: 'Home'}" class="note-show__button">
                back
            </router-link>
            <button class="note-show__button" @click="toEdit">
                <font-awesome-icon icon="edit" />
                Edit the note
            </button>
        </div>
    </div>
</template>

<script>
    import {mapState} from 'vuex';

    export default {
        props: ['id'],
        computed: {
            ...mapState('Notes', ['notes']),
            note() {
                return Object.values(this.notes).find(note => note.id === this.id);
            },
        },
        methods: {
            toEdit() {
                this.$router.push({
                    name: 'EditNote',
                    params: {
                        id: this.id,
                    },
                });
            },
        },
    }
</script>