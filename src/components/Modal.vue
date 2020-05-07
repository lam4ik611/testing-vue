<template>
    <div
            class="modal"
            :data-active="modalState"
            @click="closeModal"
    >
        <div class="modal__content">
            <h1 class="modal__title">
                Are you sure?
            </h1>
            <div class="modal__form">
                <div class="form-radio">
                    <div class="radio">
                        <input type="radio"
                               id="confirmYes"
                               value="true"
                               v-model="modalAnswer">
                        <label for="confirmYes">
                            Yes
                        </label>
                    </div>
                    <div class="radio">
                        <input type="radio"
                               id="confirmNo"
                               value="false"
                               v-model="modalAnswer">
                        <label for="confirmNo">
                            No
                        </label>
                    </div>
                </div>
                <button class="modal__button" @click="send">
                    accept
                </button>
            </div>
        </div>
    </div>
</template>

<script>
    import {mapState, mapActions} from 'vuex';

    export default {
        data() {
            return {
                modalAnswer: 'false',
            };
        },
        computed: {
            ...mapState(['modalState', 'noteId', 'modalType']),
        },
        methods: {
            ...mapActions({
                setModalState: 'setModalState',
                deleteNote: 'Notes/deleteNote',
            }),
            closeModal($event) {
                if ($event.target.className !== 'modal') {
                    return;
                }

                this.setModalState();
            },
            send() {
                this.deleteNote({
                    type: this.modalType,
                    noteId: this.noteId,
                    answer: this.modalAnswer,
                }).then(() => {
                    this.$router.push({
                        name: 'Home',
                    });
                });
            },
        },
    }
</script>