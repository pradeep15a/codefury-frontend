import React from 'react';
import { useNavigate } from 'react-router-dom'
import Header from '../Header/Header';
import './Home.css';
import f1 from '../../images/f1.jpeg';
import g2 from '../../images/g2.png';
import support from '../../images/support.png'
import Footer from '../Footer/footer';

const Home = () => {
    const navigate = useNavigate();

    const handleProjects = () => {
        navigate('/idea')
    }
    const handleInvest = () => {
        navigate('/about')
    }

  return (
    <div><div class="header">
        <Header 
            heading="Amplify"
            details="adding profit to the lifes."
        /></div>
        <div id="primary-content">
        <div class="wrapper">
            <article>
                <h3>Sales</h3>
                <p>The program focuses on helping startups increase their sales, expand their customers, and improve their overall sales performance. 
                    Being a business development service provider, -------- can help in finding sales reps for small businesses. In our Grow your Startup program, we will provide you with skilled sales representatives who can be a contact agent between your business and customers.

Since --------is an online incubator, we have a worldwide network of sales reps who will help you in increasing your sales and revenues.

Our sales reps are provided with the best sales strategies that will help your products reach more target customers through online research, social media messaging, and email reach out. All these provided as a part of our business development services
                </p>
                <img src={f1} alt="video placeholder" />
            </article>
        </div>
    </div>
    <div id="primary-content">
        <div class="wrapper">
            <article>
                <h3>Growth & Guidance</h3>
                <p>"Becoming isn't about arriving somewhere or achieving a certain aim. I see it instead as forward motion, a means of evolving, a way to reach continuously toward a better self. The journey doesn't end." — Michelle Obama .
                    The program helps you achieve growth for your startup through expanding into new global markets and exploring new sales channels and partnerships </p>
                <img src={g2} alt="video placeholder" />
            </article>
        </div>
    </div>
    <div id="primary-content">
        <div class="wrapper">
            <article>
                <h3>Funding</h3>
                <p>This service is part of our Raise Capital program. We help small businesses and startups in getting the funding they need. We work with you from the very first steps and provide you with all the support and resources you need. We work with startups and investors on a global level and across all industries.
                    Small businesses funding usually revolves around bank loans, SBA loans and small business grants as most small businesses usually have a good track record and significant revenue, which makes most small businesses eligible for loan funding.
                </p> 
           
                <img src={support} alt="video placeholder" />
            </article>
        </div>
    </div>
    

    
    <div id="cta">
        <div class="wrapper">
            <h3>Heard Enough?</h3>
            <p> Let’s Talk.</p>
                <p>Ready to see what Guidance can do for your business? Contact us now. We'll be in touch with you shortly </p>
            <button onClick={handleProjects} class="button-2">Present your ideas</button>  <button onClick={handleInvest} class="button-2">Start investing</button>
        </div>
    </div>

    <Footer />
    </div>
  )
}

export default Home;