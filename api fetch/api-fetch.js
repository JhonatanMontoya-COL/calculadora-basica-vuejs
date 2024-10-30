var app = new Vue({
    el: '#app',
    data: {
      dataUser:[],
      fila:0,
    },
    methods: {
        getUser(){
            const user = 'https://randomuser.me/api/';
            fetch(user)
            .then(response=>{return response.json();})
            .then(data=>{this.dataUser=this.dataUser.concat(data.results) || [];})
            .catch(userError=>{console.log('el sistema ha tenido un error al leer el usuario',userError)})
        },
        removeUser(item) {
          this.dataUser.splice(item,1);
        }
    },
  })

