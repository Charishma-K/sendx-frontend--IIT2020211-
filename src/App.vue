<template>
  <div id="app">
    <!-- Navbar -->
   <nav class="bg-blue-900 shadow-sm p-3 mt-0 text-white"  v-if="$route.name !== 'content'"  >
    <div class="container mx-auto flex justify-between items-center">
        <div class="flex space-x-4 items-center">
            <!-- Updated SVG Icon with white fill color -->
            <svg width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" id="send" class="icon glyph mr-6" fill="#FFFFFF">
                <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
                <g id="SVGRepo_iconCarrier">
                    <path d="M21.66,12a2,2,0,0,1-1.14,1.81L5.87,20.75A2.08,2.08,0,0,1,5,21a2,2,0,0,1-1.82-2.82L5.46,13H11a1,1,0,0,0,0-2H5.46L3.18,5.87A2,2,0,0,1,5.86,3.25h0l14.65,6.94A2,2,0,0,1,21.66,12Z" style="fill:#FFFFFF"></path>
                </g>
            </svg>

             <a href="#" style="margin-right: 30px;">Dashboard</a>
            <a href="#" class="hover:text-blue-700" style="display: inline-block;">Campaigns</a>
<!-- Smaller Arrow SVG Icon for Campaigns without left margin -->
<svg width="18" height="18" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" class="icon glyph" fill="#FFFFFF" style="display: inline-block; margin-left: 0;">
    <path d="M5.70711 9.71069C5.31658 10.1012 5.31658 10.7344 5.70711 11.1249L10.5993 16.0123C11.3805 16.7927 12.6463 16.7924 13.4271 16.0117L18.3174 11.1213C18.708 10.7308 18.708 10.0976 18.3174 9.70708C17.9269 9.31655 17.2937 9.31655 16.9032 9.70708L12.7176 13.8927C12.3271 14.2833 11.6939 14.2832 11.3034 13.8927L7.12132 9.71069C6.7308 9.32016 6.09763 9.32016 5.70711 9.71069Z" fill="#FFFFFF"></path>
</svg> <a style="margin-right:2px;"></a>
            
                 
            <a href="#" class="hover:text-blue-700" style="display: inline-block;">Audience</a>
                       <svg width="18" height="18" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" class="icon glyph hover:text-blue-700" fill="#FFFFFF" style="display: inline-block; margin-left: 0;">
                <path d="M5.70711 9.71069C5.31658 10.1012 5.31658 10.7344 5.70711 11.1249L10.5993 16.0123C11.3805 16.7927 12.6463 16.7924 13.4271 16.0117L18.3174 11.1213C18.708 10.7308 18.708 10.0976 18.3174 9.70708C17.9269 9.31655 17.2937 9.31655 16.9032 9.70708L12.7176 13.8927C12.3271 14.2833 11.6939 14.2832 11.3034 13.8927L7.12132 9.71069C6.7308 9.32016 6.09763 9.32016 5.70711 9.71069Z" fill="#FFFFFF"></path>
            </svg> <a style="margin-right:2px;"></a>
                     <a href="#" class="hover:text-blue-700" style="display: inline-block;">Automations</a>
<!-- Smaller Arrow SVG Icon for Campaigns without left margin -->
<svg width="18" height="18" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" class="icon glyph" fill="#FFFFFF" style="display: inline-block; margin-left: 0;">
    <path d="M5.70711 9.71069C5.31658 10.1012 5.31658 10.7344 5.70711 11.1249L10.5993 16.0123C11.3805 16.7927 12.6463 16.7924 13.4271 16.0117L18.3174 11.1213C18.708 10.7308 18.708 10.0976 18.3174 9.70708C17.9269 9.31655 17.2937 9.31655 16.9032 9.70708L12.7176 13.8927C12.3271 14.2833 11.6939 14.2832 11.3034 13.8927L7.12132 9.71069C6.7308 9.32016 6.09763 9.32016 5.70711 9.71069Z" fill="#FFFFFF"></path>
