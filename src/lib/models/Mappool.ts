import {
  Column,
  DataType,
  ForeignKey,
  Model,
  PrimaryKey,
  Table,
} from "sequelize-typescript";
import { Beatmap } from "./Beatmap";

@Table
export class Mappool extends Model {
  @PrimaryKey
  @Column(DataType.INTEGER)
  public id: number;
}

@Table
export class MappoolContents extends Model {
  @ForeignKey(() => Mappool)
  @Column(DataType.INTEGER)
  public mappool_id: number;

  @ForeignKey(() => Beatmap)
  @Column(DataType.INTEGER)
  public beatmap_id: number;

  @Column(DataType.STRING)
  public category: string;

  @Column(DataType.INTEGER)
  public index: number;
}
