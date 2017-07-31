//component
function Greeting(props) {
  const isLoggedIn = props.isLoggedIn;
  if (isLoggedIn) {
    return <UserGreeting />;
  }
  return <GuestGreeting />;
}
//component
function WarningBanner(props) {
  if (!props.warn) {
    return null
  }
  return (<div className='warning'>Warning!<div>)
}


class LoginControl extends React.Component {

  constructor(props) {
    super(props);
    this.handleLoginClick = this.handleLoginClick.bind(this);
    this.handleLogoutClick = this.handleLogoutClick.bind(this);
    this.state = {
      isLoggedIn: false
      posts: [],
      comments: []
    };
  }


  //for multiple setStates
  handleLoginClick() {
    // this.setState({isLoggedIn: true});
    this.setState((prevState, props) => ({
      counter: prevState.counter + props.increment
    }))
  }

  handleLogoutClick() {
    this.setState({isLoggedIn: false});
  }



  //update state independently
  componentDidMount() {
    fetchPosts().then(response => {
      this.setState({
        posts: response.posts
      });
    });

    fetchComments().then(response => {
      this.setState({
        comments: response.comments
      });
    });
  }


  render() {
    const isLoggedIn = this.state.isLoggedIn;

    let button = null;
    if (isLoggedIn) {
      button = <LogoutButton onClick={this.handleLogoutClick} />;
    } else {
      button = <LoginButton onClick={this.handleLoginClick} />;
    }

    return (
      <div>
        <ShownElement show={this.state.showWarning} />
        <Greeting isLoggedIn={isLoggedIn} />
        {button}
      </div>
    );
  }
}