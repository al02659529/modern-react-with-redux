import React from "react";
import ReactDOM from "react-dom";
import SeasonDisplay from "./SeasonDisplay";
import Spinner from "./SpinnerLoader";
import UpdatingComponentExercise from "./UpdatingComponentExercise";

class App extends React.Component{

    state = {latitude: null, errorMessage: ''};

    componentDidMount() {
        window.navigator.geolocation.getCurrentPosition(
            position => this.setState({latitude: position.coords.latitude}),
            err => this.setState({errorMessage: err.message})
        );
    }
    
    renderContent(){
        if(this.state.errorMessage && !this.state.latitude) {
            return <div>Error: {this.state.errorMessage}</div>
        }else if (!this.state.errorMessage && this.state.latitude){
            return <SeasonDisplay latitude={this.state.latitude} />
        }else{
            return <Spinner message="Please accept location request" />;
        }
    }

    render() {
          return (
              <div className="border red">
                  {this.renderContent()}
                  <UpdatingComponentExercise />
              </div>
          )
    }
}

ReactDOM.render(<App/>, document.querySelector('#root'));