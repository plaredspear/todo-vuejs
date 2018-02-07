<template>
  <div class="task-list">
    <ul>
      <li v-for="(task, index) in tasks" :key="index">{{ task }}</li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'TaskList',
  data () {
    return {
      tasks: [
        'todo-vuejs 글 남기기',
        '집 청소',
        'github repository 청소'
      ]
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
