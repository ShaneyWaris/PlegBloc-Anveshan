import React, { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { isAuthenticated } from "../auth/helper";
import { createRequest } from "../eth_scripts/core";

function CreateRequest() {
  const navigate = useNavigate();
  const { state } = useLocation();

  const def_obj = {
    description: "",
    amount: 0,
    recipient: "",
  };
  const [data, setData] = useState(def_obj);
  const [isFormDisabled, setFormDisabled] = useState(false);
  const [isLoading, setLoading] = useState(false);

  const InputEvent = (event) => {
    const { name, value } = event.target;
    setData((preVal) => {
      return {
        ...preVal,
        [name]: value,
      };
    });
  };

  useEffect(() => {
    if (state === null) {
      navigate("/allcontracts");
      window.location.reload();
    }
  }, []);

  const formSubmit = async (e) => {
    e.preventDefault();
    setFormDisabled(true);
    setLoading(true);

    if (isAuthenticated()) {
      const { campaignAddress, manager } = state;
      const flag = await createRequest(
        data.amount,
        data.recipient,
        campaignAddress
      );
      if (flag == 1) {
        alert("Request Created Successfully. :)");
        setData(def_obj);
      } else {
        alert("Error in Creating Request. :/");
      }
    }
    setFormDisabled(false);
    setLoading(false);
  };

  return (
    <div>
      <div className="my-5">
        <h1 className="text-center">Create Request</h1>
      </div>
      <div className="container contact_div">
        <div className="row">
          <div className="col-md-6 col-10 mx-auto">
            <form onSubmit={formSubmit}>
              <div className="mb-3">
                <label for="exampleFormControlInput1" className="form-label">
                  Recipient
                </label>
              </div>
              <div className="mb-3">
                <label for="exampleFormControlInput1" className="form-label">
                  Amount Requested
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="exampleFormControlInput1"
                  name="amount"
                  value={data.amount}
                  onChange={InputEvent}
                  disabled={isFormDisabled}
                  placeholder="Wei"
                  required
                />
              </div>

              <div className="mb-3">
                <label for="exampleFormControlTextarea1" className="form-label">
                  Description
                </label>
                <textarea
                  className="form-control"
                  id="exampleFormControlTextarea1"
                  rows="3"
                  name="description"
                  placeholder="Enter the description of the request"
                  value={data.description}
                  onChange={InputEvent}
                  disabled={isFormDisabled}
                  required
                ></textarea>
              </div>

              <div className="col-12">
                <button
                  className="btn btn-outline-primary"
                  type="submit"
                  disabled={isFormDisabled}
                >
                  <span
                    class="spinner-grow spinner-grow-sm"
                    role="status"
                    style={isLoading ? {} : { display: "none" }}
                    aria-hidden="true"
                  ></span>
                  {isLoading ? (
                    <span>Creating Request...</span>
                  ) : (
                    <span>Create Request</span>
                  )}
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CreateRequest;
