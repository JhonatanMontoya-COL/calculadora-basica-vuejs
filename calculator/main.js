var app = new Vue({
    el: '#app',
    data: {
        numero1: null,
        numero2: null,
        respuesta: 0,
        nameButton1: 'sumatoria',
        nameButton2: 'restar',
        nameButton3: 'multiplicar',
        nameButton4: 'dividir',
    },
    methods: {
        sumar(){
            this.respuesta= parseInt(this.numero1) + parseInt(this.numero2);
            console.log(parseInt(this.respuesta) + 5)
        },
        restar(){
            this.respuesta= parseInt(this.numero1) - parseInt(this.numero2);
            console.log(parseInt(this.respuesta) - 5)
        },
        multiplicar(){
            this.respuesta= parseInt(this.numero1) * parseInt(this.numero2);
            console.log(parseInt(this.respuesta) * 5)
        },
        dividir(){
            this.respuesta= parseInt(this.numero1) / parseInt(this.numero2);
            console.log(parseInt(this.respuesta) / 5)
        }
    },
})

