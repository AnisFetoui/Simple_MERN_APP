import React, { useEffect, useState } from "react";
import Inputs from "../components/Inputs";
import { useDispatch, useSelector } from "react-redux";
import classNames from "classnames";
import { AddProfile, GetProfile } from "../redux/actions/profileActions";

function Profile() {
  const [form, setForm] = useState({})
  const dispatch = useDispatch()
  const errors = useSelector(state=>state.errors)
  const profiles = useSelector(state=>state.profiles)
  const [message, setMessage] = useState("")
  const [show, setShow] = useState(false)
  const onChangeHandler = (e)=>{
    setForm({
      ...form,
      [e.target.name]: e.target.value
    })
  }

  const onSubmit = (e)=>{
  e.preventDefault();
  dispatch(AddProfile(form, setShow, setMessage))
  }

  useEffect( ()=>{
  dispatch(GetProfile())
  setForm(profiles.profile)
  },[])
  return (
    <div class="container p-4 mt-4">
       
       <div class="alert alert-success" role="alert" style={{ display: show ? "block" : "none"}}>
          {message}
        </div>
        
      <div class="row justify-content-evenly mt-4">
        <div class="col-lg-6 col-md-12 mt-4">
          <div class="d-flex">
            <i class="fa-solid fa-user fs-1 mx-2"></i> <h2>Profile</h2>
          </div>
          <div
            class="p-6 shadow-lg p-3 mb-5 bg-body rounded"
            style={{ backgroundColor: "white" }}
          >
            <form onSubmit={onSubmit}>
            <Inputs name="tel" label="Telephone" value={form && form.tel ? form.tel : ""} type="text" onChangeHandler={onChangeHandler} errors={errors.tel}/>
            <Inputs name="city" label="City" value={form && form.city ? form.city : ""} type="text" onChangeHandler={onChangeHandler} errors={errors.city}/>
            <Inputs name="country" label="Country" value={form && form.country ? form.country : ""} type="text" onChangeHandler={onChangeHandler} errors={errors.country}/>
            <Inputs name="bio" label="Bio" type="text" value={form && form.bio ? form.bio : ""} onChangeHandler={onChangeHandler} errors={errors.bio}/>
            <Inputs name="postalcode" label="PostalCode" value={form && form.postalcode ? form.postalcode : ""} type="text" onChangeHandler={onChangeHandler} errors={errors.postalcode}/>
              <div class=" mb-3">
                <label class="form-label">Address</label>
                <div class="input-group">
                  <textarea
                    type="text"
                    className={classNames("form-control", {"is-invalid": errors.address})}
                    name="address"
                    onChange={onChangeHandler}
                    value={form && form.address ? form.address : ""}
                  ></textarea>
                  {
                    errors.address && (<div  className="invalid-feedback">
                    {errors.address}
                  </div>)
                  }
                </div>
              </div>
              <div class="d-flex justify-content-between">
                <button type="submit" class="btn btn-outline-primary">
                  Update <i class="fa-solid fa-floppy-disk"></i>
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Profile;
