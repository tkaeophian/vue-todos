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
        async addTask(task) {
            this.tasks.push(task);
            try {

                 const res = await fetch('http://localhost:3000/tasks', {
                    method: 'POST',
                    body: JSON.stringify(task),
                    headers: {'Content-Type' : 'application/json'}
                })

            } catch (error) {
                console.log(error);
            }
        },
        async deleteTask(id) {
            this.tasks = this.tasks.filter(t => {
                return t.id !== id
            })

            try {

                 const res = await fetch('http://localhost:3000/tasks/' + id, {
                    method: 'DELETE'
                })

            } catch (error) {
                console.log(error);
            }
        },
        async toggleFav(id) {
            const task = this.tasks.find(t => t.id === id)
            task.isFav = !task.isFav

            try {

                 const res = await fetch('http://localhost:3000/tasks/' + id, {
                    method: 'PATCH',
                    body: JSON.stringify({ isFav: task.isFav }),
                    headers: {'Content-Type' : 'application/json'}
                })

            } catch (error) {
                console.log(error);
            }
        },
    }
})