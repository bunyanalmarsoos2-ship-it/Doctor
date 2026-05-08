import React from "react";
import "./User.css";
const EditUserProfile = ({ isOpen, onClose }) => {
  if (!isOpen) return null;
  return (
    <>
      <div className="modal editModal d-block" tabIndex={-1}>
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title">Edit Your Profile</h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
                onClick={onClose}
              />
            </div>
            <div className="modal-body">
              <div className="mod-details d-flex flex-column">
                <img src="https://static.vecteezy.com/system/resources/previews/018/765/757/original/user-profile-icon-in-flat-style-member-avatar-illustration-on-isolated-background-human-permission-sign-business-concept-vector.jpg" alt="userPic" height={80} width={100} />
                <input type="file" />
                <input type="text" placeholder="Name" />
                <div className="d-flex flex-row">
                  <select className="m-1">
                    <option value={"male"} selected>
                      Male
                    </option>
                    <option value={"femal"} selected>
                      Female
                    </option>
                  </select>
                  <input type="date" placeholder="dob" />
                </div>
                <input type="text" placeholder="phone" />
                <input type="text" placeholder="address" />
              </div>
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                data-bs-dismiss="modal"
                onClick={onClose}
              >
                Close
              </button>
              <button type="button" className="btn btn-primary">
                Save changes
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default EditUserProfile;
