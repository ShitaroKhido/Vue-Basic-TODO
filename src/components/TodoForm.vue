<template>
    <div class="col-12 mb-4">
        <div class="card">
            <div class="card-body">
                <h4 class="card-title">TODO</h4>
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
                    <hr>
                    <h4>Import & Export</h4>
                    <input type="file" @change="importCSV" accept=".csv"
                        class="btn btn-secondary form-control-file my-4 w-100">
                    <button class="btn btn-success w-100 mb-4" @click="downloadCSV">Download CSV</button>
                </form>
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
    data() {
        return {
            noteTitle: null,
            noteContent: null,
        };
    },
    methods: {
        createNote() {
            if (this.noteTitle && this.noteContent) {
                this.todoInstance.addTodoItem(this.noteTitle, this.noteContent);
                this.resetInput();
            }
        },
        resetInput() {
            this.noteTitle = null;
            this.noteContent = null;
        },
        downloadCSV() {
            this.todoInstance.downloadCSV()
        },
        importCSV(event) {
            this.todoInstance.importCSV(event)
        }
    }
}
</script>