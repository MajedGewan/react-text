import logo from './logo.svg';
import './App.css';
import Axios from "axios"
import {useState} from "react";

function App() {
  const [name, setName] = useState("");
  const [avatarResponse, setAvatarResponse] = useState("")
  const fetchData = () =>
  {
    Axios.post("https://avatarapi.onrender.com/seha/",{'input':name}).then((res) => setAvatarResponse(res.data)) ;
  };
  return (
    <div className="App">
      <input placeholder="Ex. Pedro..." 
      onChange = {(event) => {
        setName(event.target.value);}}
        />
      <button onClick={fetchData}>Answer</button>
      <h1>Avatar: {avatarResponse}</h1>
    </div>
  );
}

export default App;
