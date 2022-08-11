const products = [
    {
        id: '0',
        nombre: "San Carlito",
        precio: 680,
        category: "milagro",
        stock: 20,
        imagen: "../../imagenes/san-carlito.jpg"

    },
    {
        id: '1',
        nombre: "El Ave María",
        precio: 790,
        category: "milagro",
        stock: 10,
        imagen: "../../imagenes/ave-maria.png"

    },
    {
        id: '2',
        nombre: "San Roque",
        precio: 820,
        category: "pecado",
        stock: 10,
        imagen: "../../imagenes/san-roque.jpg"

    },
    {
        id: '3',
        nombre: "Monja Francesa",
        precio: 590,
        category: "pecado",
        stock: 20,
        imagen: "../../imagenes/monja-francesa.jpg"

    },
    {
        id: '4',
        nombre: "Pescado capital",
        precio: 890,
        category: "pecado",
        stock: 5,
        imagen: "../../imagenes/pescado-capital.jpg"

    },
    {
        id: '5',
        nombre: "El milán",
        precio: 940,
        category: "milagro",
        stock: 10,
        imagen: "../../imagenes/el-milan.jpg"

    },
    {
        id: '6',
        nombre: "Sacrilegio",
        precio: 990,
        category: "pecado",
        stock: 5,
        imagen: "../../imagenes/sacrilegio.jpg"

    },
    {
        id: '7',
        nombre: "Santa Angus",
        precio: 1060,
        category: "milagro",
        stock: 15,
        imagen: "../../imagenes/santa-angus.jpg"

    },
    {
        id: '8',
        nombre: "El paraíso",
        precio: 1190,
        category: "milagro",
        stock: 5,
        imagen: "../../imagenes/el-paraiso.jpg"

    }
]

export const getProducts = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(products)
        }, 1000)
    })
  }
  
  export const getProductsByCategory = (categoryId) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(products.filter(prod => prod.category === categoryId))
        }, 500)
    })
  }
  
  export const getProductById = (id) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(products.find(prod => prod.id === id))
        }, 500)
    })
  }