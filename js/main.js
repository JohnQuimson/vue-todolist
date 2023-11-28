'use strict';

const { createApp } = Vue;

createApp({
  data() {
    return {
      tasks: ['imparare Vue', 'Fare il ToDo list', 'Fare la spesa'],
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
