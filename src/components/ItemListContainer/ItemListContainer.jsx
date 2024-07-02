
let productos = [
    { id: 1, name: "piggies", artist: "Matias Mirassou", coleccion: "ALine", stock: 10000, price: 10, rutaImagen: "../src/assets/video/piggies.mp4" },
    { id: 2, name: "flamingos", artist: "Matias Mirassou", coleccion: "ALine", stock: 9997, price: 30, rutaImagen: "../src/assets/video/flamingos.mp4" },
    { id: 3, name: "rubber ducks", artist: "Matias Mirassou", coleccion: "ALine", stock: 9998, price: 50, rutaImagen: "../src/assets/video/ducks.mp4" },
    //{ id: 4, name: "desintegrating art", artist: "Decentral Artist", coleccion: "PArt", stock: 1000, price: 150, rutaImagen: "desintegratingart.mp4" },
    //{ id: 5, name: "stoic art", artist: "Decentral Artist", coleccion: "PArt", stock: 998, price: 250, rutaImagen: "stoicart.mp4" },
    //{ id: 6, name: "ethereal art", artist: "Decentral Artist", coleccion: "PArt", stock: 994, price: 350, rutaImagen: "etherealart.mp4" },
];

function ItemListContainer({ greetings }) {
    return (
        <>
        <div className="main" style={{backgroundColor: "#c6c6c6", textAlign: "center",}}>
            <h1 style={{color: "white", padding: "20px",}}>{greetings}</h1>
            
            <div className="flex-container">
                {productos.map((producto) => (
                    <div className="card mb-3" style={{ width: "18rem" }} key={producto.id}>
                        <div className="card-img-top" ><video style={{ width: "250px", height: "auto" }} src={producto.rutaImagen}/></div>
                        <div className="card-body">
                        <div className="card-title">Name: {producto.name}</div>
                        <div className="card-text">Artist: {producto.artist}</div>
                        <div className="card-text">Price: ${producto.price}</div>
                        <a href="#" className="btn btn-primary">Buy</a>
                        </div>
                    </div>
                ))}
            </div>
            </div>
        </>
    )
}

export default ItemListContainer

