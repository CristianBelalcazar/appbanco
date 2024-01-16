<script setup>
import { RouterLink } from 'vue-router';

</script>

<template>
    <div class="md:w-1/2">
        <h2 class="font-black text-3xl text-center">Biénvenido <span class="text-indigo-600">App Banco</span> </h2>


    </div>

    <div class="mt-4">
        <RouterLink :to="{ name: 'formulario-solicitud' }"
            class="block md:inline-block rounded bg-indigo-600 py-2 px-2 text-white">Solicitud Crédito
        </RouterLink>
    </div>
</template>