import './App.css';
import { useState } from 'react';

function App() {
  const [title, setTitle] = useState("")
  const [firstName, setFirstName] = useState("")
  const [secondName, setSecondName] = useState("")
  const [lastName, setLastName] = useState("")
  const [dob, setDob] = useState("")
  const [email, setEmail] = useState("")
  const [mobileNumber, setMobileNumber] = useState("")
  const [gender, setGender] = useState("")
  const [nationality, setNationality] = useState("")
  const [firstLine, setFirstLine] = useState("")
  const [city, setCity] = useState("")
  const [postCode, setPostCode] = useState("")
  const [carMake, setCarMake] = useState("")
  const [carModel, setCarModel] = useState("")
  
  const handleSubmit = async (e) => {
    e.preventDefault()
    console.log(title);
    console.log(firstName);
    console.log(secondName);
    console.log(lastName);
    console.log(dob);
    console.log(email);
    console.log(mobileNumber);
    console.log(gender);
    console.log(nationality);
    console.log(firstLine);
    console.log(city);
    console.log(postCode);
    console.log(carMake);
    console.log(carModel);
    console.log("===============================================");
    window.alert("Form submitted succesfully")
    document.getElementById("test_tdg").reset()
  }
  return (
    <div className="App">
      <form className="test_tdg" id='test_tdg'>
        <h2>TEST TDG</h2>
        <label htmlFor="personal_title">Title: </label>
        <input className="personal_title" type="text" placeholder="Title" onChange={(e) => setTitle(e.target.value)} />
        <br/>
        <label htmlFor="personal_firstName">First Name: </label>
        <input className="personal_firstName" type="text" placeholder="First name" onChange={(e) => setFirstName(e.target.value)} />
        <br/>
        <label htmlFor="personal_secondName">Second Name: </label>
        <input className="personal_secondName" type="text" placeholder="Second name" onChange={(e) => setSecondName(e.target.value)} />
        <br/>
        <label htmlFor="personal_lastName">Last Name: </label>
        <input className="personal_lastName" type="text" placeholder="Last name" onChange={(e) => setLastName(e.target.value)} />
        <br/>
        <label htmlFor="personal_dob">Date of Birth: </label>
        <input className="personal_dob" type="text" placeholder='Date of Birth' onChange={(e) => setDob(e.target.value)} />
        <br/>
        <label htmlFor="personal_email">Email Address: </label>
        <input className="personal_email" type="email" placeholder="Email Address" onChange={(e) => setEmail(e.target.value)} />
        <br/>
        <label htmlFor="personal_mobileNumber">Phone: </label>
        <input className="personal_mobileNumber" type="text" placeholder="Phone" onChange={(e) => setMobileNumber(e.target.value)} />
        <br/>
        <label htmlFor="personal_gender">Gender: </label>
        <input className="personal_gender" type='text' placeholder='Gender' onChange={(e) => setGender(e.target.value)} />
        <br/>
        <label htmlFor="personal_nationality">Nationality: </label>
        <input className="personal_nationality" type="text" placeholder="Nationality" onChange={(e) => setNationality(e.target.value)} />
        <br/>
        <label htmlFor="residentialAddress_firstLine">First Line of Address: </label>
        <input className="residentialAddress_firstLine" type="text" placeholder="First Line of Address" onChange={(e) => setFirstLine(e.target.value)} />
        <br/>
        <label htmlFor="residentialAddress_city">City: </label>
        <input className="residentialAddress_city" type="text" placeholder="City" onChange={(e) => setCity(e.target.value)} />
        <br/>
        <label htmlFor="residentialAddress_postCode">Post Code: </label>
        <input className="residentialAddress_postCode" type="text" placeholder="Post Code" onChange={(e) => setPostCode(e.target.value)} />
        <br/>
        <label htmlFor="cars_carMake">Cark Make: </label>
        <input className="cars_carMake" type="text" placeholder="Cark Make" onChange={(e) => setCarMake(e.target.value)} />
        <br/>
        <label htmlFor="cars_carModel">Car Model: </label>
        <input className="cars_carModel" type="text" placeholder="Car Model" onChange={(e) => setCarModel(e.target.value)} />
        <br/>
        <button onClick={handleSubmit}>Submit Form</button>
      </form>
    </div>
  );
}

export default App;
