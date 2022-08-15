export const PRODUCTS = [
    {
        id: 1,
        nombre: "San Carlito",
        precio: 680,
        category: 1,
        stock: 20,
        imagen: "../../imagenes/san-carlito.jpg",
        inicial: 1,
        estilo: "Milagro"
    },
    {
        id: 2,
        nombre: "El Ave María",
        precio: 790,
        category: 1,
        stock: 10,
        imagen: "../../imagenes/ave-maria.png",
        inicial: 1,
        estilo: "Milagro"
    },
    {
        id: 3,
        nombre: "San Roque",
        precio: 820,
        category: 2,
        stock: 10,
        imagen: "../../imagenes/san-roque.jpg",
        inicial: 1,
        estilo: "Pecado"
    },
    {
        id: 4,
        nombre: "Monja Francesa",
        precio: 590,
        category: 2,
        stock: 20,
        imagen: "../../imagenes/monja-francesa.jpg",
        inicial: 1,
        estilo: "Pecado"
    },
    {
        id: 5,
        nombre: "Pescado capital",
        precio: 890,
        category: 2,
        stock: 5,
        imagen: "../../imagenes/pescado-capital.jpg",
        inicial: 1,
        estilo: "Pecado"
    },
    {
        id: 6,
        nombre: "El milán",
        precio: 940,
        category: 1,
        stock: 10,
        imagen: "../../imagenes/el-milan.jpg",
        inicial: 1,
        estilo: "Milagro"
    },
    {
        id: 7,
        nombre: "Sacrilegio",
        precio: 990,
        category: 2,
        stock: 5,
        imagen: "../../imagenes/sacrilegio.jpg",
        inicial: 1,
        estilo: "Pecado"
    },
    {
        id: 8,
        nombre: "Santa Angus",
        precio: 1060,
        category: 1,
        stock: 15,
        imagen: "../../imagenes/santa-angus.jpg",
        inicial: 1,
        estilo: "Milagro"
    },
    {
        id: 9,
        nombre: "El paraíso",
        precio: 1190,
        category: 1,
        stock: 5,
        imagen: "../../imagenes/el-paraiso.jpg",
        inicial: 1,
        estilo: "Milagro"
    }
]
const TESTING_DELAY = 3000;

export function getProductsByCategory (categoryId) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (categoryId) {
                resolve(PRODUCTS.filter(prod => prod.category === categoryId));
            } else {
                resolve(PRODUCTS);
            }
        }, TESTING_DELAY);
    });
}

export function getProductById (id) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(PRODUCTS.find(prod => prod.id === id))
        }, TESTING_DELAY)
    })
}