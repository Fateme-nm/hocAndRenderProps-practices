import "./App.css";
import Posts from "./components/Posts";
import Login from "./components/Login";
import Storage from "./components/Storage";
import Resetpassword from "./components/ResetPassword";

function App() {
  //first practice
  // return <Posts link={"https://jsonplaceholder.typicode.com/posts"} />;

  //seconde practice
  return (
    <>
      <Storage render={user => <Login user={user}/>}/>
      <Storage render={user => <Resetpassword user={user}/>}/>
    </>
  )
}

export default App;
