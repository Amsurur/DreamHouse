import axios from "axios";
import React, { useEffect, useState } from "react";
import { fileToBase64 } from "../../utils/fileToBase64";

const Career = () => {
  const [text, setText] = useState("");
  const [desc, setDesc] = useState("");
  const [radius, setRadius] = useState("");
  const [show, setShow] = useState(false);
  const [color, setColor] = useState("");
  const [work, setWork] = useState([]);
  const [img, setImg] = useState(null);
  const [colorEdit, setColorEdit] = useState("");

  const [imageEdit, setImgEdit] = useState(null);
  const [textEdit, setTextEdit] = useState("");
  const [descEdit, setDescEdit] = useState("");
  const [radiusEdit, setRadiusEdit] = useState("");
  const [idx, setIdx] = useState(null);
  const [modal, setModal] = useState(false);

  const handleImage = async (event) => {
    // console.log(event.target.files[0]);
    let file = await fileToBase64(event.target.files[0]);

    setImg(file);
  };
  const Api = "http://localhost:3000/data";
  const ApiSearch = `http://localhost:3000/data?q=${text}`;
  async function getWork() {
    try {
      const { data } = await axios.get(
        text.trim().length == 0 ? Api : ApiSearch
      );
      setWork(data);
    } catch (error) {
      console.error(error);
    }
  }
  async function addWork() {
    try {
      let obj = {
        img: img,
        title: text,
        desc: desc,
        color: color,
        radius: `${radius}px`,
      };
      const { data } = await axios.post(Api, obj);
      getWork();
      setColor("");
      setImg(null);
      setText("");
      setDesc("");
      setRadius("");
      setShow(false);
    } catch (error) {
      console.error(error);
    }
  }
  async function deleteWork(id) {
    try {
      const { data } = await axios.delete(`${Api}/${id}`);
      getWork();
    } catch (error) {}
  }
  async function editWork() {
    try {
      const { data } = await axios.put(`${Api}/${idx}`, {
        img: imageEdit,
        title: textEdit,
        radius: `${radiusEdit}px`,
        desc: descEdit,
        color: colorEdit,
      });
      getWork();
      setModal(false);
    } catch (error) {}
  }

  const handleColor = (e) => {
    setColor(e.hex);
  };
  const handleColorEdit = (e) => {
    setColorEdit(e.hex);
  };

  const handleImageEdit = async (event) => {
    let file = await fileToBase64(event.target.files[0]);
    setImgEdit(file);
  };

  useEffect(() => {
    getWork();
  }, [text]);

  return (
    <div>
      <div className="sec1Bg md:p-24 py-24 px-10 text-center">
        <h1 className="text-5xl font-bold mt-40 mb-10 text-white">
          Our Career
        </h1>
      </div>
      <div className="mb-20">
        <div className="my-14 text-center">
          <input
            className="border-2 outline-none border-blue-400 px-5 py-3 rounded-xl mr-5"
            placeholder="name"
            type="text"
            value={text}
            onChange={(e) => setText(e.target.value)}
          />
          <input
            type="text"
            placeholder="title"
            className="px-5  rounded-xl  py-3 outline-none border-2 border-red-300"
            value={desc}
            onChange={(e) => setDesc(e.target.value)}
          />
          <input
            className="border-2 outline-none border-green-300 px-5 py-3 rounded-xl  mx-5 "
            placeholder="rounded"
            type="text"
            value={radius}
            onChange={(e) => setRadius(e.target.value)}
          />
          <input
            className=""
            type="file"
            onChange={(event) => handleImage(event)}
          />

          <button className="" onClick={() => addWork()}>
            Add
          </button>
        </div>
        <div className="text-center mb-10">
          {show ? <SketchPicker color={color} onChange={handleColor} /> : null}
          <button
            style={{ background: color }}
            className="px-5 py-2 rounded-xl"
            onClick={() => setShow(!show)}
          >
            Color
          </button>
        </div>
        <div className="grid lg:grid-cols-3 md:grid-cols-2  gap-10 w-[90%] mx-auto">
          {work.map((e) => {
            return (
              <div
                key={e.id}
                className="relative text-center rounded-2xl p-10 shadow-2xl  hover:shadow-green-300"
                style={{ background: e.color, borderRadius: e.radius }}
              >
                <div className="flex gap-5 items-center">
                  <div className="w-[50%]">
                    <img
                      src={
                        e.img
                          ? e.img
                          : "https://cdn-icons-png.flaticon.com/512/149/149071.png"
                      }
                      alt=""
                    />
                  </div>
                  <div className="">
                    <p className="text-3xl font-bold">{e.title}</p>
                    <p className="text-lg ">{e.desc}</p>
                  </div>
                </div>
                <div className="mt-8">
                  <button
                    onClick={() => deleteWork(e.id)}
                    className="p-2 rounded-lg bg-red-400"
                  >
                    Delete
                  </button>
                  <button
                    className="ml-10 p-3 px-5  rounded-lg bg-green-300"
                    onClick={() => {
                      setIdx(e.id);
                      setModal(true);
                      setColorEdit(e.color);
                      setImgEdit(e.img);
                      setTextEdit(e.title);
                      setDescEdit(e.desc);
                      setRadiusEdit(e.radius);
                    }}
                  >
                    Edit
                  </button>
                </div>
              </div>
            );
          })}
          {modal ? (
            <div className="modal">
              <div className=" modal-content grid pb-20">
                <div className="grid grid-cols-[1fr,2fr] gap-10 mb-10">
                  <div className="grid gap-10">
                    <input
                      type="text"
                      value={textEdit}
                      onChange={(e) => setTextEdit(e.target.value)}
                      name=""
                      id=""
                      className="border-2 outline-none border-green-200"
                    />
                    <input
                      type="text"
                      value={descEdit}
                      onChange={(e) => setDescEdit(e.target.value)}
                      name=""
                      id=""
                      className="border-2 outline-none border-red-200"
                    />
                    <input
                      type="text"
                      value={radiusEdit}
                      onChange={(e) => setRadiusEdit(e.target.value)}
                      name=""
                      id=""
                      className="border-2 outline-none border-blue-200"
                    />
                  </div>
                  <div className="flex">
                    <SketchPicker
                      color={colorEdit}
                      onChange={handleColorEdit}
                    />
                    <img src={imageEdit} alt="" />
                    <input
                      type="file"
                      onChange={handleImageEdit}
                      name=""
                      id=""
                    />
                    <span onClick={() => setModal(false)} className="cancel">
                      &times;
                    </span>
                  </div>
                </div>

                <button
                  onClick={() => editWork()}
                  className="p-[10px] bg-[green] text-[white]"
                >
                  Submit
                </button>
              </div>
            </div>
          ) : null}
        </div>
      </div>
    </div>
  );
};

export default Career;
