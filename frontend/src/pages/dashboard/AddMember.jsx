import React from "react";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { registerUser } from "../../features/auth/authSlice";
function AddMember(){

  const dispatch = useDispatch();
 const {
    register,
    handleSubmit,
    reset,
    formState: { errors }
  } = useForm();


  const onSubmit =(data)=>{
    console.log(data);
   dispatch(
         registerUser({ 
         name:data.name,
         email:data.email,
         roll_number:data.roll_number,
         department:data.department,
         phone:data.phone_number,
         date_of_birth:data.dob,
        
        
        })
       );


    reset();
  }
  return(
    <>
<div className="w-full h-screen  flex justify-center items-center">
 <div className="max-w-xl w-4/6 text-black mx-auto p-6 shadow-lg rounded-2xl bg-white">
      <h2 className="text-2xl font-bold mb-4">Add Member Book</h2>
       <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
                <div>
          <input type="number"
          placeholder="Roll number"
          {...register("roll_number",
            {
              required:"ROll number is required"
            }
          )}
          className="w-full text-black border p-2 rounded"/>
          
          {
            errors.roll_number && <p className="text-red-500">{errors.roll_number.message}</p>}
          
          
        </div>
        <div>
          <input type="text"
          placeholder="Name"
          {...register("name",
            {
              required:"Name is required"
            }
          )}
          className="w-full text-black border p-2 rounded"/>
          
          {
            errors.name && <p className="text-red-500">{errors.name.message}</p>}
          
          
        </div>
         <div>
          <input type="email"
          placeholder="email"
          {...register("email",
            {
              required:"email is required"
            }
          )}
          className="w-full border p-2 rounded"/>
          
          {
            errors.email && <p className="text-red-500">{errors.email.message}</p>}
          
          
        </div>
               <div>
          <input type="date"
          placeholder="DOB"
          {...register("dob",
            {
              required:"DOB is required"
            }
          )}
          className="w-full text-black border p-2 rounded"/>
          
          {
            errors.dob && <p className="text-red-500">{errors.dob.message}</p>}
          
          
        </div>
          <div>
          <input type="number"
          placeholder="Phone number"
          {...register("phone_number",
            {
              required:"Phone number is required"
            }
          )}
          className="w-full text-black border p-2 rounded"/>
          
          {
            errors.phone_number && <p className="text-red-500">{errors.phone_number.message}</p>}
          
          
        </div>
          <div>
          <input type="text"
          placeholder="department"
          {...register("department",
            {
              required:"department is required"
            }
          )}
          className="w-full border p-2 rounded"/>
          
          {
            errors.department && <p className="text-red-500">{errors.department.message}</p>}
          
          
        </div>
         <div>
          <input type="password"
          placeholder="password"
          {...register("password",
            {
              required:"password is required"
            }
          )}
          className="w-full border p-2 rounded"/>
          
          {
            errors.password && <p className="text-red-500">{errors.password.message}</p>}
          
          
        </div>
                <button
          type="submit"
          className="w-full bg-blue-600 text-white p-2 rounded hover:bg-blue-700"
        >
          Add Member
        </button>
       </form>
</div>
</div>

     
    </>
  )

}
export default AddMember;