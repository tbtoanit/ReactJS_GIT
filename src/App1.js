import React, { Component } from 'react'
import logo from './logo.svg';
import './App1.css';




// var PrintHello1 = function(){
//   return (
//     <div>
//       <h1>Python</h1>
//       <p>Java</p>
//     </div>
//     )
// }

// arrow function
var PrintHello2 = () => (
  <div>
    <h1>Python</h1>
    <p>Java</p>
  </div>
)

var spread_example = (a, ...params) => (
  <div>
    <h1>{a}</h1>
    <h2>{params.join(', ')}</h2>
  </div>
)

function RenderProduct(props) {
  return (
    <div>
      <h1>My name is: {props.yourName}</h1>
      <h1>My major is: {props.major}</h1>
    </div>
  )
}

function App2() {
  const paramsArray = [1, 2, 3];
  const a = 'Hello';
  var tong = 0;
  for (var i = 0; i < paramsArray.length; i++) {
    tong += paramsArray[i];
  }

  var object_data_demo = {
    [tong]: ''
  }
  return (
    <div className="App">
      <header className="App-header">
        <RenderProduct yourName = "IMIC Technology" major = "Fullstack Developer"/>
        <RenderProduct yourName = "React JS class" major = "Front-end Developer"/>
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        {spread_example(a, ...paramsArray)}
        {tong}
        {console.log(object_data_demo)}
      </header>
      <App2 />

    </div>
  );
}


class TestClassGeneration extends Component {
  render() {
    return (
      <div>
        <p>{this.props.message}</p>
      </div>
    );
  }
}

function DemoMapReactJS(props){
  return(
    <p>{props.arr.map(number => number*2)}</p>
  );
}

function DeclareObjectExample(){
  var a = "Name"
  var b = "Age"
  const person = {
    name:a,
    age:b
  }
  console.log('Cách 1')
  console.log(person)


  var name1 = "Tom"
  var age1 = 30
  const person1 = {
    name1,
    age1
  }
  console.log('Cách 2')
  console.log(person1)

  //muốn lấy value của biến a,b làm key
  const person2 = {
    [a]:"Quynh",
    [b]:"20"
  }
  console.log('lấy value của biến a,b làm key')
  console.log(person2)
}

//https://leetcode.com/problems/remove-duplicates-from-sorted-list/
function BaiTapLeetCode(){
  var head = [1,1,2,3,3]
  var output = []
  for(let i=0; i< head.length; i++){
    if(!checkvalueExist(head[i], output)){
      output.push(head[i])
    }
  }
  console.log(output) //output [1,2,3]
}

function checkvalueExist(n, nums){
  for(let i=0; i<nums.length; i++){
    if(n == nums[i]){
      return true;
    }
  }
  return false;
}



class App1 extends Component {

  render() {
    var data = [1,2,3]
    return (
      <div>
        <TestClassGeneration message = "Cach dua thong diep qua props"/>
        <h1>Test class for rendering</h1>
        {/* <DemoMapReactJS arr = {data}/> */}
        {/* <DeclareObjectExample/> */}
        <BaiTapLeetCode/>
      </div>
    );
  }
}




export default App1;