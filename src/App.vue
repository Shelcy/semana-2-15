<template>
  <div id="app">
    <div class="container">
      <div class="row d-flex align-self-start">
        <div
          class="col-sm-6 col-xs-12 col-lg-4"
          v-for="(item, index) of servicios"
          :key="index"
        >
          <page-services v-bind:service="item"></page-services>
        </div>
      </div>

      <div class="row justify-content-center mb-5">
        <div class="col mt-5" v-for="(item, index) of team" :key="index">
          <team-card v-bind:member="item"></team-card>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

import PageServices from "./components/PageServices.vue";
import TeamCard from "./components/TeamCard.vue";

export default {
  name: "App",
  components: {
    PageServices,
    TeamCard,
  },
  data() {
    return {
      title: "App.vue ",
      team: [
        {
          codigo: 1,
          nombre: " Hugo Gonzalez",
          descripcion: "",
          rol: "Scrum Team",
          image: "./img/hugo.jpeg",
        },
        {
          codigo: 2,
          nombre: "Lina Quimbayo",
          descripcion:
            "Tengo 28 años y vivo en Bogotá D.C., me gusta leer y viajar. No tengo comida favorita pero me gusta probar comidas típicas de otros países. En especial me gusta la comida italiana.",
          rol: "Desarrollador backend",
          image: "./img/lina.jpeg",
        },
        {
          codigo: 3,
          nombre: "Shelcy Calderón",
          descripcion:
            "Tengo 19 años y vivo en Bogotá D.C., me gusta el entrenamiento con pesas y espero algún día competir en este ambito tipo Olympia.  Mi comida favorita es el Kebab y no me gustan los lacteos.",
          rol: "Scrum Master",
          image: "./img/shelcy.jpg",
        },
        {
          codigo: 4,
          nombre: "Juan Perez",
          descripcion:
            "Tengo 26 años y vivo en Cali, trabajo en Restaurante la cabra Asunción hace 3 años y mi comida favorita es el pescado frito con papas fritas. !Delicioso¡",
          rol: "Repartidor de Comidas",
          image: "./img/hugo.jpeg",
        },
        {
          codigo: 5,
          nombre: "Alison Mora",
          descripcion:
            "Tengo 32 años y trabajo en Restaurante la cabra Asunción sede Medellin hace 1 año. Me gusta ir al pueblito paisa y mi comida favorita es el arroz con leche. ",
          rol: "Mesera",
          image: "../src/img/lina.jpeg",
        },
      ],

      servicios: [
        {
          nombre: "Tarjetas",
          descripcion:
            "Desde ahora hasta el 31 de diciembre de 2020, compre $50.000 en tarjetas de regalo en Restaurante la cabra Asunción y reciba un certificado de bonificación de $10.000, compre $100.000 en tarjetas de regalo y reciba un certificado de bonificación de $25.000.",
          descripcion2:
            " Los certificados de bonificación la cabra Asunción son válidos en cualquier parte de Colombia del 2 de enero al 30 de abril de 2021.",
          image: "../img/navidad.jpg",
        },
        {
          nombre: "Eventos",
          descripcion:
            "Para estas temporadas de fiestas ven con tu familia y disfruta hasta del 40% de descuento en el menú del día y no solo eso participa por el pago completo de tu cena navideña para las fechas 7, 24 y 31 de diciembre más obsequios navideños. ",
          descripcion2:
            "Promoción valida para establecimienos de la región andina y pacifica Colombiana desde el 12 de noviembre al 6 de diciembre del año 2020. ",
          image: "./img/cena.jpg",
        },
        {
          nombre: "Farmlink",
          descripcion:
            "En esta temporada navideña, estamos ayudando a apoyar a Farmlink, una organización sin fines de lucro fundada por estudiantes universitarios para enviar productos agrícolas no vendidos a los bancos de alimentos para combatir el hambre. Tu pedido tiene un impacto cuando redondeas.",
          descripcion2:
            "Acercate a cualquier Restaurante la cabra Asunción y has tu aporte de alimentos en buen estado o puedes hacer giros directamente a la fundación hasta el 12 de enero del 2020",
          image: "./img/fundacion.png",
        },
      ],
    };
  },
};
</script>

<style>
.container {
  width: 95%;
}
</style>

