import { eventosData } from "../data/eventosData";
import type { HeroSlide } from "../interfaces/InicioTypes";

export const useInicio = () => {
  const eventos = eventosData;

  const heroSlides: HeroSlide[] = eventos.map((evento, index) => ({
    ...evento,
    active: index === 0,
  }));

  return {
    eventos,
    heroSlides,
  };
};
