import {
  Table,
  Column,
  Model,
  UpdatedAt,
  CreatedAt,
  PrimaryKey,
  IsUUID,
  DataType,
  Default,
  Unique,
  AllowNull,
} from 'sequelize-typescript';

@Table
class Client extends Model {
  @IsUUID(4)
  @PrimaryKey
  @Default(DataType.UUIDV4)
  @Column
  id: string;

  @AllowNull(false)
  @Unique
  @Column
  cpf: string;

  @AllowNull(false)
  @Unique
  @Column
  email: string;

  @AllowNull(false)
  @Column
  postal_code: string;

  @Column
  city: string;

  @Column
  neighborhood: string;

  @AllowNull(false)
  @Column
  street: string;

  @Column
  street_number: string;

  @Column
  complement: string;

  @CreatedAt
  public readonly createdAt: Date;

  @UpdatedAt
  public readonly updatedAt: Date;
}

export default Client;
