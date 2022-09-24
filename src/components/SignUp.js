import React from "react";
import Footer from "./Footer";

export default function SignUp() {
  return (
    <div>
      <div className="flex justify-center items-center my-[3.75rem]">
        <div>
          <div className="font-extrabold text-transparent text-3xl bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">
            Datos
          </div>
          <div>Bienvenido al sistema de NovaAvalanches.</div>
          <div>Ingrese sus datos para disfrutar de las ventajas</div>
          <div>de mantenerse en un ambiente de paz </div>
          <div>sabiendo que tendrá la seguridad de saber si </div>
          <div>ocurrirá algún desastre cercano a su zona.</div>
        </div>
        <div className="bg-slate-300/20 rounded ml-3">
          <div className="pb-12 px-8 py-8">
            <form>
              <label for="Correo" className="block font-bold">
                Correo
              </label>
              <input
                type="text"
                id="Correo"
                name="Correo electronico"
                placeholder="Introduce acá tu correo"
                className="p-2 rounded my-3 mb-4"
              />
              <label for="Telefono" className="block font-bold">
                Teléfono
              </label>
              <input
                type="text"
                id="Telefono"
                name="Telefono"
                placeholder="Introduce acá tu número"
                className="p-2 rounded mt-2 block"
              />
              <button type="submit" class="font-bold text-center w-full">
                <div className="bg-cyan-800/30 rounded p-4 hover:bg-purple-200 hover:scale-110 transition ease-in-out delay-150 mt-4 cursor-pointer">
                  Ingresar
                </div>
              </button>
            </form>
          </div>
        </div>
      </div>
      <div className="">
        <Footer />
      </div>
    </div>
  );
}
