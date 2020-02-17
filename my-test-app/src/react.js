import React from 'react';
import ReactDOM from 'react-dom';

class MyForm extends React.Component {
  constructor(props) {
    super(props);
    
  }
state = {
 result: []
}

componentDidMount(){
this.getResults();
}

getResults=_ =>{
fetch('http://localhost:3000/MyGuests')
  .then(response => response.json())
  .then(({data}) => {
    console.log(data)
   })
  .catch(err => console.error(err))
}
 
renderResults = ({name,email,comments,reg_date}) => <div> {name} {email}</div>
  render() {
    const {result} = this.state;
    return (
      <div>
      {result.map(this.renderResults)}
      </div>
    );
  }
}

ReactDOM.render(<MyForm />, document.getElementById('root'));