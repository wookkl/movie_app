import React from "react";
import axios from "axios";
import PropTypes from "prop-types";

class App extends React.Component{

  state ={
		isLoading:true,
		movies:[],
	};
	getMovies = async() =>{
		return await axios.get("https://yts-proxy.now.sh/list_movies.json");
	}
	componentDidMount(){
		const movies = this.getMovies();
		this.setState({isLoading:false});
	}
	
  render(){
		return <div>{this.state.isLoading?"Loading...":"We are ready"}</div>;
	}
}
export default App;
