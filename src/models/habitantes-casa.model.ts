import {Entity, model, property} from '@loopback/repository';

@model()
export class HabitantesCasa extends Entity {
  @property({
    type: 'any',
    id: true,
    generated: true,
  })
  id?: any;

  @property({
    type: 'string',
    required: true,
  })
  casaId: string;

  @property({
    type: 'string',
    required: true,
  })
  residenteId: string;

  @property({
    type: 'string',
    required: true,
  })
  parentesco: string;


  constructor(data?: Partial<HabitantesCasa>) {
    super(data);
  }
}

export interface HabitantesCasaRelations {
  // describe navigational properties here
}

export type HabitantesCasaWithRelations = HabitantesCasa & HabitantesCasaRelations;
