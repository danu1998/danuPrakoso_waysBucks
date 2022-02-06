import React, { useState } from "react";
import { Modal, Form, Button } from "react-bootstrap";

const ButtonNav = (props) => {
  const [showLogin, setShowLogin] = useState(false);
  const handleCloseLogin = () => setShowLogin(false);
  const handleShowLogin = () => setShowLogin(true);

  const [showRegister, setShowRegister] = useState(false);
  const handleCloseRegister = () => setShowRegister(false);
  const handleShowRegister = () => setShowRegister(true);

  const switchRegister = () => {
    handleCloseLogin();
    handleShowRegister();
  };

  const switchLogin = () => {
    handleCloseRegister();
    handleShowLogin();
  };

  function LoginModal() {
    return (
      <Modal show={showLogin} onHide={handleCloseLogin}>
        <Modal.Header closeButton>
          <Modal.Title className="fw-bold fs-2 text-danger">Login</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-4" controlId="inputEmail">
              <Form.Control
                type="email"
                placeholder="Enter email"
                id="inputEmail"
                name="inputEmail"
                className="p-3 border border-3 border-danger"
              />
            </Form.Group>
            <Form.Group className="mb-4" controlId="inputPassword">
              <Form.Control
                type="password"
                placeholder="Password"
                id="inputPassword"
                name="inputPassword"
                className="p-3 border border-3 border-danger"
              />
            </Form.Group>
            <div className="d-grid gap-2">
              <Button variant="danger" size="lg">
                Sign In
              </Button>
              <p className="text-center">
                Don't have an account ?
                <span
                  onClick={() => {
                    switchRegister();
                  }}
                  class="fw-bold"
                >
                  Klik Here
                </span>
              </p>
            </div>
          </Form>
        </Modal.Body>
      </Modal>
    );
  }

  function RegisterModal() {
    return (
      <Modal show={showRegister} onHide={handleCloseRegister}>
        <Modal.Header closeButton>
          <Modal.Title className="fw-bold fs-2 text-danger">
            Register
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-4" controlId="inputEmail">
              <Form.Control
                type="email"
                placeholder="Enter email"
                id="inputEmail"
                name="inputEmail"
                className="p-3 border border-3 border-danger"
              />
            </Form.Group>
            <Form.Group className="mb-4" controlId="inputPassword">
              <Form.Control
                type="password"
                placeholder="Password"
                id="inputPassword"
                name="inputPassword"
                className="p-3 border border-3 border-danger"
              />
            </Form.Group>
            <Form.Group className="mb-4" controlId="inputName">
              <Form.Control
                type="text"
                placeholder="Full Name"
                id="inputName"
                name="inputName"
                className="p-3 border border-3 border-danger"
              />
            </Form.Group>
            <div className="d-grid gap-2">
              <Button variant="danger" size="lg">
                Register
              </Button>
              <p className="text-center">
                Already have an account ?
                <span
                  onClick={() => {
                    switchLogin();
                  }}
                  class="fw-bold"
                >
                  Klik Here
                </span>
              </p>
            </div>
          </Form>
        </Modal.Body>
      </Modal>
    );
  }

  return (
    <div className="d-flex justify-content-end align-items-center gap-3">
      <button
        className="btn btn-outline-danger px-5"
        onClick={() => {
          handleShowLogin();
        }}
      >
        Sign In
      </button>

      <button
        className="btn btn-danger px-5"
        onClick={() => {
          handleShowRegister();
        }}
      >
        Register
      </button>
      <div>{showRegister && <RegisterModal />}</div>
      <div>{showLogin && <LoginModal />}</div>
    </div>
  );
};

export default ButtonNav;
