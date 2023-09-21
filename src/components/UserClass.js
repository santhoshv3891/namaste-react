import React from "react";
import UserContext from "../utils/userContext";

class UserClass extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      count: 1,
      userInfo: {
        name: "Dummy Name",
        location: "Dummy Location",
      },
    };
  }

  async componentDidMount() {
    const response = await fetch("https://api.github.com/users/santhoshv3891");
    const json = await response.json();

    this.setState({ userInfo: json });
  }
  render() {
    const { login, id } = this.state.userInfo;
    return (
      <div className="userDetailsContainer">
        <div>Count: {this.state.count}</div>
        <button
          onClick={() => {
            this.setState({
              count: this.state.count + 1,
            });
          }}
        >
          Counter Incementor
        </button>
        <div>Name: {login}</div>
        <div>ID: {id}</div>
        <div>
          <UserContext.Consumer>
            {(data) => data.loggedInUser}
          </UserContext.Consumer>
        </div>
      </div>
    );
  }
}

export default UserClass;
