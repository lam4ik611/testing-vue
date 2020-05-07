<template>
    <div class="todos">
        <button class="todos__add-todo" @click="doTodo('add')">
            <font-awesome-icon icon="plus-circle" class="icon icon--svg"/>
            <div class="todos__add-todo-text">
                add a todo
            </div>
        </button>
        <div class="todos__todo-field" v-show="Object.keys(todos).length">
            <div
                 class="todo-field"
                 :class="value.editing ? 'form-group' : 'checkbox'"
                 v-for="(value, key) in todos"
                 :key="key"
            >
                <input
                        v-if="value.editing"
                        type="text"
                        :id="value.id"
                        class="form-control"
                        placeholder=" "
                        v-model="value.value"
                >
                <input v-else
                        type="checkbox"
                        v-model="value.checked"
                        :id="value.id"
                >
                <label
                        v-if="value.editing"
                        :for="value.id"
                        class="control-label"
                >
                    New note* ({{ key + 1 }})
                </label>
                <label
                        v-else
                        :for="value.id"
                        class="control-label"
                >
                    {{ value.value || `New note* (${key + 1})`}}
                </label>
                <div class="todo-field__save" @click="value.editing = !value.editing" v-show="value.editing">
                    <font-awesome-icon icon="save" class="icon icon--svg"/>
                </div>
                <div class="todo-field__edit" @click="value.editing = !value.editing" v-show="!value.editing">
                    <font-awesome-icon icon="edit" class="icon icon--svg"/>
                </div>
                <div class="todo-field__remove" @click="doTodo('remove', key)" v-show="!value.editing">
                    <font-awesome-icon icon="minus-circle" class="icon icon--svg"/>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import {mapState, mapActions} from 'vuex';

    export default {
        props: ['type', 'existNote'],
        data() {
            return {
                todos: [],
            }
        },
        created() {
            if (this.type === 'edit') {
                this.getTodos();
            }
        },
        watch: {
            todos(value) {
                this.$emit('sendTodos', value);
            }
        },
        computed: {
            ...mapState('Notes', ['notes']),
        },
        methods: {
            ...mapActions({
                doAddTodo: 'Notes/addTodo',
            }),
            getTodos() {
                this.todos = this.existNote.todos;
            },
            doTodo(action, elementIndex) {
                switch(action) {
                    case 'add':
                        this.todos.push({
                            id: `f${(+new Date).toString(16)}`,
                            value: '',
                            editing: false,
                        });
                        break;
                    case 'remove':
                        this.todos.splice(elementIndex, 1);
                        break;
                }
            },
        },
    }
</script>