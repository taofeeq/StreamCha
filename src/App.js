import React from 'react';
import logo from './logo.svg';
import './App.css';
import './style.css';


class App extends React.Component {
intervalID;

state = {
 result: []
}

componentDidMount(){
this.getResults();


}
 componentWillUnmount() {
        /*
          stop getData() from continuing to run even
          after unmounting this component. Notice we are calling
          'clearTimeout()` here rather than `clearInterval()` as
          in the previous example.
        */
        clearTimeout(this.intervalID);
}
getResults= _ =>{
 fetch('http://localhost:4000/MyGuests')
  .then(response => response.json()) 
  .then(response => this.setState({result: response.data}))
  .catch(err => console.error(err))
  this.intervalID = setTimeout(this.getResults.bind(this), 100000);

}
renderResults = ({name,email,comments,reg_date,date_time}) => <div>{name}:({email}) {comments} <br/> <div> <p className="timer"> {date_time}</p> </div> </div> 
render() {
const {result} = this.state;
  return (
    <div className="App">
      <div className="comment_head">
      <h6> Comments: </h6>
      </div>
      <br/>
      <div className="comment_body">
       {result.map(this.renderResults)} <br/>
      </div>
      
    </div>
  );
}
}

export default App;