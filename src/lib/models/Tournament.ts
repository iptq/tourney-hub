import { Column, DataType, Model, PrimaryKey, Table } from "sequelize-typescript";

@Table
export class Tournament extends Model {
  @PrimaryKey
  @Column(DataType.INTEGER)
  public id: number;

  @Column(DataType.STRING)
  public name: string;
}
