<template>
  <div class="card border-dark mb-3">
    <!-- <div class="card bg-dark text-white"> -->
    <img
      class="card-img card-imagen"
      v-bind:src="service.image"
      alt="Card image"
    />
    <div class="card-img-overlay">
      <h1 class="card-titulo text-center card-texto">{{ service.nombre }}</h1>
    </div>
    <p class="card-text p-2">{{ service.descripcion }}</p>
    <div class="card-footer border-secondary h-100">
      <small class="text-muted">{{ service.descripcion2 }}</small>
    </div>
   <!-- <a v-bind:click="href='https://www.youtube.com/'">kkhlknlknp</a> -->
    <!-- <a href="" role="button" class="btn btn-primary mb-2"> Más información </a> -->

    
  </div>
</template>


<script>
export default {
  name: "PageServices",
  props: ["service"],
};
</script>

<style scoped>
.card-titulo {
  font-family: "Gill Sans", "Gill Sans MT", Calibri, "Trebuchet MS", sans-serif;
  margin-top: 60%;
  font-size: 4rem;
  /* color: rgb(255, 160, 122); */
  color: transparent; 
  -webkit-text-stroke: 1px rgb(255, 255, 255);
  background-color: rgba(0, 0, 0, 0.213);
  
  
}

.card {
  height: 100%;
  text-align: justify;
}
.card-imagen {
  opacity: 0.8;
  width: 100%;
  height: 200px;
}


.card-img{
  height: 300px;
}

.btn {
  font-size: 12px;
  width: 40%;
  margin: auto;
}


</style>