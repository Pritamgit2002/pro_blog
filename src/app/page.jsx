"use client"

import {db} from "../db/firebase-config"
import { getDocs, collection } from "firebase/firestore";
import { useEffect, useState } from "react";
import HomePage from "@/app/pages/homepage/page";

export default function Home() {

  const [blogs, setBlogs] = useState([]);

  const blogsCollectionRef = collection(db, "blogs");

  useEffect(() => {
    const getblogs = async () => {
      try {
        const data = await getDocs(blogsCollectionRef);

        const filteredData = data.docs.map((doc) => ({
          ...doc.data(),
          id: doc.id,
        }));

        setBlogs(filteredData)
      } catch (err) {
        console.log(err);
      }
    };

    getblogs();
  }, []);

  return (
    <main>

      {/* <div className="">
        {blogs.map((data) => (
          <div className="grid grid-rows-2 p-5 m-5 bg-teal-900" key={data.id}>
            <h1>{data.title}</h1>
            <p>{data.slug}</p>
            <p>{data.desc}</p>
          </div>
        ))}
      </div> */}
      <HomePage />
    </main>
  )
}
