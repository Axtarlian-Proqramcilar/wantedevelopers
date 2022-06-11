import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Form, FormGroup, Input, Label, Button } from "reactstrap";

const PasswordRecovery = () => {
  const [number, setNumber] = useState("");
  const [isNumber, setIsNumber] = useState(true);
  const [error, setError] = useState("");
  const [labelText, setLabelText] = useState("Enter your mobile number");

  const navigate = useNavigate();

  const handleCancel = () => {
    navigate(-1);
  };

  const errorHandler = (callback = setError) => {
    callback(`Please set your ${isNumber ? "number" : "email or username"}`);
    setTimeout(() => callback(""), 2000);
  };

  const handleClickerRecoverer = () => {
    if (isNumber) {
      setLabelText("Search by your email or name instead");
      setIsNumber(false);

    } else {
      setLabelText("Enter your mobile number");
      setIsNumber(true);
    }
  };

  const handleRecovery = (e) => {
    if (!number) {
      errorHandler();
    } else {
      errorHandler();
    }

    e.preventDefault();
  };

  return (
    <div className="homeBackground">
      <div className="px-4 py-3 formContainer">
        <h1 className="text-center border-bottom border-1 likeLogo text-silver">
          Axtarılan Proqramçılar
        </h1>
        <Form onSubmit={handleRecovery}>
          <FormGroup>
            <Label htmlFor="number" className="text-white">{labelText}</Label>
            <Input
              type="text"
              name="number"
              id="number"
              placeholder={
                error && error.length
                  ? error
                  : `${
                      isNumber
                        ? "Enter your mobile number"
                        : "Enter your email or name"
                    }`
              }
              value={number}
              onChange={(e) => setNumber(e.target.value)}
            />
          </FormGroup>
          <div className="recoveryButtonDivider">
            <Button type="reset" color="primary" onClick={handleCancel} outline>
              Cancel
            </Button>
            <Button
              type="submit"
              color="primary"
              // disabled={!number.length > 0}
              outline
            >
              Search
            </Button>
          </div>
          <small
            className="d-block text-center my-3 noneLinkElementCloner"
            onClick={handleClickerRecoverer}
          >
            {isNumber
              ? "Search by your email or name instead"
              : " Search by your mobile number"}
          </small>
        </Form>
      </div>
    </div>
  );
};

export default PasswordRecovery;
