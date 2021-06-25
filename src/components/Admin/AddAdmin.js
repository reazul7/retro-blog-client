import React from 'react'
import { useForm } from "react-hook-form";

function AddAdmin() {
    const { register, handleSubmit } = useForm();

    const onSubmit = (data) => {
        console.log(data);
        // fetch("http://localhost:9000/makeAdmin", {
        //     method: "POST",
        //     headers: { "Content-Type": "application/json" },
        //     body: JSON.stringify(data),
        // })
        //     .then((res) => res.json())
        //     .then((data) => {
        //         data && alert("Admin added successfully");
        //     });
    };
    return (
        <div className="container-fluid row">

        <div
            className="col-md-9 p-4 pr-5 me-5 mt-5 container"
            style={{
                position: "absolute",
                right: 0,
                backgroundColor: "#F4FDFB",
            }}
        >
            <form onSubmit={handleSubmit(onSubmit)} class="row g-2">
                <div class="col-md-4  me-5">
                    <label for="inputname" class="form-label">
                        Admin Name
                    </label>
                    <input
                        name="name"
                        {...register("name")}
                        type="text"
                        class="form-control"
                        id="name"
                    />
                </div>

                <div class="col-md-4">
                    <label for="inputWight" class="form-label">
                        Email
                    </label>
                    <input
                        name="email"
                        {...register("email")}
                        type="email"
                        class="form-control"
                    />
                </div>

                <input type="submit" class="col-md-4" />
            </form>
        </div>
    </div>
    )
}

export default AddAdmin;