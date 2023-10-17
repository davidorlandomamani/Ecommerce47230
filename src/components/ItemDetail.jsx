export const ItemDetail = ({ id, categoriaId, title, description, pictureUrl, stock, price }) => {
    return (
        <>
            <div key={id + "_productList"} className="card">
                <div className="container">
                    <img src={pictureUrl}  className="card-img" />
                    <h4>
                        nombre: {title}
                    </h4>
                    <h4>
                        descripcion: {description}
                    </h4>
                    <h4>
                        precio: {price}
                    </h4>
                    <h4>
                        stock: {stock}
                    </h4>
                    <h4>
                        categoria: {categoriaId}
                    </h4>
                </div>
            </div>
        </>
    )

}








