'use strict';

const { createApp } = Vue;

createApp({
  data() {
    return {
      tasks: ['imparare Vue', 'Fare il ToDo list', 'Fare la spesa'],
    };
  },
  methods() {},
}).mount('#app');
