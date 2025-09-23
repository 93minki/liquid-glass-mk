// src/App.tsx
// https://techcrunch.com/2025/06/09/apple-redesigns-its-operating-systems-with-liquid-glass/
import { AiOutlineCamera, AiOutlinePicture } from "react-icons/ai";
import { BiMessageRounded } from "react-icons/bi";
import {
  BsCameraVideoFill,
  BsHeartPulse,
  BsMusicNoteBeamed,
} from "react-icons/bs";
import { CiCalendarDate, CiClock2, CiSearch, CiSettings } from "react-icons/ci";
import { FaRegCircle } from "react-icons/fa";
import { FaMapLocationDot } from "react-icons/fa6";
import { FiMail, FiMapPin } from "react-icons/fi";
import { GrAppleAppStore } from "react-icons/gr";
import { HiOutlineWallet } from "react-icons/hi2";
import { IoCall } from "react-icons/io5";
import { LuNotebookTabs, LuNotepadText } from "react-icons/lu";
import { PiApplePodcastsLogoLight } from "react-icons/pi";
import { SiApplenews, SiAppletv } from "react-icons/si";
import { TiCompass } from "react-icons/ti";
import { WiDayCloudy } from "react-icons/wi";
import { LiquidGlass } from "./components/LiquidGlass";

// background image

// "url('https://images.unsplash.com/photo-1539635278303-d4002c07eae3?crop=entropy&cs=srgb&fm=jpg&ixid=M3wzMjM4NDZ8MHwxfHJhbmRvbXx8fHx8fHx8fDE3NDk1Njc4NTB8&ixlib=rb-4.1.0&q=85') center/cover no-repeat"

// "url('https://images.unsplash.com/photo-1506744038136-46273834b3fb?crop=entropy&cs=srgb&fm=jpg&ixid=M3wzMjM4NDZ8MHwxfGFic3RyYWN0fHx8fHx8fDE3NDk2NjA0MjF8&ixlib=rb-4.0.3&q=85') center/cover no-repeat"

// "url('https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?crop=entropy&cs=srgb&fm=jpg&ixid=M3wzMjM4NDZ8MHwxfGFic3RyYWN0fHx8fHx8fDE3NDk2NjA0NDd8&ixlib=rb-4.0.3&q=85') center/cover no-repeat"

