"use client";

import React, { useState, useEffect } from "react";
import localFont from "next/font/local";
import { db } from "@/db/firebase-config";
import { getDocs, collection } from "firebase/firestore";
import Link from "next/link";
import TechNews from "@/components/tech-news/page";

const DaysOne = localFont({
  src: "../../../../public/fonts/DaysOne-Regular.ttf",
});

const Homepage = () => {
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

        setBlogs(filteredData);
      } catch (err) {
        console.log(err);
      }
    };

    getblogs();
  }, []);

  return (
    <div className="min-h-screen py-6">
      <div className="flex flex-col justify-between gap-16">
        <div className="pt-32 flex flex-col gap-16">
          <div className="flex justify-start items-center flex-shrink-0 text-[40px]">
            <div>Hi, I'm&nbsp;</div>
            <div className="font-bold text-[#D65A31]">Aritra</div>
          </div>
          <div className="text-[64px]" style={DaysOne.style}>
            Frontend Developer & Web Designer
          </div>
        </div>
        <div className="flex flex-col gap-y-10">
          <div className="text-[23px]">
            I share my latest designs and dev skills here
          </div>
          <Link href="/" className="flex justify-between gap-8">
            {blogs.map((data) => (
              <div
                className=" rounded-lg h-[400px] w-[900px]"
                key={data.id}
              >
                <video
                  src={data.video}
                  muted
                  autoPlay
                  loop
                  className="rounded-lg object-cover"
                ></video>
                <h1 className="text-3xl font-semibold py-2">{data.title}</h1>
                <p className="text-[#eeeeee81]">{data.slug}</p>
                <p>{data.desc}</p>
              </div>
            ))}
          </Link>
        </div>
        <TechNews />
      </div>
    </div>
  );
};

export default Homepage;
