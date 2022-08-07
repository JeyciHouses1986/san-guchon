import Item from "../Item";

export default function ItemDetail (props){
    return(
        <div className="d-flex row col-12 m-1 p-1 justify-content-evenly" >
            {
            props.productos.map((via)=>{
                return(
                    <Item key={via.id} {...via}/>
                )
            })
            }
        </div>
    );
}