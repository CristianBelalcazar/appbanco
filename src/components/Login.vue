<script setup>
    import  axios  from 'axios'
    import { FormKit } from '@formkit/vue'
    import { useRouter } from 'vue-router'
    
    
    
    const router = useRouter()
    

const handleSubmit = (data) => {
    axios.post('http://localhost:4000/clientes', data)
         .then(respuesta => console.log(respuesta))
           router.push({name:'cliente'})
         .catch(error => console.log(error)) 
  }
  
</script>

<template>

    <div class="md:w-1/2">
        
        <h2 class="font-black text-3xl text-center">Iniciar sesión </h2>

        <div class="mx-auto mt-10 bg-white shadom">
          <div class="mx-auto md:w-2/3 py-20 px-6">
            <FormKit
                  type="form"
                  submit-label="Iniciar Sesión"
                  action=""
                  method="post"
                  incomplete-message="No se pudo enviar, revisa los datos ingresados"
                  @submit="handleSubmit"
                  
            >
              <FormKit
                  name="nombre"
                  label="Nombre"
                  placeholder="Nombre del usuario"
                  validation="required"
                  :validation-messages=" {required: 'El Nombre es Obligatoria'}"
      
             />
                 <FormKit
                    type="password"
                    name="Contraseña"
                    label="Contraseña"
                    placeholder="Contraseña del usuario"
                    validation="required"
                    :validation-messages=" {required: 'La Contraseña es Obligatoria'}"
      
                   />

                   
                   
            </FormKit>
           
          </div>
            
         </div>
    </div>

   
</template>





