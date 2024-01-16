<script setup>
import { FormKit } from '@formkit/vue'
import { RouterLink } from 'vue-router';
import Cliente from './Cliente.vue'
</script>
<template>
    <div class="md:w-1/2">
        <h2 class="font-black text-3xl text-center">Solicitud <span class="text-indigo-600">Crédito</span> </h2>

        
    </div>
      
        <div class="mt-4">
            <RouterLink :to="{ name: 'cliente' } " class="block md:inline-block rounded bg-red-500 py-2 px-2 text-white">Volver
            </RouterLink>
        </div>

    <div class="mx-auto mt-10 bg-white shadom">
        <FormKit type="form" submit-label="Enviar" action="" method="post "
            incomplete-message="No se pudo registrar, revisa los datos ingresados" @submit="handleSubmit">
            <FormKit name="nombre" label="Nombre" placeholder="Nombre del usuario" validation="required"
                :validation-messages="{ required: 'El Nombre es Obligatoria' }" />
            <FormKit name="apellido" label="Apellido" placeholder="Apellido del usuario" validation="required"
                :validation-messages="{ required: 'El Apellido es Obligatoria' }" />
            <FormKit type="number" name="cedula" label="Cédula" placeholder="Número del Documento " validation="required"
                :validation-messages="{ required: 'El Número del Documento es Obligatoria' }" min="1" maxLength="10" />
            <FormKit type="number" name="valor" label="Valor" placeholder="Valor del credito" validation="required"
                :validation-messages="{ required: 'El Valor  es Obligatoria' }" min="1" />
            <FormKit type="select" label="Cuotas" placeholder="Cuotas del crédito" name="cuotas" :options="{
                6: '6 meses',
                12: '12 meses',
                24: '24 meses',
                36: '36 meses',

            }" validation="required" :validation-messages="{
    required: 'Este campo es Obligatorio',
}" />
            <FormKit type="date" name="fecha_solicitud" label="Fecha de Solicitud" placeholder="dd/mm/aaaa"
                min="01/01/1900" validation="required" :validation-messages="{
                    required: 'Este campo es Obligatorio',
                }" />
            <FormKit type="select" label="Tipos de crédito " placeholder="Tipo de credito" name="tipocredito" :options="{
                Libreinversión: 'Libre Inversión',
                Vivienda: 'Vivienda',

            }" validation="required" :validation-messages="{
    required: 'Este campo es Obligatorio',
}" />


        </FormKit>
        
    </div>

</template>



