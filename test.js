import React , {Component}from 'react';
import  "./test.css"
/*const test = () => {
  return(
    <div>
      <h1> hello world , My name is Shalu </h1>
    </div>
  );

};
*/

class Test extends React.Component
{
  isLoggedIn = false;
  render() {
    
   // console.log("Hello");

    return (
      <div>
        {!this.isLoggedIn ?(<h1>You are not logged in!</h1>):
        (<h1> Congratulation, you are logged in! </h1>)}
      <button onClick ={(e) => this.setState({isLoggedIn: true})}>
        Login!
      </button>
           
      </div>

    );
  }
 }

export default test;
