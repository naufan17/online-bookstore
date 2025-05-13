
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model authors
 * 
 */
export type authors = $Result.DefaultSelection<Prisma.$authorsPayload>
/**
 * Model customers
 * 
 */
export type customers = $Result.DefaultSelection<Prisma.$customersPayload>
/**
 * Model books
 * 
 */
export type books = $Result.DefaultSelection<Prisma.$booksPayload>
/**
 * Model warehouses
 * 
 */
export type warehouses = $Result.DefaultSelection<Prisma.$warehousesPayload>
/**
 * Model carts
 * 
 */
export type carts = $Result.DefaultSelection<Prisma.$cartsPayload>
/**
 * Model books_products
 * 
 */
export type books_products = $Result.DefaultSelection<Prisma.$books_productsPayload>
/**
 * Model invoices
 * 
 */
export type invoices = $Result.DefaultSelection<Prisma.$invoicesPayload>
/**
 * Model invoice_items
 * 
 */
export type invoice_items = $Result.DefaultSelection<Prisma.$invoice_itemsPayload>
/**
 * Model cart_items
 * 
 */
export type cart_items = $Result.DefaultSelection<Prisma.$cart_itemsPayload>

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Authors
 * const authors = await prisma.authors.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Authors
   * const authors = await prisma.authors.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

  /**
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.authors`: Exposes CRUD operations for the **authors** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Authors
    * const authors = await prisma.authors.findMany()
    * ```
    */
  get authors(): Prisma.authorsDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.customers`: Exposes CRUD operations for the **customers** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Customers
    * const customers = await prisma.customers.findMany()
    * ```
    */
  get customers(): Prisma.customersDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.books`: Exposes CRUD operations for the **books** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Books
    * const books = await prisma.books.findMany()
    * ```
    */
  get books(): Prisma.booksDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.warehouses`: Exposes CRUD operations for the **warehouses** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Warehouses
    * const warehouses = await prisma.warehouses.findMany()
    * ```
    */
  get warehouses(): Prisma.warehousesDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.carts`: Exposes CRUD operations for the **carts** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Carts
    * const carts = await prisma.carts.findMany()
    * ```
    */
  get carts(): Prisma.cartsDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.books_products`: Exposes CRUD operations for the **books_products** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Books_products
    * const books_products = await prisma.books_products.findMany()
    * ```
    */
  get books_products(): Prisma.books_productsDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.invoices`: Exposes CRUD operations for the **invoices** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Invoices
    * const invoices = await prisma.invoices.findMany()
    * ```
    */
  get invoices(): Prisma.invoicesDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.invoice_items`: Exposes CRUD operations for the **invoice_items** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Invoice_items
    * const invoice_items = await prisma.invoice_items.findMany()
    * ```
    */
  get invoice_items(): Prisma.invoice_itemsDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.cart_items`: Exposes CRUD operations for the **cart_items** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Cart_items
    * const cart_items = await prisma.cart_items.findMany()
    * ```
    */
  get cart_items(): Prisma.cart_itemsDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 6.7.0
   * Query Engine version: 3cff47a7f5d65c3ea74883f1d736e41d68ce91ed
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    authors: 'authors',
    customers: 'customers',
    books: 'books',
    warehouses: 'warehouses',
    carts: 'carts',
    books_products: 'books_products',
    invoices: 'invoices',
    invoice_items: 'invoice_items',
    cart_items: 'cart_items'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "authors" | "customers" | "books" | "warehouses" | "carts" | "books_products" | "invoices" | "invoice_items" | "cart_items"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      authors: {
        payload: Prisma.$authorsPayload<ExtArgs>
        fields: Prisma.authorsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.authorsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$authorsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.authorsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$authorsPayload>
          }
          findFirst: {
            args: Prisma.authorsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$authorsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.authorsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$authorsPayload>
          }
          findMany: {
            args: Prisma.authorsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$authorsPayload>[]
          }
          create: {
            args: Prisma.authorsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$authorsPayload>
          }
          createMany: {
            args: Prisma.authorsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.authorsCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$authorsPayload>[]
          }
          delete: {
            args: Prisma.authorsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$authorsPayload>
          }
          update: {
            args: Prisma.authorsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$authorsPayload>
          }
          deleteMany: {
            args: Prisma.authorsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.authorsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.authorsUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$authorsPayload>[]
          }
          upsert: {
            args: Prisma.authorsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$authorsPayload>
          }
          aggregate: {
            args: Prisma.AuthorsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAuthors>
          }
          groupBy: {
            args: Prisma.authorsGroupByArgs<ExtArgs>
            result: $Utils.Optional<AuthorsGroupByOutputType>[]
          }
          count: {
            args: Prisma.authorsCountArgs<ExtArgs>
            result: $Utils.Optional<AuthorsCountAggregateOutputType> | number
          }
        }
      }
      customers: {
        payload: Prisma.$customersPayload<ExtArgs>
        fields: Prisma.customersFieldRefs
        operations: {
          findUnique: {
            args: Prisma.customersFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$customersPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.customersFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$customersPayload>
          }
          findFirst: {
            args: Prisma.customersFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$customersPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.customersFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$customersPayload>
          }
          findMany: {
            args: Prisma.customersFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$customersPayload>[]
          }
          create: {
            args: Prisma.customersCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$customersPayload>
          }
          createMany: {
            args: Prisma.customersCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.customersCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$customersPayload>[]
          }
          delete: {
            args: Prisma.customersDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$customersPayload>
          }
          update: {
            args: Prisma.customersUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$customersPayload>
          }
          deleteMany: {
            args: Prisma.customersDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.customersUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.customersUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$customersPayload>[]
          }
          upsert: {
            args: Prisma.customersUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$customersPayload>
          }
          aggregate: {
            args: Prisma.CustomersAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCustomers>
          }
          groupBy: {
            args: Prisma.customersGroupByArgs<ExtArgs>
            result: $Utils.Optional<CustomersGroupByOutputType>[]
          }
          count: {
            args: Prisma.customersCountArgs<ExtArgs>
            result: $Utils.Optional<CustomersCountAggregateOutputType> | number
          }
        }
      }
      books: {
        payload: Prisma.$booksPayload<ExtArgs>
        fields: Prisma.booksFieldRefs
        operations: {
          findUnique: {
            args: Prisma.booksFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$booksPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.booksFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$booksPayload>
          }
          findFirst: {
            args: Prisma.booksFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$booksPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.booksFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$booksPayload>
          }
          findMany: {
            args: Prisma.booksFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$booksPayload>[]
          }
          create: {
            args: Prisma.booksCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$booksPayload>
          }
          createMany: {
            args: Prisma.booksCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.booksCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$booksPayload>[]
          }
          delete: {
            args: Prisma.booksDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$booksPayload>
          }
          update: {
            args: Prisma.booksUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$booksPayload>
          }
          deleteMany: {
            args: Prisma.booksDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.booksUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.booksUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$booksPayload>[]
          }
          upsert: {
            args: Prisma.booksUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$booksPayload>
          }
          aggregate: {
            args: Prisma.BooksAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateBooks>
          }
          groupBy: {
            args: Prisma.booksGroupByArgs<ExtArgs>
            result: $Utils.Optional<BooksGroupByOutputType>[]
          }
          count: {
            args: Prisma.booksCountArgs<ExtArgs>
            result: $Utils.Optional<BooksCountAggregateOutputType> | number
          }
        }
      }
      warehouses: {
        payload: Prisma.$warehousesPayload<ExtArgs>
        fields: Prisma.warehousesFieldRefs
        operations: {
          findUnique: {
            args: Prisma.warehousesFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$warehousesPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.warehousesFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$warehousesPayload>
          }
          findFirst: {
            args: Prisma.warehousesFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$warehousesPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.warehousesFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$warehousesPayload>
          }
          findMany: {
            args: Prisma.warehousesFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$warehousesPayload>[]
          }
          create: {
            args: Prisma.warehousesCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$warehousesPayload>
          }
          createMany: {
            args: Prisma.warehousesCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.warehousesCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$warehousesPayload>[]
          }
          delete: {
            args: Prisma.warehousesDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$warehousesPayload>
          }
          update: {
            args: Prisma.warehousesUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$warehousesPayload>
          }
          deleteMany: {
            args: Prisma.warehousesDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.warehousesUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.warehousesUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$warehousesPayload>[]
          }
          upsert: {
            args: Prisma.warehousesUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$warehousesPayload>
          }
          aggregate: {
            args: Prisma.WarehousesAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateWarehouses>
          }
          groupBy: {
            args: Prisma.warehousesGroupByArgs<ExtArgs>
            result: $Utils.Optional<WarehousesGroupByOutputType>[]
          }
          count: {
            args: Prisma.warehousesCountArgs<ExtArgs>
            result: $Utils.Optional<WarehousesCountAggregateOutputType> | number
          }
        }
      }
      carts: {
        payload: Prisma.$cartsPayload<ExtArgs>
        fields: Prisma.cartsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.cartsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$cartsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.cartsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$cartsPayload>
          }
          findFirst: {
            args: Prisma.cartsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$cartsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.cartsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$cartsPayload>
          }
          findMany: {
            args: Prisma.cartsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$cartsPayload>[]
          }
          create: {
            args: Prisma.cartsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$cartsPayload>
          }
          createMany: {
            args: Prisma.cartsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.cartsCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$cartsPayload>[]
          }
          delete: {
            args: Prisma.cartsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$cartsPayload>
          }
          update: {
            args: Prisma.cartsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$cartsPayload>
          }
          deleteMany: {
            args: Prisma.cartsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.cartsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.cartsUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$cartsPayload>[]
          }
          upsert: {
            args: Prisma.cartsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$cartsPayload>
          }
          aggregate: {
            args: Prisma.CartsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCarts>
          }
          groupBy: {
            args: Prisma.cartsGroupByArgs<ExtArgs>
            result: $Utils.Optional<CartsGroupByOutputType>[]
          }
          count: {
            args: Prisma.cartsCountArgs<ExtArgs>
            result: $Utils.Optional<CartsCountAggregateOutputType> | number
          }
        }
      }
      books_products: {
        payload: Prisma.$books_productsPayload<ExtArgs>
        fields: Prisma.books_productsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.books_productsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$books_productsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.books_productsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$books_productsPayload>
          }
          findFirst: {
            args: Prisma.books_productsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$books_productsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.books_productsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$books_productsPayload>
          }
          findMany: {
            args: Prisma.books_productsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$books_productsPayload>[]
          }
          create: {
            args: Prisma.books_productsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$books_productsPayload>
          }
          createMany: {
            args: Prisma.books_productsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.books_productsCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$books_productsPayload>[]
          }
          delete: {
            args: Prisma.books_productsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$books_productsPayload>
          }
          update: {
            args: Prisma.books_productsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$books_productsPayload>
          }
          deleteMany: {
            args: Prisma.books_productsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.books_productsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.books_productsUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$books_productsPayload>[]
          }
          upsert: {
            args: Prisma.books_productsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$books_productsPayload>
          }
          aggregate: {
            args: Prisma.Books_productsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateBooks_products>
          }
          groupBy: {
            args: Prisma.books_productsGroupByArgs<ExtArgs>
            result: $Utils.Optional<Books_productsGroupByOutputType>[]
          }
          count: {
            args: Prisma.books_productsCountArgs<ExtArgs>
            result: $Utils.Optional<Books_productsCountAggregateOutputType> | number
          }
        }
      }
      invoices: {
        payload: Prisma.$invoicesPayload<ExtArgs>
        fields: Prisma.invoicesFieldRefs
        operations: {
          findUnique: {
            args: Prisma.invoicesFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$invoicesPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.invoicesFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$invoicesPayload>
          }
          findFirst: {
            args: Prisma.invoicesFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$invoicesPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.invoicesFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$invoicesPayload>
          }
          findMany: {
            args: Prisma.invoicesFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$invoicesPayload>[]
          }
          create: {
            args: Prisma.invoicesCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$invoicesPayload>
          }
          createMany: {
            args: Prisma.invoicesCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.invoicesCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$invoicesPayload>[]
          }
          delete: {
            args: Prisma.invoicesDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$invoicesPayload>
          }
          update: {
            args: Prisma.invoicesUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$invoicesPayload>
          }
          deleteMany: {
            args: Prisma.invoicesDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.invoicesUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.invoicesUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$invoicesPayload>[]
          }
          upsert: {
            args: Prisma.invoicesUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$invoicesPayload>
          }
          aggregate: {
            args: Prisma.InvoicesAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateInvoices>
          }
          groupBy: {
            args: Prisma.invoicesGroupByArgs<ExtArgs>
            result: $Utils.Optional<InvoicesGroupByOutputType>[]
          }
          count: {
            args: Prisma.invoicesCountArgs<ExtArgs>
            result: $Utils.Optional<InvoicesCountAggregateOutputType> | number
          }
        }
      }
      invoice_items: {
        payload: Prisma.$invoice_itemsPayload<ExtArgs>
        fields: Prisma.invoice_itemsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.invoice_itemsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$invoice_itemsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.invoice_itemsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$invoice_itemsPayload>
          }
          findFirst: {
            args: Prisma.invoice_itemsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$invoice_itemsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.invoice_itemsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$invoice_itemsPayload>
          }
          findMany: {
            args: Prisma.invoice_itemsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$invoice_itemsPayload>[]
          }
          create: {
            args: Prisma.invoice_itemsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$invoice_itemsPayload>
          }
          createMany: {
            args: Prisma.invoice_itemsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.invoice_itemsCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$invoice_itemsPayload>[]
          }
          delete: {
            args: Prisma.invoice_itemsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$invoice_itemsPayload>
          }
          update: {
            args: Prisma.invoice_itemsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$invoice_itemsPayload>
          }
          deleteMany: {
            args: Prisma.invoice_itemsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.invoice_itemsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.invoice_itemsUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$invoice_itemsPayload>[]
          }
          upsert: {
            args: Prisma.invoice_itemsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$invoice_itemsPayload>
          }
          aggregate: {
            args: Prisma.Invoice_itemsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateInvoice_items>
          }
          groupBy: {
            args: Prisma.invoice_itemsGroupByArgs<ExtArgs>
            result: $Utils.Optional<Invoice_itemsGroupByOutputType>[]
          }
          count: {
            args: Prisma.invoice_itemsCountArgs<ExtArgs>
            result: $Utils.Optional<Invoice_itemsCountAggregateOutputType> | number
          }
        }
      }
      cart_items: {
        payload: Prisma.$cart_itemsPayload<ExtArgs>
        fields: Prisma.cart_itemsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.cart_itemsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$cart_itemsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.cart_itemsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$cart_itemsPayload>
          }
          findFirst: {
            args: Prisma.cart_itemsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$cart_itemsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.cart_itemsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$cart_itemsPayload>
          }
          findMany: {
            args: Prisma.cart_itemsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$cart_itemsPayload>[]
          }
          create: {
            args: Prisma.cart_itemsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$cart_itemsPayload>
          }
          createMany: {
            args: Prisma.cart_itemsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.cart_itemsCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$cart_itemsPayload>[]
          }
          delete: {
            args: Prisma.cart_itemsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$cart_itemsPayload>
          }
          update: {
            args: Prisma.cart_itemsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$cart_itemsPayload>
          }
          deleteMany: {
            args: Prisma.cart_itemsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.cart_itemsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.cart_itemsUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$cart_itemsPayload>[]
          }
          upsert: {
            args: Prisma.cart_itemsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$cart_itemsPayload>
          }
          aggregate: {
            args: Prisma.Cart_itemsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCart_items>
          }
          groupBy: {
            args: Prisma.cart_itemsGroupByArgs<ExtArgs>
            result: $Utils.Optional<Cart_itemsGroupByOutputType>[]
          }
          count: {
            args: Prisma.cart_itemsCountArgs<ExtArgs>
            result: $Utils.Optional<Cart_itemsCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
  }
  export type GlobalOmitConfig = {
    authors?: authorsOmit
    customers?: customersOmit
    books?: booksOmit
    warehouses?: warehousesOmit
    carts?: cartsOmit
    books_products?: books_productsOmit
    invoices?: invoicesOmit
    invoice_items?: invoice_itemsOmit
    cart_items?: cart_itemsOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type AuthorsCountOutputType
   */

  export type AuthorsCountOutputType = {
    books: number
  }

  export type AuthorsCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    books?: boolean | AuthorsCountOutputTypeCountBooksArgs
  }

  // Custom InputTypes
  /**
   * AuthorsCountOutputType without action
   */
  export type AuthorsCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AuthorsCountOutputType
     */
    select?: AuthorsCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * AuthorsCountOutputType without action
   */
  export type AuthorsCountOutputTypeCountBooksArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: booksWhereInput
  }


  /**
   * Count Type CustomersCountOutputType
   */

  export type CustomersCountOutputType = {
    carts: number
    invoices: number
  }

  export type CustomersCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    carts?: boolean | CustomersCountOutputTypeCountCartsArgs
    invoices?: boolean | CustomersCountOutputTypeCountInvoicesArgs
  }

  // Custom InputTypes
  /**
   * CustomersCountOutputType without action
   */
  export type CustomersCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CustomersCountOutputType
     */
    select?: CustomersCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * CustomersCountOutputType without action
   */
  export type CustomersCountOutputTypeCountCartsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: cartsWhereInput
  }

  /**
   * CustomersCountOutputType without action
   */
  export type CustomersCountOutputTypeCountInvoicesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: invoicesWhereInput
  }


  /**
   * Count Type BooksCountOutputType
   */

  export type BooksCountOutputType = {
    books_products: number
  }

  export type BooksCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    books_products?: boolean | BooksCountOutputTypeCountBooks_productsArgs
  }

  // Custom InputTypes
  /**
   * BooksCountOutputType without action
   */
  export type BooksCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BooksCountOutputType
     */
    select?: BooksCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * BooksCountOutputType without action
   */
  export type BooksCountOutputTypeCountBooks_productsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: books_productsWhereInput
  }


  /**
   * Count Type WarehousesCountOutputType
   */

  export type WarehousesCountOutputType = {
    books_products: number
  }

  export type WarehousesCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    books_products?: boolean | WarehousesCountOutputTypeCountBooks_productsArgs
  }

  // Custom InputTypes
  /**
   * WarehousesCountOutputType without action
   */
  export type WarehousesCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WarehousesCountOutputType
     */
    select?: WarehousesCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * WarehousesCountOutputType without action
   */
  export type WarehousesCountOutputTypeCountBooks_productsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: books_productsWhereInput
  }


  /**
   * Count Type CartsCountOutputType
   */

  export type CartsCountOutputType = {
    cart_items: number
    invoices: number
  }

  export type CartsCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    cart_items?: boolean | CartsCountOutputTypeCountCart_itemsArgs
    invoices?: boolean | CartsCountOutputTypeCountInvoicesArgs
  }

  // Custom InputTypes
  /**
   * CartsCountOutputType without action
   */
  export type CartsCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CartsCountOutputType
     */
    select?: CartsCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * CartsCountOutputType without action
   */
  export type CartsCountOutputTypeCountCart_itemsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: cart_itemsWhereInput
  }

  /**
   * CartsCountOutputType without action
   */
  export type CartsCountOutputTypeCountInvoicesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: invoicesWhereInput
  }


  /**
   * Count Type Books_productsCountOutputType
   */

  export type Books_productsCountOutputType = {
    invoice_items: number
    cart_items: number
  }

  export type Books_productsCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    invoice_items?: boolean | Books_productsCountOutputTypeCountInvoice_itemsArgs
    cart_items?: boolean | Books_productsCountOutputTypeCountCart_itemsArgs
  }

  // Custom InputTypes
  /**
   * Books_productsCountOutputType without action
   */
  export type Books_productsCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Books_productsCountOutputType
     */
    select?: Books_productsCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * Books_productsCountOutputType without action
   */
  export type Books_productsCountOutputTypeCountInvoice_itemsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: invoice_itemsWhereInput
  }

  /**
   * Books_productsCountOutputType without action
   */
  export type Books_productsCountOutputTypeCountCart_itemsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: cart_itemsWhereInput
  }


  /**
   * Count Type InvoicesCountOutputType
   */

  export type InvoicesCountOutputType = {
    invoice_items: number
  }

  export type InvoicesCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    invoice_items?: boolean | InvoicesCountOutputTypeCountInvoice_itemsArgs
  }

  // Custom InputTypes
  /**
   * InvoicesCountOutputType without action
   */
  export type InvoicesCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InvoicesCountOutputType
     */
    select?: InvoicesCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * InvoicesCountOutputType without action
   */
  export type InvoicesCountOutputTypeCountInvoice_itemsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: invoice_itemsWhereInput
  }


  /**
   * Models
   */

  /**
   * Model authors
   */

  export type AggregateAuthors = {
    _count: AuthorsCountAggregateOutputType | null
    _min: AuthorsMinAggregateOutputType | null
    _max: AuthorsMaxAggregateOutputType | null
  }

  export type AuthorsMinAggregateOutputType = {
    id: string | null
    name: string | null
    bio: string | null
    birthdate: Date | null
  }

  export type AuthorsMaxAggregateOutputType = {
    id: string | null
    name: string | null
    bio: string | null
    birthdate: Date | null
  }

  export type AuthorsCountAggregateOutputType = {
    id: number
    name: number
    bio: number
    birthdate: number
    _all: number
  }


  export type AuthorsMinAggregateInputType = {
    id?: true
    name?: true
    bio?: true
    birthdate?: true
  }

  export type AuthorsMaxAggregateInputType = {
    id?: true
    name?: true
    bio?: true
    birthdate?: true
  }

  export type AuthorsCountAggregateInputType = {
    id?: true
    name?: true
    bio?: true
    birthdate?: true
    _all?: true
  }

  export type AuthorsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which authors to aggregate.
     */
    where?: authorsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of authors to fetch.
     */
    orderBy?: authorsOrderByWithRelationInput | authorsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: authorsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` authors from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` authors.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned authors
    **/
    _count?: true | AuthorsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AuthorsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AuthorsMaxAggregateInputType
  }

  export type GetAuthorsAggregateType<T extends AuthorsAggregateArgs> = {
        [P in keyof T & keyof AggregateAuthors]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAuthors[P]>
      : GetScalarType<T[P], AggregateAuthors[P]>
  }




  export type authorsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: authorsWhereInput
    orderBy?: authorsOrderByWithAggregationInput | authorsOrderByWithAggregationInput[]
    by: AuthorsScalarFieldEnum[] | AuthorsScalarFieldEnum
    having?: authorsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AuthorsCountAggregateInputType | true
    _min?: AuthorsMinAggregateInputType
    _max?: AuthorsMaxAggregateInputType
  }

  export type AuthorsGroupByOutputType = {
    id: string
    name: string
    bio: string
    birthdate: Date
    _count: AuthorsCountAggregateOutputType | null
    _min: AuthorsMinAggregateOutputType | null
    _max: AuthorsMaxAggregateOutputType | null
  }

  type GetAuthorsGroupByPayload<T extends authorsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AuthorsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AuthorsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AuthorsGroupByOutputType[P]>
            : GetScalarType<T[P], AuthorsGroupByOutputType[P]>
        }
      >
    >


  export type authorsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    bio?: boolean
    birthdate?: boolean
    books?: boolean | authors$booksArgs<ExtArgs>
    _count?: boolean | AuthorsCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["authors"]>

  export type authorsSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    bio?: boolean
    birthdate?: boolean
  }, ExtArgs["result"]["authors"]>

  export type authorsSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    bio?: boolean
    birthdate?: boolean
  }, ExtArgs["result"]["authors"]>

  export type authorsSelectScalar = {
    id?: boolean
    name?: boolean
    bio?: boolean
    birthdate?: boolean
  }

  export type authorsOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "bio" | "birthdate", ExtArgs["result"]["authors"]>
  export type authorsInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    books?: boolean | authors$booksArgs<ExtArgs>
    _count?: boolean | AuthorsCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type authorsIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type authorsIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $authorsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "authors"
    objects: {
      books: Prisma.$booksPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      bio: string
      birthdate: Date
    }, ExtArgs["result"]["authors"]>
    composites: {}
  }

  type authorsGetPayload<S extends boolean | null | undefined | authorsDefaultArgs> = $Result.GetResult<Prisma.$authorsPayload, S>

  type authorsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<authorsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: AuthorsCountAggregateInputType | true
    }

  export interface authorsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['authors'], meta: { name: 'authors' } }
    /**
     * Find zero or one Authors that matches the filter.
     * @param {authorsFindUniqueArgs} args - Arguments to find a Authors
     * @example
     * // Get one Authors
     * const authors = await prisma.authors.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends authorsFindUniqueArgs>(args: SelectSubset<T, authorsFindUniqueArgs<ExtArgs>>): Prisma__authorsClient<$Result.GetResult<Prisma.$authorsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Authors that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {authorsFindUniqueOrThrowArgs} args - Arguments to find a Authors
     * @example
     * // Get one Authors
     * const authors = await prisma.authors.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends authorsFindUniqueOrThrowArgs>(args: SelectSubset<T, authorsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__authorsClient<$Result.GetResult<Prisma.$authorsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Authors that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {authorsFindFirstArgs} args - Arguments to find a Authors
     * @example
     * // Get one Authors
     * const authors = await prisma.authors.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends authorsFindFirstArgs>(args?: SelectSubset<T, authorsFindFirstArgs<ExtArgs>>): Prisma__authorsClient<$Result.GetResult<Prisma.$authorsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Authors that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {authorsFindFirstOrThrowArgs} args - Arguments to find a Authors
     * @example
     * // Get one Authors
     * const authors = await prisma.authors.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends authorsFindFirstOrThrowArgs>(args?: SelectSubset<T, authorsFindFirstOrThrowArgs<ExtArgs>>): Prisma__authorsClient<$Result.GetResult<Prisma.$authorsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Authors that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {authorsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Authors
     * const authors = await prisma.authors.findMany()
     * 
     * // Get first 10 Authors
     * const authors = await prisma.authors.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const authorsWithIdOnly = await prisma.authors.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends authorsFindManyArgs>(args?: SelectSubset<T, authorsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$authorsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Authors.
     * @param {authorsCreateArgs} args - Arguments to create a Authors.
     * @example
     * // Create one Authors
     * const Authors = await prisma.authors.create({
     *   data: {
     *     // ... data to create a Authors
     *   }
     * })
     * 
     */
    create<T extends authorsCreateArgs>(args: SelectSubset<T, authorsCreateArgs<ExtArgs>>): Prisma__authorsClient<$Result.GetResult<Prisma.$authorsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Authors.
     * @param {authorsCreateManyArgs} args - Arguments to create many Authors.
     * @example
     * // Create many Authors
     * const authors = await prisma.authors.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends authorsCreateManyArgs>(args?: SelectSubset<T, authorsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Authors and returns the data saved in the database.
     * @param {authorsCreateManyAndReturnArgs} args - Arguments to create many Authors.
     * @example
     * // Create many Authors
     * const authors = await prisma.authors.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Authors and only return the `id`
     * const authorsWithIdOnly = await prisma.authors.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends authorsCreateManyAndReturnArgs>(args?: SelectSubset<T, authorsCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$authorsPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Authors.
     * @param {authorsDeleteArgs} args - Arguments to delete one Authors.
     * @example
     * // Delete one Authors
     * const Authors = await prisma.authors.delete({
     *   where: {
     *     // ... filter to delete one Authors
     *   }
     * })
     * 
     */
    delete<T extends authorsDeleteArgs>(args: SelectSubset<T, authorsDeleteArgs<ExtArgs>>): Prisma__authorsClient<$Result.GetResult<Prisma.$authorsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Authors.
     * @param {authorsUpdateArgs} args - Arguments to update one Authors.
     * @example
     * // Update one Authors
     * const authors = await prisma.authors.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends authorsUpdateArgs>(args: SelectSubset<T, authorsUpdateArgs<ExtArgs>>): Prisma__authorsClient<$Result.GetResult<Prisma.$authorsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Authors.
     * @param {authorsDeleteManyArgs} args - Arguments to filter Authors to delete.
     * @example
     * // Delete a few Authors
     * const { count } = await prisma.authors.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends authorsDeleteManyArgs>(args?: SelectSubset<T, authorsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Authors.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {authorsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Authors
     * const authors = await prisma.authors.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends authorsUpdateManyArgs>(args: SelectSubset<T, authorsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Authors and returns the data updated in the database.
     * @param {authorsUpdateManyAndReturnArgs} args - Arguments to update many Authors.
     * @example
     * // Update many Authors
     * const authors = await prisma.authors.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Authors and only return the `id`
     * const authorsWithIdOnly = await prisma.authors.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends authorsUpdateManyAndReturnArgs>(args: SelectSubset<T, authorsUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$authorsPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Authors.
     * @param {authorsUpsertArgs} args - Arguments to update or create a Authors.
     * @example
     * // Update or create a Authors
     * const authors = await prisma.authors.upsert({
     *   create: {
     *     // ... data to create a Authors
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Authors we want to update
     *   }
     * })
     */
    upsert<T extends authorsUpsertArgs>(args: SelectSubset<T, authorsUpsertArgs<ExtArgs>>): Prisma__authorsClient<$Result.GetResult<Prisma.$authorsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Authors.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {authorsCountArgs} args - Arguments to filter Authors to count.
     * @example
     * // Count the number of Authors
     * const count = await prisma.authors.count({
     *   where: {
     *     // ... the filter for the Authors we want to count
     *   }
     * })
    **/
    count<T extends authorsCountArgs>(
      args?: Subset<T, authorsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AuthorsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Authors.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AuthorsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends AuthorsAggregateArgs>(args: Subset<T, AuthorsAggregateArgs>): Prisma.PrismaPromise<GetAuthorsAggregateType<T>>

    /**
     * Group by Authors.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {authorsGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends authorsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: authorsGroupByArgs['orderBy'] }
        : { orderBy?: authorsGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, authorsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAuthorsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the authors model
   */
  readonly fields: authorsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for authors.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__authorsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    books<T extends authors$booksArgs<ExtArgs> = {}>(args?: Subset<T, authors$booksArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$booksPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the authors model
   */
  interface authorsFieldRefs {
    readonly id: FieldRef<"authors", 'String'>
    readonly name: FieldRef<"authors", 'String'>
    readonly bio: FieldRef<"authors", 'String'>
    readonly birthdate: FieldRef<"authors", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * authors findUnique
   */
  export type authorsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the authors
     */
    select?: authorsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the authors
     */
    omit?: authorsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: authorsInclude<ExtArgs> | null
    /**
     * Filter, which authors to fetch.
     */
    where: authorsWhereUniqueInput
  }

  /**
   * authors findUniqueOrThrow
   */
  export type authorsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the authors
     */
    select?: authorsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the authors
     */
    omit?: authorsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: authorsInclude<ExtArgs> | null
    /**
     * Filter, which authors to fetch.
     */
    where: authorsWhereUniqueInput
  }

  /**
   * authors findFirst
   */
  export type authorsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the authors
     */
    select?: authorsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the authors
     */
    omit?: authorsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: authorsInclude<ExtArgs> | null
    /**
     * Filter, which authors to fetch.
     */
    where?: authorsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of authors to fetch.
     */
    orderBy?: authorsOrderByWithRelationInput | authorsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for authors.
     */
    cursor?: authorsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` authors from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` authors.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of authors.
     */
    distinct?: AuthorsScalarFieldEnum | AuthorsScalarFieldEnum[]
  }

  /**
   * authors findFirstOrThrow
   */
  export type authorsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the authors
     */
    select?: authorsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the authors
     */
    omit?: authorsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: authorsInclude<ExtArgs> | null
    /**
     * Filter, which authors to fetch.
     */
    where?: authorsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of authors to fetch.
     */
    orderBy?: authorsOrderByWithRelationInput | authorsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for authors.
     */
    cursor?: authorsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` authors from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` authors.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of authors.
     */
    distinct?: AuthorsScalarFieldEnum | AuthorsScalarFieldEnum[]
  }

  /**
   * authors findMany
   */
  export type authorsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the authors
     */
    select?: authorsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the authors
     */
    omit?: authorsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: authorsInclude<ExtArgs> | null
    /**
     * Filter, which authors to fetch.
     */
    where?: authorsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of authors to fetch.
     */
    orderBy?: authorsOrderByWithRelationInput | authorsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing authors.
     */
    cursor?: authorsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` authors from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` authors.
     */
    skip?: number
    distinct?: AuthorsScalarFieldEnum | AuthorsScalarFieldEnum[]
  }

  /**
   * authors create
   */
  export type authorsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the authors
     */
    select?: authorsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the authors
     */
    omit?: authorsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: authorsInclude<ExtArgs> | null
    /**
     * The data needed to create a authors.
     */
    data: XOR<authorsCreateInput, authorsUncheckedCreateInput>
  }

  /**
   * authors createMany
   */
  export type authorsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many authors.
     */
    data: authorsCreateManyInput | authorsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * authors createManyAndReturn
   */
  export type authorsCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the authors
     */
    select?: authorsSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the authors
     */
    omit?: authorsOmit<ExtArgs> | null
    /**
     * The data used to create many authors.
     */
    data: authorsCreateManyInput | authorsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * authors update
   */
  export type authorsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the authors
     */
    select?: authorsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the authors
     */
    omit?: authorsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: authorsInclude<ExtArgs> | null
    /**
     * The data needed to update a authors.
     */
    data: XOR<authorsUpdateInput, authorsUncheckedUpdateInput>
    /**
     * Choose, which authors to update.
     */
    where: authorsWhereUniqueInput
  }

  /**
   * authors updateMany
   */
  export type authorsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update authors.
     */
    data: XOR<authorsUpdateManyMutationInput, authorsUncheckedUpdateManyInput>
    /**
     * Filter which authors to update
     */
    where?: authorsWhereInput
    /**
     * Limit how many authors to update.
     */
    limit?: number
  }

  /**
   * authors updateManyAndReturn
   */
  export type authorsUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the authors
     */
    select?: authorsSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the authors
     */
    omit?: authorsOmit<ExtArgs> | null
    /**
     * The data used to update authors.
     */
    data: XOR<authorsUpdateManyMutationInput, authorsUncheckedUpdateManyInput>
    /**
     * Filter which authors to update
     */
    where?: authorsWhereInput
    /**
     * Limit how many authors to update.
     */
    limit?: number
  }

  /**
   * authors upsert
   */
  export type authorsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the authors
     */
    select?: authorsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the authors
     */
    omit?: authorsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: authorsInclude<ExtArgs> | null
    /**
     * The filter to search for the authors to update in case it exists.
     */
    where: authorsWhereUniqueInput
    /**
     * In case the authors found by the `where` argument doesn't exist, create a new authors with this data.
     */
    create: XOR<authorsCreateInput, authorsUncheckedCreateInput>
    /**
     * In case the authors was found with the provided `where` argument, update it with this data.
     */
    update: XOR<authorsUpdateInput, authorsUncheckedUpdateInput>
  }

  /**
   * authors delete
   */
  export type authorsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the authors
     */
    select?: authorsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the authors
     */
    omit?: authorsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: authorsInclude<ExtArgs> | null
    /**
     * Filter which authors to delete.
     */
    where: authorsWhereUniqueInput
  }

  /**
   * authors deleteMany
   */
  export type authorsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which authors to delete
     */
    where?: authorsWhereInput
    /**
     * Limit how many authors to delete.
     */
    limit?: number
  }

  /**
   * authors.books
   */
  export type authors$booksArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the books
     */
    select?: booksSelect<ExtArgs> | null
    /**
     * Omit specific fields from the books
     */
    omit?: booksOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: booksInclude<ExtArgs> | null
    where?: booksWhereInput
    orderBy?: booksOrderByWithRelationInput | booksOrderByWithRelationInput[]
    cursor?: booksWhereUniqueInput
    take?: number
    skip?: number
    distinct?: BooksScalarFieldEnum | BooksScalarFieldEnum[]
  }

  /**
   * authors without action
   */
  export type authorsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the authors
     */
    select?: authorsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the authors
     */
    omit?: authorsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: authorsInclude<ExtArgs> | null
  }


  /**
   * Model customers
   */

  export type AggregateCustomers = {
    _count: CustomersCountAggregateOutputType | null
    _min: CustomersMinAggregateOutputType | null
    _max: CustomersMaxAggregateOutputType | null
  }

  export type CustomersMinAggregateOutputType = {
    id: string | null
    name: string | null
    email: string | null
    address: string | null
    phone: string | null
    password: string | null
  }

  export type CustomersMaxAggregateOutputType = {
    id: string | null
    name: string | null
    email: string | null
    address: string | null
    phone: string | null
    password: string | null
  }

  export type CustomersCountAggregateOutputType = {
    id: number
    name: number
    email: number
    address: number
    phone: number
    password: number
    _all: number
  }


  export type CustomersMinAggregateInputType = {
    id?: true
    name?: true
    email?: true
    address?: true
    phone?: true
    password?: true
  }

  export type CustomersMaxAggregateInputType = {
    id?: true
    name?: true
    email?: true
    address?: true
    phone?: true
    password?: true
  }

  export type CustomersCountAggregateInputType = {
    id?: true
    name?: true
    email?: true
    address?: true
    phone?: true
    password?: true
    _all?: true
  }

  export type CustomersAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which customers to aggregate.
     */
    where?: customersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of customers to fetch.
     */
    orderBy?: customersOrderByWithRelationInput | customersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: customersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` customers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` customers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned customers
    **/
    _count?: true | CustomersCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CustomersMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CustomersMaxAggregateInputType
  }

  export type GetCustomersAggregateType<T extends CustomersAggregateArgs> = {
        [P in keyof T & keyof AggregateCustomers]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCustomers[P]>
      : GetScalarType<T[P], AggregateCustomers[P]>
  }




  export type customersGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: customersWhereInput
    orderBy?: customersOrderByWithAggregationInput | customersOrderByWithAggregationInput[]
    by: CustomersScalarFieldEnum[] | CustomersScalarFieldEnum
    having?: customersScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CustomersCountAggregateInputType | true
    _min?: CustomersMinAggregateInputType
    _max?: CustomersMaxAggregateInputType
  }

  export type CustomersGroupByOutputType = {
    id: string
    name: string
    email: string
    address: string
    phone: string
    password: string
    _count: CustomersCountAggregateOutputType | null
    _min: CustomersMinAggregateOutputType | null
    _max: CustomersMaxAggregateOutputType | null
  }

  type GetCustomersGroupByPayload<T extends customersGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CustomersGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CustomersGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CustomersGroupByOutputType[P]>
            : GetScalarType<T[P], CustomersGroupByOutputType[P]>
        }
      >
    >


  export type customersSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
    address?: boolean
    phone?: boolean
    password?: boolean
    carts?: boolean | customers$cartsArgs<ExtArgs>
    invoices?: boolean | customers$invoicesArgs<ExtArgs>
    _count?: boolean | CustomersCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["customers"]>

  export type customersSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
    address?: boolean
    phone?: boolean
    password?: boolean
  }, ExtArgs["result"]["customers"]>

  export type customersSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
    address?: boolean
    phone?: boolean
    password?: boolean
  }, ExtArgs["result"]["customers"]>

  export type customersSelectScalar = {
    id?: boolean
    name?: boolean
    email?: boolean
    address?: boolean
    phone?: boolean
    password?: boolean
  }

  export type customersOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "email" | "address" | "phone" | "password", ExtArgs["result"]["customers"]>
  export type customersInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    carts?: boolean | customers$cartsArgs<ExtArgs>
    invoices?: boolean | customers$invoicesArgs<ExtArgs>
    _count?: boolean | CustomersCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type customersIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type customersIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $customersPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "customers"
    objects: {
      carts: Prisma.$cartsPayload<ExtArgs>[]
      invoices: Prisma.$invoicesPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      email: string
      address: string
      phone: string
      password: string
    }, ExtArgs["result"]["customers"]>
    composites: {}
  }

  type customersGetPayload<S extends boolean | null | undefined | customersDefaultArgs> = $Result.GetResult<Prisma.$customersPayload, S>

  type customersCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<customersFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: CustomersCountAggregateInputType | true
    }

  export interface customersDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['customers'], meta: { name: 'customers' } }
    /**
     * Find zero or one Customers that matches the filter.
     * @param {customersFindUniqueArgs} args - Arguments to find a Customers
     * @example
     * // Get one Customers
     * const customers = await prisma.customers.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends customersFindUniqueArgs>(args: SelectSubset<T, customersFindUniqueArgs<ExtArgs>>): Prisma__customersClient<$Result.GetResult<Prisma.$customersPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Customers that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {customersFindUniqueOrThrowArgs} args - Arguments to find a Customers
     * @example
     * // Get one Customers
     * const customers = await prisma.customers.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends customersFindUniqueOrThrowArgs>(args: SelectSubset<T, customersFindUniqueOrThrowArgs<ExtArgs>>): Prisma__customersClient<$Result.GetResult<Prisma.$customersPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Customers that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {customersFindFirstArgs} args - Arguments to find a Customers
     * @example
     * // Get one Customers
     * const customers = await prisma.customers.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends customersFindFirstArgs>(args?: SelectSubset<T, customersFindFirstArgs<ExtArgs>>): Prisma__customersClient<$Result.GetResult<Prisma.$customersPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Customers that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {customersFindFirstOrThrowArgs} args - Arguments to find a Customers
     * @example
     * // Get one Customers
     * const customers = await prisma.customers.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends customersFindFirstOrThrowArgs>(args?: SelectSubset<T, customersFindFirstOrThrowArgs<ExtArgs>>): Prisma__customersClient<$Result.GetResult<Prisma.$customersPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Customers that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {customersFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Customers
     * const customers = await prisma.customers.findMany()
     * 
     * // Get first 10 Customers
     * const customers = await prisma.customers.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const customersWithIdOnly = await prisma.customers.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends customersFindManyArgs>(args?: SelectSubset<T, customersFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$customersPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Customers.
     * @param {customersCreateArgs} args - Arguments to create a Customers.
     * @example
     * // Create one Customers
     * const Customers = await prisma.customers.create({
     *   data: {
     *     // ... data to create a Customers
     *   }
     * })
     * 
     */
    create<T extends customersCreateArgs>(args: SelectSubset<T, customersCreateArgs<ExtArgs>>): Prisma__customersClient<$Result.GetResult<Prisma.$customersPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Customers.
     * @param {customersCreateManyArgs} args - Arguments to create many Customers.
     * @example
     * // Create many Customers
     * const customers = await prisma.customers.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends customersCreateManyArgs>(args?: SelectSubset<T, customersCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Customers and returns the data saved in the database.
     * @param {customersCreateManyAndReturnArgs} args - Arguments to create many Customers.
     * @example
     * // Create many Customers
     * const customers = await prisma.customers.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Customers and only return the `id`
     * const customersWithIdOnly = await prisma.customers.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends customersCreateManyAndReturnArgs>(args?: SelectSubset<T, customersCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$customersPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Customers.
     * @param {customersDeleteArgs} args - Arguments to delete one Customers.
     * @example
     * // Delete one Customers
     * const Customers = await prisma.customers.delete({
     *   where: {
     *     // ... filter to delete one Customers
     *   }
     * })
     * 
     */
    delete<T extends customersDeleteArgs>(args: SelectSubset<T, customersDeleteArgs<ExtArgs>>): Prisma__customersClient<$Result.GetResult<Prisma.$customersPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Customers.
     * @param {customersUpdateArgs} args - Arguments to update one Customers.
     * @example
     * // Update one Customers
     * const customers = await prisma.customers.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends customersUpdateArgs>(args: SelectSubset<T, customersUpdateArgs<ExtArgs>>): Prisma__customersClient<$Result.GetResult<Prisma.$customersPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Customers.
     * @param {customersDeleteManyArgs} args - Arguments to filter Customers to delete.
     * @example
     * // Delete a few Customers
     * const { count } = await prisma.customers.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends customersDeleteManyArgs>(args?: SelectSubset<T, customersDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Customers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {customersUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Customers
     * const customers = await prisma.customers.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends customersUpdateManyArgs>(args: SelectSubset<T, customersUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Customers and returns the data updated in the database.
     * @param {customersUpdateManyAndReturnArgs} args - Arguments to update many Customers.
     * @example
     * // Update many Customers
     * const customers = await prisma.customers.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Customers and only return the `id`
     * const customersWithIdOnly = await prisma.customers.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends customersUpdateManyAndReturnArgs>(args: SelectSubset<T, customersUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$customersPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Customers.
     * @param {customersUpsertArgs} args - Arguments to update or create a Customers.
     * @example
     * // Update or create a Customers
     * const customers = await prisma.customers.upsert({
     *   create: {
     *     // ... data to create a Customers
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Customers we want to update
     *   }
     * })
     */
    upsert<T extends customersUpsertArgs>(args: SelectSubset<T, customersUpsertArgs<ExtArgs>>): Prisma__customersClient<$Result.GetResult<Prisma.$customersPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Customers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {customersCountArgs} args - Arguments to filter Customers to count.
     * @example
     * // Count the number of Customers
     * const count = await prisma.customers.count({
     *   where: {
     *     // ... the filter for the Customers we want to count
     *   }
     * })
    **/
    count<T extends customersCountArgs>(
      args?: Subset<T, customersCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CustomersCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Customers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CustomersAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends CustomersAggregateArgs>(args: Subset<T, CustomersAggregateArgs>): Prisma.PrismaPromise<GetCustomersAggregateType<T>>

    /**
     * Group by Customers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {customersGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends customersGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: customersGroupByArgs['orderBy'] }
        : { orderBy?: customersGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, customersGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCustomersGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the customers model
   */
  readonly fields: customersFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for customers.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__customersClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    carts<T extends customers$cartsArgs<ExtArgs> = {}>(args?: Subset<T, customers$cartsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$cartsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    invoices<T extends customers$invoicesArgs<ExtArgs> = {}>(args?: Subset<T, customers$invoicesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$invoicesPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the customers model
   */
  interface customersFieldRefs {
    readonly id: FieldRef<"customers", 'String'>
    readonly name: FieldRef<"customers", 'String'>
    readonly email: FieldRef<"customers", 'String'>
    readonly address: FieldRef<"customers", 'String'>
    readonly phone: FieldRef<"customers", 'String'>
    readonly password: FieldRef<"customers", 'String'>
  }
    

  // Custom InputTypes
  /**
   * customers findUnique
   */
  export type customersFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the customers
     */
    select?: customersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the customers
     */
    omit?: customersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: customersInclude<ExtArgs> | null
    /**
     * Filter, which customers to fetch.
     */
    where: customersWhereUniqueInput
  }

  /**
   * customers findUniqueOrThrow
   */
  export type customersFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the customers
     */
    select?: customersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the customers
     */
    omit?: customersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: customersInclude<ExtArgs> | null
    /**
     * Filter, which customers to fetch.
     */
    where: customersWhereUniqueInput
  }

  /**
   * customers findFirst
   */
  export type customersFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the customers
     */
    select?: customersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the customers
     */
    omit?: customersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: customersInclude<ExtArgs> | null
    /**
     * Filter, which customers to fetch.
     */
    where?: customersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of customers to fetch.
     */
    orderBy?: customersOrderByWithRelationInput | customersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for customers.
     */
    cursor?: customersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` customers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` customers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of customers.
     */
    distinct?: CustomersScalarFieldEnum | CustomersScalarFieldEnum[]
  }

  /**
   * customers findFirstOrThrow
   */
  export type customersFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the customers
     */
    select?: customersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the customers
     */
    omit?: customersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: customersInclude<ExtArgs> | null
    /**
     * Filter, which customers to fetch.
     */
    where?: customersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of customers to fetch.
     */
    orderBy?: customersOrderByWithRelationInput | customersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for customers.
     */
    cursor?: customersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` customers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` customers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of customers.
     */
    distinct?: CustomersScalarFieldEnum | CustomersScalarFieldEnum[]
  }

  /**
   * customers findMany
   */
  export type customersFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the customers
     */
    select?: customersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the customers
     */
    omit?: customersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: customersInclude<ExtArgs> | null
    /**
     * Filter, which customers to fetch.
     */
    where?: customersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of customers to fetch.
     */
    orderBy?: customersOrderByWithRelationInput | customersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing customers.
     */
    cursor?: customersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` customers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` customers.
     */
    skip?: number
    distinct?: CustomersScalarFieldEnum | CustomersScalarFieldEnum[]
  }

  /**
   * customers create
   */
  export type customersCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the customers
     */
    select?: customersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the customers
     */
    omit?: customersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: customersInclude<ExtArgs> | null
    /**
     * The data needed to create a customers.
     */
    data: XOR<customersCreateInput, customersUncheckedCreateInput>
  }

  /**
   * customers createMany
   */
  export type customersCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many customers.
     */
    data: customersCreateManyInput | customersCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * customers createManyAndReturn
   */
  export type customersCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the customers
     */
    select?: customersSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the customers
     */
    omit?: customersOmit<ExtArgs> | null
    /**
     * The data used to create many customers.
     */
    data: customersCreateManyInput | customersCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * customers update
   */
  export type customersUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the customers
     */
    select?: customersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the customers
     */
    omit?: customersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: customersInclude<ExtArgs> | null
    /**
     * The data needed to update a customers.
     */
    data: XOR<customersUpdateInput, customersUncheckedUpdateInput>
    /**
     * Choose, which customers to update.
     */
    where: customersWhereUniqueInput
  }

  /**
   * customers updateMany
   */
  export type customersUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update customers.
     */
    data: XOR<customersUpdateManyMutationInput, customersUncheckedUpdateManyInput>
    /**
     * Filter which customers to update
     */
    where?: customersWhereInput
    /**
     * Limit how many customers to update.
     */
    limit?: number
  }

  /**
   * customers updateManyAndReturn
   */
  export type customersUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the customers
     */
    select?: customersSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the customers
     */
    omit?: customersOmit<ExtArgs> | null
    /**
     * The data used to update customers.
     */
    data: XOR<customersUpdateManyMutationInput, customersUncheckedUpdateManyInput>
    /**
     * Filter which customers to update
     */
    where?: customersWhereInput
    /**
     * Limit how many customers to update.
     */
    limit?: number
  }

  /**
   * customers upsert
   */
  export type customersUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the customers
     */
    select?: customersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the customers
     */
    omit?: customersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: customersInclude<ExtArgs> | null
    /**
     * The filter to search for the customers to update in case it exists.
     */
    where: customersWhereUniqueInput
    /**
     * In case the customers found by the `where` argument doesn't exist, create a new customers with this data.
     */
    create: XOR<customersCreateInput, customersUncheckedCreateInput>
    /**
     * In case the customers was found with the provided `where` argument, update it with this data.
     */
    update: XOR<customersUpdateInput, customersUncheckedUpdateInput>
  }

  /**
   * customers delete
   */
  export type customersDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the customers
     */
    select?: customersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the customers
     */
    omit?: customersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: customersInclude<ExtArgs> | null
    /**
     * Filter which customers to delete.
     */
    where: customersWhereUniqueInput
  }

  /**
   * customers deleteMany
   */
  export type customersDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which customers to delete
     */
    where?: customersWhereInput
    /**
     * Limit how many customers to delete.
     */
    limit?: number
  }

  /**
   * customers.carts
   */
  export type customers$cartsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the carts
     */
    select?: cartsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the carts
     */
    omit?: cartsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: cartsInclude<ExtArgs> | null
    where?: cartsWhereInput
    orderBy?: cartsOrderByWithRelationInput | cartsOrderByWithRelationInput[]
    cursor?: cartsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: CartsScalarFieldEnum | CartsScalarFieldEnum[]
  }

  /**
   * customers.invoices
   */
  export type customers$invoicesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the invoices
     */
    select?: invoicesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the invoices
     */
    omit?: invoicesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: invoicesInclude<ExtArgs> | null
    where?: invoicesWhereInput
    orderBy?: invoicesOrderByWithRelationInput | invoicesOrderByWithRelationInput[]
    cursor?: invoicesWhereUniqueInput
    take?: number
    skip?: number
    distinct?: InvoicesScalarFieldEnum | InvoicesScalarFieldEnum[]
  }

  /**
   * customers without action
   */
  export type customersDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the customers
     */
    select?: customersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the customers
     */
    omit?: customersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: customersInclude<ExtArgs> | null
  }


  /**
   * Model books
   */

  export type AggregateBooks = {
    _count: BooksCountAggregateOutputType | null
    _avg: BooksAvgAggregateOutputType | null
    _sum: BooksSumAggregateOutputType | null
    _min: BooksMinAggregateOutputType | null
    _max: BooksMaxAggregateOutputType | null
  }

  export type BooksAvgAggregateOutputType = {
    publication_year: number | null
  }

  export type BooksSumAggregateOutputType = {
    publication_year: number | null
  }

  export type BooksMinAggregateOutputType = {
    id: string | null
    title: string | null
    isbn: string | null
    publication_year: number | null
    genre: string | null
    author_id: string | null
  }

  export type BooksMaxAggregateOutputType = {
    id: string | null
    title: string | null
    isbn: string | null
    publication_year: number | null
    genre: string | null
    author_id: string | null
  }

  export type BooksCountAggregateOutputType = {
    id: number
    title: number
    isbn: number
    publication_year: number
    genre: number
    author_id: number
    _all: number
  }


  export type BooksAvgAggregateInputType = {
    publication_year?: true
  }

  export type BooksSumAggregateInputType = {
    publication_year?: true
  }

  export type BooksMinAggregateInputType = {
    id?: true
    title?: true
    isbn?: true
    publication_year?: true
    genre?: true
    author_id?: true
  }

  export type BooksMaxAggregateInputType = {
    id?: true
    title?: true
    isbn?: true
    publication_year?: true
    genre?: true
    author_id?: true
  }

  export type BooksCountAggregateInputType = {
    id?: true
    title?: true
    isbn?: true
    publication_year?: true
    genre?: true
    author_id?: true
    _all?: true
  }

  export type BooksAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which books to aggregate.
     */
    where?: booksWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of books to fetch.
     */
    orderBy?: booksOrderByWithRelationInput | booksOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: booksWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` books from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` books.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned books
    **/
    _count?: true | BooksCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: BooksAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: BooksSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: BooksMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: BooksMaxAggregateInputType
  }

  export type GetBooksAggregateType<T extends BooksAggregateArgs> = {
        [P in keyof T & keyof AggregateBooks]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateBooks[P]>
      : GetScalarType<T[P], AggregateBooks[P]>
  }




  export type booksGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: booksWhereInput
    orderBy?: booksOrderByWithAggregationInput | booksOrderByWithAggregationInput[]
    by: BooksScalarFieldEnum[] | BooksScalarFieldEnum
    having?: booksScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: BooksCountAggregateInputType | true
    _avg?: BooksAvgAggregateInputType
    _sum?: BooksSumAggregateInputType
    _min?: BooksMinAggregateInputType
    _max?: BooksMaxAggregateInputType
  }

  export type BooksGroupByOutputType = {
    id: string
    title: string
    isbn: string
    publication_year: number
    genre: string
    author_id: string
    _count: BooksCountAggregateOutputType | null
    _avg: BooksAvgAggregateOutputType | null
    _sum: BooksSumAggregateOutputType | null
    _min: BooksMinAggregateOutputType | null
    _max: BooksMaxAggregateOutputType | null
  }

  type GetBooksGroupByPayload<T extends booksGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<BooksGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof BooksGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], BooksGroupByOutputType[P]>
            : GetScalarType<T[P], BooksGroupByOutputType[P]>
        }
      >
    >


  export type booksSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    isbn?: boolean
    publication_year?: boolean
    genre?: boolean
    author_id?: boolean
    author?: boolean | authorsDefaultArgs<ExtArgs>
    books_products?: boolean | books$books_productsArgs<ExtArgs>
    _count?: boolean | BooksCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["books"]>

  export type booksSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    isbn?: boolean
    publication_year?: boolean
    genre?: boolean
    author_id?: boolean
    author?: boolean | authorsDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["books"]>

  export type booksSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    isbn?: boolean
    publication_year?: boolean
    genre?: boolean
    author_id?: boolean
    author?: boolean | authorsDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["books"]>

  export type booksSelectScalar = {
    id?: boolean
    title?: boolean
    isbn?: boolean
    publication_year?: boolean
    genre?: boolean
    author_id?: boolean
  }

  export type booksOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "title" | "isbn" | "publication_year" | "genre" | "author_id", ExtArgs["result"]["books"]>
  export type booksInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    author?: boolean | authorsDefaultArgs<ExtArgs>
    books_products?: boolean | books$books_productsArgs<ExtArgs>
    _count?: boolean | BooksCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type booksIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    author?: boolean | authorsDefaultArgs<ExtArgs>
  }
  export type booksIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    author?: boolean | authorsDefaultArgs<ExtArgs>
  }

  export type $booksPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "books"
    objects: {
      author: Prisma.$authorsPayload<ExtArgs>
      books_products: Prisma.$books_productsPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      title: string
      isbn: string
      publication_year: number
      genre: string
      author_id: string
    }, ExtArgs["result"]["books"]>
    composites: {}
  }

  type booksGetPayload<S extends boolean | null | undefined | booksDefaultArgs> = $Result.GetResult<Prisma.$booksPayload, S>

  type booksCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<booksFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: BooksCountAggregateInputType | true
    }

  export interface booksDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['books'], meta: { name: 'books' } }
    /**
     * Find zero or one Books that matches the filter.
     * @param {booksFindUniqueArgs} args - Arguments to find a Books
     * @example
     * // Get one Books
     * const books = await prisma.books.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends booksFindUniqueArgs>(args: SelectSubset<T, booksFindUniqueArgs<ExtArgs>>): Prisma__booksClient<$Result.GetResult<Prisma.$booksPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Books that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {booksFindUniqueOrThrowArgs} args - Arguments to find a Books
     * @example
     * // Get one Books
     * const books = await prisma.books.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends booksFindUniqueOrThrowArgs>(args: SelectSubset<T, booksFindUniqueOrThrowArgs<ExtArgs>>): Prisma__booksClient<$Result.GetResult<Prisma.$booksPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Books that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {booksFindFirstArgs} args - Arguments to find a Books
     * @example
     * // Get one Books
     * const books = await prisma.books.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends booksFindFirstArgs>(args?: SelectSubset<T, booksFindFirstArgs<ExtArgs>>): Prisma__booksClient<$Result.GetResult<Prisma.$booksPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Books that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {booksFindFirstOrThrowArgs} args - Arguments to find a Books
     * @example
     * // Get one Books
     * const books = await prisma.books.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends booksFindFirstOrThrowArgs>(args?: SelectSubset<T, booksFindFirstOrThrowArgs<ExtArgs>>): Prisma__booksClient<$Result.GetResult<Prisma.$booksPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Books that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {booksFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Books
     * const books = await prisma.books.findMany()
     * 
     * // Get first 10 Books
     * const books = await prisma.books.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const booksWithIdOnly = await prisma.books.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends booksFindManyArgs>(args?: SelectSubset<T, booksFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$booksPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Books.
     * @param {booksCreateArgs} args - Arguments to create a Books.
     * @example
     * // Create one Books
     * const Books = await prisma.books.create({
     *   data: {
     *     // ... data to create a Books
     *   }
     * })
     * 
     */
    create<T extends booksCreateArgs>(args: SelectSubset<T, booksCreateArgs<ExtArgs>>): Prisma__booksClient<$Result.GetResult<Prisma.$booksPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Books.
     * @param {booksCreateManyArgs} args - Arguments to create many Books.
     * @example
     * // Create many Books
     * const books = await prisma.books.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends booksCreateManyArgs>(args?: SelectSubset<T, booksCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Books and returns the data saved in the database.
     * @param {booksCreateManyAndReturnArgs} args - Arguments to create many Books.
     * @example
     * // Create many Books
     * const books = await prisma.books.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Books and only return the `id`
     * const booksWithIdOnly = await prisma.books.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends booksCreateManyAndReturnArgs>(args?: SelectSubset<T, booksCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$booksPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Books.
     * @param {booksDeleteArgs} args - Arguments to delete one Books.
     * @example
     * // Delete one Books
     * const Books = await prisma.books.delete({
     *   where: {
     *     // ... filter to delete one Books
     *   }
     * })
     * 
     */
    delete<T extends booksDeleteArgs>(args: SelectSubset<T, booksDeleteArgs<ExtArgs>>): Prisma__booksClient<$Result.GetResult<Prisma.$booksPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Books.
     * @param {booksUpdateArgs} args - Arguments to update one Books.
     * @example
     * // Update one Books
     * const books = await prisma.books.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends booksUpdateArgs>(args: SelectSubset<T, booksUpdateArgs<ExtArgs>>): Prisma__booksClient<$Result.GetResult<Prisma.$booksPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Books.
     * @param {booksDeleteManyArgs} args - Arguments to filter Books to delete.
     * @example
     * // Delete a few Books
     * const { count } = await prisma.books.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends booksDeleteManyArgs>(args?: SelectSubset<T, booksDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Books.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {booksUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Books
     * const books = await prisma.books.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends booksUpdateManyArgs>(args: SelectSubset<T, booksUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Books and returns the data updated in the database.
     * @param {booksUpdateManyAndReturnArgs} args - Arguments to update many Books.
     * @example
     * // Update many Books
     * const books = await prisma.books.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Books and only return the `id`
     * const booksWithIdOnly = await prisma.books.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends booksUpdateManyAndReturnArgs>(args: SelectSubset<T, booksUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$booksPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Books.
     * @param {booksUpsertArgs} args - Arguments to update or create a Books.
     * @example
     * // Update or create a Books
     * const books = await prisma.books.upsert({
     *   create: {
     *     // ... data to create a Books
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Books we want to update
     *   }
     * })
     */
    upsert<T extends booksUpsertArgs>(args: SelectSubset<T, booksUpsertArgs<ExtArgs>>): Prisma__booksClient<$Result.GetResult<Prisma.$booksPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Books.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {booksCountArgs} args - Arguments to filter Books to count.
     * @example
     * // Count the number of Books
     * const count = await prisma.books.count({
     *   where: {
     *     // ... the filter for the Books we want to count
     *   }
     * })
    **/
    count<T extends booksCountArgs>(
      args?: Subset<T, booksCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], BooksCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Books.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BooksAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends BooksAggregateArgs>(args: Subset<T, BooksAggregateArgs>): Prisma.PrismaPromise<GetBooksAggregateType<T>>

    /**
     * Group by Books.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {booksGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends booksGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: booksGroupByArgs['orderBy'] }
        : { orderBy?: booksGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, booksGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetBooksGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the books model
   */
  readonly fields: booksFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for books.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__booksClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    author<T extends authorsDefaultArgs<ExtArgs> = {}>(args?: Subset<T, authorsDefaultArgs<ExtArgs>>): Prisma__authorsClient<$Result.GetResult<Prisma.$authorsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    books_products<T extends books$books_productsArgs<ExtArgs> = {}>(args?: Subset<T, books$books_productsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$books_productsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the books model
   */
  interface booksFieldRefs {
    readonly id: FieldRef<"books", 'String'>
    readonly title: FieldRef<"books", 'String'>
    readonly isbn: FieldRef<"books", 'String'>
    readonly publication_year: FieldRef<"books", 'Int'>
    readonly genre: FieldRef<"books", 'String'>
    readonly author_id: FieldRef<"books", 'String'>
  }
    

  // Custom InputTypes
  /**
   * books findUnique
   */
  export type booksFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the books
     */
    select?: booksSelect<ExtArgs> | null
    /**
     * Omit specific fields from the books
     */
    omit?: booksOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: booksInclude<ExtArgs> | null
    /**
     * Filter, which books to fetch.
     */
    where: booksWhereUniqueInput
  }

  /**
   * books findUniqueOrThrow
   */
  export type booksFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the books
     */
    select?: booksSelect<ExtArgs> | null
    /**
     * Omit specific fields from the books
     */
    omit?: booksOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: booksInclude<ExtArgs> | null
    /**
     * Filter, which books to fetch.
     */
    where: booksWhereUniqueInput
  }

  /**
   * books findFirst
   */
  export type booksFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the books
     */
    select?: booksSelect<ExtArgs> | null
    /**
     * Omit specific fields from the books
     */
    omit?: booksOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: booksInclude<ExtArgs> | null
    /**
     * Filter, which books to fetch.
     */
    where?: booksWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of books to fetch.
     */
    orderBy?: booksOrderByWithRelationInput | booksOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for books.
     */
    cursor?: booksWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` books from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` books.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of books.
     */
    distinct?: BooksScalarFieldEnum | BooksScalarFieldEnum[]
  }

  /**
   * books findFirstOrThrow
   */
  export type booksFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the books
     */
    select?: booksSelect<ExtArgs> | null
    /**
     * Omit specific fields from the books
     */
    omit?: booksOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: booksInclude<ExtArgs> | null
    /**
     * Filter, which books to fetch.
     */
    where?: booksWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of books to fetch.
     */
    orderBy?: booksOrderByWithRelationInput | booksOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for books.
     */
    cursor?: booksWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` books from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` books.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of books.
     */
    distinct?: BooksScalarFieldEnum | BooksScalarFieldEnum[]
  }

  /**
   * books findMany
   */
  export type booksFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the books
     */
    select?: booksSelect<ExtArgs> | null
    /**
     * Omit specific fields from the books
     */
    omit?: booksOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: booksInclude<ExtArgs> | null
    /**
     * Filter, which books to fetch.
     */
    where?: booksWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of books to fetch.
     */
    orderBy?: booksOrderByWithRelationInput | booksOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing books.
     */
    cursor?: booksWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` books from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` books.
     */
    skip?: number
    distinct?: BooksScalarFieldEnum | BooksScalarFieldEnum[]
  }

  /**
   * books create
   */
  export type booksCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the books
     */
    select?: booksSelect<ExtArgs> | null
    /**
     * Omit specific fields from the books
     */
    omit?: booksOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: booksInclude<ExtArgs> | null
    /**
     * The data needed to create a books.
     */
    data: XOR<booksCreateInput, booksUncheckedCreateInput>
  }

  /**
   * books createMany
   */
  export type booksCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many books.
     */
    data: booksCreateManyInput | booksCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * books createManyAndReturn
   */
  export type booksCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the books
     */
    select?: booksSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the books
     */
    omit?: booksOmit<ExtArgs> | null
    /**
     * The data used to create many books.
     */
    data: booksCreateManyInput | booksCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: booksIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * books update
   */
  export type booksUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the books
     */
    select?: booksSelect<ExtArgs> | null
    /**
     * Omit specific fields from the books
     */
    omit?: booksOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: booksInclude<ExtArgs> | null
    /**
     * The data needed to update a books.
     */
    data: XOR<booksUpdateInput, booksUncheckedUpdateInput>
    /**
     * Choose, which books to update.
     */
    where: booksWhereUniqueInput
  }

  /**
   * books updateMany
   */
  export type booksUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update books.
     */
    data: XOR<booksUpdateManyMutationInput, booksUncheckedUpdateManyInput>
    /**
     * Filter which books to update
     */
    where?: booksWhereInput
    /**
     * Limit how many books to update.
     */
    limit?: number
  }

  /**
   * books updateManyAndReturn
   */
  export type booksUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the books
     */
    select?: booksSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the books
     */
    omit?: booksOmit<ExtArgs> | null
    /**
     * The data used to update books.
     */
    data: XOR<booksUpdateManyMutationInput, booksUncheckedUpdateManyInput>
    /**
     * Filter which books to update
     */
    where?: booksWhereInput
    /**
     * Limit how many books to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: booksIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * books upsert
   */
  export type booksUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the books
     */
    select?: booksSelect<ExtArgs> | null
    /**
     * Omit specific fields from the books
     */
    omit?: booksOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: booksInclude<ExtArgs> | null
    /**
     * The filter to search for the books to update in case it exists.
     */
    where: booksWhereUniqueInput
    /**
     * In case the books found by the `where` argument doesn't exist, create a new books with this data.
     */
    create: XOR<booksCreateInput, booksUncheckedCreateInput>
    /**
     * In case the books was found with the provided `where` argument, update it with this data.
     */
    update: XOR<booksUpdateInput, booksUncheckedUpdateInput>
  }

  /**
   * books delete
   */
  export type booksDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the books
     */
    select?: booksSelect<ExtArgs> | null
    /**
     * Omit specific fields from the books
     */
    omit?: booksOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: booksInclude<ExtArgs> | null
    /**
     * Filter which books to delete.
     */
    where: booksWhereUniqueInput
  }

  /**
   * books deleteMany
   */
  export type booksDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which books to delete
     */
    where?: booksWhereInput
    /**
     * Limit how many books to delete.
     */
    limit?: number
  }

  /**
   * books.books_products
   */
  export type books$books_productsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the books_products
     */
    select?: books_productsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the books_products
     */
    omit?: books_productsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: books_productsInclude<ExtArgs> | null
    where?: books_productsWhereInput
    orderBy?: books_productsOrderByWithRelationInput | books_productsOrderByWithRelationInput[]
    cursor?: books_productsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Books_productsScalarFieldEnum | Books_productsScalarFieldEnum[]
  }

  /**
   * books without action
   */
  export type booksDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the books
     */
    select?: booksSelect<ExtArgs> | null
    /**
     * Omit specific fields from the books
     */
    omit?: booksOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: booksInclude<ExtArgs> | null
  }


  /**
   * Model warehouses
   */

  export type AggregateWarehouses = {
    _count: WarehousesCountAggregateOutputType | null
    _avg: WarehousesAvgAggregateOutputType | null
    _sum: WarehousesSumAggregateOutputType | null
    _min: WarehousesMinAggregateOutputType | null
    _max: WarehousesMaxAggregateOutputType | null
  }

  export type WarehousesAvgAggregateOutputType = {
    capacity: number | null
  }

  export type WarehousesSumAggregateOutputType = {
    capacity: number | null
  }

  export type WarehousesMinAggregateOutputType = {
    id: string | null
    name: string | null
    location: string | null
    capacity: number | null
  }

  export type WarehousesMaxAggregateOutputType = {
    id: string | null
    name: string | null
    location: string | null
    capacity: number | null
  }

  export type WarehousesCountAggregateOutputType = {
    id: number
    name: number
    location: number
    capacity: number
    _all: number
  }


  export type WarehousesAvgAggregateInputType = {
    capacity?: true
  }

  export type WarehousesSumAggregateInputType = {
    capacity?: true
  }

  export type WarehousesMinAggregateInputType = {
    id?: true
    name?: true
    location?: true
    capacity?: true
  }

  export type WarehousesMaxAggregateInputType = {
    id?: true
    name?: true
    location?: true
    capacity?: true
  }

  export type WarehousesCountAggregateInputType = {
    id?: true
    name?: true
    location?: true
    capacity?: true
    _all?: true
  }

  export type WarehousesAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which warehouses to aggregate.
     */
    where?: warehousesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of warehouses to fetch.
     */
    orderBy?: warehousesOrderByWithRelationInput | warehousesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: warehousesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` warehouses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` warehouses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned warehouses
    **/
    _count?: true | WarehousesCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: WarehousesAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: WarehousesSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: WarehousesMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: WarehousesMaxAggregateInputType
  }

  export type GetWarehousesAggregateType<T extends WarehousesAggregateArgs> = {
        [P in keyof T & keyof AggregateWarehouses]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateWarehouses[P]>
      : GetScalarType<T[P], AggregateWarehouses[P]>
  }




  export type warehousesGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: warehousesWhereInput
    orderBy?: warehousesOrderByWithAggregationInput | warehousesOrderByWithAggregationInput[]
    by: WarehousesScalarFieldEnum[] | WarehousesScalarFieldEnum
    having?: warehousesScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: WarehousesCountAggregateInputType | true
    _avg?: WarehousesAvgAggregateInputType
    _sum?: WarehousesSumAggregateInputType
    _min?: WarehousesMinAggregateInputType
    _max?: WarehousesMaxAggregateInputType
  }

  export type WarehousesGroupByOutputType = {
    id: string
    name: string
    location: string
    capacity: number
    _count: WarehousesCountAggregateOutputType | null
    _avg: WarehousesAvgAggregateOutputType | null
    _sum: WarehousesSumAggregateOutputType | null
    _min: WarehousesMinAggregateOutputType | null
    _max: WarehousesMaxAggregateOutputType | null
  }

  type GetWarehousesGroupByPayload<T extends warehousesGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<WarehousesGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof WarehousesGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], WarehousesGroupByOutputType[P]>
            : GetScalarType<T[P], WarehousesGroupByOutputType[P]>
        }
      >
    >


  export type warehousesSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    location?: boolean
    capacity?: boolean
    books_products?: boolean | warehouses$books_productsArgs<ExtArgs>
    _count?: boolean | WarehousesCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["warehouses"]>

  export type warehousesSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    location?: boolean
    capacity?: boolean
  }, ExtArgs["result"]["warehouses"]>

  export type warehousesSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    location?: boolean
    capacity?: boolean
  }, ExtArgs["result"]["warehouses"]>

  export type warehousesSelectScalar = {
    id?: boolean
    name?: boolean
    location?: boolean
    capacity?: boolean
  }

  export type warehousesOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "location" | "capacity", ExtArgs["result"]["warehouses"]>
  export type warehousesInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    books_products?: boolean | warehouses$books_productsArgs<ExtArgs>
    _count?: boolean | WarehousesCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type warehousesIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type warehousesIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $warehousesPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "warehouses"
    objects: {
      books_products: Prisma.$books_productsPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      location: string
      capacity: number
    }, ExtArgs["result"]["warehouses"]>
    composites: {}
  }

  type warehousesGetPayload<S extends boolean | null | undefined | warehousesDefaultArgs> = $Result.GetResult<Prisma.$warehousesPayload, S>

  type warehousesCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<warehousesFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: WarehousesCountAggregateInputType | true
    }

  export interface warehousesDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['warehouses'], meta: { name: 'warehouses' } }
    /**
     * Find zero or one Warehouses that matches the filter.
     * @param {warehousesFindUniqueArgs} args - Arguments to find a Warehouses
     * @example
     * // Get one Warehouses
     * const warehouses = await prisma.warehouses.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends warehousesFindUniqueArgs>(args: SelectSubset<T, warehousesFindUniqueArgs<ExtArgs>>): Prisma__warehousesClient<$Result.GetResult<Prisma.$warehousesPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Warehouses that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {warehousesFindUniqueOrThrowArgs} args - Arguments to find a Warehouses
     * @example
     * // Get one Warehouses
     * const warehouses = await prisma.warehouses.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends warehousesFindUniqueOrThrowArgs>(args: SelectSubset<T, warehousesFindUniqueOrThrowArgs<ExtArgs>>): Prisma__warehousesClient<$Result.GetResult<Prisma.$warehousesPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Warehouses that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {warehousesFindFirstArgs} args - Arguments to find a Warehouses
     * @example
     * // Get one Warehouses
     * const warehouses = await prisma.warehouses.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends warehousesFindFirstArgs>(args?: SelectSubset<T, warehousesFindFirstArgs<ExtArgs>>): Prisma__warehousesClient<$Result.GetResult<Prisma.$warehousesPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Warehouses that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {warehousesFindFirstOrThrowArgs} args - Arguments to find a Warehouses
     * @example
     * // Get one Warehouses
     * const warehouses = await prisma.warehouses.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends warehousesFindFirstOrThrowArgs>(args?: SelectSubset<T, warehousesFindFirstOrThrowArgs<ExtArgs>>): Prisma__warehousesClient<$Result.GetResult<Prisma.$warehousesPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Warehouses that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {warehousesFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Warehouses
     * const warehouses = await prisma.warehouses.findMany()
     * 
     * // Get first 10 Warehouses
     * const warehouses = await prisma.warehouses.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const warehousesWithIdOnly = await prisma.warehouses.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends warehousesFindManyArgs>(args?: SelectSubset<T, warehousesFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$warehousesPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Warehouses.
     * @param {warehousesCreateArgs} args - Arguments to create a Warehouses.
     * @example
     * // Create one Warehouses
     * const Warehouses = await prisma.warehouses.create({
     *   data: {
     *     // ... data to create a Warehouses
     *   }
     * })
     * 
     */
    create<T extends warehousesCreateArgs>(args: SelectSubset<T, warehousesCreateArgs<ExtArgs>>): Prisma__warehousesClient<$Result.GetResult<Prisma.$warehousesPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Warehouses.
     * @param {warehousesCreateManyArgs} args - Arguments to create many Warehouses.
     * @example
     * // Create many Warehouses
     * const warehouses = await prisma.warehouses.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends warehousesCreateManyArgs>(args?: SelectSubset<T, warehousesCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Warehouses and returns the data saved in the database.
     * @param {warehousesCreateManyAndReturnArgs} args - Arguments to create many Warehouses.
     * @example
     * // Create many Warehouses
     * const warehouses = await prisma.warehouses.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Warehouses and only return the `id`
     * const warehousesWithIdOnly = await prisma.warehouses.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends warehousesCreateManyAndReturnArgs>(args?: SelectSubset<T, warehousesCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$warehousesPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Warehouses.
     * @param {warehousesDeleteArgs} args - Arguments to delete one Warehouses.
     * @example
     * // Delete one Warehouses
     * const Warehouses = await prisma.warehouses.delete({
     *   where: {
     *     // ... filter to delete one Warehouses
     *   }
     * })
     * 
     */
    delete<T extends warehousesDeleteArgs>(args: SelectSubset<T, warehousesDeleteArgs<ExtArgs>>): Prisma__warehousesClient<$Result.GetResult<Prisma.$warehousesPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Warehouses.
     * @param {warehousesUpdateArgs} args - Arguments to update one Warehouses.
     * @example
     * // Update one Warehouses
     * const warehouses = await prisma.warehouses.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends warehousesUpdateArgs>(args: SelectSubset<T, warehousesUpdateArgs<ExtArgs>>): Prisma__warehousesClient<$Result.GetResult<Prisma.$warehousesPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Warehouses.
     * @param {warehousesDeleteManyArgs} args - Arguments to filter Warehouses to delete.
     * @example
     * // Delete a few Warehouses
     * const { count } = await prisma.warehouses.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends warehousesDeleteManyArgs>(args?: SelectSubset<T, warehousesDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Warehouses.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {warehousesUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Warehouses
     * const warehouses = await prisma.warehouses.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends warehousesUpdateManyArgs>(args: SelectSubset<T, warehousesUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Warehouses and returns the data updated in the database.
     * @param {warehousesUpdateManyAndReturnArgs} args - Arguments to update many Warehouses.
     * @example
     * // Update many Warehouses
     * const warehouses = await prisma.warehouses.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Warehouses and only return the `id`
     * const warehousesWithIdOnly = await prisma.warehouses.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends warehousesUpdateManyAndReturnArgs>(args: SelectSubset<T, warehousesUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$warehousesPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Warehouses.
     * @param {warehousesUpsertArgs} args - Arguments to update or create a Warehouses.
     * @example
     * // Update or create a Warehouses
     * const warehouses = await prisma.warehouses.upsert({
     *   create: {
     *     // ... data to create a Warehouses
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Warehouses we want to update
     *   }
     * })
     */
    upsert<T extends warehousesUpsertArgs>(args: SelectSubset<T, warehousesUpsertArgs<ExtArgs>>): Prisma__warehousesClient<$Result.GetResult<Prisma.$warehousesPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Warehouses.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {warehousesCountArgs} args - Arguments to filter Warehouses to count.
     * @example
     * // Count the number of Warehouses
     * const count = await prisma.warehouses.count({
     *   where: {
     *     // ... the filter for the Warehouses we want to count
     *   }
     * })
    **/
    count<T extends warehousesCountArgs>(
      args?: Subset<T, warehousesCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], WarehousesCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Warehouses.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WarehousesAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends WarehousesAggregateArgs>(args: Subset<T, WarehousesAggregateArgs>): Prisma.PrismaPromise<GetWarehousesAggregateType<T>>

    /**
     * Group by Warehouses.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {warehousesGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends warehousesGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: warehousesGroupByArgs['orderBy'] }
        : { orderBy?: warehousesGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, warehousesGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetWarehousesGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the warehouses model
   */
  readonly fields: warehousesFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for warehouses.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__warehousesClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    books_products<T extends warehouses$books_productsArgs<ExtArgs> = {}>(args?: Subset<T, warehouses$books_productsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$books_productsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the warehouses model
   */
  interface warehousesFieldRefs {
    readonly id: FieldRef<"warehouses", 'String'>
    readonly name: FieldRef<"warehouses", 'String'>
    readonly location: FieldRef<"warehouses", 'String'>
    readonly capacity: FieldRef<"warehouses", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * warehouses findUnique
   */
  export type warehousesFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the warehouses
     */
    select?: warehousesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the warehouses
     */
    omit?: warehousesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: warehousesInclude<ExtArgs> | null
    /**
     * Filter, which warehouses to fetch.
     */
    where: warehousesWhereUniqueInput
  }

  /**
   * warehouses findUniqueOrThrow
   */
  export type warehousesFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the warehouses
     */
    select?: warehousesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the warehouses
     */
    omit?: warehousesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: warehousesInclude<ExtArgs> | null
    /**
     * Filter, which warehouses to fetch.
     */
    where: warehousesWhereUniqueInput
  }

  /**
   * warehouses findFirst
   */
  export type warehousesFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the warehouses
     */
    select?: warehousesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the warehouses
     */
    omit?: warehousesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: warehousesInclude<ExtArgs> | null
    /**
     * Filter, which warehouses to fetch.
     */
    where?: warehousesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of warehouses to fetch.
     */
    orderBy?: warehousesOrderByWithRelationInput | warehousesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for warehouses.
     */
    cursor?: warehousesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` warehouses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` warehouses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of warehouses.
     */
    distinct?: WarehousesScalarFieldEnum | WarehousesScalarFieldEnum[]
  }

  /**
   * warehouses findFirstOrThrow
   */
  export type warehousesFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the warehouses
     */
    select?: warehousesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the warehouses
     */
    omit?: warehousesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: warehousesInclude<ExtArgs> | null
    /**
     * Filter, which warehouses to fetch.
     */
    where?: warehousesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of warehouses to fetch.
     */
    orderBy?: warehousesOrderByWithRelationInput | warehousesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for warehouses.
     */
    cursor?: warehousesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` warehouses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` warehouses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of warehouses.
     */
    distinct?: WarehousesScalarFieldEnum | WarehousesScalarFieldEnum[]
  }

  /**
   * warehouses findMany
   */
  export type warehousesFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the warehouses
     */
    select?: warehousesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the warehouses
     */
    omit?: warehousesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: warehousesInclude<ExtArgs> | null
    /**
     * Filter, which warehouses to fetch.
     */
    where?: warehousesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of warehouses to fetch.
     */
    orderBy?: warehousesOrderByWithRelationInput | warehousesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing warehouses.
     */
    cursor?: warehousesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` warehouses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` warehouses.
     */
    skip?: number
    distinct?: WarehousesScalarFieldEnum | WarehousesScalarFieldEnum[]
  }

  /**
   * warehouses create
   */
  export type warehousesCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the warehouses
     */
    select?: warehousesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the warehouses
     */
    omit?: warehousesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: warehousesInclude<ExtArgs> | null
    /**
     * The data needed to create a warehouses.
     */
    data: XOR<warehousesCreateInput, warehousesUncheckedCreateInput>
  }

  /**
   * warehouses createMany
   */
  export type warehousesCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many warehouses.
     */
    data: warehousesCreateManyInput | warehousesCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * warehouses createManyAndReturn
   */
  export type warehousesCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the warehouses
     */
    select?: warehousesSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the warehouses
     */
    omit?: warehousesOmit<ExtArgs> | null
    /**
     * The data used to create many warehouses.
     */
    data: warehousesCreateManyInput | warehousesCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * warehouses update
   */
  export type warehousesUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the warehouses
     */
    select?: warehousesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the warehouses
     */
    omit?: warehousesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: warehousesInclude<ExtArgs> | null
    /**
     * The data needed to update a warehouses.
     */
    data: XOR<warehousesUpdateInput, warehousesUncheckedUpdateInput>
    /**
     * Choose, which warehouses to update.
     */
    where: warehousesWhereUniqueInput
  }

  /**
   * warehouses updateMany
   */
  export type warehousesUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update warehouses.
     */
    data: XOR<warehousesUpdateManyMutationInput, warehousesUncheckedUpdateManyInput>
    /**
     * Filter which warehouses to update
     */
    where?: warehousesWhereInput
    /**
     * Limit how many warehouses to update.
     */
    limit?: number
  }

  /**
   * warehouses updateManyAndReturn
   */
  export type warehousesUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the warehouses
     */
    select?: warehousesSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the warehouses
     */
    omit?: warehousesOmit<ExtArgs> | null
    /**
     * The data used to update warehouses.
     */
    data: XOR<warehousesUpdateManyMutationInput, warehousesUncheckedUpdateManyInput>
    /**
     * Filter which warehouses to update
     */
    where?: warehousesWhereInput
    /**
     * Limit how many warehouses to update.
     */
    limit?: number
  }

  /**
   * warehouses upsert
   */
  export type warehousesUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the warehouses
     */
    select?: warehousesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the warehouses
     */
    omit?: warehousesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: warehousesInclude<ExtArgs> | null
    /**
     * The filter to search for the warehouses to update in case it exists.
     */
    where: warehousesWhereUniqueInput
    /**
     * In case the warehouses found by the `where` argument doesn't exist, create a new warehouses with this data.
     */
    create: XOR<warehousesCreateInput, warehousesUncheckedCreateInput>
    /**
     * In case the warehouses was found with the provided `where` argument, update it with this data.
     */
    update: XOR<warehousesUpdateInput, warehousesUncheckedUpdateInput>
  }

  /**
   * warehouses delete
   */
  export type warehousesDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the warehouses
     */
    select?: warehousesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the warehouses
     */
    omit?: warehousesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: warehousesInclude<ExtArgs> | null
    /**
     * Filter which warehouses to delete.
     */
    where: warehousesWhereUniqueInput
  }

  /**
   * warehouses deleteMany
   */
  export type warehousesDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which warehouses to delete
     */
    where?: warehousesWhereInput
    /**
     * Limit how many warehouses to delete.
     */
    limit?: number
  }

  /**
   * warehouses.books_products
   */
  export type warehouses$books_productsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the books_products
     */
    select?: books_productsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the books_products
     */
    omit?: books_productsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: books_productsInclude<ExtArgs> | null
    where?: books_productsWhereInput
    orderBy?: books_productsOrderByWithRelationInput | books_productsOrderByWithRelationInput[]
    cursor?: books_productsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Books_productsScalarFieldEnum | Books_productsScalarFieldEnum[]
  }

  /**
   * warehouses without action
   */
  export type warehousesDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the warehouses
     */
    select?: warehousesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the warehouses
     */
    omit?: warehousesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: warehousesInclude<ExtArgs> | null
  }


  /**
   * Model carts
   */

  export type AggregateCarts = {
    _count: CartsCountAggregateOutputType | null
    _min: CartsMinAggregateOutputType | null
    _max: CartsMaxAggregateOutputType | null
  }

  export type CartsMinAggregateOutputType = {
    id: string | null
    customer_id: string | null
    created_at: Date | null
  }

  export type CartsMaxAggregateOutputType = {
    id: string | null
    customer_id: string | null
    created_at: Date | null
  }

  export type CartsCountAggregateOutputType = {
    id: number
    customer_id: number
    created_at: number
    _all: number
  }


  export type CartsMinAggregateInputType = {
    id?: true
    customer_id?: true
    created_at?: true
  }

  export type CartsMaxAggregateInputType = {
    id?: true
    customer_id?: true
    created_at?: true
  }

  export type CartsCountAggregateInputType = {
    id?: true
    customer_id?: true
    created_at?: true
    _all?: true
  }

  export type CartsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which carts to aggregate.
     */
    where?: cartsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of carts to fetch.
     */
    orderBy?: cartsOrderByWithRelationInput | cartsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: cartsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` carts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` carts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned carts
    **/
    _count?: true | CartsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CartsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CartsMaxAggregateInputType
  }

  export type GetCartsAggregateType<T extends CartsAggregateArgs> = {
        [P in keyof T & keyof AggregateCarts]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCarts[P]>
      : GetScalarType<T[P], AggregateCarts[P]>
  }




  export type cartsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: cartsWhereInput
    orderBy?: cartsOrderByWithAggregationInput | cartsOrderByWithAggregationInput[]
    by: CartsScalarFieldEnum[] | CartsScalarFieldEnum
    having?: cartsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CartsCountAggregateInputType | true
    _min?: CartsMinAggregateInputType
    _max?: CartsMaxAggregateInputType
  }

  export type CartsGroupByOutputType = {
    id: string
    customer_id: string
    created_at: Date
    _count: CartsCountAggregateOutputType | null
    _min: CartsMinAggregateOutputType | null
    _max: CartsMaxAggregateOutputType | null
  }

  type GetCartsGroupByPayload<T extends cartsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CartsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CartsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CartsGroupByOutputType[P]>
            : GetScalarType<T[P], CartsGroupByOutputType[P]>
        }
      >
    >


  export type cartsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    customer_id?: boolean
    created_at?: boolean
    customer?: boolean | customersDefaultArgs<ExtArgs>
    cart_items?: boolean | carts$cart_itemsArgs<ExtArgs>
    invoices?: boolean | carts$invoicesArgs<ExtArgs>
    _count?: boolean | CartsCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["carts"]>

  export type cartsSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    customer_id?: boolean
    created_at?: boolean
    customer?: boolean | customersDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["carts"]>

  export type cartsSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    customer_id?: boolean
    created_at?: boolean
    customer?: boolean | customersDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["carts"]>

  export type cartsSelectScalar = {
    id?: boolean
    customer_id?: boolean
    created_at?: boolean
  }

  export type cartsOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "customer_id" | "created_at", ExtArgs["result"]["carts"]>
  export type cartsInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    customer?: boolean | customersDefaultArgs<ExtArgs>
    cart_items?: boolean | carts$cart_itemsArgs<ExtArgs>
    invoices?: boolean | carts$invoicesArgs<ExtArgs>
    _count?: boolean | CartsCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type cartsIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    customer?: boolean | customersDefaultArgs<ExtArgs>
  }
  export type cartsIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    customer?: boolean | customersDefaultArgs<ExtArgs>
  }

  export type $cartsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "carts"
    objects: {
      customer: Prisma.$customersPayload<ExtArgs>
      cart_items: Prisma.$cart_itemsPayload<ExtArgs>[]
      invoices: Prisma.$invoicesPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      customer_id: string
      created_at: Date
    }, ExtArgs["result"]["carts"]>
    composites: {}
  }

  type cartsGetPayload<S extends boolean | null | undefined | cartsDefaultArgs> = $Result.GetResult<Prisma.$cartsPayload, S>

  type cartsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<cartsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: CartsCountAggregateInputType | true
    }

  export interface cartsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['carts'], meta: { name: 'carts' } }
    /**
     * Find zero or one Carts that matches the filter.
     * @param {cartsFindUniqueArgs} args - Arguments to find a Carts
     * @example
     * // Get one Carts
     * const carts = await prisma.carts.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends cartsFindUniqueArgs>(args: SelectSubset<T, cartsFindUniqueArgs<ExtArgs>>): Prisma__cartsClient<$Result.GetResult<Prisma.$cartsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Carts that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {cartsFindUniqueOrThrowArgs} args - Arguments to find a Carts
     * @example
     * // Get one Carts
     * const carts = await prisma.carts.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends cartsFindUniqueOrThrowArgs>(args: SelectSubset<T, cartsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__cartsClient<$Result.GetResult<Prisma.$cartsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Carts that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {cartsFindFirstArgs} args - Arguments to find a Carts
     * @example
     * // Get one Carts
     * const carts = await prisma.carts.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends cartsFindFirstArgs>(args?: SelectSubset<T, cartsFindFirstArgs<ExtArgs>>): Prisma__cartsClient<$Result.GetResult<Prisma.$cartsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Carts that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {cartsFindFirstOrThrowArgs} args - Arguments to find a Carts
     * @example
     * // Get one Carts
     * const carts = await prisma.carts.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends cartsFindFirstOrThrowArgs>(args?: SelectSubset<T, cartsFindFirstOrThrowArgs<ExtArgs>>): Prisma__cartsClient<$Result.GetResult<Prisma.$cartsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Carts that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {cartsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Carts
     * const carts = await prisma.carts.findMany()
     * 
     * // Get first 10 Carts
     * const carts = await prisma.carts.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const cartsWithIdOnly = await prisma.carts.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends cartsFindManyArgs>(args?: SelectSubset<T, cartsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$cartsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Carts.
     * @param {cartsCreateArgs} args - Arguments to create a Carts.
     * @example
     * // Create one Carts
     * const Carts = await prisma.carts.create({
     *   data: {
     *     // ... data to create a Carts
     *   }
     * })
     * 
     */
    create<T extends cartsCreateArgs>(args: SelectSubset<T, cartsCreateArgs<ExtArgs>>): Prisma__cartsClient<$Result.GetResult<Prisma.$cartsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Carts.
     * @param {cartsCreateManyArgs} args - Arguments to create many Carts.
     * @example
     * // Create many Carts
     * const carts = await prisma.carts.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends cartsCreateManyArgs>(args?: SelectSubset<T, cartsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Carts and returns the data saved in the database.
     * @param {cartsCreateManyAndReturnArgs} args - Arguments to create many Carts.
     * @example
     * // Create many Carts
     * const carts = await prisma.carts.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Carts and only return the `id`
     * const cartsWithIdOnly = await prisma.carts.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends cartsCreateManyAndReturnArgs>(args?: SelectSubset<T, cartsCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$cartsPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Carts.
     * @param {cartsDeleteArgs} args - Arguments to delete one Carts.
     * @example
     * // Delete one Carts
     * const Carts = await prisma.carts.delete({
     *   where: {
     *     // ... filter to delete one Carts
     *   }
     * })
     * 
     */
    delete<T extends cartsDeleteArgs>(args: SelectSubset<T, cartsDeleteArgs<ExtArgs>>): Prisma__cartsClient<$Result.GetResult<Prisma.$cartsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Carts.
     * @param {cartsUpdateArgs} args - Arguments to update one Carts.
     * @example
     * // Update one Carts
     * const carts = await prisma.carts.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends cartsUpdateArgs>(args: SelectSubset<T, cartsUpdateArgs<ExtArgs>>): Prisma__cartsClient<$Result.GetResult<Prisma.$cartsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Carts.
     * @param {cartsDeleteManyArgs} args - Arguments to filter Carts to delete.
     * @example
     * // Delete a few Carts
     * const { count } = await prisma.carts.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends cartsDeleteManyArgs>(args?: SelectSubset<T, cartsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Carts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {cartsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Carts
     * const carts = await prisma.carts.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends cartsUpdateManyArgs>(args: SelectSubset<T, cartsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Carts and returns the data updated in the database.
     * @param {cartsUpdateManyAndReturnArgs} args - Arguments to update many Carts.
     * @example
     * // Update many Carts
     * const carts = await prisma.carts.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Carts and only return the `id`
     * const cartsWithIdOnly = await prisma.carts.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends cartsUpdateManyAndReturnArgs>(args: SelectSubset<T, cartsUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$cartsPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Carts.
     * @param {cartsUpsertArgs} args - Arguments to update or create a Carts.
     * @example
     * // Update or create a Carts
     * const carts = await prisma.carts.upsert({
     *   create: {
     *     // ... data to create a Carts
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Carts we want to update
     *   }
     * })
     */
    upsert<T extends cartsUpsertArgs>(args: SelectSubset<T, cartsUpsertArgs<ExtArgs>>): Prisma__cartsClient<$Result.GetResult<Prisma.$cartsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Carts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {cartsCountArgs} args - Arguments to filter Carts to count.
     * @example
     * // Count the number of Carts
     * const count = await prisma.carts.count({
     *   where: {
     *     // ... the filter for the Carts we want to count
     *   }
     * })
    **/
    count<T extends cartsCountArgs>(
      args?: Subset<T, cartsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CartsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Carts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CartsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends CartsAggregateArgs>(args: Subset<T, CartsAggregateArgs>): Prisma.PrismaPromise<GetCartsAggregateType<T>>

    /**
     * Group by Carts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {cartsGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends cartsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: cartsGroupByArgs['orderBy'] }
        : { orderBy?: cartsGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, cartsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCartsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the carts model
   */
  readonly fields: cartsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for carts.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__cartsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    customer<T extends customersDefaultArgs<ExtArgs> = {}>(args?: Subset<T, customersDefaultArgs<ExtArgs>>): Prisma__customersClient<$Result.GetResult<Prisma.$customersPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    cart_items<T extends carts$cart_itemsArgs<ExtArgs> = {}>(args?: Subset<T, carts$cart_itemsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$cart_itemsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    invoices<T extends carts$invoicesArgs<ExtArgs> = {}>(args?: Subset<T, carts$invoicesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$invoicesPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the carts model
   */
  interface cartsFieldRefs {
    readonly id: FieldRef<"carts", 'String'>
    readonly customer_id: FieldRef<"carts", 'String'>
    readonly created_at: FieldRef<"carts", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * carts findUnique
   */
  export type cartsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the carts
     */
    select?: cartsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the carts
     */
    omit?: cartsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: cartsInclude<ExtArgs> | null
    /**
     * Filter, which carts to fetch.
     */
    where: cartsWhereUniqueInput
  }

  /**
   * carts findUniqueOrThrow
   */
  export type cartsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the carts
     */
    select?: cartsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the carts
     */
    omit?: cartsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: cartsInclude<ExtArgs> | null
    /**
     * Filter, which carts to fetch.
     */
    where: cartsWhereUniqueInput
  }

  /**
   * carts findFirst
   */
  export type cartsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the carts
     */
    select?: cartsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the carts
     */
    omit?: cartsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: cartsInclude<ExtArgs> | null
    /**
     * Filter, which carts to fetch.
     */
    where?: cartsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of carts to fetch.
     */
    orderBy?: cartsOrderByWithRelationInput | cartsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for carts.
     */
    cursor?: cartsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` carts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` carts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of carts.
     */
    distinct?: CartsScalarFieldEnum | CartsScalarFieldEnum[]
  }

  /**
   * carts findFirstOrThrow
   */
  export type cartsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the carts
     */
    select?: cartsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the carts
     */
    omit?: cartsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: cartsInclude<ExtArgs> | null
    /**
     * Filter, which carts to fetch.
     */
    where?: cartsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of carts to fetch.
     */
    orderBy?: cartsOrderByWithRelationInput | cartsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for carts.
     */
    cursor?: cartsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` carts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` carts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of carts.
     */
    distinct?: CartsScalarFieldEnum | CartsScalarFieldEnum[]
  }

  /**
   * carts findMany
   */
  export type cartsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the carts
     */
    select?: cartsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the carts
     */
    omit?: cartsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: cartsInclude<ExtArgs> | null
    /**
     * Filter, which carts to fetch.
     */
    where?: cartsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of carts to fetch.
     */
    orderBy?: cartsOrderByWithRelationInput | cartsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing carts.
     */
    cursor?: cartsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` carts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` carts.
     */
    skip?: number
    distinct?: CartsScalarFieldEnum | CartsScalarFieldEnum[]
  }

  /**
   * carts create
   */
  export type cartsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the carts
     */
    select?: cartsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the carts
     */
    omit?: cartsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: cartsInclude<ExtArgs> | null
    /**
     * The data needed to create a carts.
     */
    data: XOR<cartsCreateInput, cartsUncheckedCreateInput>
  }

  /**
   * carts createMany
   */
  export type cartsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many carts.
     */
    data: cartsCreateManyInput | cartsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * carts createManyAndReturn
   */
  export type cartsCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the carts
     */
    select?: cartsSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the carts
     */
    omit?: cartsOmit<ExtArgs> | null
    /**
     * The data used to create many carts.
     */
    data: cartsCreateManyInput | cartsCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: cartsIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * carts update
   */
  export type cartsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the carts
     */
    select?: cartsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the carts
     */
    omit?: cartsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: cartsInclude<ExtArgs> | null
    /**
     * The data needed to update a carts.
     */
    data: XOR<cartsUpdateInput, cartsUncheckedUpdateInput>
    /**
     * Choose, which carts to update.
     */
    where: cartsWhereUniqueInput
  }

  /**
   * carts updateMany
   */
  export type cartsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update carts.
     */
    data: XOR<cartsUpdateManyMutationInput, cartsUncheckedUpdateManyInput>
    /**
     * Filter which carts to update
     */
    where?: cartsWhereInput
    /**
     * Limit how many carts to update.
     */
    limit?: number
  }

  /**
   * carts updateManyAndReturn
   */
  export type cartsUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the carts
     */
    select?: cartsSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the carts
     */
    omit?: cartsOmit<ExtArgs> | null
    /**
     * The data used to update carts.
     */
    data: XOR<cartsUpdateManyMutationInput, cartsUncheckedUpdateManyInput>
    /**
     * Filter which carts to update
     */
    where?: cartsWhereInput
    /**
     * Limit how many carts to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: cartsIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * carts upsert
   */
  export type cartsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the carts
     */
    select?: cartsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the carts
     */
    omit?: cartsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: cartsInclude<ExtArgs> | null
    /**
     * The filter to search for the carts to update in case it exists.
     */
    where: cartsWhereUniqueInput
    /**
     * In case the carts found by the `where` argument doesn't exist, create a new carts with this data.
     */
    create: XOR<cartsCreateInput, cartsUncheckedCreateInput>
    /**
     * In case the carts was found with the provided `where` argument, update it with this data.
     */
    update: XOR<cartsUpdateInput, cartsUncheckedUpdateInput>
  }

  /**
   * carts delete
   */
  export type cartsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the carts
     */
    select?: cartsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the carts
     */
    omit?: cartsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: cartsInclude<ExtArgs> | null
    /**
     * Filter which carts to delete.
     */
    where: cartsWhereUniqueInput
  }

  /**
   * carts deleteMany
   */
  export type cartsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which carts to delete
     */
    where?: cartsWhereInput
    /**
     * Limit how many carts to delete.
     */
    limit?: number
  }

  /**
   * carts.cart_items
   */
  export type carts$cart_itemsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the cart_items
     */
    select?: cart_itemsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the cart_items
     */
    omit?: cart_itemsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: cart_itemsInclude<ExtArgs> | null
    where?: cart_itemsWhereInput
    orderBy?: cart_itemsOrderByWithRelationInput | cart_itemsOrderByWithRelationInput[]
    cursor?: cart_itemsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Cart_itemsScalarFieldEnum | Cart_itemsScalarFieldEnum[]
  }

  /**
   * carts.invoices
   */
  export type carts$invoicesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the invoices
     */
    select?: invoicesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the invoices
     */
    omit?: invoicesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: invoicesInclude<ExtArgs> | null
    where?: invoicesWhereInput
    orderBy?: invoicesOrderByWithRelationInput | invoicesOrderByWithRelationInput[]
    cursor?: invoicesWhereUniqueInput
    take?: number
    skip?: number
    distinct?: InvoicesScalarFieldEnum | InvoicesScalarFieldEnum[]
  }

  /**
   * carts without action
   */
  export type cartsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the carts
     */
    select?: cartsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the carts
     */
    omit?: cartsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: cartsInclude<ExtArgs> | null
  }


  /**
   * Model books_products
   */

  export type AggregateBooks_products = {
    _count: Books_productsCountAggregateOutputType | null
    _avg: Books_productsAvgAggregateOutputType | null
    _sum: Books_productsSumAggregateOutputType | null
    _min: Books_productsMinAggregateOutputType | null
    _max: Books_productsMaxAggregateOutputType | null
  }

  export type Books_productsAvgAggregateOutputType = {
    price: Decimal | null
    stock: number | null
  }

  export type Books_productsSumAggregateOutputType = {
    price: Decimal | null
    stock: number | null
  }

  export type Books_productsMinAggregateOutputType = {
    id: string | null
    book_id: string | null
    price: Decimal | null
    stock: number | null
    format: string | null
    warehouse_id: string | null
  }

  export type Books_productsMaxAggregateOutputType = {
    id: string | null
    book_id: string | null
    price: Decimal | null
    stock: number | null
    format: string | null
    warehouse_id: string | null
  }

  export type Books_productsCountAggregateOutputType = {
    id: number
    book_id: number
    price: number
    stock: number
    format: number
    warehouse_id: number
    _all: number
  }


  export type Books_productsAvgAggregateInputType = {
    price?: true
    stock?: true
  }

  export type Books_productsSumAggregateInputType = {
    price?: true
    stock?: true
  }

  export type Books_productsMinAggregateInputType = {
    id?: true
    book_id?: true
    price?: true
    stock?: true
    format?: true
    warehouse_id?: true
  }

  export type Books_productsMaxAggregateInputType = {
    id?: true
    book_id?: true
    price?: true
    stock?: true
    format?: true
    warehouse_id?: true
  }

  export type Books_productsCountAggregateInputType = {
    id?: true
    book_id?: true
    price?: true
    stock?: true
    format?: true
    warehouse_id?: true
    _all?: true
  }

  export type Books_productsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which books_products to aggregate.
     */
    where?: books_productsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of books_products to fetch.
     */
    orderBy?: books_productsOrderByWithRelationInput | books_productsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: books_productsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` books_products from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` books_products.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned books_products
    **/
    _count?: true | Books_productsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: Books_productsAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: Books_productsSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Books_productsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Books_productsMaxAggregateInputType
  }

  export type GetBooks_productsAggregateType<T extends Books_productsAggregateArgs> = {
        [P in keyof T & keyof AggregateBooks_products]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateBooks_products[P]>
      : GetScalarType<T[P], AggregateBooks_products[P]>
  }




  export type books_productsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: books_productsWhereInput
    orderBy?: books_productsOrderByWithAggregationInput | books_productsOrderByWithAggregationInput[]
    by: Books_productsScalarFieldEnum[] | Books_productsScalarFieldEnum
    having?: books_productsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Books_productsCountAggregateInputType | true
    _avg?: Books_productsAvgAggregateInputType
    _sum?: Books_productsSumAggregateInputType
    _min?: Books_productsMinAggregateInputType
    _max?: Books_productsMaxAggregateInputType
  }

  export type Books_productsGroupByOutputType = {
    id: string
    book_id: string
    price: Decimal
    stock: number
    format: string
    warehouse_id: string
    _count: Books_productsCountAggregateOutputType | null
    _avg: Books_productsAvgAggregateOutputType | null
    _sum: Books_productsSumAggregateOutputType | null
    _min: Books_productsMinAggregateOutputType | null
    _max: Books_productsMaxAggregateOutputType | null
  }

  type GetBooks_productsGroupByPayload<T extends books_productsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Books_productsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Books_productsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Books_productsGroupByOutputType[P]>
            : GetScalarType<T[P], Books_productsGroupByOutputType[P]>
        }
      >
    >


  export type books_productsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    book_id?: boolean
    price?: boolean
    stock?: boolean
    format?: boolean
    warehouse_id?: boolean
    book?: boolean | booksDefaultArgs<ExtArgs>
    warehouse?: boolean | warehousesDefaultArgs<ExtArgs>
    invoice_items?: boolean | books_products$invoice_itemsArgs<ExtArgs>
    cart_items?: boolean | books_products$cart_itemsArgs<ExtArgs>
    _count?: boolean | Books_productsCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["books_products"]>

  export type books_productsSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    book_id?: boolean
    price?: boolean
    stock?: boolean
    format?: boolean
    warehouse_id?: boolean
    book?: boolean | booksDefaultArgs<ExtArgs>
    warehouse?: boolean | warehousesDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["books_products"]>

  export type books_productsSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    book_id?: boolean
    price?: boolean
    stock?: boolean
    format?: boolean
    warehouse_id?: boolean
    book?: boolean | booksDefaultArgs<ExtArgs>
    warehouse?: boolean | warehousesDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["books_products"]>

  export type books_productsSelectScalar = {
    id?: boolean
    book_id?: boolean
    price?: boolean
    stock?: boolean
    format?: boolean
    warehouse_id?: boolean
  }

  export type books_productsOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "book_id" | "price" | "stock" | "format" | "warehouse_id", ExtArgs["result"]["books_products"]>
  export type books_productsInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    book?: boolean | booksDefaultArgs<ExtArgs>
    warehouse?: boolean | warehousesDefaultArgs<ExtArgs>
    invoice_items?: boolean | books_products$invoice_itemsArgs<ExtArgs>
    cart_items?: boolean | books_products$cart_itemsArgs<ExtArgs>
    _count?: boolean | Books_productsCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type books_productsIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    book?: boolean | booksDefaultArgs<ExtArgs>
    warehouse?: boolean | warehousesDefaultArgs<ExtArgs>
  }
  export type books_productsIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    book?: boolean | booksDefaultArgs<ExtArgs>
    warehouse?: boolean | warehousesDefaultArgs<ExtArgs>
  }

  export type $books_productsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "books_products"
    objects: {
      book: Prisma.$booksPayload<ExtArgs>
      warehouse: Prisma.$warehousesPayload<ExtArgs>
      invoice_items: Prisma.$invoice_itemsPayload<ExtArgs>[]
      cart_items: Prisma.$cart_itemsPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      book_id: string
      price: Prisma.Decimal
      stock: number
      format: string
      warehouse_id: string
    }, ExtArgs["result"]["books_products"]>
    composites: {}
  }

  type books_productsGetPayload<S extends boolean | null | undefined | books_productsDefaultArgs> = $Result.GetResult<Prisma.$books_productsPayload, S>

  type books_productsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<books_productsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: Books_productsCountAggregateInputType | true
    }

  export interface books_productsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['books_products'], meta: { name: 'books_products' } }
    /**
     * Find zero or one Books_products that matches the filter.
     * @param {books_productsFindUniqueArgs} args - Arguments to find a Books_products
     * @example
     * // Get one Books_products
     * const books_products = await prisma.books_products.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends books_productsFindUniqueArgs>(args: SelectSubset<T, books_productsFindUniqueArgs<ExtArgs>>): Prisma__books_productsClient<$Result.GetResult<Prisma.$books_productsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Books_products that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {books_productsFindUniqueOrThrowArgs} args - Arguments to find a Books_products
     * @example
     * // Get one Books_products
     * const books_products = await prisma.books_products.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends books_productsFindUniqueOrThrowArgs>(args: SelectSubset<T, books_productsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__books_productsClient<$Result.GetResult<Prisma.$books_productsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Books_products that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {books_productsFindFirstArgs} args - Arguments to find a Books_products
     * @example
     * // Get one Books_products
     * const books_products = await prisma.books_products.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends books_productsFindFirstArgs>(args?: SelectSubset<T, books_productsFindFirstArgs<ExtArgs>>): Prisma__books_productsClient<$Result.GetResult<Prisma.$books_productsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Books_products that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {books_productsFindFirstOrThrowArgs} args - Arguments to find a Books_products
     * @example
     * // Get one Books_products
     * const books_products = await prisma.books_products.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends books_productsFindFirstOrThrowArgs>(args?: SelectSubset<T, books_productsFindFirstOrThrowArgs<ExtArgs>>): Prisma__books_productsClient<$Result.GetResult<Prisma.$books_productsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Books_products that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {books_productsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Books_products
     * const books_products = await prisma.books_products.findMany()
     * 
     * // Get first 10 Books_products
     * const books_products = await prisma.books_products.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const books_productsWithIdOnly = await prisma.books_products.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends books_productsFindManyArgs>(args?: SelectSubset<T, books_productsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$books_productsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Books_products.
     * @param {books_productsCreateArgs} args - Arguments to create a Books_products.
     * @example
     * // Create one Books_products
     * const Books_products = await prisma.books_products.create({
     *   data: {
     *     // ... data to create a Books_products
     *   }
     * })
     * 
     */
    create<T extends books_productsCreateArgs>(args: SelectSubset<T, books_productsCreateArgs<ExtArgs>>): Prisma__books_productsClient<$Result.GetResult<Prisma.$books_productsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Books_products.
     * @param {books_productsCreateManyArgs} args - Arguments to create many Books_products.
     * @example
     * // Create many Books_products
     * const books_products = await prisma.books_products.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends books_productsCreateManyArgs>(args?: SelectSubset<T, books_productsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Books_products and returns the data saved in the database.
     * @param {books_productsCreateManyAndReturnArgs} args - Arguments to create many Books_products.
     * @example
     * // Create many Books_products
     * const books_products = await prisma.books_products.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Books_products and only return the `id`
     * const books_productsWithIdOnly = await prisma.books_products.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends books_productsCreateManyAndReturnArgs>(args?: SelectSubset<T, books_productsCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$books_productsPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Books_products.
     * @param {books_productsDeleteArgs} args - Arguments to delete one Books_products.
     * @example
     * // Delete one Books_products
     * const Books_products = await prisma.books_products.delete({
     *   where: {
     *     // ... filter to delete one Books_products
     *   }
     * })
     * 
     */
    delete<T extends books_productsDeleteArgs>(args: SelectSubset<T, books_productsDeleteArgs<ExtArgs>>): Prisma__books_productsClient<$Result.GetResult<Prisma.$books_productsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Books_products.
     * @param {books_productsUpdateArgs} args - Arguments to update one Books_products.
     * @example
     * // Update one Books_products
     * const books_products = await prisma.books_products.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends books_productsUpdateArgs>(args: SelectSubset<T, books_productsUpdateArgs<ExtArgs>>): Prisma__books_productsClient<$Result.GetResult<Prisma.$books_productsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Books_products.
     * @param {books_productsDeleteManyArgs} args - Arguments to filter Books_products to delete.
     * @example
     * // Delete a few Books_products
     * const { count } = await prisma.books_products.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends books_productsDeleteManyArgs>(args?: SelectSubset<T, books_productsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Books_products.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {books_productsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Books_products
     * const books_products = await prisma.books_products.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends books_productsUpdateManyArgs>(args: SelectSubset<T, books_productsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Books_products and returns the data updated in the database.
     * @param {books_productsUpdateManyAndReturnArgs} args - Arguments to update many Books_products.
     * @example
     * // Update many Books_products
     * const books_products = await prisma.books_products.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Books_products and only return the `id`
     * const books_productsWithIdOnly = await prisma.books_products.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends books_productsUpdateManyAndReturnArgs>(args: SelectSubset<T, books_productsUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$books_productsPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Books_products.
     * @param {books_productsUpsertArgs} args - Arguments to update or create a Books_products.
     * @example
     * // Update or create a Books_products
     * const books_products = await prisma.books_products.upsert({
     *   create: {
     *     // ... data to create a Books_products
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Books_products we want to update
     *   }
     * })
     */
    upsert<T extends books_productsUpsertArgs>(args: SelectSubset<T, books_productsUpsertArgs<ExtArgs>>): Prisma__books_productsClient<$Result.GetResult<Prisma.$books_productsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Books_products.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {books_productsCountArgs} args - Arguments to filter Books_products to count.
     * @example
     * // Count the number of Books_products
     * const count = await prisma.books_products.count({
     *   where: {
     *     // ... the filter for the Books_products we want to count
     *   }
     * })
    **/
    count<T extends books_productsCountArgs>(
      args?: Subset<T, books_productsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Books_productsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Books_products.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Books_productsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends Books_productsAggregateArgs>(args: Subset<T, Books_productsAggregateArgs>): Prisma.PrismaPromise<GetBooks_productsAggregateType<T>>

    /**
     * Group by Books_products.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {books_productsGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends books_productsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: books_productsGroupByArgs['orderBy'] }
        : { orderBy?: books_productsGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, books_productsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetBooks_productsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the books_products model
   */
  readonly fields: books_productsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for books_products.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__books_productsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    book<T extends booksDefaultArgs<ExtArgs> = {}>(args?: Subset<T, booksDefaultArgs<ExtArgs>>): Prisma__booksClient<$Result.GetResult<Prisma.$booksPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    warehouse<T extends warehousesDefaultArgs<ExtArgs> = {}>(args?: Subset<T, warehousesDefaultArgs<ExtArgs>>): Prisma__warehousesClient<$Result.GetResult<Prisma.$warehousesPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    invoice_items<T extends books_products$invoice_itemsArgs<ExtArgs> = {}>(args?: Subset<T, books_products$invoice_itemsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$invoice_itemsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    cart_items<T extends books_products$cart_itemsArgs<ExtArgs> = {}>(args?: Subset<T, books_products$cart_itemsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$cart_itemsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the books_products model
   */
  interface books_productsFieldRefs {
    readonly id: FieldRef<"books_products", 'String'>
    readonly book_id: FieldRef<"books_products", 'String'>
    readonly price: FieldRef<"books_products", 'Decimal'>
    readonly stock: FieldRef<"books_products", 'Int'>
    readonly format: FieldRef<"books_products", 'String'>
    readonly warehouse_id: FieldRef<"books_products", 'String'>
  }
    

  // Custom InputTypes
  /**
   * books_products findUnique
   */
  export type books_productsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the books_products
     */
    select?: books_productsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the books_products
     */
    omit?: books_productsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: books_productsInclude<ExtArgs> | null
    /**
     * Filter, which books_products to fetch.
     */
    where: books_productsWhereUniqueInput
  }

  /**
   * books_products findUniqueOrThrow
   */
  export type books_productsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the books_products
     */
    select?: books_productsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the books_products
     */
    omit?: books_productsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: books_productsInclude<ExtArgs> | null
    /**
     * Filter, which books_products to fetch.
     */
    where: books_productsWhereUniqueInput
  }

  /**
   * books_products findFirst
   */
  export type books_productsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the books_products
     */
    select?: books_productsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the books_products
     */
    omit?: books_productsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: books_productsInclude<ExtArgs> | null
    /**
     * Filter, which books_products to fetch.
     */
    where?: books_productsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of books_products to fetch.
     */
    orderBy?: books_productsOrderByWithRelationInput | books_productsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for books_products.
     */
    cursor?: books_productsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` books_products from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` books_products.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of books_products.
     */
    distinct?: Books_productsScalarFieldEnum | Books_productsScalarFieldEnum[]
  }

  /**
   * books_products findFirstOrThrow
   */
  export type books_productsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the books_products
     */
    select?: books_productsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the books_products
     */
    omit?: books_productsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: books_productsInclude<ExtArgs> | null
    /**
     * Filter, which books_products to fetch.
     */
    where?: books_productsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of books_products to fetch.
     */
    orderBy?: books_productsOrderByWithRelationInput | books_productsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for books_products.
     */
    cursor?: books_productsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` books_products from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` books_products.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of books_products.
     */
    distinct?: Books_productsScalarFieldEnum | Books_productsScalarFieldEnum[]
  }

  /**
   * books_products findMany
   */
  export type books_productsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the books_products
     */
    select?: books_productsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the books_products
     */
    omit?: books_productsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: books_productsInclude<ExtArgs> | null
    /**
     * Filter, which books_products to fetch.
     */
    where?: books_productsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of books_products to fetch.
     */
    orderBy?: books_productsOrderByWithRelationInput | books_productsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing books_products.
     */
    cursor?: books_productsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` books_products from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` books_products.
     */
    skip?: number
    distinct?: Books_productsScalarFieldEnum | Books_productsScalarFieldEnum[]
  }

  /**
   * books_products create
   */
  export type books_productsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the books_products
     */
    select?: books_productsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the books_products
     */
    omit?: books_productsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: books_productsInclude<ExtArgs> | null
    /**
     * The data needed to create a books_products.
     */
    data: XOR<books_productsCreateInput, books_productsUncheckedCreateInput>
  }

  /**
   * books_products createMany
   */
  export type books_productsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many books_products.
     */
    data: books_productsCreateManyInput | books_productsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * books_products createManyAndReturn
   */
  export type books_productsCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the books_products
     */
    select?: books_productsSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the books_products
     */
    omit?: books_productsOmit<ExtArgs> | null
    /**
     * The data used to create many books_products.
     */
    data: books_productsCreateManyInput | books_productsCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: books_productsIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * books_products update
   */
  export type books_productsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the books_products
     */
    select?: books_productsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the books_products
     */
    omit?: books_productsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: books_productsInclude<ExtArgs> | null
    /**
     * The data needed to update a books_products.
     */
    data: XOR<books_productsUpdateInput, books_productsUncheckedUpdateInput>
    /**
     * Choose, which books_products to update.
     */
    where: books_productsWhereUniqueInput
  }

  /**
   * books_products updateMany
   */
  export type books_productsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update books_products.
     */
    data: XOR<books_productsUpdateManyMutationInput, books_productsUncheckedUpdateManyInput>
    /**
     * Filter which books_products to update
     */
    where?: books_productsWhereInput
    /**
     * Limit how many books_products to update.
     */
    limit?: number
  }

  /**
   * books_products updateManyAndReturn
   */
  export type books_productsUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the books_products
     */
    select?: books_productsSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the books_products
     */
    omit?: books_productsOmit<ExtArgs> | null
    /**
     * The data used to update books_products.
     */
    data: XOR<books_productsUpdateManyMutationInput, books_productsUncheckedUpdateManyInput>
    /**
     * Filter which books_products to update
     */
    where?: books_productsWhereInput
    /**
     * Limit how many books_products to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: books_productsIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * books_products upsert
   */
  export type books_productsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the books_products
     */
    select?: books_productsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the books_products
     */
    omit?: books_productsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: books_productsInclude<ExtArgs> | null
    /**
     * The filter to search for the books_products to update in case it exists.
     */
    where: books_productsWhereUniqueInput
    /**
     * In case the books_products found by the `where` argument doesn't exist, create a new books_products with this data.
     */
    create: XOR<books_productsCreateInput, books_productsUncheckedCreateInput>
    /**
     * In case the books_products was found with the provided `where` argument, update it with this data.
     */
    update: XOR<books_productsUpdateInput, books_productsUncheckedUpdateInput>
  }

  /**
   * books_products delete
   */
  export type books_productsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the books_products
     */
    select?: books_productsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the books_products
     */
    omit?: books_productsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: books_productsInclude<ExtArgs> | null
    /**
     * Filter which books_products to delete.
     */
    where: books_productsWhereUniqueInput
  }

  /**
   * books_products deleteMany
   */
  export type books_productsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which books_products to delete
     */
    where?: books_productsWhereInput
    /**
     * Limit how many books_products to delete.
     */
    limit?: number
  }

  /**
   * books_products.invoice_items
   */
  export type books_products$invoice_itemsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the invoice_items
     */
    select?: invoice_itemsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the invoice_items
     */
    omit?: invoice_itemsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: invoice_itemsInclude<ExtArgs> | null
    where?: invoice_itemsWhereInput
    orderBy?: invoice_itemsOrderByWithRelationInput | invoice_itemsOrderByWithRelationInput[]
    cursor?: invoice_itemsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Invoice_itemsScalarFieldEnum | Invoice_itemsScalarFieldEnum[]
  }

  /**
   * books_products.cart_items
   */
  export type books_products$cart_itemsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the cart_items
     */
    select?: cart_itemsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the cart_items
     */
    omit?: cart_itemsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: cart_itemsInclude<ExtArgs> | null
    where?: cart_itemsWhereInput
    orderBy?: cart_itemsOrderByWithRelationInput | cart_itemsOrderByWithRelationInput[]
    cursor?: cart_itemsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Cart_itemsScalarFieldEnum | Cart_itemsScalarFieldEnum[]
  }

  /**
   * books_products without action
   */
  export type books_productsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the books_products
     */
    select?: books_productsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the books_products
     */
    omit?: books_productsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: books_productsInclude<ExtArgs> | null
  }


  /**
   * Model invoices
   */

  export type AggregateInvoices = {
    _count: InvoicesCountAggregateOutputType | null
    _avg: InvoicesAvgAggregateOutputType | null
    _sum: InvoicesSumAggregateOutputType | null
    _min: InvoicesMinAggregateOutputType | null
    _max: InvoicesMaxAggregateOutputType | null
  }

  export type InvoicesAvgAggregateOutputType = {
    total_amount: Decimal | null
  }

  export type InvoicesSumAggregateOutputType = {
    total_amount: Decimal | null
  }

  export type InvoicesMinAggregateOutputType = {
    id: string | null
    total_amount: Decimal | null
    issued_at: Date | null
    status: string | null
    customer_id: string | null
    cart_id: string | null
  }

  export type InvoicesMaxAggregateOutputType = {
    id: string | null
    total_amount: Decimal | null
    issued_at: Date | null
    status: string | null
    customer_id: string | null
    cart_id: string | null
  }

  export type InvoicesCountAggregateOutputType = {
    id: number
    total_amount: number
    issued_at: number
    status: number
    customer_id: number
    cart_id: number
    _all: number
  }


  export type InvoicesAvgAggregateInputType = {
    total_amount?: true
  }

  export type InvoicesSumAggregateInputType = {
    total_amount?: true
  }

  export type InvoicesMinAggregateInputType = {
    id?: true
    total_amount?: true
    issued_at?: true
    status?: true
    customer_id?: true
    cart_id?: true
  }

  export type InvoicesMaxAggregateInputType = {
    id?: true
    total_amount?: true
    issued_at?: true
    status?: true
    customer_id?: true
    cart_id?: true
  }

  export type InvoicesCountAggregateInputType = {
    id?: true
    total_amount?: true
    issued_at?: true
    status?: true
    customer_id?: true
    cart_id?: true
    _all?: true
  }

  export type InvoicesAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which invoices to aggregate.
     */
    where?: invoicesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of invoices to fetch.
     */
    orderBy?: invoicesOrderByWithRelationInput | invoicesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: invoicesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` invoices from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` invoices.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned invoices
    **/
    _count?: true | InvoicesCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: InvoicesAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: InvoicesSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: InvoicesMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: InvoicesMaxAggregateInputType
  }

  export type GetInvoicesAggregateType<T extends InvoicesAggregateArgs> = {
        [P in keyof T & keyof AggregateInvoices]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateInvoices[P]>
      : GetScalarType<T[P], AggregateInvoices[P]>
  }




  export type invoicesGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: invoicesWhereInput
    orderBy?: invoicesOrderByWithAggregationInput | invoicesOrderByWithAggregationInput[]
    by: InvoicesScalarFieldEnum[] | InvoicesScalarFieldEnum
    having?: invoicesScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: InvoicesCountAggregateInputType | true
    _avg?: InvoicesAvgAggregateInputType
    _sum?: InvoicesSumAggregateInputType
    _min?: InvoicesMinAggregateInputType
    _max?: InvoicesMaxAggregateInputType
  }

  export type InvoicesGroupByOutputType = {
    id: string
    total_amount: Decimal
    issued_at: Date
    status: string
    customer_id: string
    cart_id: string
    _count: InvoicesCountAggregateOutputType | null
    _avg: InvoicesAvgAggregateOutputType | null
    _sum: InvoicesSumAggregateOutputType | null
    _min: InvoicesMinAggregateOutputType | null
    _max: InvoicesMaxAggregateOutputType | null
  }

  type GetInvoicesGroupByPayload<T extends invoicesGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<InvoicesGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof InvoicesGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], InvoicesGroupByOutputType[P]>
            : GetScalarType<T[P], InvoicesGroupByOutputType[P]>
        }
      >
    >


  export type invoicesSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    total_amount?: boolean
    issued_at?: boolean
    status?: boolean
    customer_id?: boolean
    cart_id?: boolean
    customer?: boolean | customersDefaultArgs<ExtArgs>
    cart?: boolean | cartsDefaultArgs<ExtArgs>
    invoice_items?: boolean | invoices$invoice_itemsArgs<ExtArgs>
    _count?: boolean | InvoicesCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["invoices"]>

  export type invoicesSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    total_amount?: boolean
    issued_at?: boolean
    status?: boolean
    customer_id?: boolean
    cart_id?: boolean
    customer?: boolean | customersDefaultArgs<ExtArgs>
    cart?: boolean | cartsDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["invoices"]>

  export type invoicesSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    total_amount?: boolean
    issued_at?: boolean
    status?: boolean
    customer_id?: boolean
    cart_id?: boolean
    customer?: boolean | customersDefaultArgs<ExtArgs>
    cart?: boolean | cartsDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["invoices"]>

  export type invoicesSelectScalar = {
    id?: boolean
    total_amount?: boolean
    issued_at?: boolean
    status?: boolean
    customer_id?: boolean
    cart_id?: boolean
  }

  export type invoicesOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "total_amount" | "issued_at" | "status" | "customer_id" | "cart_id", ExtArgs["result"]["invoices"]>
  export type invoicesInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    customer?: boolean | customersDefaultArgs<ExtArgs>
    cart?: boolean | cartsDefaultArgs<ExtArgs>
    invoice_items?: boolean | invoices$invoice_itemsArgs<ExtArgs>
    _count?: boolean | InvoicesCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type invoicesIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    customer?: boolean | customersDefaultArgs<ExtArgs>
    cart?: boolean | cartsDefaultArgs<ExtArgs>
  }
  export type invoicesIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    customer?: boolean | customersDefaultArgs<ExtArgs>
    cart?: boolean | cartsDefaultArgs<ExtArgs>
  }

  export type $invoicesPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "invoices"
    objects: {
      customer: Prisma.$customersPayload<ExtArgs>
      cart: Prisma.$cartsPayload<ExtArgs>
      invoice_items: Prisma.$invoice_itemsPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      total_amount: Prisma.Decimal
      issued_at: Date
      status: string
      customer_id: string
      cart_id: string
    }, ExtArgs["result"]["invoices"]>
    composites: {}
  }

  type invoicesGetPayload<S extends boolean | null | undefined | invoicesDefaultArgs> = $Result.GetResult<Prisma.$invoicesPayload, S>

  type invoicesCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<invoicesFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: InvoicesCountAggregateInputType | true
    }

  export interface invoicesDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['invoices'], meta: { name: 'invoices' } }
    /**
     * Find zero or one Invoices that matches the filter.
     * @param {invoicesFindUniqueArgs} args - Arguments to find a Invoices
     * @example
     * // Get one Invoices
     * const invoices = await prisma.invoices.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends invoicesFindUniqueArgs>(args: SelectSubset<T, invoicesFindUniqueArgs<ExtArgs>>): Prisma__invoicesClient<$Result.GetResult<Prisma.$invoicesPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Invoices that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {invoicesFindUniqueOrThrowArgs} args - Arguments to find a Invoices
     * @example
     * // Get one Invoices
     * const invoices = await prisma.invoices.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends invoicesFindUniqueOrThrowArgs>(args: SelectSubset<T, invoicesFindUniqueOrThrowArgs<ExtArgs>>): Prisma__invoicesClient<$Result.GetResult<Prisma.$invoicesPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Invoices that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {invoicesFindFirstArgs} args - Arguments to find a Invoices
     * @example
     * // Get one Invoices
     * const invoices = await prisma.invoices.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends invoicesFindFirstArgs>(args?: SelectSubset<T, invoicesFindFirstArgs<ExtArgs>>): Prisma__invoicesClient<$Result.GetResult<Prisma.$invoicesPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Invoices that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {invoicesFindFirstOrThrowArgs} args - Arguments to find a Invoices
     * @example
     * // Get one Invoices
     * const invoices = await prisma.invoices.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends invoicesFindFirstOrThrowArgs>(args?: SelectSubset<T, invoicesFindFirstOrThrowArgs<ExtArgs>>): Prisma__invoicesClient<$Result.GetResult<Prisma.$invoicesPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Invoices that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {invoicesFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Invoices
     * const invoices = await prisma.invoices.findMany()
     * 
     * // Get first 10 Invoices
     * const invoices = await prisma.invoices.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const invoicesWithIdOnly = await prisma.invoices.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends invoicesFindManyArgs>(args?: SelectSubset<T, invoicesFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$invoicesPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Invoices.
     * @param {invoicesCreateArgs} args - Arguments to create a Invoices.
     * @example
     * // Create one Invoices
     * const Invoices = await prisma.invoices.create({
     *   data: {
     *     // ... data to create a Invoices
     *   }
     * })
     * 
     */
    create<T extends invoicesCreateArgs>(args: SelectSubset<T, invoicesCreateArgs<ExtArgs>>): Prisma__invoicesClient<$Result.GetResult<Prisma.$invoicesPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Invoices.
     * @param {invoicesCreateManyArgs} args - Arguments to create many Invoices.
     * @example
     * // Create many Invoices
     * const invoices = await prisma.invoices.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends invoicesCreateManyArgs>(args?: SelectSubset<T, invoicesCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Invoices and returns the data saved in the database.
     * @param {invoicesCreateManyAndReturnArgs} args - Arguments to create many Invoices.
     * @example
     * // Create many Invoices
     * const invoices = await prisma.invoices.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Invoices and only return the `id`
     * const invoicesWithIdOnly = await prisma.invoices.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends invoicesCreateManyAndReturnArgs>(args?: SelectSubset<T, invoicesCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$invoicesPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Invoices.
     * @param {invoicesDeleteArgs} args - Arguments to delete one Invoices.
     * @example
     * // Delete one Invoices
     * const Invoices = await prisma.invoices.delete({
     *   where: {
     *     // ... filter to delete one Invoices
     *   }
     * })
     * 
     */
    delete<T extends invoicesDeleteArgs>(args: SelectSubset<T, invoicesDeleteArgs<ExtArgs>>): Prisma__invoicesClient<$Result.GetResult<Prisma.$invoicesPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Invoices.
     * @param {invoicesUpdateArgs} args - Arguments to update one Invoices.
     * @example
     * // Update one Invoices
     * const invoices = await prisma.invoices.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends invoicesUpdateArgs>(args: SelectSubset<T, invoicesUpdateArgs<ExtArgs>>): Prisma__invoicesClient<$Result.GetResult<Prisma.$invoicesPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Invoices.
     * @param {invoicesDeleteManyArgs} args - Arguments to filter Invoices to delete.
     * @example
     * // Delete a few Invoices
     * const { count } = await prisma.invoices.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends invoicesDeleteManyArgs>(args?: SelectSubset<T, invoicesDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Invoices.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {invoicesUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Invoices
     * const invoices = await prisma.invoices.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends invoicesUpdateManyArgs>(args: SelectSubset<T, invoicesUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Invoices and returns the data updated in the database.
     * @param {invoicesUpdateManyAndReturnArgs} args - Arguments to update many Invoices.
     * @example
     * // Update many Invoices
     * const invoices = await prisma.invoices.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Invoices and only return the `id`
     * const invoicesWithIdOnly = await prisma.invoices.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends invoicesUpdateManyAndReturnArgs>(args: SelectSubset<T, invoicesUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$invoicesPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Invoices.
     * @param {invoicesUpsertArgs} args - Arguments to update or create a Invoices.
     * @example
     * // Update or create a Invoices
     * const invoices = await prisma.invoices.upsert({
     *   create: {
     *     // ... data to create a Invoices
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Invoices we want to update
     *   }
     * })
     */
    upsert<T extends invoicesUpsertArgs>(args: SelectSubset<T, invoicesUpsertArgs<ExtArgs>>): Prisma__invoicesClient<$Result.GetResult<Prisma.$invoicesPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Invoices.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {invoicesCountArgs} args - Arguments to filter Invoices to count.
     * @example
     * // Count the number of Invoices
     * const count = await prisma.invoices.count({
     *   where: {
     *     // ... the filter for the Invoices we want to count
     *   }
     * })
    **/
    count<T extends invoicesCountArgs>(
      args?: Subset<T, invoicesCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], InvoicesCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Invoices.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InvoicesAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends InvoicesAggregateArgs>(args: Subset<T, InvoicesAggregateArgs>): Prisma.PrismaPromise<GetInvoicesAggregateType<T>>

    /**
     * Group by Invoices.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {invoicesGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends invoicesGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: invoicesGroupByArgs['orderBy'] }
        : { orderBy?: invoicesGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, invoicesGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetInvoicesGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the invoices model
   */
  readonly fields: invoicesFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for invoices.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__invoicesClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    customer<T extends customersDefaultArgs<ExtArgs> = {}>(args?: Subset<T, customersDefaultArgs<ExtArgs>>): Prisma__customersClient<$Result.GetResult<Prisma.$customersPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    cart<T extends cartsDefaultArgs<ExtArgs> = {}>(args?: Subset<T, cartsDefaultArgs<ExtArgs>>): Prisma__cartsClient<$Result.GetResult<Prisma.$cartsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    invoice_items<T extends invoices$invoice_itemsArgs<ExtArgs> = {}>(args?: Subset<T, invoices$invoice_itemsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$invoice_itemsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the invoices model
   */
  interface invoicesFieldRefs {
    readonly id: FieldRef<"invoices", 'String'>
    readonly total_amount: FieldRef<"invoices", 'Decimal'>
    readonly issued_at: FieldRef<"invoices", 'DateTime'>
    readonly status: FieldRef<"invoices", 'String'>
    readonly customer_id: FieldRef<"invoices", 'String'>
    readonly cart_id: FieldRef<"invoices", 'String'>
  }
    

  // Custom InputTypes
  /**
   * invoices findUnique
   */
  export type invoicesFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the invoices
     */
    select?: invoicesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the invoices
     */
    omit?: invoicesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: invoicesInclude<ExtArgs> | null
    /**
     * Filter, which invoices to fetch.
     */
    where: invoicesWhereUniqueInput
  }

  /**
   * invoices findUniqueOrThrow
   */
  export type invoicesFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the invoices
     */
    select?: invoicesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the invoices
     */
    omit?: invoicesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: invoicesInclude<ExtArgs> | null
    /**
     * Filter, which invoices to fetch.
     */
    where: invoicesWhereUniqueInput
  }

  /**
   * invoices findFirst
   */
  export type invoicesFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the invoices
     */
    select?: invoicesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the invoices
     */
    omit?: invoicesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: invoicesInclude<ExtArgs> | null
    /**
     * Filter, which invoices to fetch.
     */
    where?: invoicesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of invoices to fetch.
     */
    orderBy?: invoicesOrderByWithRelationInput | invoicesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for invoices.
     */
    cursor?: invoicesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` invoices from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` invoices.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of invoices.
     */
    distinct?: InvoicesScalarFieldEnum | InvoicesScalarFieldEnum[]
  }

  /**
   * invoices findFirstOrThrow
   */
  export type invoicesFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the invoices
     */
    select?: invoicesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the invoices
     */
    omit?: invoicesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: invoicesInclude<ExtArgs> | null
    /**
     * Filter, which invoices to fetch.
     */
    where?: invoicesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of invoices to fetch.
     */
    orderBy?: invoicesOrderByWithRelationInput | invoicesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for invoices.
     */
    cursor?: invoicesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` invoices from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` invoices.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of invoices.
     */
    distinct?: InvoicesScalarFieldEnum | InvoicesScalarFieldEnum[]
  }

  /**
   * invoices findMany
   */
  export type invoicesFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the invoices
     */
    select?: invoicesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the invoices
     */
    omit?: invoicesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: invoicesInclude<ExtArgs> | null
    /**
     * Filter, which invoices to fetch.
     */
    where?: invoicesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of invoices to fetch.
     */
    orderBy?: invoicesOrderByWithRelationInput | invoicesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing invoices.
     */
    cursor?: invoicesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` invoices from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` invoices.
     */
    skip?: number
    distinct?: InvoicesScalarFieldEnum | InvoicesScalarFieldEnum[]
  }

  /**
   * invoices create
   */
  export type invoicesCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the invoices
     */
    select?: invoicesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the invoices
     */
    omit?: invoicesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: invoicesInclude<ExtArgs> | null
    /**
     * The data needed to create a invoices.
     */
    data: XOR<invoicesCreateInput, invoicesUncheckedCreateInput>
  }

  /**
   * invoices createMany
   */
  export type invoicesCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many invoices.
     */
    data: invoicesCreateManyInput | invoicesCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * invoices createManyAndReturn
   */
  export type invoicesCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the invoices
     */
    select?: invoicesSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the invoices
     */
    omit?: invoicesOmit<ExtArgs> | null
    /**
     * The data used to create many invoices.
     */
    data: invoicesCreateManyInput | invoicesCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: invoicesIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * invoices update
   */
  export type invoicesUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the invoices
     */
    select?: invoicesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the invoices
     */
    omit?: invoicesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: invoicesInclude<ExtArgs> | null
    /**
     * The data needed to update a invoices.
     */
    data: XOR<invoicesUpdateInput, invoicesUncheckedUpdateInput>
    /**
     * Choose, which invoices to update.
     */
    where: invoicesWhereUniqueInput
  }

  /**
   * invoices updateMany
   */
  export type invoicesUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update invoices.
     */
    data: XOR<invoicesUpdateManyMutationInput, invoicesUncheckedUpdateManyInput>
    /**
     * Filter which invoices to update
     */
    where?: invoicesWhereInput
    /**
     * Limit how many invoices to update.
     */
    limit?: number
  }

  /**
   * invoices updateManyAndReturn
   */
  export type invoicesUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the invoices
     */
    select?: invoicesSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the invoices
     */
    omit?: invoicesOmit<ExtArgs> | null
    /**
     * The data used to update invoices.
     */
    data: XOR<invoicesUpdateManyMutationInput, invoicesUncheckedUpdateManyInput>
    /**
     * Filter which invoices to update
     */
    where?: invoicesWhereInput
    /**
     * Limit how many invoices to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: invoicesIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * invoices upsert
   */
  export type invoicesUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the invoices
     */
    select?: invoicesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the invoices
     */
    omit?: invoicesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: invoicesInclude<ExtArgs> | null
    /**
     * The filter to search for the invoices to update in case it exists.
     */
    where: invoicesWhereUniqueInput
    /**
     * In case the invoices found by the `where` argument doesn't exist, create a new invoices with this data.
     */
    create: XOR<invoicesCreateInput, invoicesUncheckedCreateInput>
    /**
     * In case the invoices was found with the provided `where` argument, update it with this data.
     */
    update: XOR<invoicesUpdateInput, invoicesUncheckedUpdateInput>
  }

  /**
   * invoices delete
   */
  export type invoicesDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the invoices
     */
    select?: invoicesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the invoices
     */
    omit?: invoicesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: invoicesInclude<ExtArgs> | null
    /**
     * Filter which invoices to delete.
     */
    where: invoicesWhereUniqueInput
  }

  /**
   * invoices deleteMany
   */
  export type invoicesDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which invoices to delete
     */
    where?: invoicesWhereInput
    /**
     * Limit how many invoices to delete.
     */
    limit?: number
  }

  /**
   * invoices.invoice_items
   */
  export type invoices$invoice_itemsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the invoice_items
     */
    select?: invoice_itemsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the invoice_items
     */
    omit?: invoice_itemsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: invoice_itemsInclude<ExtArgs> | null
    where?: invoice_itemsWhereInput
    orderBy?: invoice_itemsOrderByWithRelationInput | invoice_itemsOrderByWithRelationInput[]
    cursor?: invoice_itemsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Invoice_itemsScalarFieldEnum | Invoice_itemsScalarFieldEnum[]
  }

  /**
   * invoices without action
   */
  export type invoicesDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the invoices
     */
    select?: invoicesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the invoices
     */
    omit?: invoicesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: invoicesInclude<ExtArgs> | null
  }


  /**
   * Model invoice_items
   */

  export type AggregateInvoice_items = {
    _count: Invoice_itemsCountAggregateOutputType | null
    _avg: Invoice_itemsAvgAggregateOutputType | null
    _sum: Invoice_itemsSumAggregateOutputType | null
    _min: Invoice_itemsMinAggregateOutputType | null
    _max: Invoice_itemsMaxAggregateOutputType | null
  }

  export type Invoice_itemsAvgAggregateOutputType = {
    quantity: number | null
    price: Decimal | null
  }

  export type Invoice_itemsSumAggregateOutputType = {
    quantity: number | null
    price: Decimal | null
  }

  export type Invoice_itemsMinAggregateOutputType = {
    id: string | null
    books_products_id: string | null
    quantity: number | null
    price: Decimal | null
    invoice_id: string | null
  }

  export type Invoice_itemsMaxAggregateOutputType = {
    id: string | null
    books_products_id: string | null
    quantity: number | null
    price: Decimal | null
    invoice_id: string | null
  }

  export type Invoice_itemsCountAggregateOutputType = {
    id: number
    books_products_id: number
    quantity: number
    price: number
    invoice_id: number
    _all: number
  }


  export type Invoice_itemsAvgAggregateInputType = {
    quantity?: true
    price?: true
  }

  export type Invoice_itemsSumAggregateInputType = {
    quantity?: true
    price?: true
  }

  export type Invoice_itemsMinAggregateInputType = {
    id?: true
    books_products_id?: true
    quantity?: true
    price?: true
    invoice_id?: true
  }

  export type Invoice_itemsMaxAggregateInputType = {
    id?: true
    books_products_id?: true
    quantity?: true
    price?: true
    invoice_id?: true
  }

  export type Invoice_itemsCountAggregateInputType = {
    id?: true
    books_products_id?: true
    quantity?: true
    price?: true
    invoice_id?: true
    _all?: true
  }

  export type Invoice_itemsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which invoice_items to aggregate.
     */
    where?: invoice_itemsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of invoice_items to fetch.
     */
    orderBy?: invoice_itemsOrderByWithRelationInput | invoice_itemsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: invoice_itemsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` invoice_items from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` invoice_items.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned invoice_items
    **/
    _count?: true | Invoice_itemsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: Invoice_itemsAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: Invoice_itemsSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Invoice_itemsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Invoice_itemsMaxAggregateInputType
  }

  export type GetInvoice_itemsAggregateType<T extends Invoice_itemsAggregateArgs> = {
        [P in keyof T & keyof AggregateInvoice_items]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateInvoice_items[P]>
      : GetScalarType<T[P], AggregateInvoice_items[P]>
  }




  export type invoice_itemsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: invoice_itemsWhereInput
    orderBy?: invoice_itemsOrderByWithAggregationInput | invoice_itemsOrderByWithAggregationInput[]
    by: Invoice_itemsScalarFieldEnum[] | Invoice_itemsScalarFieldEnum
    having?: invoice_itemsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Invoice_itemsCountAggregateInputType | true
    _avg?: Invoice_itemsAvgAggregateInputType
    _sum?: Invoice_itemsSumAggregateInputType
    _min?: Invoice_itemsMinAggregateInputType
    _max?: Invoice_itemsMaxAggregateInputType
  }

  export type Invoice_itemsGroupByOutputType = {
    id: string
    books_products_id: string
    quantity: number
    price: Decimal
    invoice_id: string
    _count: Invoice_itemsCountAggregateOutputType | null
    _avg: Invoice_itemsAvgAggregateOutputType | null
    _sum: Invoice_itemsSumAggregateOutputType | null
    _min: Invoice_itemsMinAggregateOutputType | null
    _max: Invoice_itemsMaxAggregateOutputType | null
  }

  type GetInvoice_itemsGroupByPayload<T extends invoice_itemsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Invoice_itemsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Invoice_itemsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Invoice_itemsGroupByOutputType[P]>
            : GetScalarType<T[P], Invoice_itemsGroupByOutputType[P]>
        }
      >
    >


  export type invoice_itemsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    books_products_id?: boolean
    quantity?: boolean
    price?: boolean
    invoice_id?: boolean
    books_products?: boolean | books_productsDefaultArgs<ExtArgs>
    invoice?: boolean | invoicesDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["invoice_items"]>

  export type invoice_itemsSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    books_products_id?: boolean
    quantity?: boolean
    price?: boolean
    invoice_id?: boolean
    books_products?: boolean | books_productsDefaultArgs<ExtArgs>
    invoice?: boolean | invoicesDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["invoice_items"]>

  export type invoice_itemsSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    books_products_id?: boolean
    quantity?: boolean
    price?: boolean
    invoice_id?: boolean
    books_products?: boolean | books_productsDefaultArgs<ExtArgs>
    invoice?: boolean | invoicesDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["invoice_items"]>

  export type invoice_itemsSelectScalar = {
    id?: boolean
    books_products_id?: boolean
    quantity?: boolean
    price?: boolean
    invoice_id?: boolean
  }

  export type invoice_itemsOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "books_products_id" | "quantity" | "price" | "invoice_id", ExtArgs["result"]["invoice_items"]>
  export type invoice_itemsInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    books_products?: boolean | books_productsDefaultArgs<ExtArgs>
    invoice?: boolean | invoicesDefaultArgs<ExtArgs>
  }
  export type invoice_itemsIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    books_products?: boolean | books_productsDefaultArgs<ExtArgs>
    invoice?: boolean | invoicesDefaultArgs<ExtArgs>
  }
  export type invoice_itemsIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    books_products?: boolean | books_productsDefaultArgs<ExtArgs>
    invoice?: boolean | invoicesDefaultArgs<ExtArgs>
  }

  export type $invoice_itemsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "invoice_items"
    objects: {
      books_products: Prisma.$books_productsPayload<ExtArgs>
      invoice: Prisma.$invoicesPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      books_products_id: string
      quantity: number
      price: Prisma.Decimal
      invoice_id: string
    }, ExtArgs["result"]["invoice_items"]>
    composites: {}
  }

  type invoice_itemsGetPayload<S extends boolean | null | undefined | invoice_itemsDefaultArgs> = $Result.GetResult<Prisma.$invoice_itemsPayload, S>

  type invoice_itemsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<invoice_itemsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: Invoice_itemsCountAggregateInputType | true
    }

  export interface invoice_itemsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['invoice_items'], meta: { name: 'invoice_items' } }
    /**
     * Find zero or one Invoice_items that matches the filter.
     * @param {invoice_itemsFindUniqueArgs} args - Arguments to find a Invoice_items
     * @example
     * // Get one Invoice_items
     * const invoice_items = await prisma.invoice_items.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends invoice_itemsFindUniqueArgs>(args: SelectSubset<T, invoice_itemsFindUniqueArgs<ExtArgs>>): Prisma__invoice_itemsClient<$Result.GetResult<Prisma.$invoice_itemsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Invoice_items that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {invoice_itemsFindUniqueOrThrowArgs} args - Arguments to find a Invoice_items
     * @example
     * // Get one Invoice_items
     * const invoice_items = await prisma.invoice_items.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends invoice_itemsFindUniqueOrThrowArgs>(args: SelectSubset<T, invoice_itemsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__invoice_itemsClient<$Result.GetResult<Prisma.$invoice_itemsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Invoice_items that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {invoice_itemsFindFirstArgs} args - Arguments to find a Invoice_items
     * @example
     * // Get one Invoice_items
     * const invoice_items = await prisma.invoice_items.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends invoice_itemsFindFirstArgs>(args?: SelectSubset<T, invoice_itemsFindFirstArgs<ExtArgs>>): Prisma__invoice_itemsClient<$Result.GetResult<Prisma.$invoice_itemsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Invoice_items that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {invoice_itemsFindFirstOrThrowArgs} args - Arguments to find a Invoice_items
     * @example
     * // Get one Invoice_items
     * const invoice_items = await prisma.invoice_items.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends invoice_itemsFindFirstOrThrowArgs>(args?: SelectSubset<T, invoice_itemsFindFirstOrThrowArgs<ExtArgs>>): Prisma__invoice_itemsClient<$Result.GetResult<Prisma.$invoice_itemsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Invoice_items that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {invoice_itemsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Invoice_items
     * const invoice_items = await prisma.invoice_items.findMany()
     * 
     * // Get first 10 Invoice_items
     * const invoice_items = await prisma.invoice_items.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const invoice_itemsWithIdOnly = await prisma.invoice_items.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends invoice_itemsFindManyArgs>(args?: SelectSubset<T, invoice_itemsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$invoice_itemsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Invoice_items.
     * @param {invoice_itemsCreateArgs} args - Arguments to create a Invoice_items.
     * @example
     * // Create one Invoice_items
     * const Invoice_items = await prisma.invoice_items.create({
     *   data: {
     *     // ... data to create a Invoice_items
     *   }
     * })
     * 
     */
    create<T extends invoice_itemsCreateArgs>(args: SelectSubset<T, invoice_itemsCreateArgs<ExtArgs>>): Prisma__invoice_itemsClient<$Result.GetResult<Prisma.$invoice_itemsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Invoice_items.
     * @param {invoice_itemsCreateManyArgs} args - Arguments to create many Invoice_items.
     * @example
     * // Create many Invoice_items
     * const invoice_items = await prisma.invoice_items.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends invoice_itemsCreateManyArgs>(args?: SelectSubset<T, invoice_itemsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Invoice_items and returns the data saved in the database.
     * @param {invoice_itemsCreateManyAndReturnArgs} args - Arguments to create many Invoice_items.
     * @example
     * // Create many Invoice_items
     * const invoice_items = await prisma.invoice_items.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Invoice_items and only return the `id`
     * const invoice_itemsWithIdOnly = await prisma.invoice_items.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends invoice_itemsCreateManyAndReturnArgs>(args?: SelectSubset<T, invoice_itemsCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$invoice_itemsPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Invoice_items.
     * @param {invoice_itemsDeleteArgs} args - Arguments to delete one Invoice_items.
     * @example
     * // Delete one Invoice_items
     * const Invoice_items = await prisma.invoice_items.delete({
     *   where: {
     *     // ... filter to delete one Invoice_items
     *   }
     * })
     * 
     */
    delete<T extends invoice_itemsDeleteArgs>(args: SelectSubset<T, invoice_itemsDeleteArgs<ExtArgs>>): Prisma__invoice_itemsClient<$Result.GetResult<Prisma.$invoice_itemsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Invoice_items.
     * @param {invoice_itemsUpdateArgs} args - Arguments to update one Invoice_items.
     * @example
     * // Update one Invoice_items
     * const invoice_items = await prisma.invoice_items.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends invoice_itemsUpdateArgs>(args: SelectSubset<T, invoice_itemsUpdateArgs<ExtArgs>>): Prisma__invoice_itemsClient<$Result.GetResult<Prisma.$invoice_itemsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Invoice_items.
     * @param {invoice_itemsDeleteManyArgs} args - Arguments to filter Invoice_items to delete.
     * @example
     * // Delete a few Invoice_items
     * const { count } = await prisma.invoice_items.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends invoice_itemsDeleteManyArgs>(args?: SelectSubset<T, invoice_itemsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Invoice_items.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {invoice_itemsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Invoice_items
     * const invoice_items = await prisma.invoice_items.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends invoice_itemsUpdateManyArgs>(args: SelectSubset<T, invoice_itemsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Invoice_items and returns the data updated in the database.
     * @param {invoice_itemsUpdateManyAndReturnArgs} args - Arguments to update many Invoice_items.
     * @example
     * // Update many Invoice_items
     * const invoice_items = await prisma.invoice_items.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Invoice_items and only return the `id`
     * const invoice_itemsWithIdOnly = await prisma.invoice_items.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends invoice_itemsUpdateManyAndReturnArgs>(args: SelectSubset<T, invoice_itemsUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$invoice_itemsPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Invoice_items.
     * @param {invoice_itemsUpsertArgs} args - Arguments to update or create a Invoice_items.
     * @example
     * // Update or create a Invoice_items
     * const invoice_items = await prisma.invoice_items.upsert({
     *   create: {
     *     // ... data to create a Invoice_items
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Invoice_items we want to update
     *   }
     * })
     */
    upsert<T extends invoice_itemsUpsertArgs>(args: SelectSubset<T, invoice_itemsUpsertArgs<ExtArgs>>): Prisma__invoice_itemsClient<$Result.GetResult<Prisma.$invoice_itemsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Invoice_items.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {invoice_itemsCountArgs} args - Arguments to filter Invoice_items to count.
     * @example
     * // Count the number of Invoice_items
     * const count = await prisma.invoice_items.count({
     *   where: {
     *     // ... the filter for the Invoice_items we want to count
     *   }
     * })
    **/
    count<T extends invoice_itemsCountArgs>(
      args?: Subset<T, invoice_itemsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Invoice_itemsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Invoice_items.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Invoice_itemsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends Invoice_itemsAggregateArgs>(args: Subset<T, Invoice_itemsAggregateArgs>): Prisma.PrismaPromise<GetInvoice_itemsAggregateType<T>>

    /**
     * Group by Invoice_items.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {invoice_itemsGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends invoice_itemsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: invoice_itemsGroupByArgs['orderBy'] }
        : { orderBy?: invoice_itemsGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, invoice_itemsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetInvoice_itemsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the invoice_items model
   */
  readonly fields: invoice_itemsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for invoice_items.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__invoice_itemsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    books_products<T extends books_productsDefaultArgs<ExtArgs> = {}>(args?: Subset<T, books_productsDefaultArgs<ExtArgs>>): Prisma__books_productsClient<$Result.GetResult<Prisma.$books_productsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    invoice<T extends invoicesDefaultArgs<ExtArgs> = {}>(args?: Subset<T, invoicesDefaultArgs<ExtArgs>>): Prisma__invoicesClient<$Result.GetResult<Prisma.$invoicesPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the invoice_items model
   */
  interface invoice_itemsFieldRefs {
    readonly id: FieldRef<"invoice_items", 'String'>
    readonly books_products_id: FieldRef<"invoice_items", 'String'>
    readonly quantity: FieldRef<"invoice_items", 'Int'>
    readonly price: FieldRef<"invoice_items", 'Decimal'>
    readonly invoice_id: FieldRef<"invoice_items", 'String'>
  }
    

  // Custom InputTypes
  /**
   * invoice_items findUnique
   */
  export type invoice_itemsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the invoice_items
     */
    select?: invoice_itemsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the invoice_items
     */
    omit?: invoice_itemsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: invoice_itemsInclude<ExtArgs> | null
    /**
     * Filter, which invoice_items to fetch.
     */
    where: invoice_itemsWhereUniqueInput
  }

  /**
   * invoice_items findUniqueOrThrow
   */
  export type invoice_itemsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the invoice_items
     */
    select?: invoice_itemsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the invoice_items
     */
    omit?: invoice_itemsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: invoice_itemsInclude<ExtArgs> | null
    /**
     * Filter, which invoice_items to fetch.
     */
    where: invoice_itemsWhereUniqueInput
  }

  /**
   * invoice_items findFirst
   */
  export type invoice_itemsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the invoice_items
     */
    select?: invoice_itemsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the invoice_items
     */
    omit?: invoice_itemsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: invoice_itemsInclude<ExtArgs> | null
    /**
     * Filter, which invoice_items to fetch.
     */
    where?: invoice_itemsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of invoice_items to fetch.
     */
    orderBy?: invoice_itemsOrderByWithRelationInput | invoice_itemsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for invoice_items.
     */
    cursor?: invoice_itemsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` invoice_items from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` invoice_items.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of invoice_items.
     */
    distinct?: Invoice_itemsScalarFieldEnum | Invoice_itemsScalarFieldEnum[]
  }

  /**
   * invoice_items findFirstOrThrow
   */
  export type invoice_itemsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the invoice_items
     */
    select?: invoice_itemsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the invoice_items
     */
    omit?: invoice_itemsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: invoice_itemsInclude<ExtArgs> | null
    /**
     * Filter, which invoice_items to fetch.
     */
    where?: invoice_itemsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of invoice_items to fetch.
     */
    orderBy?: invoice_itemsOrderByWithRelationInput | invoice_itemsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for invoice_items.
     */
    cursor?: invoice_itemsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` invoice_items from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` invoice_items.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of invoice_items.
     */
    distinct?: Invoice_itemsScalarFieldEnum | Invoice_itemsScalarFieldEnum[]
  }

  /**
   * invoice_items findMany
   */
  export type invoice_itemsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the invoice_items
     */
    select?: invoice_itemsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the invoice_items
     */
    omit?: invoice_itemsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: invoice_itemsInclude<ExtArgs> | null
    /**
     * Filter, which invoice_items to fetch.
     */
    where?: invoice_itemsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of invoice_items to fetch.
     */
    orderBy?: invoice_itemsOrderByWithRelationInput | invoice_itemsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing invoice_items.
     */
    cursor?: invoice_itemsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` invoice_items from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` invoice_items.
     */
    skip?: number
    distinct?: Invoice_itemsScalarFieldEnum | Invoice_itemsScalarFieldEnum[]
  }

  /**
   * invoice_items create
   */
  export type invoice_itemsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the invoice_items
     */
    select?: invoice_itemsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the invoice_items
     */
    omit?: invoice_itemsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: invoice_itemsInclude<ExtArgs> | null
    /**
     * The data needed to create a invoice_items.
     */
    data: XOR<invoice_itemsCreateInput, invoice_itemsUncheckedCreateInput>
  }

  /**
   * invoice_items createMany
   */
  export type invoice_itemsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many invoice_items.
     */
    data: invoice_itemsCreateManyInput | invoice_itemsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * invoice_items createManyAndReturn
   */
  export type invoice_itemsCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the invoice_items
     */
    select?: invoice_itemsSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the invoice_items
     */
    omit?: invoice_itemsOmit<ExtArgs> | null
    /**
     * The data used to create many invoice_items.
     */
    data: invoice_itemsCreateManyInput | invoice_itemsCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: invoice_itemsIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * invoice_items update
   */
  export type invoice_itemsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the invoice_items
     */
    select?: invoice_itemsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the invoice_items
     */
    omit?: invoice_itemsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: invoice_itemsInclude<ExtArgs> | null
    /**
     * The data needed to update a invoice_items.
     */
    data: XOR<invoice_itemsUpdateInput, invoice_itemsUncheckedUpdateInput>
    /**
     * Choose, which invoice_items to update.
     */
    where: invoice_itemsWhereUniqueInput
  }

  /**
   * invoice_items updateMany
   */
  export type invoice_itemsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update invoice_items.
     */
    data: XOR<invoice_itemsUpdateManyMutationInput, invoice_itemsUncheckedUpdateManyInput>
    /**
     * Filter which invoice_items to update
     */
    where?: invoice_itemsWhereInput
    /**
     * Limit how many invoice_items to update.
     */
    limit?: number
  }

  /**
   * invoice_items updateManyAndReturn
   */
  export type invoice_itemsUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the invoice_items
     */
    select?: invoice_itemsSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the invoice_items
     */
    omit?: invoice_itemsOmit<ExtArgs> | null
    /**
     * The data used to update invoice_items.
     */
    data: XOR<invoice_itemsUpdateManyMutationInput, invoice_itemsUncheckedUpdateManyInput>
    /**
     * Filter which invoice_items to update
     */
    where?: invoice_itemsWhereInput
    /**
     * Limit how many invoice_items to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: invoice_itemsIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * invoice_items upsert
   */
  export type invoice_itemsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the invoice_items
     */
    select?: invoice_itemsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the invoice_items
     */
    omit?: invoice_itemsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: invoice_itemsInclude<ExtArgs> | null
    /**
     * The filter to search for the invoice_items to update in case it exists.
     */
    where: invoice_itemsWhereUniqueInput
    /**
     * In case the invoice_items found by the `where` argument doesn't exist, create a new invoice_items with this data.
     */
    create: XOR<invoice_itemsCreateInput, invoice_itemsUncheckedCreateInput>
    /**
     * In case the invoice_items was found with the provided `where` argument, update it with this data.
     */
    update: XOR<invoice_itemsUpdateInput, invoice_itemsUncheckedUpdateInput>
  }

  /**
   * invoice_items delete
   */
  export type invoice_itemsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the invoice_items
     */
    select?: invoice_itemsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the invoice_items
     */
    omit?: invoice_itemsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: invoice_itemsInclude<ExtArgs> | null
    /**
     * Filter which invoice_items to delete.
     */
    where: invoice_itemsWhereUniqueInput
  }

  /**
   * invoice_items deleteMany
   */
  export type invoice_itemsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which invoice_items to delete
     */
    where?: invoice_itemsWhereInput
    /**
     * Limit how many invoice_items to delete.
     */
    limit?: number
  }

  /**
   * invoice_items without action
   */
  export type invoice_itemsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the invoice_items
     */
    select?: invoice_itemsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the invoice_items
     */
    omit?: invoice_itemsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: invoice_itemsInclude<ExtArgs> | null
  }


  /**
   * Model cart_items
   */

  export type AggregateCart_items = {
    _count: Cart_itemsCountAggregateOutputType | null
    _avg: Cart_itemsAvgAggregateOutputType | null
    _sum: Cart_itemsSumAggregateOutputType | null
    _min: Cart_itemsMinAggregateOutputType | null
    _max: Cart_itemsMaxAggregateOutputType | null
  }

  export type Cart_itemsAvgAggregateOutputType = {
    quantity: number | null
  }

  export type Cart_itemsSumAggregateOutputType = {
    quantity: number | null
  }

  export type Cart_itemsMinAggregateOutputType = {
    id: string | null
    books_products_id: string | null
    quantity: number | null
    created_at: Date | null
    cart_id: string | null
  }

  export type Cart_itemsMaxAggregateOutputType = {
    id: string | null
    books_products_id: string | null
    quantity: number | null
    created_at: Date | null
    cart_id: string | null
  }

  export type Cart_itemsCountAggregateOutputType = {
    id: number
    books_products_id: number
    quantity: number
    created_at: number
    cart_id: number
    _all: number
  }


  export type Cart_itemsAvgAggregateInputType = {
    quantity?: true
  }

  export type Cart_itemsSumAggregateInputType = {
    quantity?: true
  }

  export type Cart_itemsMinAggregateInputType = {
    id?: true
    books_products_id?: true
    quantity?: true
    created_at?: true
    cart_id?: true
  }

  export type Cart_itemsMaxAggregateInputType = {
    id?: true
    books_products_id?: true
    quantity?: true
    created_at?: true
    cart_id?: true
  }

  export type Cart_itemsCountAggregateInputType = {
    id?: true
    books_products_id?: true
    quantity?: true
    created_at?: true
    cart_id?: true
    _all?: true
  }

  export type Cart_itemsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which cart_items to aggregate.
     */
    where?: cart_itemsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of cart_items to fetch.
     */
    orderBy?: cart_itemsOrderByWithRelationInput | cart_itemsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: cart_itemsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` cart_items from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` cart_items.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned cart_items
    **/
    _count?: true | Cart_itemsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: Cart_itemsAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: Cart_itemsSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Cart_itemsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Cart_itemsMaxAggregateInputType
  }

  export type GetCart_itemsAggregateType<T extends Cart_itemsAggregateArgs> = {
        [P in keyof T & keyof AggregateCart_items]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCart_items[P]>
      : GetScalarType<T[P], AggregateCart_items[P]>
  }




  export type cart_itemsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: cart_itemsWhereInput
    orderBy?: cart_itemsOrderByWithAggregationInput | cart_itemsOrderByWithAggregationInput[]
    by: Cart_itemsScalarFieldEnum[] | Cart_itemsScalarFieldEnum
    having?: cart_itemsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Cart_itemsCountAggregateInputType | true
    _avg?: Cart_itemsAvgAggregateInputType
    _sum?: Cart_itemsSumAggregateInputType
    _min?: Cart_itemsMinAggregateInputType
    _max?: Cart_itemsMaxAggregateInputType
  }

  export type Cart_itemsGroupByOutputType = {
    id: string
    books_products_id: string
    quantity: number
    created_at: Date
    cart_id: string
    _count: Cart_itemsCountAggregateOutputType | null
    _avg: Cart_itemsAvgAggregateOutputType | null
    _sum: Cart_itemsSumAggregateOutputType | null
    _min: Cart_itemsMinAggregateOutputType | null
    _max: Cart_itemsMaxAggregateOutputType | null
  }

  type GetCart_itemsGroupByPayload<T extends cart_itemsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Cart_itemsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Cart_itemsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Cart_itemsGroupByOutputType[P]>
            : GetScalarType<T[P], Cart_itemsGroupByOutputType[P]>
        }
      >
    >


  export type cart_itemsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    books_products_id?: boolean
    quantity?: boolean
    created_at?: boolean
    cart_id?: boolean
    books_products?: boolean | books_productsDefaultArgs<ExtArgs>
    cart?: boolean | cartsDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["cart_items"]>

  export type cart_itemsSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    books_products_id?: boolean
    quantity?: boolean
    created_at?: boolean
    cart_id?: boolean
    books_products?: boolean | books_productsDefaultArgs<ExtArgs>
    cart?: boolean | cartsDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["cart_items"]>

  export type cart_itemsSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    books_products_id?: boolean
    quantity?: boolean
    created_at?: boolean
    cart_id?: boolean
    books_products?: boolean | books_productsDefaultArgs<ExtArgs>
    cart?: boolean | cartsDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["cart_items"]>

  export type cart_itemsSelectScalar = {
    id?: boolean
    books_products_id?: boolean
    quantity?: boolean
    created_at?: boolean
    cart_id?: boolean
  }

  export type cart_itemsOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "books_products_id" | "quantity" | "created_at" | "cart_id", ExtArgs["result"]["cart_items"]>
  export type cart_itemsInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    books_products?: boolean | books_productsDefaultArgs<ExtArgs>
    cart?: boolean | cartsDefaultArgs<ExtArgs>
  }
  export type cart_itemsIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    books_products?: boolean | books_productsDefaultArgs<ExtArgs>
    cart?: boolean | cartsDefaultArgs<ExtArgs>
  }
  export type cart_itemsIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    books_products?: boolean | books_productsDefaultArgs<ExtArgs>
    cart?: boolean | cartsDefaultArgs<ExtArgs>
  }

  export type $cart_itemsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "cart_items"
    objects: {
      books_products: Prisma.$books_productsPayload<ExtArgs>
      cart: Prisma.$cartsPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      books_products_id: string
      quantity: number
      created_at: Date
      cart_id: string
    }, ExtArgs["result"]["cart_items"]>
    composites: {}
  }

  type cart_itemsGetPayload<S extends boolean | null | undefined | cart_itemsDefaultArgs> = $Result.GetResult<Prisma.$cart_itemsPayload, S>

  type cart_itemsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<cart_itemsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: Cart_itemsCountAggregateInputType | true
    }

  export interface cart_itemsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['cart_items'], meta: { name: 'cart_items' } }
    /**
     * Find zero or one Cart_items that matches the filter.
     * @param {cart_itemsFindUniqueArgs} args - Arguments to find a Cart_items
     * @example
     * // Get one Cart_items
     * const cart_items = await prisma.cart_items.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends cart_itemsFindUniqueArgs>(args: SelectSubset<T, cart_itemsFindUniqueArgs<ExtArgs>>): Prisma__cart_itemsClient<$Result.GetResult<Prisma.$cart_itemsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Cart_items that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {cart_itemsFindUniqueOrThrowArgs} args - Arguments to find a Cart_items
     * @example
     * // Get one Cart_items
     * const cart_items = await prisma.cart_items.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends cart_itemsFindUniqueOrThrowArgs>(args: SelectSubset<T, cart_itemsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__cart_itemsClient<$Result.GetResult<Prisma.$cart_itemsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Cart_items that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {cart_itemsFindFirstArgs} args - Arguments to find a Cart_items
     * @example
     * // Get one Cart_items
     * const cart_items = await prisma.cart_items.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends cart_itemsFindFirstArgs>(args?: SelectSubset<T, cart_itemsFindFirstArgs<ExtArgs>>): Prisma__cart_itemsClient<$Result.GetResult<Prisma.$cart_itemsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Cart_items that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {cart_itemsFindFirstOrThrowArgs} args - Arguments to find a Cart_items
     * @example
     * // Get one Cart_items
     * const cart_items = await prisma.cart_items.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends cart_itemsFindFirstOrThrowArgs>(args?: SelectSubset<T, cart_itemsFindFirstOrThrowArgs<ExtArgs>>): Prisma__cart_itemsClient<$Result.GetResult<Prisma.$cart_itemsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Cart_items that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {cart_itemsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Cart_items
     * const cart_items = await prisma.cart_items.findMany()
     * 
     * // Get first 10 Cart_items
     * const cart_items = await prisma.cart_items.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const cart_itemsWithIdOnly = await prisma.cart_items.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends cart_itemsFindManyArgs>(args?: SelectSubset<T, cart_itemsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$cart_itemsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Cart_items.
     * @param {cart_itemsCreateArgs} args - Arguments to create a Cart_items.
     * @example
     * // Create one Cart_items
     * const Cart_items = await prisma.cart_items.create({
     *   data: {
     *     // ... data to create a Cart_items
     *   }
     * })
     * 
     */
    create<T extends cart_itemsCreateArgs>(args: SelectSubset<T, cart_itemsCreateArgs<ExtArgs>>): Prisma__cart_itemsClient<$Result.GetResult<Prisma.$cart_itemsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Cart_items.
     * @param {cart_itemsCreateManyArgs} args - Arguments to create many Cart_items.
     * @example
     * // Create many Cart_items
     * const cart_items = await prisma.cart_items.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends cart_itemsCreateManyArgs>(args?: SelectSubset<T, cart_itemsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Cart_items and returns the data saved in the database.
     * @param {cart_itemsCreateManyAndReturnArgs} args - Arguments to create many Cart_items.
     * @example
     * // Create many Cart_items
     * const cart_items = await prisma.cart_items.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Cart_items and only return the `id`
     * const cart_itemsWithIdOnly = await prisma.cart_items.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends cart_itemsCreateManyAndReturnArgs>(args?: SelectSubset<T, cart_itemsCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$cart_itemsPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Cart_items.
     * @param {cart_itemsDeleteArgs} args - Arguments to delete one Cart_items.
     * @example
     * // Delete one Cart_items
     * const Cart_items = await prisma.cart_items.delete({
     *   where: {
     *     // ... filter to delete one Cart_items
     *   }
     * })
     * 
     */
    delete<T extends cart_itemsDeleteArgs>(args: SelectSubset<T, cart_itemsDeleteArgs<ExtArgs>>): Prisma__cart_itemsClient<$Result.GetResult<Prisma.$cart_itemsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Cart_items.
     * @param {cart_itemsUpdateArgs} args - Arguments to update one Cart_items.
     * @example
     * // Update one Cart_items
     * const cart_items = await prisma.cart_items.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends cart_itemsUpdateArgs>(args: SelectSubset<T, cart_itemsUpdateArgs<ExtArgs>>): Prisma__cart_itemsClient<$Result.GetResult<Prisma.$cart_itemsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Cart_items.
     * @param {cart_itemsDeleteManyArgs} args - Arguments to filter Cart_items to delete.
     * @example
     * // Delete a few Cart_items
     * const { count } = await prisma.cart_items.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends cart_itemsDeleteManyArgs>(args?: SelectSubset<T, cart_itemsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Cart_items.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {cart_itemsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Cart_items
     * const cart_items = await prisma.cart_items.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends cart_itemsUpdateManyArgs>(args: SelectSubset<T, cart_itemsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Cart_items and returns the data updated in the database.
     * @param {cart_itemsUpdateManyAndReturnArgs} args - Arguments to update many Cart_items.
     * @example
     * // Update many Cart_items
     * const cart_items = await prisma.cart_items.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Cart_items and only return the `id`
     * const cart_itemsWithIdOnly = await prisma.cart_items.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends cart_itemsUpdateManyAndReturnArgs>(args: SelectSubset<T, cart_itemsUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$cart_itemsPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Cart_items.
     * @param {cart_itemsUpsertArgs} args - Arguments to update or create a Cart_items.
     * @example
     * // Update or create a Cart_items
     * const cart_items = await prisma.cart_items.upsert({
     *   create: {
     *     // ... data to create a Cart_items
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Cart_items we want to update
     *   }
     * })
     */
    upsert<T extends cart_itemsUpsertArgs>(args: SelectSubset<T, cart_itemsUpsertArgs<ExtArgs>>): Prisma__cart_itemsClient<$Result.GetResult<Prisma.$cart_itemsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Cart_items.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {cart_itemsCountArgs} args - Arguments to filter Cart_items to count.
     * @example
     * // Count the number of Cart_items
     * const count = await prisma.cart_items.count({
     *   where: {
     *     // ... the filter for the Cart_items we want to count
     *   }
     * })
    **/
    count<T extends cart_itemsCountArgs>(
      args?: Subset<T, cart_itemsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Cart_itemsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Cart_items.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Cart_itemsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends Cart_itemsAggregateArgs>(args: Subset<T, Cart_itemsAggregateArgs>): Prisma.PrismaPromise<GetCart_itemsAggregateType<T>>

    /**
     * Group by Cart_items.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {cart_itemsGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends cart_itemsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: cart_itemsGroupByArgs['orderBy'] }
        : { orderBy?: cart_itemsGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, cart_itemsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCart_itemsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the cart_items model
   */
  readonly fields: cart_itemsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for cart_items.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__cart_itemsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    books_products<T extends books_productsDefaultArgs<ExtArgs> = {}>(args?: Subset<T, books_productsDefaultArgs<ExtArgs>>): Prisma__books_productsClient<$Result.GetResult<Prisma.$books_productsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    cart<T extends cartsDefaultArgs<ExtArgs> = {}>(args?: Subset<T, cartsDefaultArgs<ExtArgs>>): Prisma__cartsClient<$Result.GetResult<Prisma.$cartsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the cart_items model
   */
  interface cart_itemsFieldRefs {
    readonly id: FieldRef<"cart_items", 'String'>
    readonly books_products_id: FieldRef<"cart_items", 'String'>
    readonly quantity: FieldRef<"cart_items", 'Int'>
    readonly created_at: FieldRef<"cart_items", 'DateTime'>
    readonly cart_id: FieldRef<"cart_items", 'String'>
  }
    

  // Custom InputTypes
  /**
   * cart_items findUnique
   */
  export type cart_itemsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the cart_items
     */
    select?: cart_itemsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the cart_items
     */
    omit?: cart_itemsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: cart_itemsInclude<ExtArgs> | null
    /**
     * Filter, which cart_items to fetch.
     */
    where: cart_itemsWhereUniqueInput
  }

  /**
   * cart_items findUniqueOrThrow
   */
  export type cart_itemsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the cart_items
     */
    select?: cart_itemsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the cart_items
     */
    omit?: cart_itemsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: cart_itemsInclude<ExtArgs> | null
    /**
     * Filter, which cart_items to fetch.
     */
    where: cart_itemsWhereUniqueInput
  }

  /**
   * cart_items findFirst
   */
  export type cart_itemsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the cart_items
     */
    select?: cart_itemsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the cart_items
     */
    omit?: cart_itemsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: cart_itemsInclude<ExtArgs> | null
    /**
     * Filter, which cart_items to fetch.
     */
    where?: cart_itemsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of cart_items to fetch.
     */
    orderBy?: cart_itemsOrderByWithRelationInput | cart_itemsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for cart_items.
     */
    cursor?: cart_itemsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` cart_items from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` cart_items.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of cart_items.
     */
    distinct?: Cart_itemsScalarFieldEnum | Cart_itemsScalarFieldEnum[]
  }

  /**
   * cart_items findFirstOrThrow
   */
  export type cart_itemsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the cart_items
     */
    select?: cart_itemsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the cart_items
     */
    omit?: cart_itemsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: cart_itemsInclude<ExtArgs> | null
    /**
     * Filter, which cart_items to fetch.
     */
    where?: cart_itemsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of cart_items to fetch.
     */
    orderBy?: cart_itemsOrderByWithRelationInput | cart_itemsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for cart_items.
     */
    cursor?: cart_itemsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` cart_items from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` cart_items.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of cart_items.
     */
    distinct?: Cart_itemsScalarFieldEnum | Cart_itemsScalarFieldEnum[]
  }

  /**
   * cart_items findMany
   */
  export type cart_itemsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the cart_items
     */
    select?: cart_itemsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the cart_items
     */
    omit?: cart_itemsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: cart_itemsInclude<ExtArgs> | null
    /**
     * Filter, which cart_items to fetch.
     */
    where?: cart_itemsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of cart_items to fetch.
     */
    orderBy?: cart_itemsOrderByWithRelationInput | cart_itemsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing cart_items.
     */
    cursor?: cart_itemsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` cart_items from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` cart_items.
     */
    skip?: number
    distinct?: Cart_itemsScalarFieldEnum | Cart_itemsScalarFieldEnum[]
  }

  /**
   * cart_items create
   */
  export type cart_itemsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the cart_items
     */
    select?: cart_itemsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the cart_items
     */
    omit?: cart_itemsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: cart_itemsInclude<ExtArgs> | null
    /**
     * The data needed to create a cart_items.
     */
    data: XOR<cart_itemsCreateInput, cart_itemsUncheckedCreateInput>
  }

  /**
   * cart_items createMany
   */
  export type cart_itemsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many cart_items.
     */
    data: cart_itemsCreateManyInput | cart_itemsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * cart_items createManyAndReturn
   */
  export type cart_itemsCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the cart_items
     */
    select?: cart_itemsSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the cart_items
     */
    omit?: cart_itemsOmit<ExtArgs> | null
    /**
     * The data used to create many cart_items.
     */
    data: cart_itemsCreateManyInput | cart_itemsCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: cart_itemsIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * cart_items update
   */
  export type cart_itemsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the cart_items
     */
    select?: cart_itemsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the cart_items
     */
    omit?: cart_itemsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: cart_itemsInclude<ExtArgs> | null
    /**
     * The data needed to update a cart_items.
     */
    data: XOR<cart_itemsUpdateInput, cart_itemsUncheckedUpdateInput>
    /**
     * Choose, which cart_items to update.
     */
    where: cart_itemsWhereUniqueInput
  }

  /**
   * cart_items updateMany
   */
  export type cart_itemsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update cart_items.
     */
    data: XOR<cart_itemsUpdateManyMutationInput, cart_itemsUncheckedUpdateManyInput>
    /**
     * Filter which cart_items to update
     */
    where?: cart_itemsWhereInput
    /**
     * Limit how many cart_items to update.
     */
    limit?: number
  }

  /**
   * cart_items updateManyAndReturn
   */
  export type cart_itemsUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the cart_items
     */
    select?: cart_itemsSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the cart_items
     */
    omit?: cart_itemsOmit<ExtArgs> | null
    /**
     * The data used to update cart_items.
     */
    data: XOR<cart_itemsUpdateManyMutationInput, cart_itemsUncheckedUpdateManyInput>
    /**
     * Filter which cart_items to update
     */
    where?: cart_itemsWhereInput
    /**
     * Limit how many cart_items to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: cart_itemsIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * cart_items upsert
   */
  export type cart_itemsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the cart_items
     */
    select?: cart_itemsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the cart_items
     */
    omit?: cart_itemsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: cart_itemsInclude<ExtArgs> | null
    /**
     * The filter to search for the cart_items to update in case it exists.
     */
    where: cart_itemsWhereUniqueInput
    /**
     * In case the cart_items found by the `where` argument doesn't exist, create a new cart_items with this data.
     */
    create: XOR<cart_itemsCreateInput, cart_itemsUncheckedCreateInput>
    /**
     * In case the cart_items was found with the provided `where` argument, update it with this data.
     */
    update: XOR<cart_itemsUpdateInput, cart_itemsUncheckedUpdateInput>
  }

  /**
   * cart_items delete
   */
  export type cart_itemsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the cart_items
     */
    select?: cart_itemsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the cart_items
     */
    omit?: cart_itemsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: cart_itemsInclude<ExtArgs> | null
    /**
     * Filter which cart_items to delete.
     */
    where: cart_itemsWhereUniqueInput
  }

  /**
   * cart_items deleteMany
   */
  export type cart_itemsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which cart_items to delete
     */
    where?: cart_itemsWhereInput
    /**
     * Limit how many cart_items to delete.
     */
    limit?: number
  }

  /**
   * cart_items without action
   */
  export type cart_itemsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the cart_items
     */
    select?: cart_itemsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the cart_items
     */
    omit?: cart_itemsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: cart_itemsInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const AuthorsScalarFieldEnum: {
    id: 'id',
    name: 'name',
    bio: 'bio',
    birthdate: 'birthdate'
  };

  export type AuthorsScalarFieldEnum = (typeof AuthorsScalarFieldEnum)[keyof typeof AuthorsScalarFieldEnum]


  export const CustomersScalarFieldEnum: {
    id: 'id',
    name: 'name',
    email: 'email',
    address: 'address',
    phone: 'phone',
    password: 'password'
  };

  export type CustomersScalarFieldEnum = (typeof CustomersScalarFieldEnum)[keyof typeof CustomersScalarFieldEnum]


  export const BooksScalarFieldEnum: {
    id: 'id',
    title: 'title',
    isbn: 'isbn',
    publication_year: 'publication_year',
    genre: 'genre',
    author_id: 'author_id'
  };

  export type BooksScalarFieldEnum = (typeof BooksScalarFieldEnum)[keyof typeof BooksScalarFieldEnum]


  export const WarehousesScalarFieldEnum: {
    id: 'id',
    name: 'name',
    location: 'location',
    capacity: 'capacity'
  };

  export type WarehousesScalarFieldEnum = (typeof WarehousesScalarFieldEnum)[keyof typeof WarehousesScalarFieldEnum]


  export const CartsScalarFieldEnum: {
    id: 'id',
    customer_id: 'customer_id',
    created_at: 'created_at'
  };

  export type CartsScalarFieldEnum = (typeof CartsScalarFieldEnum)[keyof typeof CartsScalarFieldEnum]


  export const Books_productsScalarFieldEnum: {
    id: 'id',
    book_id: 'book_id',
    price: 'price',
    stock: 'stock',
    format: 'format',
    warehouse_id: 'warehouse_id'
  };

  export type Books_productsScalarFieldEnum = (typeof Books_productsScalarFieldEnum)[keyof typeof Books_productsScalarFieldEnum]


  export const InvoicesScalarFieldEnum: {
    id: 'id',
    total_amount: 'total_amount',
    issued_at: 'issued_at',
    status: 'status',
    customer_id: 'customer_id',
    cart_id: 'cart_id'
  };

  export type InvoicesScalarFieldEnum = (typeof InvoicesScalarFieldEnum)[keyof typeof InvoicesScalarFieldEnum]


  export const Invoice_itemsScalarFieldEnum: {
    id: 'id',
    books_products_id: 'books_products_id',
    quantity: 'quantity',
    price: 'price',
    invoice_id: 'invoice_id'
  };

  export type Invoice_itemsScalarFieldEnum = (typeof Invoice_itemsScalarFieldEnum)[keyof typeof Invoice_itemsScalarFieldEnum]


  export const Cart_itemsScalarFieldEnum: {
    id: 'id',
    books_products_id: 'books_products_id',
    quantity: 'quantity',
    created_at: 'created_at',
    cart_id: 'cart_id'
  };

  export type Cart_itemsScalarFieldEnum = (typeof Cart_itemsScalarFieldEnum)[keyof typeof Cart_itemsScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'Decimal'
   */
  export type DecimalFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Decimal'>
    


  /**
   * Reference to a field of type 'Decimal[]'
   */
  export type ListDecimalFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Decimal[]'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    
  /**
   * Deep Input Types
   */


  export type authorsWhereInput = {
    AND?: authorsWhereInput | authorsWhereInput[]
    OR?: authorsWhereInput[]
    NOT?: authorsWhereInput | authorsWhereInput[]
    id?: StringFilter<"authors"> | string
    name?: StringFilter<"authors"> | string
    bio?: StringFilter<"authors"> | string
    birthdate?: DateTimeFilter<"authors"> | Date | string
    books?: BooksListRelationFilter
  }

  export type authorsOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    bio?: SortOrder
    birthdate?: SortOrder
    books?: booksOrderByRelationAggregateInput
  }

  export type authorsWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: authorsWhereInput | authorsWhereInput[]
    OR?: authorsWhereInput[]
    NOT?: authorsWhereInput | authorsWhereInput[]
    name?: StringFilter<"authors"> | string
    bio?: StringFilter<"authors"> | string
    birthdate?: DateTimeFilter<"authors"> | Date | string
    books?: BooksListRelationFilter
  }, "id">

  export type authorsOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    bio?: SortOrder
    birthdate?: SortOrder
    _count?: authorsCountOrderByAggregateInput
    _max?: authorsMaxOrderByAggregateInput
    _min?: authorsMinOrderByAggregateInput
  }

  export type authorsScalarWhereWithAggregatesInput = {
    AND?: authorsScalarWhereWithAggregatesInput | authorsScalarWhereWithAggregatesInput[]
    OR?: authorsScalarWhereWithAggregatesInput[]
    NOT?: authorsScalarWhereWithAggregatesInput | authorsScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"authors"> | string
    name?: StringWithAggregatesFilter<"authors"> | string
    bio?: StringWithAggregatesFilter<"authors"> | string
    birthdate?: DateTimeWithAggregatesFilter<"authors"> | Date | string
  }

  export type customersWhereInput = {
    AND?: customersWhereInput | customersWhereInput[]
    OR?: customersWhereInput[]
    NOT?: customersWhereInput | customersWhereInput[]
    id?: StringFilter<"customers"> | string
    name?: StringFilter<"customers"> | string
    email?: StringFilter<"customers"> | string
    address?: StringFilter<"customers"> | string
    phone?: StringFilter<"customers"> | string
    password?: StringFilter<"customers"> | string
    carts?: CartsListRelationFilter
    invoices?: InvoicesListRelationFilter
  }

  export type customersOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    address?: SortOrder
    phone?: SortOrder
    password?: SortOrder
    carts?: cartsOrderByRelationAggregateInput
    invoices?: invoicesOrderByRelationAggregateInput
  }

  export type customersWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: customersWhereInput | customersWhereInput[]
    OR?: customersWhereInput[]
    NOT?: customersWhereInput | customersWhereInput[]
    name?: StringFilter<"customers"> | string
    email?: StringFilter<"customers"> | string
    address?: StringFilter<"customers"> | string
    phone?: StringFilter<"customers"> | string
    password?: StringFilter<"customers"> | string
    carts?: CartsListRelationFilter
    invoices?: InvoicesListRelationFilter
  }, "id">

  export type customersOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    address?: SortOrder
    phone?: SortOrder
    password?: SortOrder
    _count?: customersCountOrderByAggregateInput
    _max?: customersMaxOrderByAggregateInput
    _min?: customersMinOrderByAggregateInput
  }

  export type customersScalarWhereWithAggregatesInput = {
    AND?: customersScalarWhereWithAggregatesInput | customersScalarWhereWithAggregatesInput[]
    OR?: customersScalarWhereWithAggregatesInput[]
    NOT?: customersScalarWhereWithAggregatesInput | customersScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"customers"> | string
    name?: StringWithAggregatesFilter<"customers"> | string
    email?: StringWithAggregatesFilter<"customers"> | string
    address?: StringWithAggregatesFilter<"customers"> | string
    phone?: StringWithAggregatesFilter<"customers"> | string
    password?: StringWithAggregatesFilter<"customers"> | string
  }

  export type booksWhereInput = {
    AND?: booksWhereInput | booksWhereInput[]
    OR?: booksWhereInput[]
    NOT?: booksWhereInput | booksWhereInput[]
    id?: StringFilter<"books"> | string
    title?: StringFilter<"books"> | string
    isbn?: StringFilter<"books"> | string
    publication_year?: IntFilter<"books"> | number
    genre?: StringFilter<"books"> | string
    author_id?: StringFilter<"books"> | string
    author?: XOR<AuthorsScalarRelationFilter, authorsWhereInput>
    books_products?: Books_productsListRelationFilter
  }

  export type booksOrderByWithRelationInput = {
    id?: SortOrder
    title?: SortOrder
    isbn?: SortOrder
    publication_year?: SortOrder
    genre?: SortOrder
    author_id?: SortOrder
    author?: authorsOrderByWithRelationInput
    books_products?: books_productsOrderByRelationAggregateInput
  }

  export type booksWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: booksWhereInput | booksWhereInput[]
    OR?: booksWhereInput[]
    NOT?: booksWhereInput | booksWhereInput[]
    title?: StringFilter<"books"> | string
    isbn?: StringFilter<"books"> | string
    publication_year?: IntFilter<"books"> | number
    genre?: StringFilter<"books"> | string
    author_id?: StringFilter<"books"> | string
    author?: XOR<AuthorsScalarRelationFilter, authorsWhereInput>
    books_products?: Books_productsListRelationFilter
  }, "id">

  export type booksOrderByWithAggregationInput = {
    id?: SortOrder
    title?: SortOrder
    isbn?: SortOrder
    publication_year?: SortOrder
    genre?: SortOrder
    author_id?: SortOrder
    _count?: booksCountOrderByAggregateInput
    _avg?: booksAvgOrderByAggregateInput
    _max?: booksMaxOrderByAggregateInput
    _min?: booksMinOrderByAggregateInput
    _sum?: booksSumOrderByAggregateInput
  }

  export type booksScalarWhereWithAggregatesInput = {
    AND?: booksScalarWhereWithAggregatesInput | booksScalarWhereWithAggregatesInput[]
    OR?: booksScalarWhereWithAggregatesInput[]
    NOT?: booksScalarWhereWithAggregatesInput | booksScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"books"> | string
    title?: StringWithAggregatesFilter<"books"> | string
    isbn?: StringWithAggregatesFilter<"books"> | string
    publication_year?: IntWithAggregatesFilter<"books"> | number
    genre?: StringWithAggregatesFilter<"books"> | string
    author_id?: StringWithAggregatesFilter<"books"> | string
  }

  export type warehousesWhereInput = {
    AND?: warehousesWhereInput | warehousesWhereInput[]
    OR?: warehousesWhereInput[]
    NOT?: warehousesWhereInput | warehousesWhereInput[]
    id?: StringFilter<"warehouses"> | string
    name?: StringFilter<"warehouses"> | string
    location?: StringFilter<"warehouses"> | string
    capacity?: IntFilter<"warehouses"> | number
    books_products?: Books_productsListRelationFilter
  }

  export type warehousesOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    location?: SortOrder
    capacity?: SortOrder
    books_products?: books_productsOrderByRelationAggregateInput
  }

  export type warehousesWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: warehousesWhereInput | warehousesWhereInput[]
    OR?: warehousesWhereInput[]
    NOT?: warehousesWhereInput | warehousesWhereInput[]
    name?: StringFilter<"warehouses"> | string
    location?: StringFilter<"warehouses"> | string
    capacity?: IntFilter<"warehouses"> | number
    books_products?: Books_productsListRelationFilter
  }, "id">

  export type warehousesOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    location?: SortOrder
    capacity?: SortOrder
    _count?: warehousesCountOrderByAggregateInput
    _avg?: warehousesAvgOrderByAggregateInput
    _max?: warehousesMaxOrderByAggregateInput
    _min?: warehousesMinOrderByAggregateInput
    _sum?: warehousesSumOrderByAggregateInput
  }

  export type warehousesScalarWhereWithAggregatesInput = {
    AND?: warehousesScalarWhereWithAggregatesInput | warehousesScalarWhereWithAggregatesInput[]
    OR?: warehousesScalarWhereWithAggregatesInput[]
    NOT?: warehousesScalarWhereWithAggregatesInput | warehousesScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"warehouses"> | string
    name?: StringWithAggregatesFilter<"warehouses"> | string
    location?: StringWithAggregatesFilter<"warehouses"> | string
    capacity?: IntWithAggregatesFilter<"warehouses"> | number
  }

  export type cartsWhereInput = {
    AND?: cartsWhereInput | cartsWhereInput[]
    OR?: cartsWhereInput[]
    NOT?: cartsWhereInput | cartsWhereInput[]
    id?: StringFilter<"carts"> | string
    customer_id?: StringFilter<"carts"> | string
    created_at?: DateTimeFilter<"carts"> | Date | string
    customer?: XOR<CustomersScalarRelationFilter, customersWhereInput>
    cart_items?: Cart_itemsListRelationFilter
    invoices?: InvoicesListRelationFilter
  }

  export type cartsOrderByWithRelationInput = {
    id?: SortOrder
    customer_id?: SortOrder
    created_at?: SortOrder
    customer?: customersOrderByWithRelationInput
    cart_items?: cart_itemsOrderByRelationAggregateInput
    invoices?: invoicesOrderByRelationAggregateInput
  }

  export type cartsWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: cartsWhereInput | cartsWhereInput[]
    OR?: cartsWhereInput[]
    NOT?: cartsWhereInput | cartsWhereInput[]
    customer_id?: StringFilter<"carts"> | string
    created_at?: DateTimeFilter<"carts"> | Date | string
    customer?: XOR<CustomersScalarRelationFilter, customersWhereInput>
    cart_items?: Cart_itemsListRelationFilter
    invoices?: InvoicesListRelationFilter
  }, "id">

  export type cartsOrderByWithAggregationInput = {
    id?: SortOrder
    customer_id?: SortOrder
    created_at?: SortOrder
    _count?: cartsCountOrderByAggregateInput
    _max?: cartsMaxOrderByAggregateInput
    _min?: cartsMinOrderByAggregateInput
  }

  export type cartsScalarWhereWithAggregatesInput = {
    AND?: cartsScalarWhereWithAggregatesInput | cartsScalarWhereWithAggregatesInput[]
    OR?: cartsScalarWhereWithAggregatesInput[]
    NOT?: cartsScalarWhereWithAggregatesInput | cartsScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"carts"> | string
    customer_id?: StringWithAggregatesFilter<"carts"> | string
    created_at?: DateTimeWithAggregatesFilter<"carts"> | Date | string
  }

  export type books_productsWhereInput = {
    AND?: books_productsWhereInput | books_productsWhereInput[]
    OR?: books_productsWhereInput[]
    NOT?: books_productsWhereInput | books_productsWhereInput[]
    id?: StringFilter<"books_products"> | string
    book_id?: StringFilter<"books_products"> | string
    price?: DecimalFilter<"books_products"> | Decimal | DecimalJsLike | number | string
    stock?: IntFilter<"books_products"> | number
    format?: StringFilter<"books_products"> | string
    warehouse_id?: StringFilter<"books_products"> | string
    book?: XOR<BooksScalarRelationFilter, booksWhereInput>
    warehouse?: XOR<WarehousesScalarRelationFilter, warehousesWhereInput>
    invoice_items?: Invoice_itemsListRelationFilter
    cart_items?: Cart_itemsListRelationFilter
  }

  export type books_productsOrderByWithRelationInput = {
    id?: SortOrder
    book_id?: SortOrder
    price?: SortOrder
    stock?: SortOrder
    format?: SortOrder
    warehouse_id?: SortOrder
    book?: booksOrderByWithRelationInput
    warehouse?: warehousesOrderByWithRelationInput
    invoice_items?: invoice_itemsOrderByRelationAggregateInput
    cart_items?: cart_itemsOrderByRelationAggregateInput
  }

  export type books_productsWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: books_productsWhereInput | books_productsWhereInput[]
    OR?: books_productsWhereInput[]
    NOT?: books_productsWhereInput | books_productsWhereInput[]
    book_id?: StringFilter<"books_products"> | string
    price?: DecimalFilter<"books_products"> | Decimal | DecimalJsLike | number | string
    stock?: IntFilter<"books_products"> | number
    format?: StringFilter<"books_products"> | string
    warehouse_id?: StringFilter<"books_products"> | string
    book?: XOR<BooksScalarRelationFilter, booksWhereInput>
    warehouse?: XOR<WarehousesScalarRelationFilter, warehousesWhereInput>
    invoice_items?: Invoice_itemsListRelationFilter
    cart_items?: Cart_itemsListRelationFilter
  }, "id">

  export type books_productsOrderByWithAggregationInput = {
    id?: SortOrder
    book_id?: SortOrder
    price?: SortOrder
    stock?: SortOrder
    format?: SortOrder
    warehouse_id?: SortOrder
    _count?: books_productsCountOrderByAggregateInput
    _avg?: books_productsAvgOrderByAggregateInput
    _max?: books_productsMaxOrderByAggregateInput
    _min?: books_productsMinOrderByAggregateInput
    _sum?: books_productsSumOrderByAggregateInput
  }

  export type books_productsScalarWhereWithAggregatesInput = {
    AND?: books_productsScalarWhereWithAggregatesInput | books_productsScalarWhereWithAggregatesInput[]
    OR?: books_productsScalarWhereWithAggregatesInput[]
    NOT?: books_productsScalarWhereWithAggregatesInput | books_productsScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"books_products"> | string
    book_id?: StringWithAggregatesFilter<"books_products"> | string
    price?: DecimalWithAggregatesFilter<"books_products"> | Decimal | DecimalJsLike | number | string
    stock?: IntWithAggregatesFilter<"books_products"> | number
    format?: StringWithAggregatesFilter<"books_products"> | string
    warehouse_id?: StringWithAggregatesFilter<"books_products"> | string
  }

  export type invoicesWhereInput = {
    AND?: invoicesWhereInput | invoicesWhereInput[]
    OR?: invoicesWhereInput[]
    NOT?: invoicesWhereInput | invoicesWhereInput[]
    id?: StringFilter<"invoices"> | string
    total_amount?: DecimalFilter<"invoices"> | Decimal | DecimalJsLike | number | string
    issued_at?: DateTimeFilter<"invoices"> | Date | string
    status?: StringFilter<"invoices"> | string
    customer_id?: StringFilter<"invoices"> | string
    cart_id?: StringFilter<"invoices"> | string
    customer?: XOR<CustomersScalarRelationFilter, customersWhereInput>
    cart?: XOR<CartsScalarRelationFilter, cartsWhereInput>
    invoice_items?: Invoice_itemsListRelationFilter
  }

  export type invoicesOrderByWithRelationInput = {
    id?: SortOrder
    total_amount?: SortOrder
    issued_at?: SortOrder
    status?: SortOrder
    customer_id?: SortOrder
    cart_id?: SortOrder
    customer?: customersOrderByWithRelationInput
    cart?: cartsOrderByWithRelationInput
    invoice_items?: invoice_itemsOrderByRelationAggregateInput
  }

  export type invoicesWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: invoicesWhereInput | invoicesWhereInput[]
    OR?: invoicesWhereInput[]
    NOT?: invoicesWhereInput | invoicesWhereInput[]
    total_amount?: DecimalFilter<"invoices"> | Decimal | DecimalJsLike | number | string
    issued_at?: DateTimeFilter<"invoices"> | Date | string
    status?: StringFilter<"invoices"> | string
    customer_id?: StringFilter<"invoices"> | string
    cart_id?: StringFilter<"invoices"> | string
    customer?: XOR<CustomersScalarRelationFilter, customersWhereInput>
    cart?: XOR<CartsScalarRelationFilter, cartsWhereInput>
    invoice_items?: Invoice_itemsListRelationFilter
  }, "id">

  export type invoicesOrderByWithAggregationInput = {
    id?: SortOrder
    total_amount?: SortOrder
    issued_at?: SortOrder
    status?: SortOrder
    customer_id?: SortOrder
    cart_id?: SortOrder
    _count?: invoicesCountOrderByAggregateInput
    _avg?: invoicesAvgOrderByAggregateInput
    _max?: invoicesMaxOrderByAggregateInput
    _min?: invoicesMinOrderByAggregateInput
    _sum?: invoicesSumOrderByAggregateInput
  }

  export type invoicesScalarWhereWithAggregatesInput = {
    AND?: invoicesScalarWhereWithAggregatesInput | invoicesScalarWhereWithAggregatesInput[]
    OR?: invoicesScalarWhereWithAggregatesInput[]
    NOT?: invoicesScalarWhereWithAggregatesInput | invoicesScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"invoices"> | string
    total_amount?: DecimalWithAggregatesFilter<"invoices"> | Decimal | DecimalJsLike | number | string
    issued_at?: DateTimeWithAggregatesFilter<"invoices"> | Date | string
    status?: StringWithAggregatesFilter<"invoices"> | string
    customer_id?: StringWithAggregatesFilter<"invoices"> | string
    cart_id?: StringWithAggregatesFilter<"invoices"> | string
  }

  export type invoice_itemsWhereInput = {
    AND?: invoice_itemsWhereInput | invoice_itemsWhereInput[]
    OR?: invoice_itemsWhereInput[]
    NOT?: invoice_itemsWhereInput | invoice_itemsWhereInput[]
    id?: StringFilter<"invoice_items"> | string
    books_products_id?: StringFilter<"invoice_items"> | string
    quantity?: IntFilter<"invoice_items"> | number
    price?: DecimalFilter<"invoice_items"> | Decimal | DecimalJsLike | number | string
    invoice_id?: StringFilter<"invoice_items"> | string
    books_products?: XOR<Books_productsScalarRelationFilter, books_productsWhereInput>
    invoice?: XOR<InvoicesScalarRelationFilter, invoicesWhereInput>
  }

  export type invoice_itemsOrderByWithRelationInput = {
    id?: SortOrder
    books_products_id?: SortOrder
    quantity?: SortOrder
    price?: SortOrder
    invoice_id?: SortOrder
    books_products?: books_productsOrderByWithRelationInput
    invoice?: invoicesOrderByWithRelationInput
  }

  export type invoice_itemsWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: invoice_itemsWhereInput | invoice_itemsWhereInput[]
    OR?: invoice_itemsWhereInput[]
    NOT?: invoice_itemsWhereInput | invoice_itemsWhereInput[]
    books_products_id?: StringFilter<"invoice_items"> | string
    quantity?: IntFilter<"invoice_items"> | number
    price?: DecimalFilter<"invoice_items"> | Decimal | DecimalJsLike | number | string
    invoice_id?: StringFilter<"invoice_items"> | string
    books_products?: XOR<Books_productsScalarRelationFilter, books_productsWhereInput>
    invoice?: XOR<InvoicesScalarRelationFilter, invoicesWhereInput>
  }, "id">

  export type invoice_itemsOrderByWithAggregationInput = {
    id?: SortOrder
    books_products_id?: SortOrder
    quantity?: SortOrder
    price?: SortOrder
    invoice_id?: SortOrder
    _count?: invoice_itemsCountOrderByAggregateInput
    _avg?: invoice_itemsAvgOrderByAggregateInput
    _max?: invoice_itemsMaxOrderByAggregateInput
    _min?: invoice_itemsMinOrderByAggregateInput
    _sum?: invoice_itemsSumOrderByAggregateInput
  }

  export type invoice_itemsScalarWhereWithAggregatesInput = {
    AND?: invoice_itemsScalarWhereWithAggregatesInput | invoice_itemsScalarWhereWithAggregatesInput[]
    OR?: invoice_itemsScalarWhereWithAggregatesInput[]
    NOT?: invoice_itemsScalarWhereWithAggregatesInput | invoice_itemsScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"invoice_items"> | string
    books_products_id?: StringWithAggregatesFilter<"invoice_items"> | string
    quantity?: IntWithAggregatesFilter<"invoice_items"> | number
    price?: DecimalWithAggregatesFilter<"invoice_items"> | Decimal | DecimalJsLike | number | string
    invoice_id?: StringWithAggregatesFilter<"invoice_items"> | string
  }

  export type cart_itemsWhereInput = {
    AND?: cart_itemsWhereInput | cart_itemsWhereInput[]
    OR?: cart_itemsWhereInput[]
    NOT?: cart_itemsWhereInput | cart_itemsWhereInput[]
    id?: StringFilter<"cart_items"> | string
    books_products_id?: StringFilter<"cart_items"> | string
    quantity?: IntFilter<"cart_items"> | number
    created_at?: DateTimeFilter<"cart_items"> | Date | string
    cart_id?: StringFilter<"cart_items"> | string
    books_products?: XOR<Books_productsScalarRelationFilter, books_productsWhereInput>
    cart?: XOR<CartsScalarRelationFilter, cartsWhereInput>
  }

  export type cart_itemsOrderByWithRelationInput = {
    id?: SortOrder
    books_products_id?: SortOrder
    quantity?: SortOrder
    created_at?: SortOrder
    cart_id?: SortOrder
    books_products?: books_productsOrderByWithRelationInput
    cart?: cartsOrderByWithRelationInput
  }

  export type cart_itemsWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: cart_itemsWhereInput | cart_itemsWhereInput[]
    OR?: cart_itemsWhereInput[]
    NOT?: cart_itemsWhereInput | cart_itemsWhereInput[]
    books_products_id?: StringFilter<"cart_items"> | string
    quantity?: IntFilter<"cart_items"> | number
    created_at?: DateTimeFilter<"cart_items"> | Date | string
    cart_id?: StringFilter<"cart_items"> | string
    books_products?: XOR<Books_productsScalarRelationFilter, books_productsWhereInput>
    cart?: XOR<CartsScalarRelationFilter, cartsWhereInput>
  }, "id">

  export type cart_itemsOrderByWithAggregationInput = {
    id?: SortOrder
    books_products_id?: SortOrder
    quantity?: SortOrder
    created_at?: SortOrder
    cart_id?: SortOrder
    _count?: cart_itemsCountOrderByAggregateInput
    _avg?: cart_itemsAvgOrderByAggregateInput
    _max?: cart_itemsMaxOrderByAggregateInput
    _min?: cart_itemsMinOrderByAggregateInput
    _sum?: cart_itemsSumOrderByAggregateInput
  }

  export type cart_itemsScalarWhereWithAggregatesInput = {
    AND?: cart_itemsScalarWhereWithAggregatesInput | cart_itemsScalarWhereWithAggregatesInput[]
    OR?: cart_itemsScalarWhereWithAggregatesInput[]
    NOT?: cart_itemsScalarWhereWithAggregatesInput | cart_itemsScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"cart_items"> | string
    books_products_id?: StringWithAggregatesFilter<"cart_items"> | string
    quantity?: IntWithAggregatesFilter<"cart_items"> | number
    created_at?: DateTimeWithAggregatesFilter<"cart_items"> | Date | string
    cart_id?: StringWithAggregatesFilter<"cart_items"> | string
  }

  export type authorsCreateInput = {
    id?: string
    name: string
    bio: string
    birthdate: Date | string
    books?: booksCreateNestedManyWithoutAuthorInput
  }

  export type authorsUncheckedCreateInput = {
    id?: string
    name: string
    bio: string
    birthdate: Date | string
    books?: booksUncheckedCreateNestedManyWithoutAuthorInput
  }

  export type authorsUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    bio?: StringFieldUpdateOperationsInput | string
    birthdate?: DateTimeFieldUpdateOperationsInput | Date | string
    books?: booksUpdateManyWithoutAuthorNestedInput
  }

  export type authorsUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    bio?: StringFieldUpdateOperationsInput | string
    birthdate?: DateTimeFieldUpdateOperationsInput | Date | string
    books?: booksUncheckedUpdateManyWithoutAuthorNestedInput
  }

  export type authorsCreateManyInput = {
    id?: string
    name: string
    bio: string
    birthdate: Date | string
  }

  export type authorsUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    bio?: StringFieldUpdateOperationsInput | string
    birthdate?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type authorsUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    bio?: StringFieldUpdateOperationsInput | string
    birthdate?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type customersCreateInput = {
    id?: string
    name: string
    email: string
    address: string
    phone: string
    password: string
    carts?: cartsCreateNestedManyWithoutCustomerInput
    invoices?: invoicesCreateNestedManyWithoutCustomerInput
  }

  export type customersUncheckedCreateInput = {
    id?: string
    name: string
    email: string
    address: string
    phone: string
    password: string
    carts?: cartsUncheckedCreateNestedManyWithoutCustomerInput
    invoices?: invoicesUncheckedCreateNestedManyWithoutCustomerInput
  }

  export type customersUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    carts?: cartsUpdateManyWithoutCustomerNestedInput
    invoices?: invoicesUpdateManyWithoutCustomerNestedInput
  }

  export type customersUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    carts?: cartsUncheckedUpdateManyWithoutCustomerNestedInput
    invoices?: invoicesUncheckedUpdateManyWithoutCustomerNestedInput
  }

  export type customersCreateManyInput = {
    id?: string
    name: string
    email: string
    address: string
    phone: string
    password: string
  }

  export type customersUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
  }

  export type customersUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
  }

  export type booksCreateInput = {
    id?: string
    title: string
    isbn: string
    publication_year: number
    genre: string
    author: authorsCreateNestedOneWithoutBooksInput
    books_products?: books_productsCreateNestedManyWithoutBookInput
  }

  export type booksUncheckedCreateInput = {
    id?: string
    title: string
    isbn: string
    publication_year: number
    genre: string
    author_id: string
    books_products?: books_productsUncheckedCreateNestedManyWithoutBookInput
  }

  export type booksUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    isbn?: StringFieldUpdateOperationsInput | string
    publication_year?: IntFieldUpdateOperationsInput | number
    genre?: StringFieldUpdateOperationsInput | string
    author?: authorsUpdateOneRequiredWithoutBooksNestedInput
    books_products?: books_productsUpdateManyWithoutBookNestedInput
  }

  export type booksUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    isbn?: StringFieldUpdateOperationsInput | string
    publication_year?: IntFieldUpdateOperationsInput | number
    genre?: StringFieldUpdateOperationsInput | string
    author_id?: StringFieldUpdateOperationsInput | string
    books_products?: books_productsUncheckedUpdateManyWithoutBookNestedInput
  }

  export type booksCreateManyInput = {
    id?: string
    title: string
    isbn: string
    publication_year: number
    genre: string
    author_id: string
  }

  export type booksUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    isbn?: StringFieldUpdateOperationsInput | string
    publication_year?: IntFieldUpdateOperationsInput | number
    genre?: StringFieldUpdateOperationsInput | string
  }

  export type booksUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    isbn?: StringFieldUpdateOperationsInput | string
    publication_year?: IntFieldUpdateOperationsInput | number
    genre?: StringFieldUpdateOperationsInput | string
    author_id?: StringFieldUpdateOperationsInput | string
  }

  export type warehousesCreateInput = {
    id?: string
    name: string
    location: string
    capacity: number
    books_products?: books_productsCreateNestedManyWithoutWarehouseInput
  }

  export type warehousesUncheckedCreateInput = {
    id?: string
    name: string
    location: string
    capacity: number
    books_products?: books_productsUncheckedCreateNestedManyWithoutWarehouseInput
  }

  export type warehousesUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    location?: StringFieldUpdateOperationsInput | string
    capacity?: IntFieldUpdateOperationsInput | number
    books_products?: books_productsUpdateManyWithoutWarehouseNestedInput
  }

  export type warehousesUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    location?: StringFieldUpdateOperationsInput | string
    capacity?: IntFieldUpdateOperationsInput | number
    books_products?: books_productsUncheckedUpdateManyWithoutWarehouseNestedInput
  }

  export type warehousesCreateManyInput = {
    id?: string
    name: string
    location: string
    capacity: number
  }

  export type warehousesUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    location?: StringFieldUpdateOperationsInput | string
    capacity?: IntFieldUpdateOperationsInput | number
  }

  export type warehousesUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    location?: StringFieldUpdateOperationsInput | string
    capacity?: IntFieldUpdateOperationsInput | number
  }

  export type cartsCreateInput = {
    id?: string
    created_at: Date | string
    customer: customersCreateNestedOneWithoutCartsInput
    cart_items?: cart_itemsCreateNestedManyWithoutCartInput
    invoices?: invoicesCreateNestedManyWithoutCartInput
  }

  export type cartsUncheckedCreateInput = {
    id?: string
    customer_id: string
    created_at: Date | string
    cart_items?: cart_itemsUncheckedCreateNestedManyWithoutCartInput
    invoices?: invoicesUncheckedCreateNestedManyWithoutCartInput
  }

  export type cartsUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    customer?: customersUpdateOneRequiredWithoutCartsNestedInput
    cart_items?: cart_itemsUpdateManyWithoutCartNestedInput
    invoices?: invoicesUpdateManyWithoutCartNestedInput
  }

  export type cartsUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    customer_id?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    cart_items?: cart_itemsUncheckedUpdateManyWithoutCartNestedInput
    invoices?: invoicesUncheckedUpdateManyWithoutCartNestedInput
  }

  export type cartsCreateManyInput = {
    id?: string
    customer_id: string
    created_at: Date | string
  }

  export type cartsUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type cartsUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    customer_id?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type books_productsCreateInput = {
    id?: string
    price: Decimal | DecimalJsLike | number | string
    stock: number
    format: string
    book: booksCreateNestedOneWithoutBooks_productsInput
    warehouse: warehousesCreateNestedOneWithoutBooks_productsInput
    invoice_items?: invoice_itemsCreateNestedManyWithoutBooks_productsInput
    cart_items?: cart_itemsCreateNestedManyWithoutBooks_productsInput
  }

  export type books_productsUncheckedCreateInput = {
    id?: string
    book_id: string
    price: Decimal | DecimalJsLike | number | string
    stock: number
    format: string
    warehouse_id: string
    invoice_items?: invoice_itemsUncheckedCreateNestedManyWithoutBooks_productsInput
    cart_items?: cart_itemsUncheckedCreateNestedManyWithoutBooks_productsInput
  }

  export type books_productsUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    stock?: IntFieldUpdateOperationsInput | number
    format?: StringFieldUpdateOperationsInput | string
    book?: booksUpdateOneRequiredWithoutBooks_productsNestedInput
    warehouse?: warehousesUpdateOneRequiredWithoutBooks_productsNestedInput
    invoice_items?: invoice_itemsUpdateManyWithoutBooks_productsNestedInput
    cart_items?: cart_itemsUpdateManyWithoutBooks_productsNestedInput
  }

  export type books_productsUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    book_id?: StringFieldUpdateOperationsInput | string
    price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    stock?: IntFieldUpdateOperationsInput | number
    format?: StringFieldUpdateOperationsInput | string
    warehouse_id?: StringFieldUpdateOperationsInput | string
    invoice_items?: invoice_itemsUncheckedUpdateManyWithoutBooks_productsNestedInput
    cart_items?: cart_itemsUncheckedUpdateManyWithoutBooks_productsNestedInput
  }

  export type books_productsCreateManyInput = {
    id?: string
    book_id: string
    price: Decimal | DecimalJsLike | number | string
    stock: number
    format: string
    warehouse_id: string
  }

  export type books_productsUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    stock?: IntFieldUpdateOperationsInput | number
    format?: StringFieldUpdateOperationsInput | string
  }

  export type books_productsUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    book_id?: StringFieldUpdateOperationsInput | string
    price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    stock?: IntFieldUpdateOperationsInput | number
    format?: StringFieldUpdateOperationsInput | string
    warehouse_id?: StringFieldUpdateOperationsInput | string
  }

  export type invoicesCreateInput = {
    id?: string
    total_amount: Decimal | DecimalJsLike | number | string
    issued_at: Date | string
    status: string
    customer: customersCreateNestedOneWithoutInvoicesInput
    cart: cartsCreateNestedOneWithoutInvoicesInput
    invoice_items?: invoice_itemsCreateNestedManyWithoutInvoiceInput
  }

  export type invoicesUncheckedCreateInput = {
    id?: string
    total_amount: Decimal | DecimalJsLike | number | string
    issued_at: Date | string
    status: string
    customer_id: string
    cart_id: string
    invoice_items?: invoice_itemsUncheckedCreateNestedManyWithoutInvoiceInput
  }

  export type invoicesUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    total_amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    issued_at?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: StringFieldUpdateOperationsInput | string
    customer?: customersUpdateOneRequiredWithoutInvoicesNestedInput
    cart?: cartsUpdateOneRequiredWithoutInvoicesNestedInput
    invoice_items?: invoice_itemsUpdateManyWithoutInvoiceNestedInput
  }

  export type invoicesUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    total_amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    issued_at?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: StringFieldUpdateOperationsInput | string
    customer_id?: StringFieldUpdateOperationsInput | string
    cart_id?: StringFieldUpdateOperationsInput | string
    invoice_items?: invoice_itemsUncheckedUpdateManyWithoutInvoiceNestedInput
  }

  export type invoicesCreateManyInput = {
    id?: string
    total_amount: Decimal | DecimalJsLike | number | string
    issued_at: Date | string
    status: string
    customer_id: string
    cart_id: string
  }

  export type invoicesUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    total_amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    issued_at?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: StringFieldUpdateOperationsInput | string
  }

  export type invoicesUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    total_amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    issued_at?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: StringFieldUpdateOperationsInput | string
    customer_id?: StringFieldUpdateOperationsInput | string
    cart_id?: StringFieldUpdateOperationsInput | string
  }

  export type invoice_itemsCreateInput = {
    id?: string
    quantity: number
    price: Decimal | DecimalJsLike | number | string
    books_products: books_productsCreateNestedOneWithoutInvoice_itemsInput
    invoice: invoicesCreateNestedOneWithoutInvoice_itemsInput
  }

  export type invoice_itemsUncheckedCreateInput = {
    id?: string
    books_products_id: string
    quantity: number
    price: Decimal | DecimalJsLike | number | string
    invoice_id: string
  }

  export type invoice_itemsUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    quantity?: IntFieldUpdateOperationsInput | number
    price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    books_products?: books_productsUpdateOneRequiredWithoutInvoice_itemsNestedInput
    invoice?: invoicesUpdateOneRequiredWithoutInvoice_itemsNestedInput
  }

  export type invoice_itemsUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    books_products_id?: StringFieldUpdateOperationsInput | string
    quantity?: IntFieldUpdateOperationsInput | number
    price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    invoice_id?: StringFieldUpdateOperationsInput | string
  }

  export type invoice_itemsCreateManyInput = {
    id?: string
    books_products_id: string
    quantity: number
    price: Decimal | DecimalJsLike | number | string
    invoice_id: string
  }

  export type invoice_itemsUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    quantity?: IntFieldUpdateOperationsInput | number
    price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
  }

  export type invoice_itemsUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    books_products_id?: StringFieldUpdateOperationsInput | string
    quantity?: IntFieldUpdateOperationsInput | number
    price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    invoice_id?: StringFieldUpdateOperationsInput | string
  }

  export type cart_itemsCreateInput = {
    id?: string
    quantity: number
    created_at: Date | string
    books_products: books_productsCreateNestedOneWithoutCart_itemsInput
    cart: cartsCreateNestedOneWithoutCart_itemsInput
  }

  export type cart_itemsUncheckedCreateInput = {
    id?: string
    books_products_id: string
    quantity: number
    created_at: Date | string
    cart_id: string
  }

  export type cart_itemsUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    quantity?: IntFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    books_products?: books_productsUpdateOneRequiredWithoutCart_itemsNestedInput
    cart?: cartsUpdateOneRequiredWithoutCart_itemsNestedInput
  }

  export type cart_itemsUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    books_products_id?: StringFieldUpdateOperationsInput | string
    quantity?: IntFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    cart_id?: StringFieldUpdateOperationsInput | string
  }

  export type cart_itemsCreateManyInput = {
    id?: string
    books_products_id: string
    quantity: number
    created_at: Date | string
    cart_id: string
  }

  export type cart_itemsUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    quantity?: IntFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type cart_itemsUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    books_products_id?: StringFieldUpdateOperationsInput | string
    quantity?: IntFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    cart_id?: StringFieldUpdateOperationsInput | string
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type BooksListRelationFilter = {
    every?: booksWhereInput
    some?: booksWhereInput
    none?: booksWhereInput
  }

  export type booksOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type authorsCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    bio?: SortOrder
    birthdate?: SortOrder
  }

  export type authorsMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    bio?: SortOrder
    birthdate?: SortOrder
  }

  export type authorsMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    bio?: SortOrder
    birthdate?: SortOrder
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type CartsListRelationFilter = {
    every?: cartsWhereInput
    some?: cartsWhereInput
    none?: cartsWhereInput
  }

  export type InvoicesListRelationFilter = {
    every?: invoicesWhereInput
    some?: invoicesWhereInput
    none?: invoicesWhereInput
  }

  export type cartsOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type invoicesOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type customersCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    address?: SortOrder
    phone?: SortOrder
    password?: SortOrder
  }

  export type customersMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    address?: SortOrder
    phone?: SortOrder
    password?: SortOrder
  }

  export type customersMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    address?: SortOrder
    phone?: SortOrder
    password?: SortOrder
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type AuthorsScalarRelationFilter = {
    is?: authorsWhereInput
    isNot?: authorsWhereInput
  }

  export type Books_productsListRelationFilter = {
    every?: books_productsWhereInput
    some?: books_productsWhereInput
    none?: books_productsWhereInput
  }

  export type books_productsOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type booksCountOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    isbn?: SortOrder
    publication_year?: SortOrder
    genre?: SortOrder
    author_id?: SortOrder
  }

  export type booksAvgOrderByAggregateInput = {
    publication_year?: SortOrder
  }

  export type booksMaxOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    isbn?: SortOrder
    publication_year?: SortOrder
    genre?: SortOrder
    author_id?: SortOrder
  }

  export type booksMinOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    isbn?: SortOrder
    publication_year?: SortOrder
    genre?: SortOrder
    author_id?: SortOrder
  }

  export type booksSumOrderByAggregateInput = {
    publication_year?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type warehousesCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    location?: SortOrder
    capacity?: SortOrder
  }

  export type warehousesAvgOrderByAggregateInput = {
    capacity?: SortOrder
  }

  export type warehousesMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    location?: SortOrder
    capacity?: SortOrder
  }

  export type warehousesMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    location?: SortOrder
    capacity?: SortOrder
  }

  export type warehousesSumOrderByAggregateInput = {
    capacity?: SortOrder
  }

  export type CustomersScalarRelationFilter = {
    is?: customersWhereInput
    isNot?: customersWhereInput
  }

  export type Cart_itemsListRelationFilter = {
    every?: cart_itemsWhereInput
    some?: cart_itemsWhereInput
    none?: cart_itemsWhereInput
  }

  export type cart_itemsOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type cartsCountOrderByAggregateInput = {
    id?: SortOrder
    customer_id?: SortOrder
    created_at?: SortOrder
  }

  export type cartsMaxOrderByAggregateInput = {
    id?: SortOrder
    customer_id?: SortOrder
    created_at?: SortOrder
  }

  export type cartsMinOrderByAggregateInput = {
    id?: SortOrder
    customer_id?: SortOrder
    created_at?: SortOrder
  }

  export type DecimalFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
  }

  export type BooksScalarRelationFilter = {
    is?: booksWhereInput
    isNot?: booksWhereInput
  }

  export type WarehousesScalarRelationFilter = {
    is?: warehousesWhereInput
    isNot?: warehousesWhereInput
  }

  export type Invoice_itemsListRelationFilter = {
    every?: invoice_itemsWhereInput
    some?: invoice_itemsWhereInput
    none?: invoice_itemsWhereInput
  }

  export type invoice_itemsOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type books_productsCountOrderByAggregateInput = {
    id?: SortOrder
    book_id?: SortOrder
    price?: SortOrder
    stock?: SortOrder
    format?: SortOrder
    warehouse_id?: SortOrder
  }

  export type books_productsAvgOrderByAggregateInput = {
    price?: SortOrder
    stock?: SortOrder
  }

  export type books_productsMaxOrderByAggregateInput = {
    id?: SortOrder
    book_id?: SortOrder
    price?: SortOrder
    stock?: SortOrder
    format?: SortOrder
    warehouse_id?: SortOrder
  }

  export type books_productsMinOrderByAggregateInput = {
    id?: SortOrder
    book_id?: SortOrder
    price?: SortOrder
    stock?: SortOrder
    format?: SortOrder
    warehouse_id?: SortOrder
  }

  export type books_productsSumOrderByAggregateInput = {
    price?: SortOrder
    stock?: SortOrder
  }

  export type DecimalWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalWithAggregatesFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedDecimalFilter<$PrismaModel>
    _sum?: NestedDecimalFilter<$PrismaModel>
    _min?: NestedDecimalFilter<$PrismaModel>
    _max?: NestedDecimalFilter<$PrismaModel>
  }

  export type CartsScalarRelationFilter = {
    is?: cartsWhereInput
    isNot?: cartsWhereInput
  }

  export type invoicesCountOrderByAggregateInput = {
    id?: SortOrder
    total_amount?: SortOrder
    issued_at?: SortOrder
    status?: SortOrder
    customer_id?: SortOrder
    cart_id?: SortOrder
  }

  export type invoicesAvgOrderByAggregateInput = {
    total_amount?: SortOrder
  }

  export type invoicesMaxOrderByAggregateInput = {
    id?: SortOrder
    total_amount?: SortOrder
    issued_at?: SortOrder
    status?: SortOrder
    customer_id?: SortOrder
    cart_id?: SortOrder
  }

  export type invoicesMinOrderByAggregateInput = {
    id?: SortOrder
    total_amount?: SortOrder
    issued_at?: SortOrder
    status?: SortOrder
    customer_id?: SortOrder
    cart_id?: SortOrder
  }

  export type invoicesSumOrderByAggregateInput = {
    total_amount?: SortOrder
  }

  export type Books_productsScalarRelationFilter = {
    is?: books_productsWhereInput
    isNot?: books_productsWhereInput
  }

  export type InvoicesScalarRelationFilter = {
    is?: invoicesWhereInput
    isNot?: invoicesWhereInput
  }

  export type invoice_itemsCountOrderByAggregateInput = {
    id?: SortOrder
    books_products_id?: SortOrder
    quantity?: SortOrder
    price?: SortOrder
    invoice_id?: SortOrder
  }

  export type invoice_itemsAvgOrderByAggregateInput = {
    quantity?: SortOrder
    price?: SortOrder
  }

  export type invoice_itemsMaxOrderByAggregateInput = {
    id?: SortOrder
    books_products_id?: SortOrder
    quantity?: SortOrder
    price?: SortOrder
    invoice_id?: SortOrder
  }

  export type invoice_itemsMinOrderByAggregateInput = {
    id?: SortOrder
    books_products_id?: SortOrder
    quantity?: SortOrder
    price?: SortOrder
    invoice_id?: SortOrder
  }

  export type invoice_itemsSumOrderByAggregateInput = {
    quantity?: SortOrder
    price?: SortOrder
  }

  export type cart_itemsCountOrderByAggregateInput = {
    id?: SortOrder
    books_products_id?: SortOrder
    quantity?: SortOrder
    created_at?: SortOrder
    cart_id?: SortOrder
  }

  export type cart_itemsAvgOrderByAggregateInput = {
    quantity?: SortOrder
  }

  export type cart_itemsMaxOrderByAggregateInput = {
    id?: SortOrder
    books_products_id?: SortOrder
    quantity?: SortOrder
    created_at?: SortOrder
    cart_id?: SortOrder
  }

  export type cart_itemsMinOrderByAggregateInput = {
    id?: SortOrder
    books_products_id?: SortOrder
    quantity?: SortOrder
    created_at?: SortOrder
    cart_id?: SortOrder
  }

  export type cart_itemsSumOrderByAggregateInput = {
    quantity?: SortOrder
  }

  export type booksCreateNestedManyWithoutAuthorInput = {
    create?: XOR<booksCreateWithoutAuthorInput, booksUncheckedCreateWithoutAuthorInput> | booksCreateWithoutAuthorInput[] | booksUncheckedCreateWithoutAuthorInput[]
    connectOrCreate?: booksCreateOrConnectWithoutAuthorInput | booksCreateOrConnectWithoutAuthorInput[]
    createMany?: booksCreateManyAuthorInputEnvelope
    connect?: booksWhereUniqueInput | booksWhereUniqueInput[]
  }

  export type booksUncheckedCreateNestedManyWithoutAuthorInput = {
    create?: XOR<booksCreateWithoutAuthorInput, booksUncheckedCreateWithoutAuthorInput> | booksCreateWithoutAuthorInput[] | booksUncheckedCreateWithoutAuthorInput[]
    connectOrCreate?: booksCreateOrConnectWithoutAuthorInput | booksCreateOrConnectWithoutAuthorInput[]
    createMany?: booksCreateManyAuthorInputEnvelope
    connect?: booksWhereUniqueInput | booksWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type booksUpdateManyWithoutAuthorNestedInput = {
    create?: XOR<booksCreateWithoutAuthorInput, booksUncheckedCreateWithoutAuthorInput> | booksCreateWithoutAuthorInput[] | booksUncheckedCreateWithoutAuthorInput[]
    connectOrCreate?: booksCreateOrConnectWithoutAuthorInput | booksCreateOrConnectWithoutAuthorInput[]
    upsert?: booksUpsertWithWhereUniqueWithoutAuthorInput | booksUpsertWithWhereUniqueWithoutAuthorInput[]
    createMany?: booksCreateManyAuthorInputEnvelope
    set?: booksWhereUniqueInput | booksWhereUniqueInput[]
    disconnect?: booksWhereUniqueInput | booksWhereUniqueInput[]
    delete?: booksWhereUniqueInput | booksWhereUniqueInput[]
    connect?: booksWhereUniqueInput | booksWhereUniqueInput[]
    update?: booksUpdateWithWhereUniqueWithoutAuthorInput | booksUpdateWithWhereUniqueWithoutAuthorInput[]
    updateMany?: booksUpdateManyWithWhereWithoutAuthorInput | booksUpdateManyWithWhereWithoutAuthorInput[]
    deleteMany?: booksScalarWhereInput | booksScalarWhereInput[]
  }

  export type booksUncheckedUpdateManyWithoutAuthorNestedInput = {
    create?: XOR<booksCreateWithoutAuthorInput, booksUncheckedCreateWithoutAuthorInput> | booksCreateWithoutAuthorInput[] | booksUncheckedCreateWithoutAuthorInput[]
    connectOrCreate?: booksCreateOrConnectWithoutAuthorInput | booksCreateOrConnectWithoutAuthorInput[]
    upsert?: booksUpsertWithWhereUniqueWithoutAuthorInput | booksUpsertWithWhereUniqueWithoutAuthorInput[]
    createMany?: booksCreateManyAuthorInputEnvelope
    set?: booksWhereUniqueInput | booksWhereUniqueInput[]
    disconnect?: booksWhereUniqueInput | booksWhereUniqueInput[]
    delete?: booksWhereUniqueInput | booksWhereUniqueInput[]
    connect?: booksWhereUniqueInput | booksWhereUniqueInput[]
    update?: booksUpdateWithWhereUniqueWithoutAuthorInput | booksUpdateWithWhereUniqueWithoutAuthorInput[]
    updateMany?: booksUpdateManyWithWhereWithoutAuthorInput | booksUpdateManyWithWhereWithoutAuthorInput[]
    deleteMany?: booksScalarWhereInput | booksScalarWhereInput[]
  }

  export type cartsCreateNestedManyWithoutCustomerInput = {
    create?: XOR<cartsCreateWithoutCustomerInput, cartsUncheckedCreateWithoutCustomerInput> | cartsCreateWithoutCustomerInput[] | cartsUncheckedCreateWithoutCustomerInput[]
    connectOrCreate?: cartsCreateOrConnectWithoutCustomerInput | cartsCreateOrConnectWithoutCustomerInput[]
    createMany?: cartsCreateManyCustomerInputEnvelope
    connect?: cartsWhereUniqueInput | cartsWhereUniqueInput[]
  }

  export type invoicesCreateNestedManyWithoutCustomerInput = {
    create?: XOR<invoicesCreateWithoutCustomerInput, invoicesUncheckedCreateWithoutCustomerInput> | invoicesCreateWithoutCustomerInput[] | invoicesUncheckedCreateWithoutCustomerInput[]
    connectOrCreate?: invoicesCreateOrConnectWithoutCustomerInput | invoicesCreateOrConnectWithoutCustomerInput[]
    createMany?: invoicesCreateManyCustomerInputEnvelope
    connect?: invoicesWhereUniqueInput | invoicesWhereUniqueInput[]
  }

  export type cartsUncheckedCreateNestedManyWithoutCustomerInput = {
    create?: XOR<cartsCreateWithoutCustomerInput, cartsUncheckedCreateWithoutCustomerInput> | cartsCreateWithoutCustomerInput[] | cartsUncheckedCreateWithoutCustomerInput[]
    connectOrCreate?: cartsCreateOrConnectWithoutCustomerInput | cartsCreateOrConnectWithoutCustomerInput[]
    createMany?: cartsCreateManyCustomerInputEnvelope
    connect?: cartsWhereUniqueInput | cartsWhereUniqueInput[]
  }

  export type invoicesUncheckedCreateNestedManyWithoutCustomerInput = {
    create?: XOR<invoicesCreateWithoutCustomerInput, invoicesUncheckedCreateWithoutCustomerInput> | invoicesCreateWithoutCustomerInput[] | invoicesUncheckedCreateWithoutCustomerInput[]
    connectOrCreate?: invoicesCreateOrConnectWithoutCustomerInput | invoicesCreateOrConnectWithoutCustomerInput[]
    createMany?: invoicesCreateManyCustomerInputEnvelope
    connect?: invoicesWhereUniqueInput | invoicesWhereUniqueInput[]
  }

  export type cartsUpdateManyWithoutCustomerNestedInput = {
    create?: XOR<cartsCreateWithoutCustomerInput, cartsUncheckedCreateWithoutCustomerInput> | cartsCreateWithoutCustomerInput[] | cartsUncheckedCreateWithoutCustomerInput[]
    connectOrCreate?: cartsCreateOrConnectWithoutCustomerInput | cartsCreateOrConnectWithoutCustomerInput[]
    upsert?: cartsUpsertWithWhereUniqueWithoutCustomerInput | cartsUpsertWithWhereUniqueWithoutCustomerInput[]
    createMany?: cartsCreateManyCustomerInputEnvelope
    set?: cartsWhereUniqueInput | cartsWhereUniqueInput[]
    disconnect?: cartsWhereUniqueInput | cartsWhereUniqueInput[]
    delete?: cartsWhereUniqueInput | cartsWhereUniqueInput[]
    connect?: cartsWhereUniqueInput | cartsWhereUniqueInput[]
    update?: cartsUpdateWithWhereUniqueWithoutCustomerInput | cartsUpdateWithWhereUniqueWithoutCustomerInput[]
    updateMany?: cartsUpdateManyWithWhereWithoutCustomerInput | cartsUpdateManyWithWhereWithoutCustomerInput[]
    deleteMany?: cartsScalarWhereInput | cartsScalarWhereInput[]
  }

  export type invoicesUpdateManyWithoutCustomerNestedInput = {
    create?: XOR<invoicesCreateWithoutCustomerInput, invoicesUncheckedCreateWithoutCustomerInput> | invoicesCreateWithoutCustomerInput[] | invoicesUncheckedCreateWithoutCustomerInput[]
    connectOrCreate?: invoicesCreateOrConnectWithoutCustomerInput | invoicesCreateOrConnectWithoutCustomerInput[]
    upsert?: invoicesUpsertWithWhereUniqueWithoutCustomerInput | invoicesUpsertWithWhereUniqueWithoutCustomerInput[]
    createMany?: invoicesCreateManyCustomerInputEnvelope
    set?: invoicesWhereUniqueInput | invoicesWhereUniqueInput[]
    disconnect?: invoicesWhereUniqueInput | invoicesWhereUniqueInput[]
    delete?: invoicesWhereUniqueInput | invoicesWhereUniqueInput[]
    connect?: invoicesWhereUniqueInput | invoicesWhereUniqueInput[]
    update?: invoicesUpdateWithWhereUniqueWithoutCustomerInput | invoicesUpdateWithWhereUniqueWithoutCustomerInput[]
    updateMany?: invoicesUpdateManyWithWhereWithoutCustomerInput | invoicesUpdateManyWithWhereWithoutCustomerInput[]
    deleteMany?: invoicesScalarWhereInput | invoicesScalarWhereInput[]
  }

  export type cartsUncheckedUpdateManyWithoutCustomerNestedInput = {
    create?: XOR<cartsCreateWithoutCustomerInput, cartsUncheckedCreateWithoutCustomerInput> | cartsCreateWithoutCustomerInput[] | cartsUncheckedCreateWithoutCustomerInput[]
    connectOrCreate?: cartsCreateOrConnectWithoutCustomerInput | cartsCreateOrConnectWithoutCustomerInput[]
    upsert?: cartsUpsertWithWhereUniqueWithoutCustomerInput | cartsUpsertWithWhereUniqueWithoutCustomerInput[]
    createMany?: cartsCreateManyCustomerInputEnvelope
    set?: cartsWhereUniqueInput | cartsWhereUniqueInput[]
    disconnect?: cartsWhereUniqueInput | cartsWhereUniqueInput[]
    delete?: cartsWhereUniqueInput | cartsWhereUniqueInput[]
    connect?: cartsWhereUniqueInput | cartsWhereUniqueInput[]
    update?: cartsUpdateWithWhereUniqueWithoutCustomerInput | cartsUpdateWithWhereUniqueWithoutCustomerInput[]
    updateMany?: cartsUpdateManyWithWhereWithoutCustomerInput | cartsUpdateManyWithWhereWithoutCustomerInput[]
    deleteMany?: cartsScalarWhereInput | cartsScalarWhereInput[]
  }

  export type invoicesUncheckedUpdateManyWithoutCustomerNestedInput = {
    create?: XOR<invoicesCreateWithoutCustomerInput, invoicesUncheckedCreateWithoutCustomerInput> | invoicesCreateWithoutCustomerInput[] | invoicesUncheckedCreateWithoutCustomerInput[]
    connectOrCreate?: invoicesCreateOrConnectWithoutCustomerInput | invoicesCreateOrConnectWithoutCustomerInput[]
    upsert?: invoicesUpsertWithWhereUniqueWithoutCustomerInput | invoicesUpsertWithWhereUniqueWithoutCustomerInput[]
    createMany?: invoicesCreateManyCustomerInputEnvelope
    set?: invoicesWhereUniqueInput | invoicesWhereUniqueInput[]
    disconnect?: invoicesWhereUniqueInput | invoicesWhereUniqueInput[]
    delete?: invoicesWhereUniqueInput | invoicesWhereUniqueInput[]
    connect?: invoicesWhereUniqueInput | invoicesWhereUniqueInput[]
    update?: invoicesUpdateWithWhereUniqueWithoutCustomerInput | invoicesUpdateWithWhereUniqueWithoutCustomerInput[]
    updateMany?: invoicesUpdateManyWithWhereWithoutCustomerInput | invoicesUpdateManyWithWhereWithoutCustomerInput[]
    deleteMany?: invoicesScalarWhereInput | invoicesScalarWhereInput[]
  }

  export type authorsCreateNestedOneWithoutBooksInput = {
    create?: XOR<authorsCreateWithoutBooksInput, authorsUncheckedCreateWithoutBooksInput>
    connectOrCreate?: authorsCreateOrConnectWithoutBooksInput
    connect?: authorsWhereUniqueInput
  }

  export type books_productsCreateNestedManyWithoutBookInput = {
    create?: XOR<books_productsCreateWithoutBookInput, books_productsUncheckedCreateWithoutBookInput> | books_productsCreateWithoutBookInput[] | books_productsUncheckedCreateWithoutBookInput[]
    connectOrCreate?: books_productsCreateOrConnectWithoutBookInput | books_productsCreateOrConnectWithoutBookInput[]
    createMany?: books_productsCreateManyBookInputEnvelope
    connect?: books_productsWhereUniqueInput | books_productsWhereUniqueInput[]
  }

  export type books_productsUncheckedCreateNestedManyWithoutBookInput = {
    create?: XOR<books_productsCreateWithoutBookInput, books_productsUncheckedCreateWithoutBookInput> | books_productsCreateWithoutBookInput[] | books_productsUncheckedCreateWithoutBookInput[]
    connectOrCreate?: books_productsCreateOrConnectWithoutBookInput | books_productsCreateOrConnectWithoutBookInput[]
    createMany?: books_productsCreateManyBookInputEnvelope
    connect?: books_productsWhereUniqueInput | books_productsWhereUniqueInput[]
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type authorsUpdateOneRequiredWithoutBooksNestedInput = {
    create?: XOR<authorsCreateWithoutBooksInput, authorsUncheckedCreateWithoutBooksInput>
    connectOrCreate?: authorsCreateOrConnectWithoutBooksInput
    upsert?: authorsUpsertWithoutBooksInput
    connect?: authorsWhereUniqueInput
    update?: XOR<XOR<authorsUpdateToOneWithWhereWithoutBooksInput, authorsUpdateWithoutBooksInput>, authorsUncheckedUpdateWithoutBooksInput>
  }

  export type books_productsUpdateManyWithoutBookNestedInput = {
    create?: XOR<books_productsCreateWithoutBookInput, books_productsUncheckedCreateWithoutBookInput> | books_productsCreateWithoutBookInput[] | books_productsUncheckedCreateWithoutBookInput[]
    connectOrCreate?: books_productsCreateOrConnectWithoutBookInput | books_productsCreateOrConnectWithoutBookInput[]
    upsert?: books_productsUpsertWithWhereUniqueWithoutBookInput | books_productsUpsertWithWhereUniqueWithoutBookInput[]
    createMany?: books_productsCreateManyBookInputEnvelope
    set?: books_productsWhereUniqueInput | books_productsWhereUniqueInput[]
    disconnect?: books_productsWhereUniqueInput | books_productsWhereUniqueInput[]
    delete?: books_productsWhereUniqueInput | books_productsWhereUniqueInput[]
    connect?: books_productsWhereUniqueInput | books_productsWhereUniqueInput[]
    update?: books_productsUpdateWithWhereUniqueWithoutBookInput | books_productsUpdateWithWhereUniqueWithoutBookInput[]
    updateMany?: books_productsUpdateManyWithWhereWithoutBookInput | books_productsUpdateManyWithWhereWithoutBookInput[]
    deleteMany?: books_productsScalarWhereInput | books_productsScalarWhereInput[]
  }

  export type books_productsUncheckedUpdateManyWithoutBookNestedInput = {
    create?: XOR<books_productsCreateWithoutBookInput, books_productsUncheckedCreateWithoutBookInput> | books_productsCreateWithoutBookInput[] | books_productsUncheckedCreateWithoutBookInput[]
    connectOrCreate?: books_productsCreateOrConnectWithoutBookInput | books_productsCreateOrConnectWithoutBookInput[]
    upsert?: books_productsUpsertWithWhereUniqueWithoutBookInput | books_productsUpsertWithWhereUniqueWithoutBookInput[]
    createMany?: books_productsCreateManyBookInputEnvelope
    set?: books_productsWhereUniqueInput | books_productsWhereUniqueInput[]
    disconnect?: books_productsWhereUniqueInput | books_productsWhereUniqueInput[]
    delete?: books_productsWhereUniqueInput | books_productsWhereUniqueInput[]
    connect?: books_productsWhereUniqueInput | books_productsWhereUniqueInput[]
    update?: books_productsUpdateWithWhereUniqueWithoutBookInput | books_productsUpdateWithWhereUniqueWithoutBookInput[]
    updateMany?: books_productsUpdateManyWithWhereWithoutBookInput | books_productsUpdateManyWithWhereWithoutBookInput[]
    deleteMany?: books_productsScalarWhereInput | books_productsScalarWhereInput[]
  }

  export type books_productsCreateNestedManyWithoutWarehouseInput = {
    create?: XOR<books_productsCreateWithoutWarehouseInput, books_productsUncheckedCreateWithoutWarehouseInput> | books_productsCreateWithoutWarehouseInput[] | books_productsUncheckedCreateWithoutWarehouseInput[]
    connectOrCreate?: books_productsCreateOrConnectWithoutWarehouseInput | books_productsCreateOrConnectWithoutWarehouseInput[]
    createMany?: books_productsCreateManyWarehouseInputEnvelope
    connect?: books_productsWhereUniqueInput | books_productsWhereUniqueInput[]
  }

  export type books_productsUncheckedCreateNestedManyWithoutWarehouseInput = {
    create?: XOR<books_productsCreateWithoutWarehouseInput, books_productsUncheckedCreateWithoutWarehouseInput> | books_productsCreateWithoutWarehouseInput[] | books_productsUncheckedCreateWithoutWarehouseInput[]
    connectOrCreate?: books_productsCreateOrConnectWithoutWarehouseInput | books_productsCreateOrConnectWithoutWarehouseInput[]
    createMany?: books_productsCreateManyWarehouseInputEnvelope
    connect?: books_productsWhereUniqueInput | books_productsWhereUniqueInput[]
  }

  export type books_productsUpdateManyWithoutWarehouseNestedInput = {
    create?: XOR<books_productsCreateWithoutWarehouseInput, books_productsUncheckedCreateWithoutWarehouseInput> | books_productsCreateWithoutWarehouseInput[] | books_productsUncheckedCreateWithoutWarehouseInput[]
    connectOrCreate?: books_productsCreateOrConnectWithoutWarehouseInput | books_productsCreateOrConnectWithoutWarehouseInput[]
    upsert?: books_productsUpsertWithWhereUniqueWithoutWarehouseInput | books_productsUpsertWithWhereUniqueWithoutWarehouseInput[]
    createMany?: books_productsCreateManyWarehouseInputEnvelope
    set?: books_productsWhereUniqueInput | books_productsWhereUniqueInput[]
    disconnect?: books_productsWhereUniqueInput | books_productsWhereUniqueInput[]
    delete?: books_productsWhereUniqueInput | books_productsWhereUniqueInput[]
    connect?: books_productsWhereUniqueInput | books_productsWhereUniqueInput[]
    update?: books_productsUpdateWithWhereUniqueWithoutWarehouseInput | books_productsUpdateWithWhereUniqueWithoutWarehouseInput[]
    updateMany?: books_productsUpdateManyWithWhereWithoutWarehouseInput | books_productsUpdateManyWithWhereWithoutWarehouseInput[]
    deleteMany?: books_productsScalarWhereInput | books_productsScalarWhereInput[]
  }

  export type books_productsUncheckedUpdateManyWithoutWarehouseNestedInput = {
    create?: XOR<books_productsCreateWithoutWarehouseInput, books_productsUncheckedCreateWithoutWarehouseInput> | books_productsCreateWithoutWarehouseInput[] | books_productsUncheckedCreateWithoutWarehouseInput[]
    connectOrCreate?: books_productsCreateOrConnectWithoutWarehouseInput | books_productsCreateOrConnectWithoutWarehouseInput[]
    upsert?: books_productsUpsertWithWhereUniqueWithoutWarehouseInput | books_productsUpsertWithWhereUniqueWithoutWarehouseInput[]
    createMany?: books_productsCreateManyWarehouseInputEnvelope
    set?: books_productsWhereUniqueInput | books_productsWhereUniqueInput[]
    disconnect?: books_productsWhereUniqueInput | books_productsWhereUniqueInput[]
    delete?: books_productsWhereUniqueInput | books_productsWhereUniqueInput[]
    connect?: books_productsWhereUniqueInput | books_productsWhereUniqueInput[]
    update?: books_productsUpdateWithWhereUniqueWithoutWarehouseInput | books_productsUpdateWithWhereUniqueWithoutWarehouseInput[]
    updateMany?: books_productsUpdateManyWithWhereWithoutWarehouseInput | books_productsUpdateManyWithWhereWithoutWarehouseInput[]
    deleteMany?: books_productsScalarWhereInput | books_productsScalarWhereInput[]
  }

  export type customersCreateNestedOneWithoutCartsInput = {
    create?: XOR<customersCreateWithoutCartsInput, customersUncheckedCreateWithoutCartsInput>
    connectOrCreate?: customersCreateOrConnectWithoutCartsInput
    connect?: customersWhereUniqueInput
  }

  export type cart_itemsCreateNestedManyWithoutCartInput = {
    create?: XOR<cart_itemsCreateWithoutCartInput, cart_itemsUncheckedCreateWithoutCartInput> | cart_itemsCreateWithoutCartInput[] | cart_itemsUncheckedCreateWithoutCartInput[]
    connectOrCreate?: cart_itemsCreateOrConnectWithoutCartInput | cart_itemsCreateOrConnectWithoutCartInput[]
    createMany?: cart_itemsCreateManyCartInputEnvelope
    connect?: cart_itemsWhereUniqueInput | cart_itemsWhereUniqueInput[]
  }

  export type invoicesCreateNestedManyWithoutCartInput = {
    create?: XOR<invoicesCreateWithoutCartInput, invoicesUncheckedCreateWithoutCartInput> | invoicesCreateWithoutCartInput[] | invoicesUncheckedCreateWithoutCartInput[]
    connectOrCreate?: invoicesCreateOrConnectWithoutCartInput | invoicesCreateOrConnectWithoutCartInput[]
    createMany?: invoicesCreateManyCartInputEnvelope
    connect?: invoicesWhereUniqueInput | invoicesWhereUniqueInput[]
  }

  export type cart_itemsUncheckedCreateNestedManyWithoutCartInput = {
    create?: XOR<cart_itemsCreateWithoutCartInput, cart_itemsUncheckedCreateWithoutCartInput> | cart_itemsCreateWithoutCartInput[] | cart_itemsUncheckedCreateWithoutCartInput[]
    connectOrCreate?: cart_itemsCreateOrConnectWithoutCartInput | cart_itemsCreateOrConnectWithoutCartInput[]
    createMany?: cart_itemsCreateManyCartInputEnvelope
    connect?: cart_itemsWhereUniqueInput | cart_itemsWhereUniqueInput[]
  }

  export type invoicesUncheckedCreateNestedManyWithoutCartInput = {
    create?: XOR<invoicesCreateWithoutCartInput, invoicesUncheckedCreateWithoutCartInput> | invoicesCreateWithoutCartInput[] | invoicesUncheckedCreateWithoutCartInput[]
    connectOrCreate?: invoicesCreateOrConnectWithoutCartInput | invoicesCreateOrConnectWithoutCartInput[]
    createMany?: invoicesCreateManyCartInputEnvelope
    connect?: invoicesWhereUniqueInput | invoicesWhereUniqueInput[]
  }

  export type customersUpdateOneRequiredWithoutCartsNestedInput = {
    create?: XOR<customersCreateWithoutCartsInput, customersUncheckedCreateWithoutCartsInput>
    connectOrCreate?: customersCreateOrConnectWithoutCartsInput
    upsert?: customersUpsertWithoutCartsInput
    connect?: customersWhereUniqueInput
    update?: XOR<XOR<customersUpdateToOneWithWhereWithoutCartsInput, customersUpdateWithoutCartsInput>, customersUncheckedUpdateWithoutCartsInput>
  }

  export type cart_itemsUpdateManyWithoutCartNestedInput = {
    create?: XOR<cart_itemsCreateWithoutCartInput, cart_itemsUncheckedCreateWithoutCartInput> | cart_itemsCreateWithoutCartInput[] | cart_itemsUncheckedCreateWithoutCartInput[]
    connectOrCreate?: cart_itemsCreateOrConnectWithoutCartInput | cart_itemsCreateOrConnectWithoutCartInput[]
    upsert?: cart_itemsUpsertWithWhereUniqueWithoutCartInput | cart_itemsUpsertWithWhereUniqueWithoutCartInput[]
    createMany?: cart_itemsCreateManyCartInputEnvelope
    set?: cart_itemsWhereUniqueInput | cart_itemsWhereUniqueInput[]
    disconnect?: cart_itemsWhereUniqueInput | cart_itemsWhereUniqueInput[]
    delete?: cart_itemsWhereUniqueInput | cart_itemsWhereUniqueInput[]
    connect?: cart_itemsWhereUniqueInput | cart_itemsWhereUniqueInput[]
    update?: cart_itemsUpdateWithWhereUniqueWithoutCartInput | cart_itemsUpdateWithWhereUniqueWithoutCartInput[]
    updateMany?: cart_itemsUpdateManyWithWhereWithoutCartInput | cart_itemsUpdateManyWithWhereWithoutCartInput[]
    deleteMany?: cart_itemsScalarWhereInput | cart_itemsScalarWhereInput[]
  }

  export type invoicesUpdateManyWithoutCartNestedInput = {
    create?: XOR<invoicesCreateWithoutCartInput, invoicesUncheckedCreateWithoutCartInput> | invoicesCreateWithoutCartInput[] | invoicesUncheckedCreateWithoutCartInput[]
    connectOrCreate?: invoicesCreateOrConnectWithoutCartInput | invoicesCreateOrConnectWithoutCartInput[]
    upsert?: invoicesUpsertWithWhereUniqueWithoutCartInput | invoicesUpsertWithWhereUniqueWithoutCartInput[]
    createMany?: invoicesCreateManyCartInputEnvelope
    set?: invoicesWhereUniqueInput | invoicesWhereUniqueInput[]
    disconnect?: invoicesWhereUniqueInput | invoicesWhereUniqueInput[]
    delete?: invoicesWhereUniqueInput | invoicesWhereUniqueInput[]
    connect?: invoicesWhereUniqueInput | invoicesWhereUniqueInput[]
    update?: invoicesUpdateWithWhereUniqueWithoutCartInput | invoicesUpdateWithWhereUniqueWithoutCartInput[]
    updateMany?: invoicesUpdateManyWithWhereWithoutCartInput | invoicesUpdateManyWithWhereWithoutCartInput[]
    deleteMany?: invoicesScalarWhereInput | invoicesScalarWhereInput[]
  }

  export type cart_itemsUncheckedUpdateManyWithoutCartNestedInput = {
    create?: XOR<cart_itemsCreateWithoutCartInput, cart_itemsUncheckedCreateWithoutCartInput> | cart_itemsCreateWithoutCartInput[] | cart_itemsUncheckedCreateWithoutCartInput[]
    connectOrCreate?: cart_itemsCreateOrConnectWithoutCartInput | cart_itemsCreateOrConnectWithoutCartInput[]
    upsert?: cart_itemsUpsertWithWhereUniqueWithoutCartInput | cart_itemsUpsertWithWhereUniqueWithoutCartInput[]
    createMany?: cart_itemsCreateManyCartInputEnvelope
    set?: cart_itemsWhereUniqueInput | cart_itemsWhereUniqueInput[]
    disconnect?: cart_itemsWhereUniqueInput | cart_itemsWhereUniqueInput[]
    delete?: cart_itemsWhereUniqueInput | cart_itemsWhereUniqueInput[]
    connect?: cart_itemsWhereUniqueInput | cart_itemsWhereUniqueInput[]
    update?: cart_itemsUpdateWithWhereUniqueWithoutCartInput | cart_itemsUpdateWithWhereUniqueWithoutCartInput[]
    updateMany?: cart_itemsUpdateManyWithWhereWithoutCartInput | cart_itemsUpdateManyWithWhereWithoutCartInput[]
    deleteMany?: cart_itemsScalarWhereInput | cart_itemsScalarWhereInput[]
  }

  export type invoicesUncheckedUpdateManyWithoutCartNestedInput = {
    create?: XOR<invoicesCreateWithoutCartInput, invoicesUncheckedCreateWithoutCartInput> | invoicesCreateWithoutCartInput[] | invoicesUncheckedCreateWithoutCartInput[]
    connectOrCreate?: invoicesCreateOrConnectWithoutCartInput | invoicesCreateOrConnectWithoutCartInput[]
    upsert?: invoicesUpsertWithWhereUniqueWithoutCartInput | invoicesUpsertWithWhereUniqueWithoutCartInput[]
    createMany?: invoicesCreateManyCartInputEnvelope
    set?: invoicesWhereUniqueInput | invoicesWhereUniqueInput[]
    disconnect?: invoicesWhereUniqueInput | invoicesWhereUniqueInput[]
    delete?: invoicesWhereUniqueInput | invoicesWhereUniqueInput[]
    connect?: invoicesWhereUniqueInput | invoicesWhereUniqueInput[]
    update?: invoicesUpdateWithWhereUniqueWithoutCartInput | invoicesUpdateWithWhereUniqueWithoutCartInput[]
    updateMany?: invoicesUpdateManyWithWhereWithoutCartInput | invoicesUpdateManyWithWhereWithoutCartInput[]
    deleteMany?: invoicesScalarWhereInput | invoicesScalarWhereInput[]
  }

  export type booksCreateNestedOneWithoutBooks_productsInput = {
    create?: XOR<booksCreateWithoutBooks_productsInput, booksUncheckedCreateWithoutBooks_productsInput>
    connectOrCreate?: booksCreateOrConnectWithoutBooks_productsInput
    connect?: booksWhereUniqueInput
  }

  export type warehousesCreateNestedOneWithoutBooks_productsInput = {
    create?: XOR<warehousesCreateWithoutBooks_productsInput, warehousesUncheckedCreateWithoutBooks_productsInput>
    connectOrCreate?: warehousesCreateOrConnectWithoutBooks_productsInput
    connect?: warehousesWhereUniqueInput
  }

  export type invoice_itemsCreateNestedManyWithoutBooks_productsInput = {
    create?: XOR<invoice_itemsCreateWithoutBooks_productsInput, invoice_itemsUncheckedCreateWithoutBooks_productsInput> | invoice_itemsCreateWithoutBooks_productsInput[] | invoice_itemsUncheckedCreateWithoutBooks_productsInput[]
    connectOrCreate?: invoice_itemsCreateOrConnectWithoutBooks_productsInput | invoice_itemsCreateOrConnectWithoutBooks_productsInput[]
    createMany?: invoice_itemsCreateManyBooks_productsInputEnvelope
    connect?: invoice_itemsWhereUniqueInput | invoice_itemsWhereUniqueInput[]
  }

  export type cart_itemsCreateNestedManyWithoutBooks_productsInput = {
    create?: XOR<cart_itemsCreateWithoutBooks_productsInput, cart_itemsUncheckedCreateWithoutBooks_productsInput> | cart_itemsCreateWithoutBooks_productsInput[] | cart_itemsUncheckedCreateWithoutBooks_productsInput[]
    connectOrCreate?: cart_itemsCreateOrConnectWithoutBooks_productsInput | cart_itemsCreateOrConnectWithoutBooks_productsInput[]
    createMany?: cart_itemsCreateManyBooks_productsInputEnvelope
    connect?: cart_itemsWhereUniqueInput | cart_itemsWhereUniqueInput[]
  }

  export type invoice_itemsUncheckedCreateNestedManyWithoutBooks_productsInput = {
    create?: XOR<invoice_itemsCreateWithoutBooks_productsInput, invoice_itemsUncheckedCreateWithoutBooks_productsInput> | invoice_itemsCreateWithoutBooks_productsInput[] | invoice_itemsUncheckedCreateWithoutBooks_productsInput[]
    connectOrCreate?: invoice_itemsCreateOrConnectWithoutBooks_productsInput | invoice_itemsCreateOrConnectWithoutBooks_productsInput[]
    createMany?: invoice_itemsCreateManyBooks_productsInputEnvelope
    connect?: invoice_itemsWhereUniqueInput | invoice_itemsWhereUniqueInput[]
  }

  export type cart_itemsUncheckedCreateNestedManyWithoutBooks_productsInput = {
    create?: XOR<cart_itemsCreateWithoutBooks_productsInput, cart_itemsUncheckedCreateWithoutBooks_productsInput> | cart_itemsCreateWithoutBooks_productsInput[] | cart_itemsUncheckedCreateWithoutBooks_productsInput[]
    connectOrCreate?: cart_itemsCreateOrConnectWithoutBooks_productsInput | cart_itemsCreateOrConnectWithoutBooks_productsInput[]
    createMany?: cart_itemsCreateManyBooks_productsInputEnvelope
    connect?: cart_itemsWhereUniqueInput | cart_itemsWhereUniqueInput[]
  }

  export type DecimalFieldUpdateOperationsInput = {
    set?: Decimal | DecimalJsLike | number | string
    increment?: Decimal | DecimalJsLike | number | string
    decrement?: Decimal | DecimalJsLike | number | string
    multiply?: Decimal | DecimalJsLike | number | string
    divide?: Decimal | DecimalJsLike | number | string
  }

  export type booksUpdateOneRequiredWithoutBooks_productsNestedInput = {
    create?: XOR<booksCreateWithoutBooks_productsInput, booksUncheckedCreateWithoutBooks_productsInput>
    connectOrCreate?: booksCreateOrConnectWithoutBooks_productsInput
    upsert?: booksUpsertWithoutBooks_productsInput
    connect?: booksWhereUniqueInput
    update?: XOR<XOR<booksUpdateToOneWithWhereWithoutBooks_productsInput, booksUpdateWithoutBooks_productsInput>, booksUncheckedUpdateWithoutBooks_productsInput>
  }

  export type warehousesUpdateOneRequiredWithoutBooks_productsNestedInput = {
    create?: XOR<warehousesCreateWithoutBooks_productsInput, warehousesUncheckedCreateWithoutBooks_productsInput>
    connectOrCreate?: warehousesCreateOrConnectWithoutBooks_productsInput
    upsert?: warehousesUpsertWithoutBooks_productsInput
    connect?: warehousesWhereUniqueInput
    update?: XOR<XOR<warehousesUpdateToOneWithWhereWithoutBooks_productsInput, warehousesUpdateWithoutBooks_productsInput>, warehousesUncheckedUpdateWithoutBooks_productsInput>
  }

  export type invoice_itemsUpdateManyWithoutBooks_productsNestedInput = {
    create?: XOR<invoice_itemsCreateWithoutBooks_productsInput, invoice_itemsUncheckedCreateWithoutBooks_productsInput> | invoice_itemsCreateWithoutBooks_productsInput[] | invoice_itemsUncheckedCreateWithoutBooks_productsInput[]
    connectOrCreate?: invoice_itemsCreateOrConnectWithoutBooks_productsInput | invoice_itemsCreateOrConnectWithoutBooks_productsInput[]
    upsert?: invoice_itemsUpsertWithWhereUniqueWithoutBooks_productsInput | invoice_itemsUpsertWithWhereUniqueWithoutBooks_productsInput[]
    createMany?: invoice_itemsCreateManyBooks_productsInputEnvelope
    set?: invoice_itemsWhereUniqueInput | invoice_itemsWhereUniqueInput[]
    disconnect?: invoice_itemsWhereUniqueInput | invoice_itemsWhereUniqueInput[]
    delete?: invoice_itemsWhereUniqueInput | invoice_itemsWhereUniqueInput[]
    connect?: invoice_itemsWhereUniqueInput | invoice_itemsWhereUniqueInput[]
    update?: invoice_itemsUpdateWithWhereUniqueWithoutBooks_productsInput | invoice_itemsUpdateWithWhereUniqueWithoutBooks_productsInput[]
    updateMany?: invoice_itemsUpdateManyWithWhereWithoutBooks_productsInput | invoice_itemsUpdateManyWithWhereWithoutBooks_productsInput[]
    deleteMany?: invoice_itemsScalarWhereInput | invoice_itemsScalarWhereInput[]
  }

  export type cart_itemsUpdateManyWithoutBooks_productsNestedInput = {
    create?: XOR<cart_itemsCreateWithoutBooks_productsInput, cart_itemsUncheckedCreateWithoutBooks_productsInput> | cart_itemsCreateWithoutBooks_productsInput[] | cart_itemsUncheckedCreateWithoutBooks_productsInput[]
    connectOrCreate?: cart_itemsCreateOrConnectWithoutBooks_productsInput | cart_itemsCreateOrConnectWithoutBooks_productsInput[]
    upsert?: cart_itemsUpsertWithWhereUniqueWithoutBooks_productsInput | cart_itemsUpsertWithWhereUniqueWithoutBooks_productsInput[]
    createMany?: cart_itemsCreateManyBooks_productsInputEnvelope
    set?: cart_itemsWhereUniqueInput | cart_itemsWhereUniqueInput[]
    disconnect?: cart_itemsWhereUniqueInput | cart_itemsWhereUniqueInput[]
    delete?: cart_itemsWhereUniqueInput | cart_itemsWhereUniqueInput[]
    connect?: cart_itemsWhereUniqueInput | cart_itemsWhereUniqueInput[]
    update?: cart_itemsUpdateWithWhereUniqueWithoutBooks_productsInput | cart_itemsUpdateWithWhereUniqueWithoutBooks_productsInput[]
    updateMany?: cart_itemsUpdateManyWithWhereWithoutBooks_productsInput | cart_itemsUpdateManyWithWhereWithoutBooks_productsInput[]
    deleteMany?: cart_itemsScalarWhereInput | cart_itemsScalarWhereInput[]
  }

  export type invoice_itemsUncheckedUpdateManyWithoutBooks_productsNestedInput = {
    create?: XOR<invoice_itemsCreateWithoutBooks_productsInput, invoice_itemsUncheckedCreateWithoutBooks_productsInput> | invoice_itemsCreateWithoutBooks_productsInput[] | invoice_itemsUncheckedCreateWithoutBooks_productsInput[]
    connectOrCreate?: invoice_itemsCreateOrConnectWithoutBooks_productsInput | invoice_itemsCreateOrConnectWithoutBooks_productsInput[]
    upsert?: invoice_itemsUpsertWithWhereUniqueWithoutBooks_productsInput | invoice_itemsUpsertWithWhereUniqueWithoutBooks_productsInput[]
    createMany?: invoice_itemsCreateManyBooks_productsInputEnvelope
    set?: invoice_itemsWhereUniqueInput | invoice_itemsWhereUniqueInput[]
    disconnect?: invoice_itemsWhereUniqueInput | invoice_itemsWhereUniqueInput[]
    delete?: invoice_itemsWhereUniqueInput | invoice_itemsWhereUniqueInput[]
    connect?: invoice_itemsWhereUniqueInput | invoice_itemsWhereUniqueInput[]
    update?: invoice_itemsUpdateWithWhereUniqueWithoutBooks_productsInput | invoice_itemsUpdateWithWhereUniqueWithoutBooks_productsInput[]
    updateMany?: invoice_itemsUpdateManyWithWhereWithoutBooks_productsInput | invoice_itemsUpdateManyWithWhereWithoutBooks_productsInput[]
    deleteMany?: invoice_itemsScalarWhereInput | invoice_itemsScalarWhereInput[]
  }

  export type cart_itemsUncheckedUpdateManyWithoutBooks_productsNestedInput = {
    create?: XOR<cart_itemsCreateWithoutBooks_productsInput, cart_itemsUncheckedCreateWithoutBooks_productsInput> | cart_itemsCreateWithoutBooks_productsInput[] | cart_itemsUncheckedCreateWithoutBooks_productsInput[]
    connectOrCreate?: cart_itemsCreateOrConnectWithoutBooks_productsInput | cart_itemsCreateOrConnectWithoutBooks_productsInput[]
    upsert?: cart_itemsUpsertWithWhereUniqueWithoutBooks_productsInput | cart_itemsUpsertWithWhereUniqueWithoutBooks_productsInput[]
    createMany?: cart_itemsCreateManyBooks_productsInputEnvelope
    set?: cart_itemsWhereUniqueInput | cart_itemsWhereUniqueInput[]
    disconnect?: cart_itemsWhereUniqueInput | cart_itemsWhereUniqueInput[]
    delete?: cart_itemsWhereUniqueInput | cart_itemsWhereUniqueInput[]
    connect?: cart_itemsWhereUniqueInput | cart_itemsWhereUniqueInput[]
    update?: cart_itemsUpdateWithWhereUniqueWithoutBooks_productsInput | cart_itemsUpdateWithWhereUniqueWithoutBooks_productsInput[]
    updateMany?: cart_itemsUpdateManyWithWhereWithoutBooks_productsInput | cart_itemsUpdateManyWithWhereWithoutBooks_productsInput[]
    deleteMany?: cart_itemsScalarWhereInput | cart_itemsScalarWhereInput[]
  }

  export type customersCreateNestedOneWithoutInvoicesInput = {
    create?: XOR<customersCreateWithoutInvoicesInput, customersUncheckedCreateWithoutInvoicesInput>
    connectOrCreate?: customersCreateOrConnectWithoutInvoicesInput
    connect?: customersWhereUniqueInput
  }

  export type cartsCreateNestedOneWithoutInvoicesInput = {
    create?: XOR<cartsCreateWithoutInvoicesInput, cartsUncheckedCreateWithoutInvoicesInput>
    connectOrCreate?: cartsCreateOrConnectWithoutInvoicesInput
    connect?: cartsWhereUniqueInput
  }

  export type invoice_itemsCreateNestedManyWithoutInvoiceInput = {
    create?: XOR<invoice_itemsCreateWithoutInvoiceInput, invoice_itemsUncheckedCreateWithoutInvoiceInput> | invoice_itemsCreateWithoutInvoiceInput[] | invoice_itemsUncheckedCreateWithoutInvoiceInput[]
    connectOrCreate?: invoice_itemsCreateOrConnectWithoutInvoiceInput | invoice_itemsCreateOrConnectWithoutInvoiceInput[]
    createMany?: invoice_itemsCreateManyInvoiceInputEnvelope
    connect?: invoice_itemsWhereUniqueInput | invoice_itemsWhereUniqueInput[]
  }

  export type invoice_itemsUncheckedCreateNestedManyWithoutInvoiceInput = {
    create?: XOR<invoice_itemsCreateWithoutInvoiceInput, invoice_itemsUncheckedCreateWithoutInvoiceInput> | invoice_itemsCreateWithoutInvoiceInput[] | invoice_itemsUncheckedCreateWithoutInvoiceInput[]
    connectOrCreate?: invoice_itemsCreateOrConnectWithoutInvoiceInput | invoice_itemsCreateOrConnectWithoutInvoiceInput[]
    createMany?: invoice_itemsCreateManyInvoiceInputEnvelope
    connect?: invoice_itemsWhereUniqueInput | invoice_itemsWhereUniqueInput[]
  }

  export type customersUpdateOneRequiredWithoutInvoicesNestedInput = {
    create?: XOR<customersCreateWithoutInvoicesInput, customersUncheckedCreateWithoutInvoicesInput>
    connectOrCreate?: customersCreateOrConnectWithoutInvoicesInput
    upsert?: customersUpsertWithoutInvoicesInput
    connect?: customersWhereUniqueInput
    update?: XOR<XOR<customersUpdateToOneWithWhereWithoutInvoicesInput, customersUpdateWithoutInvoicesInput>, customersUncheckedUpdateWithoutInvoicesInput>
  }

  export type cartsUpdateOneRequiredWithoutInvoicesNestedInput = {
    create?: XOR<cartsCreateWithoutInvoicesInput, cartsUncheckedCreateWithoutInvoicesInput>
    connectOrCreate?: cartsCreateOrConnectWithoutInvoicesInput
    upsert?: cartsUpsertWithoutInvoicesInput
    connect?: cartsWhereUniqueInput
    update?: XOR<XOR<cartsUpdateToOneWithWhereWithoutInvoicesInput, cartsUpdateWithoutInvoicesInput>, cartsUncheckedUpdateWithoutInvoicesInput>
  }

  export type invoice_itemsUpdateManyWithoutInvoiceNestedInput = {
    create?: XOR<invoice_itemsCreateWithoutInvoiceInput, invoice_itemsUncheckedCreateWithoutInvoiceInput> | invoice_itemsCreateWithoutInvoiceInput[] | invoice_itemsUncheckedCreateWithoutInvoiceInput[]
    connectOrCreate?: invoice_itemsCreateOrConnectWithoutInvoiceInput | invoice_itemsCreateOrConnectWithoutInvoiceInput[]
    upsert?: invoice_itemsUpsertWithWhereUniqueWithoutInvoiceInput | invoice_itemsUpsertWithWhereUniqueWithoutInvoiceInput[]
    createMany?: invoice_itemsCreateManyInvoiceInputEnvelope
    set?: invoice_itemsWhereUniqueInput | invoice_itemsWhereUniqueInput[]
    disconnect?: invoice_itemsWhereUniqueInput | invoice_itemsWhereUniqueInput[]
    delete?: invoice_itemsWhereUniqueInput | invoice_itemsWhereUniqueInput[]
    connect?: invoice_itemsWhereUniqueInput | invoice_itemsWhereUniqueInput[]
    update?: invoice_itemsUpdateWithWhereUniqueWithoutInvoiceInput | invoice_itemsUpdateWithWhereUniqueWithoutInvoiceInput[]
    updateMany?: invoice_itemsUpdateManyWithWhereWithoutInvoiceInput | invoice_itemsUpdateManyWithWhereWithoutInvoiceInput[]
    deleteMany?: invoice_itemsScalarWhereInput | invoice_itemsScalarWhereInput[]
  }

  export type invoice_itemsUncheckedUpdateManyWithoutInvoiceNestedInput = {
    create?: XOR<invoice_itemsCreateWithoutInvoiceInput, invoice_itemsUncheckedCreateWithoutInvoiceInput> | invoice_itemsCreateWithoutInvoiceInput[] | invoice_itemsUncheckedCreateWithoutInvoiceInput[]
    connectOrCreate?: invoice_itemsCreateOrConnectWithoutInvoiceInput | invoice_itemsCreateOrConnectWithoutInvoiceInput[]
    upsert?: invoice_itemsUpsertWithWhereUniqueWithoutInvoiceInput | invoice_itemsUpsertWithWhereUniqueWithoutInvoiceInput[]
    createMany?: invoice_itemsCreateManyInvoiceInputEnvelope
    set?: invoice_itemsWhereUniqueInput | invoice_itemsWhereUniqueInput[]
    disconnect?: invoice_itemsWhereUniqueInput | invoice_itemsWhereUniqueInput[]
    delete?: invoice_itemsWhereUniqueInput | invoice_itemsWhereUniqueInput[]
    connect?: invoice_itemsWhereUniqueInput | invoice_itemsWhereUniqueInput[]
    update?: invoice_itemsUpdateWithWhereUniqueWithoutInvoiceInput | invoice_itemsUpdateWithWhereUniqueWithoutInvoiceInput[]
    updateMany?: invoice_itemsUpdateManyWithWhereWithoutInvoiceInput | invoice_itemsUpdateManyWithWhereWithoutInvoiceInput[]
    deleteMany?: invoice_itemsScalarWhereInput | invoice_itemsScalarWhereInput[]
  }

  export type books_productsCreateNestedOneWithoutInvoice_itemsInput = {
    create?: XOR<books_productsCreateWithoutInvoice_itemsInput, books_productsUncheckedCreateWithoutInvoice_itemsInput>
    connectOrCreate?: books_productsCreateOrConnectWithoutInvoice_itemsInput
    connect?: books_productsWhereUniqueInput
  }

  export type invoicesCreateNestedOneWithoutInvoice_itemsInput = {
    create?: XOR<invoicesCreateWithoutInvoice_itemsInput, invoicesUncheckedCreateWithoutInvoice_itemsInput>
    connectOrCreate?: invoicesCreateOrConnectWithoutInvoice_itemsInput
    connect?: invoicesWhereUniqueInput
  }

  export type books_productsUpdateOneRequiredWithoutInvoice_itemsNestedInput = {
    create?: XOR<books_productsCreateWithoutInvoice_itemsInput, books_productsUncheckedCreateWithoutInvoice_itemsInput>
    connectOrCreate?: books_productsCreateOrConnectWithoutInvoice_itemsInput
    upsert?: books_productsUpsertWithoutInvoice_itemsInput
    connect?: books_productsWhereUniqueInput
    update?: XOR<XOR<books_productsUpdateToOneWithWhereWithoutInvoice_itemsInput, books_productsUpdateWithoutInvoice_itemsInput>, books_productsUncheckedUpdateWithoutInvoice_itemsInput>
  }

  export type invoicesUpdateOneRequiredWithoutInvoice_itemsNestedInput = {
    create?: XOR<invoicesCreateWithoutInvoice_itemsInput, invoicesUncheckedCreateWithoutInvoice_itemsInput>
    connectOrCreate?: invoicesCreateOrConnectWithoutInvoice_itemsInput
    upsert?: invoicesUpsertWithoutInvoice_itemsInput
    connect?: invoicesWhereUniqueInput
    update?: XOR<XOR<invoicesUpdateToOneWithWhereWithoutInvoice_itemsInput, invoicesUpdateWithoutInvoice_itemsInput>, invoicesUncheckedUpdateWithoutInvoice_itemsInput>
  }

  export type books_productsCreateNestedOneWithoutCart_itemsInput = {
    create?: XOR<books_productsCreateWithoutCart_itemsInput, books_productsUncheckedCreateWithoutCart_itemsInput>
    connectOrCreate?: books_productsCreateOrConnectWithoutCart_itemsInput
    connect?: books_productsWhereUniqueInput
  }

  export type cartsCreateNestedOneWithoutCart_itemsInput = {
    create?: XOR<cartsCreateWithoutCart_itemsInput, cartsUncheckedCreateWithoutCart_itemsInput>
    connectOrCreate?: cartsCreateOrConnectWithoutCart_itemsInput
    connect?: cartsWhereUniqueInput
  }

  export type books_productsUpdateOneRequiredWithoutCart_itemsNestedInput = {
    create?: XOR<books_productsCreateWithoutCart_itemsInput, books_productsUncheckedCreateWithoutCart_itemsInput>
    connectOrCreate?: books_productsCreateOrConnectWithoutCart_itemsInput
    upsert?: books_productsUpsertWithoutCart_itemsInput
    connect?: books_productsWhereUniqueInput
    update?: XOR<XOR<books_productsUpdateToOneWithWhereWithoutCart_itemsInput, books_productsUpdateWithoutCart_itemsInput>, books_productsUncheckedUpdateWithoutCart_itemsInput>
  }

  export type cartsUpdateOneRequiredWithoutCart_itemsNestedInput = {
    create?: XOR<cartsCreateWithoutCart_itemsInput, cartsUncheckedCreateWithoutCart_itemsInput>
    connectOrCreate?: cartsCreateOrConnectWithoutCart_itemsInput
    upsert?: cartsUpsertWithoutCart_itemsInput
    connect?: cartsWhereUniqueInput
    update?: XOR<XOR<cartsUpdateToOneWithWhereWithoutCart_itemsInput, cartsUpdateWithoutCart_itemsInput>, cartsUncheckedUpdateWithoutCart_itemsInput>
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedDecimalFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
  }

  export type NestedDecimalWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalWithAggregatesFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedDecimalFilter<$PrismaModel>
    _sum?: NestedDecimalFilter<$PrismaModel>
    _min?: NestedDecimalFilter<$PrismaModel>
    _max?: NestedDecimalFilter<$PrismaModel>
  }

  export type booksCreateWithoutAuthorInput = {
    id?: string
    title: string
    isbn: string
    publication_year: number
    genre: string
    books_products?: books_productsCreateNestedManyWithoutBookInput
  }

  export type booksUncheckedCreateWithoutAuthorInput = {
    id?: string
    title: string
    isbn: string
    publication_year: number
    genre: string
    books_products?: books_productsUncheckedCreateNestedManyWithoutBookInput
  }

  export type booksCreateOrConnectWithoutAuthorInput = {
    where: booksWhereUniqueInput
    create: XOR<booksCreateWithoutAuthorInput, booksUncheckedCreateWithoutAuthorInput>
  }

  export type booksCreateManyAuthorInputEnvelope = {
    data: booksCreateManyAuthorInput | booksCreateManyAuthorInput[]
    skipDuplicates?: boolean
  }

  export type booksUpsertWithWhereUniqueWithoutAuthorInput = {
    where: booksWhereUniqueInput
    update: XOR<booksUpdateWithoutAuthorInput, booksUncheckedUpdateWithoutAuthorInput>
    create: XOR<booksCreateWithoutAuthorInput, booksUncheckedCreateWithoutAuthorInput>
  }

  export type booksUpdateWithWhereUniqueWithoutAuthorInput = {
    where: booksWhereUniqueInput
    data: XOR<booksUpdateWithoutAuthorInput, booksUncheckedUpdateWithoutAuthorInput>
  }

  export type booksUpdateManyWithWhereWithoutAuthorInput = {
    where: booksScalarWhereInput
    data: XOR<booksUpdateManyMutationInput, booksUncheckedUpdateManyWithoutAuthorInput>
  }

  export type booksScalarWhereInput = {
    AND?: booksScalarWhereInput | booksScalarWhereInput[]
    OR?: booksScalarWhereInput[]
    NOT?: booksScalarWhereInput | booksScalarWhereInput[]
    id?: StringFilter<"books"> | string
    title?: StringFilter<"books"> | string
    isbn?: StringFilter<"books"> | string
    publication_year?: IntFilter<"books"> | number
    genre?: StringFilter<"books"> | string
    author_id?: StringFilter<"books"> | string
  }

  export type cartsCreateWithoutCustomerInput = {
    id?: string
    created_at: Date | string
    cart_items?: cart_itemsCreateNestedManyWithoutCartInput
    invoices?: invoicesCreateNestedManyWithoutCartInput
  }

  export type cartsUncheckedCreateWithoutCustomerInput = {
    id?: string
    created_at: Date | string
    cart_items?: cart_itemsUncheckedCreateNestedManyWithoutCartInput
    invoices?: invoicesUncheckedCreateNestedManyWithoutCartInput
  }

  export type cartsCreateOrConnectWithoutCustomerInput = {
    where: cartsWhereUniqueInput
    create: XOR<cartsCreateWithoutCustomerInput, cartsUncheckedCreateWithoutCustomerInput>
  }

  export type cartsCreateManyCustomerInputEnvelope = {
    data: cartsCreateManyCustomerInput | cartsCreateManyCustomerInput[]
    skipDuplicates?: boolean
  }

  export type invoicesCreateWithoutCustomerInput = {
    id?: string
    total_amount: Decimal | DecimalJsLike | number | string
    issued_at: Date | string
    status: string
    cart: cartsCreateNestedOneWithoutInvoicesInput
    invoice_items?: invoice_itemsCreateNestedManyWithoutInvoiceInput
  }

  export type invoicesUncheckedCreateWithoutCustomerInput = {
    id?: string
    total_amount: Decimal | DecimalJsLike | number | string
    issued_at: Date | string
    status: string
    cart_id: string
    invoice_items?: invoice_itemsUncheckedCreateNestedManyWithoutInvoiceInput
  }

  export type invoicesCreateOrConnectWithoutCustomerInput = {
    where: invoicesWhereUniqueInput
    create: XOR<invoicesCreateWithoutCustomerInput, invoicesUncheckedCreateWithoutCustomerInput>
  }

  export type invoicesCreateManyCustomerInputEnvelope = {
    data: invoicesCreateManyCustomerInput | invoicesCreateManyCustomerInput[]
    skipDuplicates?: boolean
  }

  export type cartsUpsertWithWhereUniqueWithoutCustomerInput = {
    where: cartsWhereUniqueInput
    update: XOR<cartsUpdateWithoutCustomerInput, cartsUncheckedUpdateWithoutCustomerInput>
    create: XOR<cartsCreateWithoutCustomerInput, cartsUncheckedCreateWithoutCustomerInput>
  }

  export type cartsUpdateWithWhereUniqueWithoutCustomerInput = {
    where: cartsWhereUniqueInput
    data: XOR<cartsUpdateWithoutCustomerInput, cartsUncheckedUpdateWithoutCustomerInput>
  }

  export type cartsUpdateManyWithWhereWithoutCustomerInput = {
    where: cartsScalarWhereInput
    data: XOR<cartsUpdateManyMutationInput, cartsUncheckedUpdateManyWithoutCustomerInput>
  }

  export type cartsScalarWhereInput = {
    AND?: cartsScalarWhereInput | cartsScalarWhereInput[]
    OR?: cartsScalarWhereInput[]
    NOT?: cartsScalarWhereInput | cartsScalarWhereInput[]
    id?: StringFilter<"carts"> | string
    customer_id?: StringFilter<"carts"> | string
    created_at?: DateTimeFilter<"carts"> | Date | string
  }

  export type invoicesUpsertWithWhereUniqueWithoutCustomerInput = {
    where: invoicesWhereUniqueInput
    update: XOR<invoicesUpdateWithoutCustomerInput, invoicesUncheckedUpdateWithoutCustomerInput>
    create: XOR<invoicesCreateWithoutCustomerInput, invoicesUncheckedCreateWithoutCustomerInput>
  }

  export type invoicesUpdateWithWhereUniqueWithoutCustomerInput = {
    where: invoicesWhereUniqueInput
    data: XOR<invoicesUpdateWithoutCustomerInput, invoicesUncheckedUpdateWithoutCustomerInput>
  }

  export type invoicesUpdateManyWithWhereWithoutCustomerInput = {
    where: invoicesScalarWhereInput
    data: XOR<invoicesUpdateManyMutationInput, invoicesUncheckedUpdateManyWithoutCustomerInput>
  }

  export type invoicesScalarWhereInput = {
    AND?: invoicesScalarWhereInput | invoicesScalarWhereInput[]
    OR?: invoicesScalarWhereInput[]
    NOT?: invoicesScalarWhereInput | invoicesScalarWhereInput[]
    id?: StringFilter<"invoices"> | string
    total_amount?: DecimalFilter<"invoices"> | Decimal | DecimalJsLike | number | string
    issued_at?: DateTimeFilter<"invoices"> | Date | string
    status?: StringFilter<"invoices"> | string
    customer_id?: StringFilter<"invoices"> | string
    cart_id?: StringFilter<"invoices"> | string
  }

  export type authorsCreateWithoutBooksInput = {
    id?: string
    name: string
    bio: string
    birthdate: Date | string
  }

  export type authorsUncheckedCreateWithoutBooksInput = {
    id?: string
    name: string
    bio: string
    birthdate: Date | string
  }

  export type authorsCreateOrConnectWithoutBooksInput = {
    where: authorsWhereUniqueInput
    create: XOR<authorsCreateWithoutBooksInput, authorsUncheckedCreateWithoutBooksInput>
  }

  export type books_productsCreateWithoutBookInput = {
    id?: string
    price: Decimal | DecimalJsLike | number | string
    stock: number
    format: string
    warehouse: warehousesCreateNestedOneWithoutBooks_productsInput
    invoice_items?: invoice_itemsCreateNestedManyWithoutBooks_productsInput
    cart_items?: cart_itemsCreateNestedManyWithoutBooks_productsInput
  }

  export type books_productsUncheckedCreateWithoutBookInput = {
    id?: string
    price: Decimal | DecimalJsLike | number | string
    stock: number
    format: string
    warehouse_id: string
    invoice_items?: invoice_itemsUncheckedCreateNestedManyWithoutBooks_productsInput
    cart_items?: cart_itemsUncheckedCreateNestedManyWithoutBooks_productsInput
  }

  export type books_productsCreateOrConnectWithoutBookInput = {
    where: books_productsWhereUniqueInput
    create: XOR<books_productsCreateWithoutBookInput, books_productsUncheckedCreateWithoutBookInput>
  }

  export type books_productsCreateManyBookInputEnvelope = {
    data: books_productsCreateManyBookInput | books_productsCreateManyBookInput[]
    skipDuplicates?: boolean
  }

  export type authorsUpsertWithoutBooksInput = {
    update: XOR<authorsUpdateWithoutBooksInput, authorsUncheckedUpdateWithoutBooksInput>
    create: XOR<authorsCreateWithoutBooksInput, authorsUncheckedCreateWithoutBooksInput>
    where?: authorsWhereInput
  }

  export type authorsUpdateToOneWithWhereWithoutBooksInput = {
    where?: authorsWhereInput
    data: XOR<authorsUpdateWithoutBooksInput, authorsUncheckedUpdateWithoutBooksInput>
  }

  export type authorsUpdateWithoutBooksInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    bio?: StringFieldUpdateOperationsInput | string
    birthdate?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type authorsUncheckedUpdateWithoutBooksInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    bio?: StringFieldUpdateOperationsInput | string
    birthdate?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type books_productsUpsertWithWhereUniqueWithoutBookInput = {
    where: books_productsWhereUniqueInput
    update: XOR<books_productsUpdateWithoutBookInput, books_productsUncheckedUpdateWithoutBookInput>
    create: XOR<books_productsCreateWithoutBookInput, books_productsUncheckedCreateWithoutBookInput>
  }

  export type books_productsUpdateWithWhereUniqueWithoutBookInput = {
    where: books_productsWhereUniqueInput
    data: XOR<books_productsUpdateWithoutBookInput, books_productsUncheckedUpdateWithoutBookInput>
  }

  export type books_productsUpdateManyWithWhereWithoutBookInput = {
    where: books_productsScalarWhereInput
    data: XOR<books_productsUpdateManyMutationInput, books_productsUncheckedUpdateManyWithoutBookInput>
  }

  export type books_productsScalarWhereInput = {
    AND?: books_productsScalarWhereInput | books_productsScalarWhereInput[]
    OR?: books_productsScalarWhereInput[]
    NOT?: books_productsScalarWhereInput | books_productsScalarWhereInput[]
    id?: StringFilter<"books_products"> | string
    book_id?: StringFilter<"books_products"> | string
    price?: DecimalFilter<"books_products"> | Decimal | DecimalJsLike | number | string
    stock?: IntFilter<"books_products"> | number
    format?: StringFilter<"books_products"> | string
    warehouse_id?: StringFilter<"books_products"> | string
  }

  export type books_productsCreateWithoutWarehouseInput = {
    id?: string
    price: Decimal | DecimalJsLike | number | string
    stock: number
    format: string
    book: booksCreateNestedOneWithoutBooks_productsInput
    invoice_items?: invoice_itemsCreateNestedManyWithoutBooks_productsInput
    cart_items?: cart_itemsCreateNestedManyWithoutBooks_productsInput
  }

  export type books_productsUncheckedCreateWithoutWarehouseInput = {
    id?: string
    book_id: string
    price: Decimal | DecimalJsLike | number | string
    stock: number
    format: string
    invoice_items?: invoice_itemsUncheckedCreateNestedManyWithoutBooks_productsInput
    cart_items?: cart_itemsUncheckedCreateNestedManyWithoutBooks_productsInput
  }

  export type books_productsCreateOrConnectWithoutWarehouseInput = {
    where: books_productsWhereUniqueInput
    create: XOR<books_productsCreateWithoutWarehouseInput, books_productsUncheckedCreateWithoutWarehouseInput>
  }

  export type books_productsCreateManyWarehouseInputEnvelope = {
    data: books_productsCreateManyWarehouseInput | books_productsCreateManyWarehouseInput[]
    skipDuplicates?: boolean
  }

  export type books_productsUpsertWithWhereUniqueWithoutWarehouseInput = {
    where: books_productsWhereUniqueInput
    update: XOR<books_productsUpdateWithoutWarehouseInput, books_productsUncheckedUpdateWithoutWarehouseInput>
    create: XOR<books_productsCreateWithoutWarehouseInput, books_productsUncheckedCreateWithoutWarehouseInput>
  }

  export type books_productsUpdateWithWhereUniqueWithoutWarehouseInput = {
    where: books_productsWhereUniqueInput
    data: XOR<books_productsUpdateWithoutWarehouseInput, books_productsUncheckedUpdateWithoutWarehouseInput>
  }

  export type books_productsUpdateManyWithWhereWithoutWarehouseInput = {
    where: books_productsScalarWhereInput
    data: XOR<books_productsUpdateManyMutationInput, books_productsUncheckedUpdateManyWithoutWarehouseInput>
  }

  export type customersCreateWithoutCartsInput = {
    id?: string
    name: string
    email: string
    address: string
    phone: string
    password: string
    invoices?: invoicesCreateNestedManyWithoutCustomerInput
  }

  export type customersUncheckedCreateWithoutCartsInput = {
    id?: string
    name: string
    email: string
    address: string
    phone: string
    password: string
    invoices?: invoicesUncheckedCreateNestedManyWithoutCustomerInput
  }

  export type customersCreateOrConnectWithoutCartsInput = {
    where: customersWhereUniqueInput
    create: XOR<customersCreateWithoutCartsInput, customersUncheckedCreateWithoutCartsInput>
  }

  export type cart_itemsCreateWithoutCartInput = {
    id?: string
    quantity: number
    created_at: Date | string
    books_products: books_productsCreateNestedOneWithoutCart_itemsInput
  }

  export type cart_itemsUncheckedCreateWithoutCartInput = {
    id?: string
    books_products_id: string
    quantity: number
    created_at: Date | string
  }

  export type cart_itemsCreateOrConnectWithoutCartInput = {
    where: cart_itemsWhereUniqueInput
    create: XOR<cart_itemsCreateWithoutCartInput, cart_itemsUncheckedCreateWithoutCartInput>
  }

  export type cart_itemsCreateManyCartInputEnvelope = {
    data: cart_itemsCreateManyCartInput | cart_itemsCreateManyCartInput[]
    skipDuplicates?: boolean
  }

  export type invoicesCreateWithoutCartInput = {
    id?: string
    total_amount: Decimal | DecimalJsLike | number | string
    issued_at: Date | string
    status: string
    customer: customersCreateNestedOneWithoutInvoicesInput
    invoice_items?: invoice_itemsCreateNestedManyWithoutInvoiceInput
  }

  export type invoicesUncheckedCreateWithoutCartInput = {
    id?: string
    total_amount: Decimal | DecimalJsLike | number | string
    issued_at: Date | string
    status: string
    customer_id: string
    invoice_items?: invoice_itemsUncheckedCreateNestedManyWithoutInvoiceInput
  }

  export type invoicesCreateOrConnectWithoutCartInput = {
    where: invoicesWhereUniqueInput
    create: XOR<invoicesCreateWithoutCartInput, invoicesUncheckedCreateWithoutCartInput>
  }

  export type invoicesCreateManyCartInputEnvelope = {
    data: invoicesCreateManyCartInput | invoicesCreateManyCartInput[]
    skipDuplicates?: boolean
  }

  export type customersUpsertWithoutCartsInput = {
    update: XOR<customersUpdateWithoutCartsInput, customersUncheckedUpdateWithoutCartsInput>
    create: XOR<customersCreateWithoutCartsInput, customersUncheckedCreateWithoutCartsInput>
    where?: customersWhereInput
  }

  export type customersUpdateToOneWithWhereWithoutCartsInput = {
    where?: customersWhereInput
    data: XOR<customersUpdateWithoutCartsInput, customersUncheckedUpdateWithoutCartsInput>
  }

  export type customersUpdateWithoutCartsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    invoices?: invoicesUpdateManyWithoutCustomerNestedInput
  }

  export type customersUncheckedUpdateWithoutCartsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    invoices?: invoicesUncheckedUpdateManyWithoutCustomerNestedInput
  }

  export type cart_itemsUpsertWithWhereUniqueWithoutCartInput = {
    where: cart_itemsWhereUniqueInput
    update: XOR<cart_itemsUpdateWithoutCartInput, cart_itemsUncheckedUpdateWithoutCartInput>
    create: XOR<cart_itemsCreateWithoutCartInput, cart_itemsUncheckedCreateWithoutCartInput>
  }

  export type cart_itemsUpdateWithWhereUniqueWithoutCartInput = {
    where: cart_itemsWhereUniqueInput
    data: XOR<cart_itemsUpdateWithoutCartInput, cart_itemsUncheckedUpdateWithoutCartInput>
  }

  export type cart_itemsUpdateManyWithWhereWithoutCartInput = {
    where: cart_itemsScalarWhereInput
    data: XOR<cart_itemsUpdateManyMutationInput, cart_itemsUncheckedUpdateManyWithoutCartInput>
  }

  export type cart_itemsScalarWhereInput = {
    AND?: cart_itemsScalarWhereInput | cart_itemsScalarWhereInput[]
    OR?: cart_itemsScalarWhereInput[]
    NOT?: cart_itemsScalarWhereInput | cart_itemsScalarWhereInput[]
    id?: StringFilter<"cart_items"> | string
    books_products_id?: StringFilter<"cart_items"> | string
    quantity?: IntFilter<"cart_items"> | number
    created_at?: DateTimeFilter<"cart_items"> | Date | string
    cart_id?: StringFilter<"cart_items"> | string
  }

  export type invoicesUpsertWithWhereUniqueWithoutCartInput = {
    where: invoicesWhereUniqueInput
    update: XOR<invoicesUpdateWithoutCartInput, invoicesUncheckedUpdateWithoutCartInput>
    create: XOR<invoicesCreateWithoutCartInput, invoicesUncheckedCreateWithoutCartInput>
  }

  export type invoicesUpdateWithWhereUniqueWithoutCartInput = {
    where: invoicesWhereUniqueInput
    data: XOR<invoicesUpdateWithoutCartInput, invoicesUncheckedUpdateWithoutCartInput>
  }

  export type invoicesUpdateManyWithWhereWithoutCartInput = {
    where: invoicesScalarWhereInput
    data: XOR<invoicesUpdateManyMutationInput, invoicesUncheckedUpdateManyWithoutCartInput>
  }

  export type booksCreateWithoutBooks_productsInput = {
    id?: string
    title: string
    isbn: string
    publication_year: number
    genre: string
    author: authorsCreateNestedOneWithoutBooksInput
  }

  export type booksUncheckedCreateWithoutBooks_productsInput = {
    id?: string
    title: string
    isbn: string
    publication_year: number
    genre: string
    author_id: string
  }

  export type booksCreateOrConnectWithoutBooks_productsInput = {
    where: booksWhereUniqueInput
    create: XOR<booksCreateWithoutBooks_productsInput, booksUncheckedCreateWithoutBooks_productsInput>
  }

  export type warehousesCreateWithoutBooks_productsInput = {
    id?: string
    name: string
    location: string
    capacity: number
  }

  export type warehousesUncheckedCreateWithoutBooks_productsInput = {
    id?: string
    name: string
    location: string
    capacity: number
  }

  export type warehousesCreateOrConnectWithoutBooks_productsInput = {
    where: warehousesWhereUniqueInput
    create: XOR<warehousesCreateWithoutBooks_productsInput, warehousesUncheckedCreateWithoutBooks_productsInput>
  }

  export type invoice_itemsCreateWithoutBooks_productsInput = {
    id?: string
    quantity: number
    price: Decimal | DecimalJsLike | number | string
    invoice: invoicesCreateNestedOneWithoutInvoice_itemsInput
  }

  export type invoice_itemsUncheckedCreateWithoutBooks_productsInput = {
    id?: string
    quantity: number
    price: Decimal | DecimalJsLike | number | string
    invoice_id: string
  }

  export type invoice_itemsCreateOrConnectWithoutBooks_productsInput = {
    where: invoice_itemsWhereUniqueInput
    create: XOR<invoice_itemsCreateWithoutBooks_productsInput, invoice_itemsUncheckedCreateWithoutBooks_productsInput>
  }

  export type invoice_itemsCreateManyBooks_productsInputEnvelope = {
    data: invoice_itemsCreateManyBooks_productsInput | invoice_itemsCreateManyBooks_productsInput[]
    skipDuplicates?: boolean
  }

  export type cart_itemsCreateWithoutBooks_productsInput = {
    id?: string
    quantity: number
    created_at: Date | string
    cart: cartsCreateNestedOneWithoutCart_itemsInput
  }

  export type cart_itemsUncheckedCreateWithoutBooks_productsInput = {
    id?: string
    quantity: number
    created_at: Date | string
    cart_id: string
  }

  export type cart_itemsCreateOrConnectWithoutBooks_productsInput = {
    where: cart_itemsWhereUniqueInput
    create: XOR<cart_itemsCreateWithoutBooks_productsInput, cart_itemsUncheckedCreateWithoutBooks_productsInput>
  }

  export type cart_itemsCreateManyBooks_productsInputEnvelope = {
    data: cart_itemsCreateManyBooks_productsInput | cart_itemsCreateManyBooks_productsInput[]
    skipDuplicates?: boolean
  }

  export type booksUpsertWithoutBooks_productsInput = {
    update: XOR<booksUpdateWithoutBooks_productsInput, booksUncheckedUpdateWithoutBooks_productsInput>
    create: XOR<booksCreateWithoutBooks_productsInput, booksUncheckedCreateWithoutBooks_productsInput>
    where?: booksWhereInput
  }

  export type booksUpdateToOneWithWhereWithoutBooks_productsInput = {
    where?: booksWhereInput
    data: XOR<booksUpdateWithoutBooks_productsInput, booksUncheckedUpdateWithoutBooks_productsInput>
  }

  export type booksUpdateWithoutBooks_productsInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    isbn?: StringFieldUpdateOperationsInput | string
    publication_year?: IntFieldUpdateOperationsInput | number
    genre?: StringFieldUpdateOperationsInput | string
    author?: authorsUpdateOneRequiredWithoutBooksNestedInput
  }

  export type booksUncheckedUpdateWithoutBooks_productsInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    isbn?: StringFieldUpdateOperationsInput | string
    publication_year?: IntFieldUpdateOperationsInput | number
    genre?: StringFieldUpdateOperationsInput | string
    author_id?: StringFieldUpdateOperationsInput | string
  }

  export type warehousesUpsertWithoutBooks_productsInput = {
    update: XOR<warehousesUpdateWithoutBooks_productsInput, warehousesUncheckedUpdateWithoutBooks_productsInput>
    create: XOR<warehousesCreateWithoutBooks_productsInput, warehousesUncheckedCreateWithoutBooks_productsInput>
    where?: warehousesWhereInput
  }

  export type warehousesUpdateToOneWithWhereWithoutBooks_productsInput = {
    where?: warehousesWhereInput
    data: XOR<warehousesUpdateWithoutBooks_productsInput, warehousesUncheckedUpdateWithoutBooks_productsInput>
  }

  export type warehousesUpdateWithoutBooks_productsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    location?: StringFieldUpdateOperationsInput | string
    capacity?: IntFieldUpdateOperationsInput | number
  }

  export type warehousesUncheckedUpdateWithoutBooks_productsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    location?: StringFieldUpdateOperationsInput | string
    capacity?: IntFieldUpdateOperationsInput | number
  }

  export type invoice_itemsUpsertWithWhereUniqueWithoutBooks_productsInput = {
    where: invoice_itemsWhereUniqueInput
    update: XOR<invoice_itemsUpdateWithoutBooks_productsInput, invoice_itemsUncheckedUpdateWithoutBooks_productsInput>
    create: XOR<invoice_itemsCreateWithoutBooks_productsInput, invoice_itemsUncheckedCreateWithoutBooks_productsInput>
  }

  export type invoice_itemsUpdateWithWhereUniqueWithoutBooks_productsInput = {
    where: invoice_itemsWhereUniqueInput
    data: XOR<invoice_itemsUpdateWithoutBooks_productsInput, invoice_itemsUncheckedUpdateWithoutBooks_productsInput>
  }

  export type invoice_itemsUpdateManyWithWhereWithoutBooks_productsInput = {
    where: invoice_itemsScalarWhereInput
    data: XOR<invoice_itemsUpdateManyMutationInput, invoice_itemsUncheckedUpdateManyWithoutBooks_productsInput>
  }

  export type invoice_itemsScalarWhereInput = {
    AND?: invoice_itemsScalarWhereInput | invoice_itemsScalarWhereInput[]
    OR?: invoice_itemsScalarWhereInput[]
    NOT?: invoice_itemsScalarWhereInput | invoice_itemsScalarWhereInput[]
    id?: StringFilter<"invoice_items"> | string
    books_products_id?: StringFilter<"invoice_items"> | string
    quantity?: IntFilter<"invoice_items"> | number
    price?: DecimalFilter<"invoice_items"> | Decimal | DecimalJsLike | number | string
    invoice_id?: StringFilter<"invoice_items"> | string
  }

  export type cart_itemsUpsertWithWhereUniqueWithoutBooks_productsInput = {
    where: cart_itemsWhereUniqueInput
    update: XOR<cart_itemsUpdateWithoutBooks_productsInput, cart_itemsUncheckedUpdateWithoutBooks_productsInput>
    create: XOR<cart_itemsCreateWithoutBooks_productsInput, cart_itemsUncheckedCreateWithoutBooks_productsInput>
  }

  export type cart_itemsUpdateWithWhereUniqueWithoutBooks_productsInput = {
    where: cart_itemsWhereUniqueInput
    data: XOR<cart_itemsUpdateWithoutBooks_productsInput, cart_itemsUncheckedUpdateWithoutBooks_productsInput>
  }

  export type cart_itemsUpdateManyWithWhereWithoutBooks_productsInput = {
    where: cart_itemsScalarWhereInput
    data: XOR<cart_itemsUpdateManyMutationInput, cart_itemsUncheckedUpdateManyWithoutBooks_productsInput>
  }

  export type customersCreateWithoutInvoicesInput = {
    id?: string
    name: string
    email: string
    address: string
    phone: string
    password: string
    carts?: cartsCreateNestedManyWithoutCustomerInput
  }

  export type customersUncheckedCreateWithoutInvoicesInput = {
    id?: string
    name: string
    email: string
    address: string
    phone: string
    password: string
    carts?: cartsUncheckedCreateNestedManyWithoutCustomerInput
  }

  export type customersCreateOrConnectWithoutInvoicesInput = {
    where: customersWhereUniqueInput
    create: XOR<customersCreateWithoutInvoicesInput, customersUncheckedCreateWithoutInvoicesInput>
  }

  export type cartsCreateWithoutInvoicesInput = {
    id?: string
    created_at: Date | string
    customer: customersCreateNestedOneWithoutCartsInput
    cart_items?: cart_itemsCreateNestedManyWithoutCartInput
  }

  export type cartsUncheckedCreateWithoutInvoicesInput = {
    id?: string
    customer_id: string
    created_at: Date | string
    cart_items?: cart_itemsUncheckedCreateNestedManyWithoutCartInput
  }

  export type cartsCreateOrConnectWithoutInvoicesInput = {
    where: cartsWhereUniqueInput
    create: XOR<cartsCreateWithoutInvoicesInput, cartsUncheckedCreateWithoutInvoicesInput>
  }

  export type invoice_itemsCreateWithoutInvoiceInput = {
    id?: string
    quantity: number
    price: Decimal | DecimalJsLike | number | string
    books_products: books_productsCreateNestedOneWithoutInvoice_itemsInput
  }

  export type invoice_itemsUncheckedCreateWithoutInvoiceInput = {
    id?: string
    books_products_id: string
    quantity: number
    price: Decimal | DecimalJsLike | number | string
  }

  export type invoice_itemsCreateOrConnectWithoutInvoiceInput = {
    where: invoice_itemsWhereUniqueInput
    create: XOR<invoice_itemsCreateWithoutInvoiceInput, invoice_itemsUncheckedCreateWithoutInvoiceInput>
  }

  export type invoice_itemsCreateManyInvoiceInputEnvelope = {
    data: invoice_itemsCreateManyInvoiceInput | invoice_itemsCreateManyInvoiceInput[]
    skipDuplicates?: boolean
  }

  export type customersUpsertWithoutInvoicesInput = {
    update: XOR<customersUpdateWithoutInvoicesInput, customersUncheckedUpdateWithoutInvoicesInput>
    create: XOR<customersCreateWithoutInvoicesInput, customersUncheckedCreateWithoutInvoicesInput>
    where?: customersWhereInput
  }

  export type customersUpdateToOneWithWhereWithoutInvoicesInput = {
    where?: customersWhereInput
    data: XOR<customersUpdateWithoutInvoicesInput, customersUncheckedUpdateWithoutInvoicesInput>
  }

  export type customersUpdateWithoutInvoicesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    carts?: cartsUpdateManyWithoutCustomerNestedInput
  }

  export type customersUncheckedUpdateWithoutInvoicesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    carts?: cartsUncheckedUpdateManyWithoutCustomerNestedInput
  }

  export type cartsUpsertWithoutInvoicesInput = {
    update: XOR<cartsUpdateWithoutInvoicesInput, cartsUncheckedUpdateWithoutInvoicesInput>
    create: XOR<cartsCreateWithoutInvoicesInput, cartsUncheckedCreateWithoutInvoicesInput>
    where?: cartsWhereInput
  }

  export type cartsUpdateToOneWithWhereWithoutInvoicesInput = {
    where?: cartsWhereInput
    data: XOR<cartsUpdateWithoutInvoicesInput, cartsUncheckedUpdateWithoutInvoicesInput>
  }

  export type cartsUpdateWithoutInvoicesInput = {
    id?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    customer?: customersUpdateOneRequiredWithoutCartsNestedInput
    cart_items?: cart_itemsUpdateManyWithoutCartNestedInput
  }

  export type cartsUncheckedUpdateWithoutInvoicesInput = {
    id?: StringFieldUpdateOperationsInput | string
    customer_id?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    cart_items?: cart_itemsUncheckedUpdateManyWithoutCartNestedInput
  }

  export type invoice_itemsUpsertWithWhereUniqueWithoutInvoiceInput = {
    where: invoice_itemsWhereUniqueInput
    update: XOR<invoice_itemsUpdateWithoutInvoiceInput, invoice_itemsUncheckedUpdateWithoutInvoiceInput>
    create: XOR<invoice_itemsCreateWithoutInvoiceInput, invoice_itemsUncheckedCreateWithoutInvoiceInput>
  }

  export type invoice_itemsUpdateWithWhereUniqueWithoutInvoiceInput = {
    where: invoice_itemsWhereUniqueInput
    data: XOR<invoice_itemsUpdateWithoutInvoiceInput, invoice_itemsUncheckedUpdateWithoutInvoiceInput>
  }

  export type invoice_itemsUpdateManyWithWhereWithoutInvoiceInput = {
    where: invoice_itemsScalarWhereInput
    data: XOR<invoice_itemsUpdateManyMutationInput, invoice_itemsUncheckedUpdateManyWithoutInvoiceInput>
  }

  export type books_productsCreateWithoutInvoice_itemsInput = {
    id?: string
    price: Decimal | DecimalJsLike | number | string
    stock: number
    format: string
    book: booksCreateNestedOneWithoutBooks_productsInput
    warehouse: warehousesCreateNestedOneWithoutBooks_productsInput
    cart_items?: cart_itemsCreateNestedManyWithoutBooks_productsInput
  }

  export type books_productsUncheckedCreateWithoutInvoice_itemsInput = {
    id?: string
    book_id: string
    price: Decimal | DecimalJsLike | number | string
    stock: number
    format: string
    warehouse_id: string
    cart_items?: cart_itemsUncheckedCreateNestedManyWithoutBooks_productsInput
  }

  export type books_productsCreateOrConnectWithoutInvoice_itemsInput = {
    where: books_productsWhereUniqueInput
    create: XOR<books_productsCreateWithoutInvoice_itemsInput, books_productsUncheckedCreateWithoutInvoice_itemsInput>
  }

  export type invoicesCreateWithoutInvoice_itemsInput = {
    id?: string
    total_amount: Decimal | DecimalJsLike | number | string
    issued_at: Date | string
    status: string
    customer: customersCreateNestedOneWithoutInvoicesInput
    cart: cartsCreateNestedOneWithoutInvoicesInput
  }

  export type invoicesUncheckedCreateWithoutInvoice_itemsInput = {
    id?: string
    total_amount: Decimal | DecimalJsLike | number | string
    issued_at: Date | string
    status: string
    customer_id: string
    cart_id: string
  }

  export type invoicesCreateOrConnectWithoutInvoice_itemsInput = {
    where: invoicesWhereUniqueInput
    create: XOR<invoicesCreateWithoutInvoice_itemsInput, invoicesUncheckedCreateWithoutInvoice_itemsInput>
  }

  export type books_productsUpsertWithoutInvoice_itemsInput = {
    update: XOR<books_productsUpdateWithoutInvoice_itemsInput, books_productsUncheckedUpdateWithoutInvoice_itemsInput>
    create: XOR<books_productsCreateWithoutInvoice_itemsInput, books_productsUncheckedCreateWithoutInvoice_itemsInput>
    where?: books_productsWhereInput
  }

  export type books_productsUpdateToOneWithWhereWithoutInvoice_itemsInput = {
    where?: books_productsWhereInput
    data: XOR<books_productsUpdateWithoutInvoice_itemsInput, books_productsUncheckedUpdateWithoutInvoice_itemsInput>
  }

  export type books_productsUpdateWithoutInvoice_itemsInput = {
    id?: StringFieldUpdateOperationsInput | string
    price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    stock?: IntFieldUpdateOperationsInput | number
    format?: StringFieldUpdateOperationsInput | string
    book?: booksUpdateOneRequiredWithoutBooks_productsNestedInput
    warehouse?: warehousesUpdateOneRequiredWithoutBooks_productsNestedInput
    cart_items?: cart_itemsUpdateManyWithoutBooks_productsNestedInput
  }

  export type books_productsUncheckedUpdateWithoutInvoice_itemsInput = {
    id?: StringFieldUpdateOperationsInput | string
    book_id?: StringFieldUpdateOperationsInput | string
    price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    stock?: IntFieldUpdateOperationsInput | number
    format?: StringFieldUpdateOperationsInput | string
    warehouse_id?: StringFieldUpdateOperationsInput | string
    cart_items?: cart_itemsUncheckedUpdateManyWithoutBooks_productsNestedInput
  }

  export type invoicesUpsertWithoutInvoice_itemsInput = {
    update: XOR<invoicesUpdateWithoutInvoice_itemsInput, invoicesUncheckedUpdateWithoutInvoice_itemsInput>
    create: XOR<invoicesCreateWithoutInvoice_itemsInput, invoicesUncheckedCreateWithoutInvoice_itemsInput>
    where?: invoicesWhereInput
  }

  export type invoicesUpdateToOneWithWhereWithoutInvoice_itemsInput = {
    where?: invoicesWhereInput
    data: XOR<invoicesUpdateWithoutInvoice_itemsInput, invoicesUncheckedUpdateWithoutInvoice_itemsInput>
  }

  export type invoicesUpdateWithoutInvoice_itemsInput = {
    id?: StringFieldUpdateOperationsInput | string
    total_amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    issued_at?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: StringFieldUpdateOperationsInput | string
    customer?: customersUpdateOneRequiredWithoutInvoicesNestedInput
    cart?: cartsUpdateOneRequiredWithoutInvoicesNestedInput
  }

  export type invoicesUncheckedUpdateWithoutInvoice_itemsInput = {
    id?: StringFieldUpdateOperationsInput | string
    total_amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    issued_at?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: StringFieldUpdateOperationsInput | string
    customer_id?: StringFieldUpdateOperationsInput | string
    cart_id?: StringFieldUpdateOperationsInput | string
  }

  export type books_productsCreateWithoutCart_itemsInput = {
    id?: string
    price: Decimal | DecimalJsLike | number | string
    stock: number
    format: string
    book: booksCreateNestedOneWithoutBooks_productsInput
    warehouse: warehousesCreateNestedOneWithoutBooks_productsInput
    invoice_items?: invoice_itemsCreateNestedManyWithoutBooks_productsInput
  }

  export type books_productsUncheckedCreateWithoutCart_itemsInput = {
    id?: string
    book_id: string
    price: Decimal | DecimalJsLike | number | string
    stock: number
    format: string
    warehouse_id: string
    invoice_items?: invoice_itemsUncheckedCreateNestedManyWithoutBooks_productsInput
  }

  export type books_productsCreateOrConnectWithoutCart_itemsInput = {
    where: books_productsWhereUniqueInput
    create: XOR<books_productsCreateWithoutCart_itemsInput, books_productsUncheckedCreateWithoutCart_itemsInput>
  }

  export type cartsCreateWithoutCart_itemsInput = {
    id?: string
    created_at: Date | string
    customer: customersCreateNestedOneWithoutCartsInput
    invoices?: invoicesCreateNestedManyWithoutCartInput
  }

  export type cartsUncheckedCreateWithoutCart_itemsInput = {
    id?: string
    customer_id: string
    created_at: Date | string
    invoices?: invoicesUncheckedCreateNestedManyWithoutCartInput
  }

  export type cartsCreateOrConnectWithoutCart_itemsInput = {
    where: cartsWhereUniqueInput
    create: XOR<cartsCreateWithoutCart_itemsInput, cartsUncheckedCreateWithoutCart_itemsInput>
  }

  export type books_productsUpsertWithoutCart_itemsInput = {
    update: XOR<books_productsUpdateWithoutCart_itemsInput, books_productsUncheckedUpdateWithoutCart_itemsInput>
    create: XOR<books_productsCreateWithoutCart_itemsInput, books_productsUncheckedCreateWithoutCart_itemsInput>
    where?: books_productsWhereInput
  }

  export type books_productsUpdateToOneWithWhereWithoutCart_itemsInput = {
    where?: books_productsWhereInput
    data: XOR<books_productsUpdateWithoutCart_itemsInput, books_productsUncheckedUpdateWithoutCart_itemsInput>
  }

  export type books_productsUpdateWithoutCart_itemsInput = {
    id?: StringFieldUpdateOperationsInput | string
    price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    stock?: IntFieldUpdateOperationsInput | number
    format?: StringFieldUpdateOperationsInput | string
    book?: booksUpdateOneRequiredWithoutBooks_productsNestedInput
    warehouse?: warehousesUpdateOneRequiredWithoutBooks_productsNestedInput
    invoice_items?: invoice_itemsUpdateManyWithoutBooks_productsNestedInput
  }

  export type books_productsUncheckedUpdateWithoutCart_itemsInput = {
    id?: StringFieldUpdateOperationsInput | string
    book_id?: StringFieldUpdateOperationsInput | string
    price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    stock?: IntFieldUpdateOperationsInput | number
    format?: StringFieldUpdateOperationsInput | string
    warehouse_id?: StringFieldUpdateOperationsInput | string
    invoice_items?: invoice_itemsUncheckedUpdateManyWithoutBooks_productsNestedInput
  }

  export type cartsUpsertWithoutCart_itemsInput = {
    update: XOR<cartsUpdateWithoutCart_itemsInput, cartsUncheckedUpdateWithoutCart_itemsInput>
    create: XOR<cartsCreateWithoutCart_itemsInput, cartsUncheckedCreateWithoutCart_itemsInput>
    where?: cartsWhereInput
  }

  export type cartsUpdateToOneWithWhereWithoutCart_itemsInput = {
    where?: cartsWhereInput
    data: XOR<cartsUpdateWithoutCart_itemsInput, cartsUncheckedUpdateWithoutCart_itemsInput>
  }

  export type cartsUpdateWithoutCart_itemsInput = {
    id?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    customer?: customersUpdateOneRequiredWithoutCartsNestedInput
    invoices?: invoicesUpdateManyWithoutCartNestedInput
  }

  export type cartsUncheckedUpdateWithoutCart_itemsInput = {
    id?: StringFieldUpdateOperationsInput | string
    customer_id?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    invoices?: invoicesUncheckedUpdateManyWithoutCartNestedInput
  }

  export type booksCreateManyAuthorInput = {
    id?: string
    title: string
    isbn: string
    publication_year: number
    genre: string
  }

  export type booksUpdateWithoutAuthorInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    isbn?: StringFieldUpdateOperationsInput | string
    publication_year?: IntFieldUpdateOperationsInput | number
    genre?: StringFieldUpdateOperationsInput | string
    books_products?: books_productsUpdateManyWithoutBookNestedInput
  }

  export type booksUncheckedUpdateWithoutAuthorInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    isbn?: StringFieldUpdateOperationsInput | string
    publication_year?: IntFieldUpdateOperationsInput | number
    genre?: StringFieldUpdateOperationsInput | string
    books_products?: books_productsUncheckedUpdateManyWithoutBookNestedInput
  }

  export type booksUncheckedUpdateManyWithoutAuthorInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    isbn?: StringFieldUpdateOperationsInput | string
    publication_year?: IntFieldUpdateOperationsInput | number
    genre?: StringFieldUpdateOperationsInput | string
  }

  export type cartsCreateManyCustomerInput = {
    id?: string
    created_at: Date | string
  }

  export type invoicesCreateManyCustomerInput = {
    id?: string
    total_amount: Decimal | DecimalJsLike | number | string
    issued_at: Date | string
    status: string
    cart_id: string
  }

  export type cartsUpdateWithoutCustomerInput = {
    id?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    cart_items?: cart_itemsUpdateManyWithoutCartNestedInput
    invoices?: invoicesUpdateManyWithoutCartNestedInput
  }

  export type cartsUncheckedUpdateWithoutCustomerInput = {
    id?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    cart_items?: cart_itemsUncheckedUpdateManyWithoutCartNestedInput
    invoices?: invoicesUncheckedUpdateManyWithoutCartNestedInput
  }

  export type cartsUncheckedUpdateManyWithoutCustomerInput = {
    id?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type invoicesUpdateWithoutCustomerInput = {
    id?: StringFieldUpdateOperationsInput | string
    total_amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    issued_at?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: StringFieldUpdateOperationsInput | string
    cart?: cartsUpdateOneRequiredWithoutInvoicesNestedInput
    invoice_items?: invoice_itemsUpdateManyWithoutInvoiceNestedInput
  }

  export type invoicesUncheckedUpdateWithoutCustomerInput = {
    id?: StringFieldUpdateOperationsInput | string
    total_amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    issued_at?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: StringFieldUpdateOperationsInput | string
    cart_id?: StringFieldUpdateOperationsInput | string
    invoice_items?: invoice_itemsUncheckedUpdateManyWithoutInvoiceNestedInput
  }

  export type invoicesUncheckedUpdateManyWithoutCustomerInput = {
    id?: StringFieldUpdateOperationsInput | string
    total_amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    issued_at?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: StringFieldUpdateOperationsInput | string
    cart_id?: StringFieldUpdateOperationsInput | string
  }

  export type books_productsCreateManyBookInput = {
    id?: string
    price: Decimal | DecimalJsLike | number | string
    stock: number
    format: string
    warehouse_id: string
  }

  export type books_productsUpdateWithoutBookInput = {
    id?: StringFieldUpdateOperationsInput | string
    price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    stock?: IntFieldUpdateOperationsInput | number
    format?: StringFieldUpdateOperationsInput | string
    warehouse?: warehousesUpdateOneRequiredWithoutBooks_productsNestedInput
    invoice_items?: invoice_itemsUpdateManyWithoutBooks_productsNestedInput
    cart_items?: cart_itemsUpdateManyWithoutBooks_productsNestedInput
  }

  export type books_productsUncheckedUpdateWithoutBookInput = {
    id?: StringFieldUpdateOperationsInput | string
    price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    stock?: IntFieldUpdateOperationsInput | number
    format?: StringFieldUpdateOperationsInput | string
    warehouse_id?: StringFieldUpdateOperationsInput | string
    invoice_items?: invoice_itemsUncheckedUpdateManyWithoutBooks_productsNestedInput
    cart_items?: cart_itemsUncheckedUpdateManyWithoutBooks_productsNestedInput
  }

  export type books_productsUncheckedUpdateManyWithoutBookInput = {
    id?: StringFieldUpdateOperationsInput | string
    price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    stock?: IntFieldUpdateOperationsInput | number
    format?: StringFieldUpdateOperationsInput | string
    warehouse_id?: StringFieldUpdateOperationsInput | string
  }

  export type books_productsCreateManyWarehouseInput = {
    id?: string
    book_id: string
    price: Decimal | DecimalJsLike | number | string
    stock: number
    format: string
  }

  export type books_productsUpdateWithoutWarehouseInput = {
    id?: StringFieldUpdateOperationsInput | string
    price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    stock?: IntFieldUpdateOperationsInput | number
    format?: StringFieldUpdateOperationsInput | string
    book?: booksUpdateOneRequiredWithoutBooks_productsNestedInput
    invoice_items?: invoice_itemsUpdateManyWithoutBooks_productsNestedInput
    cart_items?: cart_itemsUpdateManyWithoutBooks_productsNestedInput
  }

  export type books_productsUncheckedUpdateWithoutWarehouseInput = {
    id?: StringFieldUpdateOperationsInput | string
    book_id?: StringFieldUpdateOperationsInput | string
    price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    stock?: IntFieldUpdateOperationsInput | number
    format?: StringFieldUpdateOperationsInput | string
    invoice_items?: invoice_itemsUncheckedUpdateManyWithoutBooks_productsNestedInput
    cart_items?: cart_itemsUncheckedUpdateManyWithoutBooks_productsNestedInput
  }

  export type books_productsUncheckedUpdateManyWithoutWarehouseInput = {
    id?: StringFieldUpdateOperationsInput | string
    book_id?: StringFieldUpdateOperationsInput | string
    price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    stock?: IntFieldUpdateOperationsInput | number
    format?: StringFieldUpdateOperationsInput | string
  }

  export type cart_itemsCreateManyCartInput = {
    id?: string
    books_products_id: string
    quantity: number
    created_at: Date | string
  }

  export type invoicesCreateManyCartInput = {
    id?: string
    total_amount: Decimal | DecimalJsLike | number | string
    issued_at: Date | string
    status: string
    customer_id: string
  }

  export type cart_itemsUpdateWithoutCartInput = {
    id?: StringFieldUpdateOperationsInput | string
    quantity?: IntFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    books_products?: books_productsUpdateOneRequiredWithoutCart_itemsNestedInput
  }

  export type cart_itemsUncheckedUpdateWithoutCartInput = {
    id?: StringFieldUpdateOperationsInput | string
    books_products_id?: StringFieldUpdateOperationsInput | string
    quantity?: IntFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type cart_itemsUncheckedUpdateManyWithoutCartInput = {
    id?: StringFieldUpdateOperationsInput | string
    books_products_id?: StringFieldUpdateOperationsInput | string
    quantity?: IntFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type invoicesUpdateWithoutCartInput = {
    id?: StringFieldUpdateOperationsInput | string
    total_amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    issued_at?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: StringFieldUpdateOperationsInput | string
    customer?: customersUpdateOneRequiredWithoutInvoicesNestedInput
    invoice_items?: invoice_itemsUpdateManyWithoutInvoiceNestedInput
  }

  export type invoicesUncheckedUpdateWithoutCartInput = {
    id?: StringFieldUpdateOperationsInput | string
    total_amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    issued_at?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: StringFieldUpdateOperationsInput | string
    customer_id?: StringFieldUpdateOperationsInput | string
    invoice_items?: invoice_itemsUncheckedUpdateManyWithoutInvoiceNestedInput
  }

  export type invoicesUncheckedUpdateManyWithoutCartInput = {
    id?: StringFieldUpdateOperationsInput | string
    total_amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    issued_at?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: StringFieldUpdateOperationsInput | string
    customer_id?: StringFieldUpdateOperationsInput | string
  }

  export type invoice_itemsCreateManyBooks_productsInput = {
    id?: string
    quantity: number
    price: Decimal | DecimalJsLike | number | string
    invoice_id: string
  }

  export type cart_itemsCreateManyBooks_productsInput = {
    id?: string
    quantity: number
    created_at: Date | string
    cart_id: string
  }

  export type invoice_itemsUpdateWithoutBooks_productsInput = {
    id?: StringFieldUpdateOperationsInput | string
    quantity?: IntFieldUpdateOperationsInput | number
    price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    invoice?: invoicesUpdateOneRequiredWithoutInvoice_itemsNestedInput
  }

  export type invoice_itemsUncheckedUpdateWithoutBooks_productsInput = {
    id?: StringFieldUpdateOperationsInput | string
    quantity?: IntFieldUpdateOperationsInput | number
    price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    invoice_id?: StringFieldUpdateOperationsInput | string
  }

  export type invoice_itemsUncheckedUpdateManyWithoutBooks_productsInput = {
    id?: StringFieldUpdateOperationsInput | string
    quantity?: IntFieldUpdateOperationsInput | number
    price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    invoice_id?: StringFieldUpdateOperationsInput | string
  }

  export type cart_itemsUpdateWithoutBooks_productsInput = {
    id?: StringFieldUpdateOperationsInput | string
    quantity?: IntFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    cart?: cartsUpdateOneRequiredWithoutCart_itemsNestedInput
  }

  export type cart_itemsUncheckedUpdateWithoutBooks_productsInput = {
    id?: StringFieldUpdateOperationsInput | string
    quantity?: IntFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    cart_id?: StringFieldUpdateOperationsInput | string
  }

  export type cart_itemsUncheckedUpdateManyWithoutBooks_productsInput = {
    id?: StringFieldUpdateOperationsInput | string
    quantity?: IntFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    cart_id?: StringFieldUpdateOperationsInput | string
  }

  export type invoice_itemsCreateManyInvoiceInput = {
    id?: string
    books_products_id: string
    quantity: number
    price: Decimal | DecimalJsLike | number | string
  }

  export type invoice_itemsUpdateWithoutInvoiceInput = {
    id?: StringFieldUpdateOperationsInput | string
    quantity?: IntFieldUpdateOperationsInput | number
    price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    books_products?: books_productsUpdateOneRequiredWithoutInvoice_itemsNestedInput
  }

  export type invoice_itemsUncheckedUpdateWithoutInvoiceInput = {
    id?: StringFieldUpdateOperationsInput | string
    books_products_id?: StringFieldUpdateOperationsInput | string
    quantity?: IntFieldUpdateOperationsInput | number
    price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
  }

  export type invoice_itemsUncheckedUpdateManyWithoutInvoiceInput = {
    id?: StringFieldUpdateOperationsInput | string
    books_products_id?: StringFieldUpdateOperationsInput | string
    quantity?: IntFieldUpdateOperationsInput | number
    price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}