import axios from "axios";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { Button, Modal, ModalBody, ModalFooter, ModalHeader } from "reactstrap";
import { API_URL_SUBMIT } from "../constants/constants";

const UrlModalBtn = ({ onResponseData, onLoading }) => {
  const [modal, setModal] = useState(false);
  const toggle = () => setModal(!modal);

  /** A hook for React Hook Form. */
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  /** A handler for url submit request. */
  const SubmitHandler = async (data) => {
    onLoading(true);
    const url = data["url_input"];

    const formData = new FormData();
    formData.append("url_input", url);

    try {
      const response = await axios.post(API_URL_SUBMIT, formData);
      onResponseData(response.data);
      // todo: time delay needed
      // Close Modal
      toggle();
    } catch (error) {
      console.log("ERROR: ", error);
    }
    onLoading(false);
  };

  return (
    <>
      <Button
        onClick={toggle}
        className="my-4"
        style={{
          backgroundColor: "#105AC7",
          borderColor: "#105AC7",
          borderRadius: "25px",
          width: "20rem",
        }}
      >
        Start
      </Button>

      {/* Form modal */}
      <form>
        <Modal isOpen={modal} toggle={toggle}>
          {/* Header (X) */}
          <ModalHeader toggle={toggle}></ModalHeader>

          {/* Body: URL Input */}
          <ModalBody className="d-flex flex-column">
            <span>
              <strong>Add a new achievement!</strong>
            </span>
            <span>
              After completing the Leet code question, copy and paste the URL of
              the webpage.
            </span>

            {/* input */}
            <label htmlFor="url_input">URL</label>
            <input
              id="url_input"
              type="url"
              {...register("url_input", { required: true })}
            />
            {/* errors will return when field validation fails  */}
            {errors.url_input && (
              <span className="form-text text-danger">
                This field is required
              </span>
            )}
          </ModalBody>

          {/* Submit btn */}
          <ModalFooter>
            <Button
              style={{
                width: "88px",
                backgroundColor: "#105AC7",
                borderColor: "#105AC7",
              }}
              onClick={handleSubmit(SubmitHandler)} // "handleSubmit" will validate your inputs before invoking "Submit" action
            >
              Submit
            </Button>
          </ModalFooter>
        </Modal>
      </form>
    </>
  );
};

export default UrlModalBtn;
