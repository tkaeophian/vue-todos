import { defineStore } from 'pinia'

export const useTaskStore = defineStore('taskStore', {
    state: () => ({
        tasks: [],
        isLoading: false
    }),
    getters: {
        favs() {
            return this.tasks.filter((t: { isFav: boolean }) => t.isFav);
        },
        favCount() {
            return this.tasks.reduce((p: number, c: { isFav: any; }) => {
                return c.isFav ? p + 1 : p;
            }, 0);
        },
        totalCount() {
            return this.tasks.length;
        }
    },
    actions: {
        async getTasks() {
            this.isLoading = true
            const response = await fetch('http://localhost:3000/tasks')
            const data = await response.json()
            this.tasks = data
            this.isLoading = false
        },
        addTask(task) {
            this.tasks.push(task);
        },
        deleteTask(id) {
            this.tasks = this.tasks.filter(t => {
                return t.id !== id
            })
        },
        toggleFav(id) {
            const task = this.tasks.find(t => t.id === id)
            task.isFav = !task.isFav
        },
    }
})