import React from 'react';
import { ButtonToolbar } from 'react-bootstrap';
import Modal from '../../components/Modal';
import './Contacts.css';
import SingleContact from '../../components/SingleContact';


export default function AccountSettings(){
    const [modalShow, setModalShow] = React.useState(false);

    return (
    <div class="container">
      <div class="row">
        <div class="col-md-12">
          <div class="row d-flex justify-content-between align-items-center border-dark mb-2 p-1">
            <div class="input-group w-50">
              <input type="text" class="form-control" id="inlineFormInputGroup" placeholder="Search"/>
              <div class="input-group-append"><button class="btn btn-success" type="button"><i class="fa fa-search"></i></button></div>
            </div>
            <ButtonToolbar>
              <button class="btn btn-success"  onClick={() => setModalShow(true)}>+</button>

              <Modal
                show={modalShow}
                header={'Contact'}
                body={<SingleContact/>}
                actions={<button onClick={() => setModalShow(false)}>Close</button>}
              />
            </ButtonToolbar>
          </div>
          <div class="row">
            <ul class="list-group w-100 h-100">
              <li class="list-group-item list-group-item-action d-flex justify-content-between align-items-center">kontakt@mail.com - Pera Peric <button class="btn btn-danger"><i class="fa fa-trash-o" aria-hidden="true"></i></button></li>
              <li class="list-group-item list-group-item-action d-flex justify-content-between align-items-center">kontakt@mail.com - Pera Peric <button class="btn btn-danger"><i class="fa fa-trash-o" aria-hidden="true"></i></button></li>
              <li class="list-group-item list-group-item-action d-flex justify-content-between align-items-center">kontakt@mail.com - Pera Peric <button class="btn btn-danger"><i class="fa fa-trash-o" aria-hidden="true"></i></button></li>
            </ul>
          </div>
        </div>
      </div>
    </div>
    );
}