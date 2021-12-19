import React, { useState } from "react";

export const RegistForm = ({ Signup }) => {
  const [details, setDetails] = useState({
    name: "",
    birthdate: "",
    gender: "",
    email: "",
    password: "",
    avatar: "",
  });

  const submitHandler = (e) => {
    e.preventDefault();

    Signup(details);
  };

  return (
    <form onSubmit={submitHandler} class="form" method="post" action="#">
      <div class="row">
        <div class="col-lg-6 col-md-6 col-12">
          <div class="form-group">
            <label>
              Name<span>*</span>
            </label>
            <input
              type="text"
              name="name"
              placeholder=""
              required="required"
              onChange={(e) =>
                setDetails({ ...details, name: e.target.value })
              }
              value={details.name}
            />
          </div>
        </div>
        <div class="col-lg-6 col-md-6 col-12">
          <div class="form-group">
            <label>
              Birthdate<span>*</span>
            </label>
            <input
              type="date"
              name="birthdate"
              placeholder=""
              required="required"
              onChange={(e) =>
                setDetails({ ...details, birthdate: e.target.value })
              }
              value={details.birthdate}
            />
          </div>
        </div>
        <div class="col-lg-6 col-md-6 col-12">
          <div class="form-group">
            <label>
              Gender<span>*</span>
            </label>
            <select
              name="gender"
              id="state-province"
              style={{ display: "none" }}
              onChange={(e) =>
                setDetails({ ...details, gender: e.target.value })
              }
            >
              <option value="divition" selected="selected" disabled>
                Select Gender
              </option>
              <option value="Male">Male</option>
              <option value="Female">Female</option>
            </select>
            <div class="nice-select" tabindex="0">
              <span class="current">Select Gender</span>
              <ul class="list">
                <li data-value="divition" class="option selected focus">
                  Select Gender
                </li>
                <li data-value="Male" class="option">
                  Male
                </li>
                <li data-value="Female" class="option">
                  Female
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div class="col-lg-6 col-md-6 col-12">
          <div class="form-group">
            <label>
              Email Address<span>*</span>
            </label>
            <input
              type="email"
              name="email"
              placeholder=""
              required="required"
              onChange={(e) =>
                setDetails({ ...details, email: e.target.value })
              }
              value={details.email}
            />
          </div>
        </div>
        <div class="col-lg-6 col-md-6 col-12">
          <div class="form-group">
            <label>
              Password<span>*</span>
            </label>
            <input
              type="password"
              name="password"
              placeholder=""
              required="required"
              onChange={(e) =>
                setDetails({ ...details, password: e.target.value })
              }
              value={details.password}
            />
          </div>
        </div>
        <div class="col-lg-6 col-md-6 col-12">
          <div class="form-group">
            <label>
              Avatar<span>*</span>
            </label>
            <input
              type="file"
              name="avatar"
              placeholder=""
              alt="avatar"
              onChange={(e) =>
                setDetails({ ...details, avatar: e.target.value })
              }
              value={details.avatar}
              required="required"
            />
          </div>
        </div>
        <div class="col-lg-19 col-12">
          <div class="single-widget get-button">
            <div class="content">
              <div class="button">
                <button className="btn">Sign Up</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </form>
  );
};
