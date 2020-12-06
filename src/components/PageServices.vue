<template>
  <div class="card border-primary mb-3">
    <!-- <div class="card bg-dark text-white"> -->
    <img
      class="card-img card-imagen"
      :src="service.image"
      alt="Card image"
    />
    <div class="card-img-overlay">
      <h1 class=" card-titulo text-center">{{ service.nombre }}</h1>
    </div>
    <p class="card-text p-2">{{ service.descripcion }}</p>
    <div class="card-footer border-secondary">
      <small class="text-muted">{{ service.descripcion2 }}</small>
    </div>
    <button type="button" class="btn btn-primary mb-2">Más información</button>

    <!-- </div> -->
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
  font-family:'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
  margin-top: 20%;
  font-size: 2.8rem;

  color: rgb(255, 255, 255);
}

.card{
    height:100%;
    text-align: justify;
    
}
.card-imagen {
  opacity: initial;
}

.btn{
    font-size: 12px;
    width: 40%;
    margin: auto;
}
</style>