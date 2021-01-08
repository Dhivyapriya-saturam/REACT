import React from 'react';
class App extends React.Component {
constructor(props) {
      super(props);
      this.state = {
         data: 0
      }
      this.setNewNumber = this.setNewNumber.bind(this)
      this.changeNewNumber=this.changeNewNumber.bind(this)
   };
   setNewNumber() {
      this.setState({data: this.state.data + 1})
   }
   changeNewNumber() {
      this.setState({data: this.state.data-1})
   }

   render() {
      return (
         <div className="container">
            <button class="btn btn-success" onClick = {this.setNewNumber}>INCREMENT</button>
            <button class="btn btn-danger" onClick = {this.changeNewNumber}>DECREMENT</button>
            <h1 class="text-success">{this.state.data}</h1>
          </div>
            );
            }
          }
export default App;