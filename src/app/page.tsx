"use client";
import { useForm } from 'react-hook-form';

function page() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const FormHandler = async (data: any) => {
    console.log(data);
    await fetch("/api/FormSubmit", {
      method: "Post",
      body: JSON.stringify(data)
    })
  };

  return <form className="ml-60 mt-10" onSubmit={handleSubmit(FormHandler)}>
    <div>
      <div>
        <label className="font-bold ml-16">Email</label>
      </div>
      <input type="email" placeholder="Enter your Email"  {...register("email", {
        required: true,
      })} className="border-2" />
      {errors.email && errors.email.type === "required" && (
        <p className="errorMsg">Email is required.</p>
      )}
    </div>
    <div className="mt-3">
      <div>
        <label className="font-bold ml-16">Password</label>
      </div>
      <input type="password" placeholder="Enter your Password"  {...register("password", {
        required: true,
        minLength: 6,
      })} className="border-2" />
      {errors.password && errors.password.type === "required" && (
        <p className="errorMsg">Password is required.</p>
      )}
      {errors.password && errors.password.type === "minLength" && (
        <p className="errorMsg">
          Password should be at-least 6 characters.
        </p>
      )}
    </div>
    <div>
      <button type="submit" className="ml-16 mt-2 bg-blue-400 text-white px-2 py-1 rounded-2xl border border-black">Submit</button>
    </div>
  </form>
}

export default page;