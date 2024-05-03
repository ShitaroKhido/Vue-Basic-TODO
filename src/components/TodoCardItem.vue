<template>
    <div class="card mt-2" v-show="todoInstance.items.length > 0" v-for="(todo, index) in todoInstance.items"
        :key="index">
        <div class="card-body p-4">
            <h3 class="card-title">{{ todo.title }}</h3>
            <p class="card-text">{{ todo.content }}</p> <!-- Corrected typo: Removed 'ƒ' -->
            <div class="row">
                <div class="col-10">

                </div>
                <div class="col-2">
                    <button type="button" class="btn btn-danger w-100" @click="deleteNote(index)">
                        <i class="fas fa-trash-alt"></i> Delete
                    </button>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import TodoList from '@/inc/classes/TodoList';
export default {
    props: {
        todoInstance: {
            type: Object,
            default: new TodoList()
        }
    },
    methods: {
        deleteNote(index) {
            this.todoInstance.deleteTodoItem(index);
        },
    },
}
</script>