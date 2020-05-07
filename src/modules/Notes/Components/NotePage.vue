<template>
    <div
            class="note-page"
            :class="`note-page--${type}`"
    >
        <h1 class="note-page__title">
            {{ pageTitle }}
        </h1>
        <div class="note-page__form">
            <div class="form-group">
                <input
                        type="text"
                        id="title"
                        class="form-control"
                        placeholder=" "
                        v-model="title"
                >
                <label
                        for="title"
                        class="control-label">
                    title
                </label>
            </div>
            <div class="form-group-validate" v-if="submitted && $v.title.$error">
                The input is required!
            </div>
            <div class="note-page__todos">
                <Todos :type="type" :existNote="note" @sendTodos="todos = $event"/>
            </div>
            <div class="note-page__buttons">
                <button class="note-page__button" @click.prevent="send">
                    {{ type }}
                </button>
                <div class="note-page__icon" v-show="type === 'edit'" @click="doDeleteNote">
                    <font-awesome-icon icon="trash-alt" />
                    <span class="note-page__icon-text">Delete note</span>
                </div>
                <div class="note-page__icon" v-show="type === 'edit'" @click="doResetLastChange">
                    <font-awesome-icon icon="trash-restore-alt" />
                    <span class="note-page__icon-text">Reset last change</span>
                </div>
                <router-link :to="{name: 'Home'}" class="note-page__button note-page__button--back">
                    back
                </router-link>
            </div>
        </div>
    </div>
</template>

<script>
    import {mapState, mapActions} from 'vuex';
    import Todos from './Todos';
    import {required} from 'vuelidate/lib/validators';

    export default {
        props: ['id'],
        data() {
            return {
                submitted: false,
                type: '',
                pageTitle: '',
                title: '',
                todos: [],
            }
        },
        created() {
            this.setVariables(this.$route.name);
        },
        validations: {
            title: {
                required,
            },
        },
        computed: {
            ...mapState('Notes', ['notes']),
            note() {
                if (!this.notes) {
                    return {};
                }

                return Object.values(this.notes).find(note => note.id === this.id);
            },
        },
        methods: {
            ...mapActions({
                createNote: 'Notes/createNote',
                editNote: 'Notes/editNote',
                deleteNote: 'Notes/deleteNote',
                resetLastChange: 'Notes/resetLastChange',
                setModalState: 'setModalState',
            }),
            setVariables(name) {
                switch(name) {
                    case 'CreateNote':
                        this.type = 'create';
                        this.pageTitle = 'Creating a note';
                        break;
                    case 'EditNote':
                        this.type = 'edit';
                        this.pageTitle = 'Edit note';
                        this.title = Object.values(this.notes).find(note => note.id === this.id).title;
                        break;
                }
            },
            send() {
                this.submitted = true;

                this.$v.$touch();
                if (this.$v.$invalid) {
                    return;
                }

                switch(this.$route.name) {
                    case 'CreateNote':
                        this.createNote({
                            title: this.title,
                            id: `f${(+new Date).toString(16)}`,
                            todos: this.todos,
                        });
                        break;
                    case 'EditNote':
                        this.editNote({
                            updatedNote: {
                                title: this.title,
                                id: this.note.id,
                                todos: this.todos,
                            },
                            oldNote: {
                                ...this.note
                            }
                        });
                        break;
                }

                this.$router.push({
                    name: 'Home',
                });
            },
            doDeleteNote() {
                this.deleteNote({
                    type: 'deleteOne',
                    noteId: this.id,
                });
            },
            doResetLastChange() {
                this.resetLastChange({
                    noteId: this.note.id,
                });
            },
        },
        components: {
            Todos,
        },
    }
</script>