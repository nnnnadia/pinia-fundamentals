import { defineStore } from "pinia"

export const useTodoListStore = defineStore('todo-List', {
  state: () => ({
    todoList: [],
  })
})
