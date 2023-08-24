class Vehicle1 extends React.Component{
    constructor(props){
        super()
    
    }
    render(){
        return <Car name ={'Ferrari'}/>
    }
}

class Car extends React.Component{
    constructor(props){
        super()
    }
    render(){
        return <p>{this.props.name}</p>
    }
}