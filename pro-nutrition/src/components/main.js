import React,{Component} from 'react'
import '../components/main.css'
import { Fooddata } from './resources/FoodData'
class Main extends Component{

  constructor(){
    super()
    this.handleChange = this.handleChange.bind(this);
    this.state={
      text: 0,
    }
  }
  
  handleChange(e){
    this.setState({text: e.target.value});
    

}
  getCalories(e){
    
    this.setState({
      text:this.state.text
    })
    for(let i=0;i<Fooddata.length;i++){
      if(Fooddata[i].id===e){
        Fooddata[e].cal=this.state.text*Fooddata[e].finalCal

      }
    }


  }
  reset(e){
    console.log(e)
    this.setState({
      text:this.state.text
    })
    for(let i=0;i<Fooddata.length;i++){
      if(Fooddata[i].id===e){
        Fooddata[e].cal=0

      }
    }

  }

    render(){
        return(

          <>
          <div id='top-div'>
            <h2>Search</h2>
            <input type="search" />
            </div>
            {Fooddata.map((item) => {

            return <div id='full-content'>
            <div><img id='food-img' src={item.img} alt="" /></div>
            <div className="content">
        <p>
          <strong>{item.name}</strong> <br />
          <small>{item.finalCal}</small>
        </p>
      </div>
      <div id='input-and-button'>
        <div>
        <input type="number" defaultValue="0" onChange={this.handleChange} />
        </div>
        <div>
          <button onClick={()=>this.getCalories(item.id)}>+</button>
        </div>
       
      </div>
      <div id='total-calories'>
        <h3> Total Calories = {item.cal}</h3>
        <button id='reset-button' onClick={()=>this.reset(item.id)}>Reset</button>
      </div>

          </div>
             }) }
          </>
        )
    }

}

export default Main