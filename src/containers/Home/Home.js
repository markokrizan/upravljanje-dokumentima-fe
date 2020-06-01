import React from 'react';
import './Home.css';

export default function Home(){
    return (
        <div>
            <div className="row d-flex justify-content-between align-items-center border-dark mb-2 p-1 test">
                <div className="input-group w-25">
                <input type="text" className="form-control" id="inlineFormInputGroup" placeholder="Search"/>
                <div className="input-group-append"><button className="btn btn-success" type="button"><i className="fa fa-search"></i></button></div>
                </div>
                <button className="btn btn-success"><i className="fa fa fa-paper-plane-o"></i></button>
            </div>
            <div className="row">
                <ul className="list-group w-100 h-100">
                <li className="list-group-item list-group-item-action d-flex justify-content-between align-items-center" >Poruka 1&nbsp; - Dinamicki deo opisa - highliter - ako je aktivirana pretraga <span className="badge badge-primary badge-pill">14</span></li>
                <li className="list-group-item list-group-item-action d-flex justify-content-between align-items-center">Poruka 2&nbsp; - Dinamicki deo opisa - highliter - ako je aktivirana pretraga <span className="badge badge-primary badge-pill">14</span></li>
                <li className="list-group-item list-group-item-action d-flex justify-content-between align-items-center">Poruka 3&nbsp; - Dinamicki deo opisa - highliter - ako je aktivirana pretraga <span className="badge badge-primary badge-pill">14</span></li>
                </ul>
            </div>
        </div>
      )
}
