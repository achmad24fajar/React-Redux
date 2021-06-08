import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Button, Modal, Col, Row } from "react-bootstrap";
import { isRegister, isLogin, isClose } from "../actions";

import FormLogin from "./form/FormLogin";

const Login = () => {
  const toggleModal = useSelector((state) => state.modal.login);

  const dispatch = useDispatch();

  const [show, setShow] = useState(toggleModal);

  useEffect(() => {
    setShow(toggleModal);
  }, [toggleModal]);

  return (
    <div>
      <Button
        variant="info"
        className="mr-2"
        onClick={() => dispatch(isLogin())}>
        Login
      </Button>

      <Modal show={show} onHide={() => setShow(toggleModal)} size="lg" centered>
        <div className="d-flex position-relative">
          <div className="bg-info c-style-login text-center">
            <img src="tree.svg" alt="login" className="c-style-svg" />
            <div className="tagline mt-4">
              <h1 className="text-white">Sign in here, please</h1>
            </div>
          </div>
          <div className="flex-shrink-0 px-3">
            <Modal.Header className="d-flex justify-content-between">
              <Modal.Title>Login Here</Modal.Title>
              <div className="mt-2" onClick={() => dispatch(isClose())}>
                Close
              </div>
            </Modal.Header>
            <Modal.Body>
              <div className="login-form">
                <FormLogin />
              </div>
            </Modal.Body>
            <Modal.Footer>
              <Button variant="info" className="btn-block">
                Login
              </Button>
              <div className="d-block text-center" style={{ width: "100%" }}>
                <span>
                  Do you haven't account?{" "}
                  <span onClick={() => dispatch(isRegister())} role="button">
                    Register Here
                  </span>
                </span>
              </div>
            </Modal.Footer>
          </div>
        </div>
      </Modal>
    </div>
  );
};

export default Login;
