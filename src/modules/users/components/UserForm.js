import React, { Component } from "react";
import PropTypes from "prop-types";
import TextInput from "../../../common/TextInput";
import TextArea from "../../../common/TextArea";
// import SelectInput from "../../../common/SelectInput";

class UsersForm extends Component {
  constructor(props) {
    super(props);
  }

  handleSubmit = (event) => {
    event.preventDefault();
    this.props.userActions.addUser(user);
  };
  render() {
    return (
      <form onSubmit={this.props.onSave}>
        <h2> users</h2>
        {/* {errors.onSave && (
                    <div className="alert alert-danger" role="alert">
                        {errors.onSave}
                    </div>
                )} */}
        <TextInput
          name="name"
          label="Name"
          value={this.props.user.name}
          // error={errors.title}
          onChange={this.props.onChange.bind(this)}
        />
        <TextInput
          name="occupation"
          label="Occupation"
          value={this.props.user.occupation}
          // error={errors.title}
          onChange={this.props.onChange.bind(this)}
        />
        <TextInput
          name="email"
          label="Email"
          value={this.props.user.email}
          // error={errors.title}
          onChange={this.props.onChange.bind(this)}
        />
        <TextArea
          name="bio"
          label="Bio"
          value={this.props.user.bio}
          onChange={this.props.onChange.bind(this)}
        />
        {/* 
        <SelectInput
          name="userId"
          label="Author"
          value={4 || ""}
          defaultOption="Select Author"
          // options={users.map(author => ({
          //     value: users.id,
          //     text: users.name
          // }))}
          onChange={this.props.onChange.bind(this)}
          // error={errors.author}
        />

        <TextInput
          name="category"
          label="Category"
          value={this.props.user.id}
          onChange={this.props.onChange.bind(this)}
          // error={errors.category}
        /> */}

        <button type="submit" className="btn btn-primary">
          {this.props.saving ? "Saving..." : "Save"}
        </button>
      </form>
    );
  }
}

export default UsersForm;
