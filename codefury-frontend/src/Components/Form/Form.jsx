import React, { useState } from 'react';
import './Form.css';

const initialProjectData = { clientName : '', amount : 0, domain: 0, description : '', clientEmail : '' ,contact : 0 };

export default function Form() {
  return (
    <div className="main-form-container">
        <div class="container">
        <div class="wrapper-1">
            <div class="heading">
                <h2>Project Idea</h2>
            </div>
            <form action="#">
                <div class="row">
                    <input type="text" name="clientName" placeholder="Name*" required />
                </div>
                <div class="row">
                    <input type="number" name="amount" placeholder="Amount*" required />
                </div>
                <div class="row">
                    <select name="Domain" id="domain">
                        <option value="8" selected>Start up domain</option>
                        <option value="1">Medical</option>
                        <option value="2">Education</option>
                        <option value="3">E Commerce</option>
                        <option value="4">IT Industry</option>
                        <option value="5">Banking</option>
                        <option value="6">Manufacturing</option>
                        <option value="7">Online services and marketing</option>
                    </select>
                </div>
                <div className="row">
                    <textarea name="description"  placeholder="Project Description" required />
                </div>
                <div class="row" id="mail">
                    <input type="email" name="clientEmail" placeholder="Email*" required />
                </div>
                <div class="row">
                    <input type="text" name="contact" placeholder="Phone number*" required />
                </div>
                <div class="row">
                    <input type="submit" value="Submit" id="button" />
                </div>
            </form>
        </div>
    </div>
    </div>
    
  );
}
