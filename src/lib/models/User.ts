import {
  Column,
  DataType,
  Model,
  PrimaryKey,
  Table,
} from "sequelize-typescript";

@Table
export class User extends Model {
  @PrimaryKey
  @Column(DataType.INTEGER)
  public osu_id: number;

  @Column(DataType.STRING)
  public username: string;

  @Column(DataType.STRING)
  public country_code: string;

  @Column(DataType.STRING)
  public about: string;

  @Column(DataType.FLOAT)
  public skill: number;

  @Column(DataType.INTEGER)
  public rank: number;

  @Column(DataType.FLOAT)
  public pp: number;

  @Column(DataType.STRING)
  public access_token: string;

  @Column(DataType.STRING)
  public refresh_token: string;
}
