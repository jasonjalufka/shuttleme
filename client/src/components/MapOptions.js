import React, { Component } from "react";

class MapOptions extends Component {
  render() {
    return (
      <div>
        <form>
          <label>
            University
            <select
              defaultValue={this.props.university}
              onChange={this.props.handleChange}
            >
              {this.props.list.map(uni => (
                <option value={uni.id} key={uni.id}>
                  {uni.name}
                </option>
              ))}
            </select>
          </label>
        </form>
      </div>
    );
  }
}

export default MapOptions;
