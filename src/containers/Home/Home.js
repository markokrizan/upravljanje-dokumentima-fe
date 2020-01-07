import React, { Fragment } from 'react';

export default function Home(){
    return (
        <div>
            <div class="row d-flex justify-content-between align-items-center border-dark mb-2 p-1">
                <div class="input-group w-25">
                <input type="text" class="form-control" id="inlineFormInputGroup" placeholder="Search"/>
                <div class="input-group-append"><button class="btn btn-success" type="button"><i class="fa fa-search"></i></button></div>
                </div>
                <button class="btn btn-success"><i class="fa fa fa-paper-plane-o"></i></button>
            </div>
            <div class="row">
                <ul class="list-group w-100 h-100">
                <li class="list-group-item list-group-item-action d-flex justify-content-between align-items-center" >Poruka 1&nbsp; - Dinamicki deo opisa - highliter - ako je aktivirana pretraga <span class="badge badge-primary badge-pill">14</span></li>
                <li class="list-group-item list-group-item-action d-flex justify-content-between align-items-center">Poruka 2&nbsp; - Dinamicki deo opisa - highliter - ako je aktivirana pretraga <span class="badge badge-primary badge-pill">14</span></li>
                <li class="list-group-item list-group-item-action d-flex justify-content-between align-items-center">Poruka 3&nbsp; - Dinamicki deo opisa - highliter - ako je aktivirana pretraga <span class="badge badge-primary badge-pill">14</span></li>
                </ul>
            </div>
        </div>
      )
}