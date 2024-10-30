var app = new Vue({
    el: '#app',
    data: {
      dataUser:[],
      fila:0
    },
    
    methods: {
        getUser(){
            const user = 'https://randomuser.me/api/';
            fetch(user)
            .then(response=>{return response.json();})
            .then(data=>{this.dataUser=this.dataUser.concat(data.results) || [];})
            .catch(userError=>{console.log('el sistema ha tenido un error al leer el usuario',userError)})
            this.fila = this.fila + 1;
          },
          addNumberBtn(){
          console.log(this.fila)

          },
          removeBtn(){
            console.log(this.dataUser.length)
            if(this.dataUser.length -1 === 0){
              alert(true)
              this.dataUser.splice(this.dataUser)
            }
            else {
              alert(false)
              this.fila = this.fila - 1;
              const ask=prompt('Por favor ingrese el valor de la fila que desea eliminar')
              this.dataUser.splice(ask)
              console.log(ask)
            }
          }
    },
  })

