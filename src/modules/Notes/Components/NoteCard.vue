<template>
    <div class="note-card" >
        <div class="note-card__edit" @click="toNote('edit')">
            <font-awesome-icon icon="edit" class="icon icon--svg" />
        </div>
        <div class="note-card__content" @click="toNote('show')">
            <div class="note-card__title">
                {{ note.title }}
            </div>
            <ul class="note-card__todos">
                <li class="note-card__todo" v-for="todo in note.todos" :key="todo.id">
                    {{ todo.value }}
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
    export default {
        props: ['note'],
        methods: {
            toNote(type) {
                switch(type) {
                    case 'show':
                        this.$router.push({
                            name: 'NoteShow',
                            params: {
                                id: this.note.id,
                            },
                        });
                    break;
                    case 'edit':
                        this.$router.push({
                            name: 'EditNote',
                            params: {
                                id: this.note.id,
                            },
                        });
                        break;
                }
            },
        },
    }
</script>