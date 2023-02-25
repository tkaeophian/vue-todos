<template>
    <div class="task">
        <h3>{{ task.title }}</h3>
        <div class="icons">
            <span class="material-icons">delete</span>
            <span class="material-icons">favorite</span>
        </div>
    </div>
</template>

<script lang="ts">
    export default {
        props: [
            'task'
        ]
    }
</script>