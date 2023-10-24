<template>
  <div class="bg-gray-100 min-h-screen">
    <div class="container mx-auto p-4 flex flex-col items-center">

    <!-- Main Content -->
    <div class="bg-gray-100  rounded p-4 w-1/2 my-8">
      
      <!-- Card Title -->
      <h3 class="text-m font-semibold mb-3 text-left text-gray-600 shadow-text">What happenends after displaying success screen?</h3>
       <p class="text-left text-gray-400 shadow-text mb-3">This is the screen visitors see after successfully submitting your form </p>
      <!-- Radio Options -->
<div class="flex flex-col space-y-3 mb-3 text-gray-700">
   
   <label class="block">
        <input type="radio" class="form-radio text-blue-600" name="frequency">
        <span class="ml-2">Do nothing </span>
      </label>
      <label class="flex items-center mb-3">
        <input type="radio" class="form-radio text-blue-600" name="frequency">
        <span class="ml-2">Close pop up after </span>
        <input type="text" class="form-input custom-input ml-2 w-16 text-center text-gray-400 border-gray-300 shadow-sm bg-white" value="5" placeholder="5">
        <span class="ml-2">seconds</span>
      </label>
  
       <label class="block mb-3">
        <input type="radio" class="form-radio text-blue-600" name="frequency">
        <span class="ml-2">Redirect to URL </span>
      </label>
          
          
        </div>

     

        
      <!-- Advanced Section with Arrow -->
      
    </div>
     
      <!-- Go back & Continue buttons -->
    <div class="flex justify-end w-1/2 mt-4">
    <div>
      <router-link :to="{ name: 'targeting' }" class="text-gray-700 underline">Go back</router-link>
      <button class="px-4 py-2 border rounded-lg border-gray-300 bg-white text-black ml-4 shadow-sm">Finish</button>
      </div>
    </div>
   

  </div>
   </div>
</template>

<script>
export default {
  name: 'MySuccess'
}
</script>
<style>
.custom-input {
  border-radius: 5px; 
  width: 40px; 
}

</style>