import { defineStore } from 'pinia'

export const useTaskStore = defineStore('taskStore', {
    state: () => ({
        tasks: [
            {id: 1, title: "buy some milk", isFav: false},
            {id: 2, title: "play Gloomhaven", isFav: true}
        ]
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
    }
})