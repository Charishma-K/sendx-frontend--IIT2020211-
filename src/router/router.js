import { createRouter, createWebHistory } from 'vue-router';
import FormSelection from '../components/FormSelection.vue';
import Type from '../components/FormSelection.vue'; 
import Design from '../components/Design.vue'; 
import Content from '../components/Content.vue';
import Targeting from '../components/Targeting.vue';
import Behaviour from '../components/Behaviour.vue';
import Success from '../components/Success.vue';
 // Import other components
// ... and so on

const routes = [
  {
    path: '/type',
    name: 'formSelection',
    component: FormSelection
  },
  {
    path: '/',
    name: 'type',
    component: Type  // Adjust based on actual component and path names
  },
  {
    path: '/design',
    name: 'design',
    component: Design // Adjust based on actual component and path names
  },
  {
    path: '/content',
    name: 'content',
    component: Content // Adjust based on actual component and path names
  },{
    path: '/targeting',
    name: 'targeting',
    component: Targeting // Adjust based on actual component and path names
  },{
    path: '/behaviour',
    name: 'behaviour',
    component: Behaviour // Adjust based on actual component and path names
  },{
    path: '/success',
    name: 'success',
    component: Success // Adjust based on actual component and path names
  },
  // ... add routes for other pages
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;