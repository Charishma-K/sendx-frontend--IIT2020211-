<template>
  <div class="bg-gray-100 min-h-screen">
    <div class="container mx-auto p-4 flex flex-col items-center">

    <!-- Main Content -->
    <div class="bg-gray-100  rounded p-4 w-1/2 my-8">
      
      <!-- Card Title -->
      <h3 class="text-m font-semibold mb-3 text-left text-gray-600 shadow-text">Show the popup when visitor:</h3>
      
      <!-- Radio Options -->
<div class="flex flex-col space-y-3 mb-3 text-gray-700">
  <label class="flex items-center space-x-2">
    <input type="radio" class="form-radio text-gray-500" v-model="selectedOption" value="enters" />
    <span class="pl-2 text-black-800">Enters website</span>
  </label>

  <label class="flex items-center space-x-2">
    <input type="radio" class="form-radio text-blue-600" v-model="selectedOption" value="exits" />
    <span class="pl-2">Exits website</span>
  </label>

       <div class="flex items-center space-x-2">
    <input type="radio" class="form-radio text-blue-600" v-model="selectedOption" value="scroll" />
    <span class="pl-2">On</span>
    <div class="relative flex items-center">
        <input type="text" class="form-input ml-2 mr-1 w-16 text-center shadow-sm border border-gray-200 rounded-md flex-grow" v-model="scrollPercentage" placeholder="50%" />
        <span class="absolute right-1 text-gray-400">
            <svg class="w-4 h-4 fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                <path d="M5.70711 16.1359C5.31659 16.5264 5.31659 17.1596 5.70711 17.5501L10.5993 22.4375C11.3805 23.2179 12.6463 23.2176 13.4271 22.4369L18.3174 17.5465C18.708 17.156 18.708 16.5228 18.3174 16.1323C17.9269 15.7418 17.2937 15.7418 16.9032 16.1323L12.7176 20.3179C12.3271 20.7085 11.6939 20.7085 11.3034 20.3179L7.12132 16.1359C6.7308 15.7454 6.09763 15.7454 5.70711 16.1359Z"></path>
                <path d="M18.3174 7.88675C18.708 7.49623 18.708 6.86307 18.3174 6.47254L13.4252 1.58509C12.644 0.804698 11.3783 0.805008 10.5975 1.58579L5.70711 6.47615C5.31658 6.86667 5.31658 7.49984 5.70711 7.89036C6.09763 8.28089 6.7308 8.28089 7.12132 7.89036L11.307 3.70472C11.6975 3.31419 12.3307 3.31419 12.7212 3.70472L16.9032 7.88675C17.2937 8.27728 17.9269 8.27728 18.3174 7.88675Z"></path>
            </svg>
        </span>
    </div>
    <span class="pl-2">% page scroll</span>
</div>
       <div class="flex items-center space-x-2">
    <input type="radio" class="form-radio text-blue-600" v-model="selectedOption" value="seconds" />
    <span class="pl-2">After</span>
    <div class="relative">
        <input type="number" min="0" max="60" class="form-input ml-2 w-16 text-center shadow-sm border border-gray-200 rounded-md" v-model="secondsOnWebsite" />
        <span class="absolute inset-y-0 right-2 text-gray-400">
            <svg class="w-4 h-4" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <!-- SVG path data goes here -->
            </svg>
        </span>
    </div>
    <span class="pl-2">seconds on website</span>
</div>
</div>

     

        
      <!-- Advanced Section with Arrow -->
<div class="advanced-container flex items-center mt-6">
    <span class="text-blue-400 font-semibold mr-2">Advanced</span>
    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" class="text-blue-400 fill-current" width="24" height="24">
        <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
        <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
        <g id="SVGRepo_iconCarrier">
           <path d="M5.70711 9.71069C5.31658 10.1012 5.31658 10.7344 5.70711 11.1249L10.5993 16.0123C11.3805 16.7927 12.6463 16.7924 13.4271 16.0117L18.3174 11.1213C18.708 10.7308 18.708 10.0976 18.3174 9.70708C17.9269 9.31655 17.2937 9.31655 16.9032 9.70708L12.7176 13.8927C12.3271 14.2833 11.6939 14.2832 11.3034 13.8927L7.12132 9.71069C6.7308 9.32016 6.09763 9.32016 5.70711 9.71069Z" fill="currentColor"></path>
        </g>
    </svg>
</div>
</div>
      <!-- Go back & Continue buttons -->
    <div class="flex justify-end w-1/2 mt-4">
      <div>
    <!-- Go back button -->
    <router-link :to="{ name: 'content' }" class="text-gray-700 underline">Go back</router-link>

    <!-- Continue button -->
    <router-link :to="{ name: 'behaviour' }" class="px-4 py-2 border rounded-lg border-gray-300 bg-white text-black ml-4 shadow-sm">Continue</router-link>
  </div>
    </div>
    
    <div class="fixed bottom-0 left-0 w-full bg-white shadow-md py-2 px-4">
  <div class="flex justify-end items-center space-x-6">  <!-- Increased space-x from 4 to 6 -->
    <span class="text-gray-500 shadow-text">Last updated: <span class="text-gray-500">12:07, 11 Mar, 2022</span></span>
    <button class="bg-green-500 text-white rounded px-4 py-2">Update</button>
  </div>
</div>
  </div>
   </div>
</template>

<script>
export default {
  name: 'MyTargeting',
  data() {
    return {
      selectedOption: null,
      scrollPercentage: '50%',
      secondsOnWebsite: 5
    };
  }
};
</script>

<style scoped>
.advanced-container {
  border-top: 2px solid rgba(0, 0, 0, 0.1);
  border-bottom: 2px solid rgba(0, 0, 0, 0.1);
  padding: 30px 0;
  margin-top: 40px;
}
.shadow-text {
    text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.2);
}

.form-input {
  border-color: rgba(0, 0, 0, 0.1);
  color: rgba(0, 0, 0, 0.5); /* Light gray text color */
}
   input[type="number"]::-webkit-inner-spin-button,
    input[type="number"]::-webkit-outer-spin-button {
        -webkit-appearance: inner-spin-button !important;
        opacity: 1 !important;
        display: inline-block !important;
    }

    input[type="number"] {
        -moz-appearance: textfield !important;
    }
</style>