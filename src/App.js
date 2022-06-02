import React , { Component } from 'react';
import './App.css';

import CourseForm from './components/CourseForm';
import CourseList from './components/CourseList';


class App extends Component  {

  state = {
    courses : [
      {name: "HTML"},
      {name: "CSS"},
      {name: "JS"}
    ],
    current: ''
  }
  

  // UpdateCourse
  UpdateCourse = (e) => {
    this.setState({current: e.target.value})
  }

  // AddCourse
  AddCourse = (e) => {
    e.preventDefault();
    const current = this.state.current;
    const courses = this.state.courses;
    if(current.length >= 1 && current!== " "){
      courses.push({name:current});
      this.setState({courses:courses, current:""}); }
    else{ return null } 
  }

  // AddCourse
  DeleteCourse = (index) => { 
    const courses = this.state.courses;
    courses.splice(index,1);
    this.setState({courses});
  }

  // editCourse 
  editCourse = (index, value) => {
    let courses = this.state.courses;
    let course = courses[index];
    course['name'] = value;
    this.setState({courses});
  }





  render(){

    const {courses} = this.state;
    const courseList = courses.map( (course, index) => { 
      return ( <CourseList details={course} key={index} index={index} DeleteCourse={this.DeleteCourse} editCourse={this.editCourse} /> );
    })

    return (
      <div className="App">
        <div className="container">
          <h1> Courses Content </h1>

          <CourseForm UpdateCourse={this.UpdateCourse} AddCourse={this.AddCourse} current={this.state.current} />

          <ul> {courseList} </ul>
        </div>
      </div>
    );
  }
  
}

export default App;
