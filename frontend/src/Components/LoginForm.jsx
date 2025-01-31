import { useState } from "react";
import axios from "axios";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { Container, Row, Card } from "react-bootstrap";
import { login } from "../slices/authSlice.js";
import avatarLogin from "../assets/avatar.jpg";

const LoginForm = () => {
  const [errorMessage, setErrorMessage] = useState("");
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleSubmit = async (values) => {
    try {
      const response = await axios.post("/api/v1/login", values);
      const { token } = response.data;

      window.localStorage.setItem("token", token);
      dispatch(login(token));
      navigate("/");
    } catch (error) {
      if (error.response && error.response.status === 401) {
        setErrorMessage("Invalid username or password");
      } else {
        setErrorMessage("Something went wrong. Please try again later.");
      }
    }
  };

  return (
    <Container fluid className="h-100">
      <Row className="justify-content-center align-content-center h-100">
        <div className="col-12 col-md-8 col-xxl-6">
          <Card className="shadow-sm">
            <Card.Body className="row p-5">
              <div className="col-12 col-md-6 d-flex align-items-center justify-content-center">
                <img className="rounded-circle" src={avatarLogin} alt="Войти" />
              </div>
              <Formik
                initialValues={{ username: "", password: "" }}
                onSubmit={handleSubmit}
              >
                {({ errors, touched }) => (
                  <Form className="col-12 col-md-6 mt-3 mt-md-0">
                    <h1 className="text-center mb-4">Войти</h1>
                    <div className="form-floating mb-3">
                      <Field
                        type="text"
                        name="username"
                        autoComplete="username"
                        id="username"
                        required
                        placeholder="Ваш ник"
                        className={`form-control ${
                          touched.email && errors.email ? "is-invalid" : ""
                        }`}
                      />
                      <ErrorMessage
                        component="div"
                        name="username"
                        className="invalid-tooltip"
                      />
                      <label htmlFor="username">Ваш ник</label>
                    </div>
                    <div className="form-floating mb-4">
                      <Field
                        type="password"
                        name="password"
                        autoComplete="current-password"
                        id="password"
                        required
                        placeholder="Пароль"
                        className={`form-control ${
                          touched.password && errors.password ? "is-invalid" : ""
                        }`}
                      />
                      <ErrorMessage
                        component="div"
                        name="username"
                        className="invalid-tooltip"
                      />
                      <label htmlFor="password" className="form-label">
                        Password
                      </label>
                    </div>
                    <button
                      type="submit"
                      className="w-100 mb-3 btn btn-outline-primary"
                    >
                      Submit
                    </button>
                  </Form>
                )}
              </Formik>
            </Card.Body>
          </Card>
        </div>
      </Row>
    </Container>
  );
};

export default LoginForm;
