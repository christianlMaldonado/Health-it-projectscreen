import {useState} from "react";
import './App.css';
import FormInput from "./components/FormInput";

const App = () => {
const [values,setValues] = useState({
  firstname:"",
  lastname:"",
  modelname:"",
  serialnumber:"",
  bureau:"",
  username:"",
});

  const inputs = [
    {
      id:1,
      name:"firstname",
      type:"text",
      placeholder:"First Name",
      label:"First Name",
    },
    {
      id:2,
      name:"lastname",
      type:"text",
      placeholder:"Last Name",
      label:"Last Name",
    },
    {
      id:3,
      name:"modelname",
      type:"text",
      placeholder:"Model Name",
      label:"Model Name",
    },
    {
      id:4,
      name:"serialnumber",
      type:"text",
      placeholder:"Serial Number",
      label:"Serial Number",
    },
    {
      id:5,
      name:"bureau",
      type:"text",
      placeholder:"Bureau",
      label:"Bureau",
    },
    {
      id:6,
      name:"location",
      type:"text",
      placeholder:"Location",
      label:"Location",
    },
  ];

  const handleSubmit = (e)=>{
    e.preventDefault();
  };

const onChange = (e)=>{
  setValues({...values, [e.target.name]: e.target.value });
};


  return (
  <div className='app'>
    <form onSubmit={handleSubmit}>
      {inputs.map((input) => (
        <FormInput
        key={input.id} 
        {...input} 
        value={values[input.name]}
        onChange={onChange}
        />
      ))}
      <button>Submit</button>
    </form>
  </div>
  );
};

export default App;