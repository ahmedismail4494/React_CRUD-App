import React , { Component ,Fragment } from 'react';



class CourseList extends Component  {

  state = {
    isEdit: false
  }

  // Render Course Form
  renderCourse = () => {
    return(
      <li>
          <span>{ this.props.details.name }</span>
          <button className='edit' onClick={() => {this.toggleState()} } > Edit </button>
          <button className='delete' onClick={() => {this.props.DeleteCourse(this.props.index)} }> Delete </button>
        </li>
    )
  }

  // toggleState
  toggleState = () => {
    let {isEdit} = this.state;
    this.setState({ isEdit: !isEdit })
  }


  // updateCourseItem
  updateCourseItem = (e) => {
    e.preventDefault();
    this.props.editCourse(this.props.index, this.input.value);
    this.toggleState();

  }


  // Render Update Form
  renderUpdateForm = () => {
    return(
      <form className="update" onSubmit={this.updateCourseItem}>
        <input type="text" ref={(v) => {this.input=v} } defaultValue={ this.props.details.name } />
        <button>Update</button>
      </form>
    )
  }



  render(){
    let {isEdit} = this.state;
    return (
      <Fragment>
        { isEdit ? this.renderUpdateForm() : this.renderCourse() }
      </Fragment>
    );
  }
  
}

export default CourseList;







