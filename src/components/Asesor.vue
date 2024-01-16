<script>
import { useRouter } from 'vue-router';

export default {
    name: 'Asesor',

    setup() {
        const router = useRouter();

        const solicitudes = [
            {
                nombre: 'Juan Pérez',
                apellido: 'García',
                cedula: '123456789',
                valor: 1000000,
                cuotas: 24,
                fecha_solicitud: '1980-01-01',
                tipocredito: 'Libre inversión',
                estado: 'Radicada',
            },
        ];

        return {
            solicitudes,
            router,
        };
    },
};
</script>


<template>
    <div class="text-center">
        <h2 class="font-black text-3xl text-center">Biénvenido <span class="text-indigo-600">Asesor</span> </h2>


    </div>
    <div class="mt-4">
        <h1 class="text-indigo-600 text-2xl">Solicitudes</h1>

        <table class="table-auto w-full shadow text-left">
            <thead>
                <tr>
                    <th scope="col" class=" py-2 text-sm font-extrabold">Nombre</th>
                    <th scope="col" class=" py-2 text-sm font-extrabold">Apellido</th>
                    <th scope="col" class=" py-2 text-sm font-extrabold">Cédula</th>
                    <th scope="col" class=" py-2 text-sm font-extrabold">Valor</th>
                    <th scope="col" class="py-2 text-sm font-extrabold">Cuotas</th>
                    <th scope="col" class=" py-2 text-sm font-extrabold">Fecha de solicitud</th>
                    <th scope="col" class="py-2 text-sm font-extrabold">Tipo de crédito</th>
                    <th scope="col" class=" py-2 text-sm font-extrabold">Estado</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="solicitud in solicitudes" :key="solicitud.id">
                    <td>{{ solicitud.nombre }}</td>
                    <td>{{ solicitud.apellido }}</td>
                    <td>{{ solicitud.cedula }}</td>
                    <td>{{ solicitud.valor }}</td>
                    <td>{{ solicitud.cuotas }}</td>
                    <td>{{ solicitud.fecha_solicitud }}</td>
                    <td>{{ solicitud.tipocredito }}</td>
                    <td>

                            <button
                              class="btn btn-primary bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded-full focus:ring-2 ring-green-400 disabled:opacity-50"
                               v-if="solicitud.estado === 'Radicada' " 
                            >
                                <span class="sr-only">Aprobar solicitud</span>
                                <span>Aprobado</span>
                          </button>

                            <button
                                class="btn btn-danger bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded-full focus:ring-2 ring-red-400 disabled:opacity-50"
                                v-if="solicitud.estado === 'Radicada'">
                                <span class="sr-only">Rechazar solicitud</span>
                                <span>Rechazadó</span>
                            </button>
                    </td>
                </tr>
            </tbody>
        </table>
    </div>
</template>
  
  
  