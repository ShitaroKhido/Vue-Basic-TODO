<template>
    <div class="col-12 mb-4">
        <div class="card">
            <div class="card-body">
                <h4 class="card-title">Todo</h4>
                <form @submit.prevent="createNote">
                    <div class="mb-3">
                        <input type="text" maxlength="50" class="form-control" placeholder="Title" v-model="noteTitle">
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
</template>