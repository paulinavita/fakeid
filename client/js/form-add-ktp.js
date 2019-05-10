Vue.component('form-add-ktp', {
  data() {
    return {
      ktp: {
        nama: '',
        nik: '',
        tmpLahir: '',
        tngglLahir: '',
        jk: '',
        goldar: '',
        alamat: '',
        rt: '',
        kel: '',
        kec: '',
        agama: '',
        kawin: '',
        pekerjaan: '',
        kwn: '',
        berlaku: 'SEUMUR HIDUP'

      }
    }
  },
  methods: {
    addKtp() {
      this.$emit('add-ktp', this.ktp, 'something');
      this.ktp = {
        nama: '',
        nik: '',
        tmpLahir: '',
        tngglLahir: '',
        jk: '',
        goldar: '',
        alamat: '',
        rt: '',
        kel: '',
        kec: '',
        agama: '',
        kawin: '',
        pekerjaan: '',
        kwn: '',
        berlaku: 'SEUMUR HIDUP'
      }
    }
  },
  template:
    ` <div>
    <form action="" method="post" v-on:submit="addKtp">
        <div class="input-group p-1">
            <div class="input-group-prepend">
                <span class="input-group-text">NIK</span>
            </div>
            <input v-model="ktp.nik" type="text" aria-label="First name"
                class="form-control">
        </div>
        <div class="input-group p-1">
            <div class="input-group-prepend">
                <span class="input-group-text">First and last name</span>
            </div>
            <input v-model="ktp.nama" type="text" aria-label="First name"
                class="form-control">
        </div>
        <div class="input-group p-1">
            <div class="input-group-prepend">
                <span class="input-group-text">Alamat</span>
            </div>
            <input v-model="ktp.alamat" type="text" aria-label="First name"
                class="form-control">
        </div>
        <div class="input-group p-1">
            <div class="input-group-prepend">
                <span class="input-group-text">Tempat & tanggal lahir</span>
            </div>
            <input v-model="ktp.tmpLahir" type="text" aria-label="Tempat" class="form-control">
            <input v-model="ktp.tngglLahir" type="date" aria-label="Tanggal Lahir" class="form-control">
        </div>
        <div class="input-group p-1">
            <div class="input-group-prepend">
                <label class="input-group-text" for="inputGroupSelect01">Jenis
                    Kelamin</label>
            </div>
            <select class="custom-select" v-model="ktp.jk">
                <option selected>Pilihan</option>
                <option value="laki-laki">Laki-laki</option>
                <option value="perempuan">Perempuan</option>
            </select>
        </div>
        <div class="input-group p-1">
            <div class="input-group-prepend">
                <label class="input-group-text" for="inputGroupSelect01">Golongan
                    Darah</label>
            </div>
            <select class="custom-select" v-model = "ktp.goldar">
                <option selected>Pilihan</option>
                <option value="A">A</option>
                <option value="B">B</option>
                <option value="AB">AB</option>
                <option value="O">O</option>
            </select>
        </div>
        <div class="input-group p-1">
            <div class="input-group-prepend">
                <span class="input-group-text">Rt/Rw</span>
            </div>
            <input v-model="ktp.rt" type="text" aria-label="Rt" class="form-control">
        </div>
        <div class="input-group p-1">
            <div class="input-group-prepend">
                <span class="input-group-text">Kelurahan</span>
            </div>
            <input v-model="ktp.kel" type="text" aria-label="keluarahan" class="form-control">
        </div>
        <div class="input-group p-1">
            <div class="input-group-prepend">
                <span class="input-group-text">Kecamatan</span>
            </div>
            <input v-model="ktp.kec" type="text" aria-label="kecamatan" class="form-control">
        </div>
        <div class="input-group p-1">
            <div class="input-group-prepend">
                <label class="input-group-text" for="inputGroupSelect01">Agama</label>
            </div>
            <select 
            v-model ="ktp.agama"
            class="custom-select">
                <option selected>Pilihan</option>
                <option value="kristen">Kristen</option>
                <option value="islam">Islam</option>
            </select>
        </div>
        <div class="input-group p-1">
            <div class="input-group-prepend">
                <label class="input-group-text" for="inputGroupSelect01">Pernikahan</label>
            </div>
            <select 
            v-model = "ktp.kawin"
            class="custom-select" id="pernikahan">
                <option selected>Pilihan</option>
                <option value="kawin">Kawin</option>
                <option value="belumKawin">Belum</option>
            </select>
        </div>
        <div class="input-group p-1">
            <div class="input-group-prepend">
                <span class="input-group-text">Perkerjaan</span>
            </div>
            <input v-model="ktp.pekerjaan" type="text" aria-label="First name" class="form-control">
        </div>
        <div class="input-group p-1">
            <div class="input-group-prepend">
                <span class="input-group-text">Kewarganeagaraan</span>
            </div>
            <input 
            v-model = "ktp.kwn"
            type="text" aria-label="First name" class="form-control">
        </div>
        <div class="input-group p-1">
            <div class="input-group-prepend">
                <span class="input-group-text">Berlaku Hingga</span>
            </div>
            <input 
            v-model = "ktp.berlaku"
            type="date" aria-label="First name" class="form-control">
        </div>
        <button type="submit" class="btn btn-primary">Submit</button>
    </form>
</div>`
})
