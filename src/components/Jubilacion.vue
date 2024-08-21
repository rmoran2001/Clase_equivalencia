<template>
  <div>
    <h1>Validación de Jubilación</h1>
    <input v-model.number="edad" placeholder="Ingrese su edad" />
    <input v-model.number="aportesIGSS" placeholder="Ingrese sus aportes IGSS" />
    <button @click="validarJubilacion">Verificar</button>
    <p v-if="resultado !== null">{{ mensaje }}</p>
  </div>
</template>

<script>
import { puedeJubilarse } from '../jubilacion';

export default {
  data() {
    return {
      edad: null,
      aportesIGSS: null,
      resultado: null
    };
  },
  computed: {
    mensaje() {
      return this.resultado ? 'Aplica para jubilación' : 'No aplica para jubilación';
    }
  },
  methods: {
    validarJubilacion() {
      this.resultado = puedeJubilarse(this.edad, this.aportesIGSS);
    }
  }
};
</script>
