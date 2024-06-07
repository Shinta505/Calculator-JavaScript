calculator = {
    nilai1: 0,
    nilai2: 0,
    hasil: 0,

    inputNilai: (a,b) => {
        this.nilai1 = a
        this.nilai2 = b
    },

    penambahan: () => {
        this.hasil = this.nilai1 + this.nilai2
    },

    pengurangan: () => {
        this.hasil = this.nilai1 - this.nilai2
    },

    pembagian: () => {
        this.hasil = this.nilai1 / this.nilai2
    },

    perkalian: () => {
        this.hasil = this.nilai1 * this.nilai2
    },

    perpangkatan: () => {
        this.hasil = this.nilai1 ** this.nilai2
    },

    pengakaran: () => {
        this.hasil = Math.sqrt(this.nilai1)
    },

    outputNilai: () => {
        return this.hasil
    }
}

calculator.inputNilai(4, 2);
calculator.pengakaran();
console.log("Hasil = ", calculator.outputNilai());