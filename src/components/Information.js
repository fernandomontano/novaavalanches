import React from "react";
import "./Information.css";
import "./Font.css";
import {
  ExclamationCircleIcon,
  ShieldExclamationIcon,
  DevicePhoneMobileIcon,
  LightBulbIcon,
  PencilIcon,
} from "@heroicons/react/24/solid";
import { Link } from "react-router-dom";
import Footer from "./Footer";

export default function Information() {
  return (
    <div>
      <div className="flex justify-around my-14 bg-slate-400/20 px-8 no-padding rounded big-wrapper no-padding">
        <div className="pb-12 px-8 no-padding">
          <div className="text-6xl font-bold leading-normal pt-8 pb-4 ">
            <div>¿Quieres mantenerte </div>
            <div>
              seguro en{" "}
              <span className="font-extrabold text-transparent text-6xl bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">
                TODO
              </span>
            </div>
            <div>momento?</div>
          </div>
          <div className="text-justify big-wrapper text-md">
            ¡Nova Avalanches es tu mejor opción! La mejor aplicación, la cual se
            prevee colocar en zonas donde se ven mayormente afectados por aludes
            de barro y deslizamientos de tierra, esto con el objetivo de brindar
            a la población un posible apoyo para evitar muertes o pérdidas
            materiales significativas.
          </div>
          <div className="flex mt-6 items-center text-xl buttons">
            <div className="bg-purple-800/30 rounded p-4 hover:bg-purple-200 hover:scale-110 transition ease-in-out delay-150">
              <Link to="/signup" className="font-bold">
                Registra tus datos
              </Link>
            </div>
            <div className="flex items-center font-bold cursor-pointer">
              <ExclamationCircleIcon className="h-6 w-6 text-slate-800 ml-12" />
              <div className="ml-2">Sobre nosotros</div>
            </div>
          </div>
        </div>
        <img
          src="https://source.unsplash.com/HX9hgul7GkU"
          alt="mud"
          className="rounded h-80 ml-10 mt-40 img1 dissapear"
        />
        <img
          src="https://source.unsplash.com/gbV0o0I7Hzk"
          alt="mud"
          className="rounded h-80 ml-12 mt-12 mr-5 z"
        />
      </div>
      <div>
        <div className="my-8 mb-16 text-5xl text-center font-bold">
          TE OFRECEMOS
        </div>
      </div>
      <div className="flex justify-around items-center flex-wrap">
        <div className="flex flex-col justify-center items-center">
          <ShieldExclamationIcon className="h-12 w-12 text-black mb-2" />
          <div className="font-bold text-xl mt-2">Protección</div>
          <div className="">Te proteje de cualquier</div>
          <div>cambio en el medio.</div>
        </div>
        <div className="flex flex-col justify-center items-center">
          <DevicePhoneMobileIcon className="h-12 w-12 text-black mb-2" />
          <div className="font-bold text-xl mt-2">Comodidad</div>
          <div className="mb-2">Al alcance de cualquiera.</div>
        </div>
        <div className="flex flex-col justify-center items-center">
          <LightBulbIcon className="h-12 w-12 text-black mb-2" />
          <div className="font-bold text-xl mt-2">Innovación</div>
          <div className="mb-2">Innovando con tecnología.</div>
        </div>
        <div className="flex flex-col justify-center items-center">
          <PencilIcon className="h-12 w-12 text-black mb-2" />
          <div className="font-bold text-xl mt-2">Facilidad</div>
          <div>¿No tienes SmartPhone?</div>
          <div>¡Te enviamos un sms!</div>
        </div>
      </div>
      <div className="flex items-center justify-center relative my-12">
        <img
          src="https://source.unsplash.com/_nm_mZ4Cs2I"
          alt="mud"
          className="rounded mr-5 w-2/3 h-80 shown"
        />
        <div className="absolute top-1/2 left-1/2 text-white font-bold text-xl translate text-size">
          <span className="text-6xl text-size">
            "Siempre intentando llegar más allá de los límites..."
          </span>
          - Andrea Turcios
        </div>
      </div>
      <Footer />
    </div>
  );
}
