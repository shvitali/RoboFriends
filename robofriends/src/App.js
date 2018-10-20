import React, { Component } from "react";
import "./App.css";
import RoboCardList from "./RoboCardList";
import RoboSearch from './RoboSearch';
//import {robots} from "./robots"; --> Was removed by Requesting from API


class App extends Component
{
    constructor () {
        super ();
        this.state = {
            robots: [],
            searchfield: "",
        }
    }

    onSearchChange = (event) => {
        this.setState({searchfield: event.target.value})
    }

    componentDidMount() {
        fetch('https://jsonplaceholder.typicode.com/users')
                            .then(response => response.json())
                            .then(users => this.setState({robots: users}));       
    }
    

    render(){
        const filteredRobots = this.state.robots.filter(robot => {
          if (robot.name.toLowerCase().includes(this.state.searchfield.toLowerCase()) ||
                robot.email.toLowerCase().includes(this.state.searchfield.toLowerCase()) ||
                String(robot.id).toLowerCase().includes(String(this.state.searchfield).toLowerCase()))
                {
                    return robot;
                }
        });

        if (filteredRobots.length < 1)
        {
            return <h1 className = "f1 tc">Loading...</h1>
        }else {
        return(
            <div className = "tc">
                <h1 className = "f1">Robofriends</h1>
                 <RoboSearch searchChanged = {this.onSearchChange}/>
                 <RoboCardList robotsArray = {filteredRobots} />
            </div>
        );
        }
    }
}

export default App;