var Axios = axios.create({
    baseURL: 'http://localhost:3000'
});

new Vue({
    el: '#app',
   data : {
    x :0,
    y :0,
    image : '',
    url : "./blangko.png",
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
        berlaku : 'SEUMUR HIDUP'
    },
    image : "",
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
    imageObj.src = './blangko.jpg';
    imageObj.onload = function () {
        ctx.drawImage(imageObj, 0, 0);
    }
   },
    methods: {
        updateXY: function(event) {
            this.x = event.offsetX;
            this.y = event.offsetY;
        },
        getImage() {
            this.image = event.target.files[0]
            let formData = new FormData()
            formData.append('image', this.image)
        },
        screenshot() {
            html2canvas(document.getElementById('canvas'), {allowTaint: true })
            .then( (canvas) => {      
                // console.log(canvas, 'apa');   
                document.body.appendChild(canvas);
                // console.log(canvas.toDataURL('image/png'), '------')
                
                var base64URL = canvas.toDataURL('image/png')
                // console.log(base64URL, 'hahahahahahah!');
                
                // .replace('image/png', 'image/octet-stream');
               
               Axios({
                   method : 'post',
                   url : `/upload`,
                   maxContentLength : 100000000,
                   data : {
                    image : base64URL,
                   },
               })
                .then(({data}) => {
                    console.log('masuk sini')
                    console.log('datanya', data);
                    
                    // this.imageUrl = data.data
                    // this.imageUrlTwitter=`https://twitter.com/share?url=&text=${this.imageUrl}&via=[via]&hashtags=[hashtags]`
                    // console.log(this.imageUrlTwitter)
                    // console.log(imageUrl,"++++++++++++++")
                    
                })
                .catch((err) => {
                    // console.log(err.response)
                })
                // console.log(base64URL)
            })
        }, 
          
        watchKTP() {
            let canvasElement = document.getElementById('canvas');
            let ctx = canvasElement.getContext("2d");
            ctx.clearRect(0, 0, canvas.width, canvas.height)
            let imageObj = new Image();
            imageObj.src = './blangko.jpg';
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
    watch: {
        'ktp.nama': function() {
         this.watchKTP()
        },
        'ktp.nik': function() {
            this.watchKTP()
        },
        'ktp.ttl': function() {
            this.watchKTP()
        },
        'ktp.jk': function() {
            this.watchKTP()
        },
        'ktp.goldar': function() {
            this.watchKTP()
        },
        'ktp.alamat': function() {
            this.watchKTP()
        },
        'ktp.kel': function() {
            this.watchKTP()
        },
        'ktp.rt': function() {
            this.watchKTP()
        },
        'ktp.kec': function() {
            this.watchKTP()
        },
        'ktp.agama': function() {
            this.watchKTP()
        },
        'ktp.kawin': function() {
            this.watchKTP()
        },
        'ktp.pekerjaan': function() {
            this.watchKTP()
        },
        'ktp.kwn': function() {
            this.watchKTP()
        },
    }
})