</svg>
        </div>


       <div class="flex items-center space-x-6">
    <!-- Plus Icon -->
    <button class="hover:text-blue-700">
        <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-white">
            <path d="M4 12H20M12 4V20" stroke="#FFFFFF" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
        </svg>
    </button>

    <div class="border-l border-blue-900 h-5 mx-4"></div>

    <div class="flex items-center bg-blue-900 rounded p-1">
        <!-- Search Icon -->
        <button class="hover:text-blue-700 h-5 mx-4 ml-3">
            <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-white">
                <path d="M15.7955 15.8111L21 21M18 10.5C18 14.6421 14.6421 18 10.5 18C6.35786 18 3 14.6421 3 10.5C3 6.35786 6.35786 3 10.5 3C14.6421 3 18 6.35786 18 10.5Z" stroke="#FFFFFF" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
            </svg>
        </button>

        <!-- Notification Icon -->
        <button class="hover:text-blue-700 h-5 mx-4 ml-3">
            <svg fill="#FFFFFF" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" class="h-5 w-5">
                <path d="m13.58 11.6-1.33-2.18V6.33A4.36 4.36 0 0 0 10 2.26a2.45 2.45 0 0 0 0-.38A1.94 1.94 0 0 0 8 0a1.94 1.94 0 0 0-2 1.88 1.64 1.64 0 0 0 0 .38 4.36 4.36 0 0 0-2.25 4.07v3.09L2.42 11.6a1.25 1.25 0 0 0 1.06 1.9h1.77A2.68 2.68 0 0 0 8 16a2.68 2.68 0 0 0 2.75-2.5h1.77a1.25 1.25 0 0 0 1.06-1.9zM7.25 1.88A.7.7 0 0 1 8 1.25a.7.7 0 0 1 .75.63 6 6 0 0 0-.75 0 5.9 5.9 0 0 0-.75 0zM8 14.75a1.44 1.44 0 0 1-1.5-1.25h3A1.44 1.44 0 0 1 8 14.75zm-4.52-2.5 1.34-2.17.18-.31V6.33a4 4 0 0 1 .6-2.12A2.68 2.68 0 0 1 8 3.12a2.68 2.68 0 0 1 2.4 1.09 4 4 0 0 1 .6 2.12v3.44l.18.31 1.34 2.17z"></path>
            </svg>
        </button>

        <!-- Apps Icon -->
        <button class="hover:text-blue-700">
            <svg fill="#FFFFFF" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" class="h-5 w-5">
                <path d="M6 11h5V6H6v5zm7.5 15h5v-5h-5v5zM6 26h5v-5H6v5zm0-7.5h5v-5H6v5zm7.5 0h5v-5h-5v5zM21 6v5h5V6h-5zm-7.5 5h5V6h-5v5zm7.5 7.5h5v-5h-5v5zm0 7.5h5v-5h-5v5z"></path>
            </svg>
        </button>
    </div>

          <div class="border-l border-blue-900 h-5 mx-4"></div>
          
         <div class="bg-blue-500 p-2 rounded-full ml-4">
    <img src="" alt="Profile" class="w-6 h-6 rounded-full">
</div>
        </div>
      </div>
    </nav>
    <!-- Top Bar -->
   <nav class="bg-white shadow-sm p-3 mt-0"  v-if="$route.name !== 'content'" >
    <div class="container mx-auto flex items-center justify-between">
      
      <!-- Always visible Type button -->
      <button 
        class="text-black font-bold hover:text-gray-700" 
       
      >
        Type
      </button>

      <div class="flex items-center space-x-2">
        <template v-for="(btn, index) in btns" :key="'btn-' + index">
          

          <button 
            :class="setButtonColor(btn, index)"
            class="hover:text-black px-2 py-1"
            @click="navigateTo(btn)"
          >
            {{ btn }}
          </button>
          <svg 
            v-if="index < btns.length - 1"
            viewBox="0 0 24 24" 
            fill="none" 
            xmlns="http://www.w3.org/2000/svg"
            :class="setArrowColor(index)"
            class="h-5 w-5 mx-2 fill-current"
          >
            <path d="M9.71069 18.2929C10.1012 18.6834 10.7344 18.6834 11.1249 18.2929L16.0123 13.4006C16.7927 12.6195 16.7924 11.3537 16.0117 10.5729L11.1213 5.68254C10.7308 5.29202 10.0976 5.29202 9.70708 5.68254C9.31655 6.07307 9.31655 6.70623 9.70708 7.09676L13.8927 11.2824C14.2833 11.6729 14.2833 12.3061 13.8927 12.6966L9.71069 16.8787C9.32016 17.2692 9.32016 17.9023 9.71069 18.2929Z" fill="#0F0F0F"></path>
          </svg>
        </template>
      </div>
    
    </div>
  </nav>
  <div class="border-b-3 border-gray-300 mb-2 "></div>

    <!-- Content -->
    <div >
      
<router-view></router-view>
     
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      activeBtnIndex: null,
      btns: ['Type','Design', 'Content', 'Targeting', 'Behaviour', 'Success'],
    };
  },
  methods: {
    setButtonColor(btn, index) {
      if (this.activeBtnIndex === index) return 'text-black font-semibold';
      if (this.activeBtnIndex > index) return 'text-blue-500';
      return 'text-gray-400';
    },
    setArrowColor(index) {
      if (this.activeBtnIndex > index) return 'text-blue-500';
      return 'text-gray-400';
    },
    navigateTo(btn) {
      this.activeBtnIndex = this.btns.indexOf(btn);
      this.$router.push({ name: btn.toLowerCase() });
    },
  },
};
</script>
<style scoped>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}

nav a:hover {
  text-decoration: underline;
}
</style>