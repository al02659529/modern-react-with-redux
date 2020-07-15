import React from "react";

class UpdatingComponentExercise extends React.Component{
    state = {time: new Date().toLocaleDateString()}

    componentDidMount() {
    setInterval(() =>{
        this.setState({time : new  Date().toLocaleDateString()} )
    }, 1000)
}
render() {
    return (
        <div>
            The time is: {this.state.time}
        </div>
    )
}
}

export default UpdatingComponentExercise;