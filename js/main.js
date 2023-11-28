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
        this.tasks.push(this.newTask);
        this.newTask = '';
      }
    },
  },
}).mount('#app');
