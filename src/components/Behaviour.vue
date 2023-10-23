
  <template>
  <div class="bg-gray-100 min-h-screen">
   <div class="container mx-auto mt-0 p-4 flex flex-col items-center -mb-8">

      <!-- Main Content -->
      <div class="my-custom-container rounded p-4 w-1/2 bg-gray-100">
        <!-- Card Title -->
        <h3 class="text-m font-semibold mb-3 text-left text-gray-600 shadow-text">Show the popup when visitor:</h3>

        <div class="flex flex-col space-y-3 text-gray-700">
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
   

    <!-- How often to show the popup section -->
      
       <!-- 2nd div -->
<div class="container mx-auto mt-0 p-4 flex flex-col items-center mb-0">

<!-- 2nd Div -->
<div id="second-div" class="my-custom-container rounded p-4 w-1/2 bg-gray-100">
         <h3 class="text-m font-semibold mb-3 text-left text-gray-600 shadow-text mt-0">How often to show the popup:</h3>
        <p class="text-left text-gray-400 shadow-text mb-3">Set the period when you want to show the popup to the same visitor if they didn't:</p>
        <div class="flex flex-col space-y-3 mb-3 text-gray-700">
      <label class="block ">
        <input type="radio" class="form-radio text-blue-600" name="frequency">
        <span class="ml-2">Every page view</span>
      </label>

      <label class="block mb-3">
        <input type="radio" class="form-radio text-blue-600" name="frequency">
        <span class="ml-2">Every new browser session</span>
      </label>

      <label class="flex items-center mb-3">
        <input type="radio" class="form-radio text-blue-600" name="frequency">
        <span class="ml-2">After</span>
        <input type="text" class="form-input custom-input ml-2 w-16 text-center text-gray-400 border-gray-300 shadow-sm bg-white" value="3" placeholder="3">
        <span class="ml-2">days</span>
      </label>
    
</div>
 <!-- Divider -->
        <div class="advanced-container mt-8"></div>
</div>
</div>
        <!-- Divider -->
       <div class="advanced-container remove-gap mt-8"></div>
 
    <!-- When to stop showing the popup section -->
    <!-- 3rd div -->
<div class="container mx-auto p-4 flex flex-col items-center mt-0">

      
  <!-- 3rd Div -->
<!-- 3rd Div -->
<div id="third-div" class="my-custom-container rounded p-4 w-1/2 bg-gray-100">
               <h3 class="text-m font-semibold mb-3 text-left text-gray-600 shadow-text mt-8">When to stop showing the popup:</h3>
        <div class="flex flex-col space-y-3 mb-3 text-gray-700">
      <!-- The options go here... -->
      <label class="block ">
        <input type="radio" class="form-radio text-blue-600" name="stopCondition">
        <span class="ml-2">Never</span>
      </label>

 <label class="block mb-3">
        <input type="radio" class="form-radio text-blue-600" name="frequency">
        <span class="ml-2">If the visitor has successfully completed the action </span>
      </label>

      <label class="flex items-center mb-3">
        <input type="radio" class="form-radio text-blue-600" name="frequency">
        <span class="ml-2">If the visitorhas successfully completed the action or the pop-up has been shown </span>
      <input type="text" class="form-input custom-input ml-2 w-16 text-center text-gray-400 border-gray-300 shadow-sm bg-white" value="3" placeholder="3">
        <span class="ml-2">times</span>
      </label>
      <!-- ... and so on for the other options ... -->
    </div>
    <!-- Divider -->
        <div class="advanced-container mt-8"></div>

    </div>
    </div>

   <div class="flex justify-end w-full mt-4">
    <!-- Go back & Continue buttons section -->
    <!-- As per your previous code ... -->
    <div class="flex justify-end w-1/2 mt-4">
      <button class="text-gray-700 underline">Go back</button>
      <button class="px-4 py-2 border rounded-lg border-gray-300 bg-white text-black ml-4 shadow-sm">Continue</button>
    </div>
     </div>
   </div>
  </div>
</template>

<script>
export default {
  name: 'MyBehaviour',
  data() {
    return {
      selectedOption: null,
      scrollPercentage: '50%',
      secondsOnWebsite: 5,
      // Add any other data properties as needed
    };
  }
};
</script>

<style scoped>
/* Keeps the styles for the other sections intact */
.advanced-container {
  border-top: 2px solid rgba(0, 0, 0, 0.1);
  padding: 30px 0;
}

/* Targets the specific .advanced-container between 2nd and 3rd div and removes padding and border */
#second-div + .advanced-container {
  border-top: 2px solid rgba(0, 0, 0, 0.1);
  padding: 0;
}
/* This will only affect the specific advanced-container with the remove-gap class */
.remove-gap {
  border-top: none;
  padding: 0;
}.custom-input {
  border-radius: 5px; /* Slight rounding on all corners */
  width: 40px; /* Adjust to make the box smaller */
}

.shadow-text {
    text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.2);
}
.form-input {
  border-color: rgba(0, 0, 0, 0.1);
  color: rgba(0, 0, 0, 0.5);
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
    .my-custom-container {
  margin-bottom: -40px; /* Adjust as necessary */
}
#third-div {
  margin-top: 0 !important; /* Override any existing margin */
  padding-top: 0 !important; /* Override any existing padding */
}
#second-div {
  margin-bottom: 0 !important; /* Override any existing margin */
  padding-bottom: 0 !important; /* Override any existing padding */
}
/* Directly Targeting the 2nd Div */
.container > div:nth-child(2) {
  margin-bottom: 0 !important;
  padding-bottom: 0 !important;
}

/* Directly Targeting the 3rd Div */
.container > div:nth-child(3) {
  margin-top: 0 !important;
  padding-top: 0 !important;
}
#second-div, #third-div {
    margin: 0 !important;
    padding: 0 !important;
}#second-div,
#third-div,
#second-div .advanced-container,
#third-div .advanced-container {
  margin: 0;
  padding: 0;
}


/* Add more styles as needed */
</style>