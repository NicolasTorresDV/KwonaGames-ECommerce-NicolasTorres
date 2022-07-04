//Objeto con productos de prueba

const products = [
    {id:'1', title:'PlayStation 5', categoryid:'Console' ,  description:"Consola de Sony", price:"USD$ 1500", pictureUrl:'https://i.postimg.cc/xT9pRDw8/PS5.jpg', stock:5},
    {id:'2', title:'Xbox Series X', categoryid:'Console' , description:"Consola de Microsoft", price:"USD$ 1200", pictureUrl:'https://i.postimg.cc/xTgxppQR/XBOX.webp', stock:15},
    {id:'3', title:'Elden Ring Limited Edition', categoryid:'RPG' , description:"Elden Ring es un videojuego de rol de acción desarrollado por FromSoftware y publicado por Bandai Namco Entertainment. El videojuego surge de una colaboración entre el director y diseñador Hidetaka Miyazaki y el novelista de fantasía George R. R. Martin.", price:"USD$ 100", pictureUrl:'https://i.postimg.cc/XYz24ZpB/ELDENRING.webp', stock:7},
    {id:'4', title:'Dead Cells', categoryid:'RPG' , description:"Juego RogueLike", price:"USD$ 30", pictureUrl:'https://i.postimg.cc/FFyn3snw/Dead-Cells.webp', stock:3},
    {id:'5', title:'Fifa 2022', categoryid:'Sport' , description:"El mismo de cada año...", price:"USD$ 10", pictureUrl:'https://i.postimg.cc/wjvWC5Td/FIFA2022.jpg', stock:10},
  ]

  const categories = [
    {categoryid: 'Console'},
    {categoryid: 'RPG'},
    {categoryid: 'Sport'},
  ]

//Creo una promesa para exportarlos por categoria
export const getData = (categoryid)=> {
  
    return new Promise ((resolve, reject) =>{

    let condition = true //Flag para intercambiar entre Resolve y Reject
    setTimeout(()=>{
      if(condition){
        const productsByCategory = products.filter(prod => prod.categoryid === categoryid)
        categoryid ? resolve(productsByCategory) : resolve(products)
       
      }else{
        reject('Hubo un error al cargar los productos')
      }
    },500)
  })
}

  //Exporto categorias
  export const getCategories = new Promise ((resolve, reject) =>{

        resolve(categories)
        reject('Hubo un error al cargar las categorias')

  })


//Exporto un producto
export const getProducto= (id)=> {
  
  return new Promise ((resolve, reject) =>{

      const productsSpecified = products.filter(prod => prod.id == id)
      resolve(productsSpecified)
      reject('Hubo un error al cargar los productos')


})
}