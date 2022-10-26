import React from "react";
import "./css/Singleuser.css";
import nophoto from "./no_photo.jpg";
import Profileform from "./Profileform";
function Singleuser({ usr }) {
  const { fname, lname, email, age, salary, image, designation, _id } = usr;

  const handleHide = (val) => {
    console.log(val);
    // const proceed = window.confirm("are you sure to hide it");
    // if (proceed) {
    //   fetch(`https://morning-hamlet-36762.herokuapp.com/user/${id}`)
    //     .then((res) => res.json())
    //     .then((data) => {
    //       console.log(data);
    //       const remain = users.filter((user) => user._id !== id);
    //       setUsers(remain);
    //       toast.success("User hide succesfully");
    //     });
    // }
  };
  return (
    <div className="col-md-6 pt-2 pb-2">
      <div class="card p-3">
        <div class="d-flex align-items-center">
          <div class="image">
            <img
              src={image ? image : nophoto}
              className="rounded img-fluid"
              width="155"
              alt="profile_photo"
            ></img>
          </div>
          <div class="ml-3 w-100">
            <h4 class="mb-0 mt-0">
              {fname ? fname : ""} {lname ? lname : ""}
            </h4>
            <span>{designation}</span>

            <div class="p-2 mt-2 bg-primary d-flex justify-content-between rounded text-white stats">
              <div class="d-flex flex-column">
                <span class="articles">Salary</span>
                <span class="number1">{salary}</span>
              </div>
              <div class="d-flex flex-column">
                <span class="rating">Age</span>
                <span class="number3">{age}</span>
              </div>
            </div>
            <div class="p-2 mt-2 bg-primary d-flex justify-content-between rounded  ">
              <div class="d-flex flex-column">
                <span class="number1">
                  <span> {email}</span>
                </span>
              </div>
            </div>
            <div class="button mt-2 d-flex flex-row align-items-center">
              <Profileform usrid={_id}></Profileform>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Singleuser;
