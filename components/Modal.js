import React, { Fragment, useRef, useState } from "react";
// import { Transition, Dialog } from "@headlessui/react";
import { useRecoilState } from "recoil";
import { modalState } from "../atoms/modelAtom";
import { CameraIcon } from "@heroicons/react/outline";
//firebase
import { getDownloadURL, ref, uploadString } from "firebase/storage";
import {
  addDoc,
  collection,
  doc,
  serverTimestamp,
  updateDoc,
} from "firebase/firestore";
import { db, storage } from "../firebase";
//Session
import { useSession } from "next-auth/react";
function Modal() {
  const [open, setOpen] = useRecoilState(modalState);
  const filePicker = useRef(null);
  const [file, setFile] = useState(null);
  const [loading, setLoading] = useState(false);
  // console.log(loading);
  const { data } = useSession();
  // console.log(data);
  const caption = useRef(null);
  //event handlers
  const addImageToPost = (e) => {
    const reader = new FileReader();
    if (e.target.files[0]) {
      reader.readAsDataURL(e.target.files[0]);
    }
    reader.onload = (readerEvent) => {
      setFile(readerEvent.target.result);
    };
  };
  const addPost = async () => {
    if (loading) return;
    setLoading(true);
    const docRef = await addDoc(collection(db, "posts"), {
      caption: caption.current.value,
      username: data.user.name,
      profileImg: data.user.image,
      timestamp: serverTimestamp(),
    });
    //upload image
    const imageRef = ref(storage, `posts/${docRef.id}/image`);
    await uploadString(imageRef, file, "data_url").then(async (snapshot) => {
      const downloadURL = await getDownloadURL(imageRef);
      await updateDoc(doc(db, "posts", docRef.id), { imageUrl: downloadURL });
    });
    setOpen(false);
    setLoading(false);
    setFile(false);
  };
  return (
    <>
      {" "}
      {open && (
        <div
          className="shadow flex items-center justify-center fixed top-0 left-0 h-[100%] w-[100%] bg-[rgba(0,0,0,0.5)] z-50 "
          onClick={(e) => {
            if (e.target.classList.contains("shadow")) setOpen(false);
          }}
        >
          <div className="h-[90vh]  bg-white text-black px-[20px] w-full">
            <CameraIcon
              className="w-10 h-10"
              onClick={() => {
                filePicker.current.click();
              }}
            />
            <img
              className="w-[400px]"
              src={file}
              onClick={() => setFile(null)}
              alt=""
            />
            <input
              hidden
              ref={filePicker}
              type="file"
              onChange={addImageToPost}
            />
            <input ref={caption} type="text" placeholder="Enter a caption..." />
            <button
              onClick={addPost}
              disabled={loading}
              className="bg-red-300 cursor-pointer"
            >
              Upload
            </button>
          </div>
        </div>
      )}
    </>
  );
}

export default Modal;
