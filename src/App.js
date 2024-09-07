import logo from './logo.svg';
import './App.css';
import Axios from "axios"
import {useState} from "react";

function App() {
  const [name, setName] = useState("");
  const [avatarResponse, setAvatarResponse] = useState("")
  const fetchData = () =>
  {
    Axios.post("https://avatarapi.onrender.com/oman/",{'input':name}).then((res) => setAvatarResponse(res.data)) ;
  };
  return (
    <div className="App">
      <textarea placeholder="Your Question"
      style={{'margin':'10px',  
              'width':'100%',
              'max-width': '220px',
              'height': '45px',
              'padding': '12px',
              'border-radius': '12px',
              'border': '1.5px solid lightgrey',
              'outline': 'none',
              'transition': 'all 0.3s cubic-bezier(0.19, 1, 0.22, 1)',
              'box-shadow': '0px 0px 20px -18px'
      }} 
      onChange = {(event) => {
        setName(event.target.value);}}
        />
      <div style={{'display':'block'}}></div>
      <button
        style={
          {
          'clear': 'both',
          'width':'100%',
          'max-width': '220px',
          'padding': '17px 40px',
          'border-radius': '50px',
          'cursor': 'pointer',
          'border': '0',
          'background-color': 'green',
          'box-shadow': 'rgb(0 0 0 / 5%) 0 0 8px',
          'letter-spacing': '1.5px',
          'text-transform': 'uppercase',
          'font-size': '15px',
          'transition': 'all 0.5s ease',
          'color':'white'
        }}
        onClick={fetchData}>Answer</button>
      <h1>Avatar: {avatarResponse}</h1>
    </div>
  );
}

export default App;
