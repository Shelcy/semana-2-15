<template>
  <div class="card text-white ">
    <div class="d-flex justify-content-center p-2">
      <img
        class="card-image"
        v-bind:src="member.image"
        alt="member.nombre"
        title="member.nombre"
      />
      <!-- <img class="card-img-top" :src="member.image" alt="Card image cap"> -->
    </div>
    <div class="card-body bg-dark">
      <h5 class="card-title">{{ member.codigo }}. {{ member.nombre }}</h5>
      <p class="card-text">{{ member.descripcion }}</p>
    </div>
    <div class="card-footer border-secondary">
      <small class="text-muted">{{ member.rol }}</small>
       
    </div>
   
     
    
  </div>
</template>

<script>
export default {
  name: "TeamCard",
  props: ["member"],
};
</script>

<style scoped>
.card-image {
  width: 100%;
  height: 200px;
}

.card {
  height: 100%;
  text-align: center;
}

.card-text {
  text-align: justify;
}


</style>
