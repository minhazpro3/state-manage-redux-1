import React from "react";
import "./FormFrame.css";

const FormFrame = () => {
  return (
    <div className="formDiv">
      <form>
        <div class="form">
          <div class="title">Welcome</div>
          <div class="subtitle">Let's create your account!</div>
          <div class="input-container ic1">
            <input id="firstname" class="input" type="text" placeholder=" " />
            <div class="cut"></div>
            <label for="firstname" class="placeholder">
              First name
            </label>
          </div>
          <div class="input-container ic2">
            <input id="lastname" class="input" type="text" placeholder=" " />
            <div class="cut"></div>
            <label for="lastname" class="placeholder">
              Last name
            </label>
          </div>
          <div class="input-container ic2">
            <input id="email" class="input" type="text" placeholder=" " />
            <div class="cut cut-short"></div>
            <label for="email" class="placeholder">
              Email
            </label>
          </div>
          <div class="">
            <input id="email" class="input" type="checkbox" placeholder=" " />

            <label for="check" class="placeholder">
              Are you available?
            </label>
          </div>

          <button type="text" class="submit">
            submit
          </button>
        </div>
      </form>
      ;
    </div>
  );
};

export default FormFrame;