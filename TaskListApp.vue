<script>
export default{
  name: 'Task List',
  props: {
    msg: String
  },
  data(){
    return{

      task : '',
      avaibleStatuses: ['Não concluída', 'Concluída'],

      tasks: [
        {
          name: 'Correr 5 Km',
          status: 'Não concluída',
          class: 'box'
        },
        {
          name: 'Estudar Java Script',
          status: 'Concluída',
          class: 'box'
        }
      ]
    }
  },
  methods: {
    submitTask(){
      if(this.task.length === 0) return;

      this.tasks.push({
        name: this.task,
        status: 'Não concluída',
        class: 'box'
      });

      this.task = '';
    },

    deleteTask(index){
      this.tasks.splice(index, 1);
    },

    changeStatus(index){
      let newIndex = this.avaibleStatuses.indexOf(this.tasks[index].status);
      if(++newIndex > 1) newIndex = 0;
      this.tasks[index].status = this.avaibleStatuses[newIndex];
    },

    filterElements(status) {
      const elements = document.querrySelectorAll(".box")

      elements.forEach(element => {
        element.classList.remove("show")
        if(status === "Todos" || element.classList.contains(status)) {
          element.classList.add("show")
        }
      });
    }
  }
};
</script>

<template>
  <div class="container">
    <h2 class="text-center mt-5">Vue Task List</h2>
    <div class="d-flex">
      <input v-model="task" type="text" placeholder="Enter task" class="form-control">
      <button @click="submitTask" class="btn btn-warning rounded-0">SUBMIT</button>
    </div>

    <table class="table table-bordered mt-3">
  <thead>
    <tr>
      <section class="mt-1 mb-1">
        <button class="btn" onclick="filterElements(Todos)">Todas</button>
        <button class="btn" onclick="filterElements(Concluidas)">Concluídas</button>
        <button class="btn" onclick="filterElements(Nao Concluidas)">Não concluídas</button>
      </section>
    </tr>
    <tr>
      <th scope="col">Task</th>
      <th scope="col">Status</th>
      <th scope="col" class="text-center mt-5">#</th>
    </tr>
  </thead>
  <tbody>
    <tr class="box" v-for="(task, index) in tasks" :key="index">
      <td>{{ task.name }}</td>
        <td style="width: 130px">
          <span @click="changeStatus(index)" class="pointer">
            {{ task.status }}
          </span>
        </td>
        <td>
          <div class="text-center pointer" @click="deleteTask(index)">
            <span class="fa fa-trash"></span>
          </div>
      </td>
    </tr>
  </tbody>
</table>
  </div>
</template>

<style scoped>
.pointer {
  cursor: pointer;
}
</style>
