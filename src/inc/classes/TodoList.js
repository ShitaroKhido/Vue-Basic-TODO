import TodoItem from "./TodoItem";

class TodoList {
    constructor() {
        this.items = this.loadFromLocalStorage() || [];
    }

    // Method to add a new todo item
    addTodoItem(title, content) {
        const newItem = new TodoItem(title, content);
        this.items.push(newItem);
        this.saveToLocalStorage();
    }

    // Method to delete a todo item by index
    deleteTodoItem(index) {
        this.items.splice(index, 1);
        this.saveToLocalStorage();
    }

    // Method to load todo items from local storage
    loadFromLocalStorage() {
        try {
            return JSON.parse(localStorage.getItem("todo-list")) || [];
        } catch (error) {
            console.error(error);
            return [];
        }
    }

    // Method to save todo items to local storage
    saveToLocalStorage() {
        localStorage.setItem("todo-list", JSON.stringify(this.items));
    }

    // Method to generate CSV content from todo items
    generateCSV() {
        let csv = 'Title,Content\n';
        this.items.forEach(item => {
            csv += `${item.title},${item.content}\n`;
        });
        return csv;
    }

    // Method to import todo items from CSV
    importFromCSV(csv) {
        const lines = csv.split('\n');
        const todoList = [];
        for (let i = 1; i < lines.length; i++) {
            const [title, content] = lines[i].split(',');
            if (title && content) {
                todoList.push({ title, content });
            }
        }
        this.items = this.items.concat(todoList);
        this.saveToLocalStorage();
    }
}

export default TodoList;