import {Entity, model, property} from '@loopback/repository';

@model()
export class Visita extends Entity {
  @property({
    type: 'string',
    id: true,
    generated: true,
  })
  id?: string;

  @property({
    type: 'string',
    required: true,
  })
  fechaEntrada: string;

  @property({
    type: 'string',
    required: true,
  })
  fechaSalida: string;

  @property({
    type: 'string',
    required: true,
  })
  vistanteId: string;

  @property({
    type: 'any',
    required: true,
  })
  casaId: any;

  @property({
    type: 'string',
    required: true,
  })
  codigoQR: string;

  @property({
    type: 'boolean',
  })
  estado?: boolean;


  constructor(data?: Partial<Visita>) {
    super(data);
  }
}

export interface VisitaRelations {
  // describe navigational properties here
}

export type VisitaWithRelations = Visita & VisitaRelations;
