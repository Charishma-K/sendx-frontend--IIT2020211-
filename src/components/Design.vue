<template>
  <div>
    <h1></h1>
    <div class="templates-grid">
      <div
        v-for="(template, index) in templates"
        :key="index"
        class="template"
        @click="selectTemplate(index)"
      >
        <img :src="template" alt="Template Image" class="template-image" />
      </div>
    </div>
    <button @click="goToEditor">Go to Editor</button>
  </div>
</template>

<script>
export default {
  name: 'MyDesign',
  data() {
    return {
      selectedTemplate: null,
      templates: [
         require('@/assets/images1.png'),
      'image2-url',
       'image3-url',
        'image4-url',
         'image5-url',
          'image6-url',
           'image7-url',
            'image8-url',

      // ... add URLs or data for all templates
    ]
    };
  },
  methods: {
    selectTemplate(templateNum) {
      this.selectedTemplate = templateNum;
      this.goToEditor();
    },
    goToEditor() {
      // store the selected template in a global state or local storage
      // so it can be accessed from the content layer
      localStorage.setItem("selectedTemplate", this.selectedTemplate);
      this.$router.push('/content');
    }
  }
};
</script>

<style scoped>
.templates-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 20px;
  margin-bottom: 20px;
}

.template-image {
  max-width: 100%;
  height: auto;
  border-radius: 5px; 
}
.template {
  border: 1px solid #ccc;
  padding: 20px;
  text-align: center;
  cursor: pointer;
  transition: background-color 0.3s;

  &:hover {
    background-color: #f5f5f5;
  }
  
}
</style>