const Data = [
    {
        "id": 0,
        "nombre": "San Carlito",
        "precio": 680,
        "stock": 20,
        "imagen": "../../imagenes/san-carlito.jpg"

    },
    {
        "id": 1,
        "nombre": "El Ave María",
        "precio": 790,
        "stock": 10,
        "imagen": "../../imagenes/ave-maria.png"

    },
    {
        "id": 2,
        "nombre": "San Roque",
        "precio": 820,
        "stock": 10,
        "imagen": "../../imagenes/san-roque.jpg"

    },
    {
        "id": 3,
        "nombre": "Monja Francesa",
        "precio": 590,
        "stock": 20,
        "imagen": "../../imagenes/monja-francesa.jpg"

    },
    {
        "id": 4,
        "nombre": "Pescado capital",
        "precio": 890,
        "stock": 5,
        "imagen": "../../imagenes/pescado-capital.jpg"

    },
    {
        "id": 5,
        "nombre": "El milán",
        "precio": 940,
        "stock": 10,
        "imagen": "../../imagenes/el-milan.jpg"

    },
    {
        "id": 6,
        "nombre": "Sacrilegio",
        "precio": 990,
        "stock": 5,
        "imagen": "../../imagenes/sacrilegio.jpg"

    },
    {
        "id": 7,
        "nombre": "Santa Angus",
        "precio": 1060,
        "stock": 15,
        "imagen": "../../imagenes/santa-angus.jpg"

    },
    {
        "id": 8,
        "nombre": "El paraíso",
        "precio": 1190,
        "stock": 5,
        "imagen": "../../imagenes/el-paraiso.jpg"

    }
]

const getFetch = new Promise ((resolve, reject)=>{
    let condition=true
    condition ? setTimeout(()=>{resolve(Data)}, 2000) : reject(console.log("error en base de datos"))
})

export default getFetch;