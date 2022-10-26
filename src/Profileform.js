import React, { useState } from "react";
import { useForm } from "react-hook-form";
import PureModal from "react-pure-modal";
import "react-pure-modal/dist/react-pure-modal.min.css";
import { toast } from "react-toastify";

const Profileform = ({ usrid }) => {
  const [modal, setModal] = useState(false);

  const [image, setImage] = useState();
  const onChange = (e) => {
    const formData = new FormData();
    formData.append("image", e.target.files[0]);
    const url = `https://api.imgbb.com/1/upload?key=a57c49961905bdc8992484e12c0aa9d5`;
    fetch(url, {
      method: "POST",
      body: formData,
    })
      .then((res) => res.json())
      .then((data) => setImage(data.data.url));
  };
  // console.log("image", image);

  const { register, handleSubmit } = useForm();
  const onSubmit = async (data, e) => {
    const fname = data.fname;
    const lname = data.lname;
    const email = data.email;
    const age = data.age;
    const designation = data.designation;
    const salary = data.salary;
    // console.log(fname, lname, email, age, designation, salary, image, usrid);

    fetch(`https://obscure-falls-66122.herokuapp.com/update/${usrid}`, {
      method: "PUT",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify({
        fname: fname,
        lname: lname,
        email: email,
        age: age,
        salary: salary,
        image: image,
        designation: designation,
      }),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
      })
      .catch((error) => {
        console.error("Error:", error);
      });

    toast("Successfully Updated");
    e.preventDefault();
  };
  return (
    <div>
      <PureModal
        header="Update Profile"
        isOpen={modal}
        closeButton="X"
        closeButtonPosition="bottom"
        onClose={() => {
          setModal(false);
          return true;
        }}
      >
        <form className="form" onSubmit={handleSubmit(onSubmit)}>
          <fieldset>
            <div className="form-group mt-3 mb-3">
              <label className="col-md-12 control-label" htmlFor="education">
                First Name
              </label>
              <div className="col-md-12">
                <input
                  {...register("fname")}
                  name="fname"
                  placeholder="First Name"
                  className="form-control input-md"
                />
              </div>
            </div>

            <div className="form-group mt-3 mb-3">
              <label className="col-md-12 control-label" htmlFor="lname">
                Last name
              </label>
              <div className="col-md-12">
                <input
                  {...register("lname")}
                  name="lname"
                  placeholder="Last Name"
                  className="form-control input-md"
                />
              </div>
            </div>

            <div className="form-group mt-3 mb-3">
              <label className="col-md-12 control-label" htmlFor="age">
                Age:
              </label>
              <div className="col-md-12">
                <input
                  {...register("age", { required: true })}
                  placeholder="Age *"
                  type="number"
                  min="18"
                  max="99"
                  className="form-control"
                  name="age"
                />
              </div>
            </div>

            <div className="form-group mt-3 mb-3">
              <label className="col-md-12 control-label" htmlFor="salary">
                Salary
              </label>
              <div className="col-md-12">
                <input
                  {...register("salary", { required: true })}
                  placeholder="Salary *"
                  type="number"
                  min="10000"
                  max="900000"
                  className="form-control"
                />
              </div>
            </div>

            <div className="form-group mt-3 mb-3">
              <label className="col-md-12 control-label" htmlFor="designation">
                Designation
              </label>
              <div className="col-md-12">
                <input
                  {...register("designation")}
                  placeholder="Designation"
                  className="form-control"
                  name="designation"
                />
              </div>
            </div>

            <div className="form-group mt-3 mb-3">
              <label className="col-md-12 control-label" htmlFor="email">
                Email
              </label>
              <div className="col-md-12">
                <input
                  placeholder="Enter Email Address *"
                  {...register("email", {
                    required: "Email is required",
                    pattern: {
                      value:
                        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                      message: "Please enter a valid email",
                    },
                  })}
                  type="email"
                  required
                  className="form-control"
                  name="email"
                />
              </div>
            </div>

            <div className="form-group mt-3 mb-3">
              <label className="col-md-12 control-label" htmlFor="avater">
                Upload Profile Photo
              </label>
              <div className="col-md-12">
                <input
                  {...register("image")}
                  placeholder="image add"
                  type="file"
                  className="form-control"
                  onChange={onChange}
                />
              </div>
            </div>

            <div className="form-group">
              <div className="col-md-4">
                <input
                  type="submit"
                  value="Update"
                  className="btn btn-primary"
                />
              </div>
            </div>
          </fieldset>
        </form>
      </PureModal>

      <button
        className="btn btn-sm btn-outline-primary w-100"
        onClick={() => setModal(true)}
      >
        Update
      </button>
    </div>
  );
};

export default Profileform;
