import React from 'react';
import { Modal as BootstrapModal } from 'react-bootstrap';

export default function Modal(props) {
    return (<BootstrapModal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <BootstrapModal.Header closeButton>
        <BootstrapModal.Title id="contained-modal-title-vcenter">
          {props.header}
        </BootstrapModal.Title>
      </BootstrapModal.Header>
      <BootstrapModal.Body>
        {props.body}
      </BootstrapModal.Body>
      <BootstrapModal.Footer>
          {props.actions}
      </BootstrapModal.Footer>
    </BootstrapModal>)
}