<template>
    <div class="container my-4">
        <div class="row">
            <div class="col-12 mb-4">
                <div class="card">
                    <div class="card-body">
                        <h4 class="card-title">Todo</h4>
                        <form @submit.prevent="createNote">
                            <div class="mb-3">
                                <input type="text" maxlength="50" class="form-control" placeholder="Title"
                                    v-model="noteTitle">
                            </div>
                            <div class="mb-3">
                                <input type="text" maxlength="100" class="form-control" placeholder="Content"
                                    v-model="noteContent">
                            </div>
                            <button type="submit" class="btn btn-info w-100">Create</button>
                            <input type="file" @change="importCSV" accept=".csv" class="form-control-file my-4">
                        </form>
                    </div>
                </div>
            </div>
            <div class="col-12">
                <button class="btn btn-success w-100 mb-4" @click="downloadCSV">Download CSV</button>
                <div class="card">
                    <div class="card-body">
                        <h4 class="card-title">List</h4>
                        <table class="table w-100">
                            <thead>
                                <tr>
                                    <th>No.</th>
                                    <th>Title</th>
                                    <th>Content</th>
                                    <th>Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr v-show="todoList.items.length > 0" v-for="(todo, index) in todoList.items"
                                    :key="index">
                                    <td>{{ index + 1 }}</td>
                                    <td>{{ todo.title }}</td>
                                    <td>{{ todo.content }}</td>
                                    <td>
                                        <button type="button" class="btn btn-danger" @click="deleteNote(index)">
                                            <i class="fas fa-trash-alt"></i> Delete
                                        </button>
                                    </td>
                                </tr>
                                <tr v-if="todoList.items.length <= 0">
                                    <td colspan="4" class="text-center">Empty</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import TodoList from '@/inc/classes/TodoList';

export default {
    name: "DoSomethingApp",
    data() {
        return {
            noteTitle: null,
            noteContent: null,
            todoList: new TodoList()
        };
    },
    methods: {
        createNote() {
            if (this.noteTitle && this.noteContent) {
                this.todoList.addTodoItem(this.noteTitle, this.noteContent);
                this.resetInput();
            }
        },
        resetInput() {
            this.noteTitle = null;
            this.noteContent = null;
        },
        deleteNote(index) {
            this.todoList.deleteTodoItem(index);
        },
        downloadCSV() {
            const csvContent = this.todoList.generateCSV();
            const blob = new Blob([csvContent], { type: 'text/csv' });
            const link = document.createElement('a');
            link.href = window.URL.createObjectURL(blob);
            link.download = 'todo-list.csv';
            link.click();
        },
        importCSV(event) {
            const file = event.target.files[0];
            if (!file) return;

            const reader = new FileReader();
            reader.onload = () => {
                const csv = reader.result;
                this.todoList.importFromCSV(csv);
            };
            reader.readAsText(file);
        }
    },
};

</script>
