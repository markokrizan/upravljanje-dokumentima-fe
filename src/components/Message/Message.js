import React from 'react'
import './Message.css';

export default function Message() {
    return (
    <div class="container">
        <div class="row">
            <div class="col-md-12 d-flex justify-content-center">
            <div class="card text-center">
                <div class="card-header"> Message<br/></div>
                <div class="card-body">
                <div class="row">
                    <div class="col-md-6 d-flex align-items-center border-right justify-content-end"><label>From:</label></div>
                    <div class="col-md-6 d-flex justify-content-start">
                    <labe>pera@mail.com</labe>
                    </div>
                </div>
                <div class="row">
                    <div class="col-md-6 d-flex align-items-center border-right justify-content-end"><label>To:</label></div>
                    <div class="col-md-6 d-flex justify-content-start">
                    <labe>pera@mail.com</labe>
                    </div>
                </div>
                <div class="row">
                    <div class="col-md-6 d-flex align-items-center border-right justify-content-end"><label>Cc:</label></div>
                    <div class="col-md-6 d-flex justify-content-start">
                    <labe>pera@mail.com</labe>
                    </div>
                </div>
                <div class="row">
                    <div class="col-md-6 d-flex align-items-center border-right justify-content-end"><label>Bcc:</label></div>
                    <div class="col-md-6 d-flex justify-content-start">
                    <labe>pera@mail.com</labe>
                    </div>
                </div>
                <div class="row">
                    <div class="col-md-6 d-flex align-items-center border-right justify-content-end"><label>Date:</label></div>
                    <div class="col-md-6 d-flex justify-content-start">
                    <labe>12/123/12</labe>
                    </div>
                </div>
                <div class="row">
                    <div class="col-md-6 d-flex align-items-center border-right justify-content-end"><label>Subject:</label></div>
                    <div class="col-md-6 d-flex justify-content-start">
                    <labe>Neki subject</labe>
                    </div>
                </div>
                <div class="row content-container">
                    <div class="col-md-12 border"> content kasjdlfkj akjsdflk jasdklfj klasdjf klasjdfklasjdfkljasdklf jasdklfj aklsdfj klasdfjklasdjfklasjdf </div>
                </div>
                <div class="row">
                    <div class="col-md-12 d-flex justify-content-end mt-2"><a class="btn btn-success" href="#">Close</a></div>
                </div>
                </div>
            </div>
            </div>
        </div>
    </div>
    )
}