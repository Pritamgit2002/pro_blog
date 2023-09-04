"use client";
import { db } from "@/db/firebase-config";
import Image from "next/image";
import React, { useState, useEffect } from "react";
import { getDocs, collection } from "firebase/firestore";

const TechNews = () => {
  const [news, setNews] = useState([]);

  const newsCollectionRef = collection(db, "tech-news");

  useEffect(() => {
    const getnews = async () => {
      try {
        const data = await getDocs(newsCollectionRef);

        const filteredData = data.docs.map((doc) => ({
          ...doc.data(),
          id: doc.id,
        }));

        setNews(filteredData);
      } catch (err) {
        console.log(err);
      }
    };

    getnews();
  }, []);

  return (
    <div className="w-full">
      <div className="uppercase text-[33px] items-center text-center">
        Tech News
      </div>
      <div>
        {news.map((data) => (
          <div
            key={data.id}
            className="flex h-full w-full items-center justify-between py-6 gap-6 flex-col md:flex-row"
          >
            <Image src={data.image} height={300} width={300} alt="" />
            <div className="w-[70%]">
              <h1 className="">{data.title}</h1>
              <p className="">{data.slug}</p>
            </div>
          </div>
        ))}
        <Image />
      </div>
    </div>
  );
};

export default TechNews;
