import React from 'react';
import { render } from 'react-dom';
import ReactDOM from 'react-dom';

class MyForm extends React.Component {
state = {
 result: []
}

componentDidMount(){
this.getResults();
}

getResults= _ =>{
 fetch('http://localhost:4000/MyGuests')
  .then(response => response.json()) 
  .then(response => this.setState({result: response.data}))
  .catch(err => console.error(err))
}
 
renderResults = ({name}) => <div> {name}</div>
  render() {
    const {result} = this.state;
    return (
      <div>
      {result.map(this.renderResults)}
      <h2> tyu </h2>
      </div>
    );
  }
}

render(<MyForm />, window.document.getElementById('root'));