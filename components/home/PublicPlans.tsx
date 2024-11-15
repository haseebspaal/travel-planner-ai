"use client";

import Image from "next/image";
import React from "react";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';

export default async function PublicPlans() {
  return (
    <section
      id="public-plans"
      className="relative w-full py-[50px] flex justify-center items-end" >
      <div className="container">
        <div className="flex flex-col gap-2 w-full mb-[50px] ">
          <section className="flex flex-col gap-5 text-left absolute top-[100px]">
            <h2 className="text-[#6D5FFD] text-lg font-bold tracking-wide">
              OUR COMMUNITY'S
            </h2>
            <h3 className="text-foreground md:text-3xl text-xl font-bold ">
              Favorite Trips
            </h3>
          </section>
        </div>
        <Swiper
          autoplay={true}
          loop={true}
          slidesPerView={3}
          spaceBetween={50}
          navigation={true}
          speed={500}
          modules={[Navigation]}
          className="mySwipper"
          breakpoints={{
            1400: {
              slidesPerView: 3,
              spaceBetween: 20,
            },
            1000: {
              slidesPerView: 3,
              spaceBetween: 20,
            },
            600: {
              slidesPerView: 2,
              spaceBetween: 10,
            },
            0: {
              slidesPerView: 1,
              spaceBetween: 10,
              centeredSlides: false,
            }
          }}
        >
          <SwiperSlide className="swiper-slide">
            <div className=" shadow rounded-3xl relative w-full before:content-[''] before:bg-[url('/trip-shadow.svg')] before:bg-cover bg-center
        before:h-[400px] before:w-100">
              <a className="block relative rounded">
                <Image src="/trip-1.svg" width={100} height={100} quality={100} priority alt="trip"
                  className="rounded-3xl object-center w-full h-full block z-10" />
              </a>
              <div className="mt-4 pl-4">
                <h2 className="text-black font-[900] text-xl ">Cappadocia</h2>
                <p className="mt-1 text-sm">Lorem ipsum dol Laboriosam nihil sequi officiis aliquam repellat.</p>
              </div>
              <div className="mt-5 px-4 py-3 rounded-b-3xl flex justify-between items-center bg-[#f7f7f7]">
                <div className="flex flex-col">
                  <p className="text-sm">Machu Pichu, Peru</p>
                  <div className="flex gap-1 items-center">
                    <b className="text-xl font-bold">$380</b>
                    <p className="text-[12px] text-gray-400">x12 Interest free</p>
                  </div>
                </div>
                <button className="bg-[#6D5FFD] px-3 rounded-full text-sm text-gray-100 hover:bg-black transition-all h-[40px]">See More</button>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide className="swiper-slide">
            <div className=" shadow rounded-3xl relative w-full before:content-[''] before:bg-[url('/trip-shadow.svg')] before:bg-cover bg-center
        before:h-[400px] before:w-100">
              <a className="block relative rounded">
                <Image src="/trip-1.svg" width={100} height={100} quality={100} priority alt="trip"
                  className="rounded-3xl object-center w-full h-full block z-10" />
              </a>
              <div className="mt-4 pl-4">
                <h2 className="text-black font-[900] text-xl ">Cappadocia</h2>
                <p className="mt-1 text-sm">Lorem ipsum dol Laboriosam nihil sequi officiis aliquam repellat.</p>
              </div>
              <div className="mt-5 px-4 py-3 rounded-b-3xl flex justify-between items-center bg-[#f7f7f7]">
                <div className="flex flex-col">
                  <p className="text-sm">Machu Pichu, Peru</p>
                  <div className="flex gap-1 items-center">
                    <b className="text-xl font-bold">$380</b>
                    <p className="text-[12px] text-gray-400">x12 Interest free</p>
                  </div>
                </div>
                <button className="bg-[#6D5FFD] px-3 rounded-full text-sm text-gray-100 hover:bg-black transition-all h-[40px]">See More</button>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide className="swiper-slide">
            <div className=" shadow rounded-3xl relative w-full before:content-[''] before:bg-[url('/trip-shadow.svg')] before:bg-cover bg-center
        before:h-[400px] before:w-100">
              <a className="block relative rounded">
                <Image src="/trip-1.svg" width={100} height={100} quality={100} priority alt="trip"
                  className="rounded-3xl object-center w-full h-full block z-10" />
              </a>
              <div className="mt-4 pl-4">
                <h2 className="text-black font-[900] text-xl ">Cappadocia</h2>
                <p className="mt-1 text-sm">Lorem ipsum dol Laboriosam nihil sequi officiis aliquam repellat.</p>
              </div>
              <div className="mt-5 px-4 py-3 rounded-b-3xl flex justify-between items-center bg-[#f7f7f7]">
                <div className="flex flex-col">
                  <p className="text-sm">Machu Pichu, Peru</p>
                  <div className="flex gap-1 items-center">
                    <b className="text-xl font-bold">$380</b>
                    <p className="text-[12px] text-gray-400">x12 Interest free</p>
                  </div>
                </div>
                <button className="bg-[#6D5FFD] px-3 rounded-full text-sm text-gray-100 hover:bg-black transition-all h-[40px]">See More</button>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide className="swiper-slide">
            <div className=" shadow rounded-3xl relative w-full before:content-[''] before:bg-[url('/trip-shadow.svg')] before:bg-cover bg-center
        before:h-[400px] before:w-100">
              <a className="block relative rounded">
                <Image src="/trip-1.svg" width={100} height={100} quality={100} priority alt="trip"
                  className="rounded-3xl object-center w-full h-full block z-10" />
              </a>
              <div className="mt-4 pl-4">
                <h2 className="text-black font-[900] text-xl ">Cappadocia</h2>
                <p className="mt-1 text-sm">Lorem ipsum dol Laboriosam nihil sequi officiis aliquam repellat.</p>
              </div>
              <div className="mt-5 px-4 py-3 rounded-b-3xl flex justify-between items-center bg-[#f7f7f7]">
                <div className="flex flex-col">
                  <p className="text-sm">Machu Pichu, Peru</p>
                  <div className="flex gap-1 items-center">
                    <b className="text-xl font-bold">$380</b>
                    <p className="text-[12px] text-gray-400">x12 Interest free</p>
                  </div>
                </div>
                <button className="bg-[#6D5FFD] px-3 rounded-full text-sm text-gray-100 hover:bg-black transition-all h-[40px]">See More</button>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide className="swiper-slide">
            <div className=" shadow rounded-3xl relative w-full before:content-[''] before:bg-[url('/trip-shadow.svg')] before:bg-cover bg-center
        before:h-[400px] before:w-100">
              <a className="block relative rounded">
                <Image src="/trip-1.svg" width={100} height={100} quality={100} priority alt="trip"
                  className="rounded-3xl object-center w-full h-full block z-10" />
              </a>
              <div className="mt-4 pl-4">
                <h2 className="text-black font-[900] text-xl ">Cappadocia</h2>
                <p className="mt-1 text-sm">Lorem ipsum dol Laboriosam nihil sequi officiis aliquam repellat.</p>
              </div>
              <div className="mt-5 px-4 py-3 rounded-b-3xl flex justify-between items-center bg-[#f7f7f7]">
                <div className="flex flex-col">
                  <p className="text-sm">Machu Pichu, Peru</p>
                  <div className="flex gap-1 items-center">
                    <b className="text-xl font-bold">$380</b>
                    <p className="text-[12px] text-gray-400">x12 Interest free</p>
                  </div>
                </div>
                <button className="bg-[#6D5FFD] px-3 rounded-full text-sm text-gray-100 hover:bg-black transition-all h-[40px]">See More</button>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide className="swiper-slide">
            <div className=" shadow rounded-3xl relative w-full before:content-[''] before:bg-[url('/trip-shadow.svg')] before:bg-cover bg-center
        before:h-[400px] before:w-100">
              <a className="block relative rounded">
                <Image src="/trip-1.svg" width={100} height={100} quality={100} priority alt="trip"
                  className="rounded-3xl object-center w-full h-full block z-10" />
              </a>
              <div className="mt-4 pl-4">
                <h2 className="text-black font-[900] text-xl ">Cappadocia</h2>
                <p className="mt-1 text-sm">Lorem ipsum dol Laboriosam nihil sequi officiis aliquam repellat.</p>
              </div>
              <div className="mt-5 px-4 py-3 rounded-b-3xl flex justify-between items-center bg-[#f7f7f7]">
                <div className="flex flex-col">
                  <p className="text-sm">Machu Pichu, Peru</p>
                  <div className="flex gap-1 items-center">
                    <b className="text-xl font-bold">$380</b>
                    <p className="text-[12px] text-gray-400">x12 Interest free</p>
                  </div>
                </div>
                <button className="bg-[#6D5FFD] px-3 rounded-full text-sm text-gray-100 hover:bg-black transition-all h-[40px]">See More</button>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
       
      </div>
    </section>
  );
}
