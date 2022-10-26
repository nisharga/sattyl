import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";

const Settyl = () => {
  const { register, handleSubmit } = useForm();
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
  const onSubmit = async (data) => {
    const fname = data.first_name;
    const lname = data.last_name;
    const email = data.email;
    const age = data.age;
    const designation = data.designation;
    const salary = data.salary;

    fetch("https://obscure-falls-66122.herokuapp.com/addproduct", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
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
    toast("successfully Created");
  };

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="row">
          <div className="col-md-3 mt-2 mb-2">
            <input
              {...register("first_name", { required: true })}
              placeholder="Enter First Name *"
              className="form-control"
            />
          </div>
          <div className="col-md-3 mt-2 mb-2">
            <input
              {...register("last_name")}
              placeholder="Enter Last Name"
              className="form-control"
            />
          </div>
          <div className="col-md-3 mt-2 mb-2">
            <input
              {...register("age", { required: true })}
              placeholder="Age *"
              type="number"
              min="18"
              max="99"
              className="form-control"
            />
          </div>
          <div className="col-md-3 mt-2 mb-2">
            <input
              {...register("salary", { required: true })}
              placeholder="Salary *"
              type="number"
              min="10000"
              max="900000"
              className="form-control"
            />
          </div>
          <div className="col-md-3 mt-2 mb-2">
            <input
              {...register("designation")}
              placeholder="Designation"
              className="form-control"
            />
          </div>
          <div className="col-md-3 mt-2 mb-2">
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
            />
          </div>
          <div className="col-md-3 mt-2 mb-2">
            <input
              {...register("avater")}
              placeholder="image add"
              type="file"
              className="form-control"
              onChange={onChange}
            />
          </div>
          <div className="col-md-3 mt-2 mb-2">
            <input type="submit" className="btn btn-primary form-control" />
          </div>
        </div>
      </form>
    </div>
  );
};

export default Settyl;
