import React from 'react';

export default function MyAccounts(){
    return (
        <div className="container">
            <div className="row">
                <div class="col-md-12" >
                    <div class="row d-flex justify-content-between align-items-center border-dark mb-2 p-1">
                        <h3>Accounts in use:</h3>
                        <button class="btn btn-success">+</button>
                    </div>
                    <div class="row">
                        <ul class="list-group w-100 h-100" >
                        <li class="list-group-item list-group-item-action d-flex justify-content-between align-items-center">nalog@mail.com <button class="btn btn-danger"><i class="fa fa-trash-o" aria-hidden="true"></i></button></li>
                        <li class="list-group-item list-group-item-action d-flex justify-content-between align-items-center">nalog@mail.com <button class="btn btn-danger"><i class="fa fa-trash-o" aria-hidden="true"></i></button></li>
                        <li class="list-group-item list-group-item-action d-flex justify-content-between align-items-center">nalog@mail.com <button class="btn btn-danger"><i class="fa fa-trash-o" aria-hidden="true"></i></button></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
}