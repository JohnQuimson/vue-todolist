'use strict';

const { createApp } = Vue;

createApp({
  data() {
    return {
      tasks: [
        { todo: 'imparare Vue', stato: false },
        { todo: 'Fare il ToDo list', stato: true },
        { todo: 'Fare la spesa', stato: false },
      ],
      newTask: '',
    };
  },
  methods: {
    addTask() {
      if (this.newTask.trim() !== '') {
        this.tasks.push({
          todo: this.newTask,
          stato: false,
        });
        this.newTask = '';
      }
    },
    addLineThrough(task) {
      task.stato = !task.stato;
    },
    removeTask(index) {
      this.tasks.splice(index, 1);
    },
  },
}).mount('#app');
