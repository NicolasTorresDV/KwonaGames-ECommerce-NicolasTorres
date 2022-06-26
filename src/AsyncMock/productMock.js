//Objeto con productos de prueba

const products = [
    {id:'1', title:'PlayStation 5', description:"Consola de Sony", price:"USD$ 1500", pictureUrl:'https://i.postimg.cc/xT9pRDw8/PS5.jpg', stock:5},
    // {id:'2', title:'Xbox Series X', description:"Consola de Microsoft", price:"USD$ 1200", pictureUrl:'https://i.postimg.cc/xTgxppQR/XBOX.webp', stock:15},
    {id:'3', title:'Elden Ring Limited Edition', description:"G.O.A.T. 2022", price:"USD$ 100", pictureUrl:'https://i.postimg.cc/XYz24ZpB/ELDENRING.webp', stock:7},
    {id:'4', title:'Dead Cells', description:"Juego RogueLike", price:"USD$ 30", pictureUrl:'https://i.postimg.cc/FFyn3snw/Dead-Cells.webp', stock:3},
    {id:'5', title:'Fifa 2022', description:"El mismo de cada año...", price:"USD$ 10", pictureUrl:'https://i.postimg.cc/wjvWC5Td/FIFA2022.jpg', stock:10},
  ]

//Creo una promesa para exportarlos
const getData = new Promise ((resolve, reject) =>{

    let condition = true //Flag para intercambiar entre Resolve y Reject
    setTimeout(()=>{
      if(condition){
        resolve(products)
      }else{
        reject('Hubo un error al cargar los productos')
      }
    },2000)
  })

export default getData;