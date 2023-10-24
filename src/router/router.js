import { createRouter, createWebHistory } from 'vue-router';
import FormSelection from '../components/FormSelection.vue';
import Type from '../components/Type.vue'; 
import Design from '../components/Design.vue'; 
import Content from '../components/Content.vue';
import Targeting from '../components/Targeting.vue';
import Behaviour from '../components/Behaviour.vue';
import Success from '../components/Success.vue';
 


const routes = [
  {
    path: '/type',
    name: 'formSelection',
    component: FormSelection
  },
  {
    path: '/',
    name: 'type',
    component: Type  
  },
  {
    path: '/design',
    name: 'design',
    component: Design 
  },
  {
    path: '/content',
    name: 'content',
    component: Content 
  },{
    path: '/targeting',
    name: 'targeting',
    component: Targeting 
  },{
    path: '/behaviour',
    name: 'behaviour',
    component: Behaviour 
  },{
    path: '/success',
    name: 'success',
    component: Success 
  },
  
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;