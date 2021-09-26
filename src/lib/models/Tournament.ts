import {
  AllowNull,
  AutoIncrement,
  BelongsTo,
  Column,
  DataType,
  Default,
  ForeignKey,
  HasMany,
  Index,
  Model,
  PrimaryKey,
  Table,
} from "sequelize-typescript";
import { Mappool } from "./Mappool";
import { User } from "./User";

export enum Format {
  FIndividual,
  F1v1,
  F2v2,
  F3v3,
  F4v4,
  F5v5,
  F6v6,
  F7v7,
  F8v8,
}

// let formatItems: string[] = Object.keys(Format).filter((k) => isNaN(Number(k)));

@Table
export class Tournament extends Model {
  @PrimaryKey
  @AutoIncrement
  @Column(DataType.INTEGER)
  public declare id: number;

  @AllowNull(false)
  @Column(DataType.STRING)
  public name: string;

  @Index
  @AllowNull(false)
  @ForeignKey(() => User)
  @Column(DataType.INTEGER)
  public admin_id: number;

  @BelongsTo(() => User)
  public admin: User;

  @AllowNull(false)
  @Default(false)
  @Column(DataType.BOOLEAN)
  public published: boolean;

  @Index
  // @Column(DataType.ENUM({ values: formatItems }))
  @Column(DataType.STRING)
  public format: Format;

  @Index
  @Column(DataType.INTEGER)
  public mode_bitflags: number;

  @Index
  @Column(DataType.BOOLEAN)
  public registrations_open: boolean;

  @Column(DataType.INTEGER)
  public rank_low_cap: number;

  @Column(DataType.INTEGER)
  public rank_high_cap: number;

  @Column(DataType.JSON)
  public country_restriction: any;

  @Column(DataType.TEXT)
  public about: string;

  @Column(DataType.TEXT)
  public homepage: string;

  @Column(DataType.STRING)
  public banner_image: string;

  @HasMany(() => TournamentStage)
  public stages: TournamentStage[];
}

@Table
export class TournamentStage extends Model {
  @PrimaryKey
  @AutoIncrement
  @Column(DataType.INTEGER)
  public declare id: number;

  @AllowNull(false)
  @Column(DataType.STRING)
  public name: string;

  @AllowNull(false)
  @ForeignKey(() => Tournament)
  @Column(DataType.INTEGER)
  public tournament_id: number;

  @ForeignKey(() => Mappool)
  @Column(DataType.INTEGER)
  public mappool_id: number;

  @BelongsTo(() => Mappool)
  public mappool: Mappool;
}
