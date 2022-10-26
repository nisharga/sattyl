import React from "react";
import "./css/Modal.css";
function Modal() {
  return (
    <div className="">
      <div className="center">
        <button
          data-toggle="modal"
          data-target="#squarespaceModal"
          className="btn btn-primary center-block"
        >
          Click Me
        </button>
      </div>
      <div
        className="modal fade"
        id="squarespaceModal"
        tabindex="-1"
        role="dialog"
        aria-labelledby="modalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <button type="button" className="close" data-dismiss="modal">
                <span aria-hidden="true">×</span>
                <span className="sr-only">Close</span>
              </button>
              <h3 className="modal-title" id="lineModalLabel">
                My Modal
              </h3>
            </div>
            <div className="modal-body">
              <form>
                <div className="form-group">
                  <label for="exampleInputEmail1">Email address</label>
                  <input
                    type="email"
                    className="form-control"
                    id="exampleInputEmail1"
                    placeholder="Enter email"
                  />
                </div>
                <div className="form-group">
                  <label for="exampleInputPassword1">Password</label>
                  <input
                    type="password"
                    className="form-control"
                    id="exampleInputPassword1"
                    placeholder="Password"
                  />
                </div>
                <div className="form-group">
                  <label for="exampleInputFile">File input</label>
                  <input type="file" id="exampleInputFile" />
                  <p className="help-block">
                    Example block-level help text here.
                  </p>
                </div>
                <div className="checkbox">
                  <label>
                    <input type="checkbox"> Check me out</input>
                  </label>
                </div>
                <button type="submit" className="btn btn-default">
                  Submit
                </button>
              </form>
            </div>
            <div className="modal-footer">
              <div
                className="btn-group btn-group-justified"
                role="group"
                aria-label="group button"
              >
                <div className="btn-group" role="group">
                  <button
                    type="button"
                    className="btn btn-default"
                    data-dismiss="modal"
                  >
                    Close
                  </button>
                </div>
                <div className="btn-group btn-delete hidden" role="group">
                  <button
                    type="button"
                    id="delImage"
                    className="btn btn-default btn-hover-red"
                    data-dismiss="modal"
                  >
                    Delete
                  </button>
                </div>
                <div className="btn-group" role="group">
                  <button
                    type="button"
                    id="saveImage"
                    className="btn btn-default btn-hover-green"
                    data-action="save"
                  >
                    Save
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Modal;
