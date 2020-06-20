import React from 'react';
import './App.css';

// class App extends React.Component{
//   render(){
//     const arr = ["eat", "sleep", "code"]

//     const data = arr.map(item =>{
//                     return <h1>{item}</h1>
//                 })
//     return (
//       <div>
//          {data}
//       </div>
//     );
//   }
// }

// function App(){
//   const arr = ["eat", "sleep", "code"]
//   const data = arr.map(item =>{
//     return <h1>{item}</h1>
//   })
//   return(
//   <div>{data}</div>
//   );
// }

// const Coder = (props) => {
//   return (
//     <div>
//       <h1>{props.name}</h1>
//       <h2>{props.age}</h2>
//       <h2>{props.address}</h2>
//     </div>
//   );
// }
// Class Component
// class Coder extends React.Component{
//   render(){
//     return(
//       <div>
//           <h1>{this.props.name}</h1>
//           <h2>{this.props.age}</h2>
//           <h2>{this.props.address}</h2>
//       </div>
//     );
//   }
// }

class App extends React.Component{
  state = {
    title: "Suresh",
    status: "Programmer"
  }
  changeName = () =>{
    this.setState({
      status: "web developer"
    })
  }

  render(){
    console.log(this.state.status);
    return(
      <div className="App">
        <h1>{this.state.title}</h1>
        <h2>{this.state.status}</h2>
        <button onClick={()=> this.changeName()}>Click me</button>
      </div>
    );
  }
}
export default App;