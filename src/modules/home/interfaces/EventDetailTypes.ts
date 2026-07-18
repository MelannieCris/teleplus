import type { EventoInicio } from "./InicioTypes";

export interface EventoDetalle extends EventoInicio {
  zona: string;
  tipo: string;
}
