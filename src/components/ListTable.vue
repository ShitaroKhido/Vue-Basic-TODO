<template>
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
                        <tr v-show="todoList.items.length > 0" v-for="(todo, index) in todoList.items" :key="index">
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
</template>