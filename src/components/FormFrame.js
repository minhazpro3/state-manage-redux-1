import React, { useReducer } from "react";
import { initialState, reducer } from "../state/form.reducer";
// import "./FormFrame.css";

const FormFrame = () => {
  const submit = (e) => {
    e.preventDefault();
    console.log(state);
  };

  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <div className="formDiv">
      <form onSubmit={submit}>
        <div class="form">
          <div class="title">Welcome</div>
          <div class="subtitle">Let's create your account!</div>
          <div>
            <label for="firstname">First name</label>
            <input
              name="firstName"
              type="text"
              onBlur={(e) =>
                dispatch({
                  type: "INPUT",
                  payload: { name: e.target.name, value: e.target.value },
                })
              }
            />
          </div>
          <div>
            <label for="lastname" class="placeholder">
              Last name
            </label>
            <input
              name="lastName"
              onBlur={(e) =>
                dispatch({
                  type: "INPUT",
                  payload: { name: e.target.name, value: e.target.value },
                })
              }
              type="text"
            />
          </div>
          <div>
            <label for="email" class="placeholder">
              Email
            </label>
            <input
              name="email"
              onBlur={(e) =>
                dispatch({
                  type: "INPUT",
                  payload: { name: e.target.name, value: e.target.value },
                })
              }
              type="text"
            />
          </div>
          <div>
            <label for="password" class="placeholder">
              Pass
            </label>
            <input
              name="password"
              onBlur={(e) =>
                dispatch({
                  type: "INPUT",
                  payload: { name: e.target.name, value: e.target.value },
                })
              }
              type="password"
            />
          </div>
          <div class="">
            <label for="check" class="placeholder">
              Are you available?
            </label>
            <input
              name="check_box"
              onClick={(e) =>
                dispatch({
                  type: "TOGGLE",
                })
              }
              type="checkbox"
            />
          </div>
          <div class="">
            <label for="check" class="placeholder">
              Number of Pcs
            </label>
            <button onClick={() => dispatch({ type: "DECREMENT", payload: 2 })}>
              -
            </button>
            <span>{state.qty}</span>
            <button onClick={() => dispatch({ type: "INCREMENT", payload: 1 })}>
              +
            </button>
          </div>
          <div class="">
            <label for="check" class="placeholder">
              Education:
            </label>
            <select
              name="education"
              onChange={(e) =>
                dispatch({
                  type: "INPUT",
                  payload: { name: e.target.name, value: e.target.value },
                })
              }
            >
              <option value="SSC">SSC</option>
              <option value="HSC">HSC</option>
              <option value="MBA">MBA</option>
            </select>
          </div>
          <button disabled={!state.term} type="submit">
            submit
          </button>
        </div>
      </form>
      ;
    </div>
  );
};

export default FormFrame;
