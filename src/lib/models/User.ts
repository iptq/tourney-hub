import { DataType, PrimaryKey, Column, Model, Table } from "sequelize-typescript";

@Table
export class User extends Model {
  @PrimaryKey
  @Column(DataType.INTEGER)
  public id: number;

  @Column(DataType.INTEGER)
  public osu_id: number;
}
