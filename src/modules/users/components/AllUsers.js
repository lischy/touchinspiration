import React, { Component } from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import * as UserActions from "../actions";
import FlatButton from "material-ui/FlatButton";
import { Table } from "reactstrap";
import { ValidatorForm, TextValidator } from "react-material-ui-form-validator";
import { browserHistory } from "react-router";

class AllUsers extends Component {
  constructor(props) {
    super();
    //props.userActions.getUsers();
    console.log(props);
    console.log(props.location.action);
    this.state = {
      filterBy: "",
      userTabSlideIndex: 0,
      redirectToManageUsers: false,
      editUserLink: false,
    };
  }
  //load the user only if the array is empty.
  componentDidMount() {
    if (
      this.props.usersList.length == 0 ||
      this.props.location.action == "PUSH"
    ) {
      this.props.userActions.getUsers().catch((error) => {
        console.log("error getting users");
        alert("Loading courses failed" + error);
      });
    }
  }
  //Search html tables using javascript
  handleSearch(event) {
    var input, filter, table, tr, td, i;

    input = event.target.value;

    this.setState({ filterBy: input });

    filter = input.toUpperCase();
    table = document.getElementById("userTable");
    tr = table.getElementsByTagName("tr");

    // Loop through all table rows, and hide those who don't match the search query
    for (i = 0; i < tr.length; i++) {
      td = tr[i].innerHTML;
      if (td) {
        if (td.toUpperCase().indexOf(filter) > -1) {
          tr[i].style.display = "";
        } else {
          tr[i].style.display = "none";
        }
      }
    }
  }
  handleRedirect(id) {
    browserHistory.push("user/" + id);
  }
  render() {
    const { usersList } = this.props;

    return (
      <div>
        {this.state.redirectToManageUsers && browserHistory.push("user")}

        <div>
          <div className="column last-column col-sm-offset-2 col-sm-8">
            <div className="column-title-box">
              <p className="column-title"> User Management </p>
            </div>
            <div className="col-xs-12">
              <div className="col-sm-7 col-md-7 float-left users-count-tab">
                <p className="users-count">
                  {" "}
                  Users | {usersList.length} users{" "}
                </p>
              </div>
              <div className="col-sm-5 col-md-5 float-right">
                <div className="col-sm-5 col-sm-offset-2 col-md-5 col-md-offset-2">
                  <span className="search-users">
                    <ValidatorForm
                      ref="form"
                      onSubmit={() => console.log(this.state.filterBy)}
                      onError={(errors) => console.log(errors)}
                    >
                      <TextValidator
                        floatingLabelText="Search..."
                        name="filterBy"
                        value={this.state.filterBy}
                        onChange={this.handleSearch.bind(this)}
                        className="search-input-field"
                      />
                    </ValidatorForm>
                  </span>
                </div>
                <div className="col-sm-5 col-md-5 add-users float-right">
                  <FlatButton
                    label="Add User"
                    labelStyle={{
                      textTransform: "capitalize",
                      color: "#337ab7",
                    }}
                    onTouchTap={() =>
                      this.setState({ redirectToManageUsers: true })
                    }
                    className="float-right"
                  />
                </div>
              </div>
            </div>
            <div className="col-xs-12">
              <Table striped id="">
                <thead>
                  <tr>
                    <th>Full Name</th>
                    <th>Email</th>
                    <th>Occupation</th>
                  </tr>
                </thead>
                <tbody id="userTable">
                  {usersList.map((user, i) => {
                    return (
                      <tr key={i}>
                        <td className="capitalize">{user.name}</td>
                        <td>{user.email}</td>
                        <td>{user.occupation}</td>
                        <td>
                          <button
                            className="btn btn-outline-danger"
                            onClick={() => this.handleRedirect(user.id)}
                          >
                            Edit
                          </button>
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </Table>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return {
    userActions: bindActionCreators(UserActions, dispatch),
  };
}

function mapStateToProps(state, ownProps) {
  return {
    usersList: state.users.list,
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(AllUsers);
