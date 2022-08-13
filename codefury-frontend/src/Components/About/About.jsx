import React from 'react'
import Header from '../Header/Header'
import dp from '../../images/dp.jpg';
import './About.css';

export default function About() {
  return (
    <div className="about-container">

      <Header
        heading="About "
        details="More About Us"
      />
      <h2>Meet the team!!!</h2>
      <div class="contact-container-row">
        <div class="card">
          <div class="imgbox">
            <img src={dp} alt="pradeep" />
          </div>
          <div class="content">
            <div class="details">
              <h2>Pradeep<br/><span>Full Stack Developer</span></h2>
              <div class="data">
                <h2>7<br /><span>Posts</span></h2>
                <h2>366<br /><span>Followers</span></h2>
                <h2>403<br /><span>Following</span></h2>
              </div>
              <div class="actions">
                <a href="http://instagram.com/pradeeee_p" target="_blank">Follow</a>
                <a href="mailto:pradeepashok1122@gmail.com" target="_blank">E-Mail</a>
              </div>
            </div>
          </div>
        </div>
        <div class="card">
          <div class="imgbox">
            <img src={dp} alt="pradeep" />
          </div>
          <div class="content">
            <div class="details">
              <h2>Sinchana M<br /><span>2nd year cse</span></h2>
              <div class="data">
                <h2>6<br /><span>Posts</span></h2>
                <h2>386<br /><span>Followers</span></h2>
                <h2>380<br /><span>Following</span></h2>
              </div>
              <div class="actions">
                <a href="http://instagram.com/sinchana.m.hebbar" target="_blank">Follow</a>
                <a href="mailto:sinchana17062002@gmail.com" target="_blank">E-Mail</a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="contact-container-row">
        <div class="card">
          <div class="imgbox">
            <img src={dp} alt="pradeep" />
          </div>
          <div class="content">
            <div class="details">
              <h2>Ananya R Bongale<br /><span>2nd Year ISE</span></h2>
              <div class="data">
                <h2>5<br /><span>Posts</span></h2>
                <h2>448<br /><span>Followers</span></h2>
                <h2>512<br /><span>Following</span></h2>
              </div>
              <div class="actions">
                <a href="http://instagram.com/ananya_bongale" target="_blank">Follow</a>
                <a href="mailto:ananyabongaler@gmail.com" target="_blank">E-Mail</a>
              </div>
            </div>
          </div>
        </div>




        <div class="card">
          <div class="imgbox">
            <img src={dp} alt="pradeep" />
          </div>
          <div class="content">
            <div class="details">
              <h2>Anand K<br /><span>2nd year CSE</span></h2>
              <div class="data">
                <h2>5<br /><span>Posts</span></h2>
                <h2>1077<br /><span>Followers</span></h2>
                <h2>909<br /><span>Following</span></h2>
              </div>
              <div class="actions">
                <a href="http://instagram.com/_anand__298" target="_blank">Follow</a>
                <a href="mailto:anandkuppur@gmail.com" target="_blank">E-Mail</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}