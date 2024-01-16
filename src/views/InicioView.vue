<script setup>
    import { RouterLink } from 'vue-router';
    import LoginView from './LoginView.vue';

</script>

<template>
  <div class="text-center">
        

       <h1 class="font-black text-5xl text-center ">App <span class="text-indigo-600">Banco</span></h1>
       
       

  </div>
  <div>
           <RouterLink :to="{name: 'registrarse'}" 
              class="block md:inline-block rounded bg-indigo-600 py-2 px-2 text-white"
           >Registrarse </RouterLink> 
  </div>


  <LoginView />

  
  
</template>
