import './App.css';
import jokeData from './jokeData';
import ConditionalRendering from './components/ConditionalRendering';


export default function App() {
  const firstName = "kiran"
  const lastName = "SR"
  
  const jokelist = jokeData.map(jokeDatas => 
    <ConditionalRendering key ={jokeDatas.id} setup ={jokeDatas.setup} line ={jokeDatas.punchline} />
    // we are adding key to avoid the warnig, remove the key value and check the error React version 18.3.1 for the documentation
  )

  return (
    <div className="App">      
      <h1>The name is {firstName} {lastName}</h1> 
      <h2>learning React</h2>
      {/* i created a file with jokes collection and using map function iterate over the array and pass the value to the props, no hard coded cal */}
      {/* {jokeData.map(jokeDatas=>{
        return < ConditionalRendering setup ={jokeDatas.setup} line = {jokeDatas.punchline} />
      })}  */}
      {jokelist}    
    </div>
  );
}
