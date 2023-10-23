<template>
  
  

   
  <div class="flex justify-center items-start h-screen bg-gray-100 p-10">
    <div class="w-2/4 bg-gray-100 p-6 rounded ">
        <!-- Heading -->
        <h1 class="text-left font-bold text-xl mb-2">Select form type</h1>
        <h2 class="text-left text-gray-400 text-l mb-6">What kind of form would you like to create?</h2>
        
        <!-- Boxes -->
        <div class="flex justify-between mb-6">
            <!-- Single Box -->
            <div @click="selectBox('embedded')" :class="selectedBox === 'embedded' ? 'border-blue-500' : 'border-gray-300'" class="relative border bg-white rounded-lg text-center w-56 h-64 mx-2 hover:border-gray-200 transition-border-color duration-300 cursor-pointer">
                <!-- Selection Indicator -->
                <div v-if="selectedBox === 'embedded'" class="absolute top-2 right-2 w-6 h-6 bg-blue-500 rounded-full border-2 border-blue-500 p-1">
                    <div class="bg-white w-full h-full rounded-full"></div>
                </div>
                <!-- Box Content -->
                <div class="absolute inset-0 p-2 flex flex-col items-center justify-end">
                    <h3 class="font-semibold">Embedded Form</h3>
                    <p class="text-sm">Create a form to embed on your website</p>
                </div>
            </div>
            
            <!-- Single Box -->
            <div @click="selectBox('landing')" :class="selectedBox === 'landing' ? 'border-gray-300' : 'border-blue-500'" class="relative border bg-white rounded-lg text-center w-56 h-64 mx-2 hover:border-gray-300 transition-border-color duration-300 cursor-pointer">
                <!-- Selection Indicator -->
                <div v-if="selectedBox === 'landing'" class="absolute top-2 right-2 w-6 h-6 bg-blue-500 rounded-full border-2 border-blue-500 p-1">
                    <div class="bg-white w-full h-full rounded-full"></div>
                </div>
                <!-- Box Content -->
                <div class="absolute inset-0 p-2 flex flex-col items-center justify-end">
                    <h3 class="font-semibold">Landing Page</h3>
                    <p class="text-sm">Create a Landing Page with a form </p>
                </div>
            </div>
            
            <!-- Single Box -->
            <div @click="selectBox('popup')" :class="selectedBox === 'popup' ? 'border-blue-500' : 'border-gray-300'" class="relative border bg-white rounded-lg text-center w-56 h-64 mx-2 hover:border-blue-500 transition-border-color duration-300 cursor-pointer">
                <!-- Selection Indicator -->
                <div v-if="selectedBox === 'popup'" class="absolute top-2 right-2 w-6 h-6 bg-blue-500 rounded-full border-2 border-blue-500 p-1">
                    <div class="bg-white w-full h-full rounded-full"></div>
                </div>
                <!-- Box Content -->
                <div class="absolute inset-0 p-2 flex flex-col items-center justify-end">
                    <h3 class="font-semibold">Popup Form</h3>
                    <p class="text-sm">Add a form that pops up as a box </p>
                </div>
            </div>
        
    

        
        <!-- (Repeat the above box as many times as needed) -->
        <!-- ... -->

      </div>
       <div class="advanced-container mt-8"></div>
      <!-- Continue Button (Bottom Right) -->
      
<div class="flex justify-end mt-4">
        <button @click="goToDesign" class="bg-white text-black py-2 px-4 rounded transition hover:border-gray-400 hover:shadow-lg">Continue</button>
      </div>
    </div>
    
  </div>
</template>



<script>
export default {
    data() {
        return {
            selectedBox: ''
        };
    },
    methods: {
        selectBox(type) {
            this.selectedBox = type;
        },
          goToDesign() {
    this.$router.push('/design');
  }

    }
};
</script>
<style scoped>
.advanced-container {
  border-top: 2px solid rgba(0, 0, 0, 0.1);
  padding: 30px 0;
}
</style>