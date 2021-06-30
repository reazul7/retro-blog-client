import React, { useContext, useState } from "react";
import axios from "axios";
import { useForm } from "react-hook-form";
import { CKEditor } from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import { UserContext } from "../../App";
import { useHistory } from "react-router-dom";

const AddBlog = () => {
  const [loggedInUser, setLoggedInUser] = useContext(UserContext);
  const history = useHistory();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const [imageURL, setImageURL] = useState(null);
  const [value, setValue] = useState("");

  const handleOnChange = (e, editor) => {
    // console.log(editor.getData());

    const data = editor.getData();
    setValue(data);
  };

  const onSubmit = (data, e) => {
    console.log(data);
    const eventData = {
      title: data.title,
      // blog: data.blog,
      Author: data.Author,
      email: loggedInUser.email,
      value: value,
      imageURL: imageURL,
      date: new Date().toDateString(),
      time: new Date().setHours(24),
    };
    // console.log(eventData);

    fetch("https://desolate-savannah-78335.herokuapp.com/addBlog", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(eventData),
    })
      .then((response) => response.json())
      .then((res) => {
        // console.log("response", res);
        if (res) {
          alert("Post publish successful..!");
          e.target.reset();
        } else {
          alert("Post publish failed!");
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const handleImageUpload = (event) => {
    console.log(event.target.files[0]);
    const imageData = new FormData();
    imageData.set("key", "d371491237d968517d992b8f6982be6a");
    imageData.append("image", event.target.files[0]);

    axios
      .post("https://api.imgbb.com/1/upload", imageData)
      .then(function (response) {
        // console.log(response);
        setImageURL(response.data.data.display_url);
      })
      .catch(function (error) {
        console.log(error);
      });
  };
  return (
    <div>
      <div>
        <div class="container m-5">
          <form onSubmit={handleSubmit(onSubmit)}>
            <div class="mb-3 col-md-9 mx-auto">
              <label for="exampleFormControlInput1" class="form-label">
                Title
              </label>
              <input
                type="text"
                class="form-control "
                {...register("title", { required: true })}
                // id="exampleFormControlInput1"
                placeholder="Title"
              />

              {errors.title && <span>This field is required</span>}
            </div>
            <br />
            <div class="mb-3 col-md-9  mx-auto">
              <label for="exampleFormControlTextarea1" class="form-label">
                Write your Blog
              </label>
              {/* <textarea
                    class="form-control"
                    {...register("blog")}
                    id="exampleFormControlTextarea1"
                    rows="3"
                        // placeholder="Leave a story"
                        // style={{height:"400px"}}
                ></textarea> */}

              <CKEditor editor={ClassicEditor} onChange={handleOnChange} />
            </div>
            <br />
            <div class="mb-3 col-md-9 mx-auto">
              <label for="exampleFormControlInput1" class="form-label">
                Author
              </label>
              <input
                type="text"
                class="form-control "
                {...register("Author", { required: true })}
                // id="exampleFormControlInput1"
                placeholder="Author"
              />
              {errors.Author && <span>This field is required</span>}
            </div>
            <br />
            <div class="row " style={{ marginLeft: "20%" }}>
              <div class="col-md-4">
                <label for="inputPhoto" class="form-label">
                  Add Photo
                </label>
                <input
                  type="file"
                  class="form-control"
                  onChange={handleImageUpload}
                  id="Photo"
                />
              </div>
              <br />
            </div>
            <br />
            <div class="mx-auto" style={{ width: "200px" }}>
              {/* <input class="mx-auto" type="submit" /> */}
              <button
                type="submit"
                class="border border-indigo-500 bg-indigo-500 text-white rounded-md px-4 py-2 m-2 transition duration-500 ease select-none hover:bg-indigo-600 focus:outline-none focus:shadow-outline"
              >
                Save and Publish{" "}
              </button>
            </div>
          </form>
          <div className="text-center">
            <button
              onClick={() => history.goBack()}
              class="border text-center border-indigo-500 bg-indigo-500 text-white rounded-md px-4 py-2 m-2 transition duration-500 ease select-none hover:bg-indigo-600 focus:outline-none focus:shadow-outline"
            >
              Back
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddBlog;
