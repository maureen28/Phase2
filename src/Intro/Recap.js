
const Recap = () => {
    let x = {
        color:'red'
    }

    function sum(a=4,b=5){
        return a * b
    }
    const GoodTeam = () =>{
        return <p>This team is going to champions league</p>
    }
    const BadTeam = () =>{
        return <p>This team sucks</p>
    }

    let name = "Michael"
    let team = 'Chelsea'
    let score = 12
    
    return (

        <>
             {/* Inline  */}
        <h1 style = {x} >Hello</h1>
        <p style = {{fontSize:20}}>{name}</p>
        <p>The total is {sum()}</p>
        
        </>
        );

}

export default Recap;