import React, { Component } from 'react';
import {v4 as uuid} from 'uuid'
import PropTypes from 'prop-types' 


class Addproject extends Component {

constructor(){
    super();
    this.state ={
        newProject:{}
    }
};


static defaultProps = {
    categories: ['Web Design', 'Web Development', 'Mobile Development']
}


handleSubmit(e){
    if (this.refs.title.value === ''){
        alert ('Title is required')
    } else {
        this.setState({newProject:{
            id:uuid(),
            title: this.refs.title.value,
            category: this.refs.category.value
        }}, ()=>{
            //console.log(this.state)
            this.props.addProject(this.state.newProject);
        });
    }
    e.preventDefault();
}
  render() {  

    let categoryOptions = this.props.categories.map(category =>{
        return <option key = {category} value = {category}> {category} </option>
    });


    return(
      <div>
       <h3>Add project</h3>
       <form onSubmit = {this.handleSubmit.bind(this)}>
           <div>
               <label> Title </label> <br />
               <input type="text" ref="title"  />
           </div>

           <div>
               <label> Category </label> <br />
               <select ref ="category" >
                {categoryOptions}


               </select>
           </div> <br />
           <input type="submit" value="submit" />
       </form>
      </div>
    );
  
};
};


Addproject.propTypes = {
    categories: PropTypes.array,
    addProject: PropTypes.func
  }
  

export default Addproject;

