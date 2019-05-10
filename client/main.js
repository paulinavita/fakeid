new Vue({
    el: '#app',
   data : {
    x :0,
    y :0,
    image : '',
    url : "http://iskconofescondido.com/wp-content/uploads/2019/03/blangko-kosong-e-ktp.jpg",
    ktp : {
        nama : '',
        nik : '',
        ttl : '',
        jk : '',
        goldar : '',
        alamat : '',
        rt : '',
        kel : '',
        kec : '',
        agama : '',
        kawin : '',
        pekerjaan : '',
        kwn : '',
        berlaku : ''

    },
    cwidth: "" , 
    cheight: "" 

   },
   created() {
    this.cwidth = $('img').width()
    this.cheight = $('img').height();
   },
   mounted() {
    var canvasElement = document.getElementById('canvas');
    var ctx = canvasElement.getContext("2d");
    ctx.clearRect(0, 0, canvas.width, canvas.height)
    var imageObj = new Image();
    imageObj.src = './ktp.png';
    imageObj.onload = function () {
        ctx.drawImage(imageObj, 0, 0);
    }
   },
    methods: {
        updateXY: function(event) {
            this.x = event.offsetX;
            this.y = event.offsetY;
        },
        screenshot() {

            html2canvas(document.getElementById('canvas'), {allowTaint: true })
            .then( (canvas) => {
                
                console.log(canvas, 'apa');   
                document.body.appendChild(canvas);
                console.log(canvas.toDataURL('image/png'), '------')
            })
        },
        getImage(event) {
            this.image = event.target.files[0]
            console.log('disini', this.image, '//////////');
        },
    },
    watch: {
        'ktp.nama': function() {
            console.log('ktp changed');
            var canvasElement = document.getElementById('canvas');
            var ctx = canvasElement.getContext("2d");
            ctx.clearRect(0, 0, canvas.width, canvas.height)
            var imageObj = new Image();
            imageObj.src = './ktp.png';
            imageObj.onload = () => {
                ctx.drawImage(imageObj, 0, 0);
                ctx.fillText(this.ktp.nik, 115, 75);
                ctx.fillText(this.ktp.nama, 125, 100);
                ctx.fillText(this.ktp.ttl, 125, 115);
                ctx.fillText(this.ktp.jk, 125, 130);
                ctx.fillText(this.ktp.goldar, 325, 129);
                ctx.fillText(this.ktp.alamat, 125, 145);
                ctx.fillText(this.ktp.rt, 125, 160);
                ctx.fillText(this.ktp.kel, 125, 175);
                ctx.fillText(this.ktp.kec, 125, 190);
                ctx.fillText(this.ktp.agama, 125, 205);
                ctx.fillText(this.ktp.kawin, 125, 220);
                ctx.fillText(this.ktp.pekerjaan, 125, 235);
                ctx.fillText(this.ktp.kwn, 125, 250);
                ctx.fillText(this.ktp.berlaku, 125, 265);
            }
        },
        'ktp.nik': function() {
            var canvasElement = document.getElementById('canvas');
            var ctx = canvasElement.getContext("2d");
            ctx.clearRect(0, 0, canvas.width, canvas.height)
            var imageObj = new Image();
            imageObj.src = './ktp.png';
            imageObj.onload = () => {
                ctx.drawImage(imageObj, 0, 0);
                ctx.fillText(this.ktp.nik, 115, 75);
                ctx.fillText(this.ktp.nama, 125, 100);
                ctx.fillText(this.ktp.ttl, 125, 115);
                ctx.fillText(this.ktp.jk, 125, 130);
                ctx.fillText(this.ktp.goldar, 325, 129);
                ctx.fillText(this.ktp.alamat, 125, 145);
                ctx.fillText(this.ktp.rt, 125, 160);
                ctx.fillText(this.ktp.kel, 125, 175);
                ctx.fillText(this.ktp.kec, 125, 190);
                ctx.fillText(this.ktp.agama, 125, 205);
                ctx.fillText(this.ktp.kawin, 125, 220);
                ctx.fillText(this.ktp.pekerjaan, 125, 235);
                ctx.fillText(this.ktp.kwn, 125, 250);
                ctx.fillText(this.ktp.berlaku, 125, 265);
            }
        }
    },
    // directives : {
    //     insertData : function (canvasElement, ktp, posX, posY) {
    //         console.log('insertData invoked');
    //         // console.log(ktp.value);
            
    //         var ctx = canvasElement.getContext("2d");
    //         ctx.clearRect(0, 0, canvas.width, canvas.height)
    //         ctx.drawImage($('img').get(0), 0, 0);
    //         ctx.fillText(ktp.value.nik, 115, 75);
    //         ctx.fillText(ktp.value.nama, 125, 100);
    //         ctx.fillText(ktp.value.ttl, 125, 115);
    //         ctx.fillText(ktp.value.jk, 125, 130);
    //         ctx.fillText(ktp.value.goldar, 325, 129);
    //         ctx.fillText(ktp.value.alamat, 125, 145);
    //         ctx.fillText(ktp.value.rt, 125, 160);
    //         ctx.fillText(ktp.value.kel, 125, 175);
    //         ctx.fillText(ktp.value.kec, 125, 190);
    //         ctx.fillText(ktp.value.agama, 125, 205);
    //         ctx.fillText(ktp.value.kawin, 125, 220);
    //         ctx.fillText(ktp.value.pekerjaan, 125, 235);
    //         ctx.fillText(ktp.value.kwn, 125, 250);
    //         ctx.fillText(ktp.value.berlaku, 125, 265);

    //         // var imageObj = new Image();
    //         // imageObj.src = 'https://1.bp.blogspot.com/-sporyQjyNms/WPBDKcnMUhI/AAAAAAAAGnE/HSIOH0oN9788ze1z4LKES_lZj0dUwbgGQCLcB/s1600/Pas%2BFoto%2BSBMPTN%2BTerbaru.png';
    //         // imageObj.onload = function () {
    //         //     ctx.drawImage(imageObj, 363, 60, 116, 150);
    //         // }
    //         // ctx.save()

    //         console.log(canvasElement);
            
    //     }
        
    // }
})