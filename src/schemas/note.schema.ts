import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";

@Schema()
export class Note {
  @Prop()
  uid: string;

  @Prop()
  id: string;

  @Prop()
  title: string;

  @Prop()
  description: string;

  @Prop()
  createdAt: number;
}

export type NoteDocument = Document & Note;

export const NoteSchema = SchemaFactory.createForClass(Note);
