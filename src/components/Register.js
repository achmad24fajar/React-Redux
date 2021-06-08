import React, { useState, useEffect } from "react";
import { Button, Modal } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";

import { isLogin, isRegister, isClose } from "../actions";

const Register = () => {
  const toggleModal = useSelector((state) => state.modal.register);

  const dispatch = useDispatch();

  const [show, setShow] = useState(toggleModal);

  useEffect(() => {
    setShow(toggleModal);
  }, [toggleModal]);

  return (
    <div>
      <Button variant="outline-info" onClick={() => dispatch(isRegister())}>
        Register
      </Button>

      <Modal show={show} onHide={() => setShow(toggleModal)} size="lg" centered>
        <Modal.Header className="d-flex justify-content-between">
          <Modal.Title>Register Here</Modal.Title>
          <div className="mt-2" onClick={() => dispatch(isClose())}>
            Close
          </div>
        </Modal.Header>
        <Modal.Body>This is the register form</Modal.Body>
        <Modal.Footer>
          <Button variant="primary" className="btn-block">
            Register
          </Button>
          <div className="d-block text-center" style={{ width: "100%" }}>
            <span>
              Do you haven't account?{" "}
              <span onClick={() => dispatch(isLogin())}>Login Here</span>
            </span>
          </div>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default Register;
