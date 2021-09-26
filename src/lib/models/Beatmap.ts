import {
  Column,
  DataType,
  Model,
  PrimaryKey,
  Table,
} from "sequelize-typescript";

@Table
export class Beatmap extends Model {
  @PrimaryKey
  @Column(DataType.INTEGER)
  public declare id: number;

  @Column(DataType.INTEGER)
  public set_id: number;

  @Column(DataType.STRING)
  public artist: string;

  @Column(DataType.STRING)
  public title: string;

  @Column(DataType.INTEGER)
  public mapper_id: number;

  @Column(DataType.STRING)
  public difficulty_name: string;
}
