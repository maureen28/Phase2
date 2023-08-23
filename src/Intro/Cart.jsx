import '../node_modules/bootstrap/dist/css/bootstrap.min.css'


// Bootstrap
function Cart(){
    return (
    <div>
        <button className="btn btn-primary">Click Me Bootstrap</button>
        
    </div>
    )
}

// Tailwind
export const Cart2 = () => {
    return(
        <div>
            <br></br>
            <button className="bg-blue-500 hover:bg-blue-400 text-red font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded">Tailwind btn</button>
        </div>
    )
}

export default Cart