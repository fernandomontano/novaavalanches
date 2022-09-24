import React from "react";

export default function Footer() {
  return (
    <div className="bg-indigo-200/40 rounded p-8">
      <div className="flex justify-between mb-5">
        <div className="text-md">
          <div className="text-xl font-bold">Sobre nosotros</div>
          <div>NovaTeam es un equipo integrado por 5 estudiantes</div>
          <div>y un docente con el objetivo principal de apoyar</div>
          <div>a la población en peligro de sufrir aludes de barro.</div>
        </div>
        <div>
          <div className="text-xl font-bold">Paises donde nos ubicamos</div>
          <div className="text-md">El Salvador</div>
          <div className="text-md">Nicaragua</div>
        </div>
        <div>
          <div className="text-xl font-bold">Contacto</div>
          <div className="bg-purple-800/40 rounded p-2 mt-4 ">
            <a
              type="button"
              className="font-bold"
              href="https://github.com/fernandomontano"
              target="_blank"
              rel="noreferrer"
            >
              Contáctanos
            </a>
          </div>
        </div>
      </div>
      <div className="text-center font-bold">
        Todos los derechos reservados © 2022 - 2022 NovaTeam
      </div>
    </div>
  );
}
