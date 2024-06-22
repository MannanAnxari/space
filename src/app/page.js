import Image from "next/image";
import DraggableImage from "./components/DraggableImages";
import BG from "@/app/assets/hero_background_image.jpg";
import Hero0 from "@/app/assets/hero/home_hero_biology.png";
import Hero1 from "@/app/assets/hero/home_hero_chemistry.png";
import Hero2 from "@/app/assets/hero/home_hero_math.png";
import Hero3 from "@/app/assets/hero/home_hero_physics.png";
import Hero4 from "@/app/assets/hero/home_hero_personalfinance.png";
import Feature1 from "@/app/assets/home_feature_1.jpg";
import Feature2 from "@/app/assets/home_feature_2.jpg";
import Feature3 from "@/app/assets/home_feature_3.jpg";
import HomeGroup from "@/app/assets/home_group_teachers.jpg";

export default function Home() {
  return (
    <>
      <section
        className="md:py-32 py-14 bg-gray-200 bg-cover bg-no-repeat"
        style={{ backgroundImage: `url(${BG.src})` }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="flex md:flex-row flex-col-reverse">
            <div className="md:flex-[.4] md:text-start text-center z-20 relative backdrop-blur-md md:pt-4 md:p-4 rounded-md sm:pt-8">
              <h1 className="text-2xl font-bold mb-4">
                Engage. Learn. Connect.
              </h1>
              <p className="mb-6">
                From classrooms to family game nights, our card games blend
                education and entertainment, fostering strategic thinking and
                in-person interaction.
              </p>
              <div className="space-x-4">
                <button className="bg-black text-white py-2 px-4 rounded hover:opacity-75 transition-all duration-300 hover:-translate-y-[2px] active:translate-y-[2px] active:scale-95 hover:scale-[1.01]">
                  Games for Education
                </button>
                <button className="bg-white text-black py-2 px-4 rounded border border-gray-400 hover:opacity-75 transition-all duration-300 hover:-translate-y-[2px] active:translate-y-[2px] active:scale-95 hover:scale-[1.01]">
                  Games for Fun
                </button>
              </div>
            </div>
            <div className="relative md:flex-[.6] md:h-0 h-[50vh] md:scale-100 scale-[.8] z-10">
              <DraggableImage
                imgSrc={Hero0}
                classes="md:right-[-200px] right-[-80px] md:top-[100px] top-[155px]"
                deg={4}
              />
              <DraggableImage
                imgSrc={Hero3}
                classes="md:right-[310px] right-[310px] top-[-70px]"
                deg={9}
              />
              <DraggableImage
                imgSrc={Hero4}
                classes="right-[150px] top-[66px]"
                deg={-12}
              />
              <DraggableImage
                imgSrc={Hero1}
                classes="right-[-60px] top-[-74px]"
                deg={9}
              />
              <DraggableImage
                imgSrc={Hero2}
                classes="md:right-[100px] right-[110px] top-[-174px]"
                deg={-12}
              />
            </div>
          </div>
        </div>
      </section>

      <section className="md:py-28 py-14 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="p-4">
            <h2 className="text-center text-2xl font-bold mb-8">
              Why Teachers Love Our Games
            </h2>
            <div className="grid gap-6 md:grid-cols-3">
              <div className="grid grid-cols-2 md:grid-cols-1 gap-6 my-4 hover:scale-105 hover:-translate-y-1 transition-all duration-300 cursor-pointer active:scale-100 active:translate-y-0">
                <div className="md:order-1 order-2">
                  <Image src={Feature1} className="rounded-lg" />
                </div>
                <div className="flex flex-col my-auto md:order-2 order-1">
                  <h3 className="text-xl font-semibold mb-2">
                    Engaging Learning Tools
                  </h3>
                  <p>
                    Interactive, hands-on experiences that make STEM subjects
                    come alive.
                  </p>
                </div>
              </div>
              <div className="grid grid-cols-2 md:grid-cols-1 gap-6 my-4 hover:scale-105 hover:-translate-y-1 transition-all duration-300 cursor-pointer active:scale-100 active:translate-y-0">
                <div>
                  <Image src={Feature2} className="rounded-lg" />
                </div>
                <div className="flex flex-col my-auto">
                  <h3 className="text-xl font-semibold mb-2">
                    Improved Student Engagement
                  </h3>
                  <p>
                    Encourage active participation and teamwork among students.
                  </p>
                </div>
              </div>
              <div className="grid grid-cols-2 md:grid-cols-1 gap-6 my-4 hover:scale-105 hover:-translate-y-1 transition-all duration-300 cursor-pointer active:scale-100 active:translate-y-0">
                <div className="md:order-1 order-2">
                  <Image src={Feature3} className="rounded-lg" />
                </div>
                <div className="flex flex-col my-auto md:order-2 order-1">
                  <h3 className="text-xl font-semibold mb-2">
                    Ease of Integration
                  </h3>
                  <p>
                    Simple setup with how-to-play video and associated teaching
                    plan.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="md:pb-28 pb-14 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="flex flex-col md:flex-row items-center rounded-lg md:gap-10 p-4">
            <div className="flex-[.5]">
              <Image src={HomeGroup} className="rounded-lg" />
            </div>
            <div className="mt-4 md:mt-0 md:ml-4 flex-[.5]">
              <h2 className="text-xl font-bold mb-2">
                Join Our Teacher Community
              </h2>
              <p className="mb-4">
                Join our Facebook group where teachers share fun, interactive
                ways to engage students while learning. Discover new ideas,
                share your experiences, and become part of a supportive
                community dedicated to transforming education through play.
              </p>
              <a
                href="#"
                className="inline-block bg-blue-600 text-white font-semibold py-2 px-4 rounded shadow-md hover:opacity-75 transition-all duration-300 hover:-translate-y-[2px] active:translate-y-[2px] active:scale-95 hover:scale-[1.01]"
              >
                <img
                  src="https://www.facebook.com/images/fb_icon_325x325.png"
                  alt="Facebook"
                  className="inline h-6 w-6 mr-2 align-middle"
                />
                CLICK HERE TO JOIN NOW
              </a>
            </div>
          </div>
        </div>
      </section>
      <section className="md:py-18 py-14 bg-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="flex flex-col items-center justify-center gap-6">
            <span className="bg-white p-2 rounded-full flex">
              <img
                src="https://www.facebook.com/images/fb_icon_325x325.png"
                alt="Facebook"
                className="inline h-10 w-10 align-middle"
              />
            </span>
            <p>&copy; 2024 Company. All rights reserved.</p>
          </div>
        </div>
      </section>
    </>
  );
}
