import React from "react"
import { render } from "react-dom";
import "./style.css"
class Fun extends React.Component {
  constructor(){
    super();

    this.state = {
      meme : [],
      // mappedMeme : [],
      filteredMeme : [],
      text: "",
      image: ""
    }
  }
    myChangeHandeler=(e) =>{
      this.setState({
        text : e.target.value
      });
    }
     mySubmitHandeler = (e) => {
      e.preventDefault();
       this.setState({
        filteredMeme : this.state.meme.map(meme => {
           if(meme.name.includes(this.state.text)){
              return<span key={meme.id} >
                <h3>{meme.name}</h3>
                <img alt="" src={meme.url} className="memeImage" />
                </span>
  }})
      });
     
  }
  

  componentDidMount(){
    fetch("https://api.imgflip.com/get_memes")
    .then(res => res.json())
    .then( (res) => {
      this.setState({
        meme : res.data.memes,
        image : res.data.memes.url
      })
      // console.log(res.data.memes)

    })
  }

  render() {
      
  return (
    <>
    <h1>
      fun memes
      </h1>
      <br />
      <form className="form">
        <input type="text" onChange={this.myChangeHandeler} className="input" placeholder="type something... Ex: Cat " ></input>
        <button type="submit" onClick={this.mySubmitHandeler} className="button">search</button>
      </form>
      <center>
      {/* <ol>  */}
        {this.state.filteredMeme}
        {/* {this.state.meme.map(meme => {
           if(meme.name.includes(this.state.text)){
              return<li key={meme.id}>
                <img alt="" src={meme.url} style={{height:"30rem",weight:"30rem"}} />
                </li>
  }})} */}
         {/* </ol> */}
    </center>
    </>
  )
}
}
export default Fun