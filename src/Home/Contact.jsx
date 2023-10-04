import React from "react";

const Contact = () => {
  return (
    <>
    <h1 className="text-7xl font-extrabold text-center mt-10">Contact</h1>
    <h1 className="text-3xl font-bold text-center mt-10">sand an email with the form below</h1>
    <div className=" w-4/5 mx-auto">
      <form className="p-10">
        <div className="flex ">
          <div className="form-control w-1/2 mr-5">
            <label className="label">
              <span className="label-text text-[#d3aa2f]">Your Name</span>
            </label>
            <input
              type="text"
              className="input input-bordered"
            />
          </div>
          <div className="form-control w-1/2">
            <label className="label">
              <span className="label-text text-[#d3aa2f]">Your Email</span>
            </label>
            <input
              type="text"
              className="input input-bordered text-[#d3aa2f]"
            />
          </div>
        </div>
        <div className="flex">
          <div className="form-control mr-5 w-1/2">
            <label className="label">
              <span className="label-text text-[#d3aa2f]">Your Phone Number</span>
            </label>
            <input
              type="text"
              className="input input-bordered"
            />
          </div>
          <div className="form-control w-1/2">
            <label className="label">
              <span className="label-text text-[#d3aa2f]">Subject</span>
            </label>
            <input
              type="text"
              className="input input-bordered"
            />
          </div>
        </div>
        <div className="form-control">
            <label className="label">
              <span className="label-text text-[#d3aa2f]">Message</span>
            </label>
            <textarea
              type="text"
              className="input input-bordered"
            />
          </div>
       <div className=" form-control mt-7">
       <input className="px-8  bg-[#877a52] hover:bg-[#d3aa2f] duration-700 p-2 md:py-3 text-white mt-5 rounded-md" type="submit" value="send" />
       </div>
      </form>
    </div>
    </>
  );
};

export default Contact;