function App() {
  // useLiquidGlassCursor({
  //   size: 120,
  //   blur: 1,
  //   intensity: 0.5,
  // });

  const bg1 =
    "url('https://images.unsplash.com/photo-1539635278303-d4002c07eae3?crop=entropy&cs=srgb&fm=jpg&ixid=M3wzMjM4NDZ8MHwxfHJhbmRvbXx8fHx8fHx8fDE3NDk1Njc4NTB8&ixlib=rb-4.1.0&q=85') center/cover no-repeat";
  const bg2 =
    "url('https://images.unsplash.com/photo-1506744038136-46273834b3fb?crop=entropy&cs=srgb&fm=jpg&ixid=M3wzMjM4NDZ8MHwxfGFic3RyYWN0fHx8fHx8fDE3NDk2NjA0MjF8&ixlib=rb-4.0.3&q=85') center/cover no-repeat";
  const bg3 =
    "url('https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?crop=entropy&cs=srgb&fm=jpg&ixid=M3wzMjM4NDZ8MHwxfGFic3RyYWN0fHx8fHx8fDE3NDk2NjA0NDd8&ixlib=rb-4.0.3&q=85') center/cover no-repeat";

  return (
    <div
      style={{
        margin: 0,
        padding: "20px",
        background: `${bg2}`,
        minHeight: "100vh",
        fontFamily:
          "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif",
      }}
      className="flex justify-center items-center"
    >
      <div className="w-full max-w-2xl mx-auto grid grid-cols-2 gap-x-8 gap-y-8 p-10">
        <div className="flex flex-col gap-1">
          <LiquidGlass
            borderRadius={"lg"}
            className="flex flex-col text-white p-4 gap-8 h-full justify-between"
          >
            <div className="flex flex-col">
              <span className="text-xl font-medium">San Francisco</span>
              <span className="text-7xl font-light">53°</span>
            </div>
            <div className="flex flex-col">
              <WiDayCloudy size={32} color="white" fill="white" />
              <span>Partly Cloudy</span>
              <span>H:56° L:50°</span>
            </div>
          </LiquidGlass>
          <span className="flex justify-center items-center text-lg font-medium text-white text-center">
            Weather
          </span>
        </div>
        <div className="flex flex-col gap-1">
          <LiquidGlass
            borderRadius={"lg"}
            className="flex flex-col text-white p-4 gap-4 h-full justify-between"
          >
            <div className="flex justify-end relative">
              <FiMapPin color="white" size={60} />
              <FaRegCircle
                color="white"
                size={40}
                className="absolute bottom-[-20px] right-[10px]"
              />
            </div>
            <div className="flex flex-col">
              <span>Now</span>
              <span>Marina Green</span>
              <span>San Francisco, CA</span>
            </div>
          </LiquidGlass>
          <span className="flex justify-center items-center text-lg font-medium text-white text-center">
            Find My
          </span>
        </div>

        <div className="w-full col-span-2 grid grid-cols-[1fr_1fr_1fr_1fr] grid-rows-[1fr_1fr_1fr_1fr] gap-x-4 gap-y-8">
          <div className="place-self-center gap-2 w-24 h-24">
            <LiquidGlass className="flex justify-center items-center p-4">
              <BsCameraVideoFill color="white" size={"full"} />
            </LiquidGlass>
            <span className="flex justify-center items-center text-white text-center">
              FaceTime
            </span>
          </div>
          <div className="place-self-center gap-2 w-24 h-24">
            <LiquidGlass className="flex justify-center items-center p-4">
              <CiCalendarDate color="white" size={"full"} />
            </LiquidGlass>
            <span className="flex justify-center items-center text-white text-center">
              Calendar
            </span>
          </div>
          <div className="place-self-center gap-2 w-24 h-24">
            <LiquidGlass className="flex justify-center items-center p-4">
              <AiOutlinePicture color="white" size={"full"} />
            </LiquidGlass>
            <span className="flex justify-center items-center text-white text-center">
              Photos
            </span>
          </div>
          <div className="place-self-center gap-2 w-24 h-24">
            <LiquidGlass className="flex justify-center items-center p-4">
              <AiOutlineCamera color="white" size={"full"} />
            </LiquidGlass>
            <span className="flex justify-center items-center text-white text-center">
              Camera
            </span>
          </div>
          <div className="place-self-center gap-2 w-24 h-24">
            <LiquidGlass className="flex justify-center items-center p-4">
              <FiMail color="white" size={"full"} />
            </LiquidGlass>
            <span className="flex justify-center items-center text-white text-center">
              Mail
            </span>
          </div>
          <div className="place-self-center gap-2 w-24 h-24">
            <LiquidGlass className="flex justify-center items-center p-4">
              <LuNotepadText color="white" size={"full"} />
            </LiquidGlass>
            <span className="flex justify-center items-center text-white text-center">
              Notes
            </span>
          </div>
          <div className="place-self-center gap-2 w-24 h-24">
            <LiquidGlass className="flex justify-center items-center p-4">
              <LuNotebookTabs color="white" size={"full"} />
            </LiquidGlass>
            <span className="flex justify-center items-center text-white text-center">
              Reminders
            </span>
          </div>
          <div className="place-self-center gap-2 w-24 h-24">
            <LiquidGlass className="flex justify-center items-center p-4">
              <CiClock2 color="white" size={"full"} />
            </LiquidGlass>
            <span className="flex justify-center items-center text-white text-center">
              Clock
            </span>
          </div>
          <div className="place-self-center gap-2 w-24 h-24">
            <LiquidGlass className="flex justify-center items-center p-4">
              <SiApplenews color="white" size={"full"} />
            </LiquidGlass>
            <span className="flex justify-center items-center text-white text-center">
              News
            </span>
          </div>
          <div className="place-self-center gap-2 w-24 h-24">
            <LiquidGlass className="flex justify-center items-center p-4">
              <SiAppletv color="white" size={"full"} />
            </LiquidGlass>
            <span className="flex justify-center items-center text-white text-center">
              TV
            </span>
          </div>
          <div className="place-self-center gap-2 w-24 h-24">
            <LiquidGlass className="flex justify-center items-center p-4">
              <PiApplePodcastsLogoLight color="white" size={"full"} />
            </LiquidGlass>
            <span className="flex justify-center items-center text-white text-center">
              Podcasts
            </span>
          </div>
          <div className="place-self-center gap-2 w-24 h-24">
            <LiquidGlass className="flex justify-center items-center p-4">
              <GrAppleAppStore color="white" size={"full"} />
            </LiquidGlass>
            <span className="flex justify-center items-center text-white text-center">
              App Store
            </span>
          </div>
          <div className="place-self-center gap-2 w-24 h-24">
            <LiquidGlass className="flex justify-center items-center p-4">
              <FaMapLocationDot color="white" size={"full"} />
            </LiquidGlass>
            <span className="flex justify-center items-center text-white text-center">
              Maps
            </span>
          </div>
          <div className="place-self-center gap-2 w-24 h-24">
            <LiquidGlass className="flex justify-center items-center p-4">
              <BsHeartPulse color="white" size={"full"} />
            </LiquidGlass>
            <span className="flex justify-center items-center text-white text-center">
              Health
            </span>
          </div>
          <div className="place-self-center gap-2 w-24 h-24">
            <LiquidGlass className="flex justify-center items-center p-4">
              <HiOutlineWallet color="white" size={"full"} />
            </LiquidGlass>
            <span className="flex justify-center items-center text-white text-center">
              Wallet
            </span>
          </div>
          <div className="place-self-center gap-2 w-24 h-24">
            <LiquidGlass className="flex justify-center items-center p-4">
              <CiSettings color="white" size={"full"} />
            </LiquidGlass>
            <span className="flex justify-center items-center text-white text-center">
              Settings
            </span>
          </div>
        </div>

        <div className="col-span-2 flex justify-center items-center text-white my-4">
          <LiquidGlass
            className="flex justify-center items-center px-4 py-2 gap-1"
            borderRadius={"32px"}
          >
            <CiSearch /> Search
          </LiquidGlass>
        </div>

        <div className="col-span-2 flex justify-center items-center text-white">
          <LiquidGlass
            className="flex justify-center items-center px-4 py-4 w-full gap-16"
            borderRadius={"52px"}
          >
            <LiquidGlass className="w-20 h-20 flex justify-center items-center p-4">
              <IoCall color="white" size={"full"} />
            </LiquidGlass>
            <LiquidGlass className="w-20 h-20 flex justify-center items-center p-4">
              <TiCompass color="white" size={"full"} />
            </LiquidGlass>
            <LiquidGlass className="w-20 h-20 flex justify-center items-center p-4">
              <BiMessageRounded color="white" size={"full"} />
            </LiquidGlass>
            <LiquidGlass className="w-20 h-20 flex justify-center items-center p-4">
              <BsMusicNoteBeamed color="white" size={"full"} />
            </LiquidGlass>
          </LiquidGlass>
        </div>
      </div>
    </div>
  );
}

export default App;
