import React from 'react'
import Header from '../Header/Header'
import about1 from '../../images/main.png';

export default function About() {
  return (
    <div>
        <Header 
            heading="About "
            details=""
        />
        <div class="w3-content" style="max-width:1100px">

<div class="w3-row w3-padding-64" id="about">
  <div class="w3-col m6 w3-padding-large w3-hide-small">
   <img src={about1} class="w3-round w3-image w3-opacity-min" alt="Table Setting" width="600" height="750"></img>
  </div>

  <div class="w3-col m6 w3-padding-large">
    <h1 class="w3-center">About </h1>
    <h5>“Don’t worry about failure; you only have to be right once.</h5>
    <p class="w3-large">When you’re thinking about starting a company or first in the entrepreneurial trenches, any nugget of advice you can get from someone who’s been there before is like gold.

      But as time goes on, you’ll realize that some of those tips are better—and more applicable to your business—than others.Trusting your business performance to a partner isn’t easy. We earn that trust through results. We have earned hundreds of awards for our work through the years. Your success is our success.</p>
    <p class="w3-large w3-text-grey w3-hide-medium">We train our founders on how to succeed quickly. Our program provides access to foreign markets through India’s Free Trade Agreements. Our team will match you with like-minded, passionate investors. Our startups consistently raise more than $250K+ in funding.We provide a variety of solutions that help you prepare your pitch. Our team works closely with you to and ensure it is effective and persuasive.</p>
  </div>
</div>

  <h2>Meet the team!!!</h2>
<div class="row">
  <div class="column">
    <div class="card">
      <div class="container">
        <h2>Pradeep</h2>
        <p class="title">2nd year CSE</p>
        <p>University Visveswaraya College of Engineering</p>
        <p>pradeepashok1122@gmail.com</p>
        <p><button class="button">Contact</button></p>
      </div>
    </div>
  </div>
  <div class="column">
    <div class="card">
       <div class="container">
        <h2>Sinchana M</h2>
        <p class="title">2nd year CSE</p>
        <p>University Visveswaraya College of Engineering</p>
        <p>sinchana17062002@gmail.com</p>
        <p><button class="button">Contact</button></p>
      </div>
    </div>
  </div>

  <div class="column">
    <div class="card">
      
      <div class="container">
        <h2>Ananya</h2>
        <p class="title">2nd year ISE</p>
        <p>University Visveswaraya College of Engineering</p>
        <p>ananyabongaler@gmail.com</p>
        <p><button class="button">Contact</button></p>
      </div>
    </div>
  </div>


<div class="column">
  <div class="card">
   
    <div class="container">
      <h2>Anand K</h2>
      <p class="title">2nd year CSE</p>
      <p>University Visveswaraya College of Engineering</p>
      <p>anandkkuppur@gmail.com</p>
      <p><button class="button">Contact</button></p>
    </div>
  </div>
</div>
</div>
</div>
        
    </div>
  )
}