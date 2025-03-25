import React from 'react'
import  mommaCat from './assets/mommaCat.avif'
import './App.css'


function App() {
// Task 1: Display two variables-user information-message//
  const greeting = "Hello React student!";
  const welcomeMessage = "Welcome to the React course!";
  const num1 = 15;
  const num2 = 3;
  const userInfo = {
     name: "Natalie",
     location: "Buffalo, NY",
     favoriteActivities: ["coding", "listening to music", "reading", "cooking"]
   };
  
   return (
  <>
  <div className="App">
  {/* Task 1: Display two variables */}
  <h1>{greeting}</h1>
  <h2>{welcomeMessage}</h2>
  </div>
 {/* Task 2: Display number operations */}
  <div>
    <h3>Number Operations:</h3>
    <p>{num1} + {num2} = {num1 + num2}</p>
    <p>{num1} - {num2} = {num1 - num2}</p>
    <p>{num1} * {num2} = {num1 * num2}</p>
    <p>{num1} / {num2} = {num1 / num2}</p>
  </div>
  
  {/* Task 3: Display object information */}
   <div>
    <h3>About Me:</h3>
    <p>My name is {userInfo.name} and I live in {userInfo.location}.</p>
    
    <h4>My Favorite Activities:</h4>
    <ul>
       <li>{userInfo.favoriteActivities[0]}</li>{/* "coding" */}
       <li>{userInfo.favoriteActivities[1]}</li>{/* "listening to music"*/}
       <li>{userInfo.favoriteActivities[2]}</li>{/* "reading" */}
       <li>{userInfo.favoriteActivities[3]}</li>{/* “cooking”*/}
    </ul>
    </div>
    
    {/* Task 4: Display image */}
    <div>
    <h3>Cute Kittens:</h3>
    <p>Here is a picture of a momma cat with her kittens:</p>
    
    <img src={mommaCat} alt="momma cat with kittens" />
    </div>
    </> 
  )
}

export default App
