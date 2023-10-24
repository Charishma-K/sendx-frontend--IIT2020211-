<template>
  <div>
    <h1></h1>

    <!-- Wrapper for search and templates -->
      <!-- Search Box -->
    <div class="search-and-templates"><div class="search-container">
        <input v-model="searchTerm" type="text" placeholder="Search for a template..." />
      </div>
      


      <!-- Templates Grid -->
      <div class="templates-grid">
        <div v-for="(template, index) in templates" :key="index" class="template" @click="selectTemplate(index)">
          <img :src="template" alt="Template Image" class="template-image" />
        </div>
      </div>

    
      
    </div>

    
  </div>
</template>

<script>
export default {
  name: 'MyDesign',
  data() {
  return {
    selectedTemplate: null,
    searchTerm: '',  
    templates: [
      require('@/assets/images1.png'),
      'image2-url',
      'image2-url',
      'image2-url',
      'image2-url',
      'image2-url',
      'image2-url',
      'image2-url',
      

     

    ]
  };
},

  methods: {
    selectTemplate(templateNum) {
      this.selectedTemplate = templateNum;
      this.goToEditor();
    },
    goToEditor() {
      
     
      localStorage.setItem("selectedTemplate", this.selectedTemplate);
      this.$router.push('/content');
    }
  },
  computed: {
  filteredTemplates() {
    if (this.searchTerm) {
      return this.templates.filter(template => {
        // Assuming the URLs or data have some form of naming that can be used for searching
        return template.includes(this.searchTerm);
      });
    }
    return this.templates;
  }
},
};
</script>

<style scoped>
.search-and-templates {
  display: flex;
  justify-content: space-between; 
  align-items: flex-start;
  margin-bottom: 20px; 
}

.search-container {
  order: 2; 
  margin-left: 20px; 
}

.templates-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 20px;
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