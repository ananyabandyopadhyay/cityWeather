import React from 'react';
import axios from 'axios';
import "./style.css"
class Dropdown extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			countries : [],
			states : [],
			cities : [],
            text: [],  
            temp: [],     
            icon : [], 
            celcius:'',    
			selectedCountry : '',
			selectedState : '',
            selectedCity : ''
		};
		this.changeCountry = this.changeCountry.bind(this);
		this.changeState = this.changeState.bind(this);
        this.changeCity = this.changeCity.bind(this);
	}
  
	componentDidMount() {
        // static getDerivedStateFromProps(){
		this.setState({
			countries : [
				{ name: 'Afghanistan', states: [ 
                    {name: 'Badakhshan', cities: ['Feyzabad']},
                    {name: 'Badghis', cities: ['Qal Eh Ye Now']},
                    {name: 'Baghlan', cities: ['Baghlan','Pol E Khomri	']},
                    {name: 'Balkh', cities: ['Balkh','Mazar E Sharif	']},
                    {name: 'Bamyan', cities: ['Bamian']},
                    {name: 'Farah', cities: ['Farah']},
                    {name: 'Faryab', cities: ['Andkhvoy','Andkhvoy']},
                    {name: 'Ghazni', cities: ['Ghazni']},
                    {name: 'Ghor', cities: ['Chaghcharan']},
                    {name: 'Hilmand', cities: ['Lashkar Gah']},
                    {name: 'Hirat ', cities: ['Herat','Karokh']},
                    {name: 'Jawzjan', cities: ['Sheberghan']},
                    {name: 'Kabul', cities: ['Kabul']},
                    {name: 'Kandahar', cities: ['Kandahar']},
                    {name: 'Kapisa', cities: ['Mahmud E Eraqi']},
                    {name: 'Kunar ', cities: ['Asadabad']},
                    {name: 'Kunduz ', cities: ['Kondoz']},
                    {name: 'Laghman', cities: ['Mehtar Lam']}

                ] },
				{ name: 'Armenia', states: [ 
                    {name: 'Aragatsotn', cities: ['Ashtarak']}, 
                    {name: 'Ararat', cities: ['Artashat']},
                    {name: 'Erevan', cities: ['Yerevan']},
                    {name: 'Gegharkunik', cities: ['Gavarr']},
                    {name: 'Lori', cities: ['Vanadzor']},
                    {name: 'Shirak', cities: ['Gyumri']},
                    {name: 'Tavush', cities: ['Ijevan']},

                ] },
				{ name: 'Azerbaijan', states: [ 
                    {name: 'Ali Bayramli', cities: ['Ali Bayramli']},
                    {name: 'Astara', cities: ['Astara']}, 
                    {name: 'Baki', cities: ['Baki']},
                    {name: 'Gadabay', cities: ['Gadabay']},
                    {name: 'Ganca', cities: ['Ganca']},
                    {name: 'Goranboy', cities: ['Goranboy']},
                    {name: 'Goycay', cities: ['Goycay']},
                    {name: 'Naxcivan', cities: ['Naxcivan']},
                    {name: 'Oguz', cities: ['Oguz']},
                    {name: 'Qabala', cities: ['Qabala']},

                ] },
				{ name: 'Bangladesh', states: [ 
                    {name: 'Barisal', cities: ['Barisal']},
                    {name: 'Chittagong', cities: ['Chittagong','Comilla']}, 
                    {name: 'Dhaka ', cities: ['Dhaka','Jamalpur','Jamalpur','Narayanganj','Tangail']},
                    {name: 'Khulna', cities: ['Jessore','Khulna']},
                    {name: 'Rajshahi', cities: ['Nawabganj','Pabna','Rajshahi','Rangpur','Saidpur']},
                    {name: 'Sylhet', cities: ['Sylhet']},
                ] },
                { name: 'Bhutan', states: [ 
                    {name: 'Punakha', cities: ['Punakha']}, 
                    {name: 'Thimphu', cities: ['Paro','Thimphu']},
                    {name: 'Wangdi Phodrang', cities: ['PWangdue Prodranguebla']},
                ] },
                { name: 'British Indian Ocean Territory', states: [ 
                    {name: 'abc', cities: ['Puebla']} 
                ] },
                
                
			]
		});
    }
  
	changeCountry(event) {
		this.setState({selectedCountry: event.target.value});
        // console.log(this.state.selectedCountry);
	    this.setState({states : this.state.countries.find(cntry => cntry.name === event.target.value).states});
	}

	changeState(event) {
		this.setState({selectedState: event.target.value});
		const stats = this.state.countries.find(cntry => cntry.name === this.state.selectedCountry).states;
		this.setState({cities : stats.find(stat => stat.name === event.target.value).cities});
        // console.log(this.state.cities);

    }
	changeCity(event){

		this.setState({selectedCity: event.target.value});
    }
    
	render() {
        const mySubmitHandler = () => {
            // event.preventDefault();
        console.log(this.state.selectedCity)
        const currentCity = this.state.selectedCity;
        axios.get('http://api.weatherapi.com/v1/current.json?key=ed4f8fbfbc054d5fac145035210904&q=' + currentCity)
            .then((res) => {
                this.setState({ text: res.data.current.condition.text,
                                temp: res.data.current.temp_c,
                                icon: res.data.current.condition.icon,
                                celcius: "celcius"
                });
                // console.log(res.data.current.condition.text)
                // console.log(res.data.current.temp_c)
                // console.log(res.data.current.condition.icon)

            });
            
        }
        const weatherIcon = (this.state.icon);
		return (
			<div className="root">
                <h1><center>Check today's weather</center></h1>
                <div className="alldrpdwn">
				<span className="drpdwn">
					<select value={this.state.selectedCountry} onChange={this.changeCountry} className="selectbox">
						<option className="option">Country</option>
						{this.state.countries.map((e, key) => {
							return <option className="option" key={key}>{e.name}</option>;
						})}
					</select>
				</span>

				<span className="drpdwn">
					<select placeholder="State" value={this.state.selectedState} onChange={this.changeState} className="selectbox">
						<option className="option">State</option>
						{this.state.states.map((e, key) => {
							return <option className="option" key={key}>{e.name}</option>;
						})}
					</select>
				</span>
				
				<span className="drpdwn">
					<select placeholder="City" value={this.state.selectedCity} onChange={this.changeCity} className="selectbox">
						<option className="option">City</option>
						{this.state.cities.map((e, key) => {
							return <option className="option" key={key}>{e}</option>;
						})}
					</select>
				</span>
                </div>
                <button onClick={()=>mySubmitHandler()} className="bttn"><div>see the weather</div></button>
                 <div className="container">
                 <div className="weather" style={{ backgroundImage: `url(${weatherIcon})`, backgroundPosition: "right top", backgroundRepeat: "no-repeat", backgroundSize:"6rem" }}>
                 <span className="temp">{this.state.temp}{" "}</span><span className="celcius"> {this.state.celcius}</span>{" "}<span>{this.state.text}</span>
                 {/* <img
                  src={weatherIcon} 
                  className="img" 
                  />
                  <div class="weather-text">{this.state.text}</div> */}
                 </div>
                 </div>
			</div>
		)
	}
}
export default Dropdown;
//http://api.weatherapi.com/v1?key=ed4f8fbfbc054d5fac145035210904