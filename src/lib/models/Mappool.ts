import {
  AutoIncrement,
  Column,
  DataType,
  ForeignKey,
  Model,
  PrimaryKey,
  Table,
} from "sequelize-typescript";
import { Beatmap } from "./.";

@Table
export class Mappool extends Model {
  @PrimaryKey
  @AutoIncrement
  @Column(DataType.INTEGER)
  public declare id: number;

  @Column(DataType.STRING)
  public image_url: string;
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
