/* eslint-disable vue/multi-word-component-names */
import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import PrimeVue from 'primevue/config';
import 'primevue/resources/themes/saga-blue/theme.css'       //theme
import 'primevue/resources/primevue.min.css'              //core css
import 'primeicons/primeicons.css'                           //icons
import '/node_modules/primeflex/primeflex.css'
import InputText from 'primevue/inputtext';
import Button from 'primevue/button';
import Card from 'primevue/card';
import Panel from 'primevue/panel';
import Dropdown from 'primevue/dropdown';
import Textarea from 'primevue/textarea';
import DataTable from 'primevue/datatable';
import Column from 'primevue/column';
import ColumnGroup from 'primevue/columngroup';     //optional for column grouping
import Row from 'primevue/row';                     //optional for row
import RadioButton from 'primevue/radiobutton';
import axios from 'axios';
import VueAxios from 'vue-axios';

const app = createApp(App);
app.use(PrimeVue);
app.use(store);
app.use(router);
app.use(VueAxios, axios)
// Create global variable
app.provide('headerSetting',{'Content-Type':'application/json'});
app.provide('urlListQuestion', 'https://script.google.com/macros/s/AKfycbzATy77xglvxeU6IFWKsLdB-T1eSrN7diPA9iRegpid0qkqFGQGoV_zlFeWK42CPON1ew/exec');

// Embed component global 
app.component('InputText', InputText);
app.component('Button', Button);
app.component('Card', Card);
app.component('Panel', Panel);
app.component('Dropdown', Dropdown);
app.component('Textarea', Textarea);
app.component('DataTable', DataTable);
app.component('Column', Column);
app.component('ColumnGroup', ColumnGroup);
app.component('Row', Row);
app.component('RadioButton', RadioButton);

app.mount('#app')
