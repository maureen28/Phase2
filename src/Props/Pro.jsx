const Pro =()=> {
    let team = 'Chelsea';
    let score = 20;
    const GoodTeam =(props)=>{
        console.log(props)
// Destructuring props
let {team, score} = props
    return(
        <>
        <p>{team} is good and scored {score}</p>
        <p>{props.team} is good and scored {props.score}</p>
        </>
    )
    }
    return(
    <div>
       <p> <GoodTeam team={team} score={10}/> </p>
        <GoodTeam team={'Arsenal'} score={23}/>
        <p> <GoodTeam team={'Wolves'}/></p>
        </div>
        )


}
export default Pro