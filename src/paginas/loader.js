import React,{Component} from 'react';
import './loader/loader.css'
import loader from './loader/loader.gif'
class Loader extends Component{
  render(){
    return(
      <section id="loader" className="position-fixed w-100 h-100 bg-white" style={{backgroundImage:`url(${loader})`}}></section>
    )
  }
};

export default Loader;