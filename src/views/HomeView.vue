
<script lang="ts">
  import { ref } from 'vue';
  import TaskDetails from '../components/taskDetails.vue';
  import { useTaskStore } from '../stores/taskStore'
  
  export default {
    components : {
      TaskDetails
    },
    setup() {
      const taskStore = useTaskStore()
      const filter = ref('all')
      return { taskStore, filter }
    }
  }
</script>

<template>
  <main>
    <header>
      <img src="../assets/pinia-logo.svg" alt="Logo" />
      <h1>Pinia Tasks</h1>
    </header>
    <!-- filter -->
    <nav class="filter">
      <button @click="filter = 'all'">All tasks</button>
      <button @click="filter = 'favs'">Fav tasks</button>
    </nav>
    <div class="task-list" v-if="filter === 'all'">
      <p>You have {{ taskStore.totalCount }} tasks left to do</p>
      <div v-for="task in taskStore.tasks">
        <TaskDetails :task="task" />
      </div>
    </div>
    <div class="task-list" v-if="filter === 'favs'">
      <p>You have {{ taskStore.favCount }} favs left to do</p>
        <div v-for="task in taskStore.favs">
          <TaskDetails :task="task" />
        </div>
      </div>
  </main>
</template>
