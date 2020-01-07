import React from 'react';

export default function SingleContact(){
    return(
        <div class="card-body">
        <div class="row">
          <div class="col-md-12 d-flex justify-content-center">
            <img class="d-block" src="https://static.pingendo.com/img-placeholder-1.svg" width="150" height="150"/>
          </div>
        </div>
        <div class="row mt-2">
          <div class="col-md-6 d-flex align-items-center border-right justify-content-end"><label>First name:</label></div>
          <div class="col-md-6 d-flex justify-content-start">
            <input type="text"/>
          </div>
        </div>
        <div class="row">
          <div class="col-md-6 d-flex align-items-center border-right justify-content-end"><label>Last name:</label></div>
          <div class="col-md-6 d-flex justify-content-start">
            <input type="text"/>
          </div>
        </div>
        <div class="row">
          <div class="col-md-6 d-flex align-items-center border-right justify-content-end"><label>Display name:</label></div>
          <div class="col-md-6 d-flex justify-content-start">
            <input type="text"/>
          </div>
        </div>
        <div class="row">
          <div class="col-md-6 d-flex align-items-center border-right justify-content-end"><label>Email:</label></div>
          <div class="col-md-6 d-flex justify-content-start">
            <input type="text"/>
          </div>
        </div>
        <div class="row">
          <div class="col-md-6 d-flex align-items-center border-right justify-content-end"><label>Note:</label></div>
          <div class="col-md-6 d-flex justify-content-start">
            <input type="text"/>
          </div>
        </div>
      </div>
    )
}