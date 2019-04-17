import React, { Component } from "react";

const Checkbox = props => (
  <div>
    <label>
      {props.label}
      <input type="checkbox" {...props} />
    </label>
  </div>
);

class ManageCourses extends Component {
  state = {
    courses: {
      1101: {
        courseID: 1101,
        name: "HONOR 1101",
        label: "HONOR 1101",
        checked: false
      },
      1102: {
        courseID: 1102,
        name: "HONOR 1102",
        label: "HONOR 1102",
        checked: false
      },
      2102: {
        courseID: 2102,
        name: "HONOR 2102",
        label: "HONOR 2102",
        checked: false
      }
    }
  };

  componentDidMount() {
    fetch("/api/doublemap/stops").then(res => {
      res.json().then(json => {
        console.log(json);
      });
    });
  }

  // this method fires when a checkbox is clicked
  // updates the state with the new 'checked' value
  // for the course corresponding to the checkbox that was clicked
  handleChange = event => {
    const value = event.target.value;
    const checked = event.target.checked; // setting checked boolean value to the checkbox value
    // create a copy of the existing state
    let newCourses = Object.assign({}, this.state.courses, {
      ...this.state.courses, //copying top level of courses object (id's)
      [value]: {
        ...this.state.courses[value], // copying course properties
        checked // setting new value for checked property based on (event.target.checked) value
        // checked is shorthand for checked: checked (if the property name and variable are the same you can just do it like this)
      }
    });
    console.log(event.target);
    console.log(newCourses);
    this.setState({
      courses: newCourses
    });
  };

  handleSubmit(event) {
    event.preventDefault();
    // here you could send this data to your server
    console.log(this.state.courses);
  }

  render() {
    let courses = this.state.courses; // assign to variable for less typing later
    return (
      <div>
        <h1>Jason's checkboxes:</h1>
        <form onSubmit={this.handleSubmit.bind(this)}>
          {/* Object.keys(courses) returns an array of the keys from courses object
              => [1101, 1102, 2102] 
              then we map over each element in this array, i.e. for each element, do something
              in our .map(course => {}), course is a variable representing the current element in the array
              For each element, we're creating a Checkbox, and passing it props corresponding to the current course*/}
          {Object.keys(courses).map(course => {
            console.log(courses[course].name);
            return (
              <Checkbox
                name={courses[course].name} // in the first loop, equivalent to this.state.courses[1101].name, which is "HONOR 1101"
                label={courses[course].label}
                checked={courses[course].checked}
                value={courses[course].courseID}
                onChange={this.handleChange.bind(this)}
              />
            );
          })}
          <button type="submit">Submit</button>
        </form>
      </div>
    );
  }
}

export default ManageCourses;
