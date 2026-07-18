import { useEffect, useState } from "react";
import type { Tab } from "../interfaces/InformacionTypes";

const tabs: Tab[] = [
  {
    titulo: "Somos Ticket +",
    contenido:
      " Una empresa apasionada por conectar personas con eventos, artistas y experiencias memorables. Cada día trabajamos paraque disfrutes tus momentos de forma fácil y segura.",
  },
  {
    titulo: "Valores",
    contenido:
      "La confianza, innovación y cercanía son la base de todo lo que hacemos.",
  },
  {
    titulo: "Plataformas",
    contenido: "Ofrecemos ticketing, streaming y marketplace para eventos.",
  },
  {
    titulo: "Impacto",
    contenido:
      "Ayudamos a artistas y organizadores a crecer junto a sus fans.",
  },
];

export const useInformacion = () => {
  const [tabActiva, setTabActiva] = useState(0);

  useEffect(() => {
    const intervalo = setInterval(() => {
      setTabActiva((prev) => (prev === tabs.length - 1 ? 0 : prev + 1));
    }, 3000);

    return () => clearInterval(intervalo);
  }, []);

  return {
    tabs,
    tabActiva,
    setTabActiva,
  };
};
