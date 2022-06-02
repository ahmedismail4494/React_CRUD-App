import React  from 'react';

const CourseForm = (props) => {
    return(
      <div>
        <form className="main_form" onSubmit={props.AddCourse}>
          <input type="text" onChange={props.UpdateCourse} value={props.current} />
          <button type="submit" > Add Course </button>
        </form>
      </div>  
    );
}


export default CourseForm;