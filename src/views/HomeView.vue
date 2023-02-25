
<script lang="ts">
  import TaskDetails from '../components/taskDetails.vue';
  import { useTaskStore } from '../stores/taskStore'
  
  export default {
    components : {
      TaskDetails
    },
    setup() {
      const taskStore = useTaskStore()

      return { taskStore }
    }
  }
</script>

<template>
  <main>
    <header>
      <img src="../assets/pinia-logo.svg" alt="Logo" />
      <h1>Pinia Tasks</h1>
    </header>
    <div class="task-list">
      <div v-for="task in taskStore.tasks">
        <TaskDetails :task="task" />
      </div>
    </div>
  </main>
</template>
