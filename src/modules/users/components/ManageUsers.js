import React, { Component } from "react";
import { bindActionCreators } from "redux";
import debounce from "lodash.debounce";
import { connect } from "react-redux";
import { useParams } from "react-router-dom";
import CourseForm from "./UserForm";
import * as UserActions from "../actions";
import * as actionCreators from "../../users/actionCreators";
import { newUser } from "../../../store/newUser";
import { actionTypes } from "redux-form";
import { browserHistory } from "react-router";
class ManageUsers extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      ...props.user,
    };
    this.handleChange = this.handleChange.bind(this);
    this.onChangeDebounced = debounce(this.onChangeDebounced, 2000);
  }

  handleChange = (event) => {
    const { name, value } = event.target;
    this.setState({
      ...this.state,
      [name]: value,
    });

    // Execute the debounced onChange method
    this.onChangeDebounced(name, value);
  };

  onChangeDebounced = (name, value) => {
    // Delayed logic goes here
    console.log(name + " " + value);
  };
  handleSubmit = (event) => {
    event.preventDefault();
    console.log(JSON.stringify(this.state));
    this.setState({ saving: true });
    this.props.userActions.addUser(this.state).then(() => {
      browserHistory.push({ pathname: "/users" });
    });
  };
  // componentWillReceiveProps(nextProps) {
  //   if (nextProps.usersList.length == 0) {
  //     this.props.userActions
  //       .getUsers()
  //       .then((data) => {
  //         console.log("if userlist is empty", JSON.stringify(data));
  //       })
  //       .catch((error) => {
  //         console.log("error getting users");
  //         alert("Loading courses failed" + error);
  //       });
  //   }
  // }

  componentDidMount() {
    if (this.props.usersList.length === 0) {
      this.setState({});
      let id = this.props.params.slug;
      console.log("userIDdddd", id);
      this.props.userActions
        .getUSerByID(id)
        .then((data) => {
          console.log("user got by id", JSON.stringify(data));
          this.usersList = { ...data };
          this.setState({
            ...data,
          });
        })
        .then(() => {
          this.props.actionCreators.fetchComplete();
        })

        .catch((error) => {
          console.log("error getting user");
          alert("Loading user failed" + error);
        });
    }
  }

  render() {
    const user = this.state;
    return (
      <CourseForm
        user={user}
        onChange={this.handleChange}
        onSave={this.handleSubmit}
        saving={this.state.saving}
      />
    );
  }
}

//get the pased user from the user list using the id passed from the url
function getUserById(users, id) {
  return users.find((user) => user.id === id) || null;
}

function mapStateToProps(state, ownProps) {
  console.log(ownProps);
  const userId = parseInt(ownProps.params.slug);
  console.log(!isNaN(userId));

  const user =
    !isNaN(userId) && state.users.list.length > 0
      ? getUserById(state.users.list, userId)
      : newUser;
  console.log(JSON.stringify(user));

  return {
    user: user,
    usersList: state.users.list,
  };
}
function mapDispatchToPprops(dispatch) {
  return {
    userActions: bindActionCreators(UserActions, dispatch),
    actionCreators: bindActionCreators(actionCreators, dispatch),
  };
}

export default connect(mapStateToProps, mapDispatchToPprops)(ManageUsers);
