<template>
    <div class="container my-4">
        <div class="row">
            <TodoForm :todoInstance="todoList" />
            <div class="container">
                <TodoCardItem :todoInstance="todoList" />
            </div>
        </div>
    </div>
</template>

<script>
import TodoCardItem from '@/components/TodoCardItem.vue';
import TodoForm from '@/components/TodoForm.vue';
import TodoList from '@/inc/classes/TodoList';

export default {
    name: "DoSomethingApp",
    components: { TodoForm, TodoCardItem },
    data() {
        return {
            todoList: new TodoList()
        };
    },
};

</script>
