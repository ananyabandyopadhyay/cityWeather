import React, {useState, useEffect} from 'react'
import axios from 'axios';
import "./style.css";

export default function Weather() {
    const [country, setCountry] = useState([]);
    const [state, setState] = useState([]);
    const [city, setCity] = useState([]);
    const [text, setText] = useState('');
    const [temp, setTemp] = useState('');
    const [icon, setIcon] = useState('');
    const [celcius, setCelcius] = useState('');
    const [selectedCntry, setSelectedCntry] = useState('');
    const [selectedState, setSelectedState] = useState('');
    const [selectedCity, setSelectedCity] = useState('');
   

    useEffect(() => {
        country = [
				{ name: 'Afghanistan', state: [ 
                    {name: 'Badakhshan', city: ['Feyzabad']},
                    {name: 'Badakhshan', city: ['Feyzabad']},
                    {name: 'Badakhshan', city: ['Feyzabad']},
                    {name: 'Badakhshan', city: ['Feyzabad']},
                    {name: 'Badakhshan', city: ['Feyzabad']},
                    {name: 'Badakhshan', city: ['Feyzabad']},
                    {name: 'Badakhshan', city: ['Feyzabad']},
                    {name: 'Badakhshan', city: ['Feyzabad']},
                    {name: 'Badakhshan', city: ['Feyzabad']},
                    {name: 'Badakhshan', city: ['Feyzabad']},
                    {name: 'Badakhshan', city: ['Feyzabad']},
                    {name: 'Badakhshan', city: ['Feyzabad']},
                    {name: 'Badakhshan', city: ['Feyzabad']},
                    {name: 'Badakhshan', city: ['Feyzabad']},
                    {name: 'Badakhshan', city: ['Feyzabad']},
                   
                ] },
				{ name: 'Armenia', state: [ 
                    {name: 'Badakhshan', city: ['Feyzabad']},
                    {name: 'Badakhshan', city: ['Feyzabad']},
                    {name: 'Badakhshan', city: ['Feyzabad']},
                    {name: 'Badakhshan', city: ['Feyzabad']},


                ] },
				{ name: 'Azerbaijan', state: [ 
                    {name: 'Badakhshan', city: ['Feyzabad']},
                    {name: 'Badakhshan', city: ['Feyzabad']},
                    {name: 'Badakhshan', city: ['Feyzabad']},
                    {name: 'Badakhshan', city: ['Feyzabad']},


                ] },
				{ name: 'Bangladesh', state: [ 
                    {name: 'Badakhshan', city: ['Feyzabad']},
                    {name: 'Badakhshan', city: ['Feyzabad']},

                ] },
                { name: 'Bhutan', state: [ 
                    {name: 'Badakhshan', city: ['Feyzabad']},

                ] },
                { name: 'British Indian Ocean Territory', setState: [ 
                    {name: 'Badakhshan', city: ['Feyzabad']}, 
                ] }, 
			]
    });
    const setchngCntry= (e) => {
        setSelectedCntry= e.target.value;
        setState= setCountry.find( cntry => cntry.name === e.target.value).state;
        
    }
    const setchngState= (e) => {
        setSelectedState = e.target.value;
        const newState = setCountry.find( cntry => cntry.name === setSelectedCntry).state;
        setCity = newState.find(state => state.name === e.target.value).city;
    }
    const setchngCity= (e) => {
        setSelectedCity= e.target.value;
    }
    const mySubmitHandler = () => {
        const currentCity = setSelectedCity;
         axios.get('http://api.weatherapi.com/v1/current.json?key=ed4f8fbfbc054d5fac145035210904&q=' + currentCity)
            .then((res) => {
                setText= res.data.current.condition.text;
                setTemp= res.data.current.temp_c;
                setIcon= res.data.current.condition.icon;
                setCelcius= "celcius"
               
                // console.log(res.data.current.condition.text)
                // console.log(res.data.current.temp_c)
                // console.log(res.data.current.condition.icon)

            });
    }
    return(
        <>
        <div className="alldrpdwn">
				<span className="drpdwn">
					<select value={setSelectedCntry} onChange={()=>setchngCntry()} className="selectbox">
						<option className="option">Country</option>
						{/* {setCountry.map((e, key) => {
							return <option className="option" key={key}>{e.name}</option>;
						})} */}
                        return <option className="option">{setCountry.name}</option>;

					</select>
				</span>

				<span className="drpdwn">
					<select placeholder="State" value={setSelectedState} onChange={setchngState} className="selectbox">
						<option className="option">State</option>
						{/* {setState.map((e, key) => {
							return <option className="option" key={key}>{e.name}</option>;
						})} */}
                        return <option className="option">{setState.name}</option>;

					</select>
				</span>
				
				<span className="drpdwn">
					<select placeholder="City" value={setSelectedCity} onChange={setchngCity} className="selectbox">
						<option className="option">City</option>
						{/* {setCity.map((e, key) => {
							return <option className="option" key={key}>{e}</option>;
						})} */}
                        return <option className="option">{setCity.name}</option>;

					</select>
				</span>
                </div>
                <button onClick={()=>mySubmitHandler()} className="bttn"><div>see the weather</div></button>
                 <div className="weather">
                 <span className="temp">{setTemp}{" "}</span><span className="celcius"> {setCelcius}</span>
                 <img
                  src={setIcon} 
                  className="img" 
                  />
                  <div class="weather-text">{setText}</div>
                 </div>
        </>
    );
}