new Vue({
    el:"#aplicacion",
    data:{ info:[] },
    mounted(){
        axios.get("https://api.dailymotion.com/videos?channel=news&limit=4&search=food")
        .then(respuesta=>this.info=respuesta.data.list)
    }
})