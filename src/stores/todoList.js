import { defineStore } from "pinia"

export const useTodoListStore = defineStore('todo-List', {
  state: () => ({
    todoList: [],
    id: 0,
  }),
  actions: {
    addTodo(item) {
      this.todoList.push({
        item,
        id: this.id++,
        completed: false,
      })
    },
    deleteTodo(item) {
      this.todoList = this.todoList.filter(({ id }) => id !== item)
    },
    toggleCompleted(itemId) {
      const todo = this.todoList.find(({ id }) => id === itemId)
      if (todo) {
        todo.completed = !todo.completed
      }
    }
  }
})
