<script setup>
   
import axios from 'axios'
import { RouterLink } from 'vue-router'
import { useRouter } from 'vue-router'
import { FormKit } from '@formkit/vue'


const router = useRouter()

const handleSubmit = (data) => {
  axios.post('http://localhost:4000/clientes', data)
    .then(respuesta => {
      console.log(respuesta)

      // Redirigir al usuario a la ruta de cliente
      router.push({ name: 'cliente' })
    })
    .then(() => {
      setTimeout(() => {
        alert('Registrado con exito!')
      }, 3000);
    })
    .catch(error => console.log(error))
}


</script>

<template>
    <div>
        <div>
            <RouterLink :to="{ name: 'inicio' } " class="block md:inline-block rounded bg-red-500 py-2 px-2 text-white"> Volver
            </RouterLink>
        </div>
        <h1 class="text-4xl font-extrabold text-indigo-600">Registrarse</h1>
    </div>
    <div class="md:w-1/2">



        <div class="mx-auto mt-10 bg-white shadom">
            <FormKit type="form" submit-label="Registrar" action="" method="post " incomplete-message="No se pudo registrar, revisa los datos ingresados" @submit="handleSubmit" >
                <FormKit name="nombre" label="Nombre" placeholder="Nombre del usuario" validation="required"
                    :validation-messages="{ required: 'El Nombre es Obligatoria' }" />
                    <FormKit name="apellido" label="Apellido" placeholder="Apellido del usuario" validation="required"
                    :validation-messages="{ required: 'El Apellido es Obligatoria' }" />
                    <FormKit type="number" name="cedula" label="Cedula" placeholder="Número del Documento "
                    validation="required" :validation-messages="{ required: 'El Número del Documento es Obligatoria' }" />
                <FormKit type="password" name="Contraseña" label="Contraseña" placeholder="Contraseña del usuario"
                    validation="required" :validation-messages="{ required: 'La Contraseña es Obligatoria' }" />
            </FormKit>
        </div>
    </div>
</template>
