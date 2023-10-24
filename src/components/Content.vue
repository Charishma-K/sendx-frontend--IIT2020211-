<template>
  <div id="app">
    <div class="container h-screen">
      <!-- New Navigation Bar for Content Page -->
      <div class="new-navbar">
      <div id="newNavBar">
         <button v-on:click="goBack" class="text-white">Back</button>
         <span class="date text-white">New (25 Feb 2022, 14:20)</span>
         <button class="green-button" v-on:click="goToTargeting">Save & Continue</button>
      </div>
  </div>
      <EmailEditor
        ref="emailEditor"
        :min-height="'900px'"  
        v-on:load="editorLoaded"
        v-on:ready="editorReady"
      />
    </div>
  </div>
</template>

<script>
import { EmailEditor } from 'vue-email-editor';

export default {
  name: 'MyContent',
  components: {
    EmailEditor
  },
 mounted() {
  // eslint-disable-next-line no-unused-vars
  const selectedTemplate = localStorage.getItem("selectedTemplate");
},
  
  methods: {
    editorLoaded() {
      console.log('editorLoaded');
    },
    editorReady() {
      console.log('editorReady');
    },
    saveDesign() {
      this.$refs.emailEditor.editor.saveDesign((design) => {
        console.log('saveDesign', design);
      });
    },
    exportHtml() {
      this.$refs.emailEditor.editor.exportHtml((data) => {
        console.log('exportHtml', data);
      });
    },
    goBack() {
       this.$router.push('/design');
    },
    goToTargeting() {
       this.$router.push('/targeting');
    }
  }
};
</script>

<style scoped>
.container {
  display: flex;
  flex-direction: column;
  height: 100vh;
  margin: 0;
}

.container {
  width: 100vw; 
  padding: 0;
  margin: 0;
}
#newNavBar {
   display: flex;
   justify-content: space-between;
   align-items: center;
   height: 60px;
   padding: 0 20px;
   background-color: #35393d;
}
.new-navbar {
  background-color: #424242;  
  width: 100vw;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1000;
  height: 60px; /* Assuming this is the height of your new navbar */
}

/* To ensure content starts below the navbar */
.container {
  padding-top: 60px;  /* Assuming navbar height is 60px */
}
.green-button {
   background-color: #4CAF50;
   border: none;
   color: white;
   padding: 10px 15px;
   text-align: center;
   text-decoration: none;
   display: inline-block;
   font-size: 16px;
   margin: 4px 2px;
   cursor: pointer;
   border-radius: 12px;
}

.date {
   font-size: 16px;
}

EmailEditor {
   flex: 1;
   width: 100%;
   max-width: 100%;
   height: calc(100vh - 60px); 
}

</style>