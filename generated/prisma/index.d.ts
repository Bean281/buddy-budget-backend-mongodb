
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
 * Model User
 * 
 */
export type User = $Result.DefaultSelection<Prisma.$UserPayload>
/**
 * Model Transaction
 * 
 */
export type Transaction = $Result.DefaultSelection<Prisma.$TransactionPayload>
/**
 * Model Category
 * 
 */
export type Category = $Result.DefaultSelection<Prisma.$CategoryPayload>
/**
 * Model Bill
 * 
 */
export type Bill = $Result.DefaultSelection<Prisma.$BillPayload>
/**
 * Model Budget
 * 
 */
export type Budget = $Result.DefaultSelection<Prisma.$BudgetPayload>
/**
 * Model CategoryAllocation
 * 
 */
export type CategoryAllocation = $Result.DefaultSelection<Prisma.$CategoryAllocationPayload>
/**
 * Model SavingsGoal
 * 
 */
export type SavingsGoal = $Result.DefaultSelection<Prisma.$SavingsGoalPayload>
/**
 * Model PlanItem
 * 
 */
export type PlanItem = $Result.DefaultSelection<Prisma.$PlanItemPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const CategoryType: {
  EXPENSE: 'EXPENSE',
  INCOME: 'INCOME'
};

export type CategoryType = (typeof CategoryType)[keyof typeof CategoryType]


export const TransactionType: {
  EXPENSE: 'EXPENSE',
  INCOME: 'INCOME'
};

export type TransactionType = (typeof TransactionType)[keyof typeof TransactionType]


export const BudgetTimeframe: {
  WEEKLY: 'WEEKLY',
  MONTHLY: 'MONTHLY',
  YEARLY: 'YEARLY'
};

export type BudgetTimeframe = (typeof BudgetTimeframe)[keyof typeof BudgetTimeframe]


export const BillFrequency: {
  DAILY: 'DAILY',
  WEEKLY: 'WEEKLY',
  BIWEEKLY: 'BIWEEKLY',
  MONTHLY: 'MONTHLY',
  QUARTERLY: 'QUARTERLY',
  BIANNUALLY: 'BIANNUALLY',
  ANNUALLY: 'ANNUALLY'
};

export type BillFrequency = (typeof BillFrequency)[keyof typeof BillFrequency]


export const SymbolPosition: {
  BEFORE: 'BEFORE',
  AFTER: 'AFTER'
};

export type SymbolPosition = (typeof SymbolPosition)[keyof typeof SymbolPosition]


export const RoundingOption: {
  NONE: 'NONE',
  NEAREST_DOLLAR: 'NEAREST_DOLLAR',
  NEAREST_FIFTY_CENTS: 'NEAREST_FIFTY_CENTS',
  NEAREST_QUARTER: 'NEAREST_QUARTER'
};

export type RoundingOption = (typeof RoundingOption)[keyof typeof RoundingOption]


export const WeekDay: {
  SUNDAY: 'SUNDAY',
  MONDAY: 'MONDAY',
  TUESDAY: 'TUESDAY',
  WEDNESDAY: 'WEDNESDAY',
  THURSDAY: 'THURSDAY',
  FRIDAY: 'FRIDAY',
  SATURDAY: 'SATURDAY'
};

export type WeekDay = (typeof WeekDay)[keyof typeof WeekDay]


export const Theme: {
  LIGHT: 'LIGHT',
  DARK: 'DARK'
};

export type Theme = (typeof Theme)[keyof typeof Theme]

}

export type CategoryType = $Enums.CategoryType

export const CategoryType: typeof $Enums.CategoryType

export type TransactionType = $Enums.TransactionType

export const TransactionType: typeof $Enums.TransactionType

export type BudgetTimeframe = $Enums.BudgetTimeframe

export const BudgetTimeframe: typeof $Enums.BudgetTimeframe

export type BillFrequency = $Enums.BillFrequency

export const BillFrequency: typeof $Enums.BillFrequency

export type SymbolPosition = $Enums.SymbolPosition

export const SymbolPosition: typeof $Enums.SymbolPosition

export type RoundingOption = $Enums.RoundingOption

export const RoundingOption: typeof $Enums.RoundingOption

export type WeekDay = $Enums.WeekDay

export const WeekDay: typeof $Enums.WeekDay

export type Theme = $Enums.Theme

export const Theme: typeof $Enums.Theme

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Users
 * const users = await prisma.user.findMany()
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
   * // Fetch zero or more Users
   * const users = await prisma.user.findMany()
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
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P]): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number }): $Utils.JsPromise<R>

  /**
   * Executes a raw MongoDB command and returns the result of it.
   * @example
   * ```
   * const user = await prisma.$runCommandRaw({
   *   aggregate: 'User',
   *   pipeline: [{ $match: { name: 'Bob' } }, { $project: { email: true, _id: false } }],
   *   explain: false,
   * })
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $runCommandRaw(command: Prisma.InputJsonObject): Prisma.PrismaPromise<Prisma.JsonObject>

  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.user`: Exposes CRUD operations for the **User** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.UserDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.transaction`: Exposes CRUD operations for the **Transaction** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Transactions
    * const transactions = await prisma.transaction.findMany()
    * ```
    */
  get transaction(): Prisma.TransactionDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.category`: Exposes CRUD operations for the **Category** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Categories
    * const categories = await prisma.category.findMany()
    * ```
    */
  get category(): Prisma.CategoryDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.bill`: Exposes CRUD operations for the **Bill** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Bills
    * const bills = await prisma.bill.findMany()
    * ```
    */
  get bill(): Prisma.BillDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.budget`: Exposes CRUD operations for the **Budget** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Budgets
    * const budgets = await prisma.budget.findMany()
    * ```
    */
  get budget(): Prisma.BudgetDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.categoryAllocation`: Exposes CRUD operations for the **CategoryAllocation** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more CategoryAllocations
    * const categoryAllocations = await prisma.categoryAllocation.findMany()
    * ```
    */
  get categoryAllocation(): Prisma.CategoryAllocationDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.savingsGoal`: Exposes CRUD operations for the **SavingsGoal** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more SavingsGoals
    * const savingsGoals = await prisma.savingsGoal.findMany()
    * ```
    */
  get savingsGoal(): Prisma.SavingsGoalDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.planItem`: Exposes CRUD operations for the **PlanItem** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more PlanItems
    * const planItems = await prisma.planItem.findMany()
    * ```
    */
  get planItem(): Prisma.PlanItemDelegate<ExtArgs, ClientOptions>;
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
   * Prisma Client JS version: 6.6.0
   * Query Engine version: f676762280b54cd07c770017ed3711ddde35f37a
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
    User: 'User',
    Transaction: 'Transaction',
    Category: 'Category',
    Bill: 'Bill',
    Budget: 'Budget',
    CategoryAllocation: 'CategoryAllocation',
    SavingsGoal: 'SavingsGoal',
    PlanItem: 'PlanItem'
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
      modelProps: "user" | "transaction" | "category" | "bill" | "budget" | "categoryAllocation" | "savingsGoal" | "planItem"
      txIsolationLevel: never
    }
    model: {
      User: {
        payload: Prisma.$UserPayload<ExtArgs>
        fields: Prisma.UserFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findFirst: {
            args: Prisma.UserFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findMany: {
            args: Prisma.UserFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          create: {
            args: Prisma.UserCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          createMany: {
            args: Prisma.UserCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.UserDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          update: {
            args: Prisma.UserUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          deleteMany: {
            args: Prisma.UserDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.UserUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          aggregate: {
            args: Prisma.UserAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUser>
          }
          groupBy: {
            args: Prisma.UserGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserGroupByOutputType>[]
          }
          findRaw: {
            args: Prisma.UserFindRawArgs<ExtArgs>
            result: JsonObject
          }
          aggregateRaw: {
            args: Prisma.UserAggregateRawArgs<ExtArgs>
            result: JsonObject
          }
          count: {
            args: Prisma.UserCountArgs<ExtArgs>
            result: $Utils.Optional<UserCountAggregateOutputType> | number
          }
        }
      }
      Transaction: {
        payload: Prisma.$TransactionPayload<ExtArgs>
        fields: Prisma.TransactionFieldRefs
        operations: {
          findUnique: {
            args: Prisma.TransactionFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TransactionPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.TransactionFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TransactionPayload>
          }
          findFirst: {
            args: Prisma.TransactionFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TransactionPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.TransactionFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TransactionPayload>
          }
          findMany: {
            args: Prisma.TransactionFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TransactionPayload>[]
          }
          create: {
            args: Prisma.TransactionCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TransactionPayload>
          }
          createMany: {
            args: Prisma.TransactionCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.TransactionDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TransactionPayload>
          }
          update: {
            args: Prisma.TransactionUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TransactionPayload>
          }
          deleteMany: {
            args: Prisma.TransactionDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.TransactionUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.TransactionUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TransactionPayload>
          }
          aggregate: {
            args: Prisma.TransactionAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateTransaction>
          }
          groupBy: {
            args: Prisma.TransactionGroupByArgs<ExtArgs>
            result: $Utils.Optional<TransactionGroupByOutputType>[]
          }
          findRaw: {
            args: Prisma.TransactionFindRawArgs<ExtArgs>
            result: JsonObject
          }
          aggregateRaw: {
            args: Prisma.TransactionAggregateRawArgs<ExtArgs>
            result: JsonObject
          }
          count: {
            args: Prisma.TransactionCountArgs<ExtArgs>
            result: $Utils.Optional<TransactionCountAggregateOutputType> | number
          }
        }
      }
      Category: {
        payload: Prisma.$CategoryPayload<ExtArgs>
        fields: Prisma.CategoryFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CategoryFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CategoryFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload>
          }
          findFirst: {
            args: Prisma.CategoryFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CategoryFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload>
          }
          findMany: {
            args: Prisma.CategoryFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload>[]
          }
          create: {
            args: Prisma.CategoryCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload>
          }
          createMany: {
            args: Prisma.CategoryCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.CategoryDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload>
          }
          update: {
            args: Prisma.CategoryUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload>
          }
          deleteMany: {
            args: Prisma.CategoryDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.CategoryUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.CategoryUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload>
          }
          aggregate: {
            args: Prisma.CategoryAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCategory>
          }
          groupBy: {
            args: Prisma.CategoryGroupByArgs<ExtArgs>
            result: $Utils.Optional<CategoryGroupByOutputType>[]
          }
          findRaw: {
            args: Prisma.CategoryFindRawArgs<ExtArgs>
            result: JsonObject
          }
          aggregateRaw: {
            args: Prisma.CategoryAggregateRawArgs<ExtArgs>
            result: JsonObject
          }
          count: {
            args: Prisma.CategoryCountArgs<ExtArgs>
            result: $Utils.Optional<CategoryCountAggregateOutputType> | number
          }
        }
      }
      Bill: {
        payload: Prisma.$BillPayload<ExtArgs>
        fields: Prisma.BillFieldRefs
        operations: {
          findUnique: {
            args: Prisma.BillFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BillPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.BillFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BillPayload>
          }
          findFirst: {
            args: Prisma.BillFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BillPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.BillFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BillPayload>
          }
          findMany: {
            args: Prisma.BillFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BillPayload>[]
          }
          create: {
            args: Prisma.BillCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BillPayload>
          }
          createMany: {
            args: Prisma.BillCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.BillDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BillPayload>
          }
          update: {
            args: Prisma.BillUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BillPayload>
          }
          deleteMany: {
            args: Prisma.BillDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.BillUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.BillUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BillPayload>
          }
          aggregate: {
            args: Prisma.BillAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateBill>
          }
          groupBy: {
            args: Prisma.BillGroupByArgs<ExtArgs>
            result: $Utils.Optional<BillGroupByOutputType>[]
          }
          findRaw: {
            args: Prisma.BillFindRawArgs<ExtArgs>
            result: JsonObject
          }
          aggregateRaw: {
            args: Prisma.BillAggregateRawArgs<ExtArgs>
            result: JsonObject
          }
          count: {
            args: Prisma.BillCountArgs<ExtArgs>
            result: $Utils.Optional<BillCountAggregateOutputType> | number
          }
        }
      }
      Budget: {
        payload: Prisma.$BudgetPayload<ExtArgs>
        fields: Prisma.BudgetFieldRefs
        operations: {
          findUnique: {
            args: Prisma.BudgetFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BudgetPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.BudgetFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BudgetPayload>
          }
          findFirst: {
            args: Prisma.BudgetFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BudgetPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.BudgetFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BudgetPayload>
          }
          findMany: {
            args: Prisma.BudgetFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BudgetPayload>[]
          }
          create: {
            args: Prisma.BudgetCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BudgetPayload>
          }
          createMany: {
            args: Prisma.BudgetCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.BudgetDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BudgetPayload>
          }
          update: {
            args: Prisma.BudgetUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BudgetPayload>
          }
          deleteMany: {
            args: Prisma.BudgetDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.BudgetUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.BudgetUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BudgetPayload>
          }
          aggregate: {
            args: Prisma.BudgetAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateBudget>
          }
          groupBy: {
            args: Prisma.BudgetGroupByArgs<ExtArgs>
            result: $Utils.Optional<BudgetGroupByOutputType>[]
          }
          findRaw: {
            args: Prisma.BudgetFindRawArgs<ExtArgs>
            result: JsonObject
          }
          aggregateRaw: {
            args: Prisma.BudgetAggregateRawArgs<ExtArgs>
            result: JsonObject
          }
          count: {
            args: Prisma.BudgetCountArgs<ExtArgs>
            result: $Utils.Optional<BudgetCountAggregateOutputType> | number
          }
        }
      }
      CategoryAllocation: {
        payload: Prisma.$CategoryAllocationPayload<ExtArgs>
        fields: Prisma.CategoryAllocationFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CategoryAllocationFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoryAllocationPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CategoryAllocationFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoryAllocationPayload>
          }
          findFirst: {
            args: Prisma.CategoryAllocationFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoryAllocationPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CategoryAllocationFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoryAllocationPayload>
          }
          findMany: {
            args: Prisma.CategoryAllocationFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoryAllocationPayload>[]
          }
          create: {
            args: Prisma.CategoryAllocationCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoryAllocationPayload>
          }
          createMany: {
            args: Prisma.CategoryAllocationCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.CategoryAllocationDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoryAllocationPayload>
          }
          update: {
            args: Prisma.CategoryAllocationUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoryAllocationPayload>
          }
          deleteMany: {
            args: Prisma.CategoryAllocationDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.CategoryAllocationUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.CategoryAllocationUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoryAllocationPayload>
          }
          aggregate: {
            args: Prisma.CategoryAllocationAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCategoryAllocation>
          }
          groupBy: {
            args: Prisma.CategoryAllocationGroupByArgs<ExtArgs>
            result: $Utils.Optional<CategoryAllocationGroupByOutputType>[]
          }
          findRaw: {
            args: Prisma.CategoryAllocationFindRawArgs<ExtArgs>
            result: JsonObject
          }
          aggregateRaw: {
            args: Prisma.CategoryAllocationAggregateRawArgs<ExtArgs>
            result: JsonObject
          }
          count: {
            args: Prisma.CategoryAllocationCountArgs<ExtArgs>
            result: $Utils.Optional<CategoryAllocationCountAggregateOutputType> | number
          }
        }
      }
      SavingsGoal: {
        payload: Prisma.$SavingsGoalPayload<ExtArgs>
        fields: Prisma.SavingsGoalFieldRefs
        operations: {
          findUnique: {
            args: Prisma.SavingsGoalFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SavingsGoalPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.SavingsGoalFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SavingsGoalPayload>
          }
          findFirst: {
            args: Prisma.SavingsGoalFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SavingsGoalPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.SavingsGoalFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SavingsGoalPayload>
          }
          findMany: {
            args: Prisma.SavingsGoalFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SavingsGoalPayload>[]
          }
          create: {
            args: Prisma.SavingsGoalCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SavingsGoalPayload>
          }
          createMany: {
            args: Prisma.SavingsGoalCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.SavingsGoalDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SavingsGoalPayload>
          }
          update: {
            args: Prisma.SavingsGoalUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SavingsGoalPayload>
          }
          deleteMany: {
            args: Prisma.SavingsGoalDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.SavingsGoalUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.SavingsGoalUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SavingsGoalPayload>
          }
          aggregate: {
            args: Prisma.SavingsGoalAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateSavingsGoal>
          }
          groupBy: {
            args: Prisma.SavingsGoalGroupByArgs<ExtArgs>
            result: $Utils.Optional<SavingsGoalGroupByOutputType>[]
          }
          findRaw: {
            args: Prisma.SavingsGoalFindRawArgs<ExtArgs>
            result: JsonObject
          }
          aggregateRaw: {
            args: Prisma.SavingsGoalAggregateRawArgs<ExtArgs>
            result: JsonObject
          }
          count: {
            args: Prisma.SavingsGoalCountArgs<ExtArgs>
            result: $Utils.Optional<SavingsGoalCountAggregateOutputType> | number
          }
        }
      }
      PlanItem: {
        payload: Prisma.$PlanItemPayload<ExtArgs>
        fields: Prisma.PlanItemFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PlanItemFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlanItemPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PlanItemFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlanItemPayload>
          }
          findFirst: {
            args: Prisma.PlanItemFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlanItemPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PlanItemFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlanItemPayload>
          }
          findMany: {
            args: Prisma.PlanItemFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlanItemPayload>[]
          }
          create: {
            args: Prisma.PlanItemCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlanItemPayload>
          }
          createMany: {
            args: Prisma.PlanItemCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.PlanItemDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlanItemPayload>
          }
          update: {
            args: Prisma.PlanItemUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlanItemPayload>
          }
          deleteMany: {
            args: Prisma.PlanItemDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.PlanItemUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.PlanItemUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlanItemPayload>
          }
          aggregate: {
            args: Prisma.PlanItemAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePlanItem>
          }
          groupBy: {
            args: Prisma.PlanItemGroupByArgs<ExtArgs>
            result: $Utils.Optional<PlanItemGroupByOutputType>[]
          }
          findRaw: {
            args: Prisma.PlanItemFindRawArgs<ExtArgs>
            result: JsonObject
          }
          aggregateRaw: {
            args: Prisma.PlanItemAggregateRawArgs<ExtArgs>
            result: JsonObject
          }
          count: {
            args: Prisma.PlanItemCountArgs<ExtArgs>
            result: $Utils.Optional<PlanItemCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $runCommandRaw: {
          args: Prisma.InputJsonObject,
          result: Prisma.JsonObject
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
    user?: UserOmit
    transaction?: TransactionOmit
    category?: CategoryOmit
    bill?: BillOmit
    budget?: BudgetOmit
    categoryAllocation?: CategoryAllocationOmit
    savingsGoal?: SavingsGoalOmit
    planItem?: PlanItemOmit
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
   * Count Type UserCountOutputType
   */

  export type UserCountOutputType = {
    budgets: number
    transactions: number
    categories: number
    bills: number
    savingsGoals: number
    planItems: number
  }

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    budgets?: boolean | UserCountOutputTypeCountBudgetsArgs
    transactions?: boolean | UserCountOutputTypeCountTransactionsArgs
    categories?: boolean | UserCountOutputTypeCountCategoriesArgs
    bills?: boolean | UserCountOutputTypeCountBillsArgs
    savingsGoals?: boolean | UserCountOutputTypeCountSavingsGoalsArgs
    planItems?: boolean | UserCountOutputTypeCountPlanItemsArgs
  }

  // Custom InputTypes
  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCountOutputType
     */
    select?: UserCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountBudgetsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: BudgetWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountTransactionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TransactionWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountCategoriesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CategoryWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountBillsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: BillWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountSavingsGoalsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SavingsGoalWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountPlanItemsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PlanItemWhereInput
  }


  /**
   * Count Type CategoryCountOutputType
   */

  export type CategoryCountOutputType = {
    transactions: number
    bills: number
    allocations: number
    planItems: number
  }

  export type CategoryCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    transactions?: boolean | CategoryCountOutputTypeCountTransactionsArgs
    bills?: boolean | CategoryCountOutputTypeCountBillsArgs
    allocations?: boolean | CategoryCountOutputTypeCountAllocationsArgs
    planItems?: boolean | CategoryCountOutputTypeCountPlanItemsArgs
  }

  // Custom InputTypes
  /**
   * CategoryCountOutputType without action
   */
  export type CategoryCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CategoryCountOutputType
     */
    select?: CategoryCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * CategoryCountOutputType without action
   */
  export type CategoryCountOutputTypeCountTransactionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TransactionWhereInput
  }

  /**
   * CategoryCountOutputType without action
   */
  export type CategoryCountOutputTypeCountBillsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: BillWhereInput
  }

  /**
   * CategoryCountOutputType without action
   */
  export type CategoryCountOutputTypeCountAllocationsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CategoryAllocationWhereInput
  }

  /**
   * CategoryCountOutputType without action
   */
  export type CategoryCountOutputTypeCountPlanItemsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PlanItemWhereInput
  }


  /**
   * Count Type BillCountOutputType
   */

  export type BillCountOutputType = {
    transactions: number
  }

  export type BillCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    transactions?: boolean | BillCountOutputTypeCountTransactionsArgs
  }

  // Custom InputTypes
  /**
   * BillCountOutputType without action
   */
  export type BillCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BillCountOutputType
     */
    select?: BillCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * BillCountOutputType without action
   */
  export type BillCountOutputTypeCountTransactionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TransactionWhereInput
  }


  /**
   * Count Type BudgetCountOutputType
   */

  export type BudgetCountOutputType = {
    categoryAllocations: number
  }

  export type BudgetCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    categoryAllocations?: boolean | BudgetCountOutputTypeCountCategoryAllocationsArgs
  }

  // Custom InputTypes
  /**
   * BudgetCountOutputType without action
   */
  export type BudgetCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BudgetCountOutputType
     */
    select?: BudgetCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * BudgetCountOutputType without action
   */
  export type BudgetCountOutputTypeCountCategoryAllocationsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CategoryAllocationWhereInput
  }


  /**
   * Models
   */

  /**
   * Model User
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _avg: UserAvgAggregateOutputType | null
    _sum: UserSumAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserAvgAggregateOutputType = {
    decimalPlaces: number | null
  }

  export type UserSumAggregateOutputType = {
    decimalPlaces: number | null
  }

  export type UserMinAggregateOutputType = {
    id: string | null
    email: string | null
    password: string | null
    firstName: string | null
    lastName: string | null
    profileImageUrl: string | null
    createdAt: Date | null
    updatedAt: Date | null
    currency: string | null
    symbolPosition: $Enums.SymbolPosition | null
    decimalPlaces: number | null
    thousandsSeparator: string | null
    decimalSeparator: string | null
    hideCents: boolean | null
    roundToNearest: $Enums.RoundingOption | null
    weekStartDay: $Enums.WeekDay | null
    notifyLowBalance: boolean | null
    notifyBillsDue: boolean | null
    notifyGoalReached: boolean | null
    notifyBudgetExceeded: boolean | null
    theme: $Enums.Theme | null
  }

  export type UserMaxAggregateOutputType = {
    id: string | null
    email: string | null
    password: string | null
    firstName: string | null
    lastName: string | null
    profileImageUrl: string | null
    createdAt: Date | null
    updatedAt: Date | null
    currency: string | null
    symbolPosition: $Enums.SymbolPosition | null
    decimalPlaces: number | null
    thousandsSeparator: string | null
    decimalSeparator: string | null
    hideCents: boolean | null
    roundToNearest: $Enums.RoundingOption | null
    weekStartDay: $Enums.WeekDay | null
    notifyLowBalance: boolean | null
    notifyBillsDue: boolean | null
    notifyGoalReached: boolean | null
    notifyBudgetExceeded: boolean | null
    theme: $Enums.Theme | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    email: number
    password: number
    firstName: number
    lastName: number
    profileImageUrl: number
    createdAt: number
    updatedAt: number
    currency: number
    symbolPosition: number
    decimalPlaces: number
    thousandsSeparator: number
    decimalSeparator: number
    hideCents: number
    roundToNearest: number
    weekStartDay: number
    notifyLowBalance: number
    notifyBillsDue: number
    notifyGoalReached: number
    notifyBudgetExceeded: number
    theme: number
    _all: number
  }


  export type UserAvgAggregateInputType = {
    decimalPlaces?: true
  }

  export type UserSumAggregateInputType = {
    decimalPlaces?: true
  }

  export type UserMinAggregateInputType = {
    id?: true
    email?: true
    password?: true
    firstName?: true
    lastName?: true
    profileImageUrl?: true
    createdAt?: true
    updatedAt?: true
    currency?: true
    symbolPosition?: true
    decimalPlaces?: true
    thousandsSeparator?: true
    decimalSeparator?: true
    hideCents?: true
    roundToNearest?: true
    weekStartDay?: true
    notifyLowBalance?: true
    notifyBillsDue?: true
    notifyGoalReached?: true
    notifyBudgetExceeded?: true
    theme?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    email?: true
    password?: true
    firstName?: true
    lastName?: true
    profileImageUrl?: true
    createdAt?: true
    updatedAt?: true
    currency?: true
    symbolPosition?: true
    decimalPlaces?: true
    thousandsSeparator?: true
    decimalSeparator?: true
    hideCents?: true
    roundToNearest?: true
    weekStartDay?: true
    notifyLowBalance?: true
    notifyBillsDue?: true
    notifyGoalReached?: true
    notifyBudgetExceeded?: true
    theme?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    email?: true
    password?: true
    firstName?: true
    lastName?: true
    profileImageUrl?: true
    createdAt?: true
    updatedAt?: true
    currency?: true
    symbolPosition?: true
    decimalPlaces?: true
    thousandsSeparator?: true
    decimalSeparator?: true
    hideCents?: true
    roundToNearest?: true
    weekStartDay?: true
    notifyLowBalance?: true
    notifyBillsDue?: true
    notifyGoalReached?: true
    notifyBudgetExceeded?: true
    theme?: true
    _all?: true
  }

  export type UserAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which User to aggregate.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Users
    **/
    _count?: true | UserCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: UserAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: UserSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserMaxAggregateInputType
  }

  export type GetUserAggregateType<T extends UserAggregateArgs> = {
        [P in keyof T & keyof AggregateUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser[P]>
      : GetScalarType<T[P], AggregateUser[P]>
  }




  export type UserGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
    orderBy?: UserOrderByWithAggregationInput | UserOrderByWithAggregationInput[]
    by: UserScalarFieldEnum[] | UserScalarFieldEnum
    having?: UserScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserCountAggregateInputType | true
    _avg?: UserAvgAggregateInputType
    _sum?: UserSumAggregateInputType
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }

  export type UserGroupByOutputType = {
    id: string
    email: string
    password: string
    firstName: string | null
    lastName: string | null
    profileImageUrl: string | null
    createdAt: Date
    updatedAt: Date
    currency: string
    symbolPosition: $Enums.SymbolPosition
    decimalPlaces: number
    thousandsSeparator: string
    decimalSeparator: string
    hideCents: boolean
    roundToNearest: $Enums.RoundingOption
    weekStartDay: $Enums.WeekDay
    notifyLowBalance: boolean
    notifyBillsDue: boolean
    notifyGoalReached: boolean
    notifyBudgetExceeded: boolean
    theme: $Enums.Theme
    _count: UserCountAggregateOutputType | null
    _avg: UserAvgAggregateOutputType | null
    _sum: UserSumAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  type GetUserGroupByPayload<T extends UserGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserGroupByOutputType[P]>
            : GetScalarType<T[P], UserGroupByOutputType[P]>
        }
      >
    >


  export type UserSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    password?: boolean
    firstName?: boolean
    lastName?: boolean
    profileImageUrl?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    currency?: boolean
    symbolPosition?: boolean
    decimalPlaces?: boolean
    thousandsSeparator?: boolean
    decimalSeparator?: boolean
    hideCents?: boolean
    roundToNearest?: boolean
    weekStartDay?: boolean
    notifyLowBalance?: boolean
    notifyBillsDue?: boolean
    notifyGoalReached?: boolean
    notifyBudgetExceeded?: boolean
    theme?: boolean
    budgets?: boolean | User$budgetsArgs<ExtArgs>
    transactions?: boolean | User$transactionsArgs<ExtArgs>
    categories?: boolean | User$categoriesArgs<ExtArgs>
    bills?: boolean | User$billsArgs<ExtArgs>
    savingsGoals?: boolean | User$savingsGoalsArgs<ExtArgs>
    planItems?: boolean | User$planItemsArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>



  export type UserSelectScalar = {
    id?: boolean
    email?: boolean
    password?: boolean
    firstName?: boolean
    lastName?: boolean
    profileImageUrl?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    currency?: boolean
    symbolPosition?: boolean
    decimalPlaces?: boolean
    thousandsSeparator?: boolean
    decimalSeparator?: boolean
    hideCents?: boolean
    roundToNearest?: boolean
    weekStartDay?: boolean
    notifyLowBalance?: boolean
    notifyBillsDue?: boolean
    notifyGoalReached?: boolean
    notifyBudgetExceeded?: boolean
    theme?: boolean
  }

  export type UserOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "email" | "password" | "firstName" | "lastName" | "profileImageUrl" | "createdAt" | "updatedAt" | "currency" | "symbolPosition" | "decimalPlaces" | "thousandsSeparator" | "decimalSeparator" | "hideCents" | "roundToNearest" | "weekStartDay" | "notifyLowBalance" | "notifyBillsDue" | "notifyGoalReached" | "notifyBudgetExceeded" | "theme", ExtArgs["result"]["user"]>
  export type UserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    budgets?: boolean | User$budgetsArgs<ExtArgs>
    transactions?: boolean | User$transactionsArgs<ExtArgs>
    categories?: boolean | User$categoriesArgs<ExtArgs>
    bills?: boolean | User$billsArgs<ExtArgs>
    savingsGoals?: boolean | User$savingsGoalsArgs<ExtArgs>
    planItems?: boolean | User$planItemsArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {
      budgets: Prisma.$BudgetPayload<ExtArgs>[]
      transactions: Prisma.$TransactionPayload<ExtArgs>[]
      categories: Prisma.$CategoryPayload<ExtArgs>[]
      bills: Prisma.$BillPayload<ExtArgs>[]
      savingsGoals: Prisma.$SavingsGoalPayload<ExtArgs>[]
      planItems: Prisma.$PlanItemPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      email: string
      password: string
      firstName: string | null
      lastName: string | null
      profileImageUrl: string | null
      createdAt: Date
      updatedAt: Date
      currency: string
      symbolPosition: $Enums.SymbolPosition
      decimalPlaces: number
      thousandsSeparator: string
      decimalSeparator: string
      hideCents: boolean
      roundToNearest: $Enums.RoundingOption
      weekStartDay: $Enums.WeekDay
      notifyLowBalance: boolean
      notifyBillsDue: boolean
      notifyGoalReached: boolean
      notifyBudgetExceeded: boolean
      theme: $Enums.Theme
    }, ExtArgs["result"]["user"]>
    composites: {}
  }

  type UserGetPayload<S extends boolean | null | undefined | UserDefaultArgs> = $Result.GetResult<Prisma.$UserPayload, S>

  type UserCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UserFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserCountAggregateInputType | true
    }

  export interface UserDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['User'], meta: { name: 'User' } }
    /**
     * Find zero or one User that matches the filter.
     * @param {UserFindUniqueArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserFindUniqueArgs>(args: SelectSubset<T, UserFindUniqueArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one User that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UserFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs>(args: SelectSubset<T, UserFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserFindFirstArgs>(args?: SelectSubset<T, UserFindFirstArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserFindFirstOrThrowArgs>(args?: SelectSubset<T, UserFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.user.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.user.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userWithIdOnly = await prisma.user.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UserFindManyArgs>(args?: SelectSubset<T, UserFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a User.
     * @param {UserCreateArgs} args - Arguments to create a User.
     * @example
     * // Create one User
     * const User = await prisma.user.create({
     *   data: {
     *     // ... data to create a User
     *   }
     * })
     * 
     */
    create<T extends UserCreateArgs>(args: SelectSubset<T, UserCreateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Users.
     * @param {UserCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserCreateManyArgs>(args?: SelectSubset<T, UserCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a User.
     * @param {UserDeleteArgs} args - Arguments to delete one User.
     * @example
     * // Delete one User
     * const User = await prisma.user.delete({
     *   where: {
     *     // ... filter to delete one User
     *   }
     * })
     * 
     */
    delete<T extends UserDeleteArgs>(args: SelectSubset<T, UserDeleteArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one User.
     * @param {UserUpdateArgs} args - Arguments to update one User.
     * @example
     * // Update one User
     * const user = await prisma.user.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UserUpdateArgs>(args: SelectSubset<T, UserUpdateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Users.
     * @param {UserDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.user.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserDeleteManyArgs>(args?: SelectSubset<T, UserDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UserUpdateManyArgs>(args: SelectSubset<T, UserUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one User.
     * @param {UserUpsertArgs} args - Arguments to update or create a User.
     * @example
     * // Update or create a User
     * const user = await prisma.user.upsert({
     *   create: {
     *     // ... data to create a User
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User we want to update
     *   }
     * })
     */
    upsert<T extends UserUpsertArgs>(args: SelectSubset<T, UserUpsertArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Users that matches the filter.
     * @param {UserFindRawArgs} args - Select which filters you would like to apply.
     * @example
     * const user = await prisma.user.findRaw({
     *   filter: { age: { $gt: 25 } }
     * })
     */
    findRaw(args?: UserFindRawArgs): Prisma.PrismaPromise<JsonObject>

    /**
     * Perform aggregation operations on a User.
     * @param {UserAggregateRawArgs} args - Select which aggregations you would like to apply.
     * @example
     * const user = await prisma.user.aggregateRaw({
     *   pipeline: [
     *     { $match: { status: "registered" } },
     *     { $group: { _id: "$country", total: { $sum: 1 } } }
     *   ]
     * })
     */
    aggregateRaw(args?: UserAggregateRawArgs): Prisma.PrismaPromise<JsonObject>


    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.user.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends UserCountArgs>(
      args?: Subset<T, UserCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends UserAggregateArgs>(args: Subset<T, UserAggregateArgs>): Prisma.PrismaPromise<GetUserAggregateType<T>>

    /**
     * Group by User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserGroupByArgs} args - Group by arguments.
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
      T extends UserGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserGroupByArgs['orderBy'] }
        : { orderBy?: UserGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, UserGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the User model
   */
  readonly fields: UserFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for User.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    budgets<T extends User$budgetsArgs<ExtArgs> = {}>(args?: Subset<T, User$budgetsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BudgetPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    transactions<T extends User$transactionsArgs<ExtArgs> = {}>(args?: Subset<T, User$transactionsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TransactionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    categories<T extends User$categoriesArgs<ExtArgs> = {}>(args?: Subset<T, User$categoriesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    bills<T extends User$billsArgs<ExtArgs> = {}>(args?: Subset<T, User$billsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BillPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    savingsGoals<T extends User$savingsGoalsArgs<ExtArgs> = {}>(args?: Subset<T, User$savingsGoalsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SavingsGoalPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    planItems<T extends User$planItemsArgs<ExtArgs> = {}>(args?: Subset<T, User$planItemsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PlanItemPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the User model
   */
  interface UserFieldRefs {
    readonly id: FieldRef<"User", 'String'>
    readonly email: FieldRef<"User", 'String'>
    readonly password: FieldRef<"User", 'String'>
    readonly firstName: FieldRef<"User", 'String'>
    readonly lastName: FieldRef<"User", 'String'>
    readonly profileImageUrl: FieldRef<"User", 'String'>
    readonly createdAt: FieldRef<"User", 'DateTime'>
    readonly updatedAt: FieldRef<"User", 'DateTime'>
    readonly currency: FieldRef<"User", 'String'>
    readonly symbolPosition: FieldRef<"User", 'SymbolPosition'>
    readonly decimalPlaces: FieldRef<"User", 'Int'>
    readonly thousandsSeparator: FieldRef<"User", 'String'>
    readonly decimalSeparator: FieldRef<"User", 'String'>
    readonly hideCents: FieldRef<"User", 'Boolean'>
    readonly roundToNearest: FieldRef<"User", 'RoundingOption'>
    readonly weekStartDay: FieldRef<"User", 'WeekDay'>
    readonly notifyLowBalance: FieldRef<"User", 'Boolean'>
    readonly notifyBillsDue: FieldRef<"User", 'Boolean'>
    readonly notifyGoalReached: FieldRef<"User", 'Boolean'>
    readonly notifyBudgetExceeded: FieldRef<"User", 'Boolean'>
    readonly theme: FieldRef<"User", 'Theme'>
  }
    

  // Custom InputTypes
  /**
   * User findUnique
   */
  export type UserFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findUniqueOrThrow
   */
  export type UserFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findFirst
   */
  export type UserFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findFirstOrThrow
   */
  export type UserFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findMany
   */
  export type UserFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User create
   */
  export type UserCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to create a User.
     */
    data: XOR<UserCreateInput, UserUncheckedCreateInput>
  }

  /**
   * User createMany
   */
  export type UserCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
  }

  /**
   * User update
   */
  export type UserUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to update a User.
     */
    data: XOR<UserUpdateInput, UserUncheckedUpdateInput>
    /**
     * Choose, which User to update.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User updateMany
   */
  export type UserUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User upsert
   */
  export type UserUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The filter to search for the User to update in case it exists.
     */
    where: UserWhereUniqueInput
    /**
     * In case the User found by the `where` argument doesn't exist, create a new User with this data.
     */
    create: XOR<UserCreateInput, UserUncheckedCreateInput>
    /**
     * In case the User was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserUpdateInput, UserUncheckedUpdateInput>
  }

  /**
   * User delete
   */
  export type UserDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter which User to delete.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User deleteMany
   */
  export type UserDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Users to delete
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to delete.
     */
    limit?: number
  }

  /**
   * User findRaw
   */
  export type UserFindRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The query predicate filter. If unspecified, then all documents in the collection will match the predicate. ${@link https://docs.mongodb.com/manual/reference/operator/query MongoDB Docs}.
     */
    filter?: InputJsonValue
    /**
     * Additional options to pass to the `find` command ${@link https://docs.mongodb.com/manual/reference/command/find/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }

  /**
   * User aggregateRaw
   */
  export type UserAggregateRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * An array of aggregation stages to process and transform the document stream via the aggregation pipeline. ${@link https://docs.mongodb.com/manual/reference/operator/aggregation-pipeline MongoDB Docs}.
     */
    pipeline?: InputJsonValue[]
    /**
     * Additional options to pass to the `aggregate` command ${@link https://docs.mongodb.com/manual/reference/command/aggregate/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }

  /**
   * User.budgets
   */
  export type User$budgetsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Budget
     */
    select?: BudgetSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Budget
     */
    omit?: BudgetOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BudgetInclude<ExtArgs> | null
    where?: BudgetWhereInput
    orderBy?: BudgetOrderByWithRelationInput | BudgetOrderByWithRelationInput[]
    cursor?: BudgetWhereUniqueInput
    take?: number
    skip?: number
    distinct?: BudgetScalarFieldEnum | BudgetScalarFieldEnum[]
  }

  /**
   * User.transactions
   */
  export type User$transactionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Transaction
     */
    select?: TransactionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Transaction
     */
    omit?: TransactionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransactionInclude<ExtArgs> | null
    where?: TransactionWhereInput
    orderBy?: TransactionOrderByWithRelationInput | TransactionOrderByWithRelationInput[]
    cursor?: TransactionWhereUniqueInput
    take?: number
    skip?: number
    distinct?: TransactionScalarFieldEnum | TransactionScalarFieldEnum[]
  }

  /**
   * User.categories
   */
  export type User$categoriesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Category
     */
    omit?: CategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryInclude<ExtArgs> | null
    where?: CategoryWhereInput
    orderBy?: CategoryOrderByWithRelationInput | CategoryOrderByWithRelationInput[]
    cursor?: CategoryWhereUniqueInput
    take?: number
    skip?: number
    distinct?: CategoryScalarFieldEnum | CategoryScalarFieldEnum[]
  }

  /**
   * User.bills
   */
  export type User$billsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Bill
     */
    select?: BillSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Bill
     */
    omit?: BillOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BillInclude<ExtArgs> | null
    where?: BillWhereInput
    orderBy?: BillOrderByWithRelationInput | BillOrderByWithRelationInput[]
    cursor?: BillWhereUniqueInput
    take?: number
    skip?: number
    distinct?: BillScalarFieldEnum | BillScalarFieldEnum[]
  }

  /**
   * User.savingsGoals
   */
  export type User$savingsGoalsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SavingsGoal
     */
    select?: SavingsGoalSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SavingsGoal
     */
    omit?: SavingsGoalOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SavingsGoalInclude<ExtArgs> | null
    where?: SavingsGoalWhereInput
    orderBy?: SavingsGoalOrderByWithRelationInput | SavingsGoalOrderByWithRelationInput[]
    cursor?: SavingsGoalWhereUniqueInput
    take?: number
    skip?: number
    distinct?: SavingsGoalScalarFieldEnum | SavingsGoalScalarFieldEnum[]
  }

  /**
   * User.planItems
   */
  export type User$planItemsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PlanItem
     */
    select?: PlanItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PlanItem
     */
    omit?: PlanItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlanItemInclude<ExtArgs> | null
    where?: PlanItemWhereInput
    orderBy?: PlanItemOrderByWithRelationInput | PlanItemOrderByWithRelationInput[]
    cursor?: PlanItemWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PlanItemScalarFieldEnum | PlanItemScalarFieldEnum[]
  }

  /**
   * User without action
   */
  export type UserDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
  }


  /**
   * Model Transaction
   */

  export type AggregateTransaction = {
    _count: TransactionCountAggregateOutputType | null
    _avg: TransactionAvgAggregateOutputType | null
    _sum: TransactionSumAggregateOutputType | null
    _min: TransactionMinAggregateOutputType | null
    _max: TransactionMaxAggregateOutputType | null
  }

  export type TransactionAvgAggregateOutputType = {
    amount: number | null
  }

  export type TransactionSumAggregateOutputType = {
    amount: number | null
  }

  export type TransactionMinAggregateOutputType = {
    id: string | null
    amount: number | null
    description: string | null
    date: Date | null
    notes: string | null
    type: $Enums.TransactionType | null
    createdAt: Date | null
    updatedAt: Date | null
    userId: string | null
    categoryId: string | null
    billId: string | null
  }

  export type TransactionMaxAggregateOutputType = {
    id: string | null
    amount: number | null
    description: string | null
    date: Date | null
    notes: string | null
    type: $Enums.TransactionType | null
    createdAt: Date | null
    updatedAt: Date | null
    userId: string | null
    categoryId: string | null
    billId: string | null
  }

  export type TransactionCountAggregateOutputType = {
    id: number
    amount: number
    description: number
    date: number
    notes: number
    type: number
    createdAt: number
    updatedAt: number
    userId: number
    categoryId: number
    billId: number
    _all: number
  }


  export type TransactionAvgAggregateInputType = {
    amount?: true
  }

  export type TransactionSumAggregateInputType = {
    amount?: true
  }

  export type TransactionMinAggregateInputType = {
    id?: true
    amount?: true
    description?: true
    date?: true
    notes?: true
    type?: true
    createdAt?: true
    updatedAt?: true
    userId?: true
    categoryId?: true
    billId?: true
  }

  export type TransactionMaxAggregateInputType = {
    id?: true
    amount?: true
    description?: true
    date?: true
    notes?: true
    type?: true
    createdAt?: true
    updatedAt?: true
    userId?: true
    categoryId?: true
    billId?: true
  }

  export type TransactionCountAggregateInputType = {
    id?: true
    amount?: true
    description?: true
    date?: true
    notes?: true
    type?: true
    createdAt?: true
    updatedAt?: true
    userId?: true
    categoryId?: true
    billId?: true
    _all?: true
  }

  export type TransactionAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Transaction to aggregate.
     */
    where?: TransactionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Transactions to fetch.
     */
    orderBy?: TransactionOrderByWithRelationInput | TransactionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: TransactionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Transactions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Transactions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Transactions
    **/
    _count?: true | TransactionCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: TransactionAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: TransactionSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TransactionMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TransactionMaxAggregateInputType
  }

  export type GetTransactionAggregateType<T extends TransactionAggregateArgs> = {
        [P in keyof T & keyof AggregateTransaction]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTransaction[P]>
      : GetScalarType<T[P], AggregateTransaction[P]>
  }




  export type TransactionGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TransactionWhereInput
    orderBy?: TransactionOrderByWithAggregationInput | TransactionOrderByWithAggregationInput[]
    by: TransactionScalarFieldEnum[] | TransactionScalarFieldEnum
    having?: TransactionScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TransactionCountAggregateInputType | true
    _avg?: TransactionAvgAggregateInputType
    _sum?: TransactionSumAggregateInputType
    _min?: TransactionMinAggregateInputType
    _max?: TransactionMaxAggregateInputType
  }

  export type TransactionGroupByOutputType = {
    id: string
    amount: number
    description: string | null
    date: Date
    notes: string | null
    type: $Enums.TransactionType
    createdAt: Date
    updatedAt: Date
    userId: string
    categoryId: string
    billId: string | null
    _count: TransactionCountAggregateOutputType | null
    _avg: TransactionAvgAggregateOutputType | null
    _sum: TransactionSumAggregateOutputType | null
    _min: TransactionMinAggregateOutputType | null
    _max: TransactionMaxAggregateOutputType | null
  }

  type GetTransactionGroupByPayload<T extends TransactionGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<TransactionGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TransactionGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TransactionGroupByOutputType[P]>
            : GetScalarType<T[P], TransactionGroupByOutputType[P]>
        }
      >
    >


  export type TransactionSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    amount?: boolean
    description?: boolean
    date?: boolean
    notes?: boolean
    type?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    userId?: boolean
    categoryId?: boolean
    billId?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    category?: boolean | CategoryDefaultArgs<ExtArgs>
    bill?: boolean | Transaction$billArgs<ExtArgs>
  }, ExtArgs["result"]["transaction"]>



  export type TransactionSelectScalar = {
    id?: boolean
    amount?: boolean
    description?: boolean
    date?: boolean
    notes?: boolean
    type?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    userId?: boolean
    categoryId?: boolean
    billId?: boolean
  }

  export type TransactionOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "amount" | "description" | "date" | "notes" | "type" | "createdAt" | "updatedAt" | "userId" | "categoryId" | "billId", ExtArgs["result"]["transaction"]>
  export type TransactionInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    category?: boolean | CategoryDefaultArgs<ExtArgs>
    bill?: boolean | Transaction$billArgs<ExtArgs>
  }

  export type $TransactionPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Transaction"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
      category: Prisma.$CategoryPayload<ExtArgs>
      bill: Prisma.$BillPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      amount: number
      description: string | null
      date: Date
      notes: string | null
      type: $Enums.TransactionType
      createdAt: Date
      updatedAt: Date
      userId: string
      categoryId: string
      billId: string | null
    }, ExtArgs["result"]["transaction"]>
    composites: {}
  }

  type TransactionGetPayload<S extends boolean | null | undefined | TransactionDefaultArgs> = $Result.GetResult<Prisma.$TransactionPayload, S>

  type TransactionCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<TransactionFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: TransactionCountAggregateInputType | true
    }

  export interface TransactionDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Transaction'], meta: { name: 'Transaction' } }
    /**
     * Find zero or one Transaction that matches the filter.
     * @param {TransactionFindUniqueArgs} args - Arguments to find a Transaction
     * @example
     * // Get one Transaction
     * const transaction = await prisma.transaction.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends TransactionFindUniqueArgs>(args: SelectSubset<T, TransactionFindUniqueArgs<ExtArgs>>): Prisma__TransactionClient<$Result.GetResult<Prisma.$TransactionPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Transaction that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {TransactionFindUniqueOrThrowArgs} args - Arguments to find a Transaction
     * @example
     * // Get one Transaction
     * const transaction = await prisma.transaction.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends TransactionFindUniqueOrThrowArgs>(args: SelectSubset<T, TransactionFindUniqueOrThrowArgs<ExtArgs>>): Prisma__TransactionClient<$Result.GetResult<Prisma.$TransactionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Transaction that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TransactionFindFirstArgs} args - Arguments to find a Transaction
     * @example
     * // Get one Transaction
     * const transaction = await prisma.transaction.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends TransactionFindFirstArgs>(args?: SelectSubset<T, TransactionFindFirstArgs<ExtArgs>>): Prisma__TransactionClient<$Result.GetResult<Prisma.$TransactionPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Transaction that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TransactionFindFirstOrThrowArgs} args - Arguments to find a Transaction
     * @example
     * // Get one Transaction
     * const transaction = await prisma.transaction.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends TransactionFindFirstOrThrowArgs>(args?: SelectSubset<T, TransactionFindFirstOrThrowArgs<ExtArgs>>): Prisma__TransactionClient<$Result.GetResult<Prisma.$TransactionPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Transactions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TransactionFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Transactions
     * const transactions = await prisma.transaction.findMany()
     * 
     * // Get first 10 Transactions
     * const transactions = await prisma.transaction.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const transactionWithIdOnly = await prisma.transaction.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends TransactionFindManyArgs>(args?: SelectSubset<T, TransactionFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TransactionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Transaction.
     * @param {TransactionCreateArgs} args - Arguments to create a Transaction.
     * @example
     * // Create one Transaction
     * const Transaction = await prisma.transaction.create({
     *   data: {
     *     // ... data to create a Transaction
     *   }
     * })
     * 
     */
    create<T extends TransactionCreateArgs>(args: SelectSubset<T, TransactionCreateArgs<ExtArgs>>): Prisma__TransactionClient<$Result.GetResult<Prisma.$TransactionPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Transactions.
     * @param {TransactionCreateManyArgs} args - Arguments to create many Transactions.
     * @example
     * // Create many Transactions
     * const transaction = await prisma.transaction.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends TransactionCreateManyArgs>(args?: SelectSubset<T, TransactionCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Transaction.
     * @param {TransactionDeleteArgs} args - Arguments to delete one Transaction.
     * @example
     * // Delete one Transaction
     * const Transaction = await prisma.transaction.delete({
     *   where: {
     *     // ... filter to delete one Transaction
     *   }
     * })
     * 
     */
    delete<T extends TransactionDeleteArgs>(args: SelectSubset<T, TransactionDeleteArgs<ExtArgs>>): Prisma__TransactionClient<$Result.GetResult<Prisma.$TransactionPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Transaction.
     * @param {TransactionUpdateArgs} args - Arguments to update one Transaction.
     * @example
     * // Update one Transaction
     * const transaction = await prisma.transaction.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends TransactionUpdateArgs>(args: SelectSubset<T, TransactionUpdateArgs<ExtArgs>>): Prisma__TransactionClient<$Result.GetResult<Prisma.$TransactionPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Transactions.
     * @param {TransactionDeleteManyArgs} args - Arguments to filter Transactions to delete.
     * @example
     * // Delete a few Transactions
     * const { count } = await prisma.transaction.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends TransactionDeleteManyArgs>(args?: SelectSubset<T, TransactionDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Transactions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TransactionUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Transactions
     * const transaction = await prisma.transaction.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends TransactionUpdateManyArgs>(args: SelectSubset<T, TransactionUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Transaction.
     * @param {TransactionUpsertArgs} args - Arguments to update or create a Transaction.
     * @example
     * // Update or create a Transaction
     * const transaction = await prisma.transaction.upsert({
     *   create: {
     *     // ... data to create a Transaction
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Transaction we want to update
     *   }
     * })
     */
    upsert<T extends TransactionUpsertArgs>(args: SelectSubset<T, TransactionUpsertArgs<ExtArgs>>): Prisma__TransactionClient<$Result.GetResult<Prisma.$TransactionPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Transactions that matches the filter.
     * @param {TransactionFindRawArgs} args - Select which filters you would like to apply.
     * @example
     * const transaction = await prisma.transaction.findRaw({
     *   filter: { age: { $gt: 25 } }
     * })
     */
    findRaw(args?: TransactionFindRawArgs): Prisma.PrismaPromise<JsonObject>

    /**
     * Perform aggregation operations on a Transaction.
     * @param {TransactionAggregateRawArgs} args - Select which aggregations you would like to apply.
     * @example
     * const transaction = await prisma.transaction.aggregateRaw({
     *   pipeline: [
     *     { $match: { status: "registered" } },
     *     { $group: { _id: "$country", total: { $sum: 1 } } }
     *   ]
     * })
     */
    aggregateRaw(args?: TransactionAggregateRawArgs): Prisma.PrismaPromise<JsonObject>


    /**
     * Count the number of Transactions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TransactionCountArgs} args - Arguments to filter Transactions to count.
     * @example
     * // Count the number of Transactions
     * const count = await prisma.transaction.count({
     *   where: {
     *     // ... the filter for the Transactions we want to count
     *   }
     * })
    **/
    count<T extends TransactionCountArgs>(
      args?: Subset<T, TransactionCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TransactionCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Transaction.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TransactionAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends TransactionAggregateArgs>(args: Subset<T, TransactionAggregateArgs>): Prisma.PrismaPromise<GetTransactionAggregateType<T>>

    /**
     * Group by Transaction.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TransactionGroupByArgs} args - Group by arguments.
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
      T extends TransactionGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: TransactionGroupByArgs['orderBy'] }
        : { orderBy?: TransactionGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, TransactionGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTransactionGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Transaction model
   */
  readonly fields: TransactionFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Transaction.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__TransactionClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    category<T extends CategoryDefaultArgs<ExtArgs> = {}>(args?: Subset<T, CategoryDefaultArgs<ExtArgs>>): Prisma__CategoryClient<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    bill<T extends Transaction$billArgs<ExtArgs> = {}>(args?: Subset<T, Transaction$billArgs<ExtArgs>>): Prisma__BillClient<$Result.GetResult<Prisma.$BillPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the Transaction model
   */
  interface TransactionFieldRefs {
    readonly id: FieldRef<"Transaction", 'String'>
    readonly amount: FieldRef<"Transaction", 'Float'>
    readonly description: FieldRef<"Transaction", 'String'>
    readonly date: FieldRef<"Transaction", 'DateTime'>
    readonly notes: FieldRef<"Transaction", 'String'>
    readonly type: FieldRef<"Transaction", 'TransactionType'>
    readonly createdAt: FieldRef<"Transaction", 'DateTime'>
    readonly updatedAt: FieldRef<"Transaction", 'DateTime'>
    readonly userId: FieldRef<"Transaction", 'String'>
    readonly categoryId: FieldRef<"Transaction", 'String'>
    readonly billId: FieldRef<"Transaction", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Transaction findUnique
   */
  export type TransactionFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Transaction
     */
    select?: TransactionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Transaction
     */
    omit?: TransactionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransactionInclude<ExtArgs> | null
    /**
     * Filter, which Transaction to fetch.
     */
    where: TransactionWhereUniqueInput
  }

  /**
   * Transaction findUniqueOrThrow
   */
  export type TransactionFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Transaction
     */
    select?: TransactionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Transaction
     */
    omit?: TransactionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransactionInclude<ExtArgs> | null
    /**
     * Filter, which Transaction to fetch.
     */
    where: TransactionWhereUniqueInput
  }

  /**
   * Transaction findFirst
   */
  export type TransactionFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Transaction
     */
    select?: TransactionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Transaction
     */
    omit?: TransactionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransactionInclude<ExtArgs> | null
    /**
     * Filter, which Transaction to fetch.
     */
    where?: TransactionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Transactions to fetch.
     */
    orderBy?: TransactionOrderByWithRelationInput | TransactionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Transactions.
     */
    cursor?: TransactionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Transactions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Transactions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Transactions.
     */
    distinct?: TransactionScalarFieldEnum | TransactionScalarFieldEnum[]
  }

  /**
   * Transaction findFirstOrThrow
   */
  export type TransactionFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Transaction
     */
    select?: TransactionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Transaction
     */
    omit?: TransactionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransactionInclude<ExtArgs> | null
    /**
     * Filter, which Transaction to fetch.
     */
    where?: TransactionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Transactions to fetch.
     */
    orderBy?: TransactionOrderByWithRelationInput | TransactionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Transactions.
     */
    cursor?: TransactionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Transactions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Transactions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Transactions.
     */
    distinct?: TransactionScalarFieldEnum | TransactionScalarFieldEnum[]
  }

  /**
   * Transaction findMany
   */
  export type TransactionFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Transaction
     */
    select?: TransactionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Transaction
     */
    omit?: TransactionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransactionInclude<ExtArgs> | null
    /**
     * Filter, which Transactions to fetch.
     */
    where?: TransactionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Transactions to fetch.
     */
    orderBy?: TransactionOrderByWithRelationInput | TransactionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Transactions.
     */
    cursor?: TransactionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Transactions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Transactions.
     */
    skip?: number
    distinct?: TransactionScalarFieldEnum | TransactionScalarFieldEnum[]
  }

  /**
   * Transaction create
   */
  export type TransactionCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Transaction
     */
    select?: TransactionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Transaction
     */
    omit?: TransactionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransactionInclude<ExtArgs> | null
    /**
     * The data needed to create a Transaction.
     */
    data: XOR<TransactionCreateInput, TransactionUncheckedCreateInput>
  }

  /**
   * Transaction createMany
   */
  export type TransactionCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Transactions.
     */
    data: TransactionCreateManyInput | TransactionCreateManyInput[]
  }

  /**
   * Transaction update
   */
  export type TransactionUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Transaction
     */
    select?: TransactionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Transaction
     */
    omit?: TransactionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransactionInclude<ExtArgs> | null
    /**
     * The data needed to update a Transaction.
     */
    data: XOR<TransactionUpdateInput, TransactionUncheckedUpdateInput>
    /**
     * Choose, which Transaction to update.
     */
    where: TransactionWhereUniqueInput
  }

  /**
   * Transaction updateMany
   */
  export type TransactionUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Transactions.
     */
    data: XOR<TransactionUpdateManyMutationInput, TransactionUncheckedUpdateManyInput>
    /**
     * Filter which Transactions to update
     */
    where?: TransactionWhereInput
    /**
     * Limit how many Transactions to update.
     */
    limit?: number
  }

  /**
   * Transaction upsert
   */
  export type TransactionUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Transaction
     */
    select?: TransactionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Transaction
     */
    omit?: TransactionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransactionInclude<ExtArgs> | null
    /**
     * The filter to search for the Transaction to update in case it exists.
     */
    where: TransactionWhereUniqueInput
    /**
     * In case the Transaction found by the `where` argument doesn't exist, create a new Transaction with this data.
     */
    create: XOR<TransactionCreateInput, TransactionUncheckedCreateInput>
    /**
     * In case the Transaction was found with the provided `where` argument, update it with this data.
     */
    update: XOR<TransactionUpdateInput, TransactionUncheckedUpdateInput>
  }

  /**
   * Transaction delete
   */
  export type TransactionDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Transaction
     */
    select?: TransactionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Transaction
     */
    omit?: TransactionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransactionInclude<ExtArgs> | null
    /**
     * Filter which Transaction to delete.
     */
    where: TransactionWhereUniqueInput
  }

  /**
   * Transaction deleteMany
   */
  export type TransactionDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Transactions to delete
     */
    where?: TransactionWhereInput
    /**
     * Limit how many Transactions to delete.
     */
    limit?: number
  }

  /**
   * Transaction findRaw
   */
  export type TransactionFindRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The query predicate filter. If unspecified, then all documents in the collection will match the predicate. ${@link https://docs.mongodb.com/manual/reference/operator/query MongoDB Docs}.
     */
    filter?: InputJsonValue
    /**
     * Additional options to pass to the `find` command ${@link https://docs.mongodb.com/manual/reference/command/find/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }

  /**
   * Transaction aggregateRaw
   */
  export type TransactionAggregateRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * An array of aggregation stages to process and transform the document stream via the aggregation pipeline. ${@link https://docs.mongodb.com/manual/reference/operator/aggregation-pipeline MongoDB Docs}.
     */
    pipeline?: InputJsonValue[]
    /**
     * Additional options to pass to the `aggregate` command ${@link https://docs.mongodb.com/manual/reference/command/aggregate/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }

  /**
   * Transaction.bill
   */
  export type Transaction$billArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Bill
     */
    select?: BillSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Bill
     */
    omit?: BillOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BillInclude<ExtArgs> | null
    where?: BillWhereInput
  }

  /**
   * Transaction without action
   */
  export type TransactionDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Transaction
     */
    select?: TransactionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Transaction
     */
    omit?: TransactionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransactionInclude<ExtArgs> | null
  }


  /**
   * Model Category
   */

  export type AggregateCategory = {
    _count: CategoryCountAggregateOutputType | null
    _min: CategoryMinAggregateOutputType | null
    _max: CategoryMaxAggregateOutputType | null
  }

  export type CategoryMinAggregateOutputType = {
    id: string | null
    name: string | null
    description: string | null
    color: string | null
    icon: string | null
    type: $Enums.CategoryType | null
    isDefault: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
    userId: string | null
  }

  export type CategoryMaxAggregateOutputType = {
    id: string | null
    name: string | null
    description: string | null
    color: string | null
    icon: string | null
    type: $Enums.CategoryType | null
    isDefault: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
    userId: string | null
  }

  export type CategoryCountAggregateOutputType = {
    id: number
    name: number
    description: number
    color: number
    icon: number
    type: number
    isDefault: number
    createdAt: number
    updatedAt: number
    userId: number
    _all: number
  }


  export type CategoryMinAggregateInputType = {
    id?: true
    name?: true
    description?: true
    color?: true
    icon?: true
    type?: true
    isDefault?: true
    createdAt?: true
    updatedAt?: true
    userId?: true
  }

  export type CategoryMaxAggregateInputType = {
    id?: true
    name?: true
    description?: true
    color?: true
    icon?: true
    type?: true
    isDefault?: true
    createdAt?: true
    updatedAt?: true
    userId?: true
  }

  export type CategoryCountAggregateInputType = {
    id?: true
    name?: true
    description?: true
    color?: true
    icon?: true
    type?: true
    isDefault?: true
    createdAt?: true
    updatedAt?: true
    userId?: true
    _all?: true
  }

  export type CategoryAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Category to aggregate.
     */
    where?: CategoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Categories to fetch.
     */
    orderBy?: CategoryOrderByWithRelationInput | CategoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CategoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Categories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Categories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Categories
    **/
    _count?: true | CategoryCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CategoryMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CategoryMaxAggregateInputType
  }

  export type GetCategoryAggregateType<T extends CategoryAggregateArgs> = {
        [P in keyof T & keyof AggregateCategory]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCategory[P]>
      : GetScalarType<T[P], AggregateCategory[P]>
  }




  export type CategoryGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CategoryWhereInput
    orderBy?: CategoryOrderByWithAggregationInput | CategoryOrderByWithAggregationInput[]
    by: CategoryScalarFieldEnum[] | CategoryScalarFieldEnum
    having?: CategoryScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CategoryCountAggregateInputType | true
    _min?: CategoryMinAggregateInputType
    _max?: CategoryMaxAggregateInputType
  }

  export type CategoryGroupByOutputType = {
    id: string
    name: string
    description: string | null
    color: string
    icon: string
    type: $Enums.CategoryType
    isDefault: boolean
    createdAt: Date
    updatedAt: Date
    userId: string
    _count: CategoryCountAggregateOutputType | null
    _min: CategoryMinAggregateOutputType | null
    _max: CategoryMaxAggregateOutputType | null
  }

  type GetCategoryGroupByPayload<T extends CategoryGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CategoryGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CategoryGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CategoryGroupByOutputType[P]>
            : GetScalarType<T[P], CategoryGroupByOutputType[P]>
        }
      >
    >


  export type CategorySelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    description?: boolean
    color?: boolean
    icon?: boolean
    type?: boolean
    isDefault?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    userId?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    transactions?: boolean | Category$transactionsArgs<ExtArgs>
    bills?: boolean | Category$billsArgs<ExtArgs>
    allocations?: boolean | Category$allocationsArgs<ExtArgs>
    planItems?: boolean | Category$planItemsArgs<ExtArgs>
    _count?: boolean | CategoryCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["category"]>



  export type CategorySelectScalar = {
    id?: boolean
    name?: boolean
    description?: boolean
    color?: boolean
    icon?: boolean
    type?: boolean
    isDefault?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    userId?: boolean
  }

  export type CategoryOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "description" | "color" | "icon" | "type" | "isDefault" | "createdAt" | "updatedAt" | "userId", ExtArgs["result"]["category"]>
  export type CategoryInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    transactions?: boolean | Category$transactionsArgs<ExtArgs>
    bills?: boolean | Category$billsArgs<ExtArgs>
    allocations?: boolean | Category$allocationsArgs<ExtArgs>
    planItems?: boolean | Category$planItemsArgs<ExtArgs>
    _count?: boolean | CategoryCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $CategoryPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Category"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
      transactions: Prisma.$TransactionPayload<ExtArgs>[]
      bills: Prisma.$BillPayload<ExtArgs>[]
      allocations: Prisma.$CategoryAllocationPayload<ExtArgs>[]
      planItems: Prisma.$PlanItemPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      description: string | null
      color: string
      icon: string
      type: $Enums.CategoryType
      isDefault: boolean
      createdAt: Date
      updatedAt: Date
      userId: string
    }, ExtArgs["result"]["category"]>
    composites: {}
  }

  type CategoryGetPayload<S extends boolean | null | undefined | CategoryDefaultArgs> = $Result.GetResult<Prisma.$CategoryPayload, S>

  type CategoryCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<CategoryFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: CategoryCountAggregateInputType | true
    }

  export interface CategoryDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Category'], meta: { name: 'Category' } }
    /**
     * Find zero or one Category that matches the filter.
     * @param {CategoryFindUniqueArgs} args - Arguments to find a Category
     * @example
     * // Get one Category
     * const category = await prisma.category.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends CategoryFindUniqueArgs>(args: SelectSubset<T, CategoryFindUniqueArgs<ExtArgs>>): Prisma__CategoryClient<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Category that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {CategoryFindUniqueOrThrowArgs} args - Arguments to find a Category
     * @example
     * // Get one Category
     * const category = await prisma.category.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends CategoryFindUniqueOrThrowArgs>(args: SelectSubset<T, CategoryFindUniqueOrThrowArgs<ExtArgs>>): Prisma__CategoryClient<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Category that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoryFindFirstArgs} args - Arguments to find a Category
     * @example
     * // Get one Category
     * const category = await prisma.category.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends CategoryFindFirstArgs>(args?: SelectSubset<T, CategoryFindFirstArgs<ExtArgs>>): Prisma__CategoryClient<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Category that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoryFindFirstOrThrowArgs} args - Arguments to find a Category
     * @example
     * // Get one Category
     * const category = await prisma.category.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends CategoryFindFirstOrThrowArgs>(args?: SelectSubset<T, CategoryFindFirstOrThrowArgs<ExtArgs>>): Prisma__CategoryClient<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Categories that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoryFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Categories
     * const categories = await prisma.category.findMany()
     * 
     * // Get first 10 Categories
     * const categories = await prisma.category.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const categoryWithIdOnly = await prisma.category.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends CategoryFindManyArgs>(args?: SelectSubset<T, CategoryFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Category.
     * @param {CategoryCreateArgs} args - Arguments to create a Category.
     * @example
     * // Create one Category
     * const Category = await prisma.category.create({
     *   data: {
     *     // ... data to create a Category
     *   }
     * })
     * 
     */
    create<T extends CategoryCreateArgs>(args: SelectSubset<T, CategoryCreateArgs<ExtArgs>>): Prisma__CategoryClient<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Categories.
     * @param {CategoryCreateManyArgs} args - Arguments to create many Categories.
     * @example
     * // Create many Categories
     * const category = await prisma.category.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends CategoryCreateManyArgs>(args?: SelectSubset<T, CategoryCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Category.
     * @param {CategoryDeleteArgs} args - Arguments to delete one Category.
     * @example
     * // Delete one Category
     * const Category = await prisma.category.delete({
     *   where: {
     *     // ... filter to delete one Category
     *   }
     * })
     * 
     */
    delete<T extends CategoryDeleteArgs>(args: SelectSubset<T, CategoryDeleteArgs<ExtArgs>>): Prisma__CategoryClient<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Category.
     * @param {CategoryUpdateArgs} args - Arguments to update one Category.
     * @example
     * // Update one Category
     * const category = await prisma.category.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends CategoryUpdateArgs>(args: SelectSubset<T, CategoryUpdateArgs<ExtArgs>>): Prisma__CategoryClient<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Categories.
     * @param {CategoryDeleteManyArgs} args - Arguments to filter Categories to delete.
     * @example
     * // Delete a few Categories
     * const { count } = await prisma.category.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends CategoryDeleteManyArgs>(args?: SelectSubset<T, CategoryDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Categories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoryUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Categories
     * const category = await prisma.category.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends CategoryUpdateManyArgs>(args: SelectSubset<T, CategoryUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Category.
     * @param {CategoryUpsertArgs} args - Arguments to update or create a Category.
     * @example
     * // Update or create a Category
     * const category = await prisma.category.upsert({
     *   create: {
     *     // ... data to create a Category
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Category we want to update
     *   }
     * })
     */
    upsert<T extends CategoryUpsertArgs>(args: SelectSubset<T, CategoryUpsertArgs<ExtArgs>>): Prisma__CategoryClient<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Categories that matches the filter.
     * @param {CategoryFindRawArgs} args - Select which filters you would like to apply.
     * @example
     * const category = await prisma.category.findRaw({
     *   filter: { age: { $gt: 25 } }
     * })
     */
    findRaw(args?: CategoryFindRawArgs): Prisma.PrismaPromise<JsonObject>

    /**
     * Perform aggregation operations on a Category.
     * @param {CategoryAggregateRawArgs} args - Select which aggregations you would like to apply.
     * @example
     * const category = await prisma.category.aggregateRaw({
     *   pipeline: [
     *     { $match: { status: "registered" } },
     *     { $group: { _id: "$country", total: { $sum: 1 } } }
     *   ]
     * })
     */
    aggregateRaw(args?: CategoryAggregateRawArgs): Prisma.PrismaPromise<JsonObject>


    /**
     * Count the number of Categories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoryCountArgs} args - Arguments to filter Categories to count.
     * @example
     * // Count the number of Categories
     * const count = await prisma.category.count({
     *   where: {
     *     // ... the filter for the Categories we want to count
     *   }
     * })
    **/
    count<T extends CategoryCountArgs>(
      args?: Subset<T, CategoryCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CategoryCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Category.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoryAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends CategoryAggregateArgs>(args: Subset<T, CategoryAggregateArgs>): Prisma.PrismaPromise<GetCategoryAggregateType<T>>

    /**
     * Group by Category.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoryGroupByArgs} args - Group by arguments.
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
      T extends CategoryGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CategoryGroupByArgs['orderBy'] }
        : { orderBy?: CategoryGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, CategoryGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCategoryGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Category model
   */
  readonly fields: CategoryFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Category.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CategoryClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    transactions<T extends Category$transactionsArgs<ExtArgs> = {}>(args?: Subset<T, Category$transactionsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TransactionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    bills<T extends Category$billsArgs<ExtArgs> = {}>(args?: Subset<T, Category$billsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BillPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    allocations<T extends Category$allocationsArgs<ExtArgs> = {}>(args?: Subset<T, Category$allocationsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CategoryAllocationPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    planItems<T extends Category$planItemsArgs<ExtArgs> = {}>(args?: Subset<T, Category$planItemsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PlanItemPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Category model
   */
  interface CategoryFieldRefs {
    readonly id: FieldRef<"Category", 'String'>
    readonly name: FieldRef<"Category", 'String'>
    readonly description: FieldRef<"Category", 'String'>
    readonly color: FieldRef<"Category", 'String'>
    readonly icon: FieldRef<"Category", 'String'>
    readonly type: FieldRef<"Category", 'CategoryType'>
    readonly isDefault: FieldRef<"Category", 'Boolean'>
    readonly createdAt: FieldRef<"Category", 'DateTime'>
    readonly updatedAt: FieldRef<"Category", 'DateTime'>
    readonly userId: FieldRef<"Category", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Category findUnique
   */
  export type CategoryFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Category
     */
    omit?: CategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryInclude<ExtArgs> | null
    /**
     * Filter, which Category to fetch.
     */
    where: CategoryWhereUniqueInput
  }

  /**
   * Category findUniqueOrThrow
   */
  export type CategoryFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Category
     */
    omit?: CategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryInclude<ExtArgs> | null
    /**
     * Filter, which Category to fetch.
     */
    where: CategoryWhereUniqueInput
  }

  /**
   * Category findFirst
   */
  export type CategoryFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Category
     */
    omit?: CategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryInclude<ExtArgs> | null
    /**
     * Filter, which Category to fetch.
     */
    where?: CategoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Categories to fetch.
     */
    orderBy?: CategoryOrderByWithRelationInput | CategoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Categories.
     */
    cursor?: CategoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Categories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Categories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Categories.
     */
    distinct?: CategoryScalarFieldEnum | CategoryScalarFieldEnum[]
  }

  /**
   * Category findFirstOrThrow
   */
  export type CategoryFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Category
     */
    omit?: CategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryInclude<ExtArgs> | null
    /**
     * Filter, which Category to fetch.
     */
    where?: CategoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Categories to fetch.
     */
    orderBy?: CategoryOrderByWithRelationInput | CategoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Categories.
     */
    cursor?: CategoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Categories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Categories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Categories.
     */
    distinct?: CategoryScalarFieldEnum | CategoryScalarFieldEnum[]
  }

  /**
   * Category findMany
   */
  export type CategoryFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Category
     */
    omit?: CategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryInclude<ExtArgs> | null
    /**
     * Filter, which Categories to fetch.
     */
    where?: CategoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Categories to fetch.
     */
    orderBy?: CategoryOrderByWithRelationInput | CategoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Categories.
     */
    cursor?: CategoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Categories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Categories.
     */
    skip?: number
    distinct?: CategoryScalarFieldEnum | CategoryScalarFieldEnum[]
  }

  /**
   * Category create
   */
  export type CategoryCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Category
     */
    omit?: CategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryInclude<ExtArgs> | null
    /**
     * The data needed to create a Category.
     */
    data: XOR<CategoryCreateInput, CategoryUncheckedCreateInput>
  }

  /**
   * Category createMany
   */
  export type CategoryCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Categories.
     */
    data: CategoryCreateManyInput | CategoryCreateManyInput[]
  }

  /**
   * Category update
   */
  export type CategoryUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Category
     */
    omit?: CategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryInclude<ExtArgs> | null
    /**
     * The data needed to update a Category.
     */
    data: XOR<CategoryUpdateInput, CategoryUncheckedUpdateInput>
    /**
     * Choose, which Category to update.
     */
    where: CategoryWhereUniqueInput
  }

  /**
   * Category updateMany
   */
  export type CategoryUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Categories.
     */
    data: XOR<CategoryUpdateManyMutationInput, CategoryUncheckedUpdateManyInput>
    /**
     * Filter which Categories to update
     */
    where?: CategoryWhereInput
    /**
     * Limit how many Categories to update.
     */
    limit?: number
  }

  /**
   * Category upsert
   */
  export type CategoryUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Category
     */
    omit?: CategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryInclude<ExtArgs> | null
    /**
     * The filter to search for the Category to update in case it exists.
     */
    where: CategoryWhereUniqueInput
    /**
     * In case the Category found by the `where` argument doesn't exist, create a new Category with this data.
     */
    create: XOR<CategoryCreateInput, CategoryUncheckedCreateInput>
    /**
     * In case the Category was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CategoryUpdateInput, CategoryUncheckedUpdateInput>
  }

  /**
   * Category delete
   */
  export type CategoryDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Category
     */
    omit?: CategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryInclude<ExtArgs> | null
    /**
     * Filter which Category to delete.
     */
    where: CategoryWhereUniqueInput
  }

  /**
   * Category deleteMany
   */
  export type CategoryDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Categories to delete
     */
    where?: CategoryWhereInput
    /**
     * Limit how many Categories to delete.
     */
    limit?: number
  }

  /**
   * Category findRaw
   */
  export type CategoryFindRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The query predicate filter. If unspecified, then all documents in the collection will match the predicate. ${@link https://docs.mongodb.com/manual/reference/operator/query MongoDB Docs}.
     */
    filter?: InputJsonValue
    /**
     * Additional options to pass to the `find` command ${@link https://docs.mongodb.com/manual/reference/command/find/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }

  /**
   * Category aggregateRaw
   */
  export type CategoryAggregateRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * An array of aggregation stages to process and transform the document stream via the aggregation pipeline. ${@link https://docs.mongodb.com/manual/reference/operator/aggregation-pipeline MongoDB Docs}.
     */
    pipeline?: InputJsonValue[]
    /**
     * Additional options to pass to the `aggregate` command ${@link https://docs.mongodb.com/manual/reference/command/aggregate/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }

  /**
   * Category.transactions
   */
  export type Category$transactionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Transaction
     */
    select?: TransactionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Transaction
     */
    omit?: TransactionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransactionInclude<ExtArgs> | null
    where?: TransactionWhereInput
    orderBy?: TransactionOrderByWithRelationInput | TransactionOrderByWithRelationInput[]
    cursor?: TransactionWhereUniqueInput
    take?: number
    skip?: number
    distinct?: TransactionScalarFieldEnum | TransactionScalarFieldEnum[]
  }

  /**
   * Category.bills
   */
  export type Category$billsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Bill
     */
    select?: BillSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Bill
     */
    omit?: BillOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BillInclude<ExtArgs> | null
    where?: BillWhereInput
    orderBy?: BillOrderByWithRelationInput | BillOrderByWithRelationInput[]
    cursor?: BillWhereUniqueInput
    take?: number
    skip?: number
    distinct?: BillScalarFieldEnum | BillScalarFieldEnum[]
  }

  /**
   * Category.allocations
   */
  export type Category$allocationsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CategoryAllocation
     */
    select?: CategoryAllocationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CategoryAllocation
     */
    omit?: CategoryAllocationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryAllocationInclude<ExtArgs> | null
    where?: CategoryAllocationWhereInput
    orderBy?: CategoryAllocationOrderByWithRelationInput | CategoryAllocationOrderByWithRelationInput[]
    cursor?: CategoryAllocationWhereUniqueInput
    take?: number
    skip?: number
    distinct?: CategoryAllocationScalarFieldEnum | CategoryAllocationScalarFieldEnum[]
  }

  /**
   * Category.planItems
   */
  export type Category$planItemsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PlanItem
     */
    select?: PlanItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PlanItem
     */
    omit?: PlanItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlanItemInclude<ExtArgs> | null
    where?: PlanItemWhereInput
    orderBy?: PlanItemOrderByWithRelationInput | PlanItemOrderByWithRelationInput[]
    cursor?: PlanItemWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PlanItemScalarFieldEnum | PlanItemScalarFieldEnum[]
  }

  /**
   * Category without action
   */
  export type CategoryDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Category
     */
    omit?: CategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryInclude<ExtArgs> | null
  }


  /**
   * Model Bill
   */

  export type AggregateBill = {
    _count: BillCountAggregateOutputType | null
    _avg: BillAvgAggregateOutputType | null
    _sum: BillSumAggregateOutputType | null
    _min: BillMinAggregateOutputType | null
    _max: BillMaxAggregateOutputType | null
  }

  export type BillAvgAggregateOutputType = {
    amount: number | null
  }

  export type BillSumAggregateOutputType = {
    amount: number | null
  }

  export type BillMinAggregateOutputType = {
    id: string | null
    name: string | null
    amount: number | null
    dueDate: Date | null
    frequency: $Enums.BillFrequency | null
    autopay: boolean | null
    notes: string | null
    createdAt: Date | null
    updatedAt: Date | null
    userId: string | null
    categoryId: string | null
  }

  export type BillMaxAggregateOutputType = {
    id: string | null
    name: string | null
    amount: number | null
    dueDate: Date | null
    frequency: $Enums.BillFrequency | null
    autopay: boolean | null
    notes: string | null
    createdAt: Date | null
    updatedAt: Date | null
    userId: string | null
    categoryId: string | null
  }

  export type BillCountAggregateOutputType = {
    id: number
    name: number
    amount: number
    dueDate: number
    frequency: number
    autopay: number
    notes: number
    createdAt: number
    updatedAt: number
    userId: number
    categoryId: number
    _all: number
  }


  export type BillAvgAggregateInputType = {
    amount?: true
  }

  export type BillSumAggregateInputType = {
    amount?: true
  }

  export type BillMinAggregateInputType = {
    id?: true
    name?: true
    amount?: true
    dueDate?: true
    frequency?: true
    autopay?: true
    notes?: true
    createdAt?: true
    updatedAt?: true
    userId?: true
    categoryId?: true
  }

  export type BillMaxAggregateInputType = {
    id?: true
    name?: true
    amount?: true
    dueDate?: true
    frequency?: true
    autopay?: true
    notes?: true
    createdAt?: true
    updatedAt?: true
    userId?: true
    categoryId?: true
  }

  export type BillCountAggregateInputType = {
    id?: true
    name?: true
    amount?: true
    dueDate?: true
    frequency?: true
    autopay?: true
    notes?: true
    createdAt?: true
    updatedAt?: true
    userId?: true
    categoryId?: true
    _all?: true
  }

  export type BillAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Bill to aggregate.
     */
    where?: BillWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Bills to fetch.
     */
    orderBy?: BillOrderByWithRelationInput | BillOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: BillWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Bills from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Bills.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Bills
    **/
    _count?: true | BillCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: BillAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: BillSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: BillMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: BillMaxAggregateInputType
  }

  export type GetBillAggregateType<T extends BillAggregateArgs> = {
        [P in keyof T & keyof AggregateBill]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateBill[P]>
      : GetScalarType<T[P], AggregateBill[P]>
  }




  export type BillGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: BillWhereInput
    orderBy?: BillOrderByWithAggregationInput | BillOrderByWithAggregationInput[]
    by: BillScalarFieldEnum[] | BillScalarFieldEnum
    having?: BillScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: BillCountAggregateInputType | true
    _avg?: BillAvgAggregateInputType
    _sum?: BillSumAggregateInputType
    _min?: BillMinAggregateInputType
    _max?: BillMaxAggregateInputType
  }

  export type BillGroupByOutputType = {
    id: string
    name: string
    amount: number
    dueDate: Date
    frequency: $Enums.BillFrequency
    autopay: boolean
    notes: string | null
    createdAt: Date
    updatedAt: Date
    userId: string
    categoryId: string
    _count: BillCountAggregateOutputType | null
    _avg: BillAvgAggregateOutputType | null
    _sum: BillSumAggregateOutputType | null
    _min: BillMinAggregateOutputType | null
    _max: BillMaxAggregateOutputType | null
  }

  type GetBillGroupByPayload<T extends BillGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<BillGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof BillGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], BillGroupByOutputType[P]>
            : GetScalarType<T[P], BillGroupByOutputType[P]>
        }
      >
    >


  export type BillSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    amount?: boolean
    dueDate?: boolean
    frequency?: boolean
    autopay?: boolean
    notes?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    userId?: boolean
    categoryId?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    category?: boolean | CategoryDefaultArgs<ExtArgs>
    transactions?: boolean | Bill$transactionsArgs<ExtArgs>
    _count?: boolean | BillCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["bill"]>



  export type BillSelectScalar = {
    id?: boolean
    name?: boolean
    amount?: boolean
    dueDate?: boolean
    frequency?: boolean
    autopay?: boolean
    notes?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    userId?: boolean
    categoryId?: boolean
  }

  export type BillOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "amount" | "dueDate" | "frequency" | "autopay" | "notes" | "createdAt" | "updatedAt" | "userId" | "categoryId", ExtArgs["result"]["bill"]>
  export type BillInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    category?: boolean | CategoryDefaultArgs<ExtArgs>
    transactions?: boolean | Bill$transactionsArgs<ExtArgs>
    _count?: boolean | BillCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $BillPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Bill"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
      category: Prisma.$CategoryPayload<ExtArgs>
      transactions: Prisma.$TransactionPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      amount: number
      dueDate: Date
      frequency: $Enums.BillFrequency
      autopay: boolean
      notes: string | null
      createdAt: Date
      updatedAt: Date
      userId: string
      categoryId: string
    }, ExtArgs["result"]["bill"]>
    composites: {}
  }

  type BillGetPayload<S extends boolean | null | undefined | BillDefaultArgs> = $Result.GetResult<Prisma.$BillPayload, S>

  type BillCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<BillFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: BillCountAggregateInputType | true
    }

  export interface BillDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Bill'], meta: { name: 'Bill' } }
    /**
     * Find zero or one Bill that matches the filter.
     * @param {BillFindUniqueArgs} args - Arguments to find a Bill
     * @example
     * // Get one Bill
     * const bill = await prisma.bill.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends BillFindUniqueArgs>(args: SelectSubset<T, BillFindUniqueArgs<ExtArgs>>): Prisma__BillClient<$Result.GetResult<Prisma.$BillPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Bill that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {BillFindUniqueOrThrowArgs} args - Arguments to find a Bill
     * @example
     * // Get one Bill
     * const bill = await prisma.bill.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends BillFindUniqueOrThrowArgs>(args: SelectSubset<T, BillFindUniqueOrThrowArgs<ExtArgs>>): Prisma__BillClient<$Result.GetResult<Prisma.$BillPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Bill that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BillFindFirstArgs} args - Arguments to find a Bill
     * @example
     * // Get one Bill
     * const bill = await prisma.bill.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends BillFindFirstArgs>(args?: SelectSubset<T, BillFindFirstArgs<ExtArgs>>): Prisma__BillClient<$Result.GetResult<Prisma.$BillPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Bill that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BillFindFirstOrThrowArgs} args - Arguments to find a Bill
     * @example
     * // Get one Bill
     * const bill = await prisma.bill.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends BillFindFirstOrThrowArgs>(args?: SelectSubset<T, BillFindFirstOrThrowArgs<ExtArgs>>): Prisma__BillClient<$Result.GetResult<Prisma.$BillPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Bills that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BillFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Bills
     * const bills = await prisma.bill.findMany()
     * 
     * // Get first 10 Bills
     * const bills = await prisma.bill.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const billWithIdOnly = await prisma.bill.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends BillFindManyArgs>(args?: SelectSubset<T, BillFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BillPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Bill.
     * @param {BillCreateArgs} args - Arguments to create a Bill.
     * @example
     * // Create one Bill
     * const Bill = await prisma.bill.create({
     *   data: {
     *     // ... data to create a Bill
     *   }
     * })
     * 
     */
    create<T extends BillCreateArgs>(args: SelectSubset<T, BillCreateArgs<ExtArgs>>): Prisma__BillClient<$Result.GetResult<Prisma.$BillPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Bills.
     * @param {BillCreateManyArgs} args - Arguments to create many Bills.
     * @example
     * // Create many Bills
     * const bill = await prisma.bill.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends BillCreateManyArgs>(args?: SelectSubset<T, BillCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Bill.
     * @param {BillDeleteArgs} args - Arguments to delete one Bill.
     * @example
     * // Delete one Bill
     * const Bill = await prisma.bill.delete({
     *   where: {
     *     // ... filter to delete one Bill
     *   }
     * })
     * 
     */
    delete<T extends BillDeleteArgs>(args: SelectSubset<T, BillDeleteArgs<ExtArgs>>): Prisma__BillClient<$Result.GetResult<Prisma.$BillPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Bill.
     * @param {BillUpdateArgs} args - Arguments to update one Bill.
     * @example
     * // Update one Bill
     * const bill = await prisma.bill.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends BillUpdateArgs>(args: SelectSubset<T, BillUpdateArgs<ExtArgs>>): Prisma__BillClient<$Result.GetResult<Prisma.$BillPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Bills.
     * @param {BillDeleteManyArgs} args - Arguments to filter Bills to delete.
     * @example
     * // Delete a few Bills
     * const { count } = await prisma.bill.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends BillDeleteManyArgs>(args?: SelectSubset<T, BillDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Bills.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BillUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Bills
     * const bill = await prisma.bill.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends BillUpdateManyArgs>(args: SelectSubset<T, BillUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Bill.
     * @param {BillUpsertArgs} args - Arguments to update or create a Bill.
     * @example
     * // Update or create a Bill
     * const bill = await prisma.bill.upsert({
     *   create: {
     *     // ... data to create a Bill
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Bill we want to update
     *   }
     * })
     */
    upsert<T extends BillUpsertArgs>(args: SelectSubset<T, BillUpsertArgs<ExtArgs>>): Prisma__BillClient<$Result.GetResult<Prisma.$BillPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Bills that matches the filter.
     * @param {BillFindRawArgs} args - Select which filters you would like to apply.
     * @example
     * const bill = await prisma.bill.findRaw({
     *   filter: { age: { $gt: 25 } }
     * })
     */
    findRaw(args?: BillFindRawArgs): Prisma.PrismaPromise<JsonObject>

    /**
     * Perform aggregation operations on a Bill.
     * @param {BillAggregateRawArgs} args - Select which aggregations you would like to apply.
     * @example
     * const bill = await prisma.bill.aggregateRaw({
     *   pipeline: [
     *     { $match: { status: "registered" } },
     *     { $group: { _id: "$country", total: { $sum: 1 } } }
     *   ]
     * })
     */
    aggregateRaw(args?: BillAggregateRawArgs): Prisma.PrismaPromise<JsonObject>


    /**
     * Count the number of Bills.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BillCountArgs} args - Arguments to filter Bills to count.
     * @example
     * // Count the number of Bills
     * const count = await prisma.bill.count({
     *   where: {
     *     // ... the filter for the Bills we want to count
     *   }
     * })
    **/
    count<T extends BillCountArgs>(
      args?: Subset<T, BillCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], BillCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Bill.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BillAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends BillAggregateArgs>(args: Subset<T, BillAggregateArgs>): Prisma.PrismaPromise<GetBillAggregateType<T>>

    /**
     * Group by Bill.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BillGroupByArgs} args - Group by arguments.
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
      T extends BillGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: BillGroupByArgs['orderBy'] }
        : { orderBy?: BillGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, BillGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetBillGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Bill model
   */
  readonly fields: BillFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Bill.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__BillClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    category<T extends CategoryDefaultArgs<ExtArgs> = {}>(args?: Subset<T, CategoryDefaultArgs<ExtArgs>>): Prisma__CategoryClient<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    transactions<T extends Bill$transactionsArgs<ExtArgs> = {}>(args?: Subset<T, Bill$transactionsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TransactionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Bill model
   */
  interface BillFieldRefs {
    readonly id: FieldRef<"Bill", 'String'>
    readonly name: FieldRef<"Bill", 'String'>
    readonly amount: FieldRef<"Bill", 'Float'>
    readonly dueDate: FieldRef<"Bill", 'DateTime'>
    readonly frequency: FieldRef<"Bill", 'BillFrequency'>
    readonly autopay: FieldRef<"Bill", 'Boolean'>
    readonly notes: FieldRef<"Bill", 'String'>
    readonly createdAt: FieldRef<"Bill", 'DateTime'>
    readonly updatedAt: FieldRef<"Bill", 'DateTime'>
    readonly userId: FieldRef<"Bill", 'String'>
    readonly categoryId: FieldRef<"Bill", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Bill findUnique
   */
  export type BillFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Bill
     */
    select?: BillSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Bill
     */
    omit?: BillOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BillInclude<ExtArgs> | null
    /**
     * Filter, which Bill to fetch.
     */
    where: BillWhereUniqueInput
  }

  /**
   * Bill findUniqueOrThrow
   */
  export type BillFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Bill
     */
    select?: BillSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Bill
     */
    omit?: BillOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BillInclude<ExtArgs> | null
    /**
     * Filter, which Bill to fetch.
     */
    where: BillWhereUniqueInput
  }

  /**
   * Bill findFirst
   */
  export type BillFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Bill
     */
    select?: BillSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Bill
     */
    omit?: BillOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BillInclude<ExtArgs> | null
    /**
     * Filter, which Bill to fetch.
     */
    where?: BillWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Bills to fetch.
     */
    orderBy?: BillOrderByWithRelationInput | BillOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Bills.
     */
    cursor?: BillWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Bills from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Bills.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Bills.
     */
    distinct?: BillScalarFieldEnum | BillScalarFieldEnum[]
  }

  /**
   * Bill findFirstOrThrow
   */
  export type BillFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Bill
     */
    select?: BillSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Bill
     */
    omit?: BillOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BillInclude<ExtArgs> | null
    /**
     * Filter, which Bill to fetch.
     */
    where?: BillWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Bills to fetch.
     */
    orderBy?: BillOrderByWithRelationInput | BillOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Bills.
     */
    cursor?: BillWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Bills from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Bills.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Bills.
     */
    distinct?: BillScalarFieldEnum | BillScalarFieldEnum[]
  }

  /**
   * Bill findMany
   */
  export type BillFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Bill
     */
    select?: BillSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Bill
     */
    omit?: BillOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BillInclude<ExtArgs> | null
    /**
     * Filter, which Bills to fetch.
     */
    where?: BillWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Bills to fetch.
     */
    orderBy?: BillOrderByWithRelationInput | BillOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Bills.
     */
    cursor?: BillWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Bills from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Bills.
     */
    skip?: number
    distinct?: BillScalarFieldEnum | BillScalarFieldEnum[]
  }

  /**
   * Bill create
   */
  export type BillCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Bill
     */
    select?: BillSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Bill
     */
    omit?: BillOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BillInclude<ExtArgs> | null
    /**
     * The data needed to create a Bill.
     */
    data: XOR<BillCreateInput, BillUncheckedCreateInput>
  }

  /**
   * Bill createMany
   */
  export type BillCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Bills.
     */
    data: BillCreateManyInput | BillCreateManyInput[]
  }

  /**
   * Bill update
   */
  export type BillUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Bill
     */
    select?: BillSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Bill
     */
    omit?: BillOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BillInclude<ExtArgs> | null
    /**
     * The data needed to update a Bill.
     */
    data: XOR<BillUpdateInput, BillUncheckedUpdateInput>
    /**
     * Choose, which Bill to update.
     */
    where: BillWhereUniqueInput
  }

  /**
   * Bill updateMany
   */
  export type BillUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Bills.
     */
    data: XOR<BillUpdateManyMutationInput, BillUncheckedUpdateManyInput>
    /**
     * Filter which Bills to update
     */
    where?: BillWhereInput
    /**
     * Limit how many Bills to update.
     */
    limit?: number
  }

  /**
   * Bill upsert
   */
  export type BillUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Bill
     */
    select?: BillSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Bill
     */
    omit?: BillOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BillInclude<ExtArgs> | null
    /**
     * The filter to search for the Bill to update in case it exists.
     */
    where: BillWhereUniqueInput
    /**
     * In case the Bill found by the `where` argument doesn't exist, create a new Bill with this data.
     */
    create: XOR<BillCreateInput, BillUncheckedCreateInput>
    /**
     * In case the Bill was found with the provided `where` argument, update it with this data.
     */
    update: XOR<BillUpdateInput, BillUncheckedUpdateInput>
  }

  /**
   * Bill delete
   */
  export type BillDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Bill
     */
    select?: BillSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Bill
     */
    omit?: BillOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BillInclude<ExtArgs> | null
    /**
     * Filter which Bill to delete.
     */
    where: BillWhereUniqueInput
  }

  /**
   * Bill deleteMany
   */
  export type BillDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Bills to delete
     */
    where?: BillWhereInput
    /**
     * Limit how many Bills to delete.
     */
    limit?: number
  }

  /**
   * Bill findRaw
   */
  export type BillFindRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The query predicate filter. If unspecified, then all documents in the collection will match the predicate. ${@link https://docs.mongodb.com/manual/reference/operator/query MongoDB Docs}.
     */
    filter?: InputJsonValue
    /**
     * Additional options to pass to the `find` command ${@link https://docs.mongodb.com/manual/reference/command/find/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }

  /**
   * Bill aggregateRaw
   */
  export type BillAggregateRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * An array of aggregation stages to process and transform the document stream via the aggregation pipeline. ${@link https://docs.mongodb.com/manual/reference/operator/aggregation-pipeline MongoDB Docs}.
     */
    pipeline?: InputJsonValue[]
    /**
     * Additional options to pass to the `aggregate` command ${@link https://docs.mongodb.com/manual/reference/command/aggregate/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }

  /**
   * Bill.transactions
   */
  export type Bill$transactionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Transaction
     */
    select?: TransactionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Transaction
     */
    omit?: TransactionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransactionInclude<ExtArgs> | null
    where?: TransactionWhereInput
    orderBy?: TransactionOrderByWithRelationInput | TransactionOrderByWithRelationInput[]
    cursor?: TransactionWhereUniqueInput
    take?: number
    skip?: number
    distinct?: TransactionScalarFieldEnum | TransactionScalarFieldEnum[]
  }

  /**
   * Bill without action
   */
  export type BillDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Bill
     */
    select?: BillSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Bill
     */
    omit?: BillOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BillInclude<ExtArgs> | null
  }


  /**
   * Model Budget
   */

  export type AggregateBudget = {
    _count: BudgetCountAggregateOutputType | null
    _avg: BudgetAvgAggregateOutputType | null
    _sum: BudgetSumAggregateOutputType | null
    _min: BudgetMinAggregateOutputType | null
    _max: BudgetMaxAggregateOutputType | null
  }

  export type BudgetAvgAggregateOutputType = {
    amount: number | null
  }

  export type BudgetSumAggregateOutputType = {
    amount: number | null
  }

  export type BudgetMinAggregateOutputType = {
    id: string | null
    name: string | null
    description: string | null
    amount: number | null
    startDate: Date | null
    endDate: Date | null
    type: $Enums.BudgetTimeframe | null
    createdAt: Date | null
    updatedAt: Date | null
    userId: string | null
  }

  export type BudgetMaxAggregateOutputType = {
    id: string | null
    name: string | null
    description: string | null
    amount: number | null
    startDate: Date | null
    endDate: Date | null
    type: $Enums.BudgetTimeframe | null
    createdAt: Date | null
    updatedAt: Date | null
    userId: string | null
  }

  export type BudgetCountAggregateOutputType = {
    id: number
    name: number
    description: number
    amount: number
    startDate: number
    endDate: number
    type: number
    createdAt: number
    updatedAt: number
    userId: number
    _all: number
  }


  export type BudgetAvgAggregateInputType = {
    amount?: true
  }

  export type BudgetSumAggregateInputType = {
    amount?: true
  }

  export type BudgetMinAggregateInputType = {
    id?: true
    name?: true
    description?: true
    amount?: true
    startDate?: true
    endDate?: true
    type?: true
    createdAt?: true
    updatedAt?: true
    userId?: true
  }

  export type BudgetMaxAggregateInputType = {
    id?: true
    name?: true
    description?: true
    amount?: true
    startDate?: true
    endDate?: true
    type?: true
    createdAt?: true
    updatedAt?: true
    userId?: true
  }

  export type BudgetCountAggregateInputType = {
    id?: true
    name?: true
    description?: true
    amount?: true
    startDate?: true
    endDate?: true
    type?: true
    createdAt?: true
    updatedAt?: true
    userId?: true
    _all?: true
  }

  export type BudgetAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Budget to aggregate.
     */
    where?: BudgetWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Budgets to fetch.
     */
    orderBy?: BudgetOrderByWithRelationInput | BudgetOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: BudgetWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Budgets from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Budgets.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Budgets
    **/
    _count?: true | BudgetCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: BudgetAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: BudgetSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: BudgetMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: BudgetMaxAggregateInputType
  }

  export type GetBudgetAggregateType<T extends BudgetAggregateArgs> = {
        [P in keyof T & keyof AggregateBudget]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateBudget[P]>
      : GetScalarType<T[P], AggregateBudget[P]>
  }




  export type BudgetGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: BudgetWhereInput
    orderBy?: BudgetOrderByWithAggregationInput | BudgetOrderByWithAggregationInput[]
    by: BudgetScalarFieldEnum[] | BudgetScalarFieldEnum
    having?: BudgetScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: BudgetCountAggregateInputType | true
    _avg?: BudgetAvgAggregateInputType
    _sum?: BudgetSumAggregateInputType
    _min?: BudgetMinAggregateInputType
    _max?: BudgetMaxAggregateInputType
  }

  export type BudgetGroupByOutputType = {
    id: string
    name: string
    description: string | null
    amount: number
    startDate: Date
    endDate: Date
    type: $Enums.BudgetTimeframe
    createdAt: Date
    updatedAt: Date
    userId: string
    _count: BudgetCountAggregateOutputType | null
    _avg: BudgetAvgAggregateOutputType | null
    _sum: BudgetSumAggregateOutputType | null
    _min: BudgetMinAggregateOutputType | null
    _max: BudgetMaxAggregateOutputType | null
  }

  type GetBudgetGroupByPayload<T extends BudgetGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<BudgetGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof BudgetGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], BudgetGroupByOutputType[P]>
            : GetScalarType<T[P], BudgetGroupByOutputType[P]>
        }
      >
    >


  export type BudgetSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    description?: boolean
    amount?: boolean
    startDate?: boolean
    endDate?: boolean
    type?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    userId?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    categoryAllocations?: boolean | Budget$categoryAllocationsArgs<ExtArgs>
    _count?: boolean | BudgetCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["budget"]>



  export type BudgetSelectScalar = {
    id?: boolean
    name?: boolean
    description?: boolean
    amount?: boolean
    startDate?: boolean
    endDate?: boolean
    type?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    userId?: boolean
  }

  export type BudgetOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "description" | "amount" | "startDate" | "endDate" | "type" | "createdAt" | "updatedAt" | "userId", ExtArgs["result"]["budget"]>
  export type BudgetInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    categoryAllocations?: boolean | Budget$categoryAllocationsArgs<ExtArgs>
    _count?: boolean | BudgetCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $BudgetPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Budget"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
      categoryAllocations: Prisma.$CategoryAllocationPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      description: string | null
      amount: number
      startDate: Date
      endDate: Date
      type: $Enums.BudgetTimeframe
      createdAt: Date
      updatedAt: Date
      userId: string
    }, ExtArgs["result"]["budget"]>
    composites: {}
  }

  type BudgetGetPayload<S extends boolean | null | undefined | BudgetDefaultArgs> = $Result.GetResult<Prisma.$BudgetPayload, S>

  type BudgetCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<BudgetFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: BudgetCountAggregateInputType | true
    }

  export interface BudgetDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Budget'], meta: { name: 'Budget' } }
    /**
     * Find zero or one Budget that matches the filter.
     * @param {BudgetFindUniqueArgs} args - Arguments to find a Budget
     * @example
     * // Get one Budget
     * const budget = await prisma.budget.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends BudgetFindUniqueArgs>(args: SelectSubset<T, BudgetFindUniqueArgs<ExtArgs>>): Prisma__BudgetClient<$Result.GetResult<Prisma.$BudgetPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Budget that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {BudgetFindUniqueOrThrowArgs} args - Arguments to find a Budget
     * @example
     * // Get one Budget
     * const budget = await prisma.budget.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends BudgetFindUniqueOrThrowArgs>(args: SelectSubset<T, BudgetFindUniqueOrThrowArgs<ExtArgs>>): Prisma__BudgetClient<$Result.GetResult<Prisma.$BudgetPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Budget that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BudgetFindFirstArgs} args - Arguments to find a Budget
     * @example
     * // Get one Budget
     * const budget = await prisma.budget.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends BudgetFindFirstArgs>(args?: SelectSubset<T, BudgetFindFirstArgs<ExtArgs>>): Prisma__BudgetClient<$Result.GetResult<Prisma.$BudgetPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Budget that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BudgetFindFirstOrThrowArgs} args - Arguments to find a Budget
     * @example
     * // Get one Budget
     * const budget = await prisma.budget.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends BudgetFindFirstOrThrowArgs>(args?: SelectSubset<T, BudgetFindFirstOrThrowArgs<ExtArgs>>): Prisma__BudgetClient<$Result.GetResult<Prisma.$BudgetPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Budgets that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BudgetFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Budgets
     * const budgets = await prisma.budget.findMany()
     * 
     * // Get first 10 Budgets
     * const budgets = await prisma.budget.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const budgetWithIdOnly = await prisma.budget.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends BudgetFindManyArgs>(args?: SelectSubset<T, BudgetFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BudgetPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Budget.
     * @param {BudgetCreateArgs} args - Arguments to create a Budget.
     * @example
     * // Create one Budget
     * const Budget = await prisma.budget.create({
     *   data: {
     *     // ... data to create a Budget
     *   }
     * })
     * 
     */
    create<T extends BudgetCreateArgs>(args: SelectSubset<T, BudgetCreateArgs<ExtArgs>>): Prisma__BudgetClient<$Result.GetResult<Prisma.$BudgetPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Budgets.
     * @param {BudgetCreateManyArgs} args - Arguments to create many Budgets.
     * @example
     * // Create many Budgets
     * const budget = await prisma.budget.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends BudgetCreateManyArgs>(args?: SelectSubset<T, BudgetCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Budget.
     * @param {BudgetDeleteArgs} args - Arguments to delete one Budget.
     * @example
     * // Delete one Budget
     * const Budget = await prisma.budget.delete({
     *   where: {
     *     // ... filter to delete one Budget
     *   }
     * })
     * 
     */
    delete<T extends BudgetDeleteArgs>(args: SelectSubset<T, BudgetDeleteArgs<ExtArgs>>): Prisma__BudgetClient<$Result.GetResult<Prisma.$BudgetPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Budget.
     * @param {BudgetUpdateArgs} args - Arguments to update one Budget.
     * @example
     * // Update one Budget
     * const budget = await prisma.budget.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends BudgetUpdateArgs>(args: SelectSubset<T, BudgetUpdateArgs<ExtArgs>>): Prisma__BudgetClient<$Result.GetResult<Prisma.$BudgetPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Budgets.
     * @param {BudgetDeleteManyArgs} args - Arguments to filter Budgets to delete.
     * @example
     * // Delete a few Budgets
     * const { count } = await prisma.budget.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends BudgetDeleteManyArgs>(args?: SelectSubset<T, BudgetDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Budgets.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BudgetUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Budgets
     * const budget = await prisma.budget.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends BudgetUpdateManyArgs>(args: SelectSubset<T, BudgetUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Budget.
     * @param {BudgetUpsertArgs} args - Arguments to update or create a Budget.
     * @example
     * // Update or create a Budget
     * const budget = await prisma.budget.upsert({
     *   create: {
     *     // ... data to create a Budget
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Budget we want to update
     *   }
     * })
     */
    upsert<T extends BudgetUpsertArgs>(args: SelectSubset<T, BudgetUpsertArgs<ExtArgs>>): Prisma__BudgetClient<$Result.GetResult<Prisma.$BudgetPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Budgets that matches the filter.
     * @param {BudgetFindRawArgs} args - Select which filters you would like to apply.
     * @example
     * const budget = await prisma.budget.findRaw({
     *   filter: { age: { $gt: 25 } }
     * })
     */
    findRaw(args?: BudgetFindRawArgs): Prisma.PrismaPromise<JsonObject>

    /**
     * Perform aggregation operations on a Budget.
     * @param {BudgetAggregateRawArgs} args - Select which aggregations you would like to apply.
     * @example
     * const budget = await prisma.budget.aggregateRaw({
     *   pipeline: [
     *     { $match: { status: "registered" } },
     *     { $group: { _id: "$country", total: { $sum: 1 } } }
     *   ]
     * })
     */
    aggregateRaw(args?: BudgetAggregateRawArgs): Prisma.PrismaPromise<JsonObject>


    /**
     * Count the number of Budgets.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BudgetCountArgs} args - Arguments to filter Budgets to count.
     * @example
     * // Count the number of Budgets
     * const count = await prisma.budget.count({
     *   where: {
     *     // ... the filter for the Budgets we want to count
     *   }
     * })
    **/
    count<T extends BudgetCountArgs>(
      args?: Subset<T, BudgetCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], BudgetCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Budget.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BudgetAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends BudgetAggregateArgs>(args: Subset<T, BudgetAggregateArgs>): Prisma.PrismaPromise<GetBudgetAggregateType<T>>

    /**
     * Group by Budget.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BudgetGroupByArgs} args - Group by arguments.
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
      T extends BudgetGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: BudgetGroupByArgs['orderBy'] }
        : { orderBy?: BudgetGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, BudgetGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetBudgetGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Budget model
   */
  readonly fields: BudgetFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Budget.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__BudgetClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    categoryAllocations<T extends Budget$categoryAllocationsArgs<ExtArgs> = {}>(args?: Subset<T, Budget$categoryAllocationsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CategoryAllocationPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Budget model
   */
  interface BudgetFieldRefs {
    readonly id: FieldRef<"Budget", 'String'>
    readonly name: FieldRef<"Budget", 'String'>
    readonly description: FieldRef<"Budget", 'String'>
    readonly amount: FieldRef<"Budget", 'Float'>
    readonly startDate: FieldRef<"Budget", 'DateTime'>
    readonly endDate: FieldRef<"Budget", 'DateTime'>
    readonly type: FieldRef<"Budget", 'BudgetTimeframe'>
    readonly createdAt: FieldRef<"Budget", 'DateTime'>
    readonly updatedAt: FieldRef<"Budget", 'DateTime'>
    readonly userId: FieldRef<"Budget", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Budget findUnique
   */
  export type BudgetFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Budget
     */
    select?: BudgetSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Budget
     */
    omit?: BudgetOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BudgetInclude<ExtArgs> | null
    /**
     * Filter, which Budget to fetch.
     */
    where: BudgetWhereUniqueInput
  }

  /**
   * Budget findUniqueOrThrow
   */
  export type BudgetFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Budget
     */
    select?: BudgetSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Budget
     */
    omit?: BudgetOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BudgetInclude<ExtArgs> | null
    /**
     * Filter, which Budget to fetch.
     */
    where: BudgetWhereUniqueInput
  }

  /**
   * Budget findFirst
   */
  export type BudgetFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Budget
     */
    select?: BudgetSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Budget
     */
    omit?: BudgetOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BudgetInclude<ExtArgs> | null
    /**
     * Filter, which Budget to fetch.
     */
    where?: BudgetWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Budgets to fetch.
     */
    orderBy?: BudgetOrderByWithRelationInput | BudgetOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Budgets.
     */
    cursor?: BudgetWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Budgets from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Budgets.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Budgets.
     */
    distinct?: BudgetScalarFieldEnum | BudgetScalarFieldEnum[]
  }

  /**
   * Budget findFirstOrThrow
   */
  export type BudgetFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Budget
     */
    select?: BudgetSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Budget
     */
    omit?: BudgetOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BudgetInclude<ExtArgs> | null
    /**
     * Filter, which Budget to fetch.
     */
    where?: BudgetWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Budgets to fetch.
     */
    orderBy?: BudgetOrderByWithRelationInput | BudgetOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Budgets.
     */
    cursor?: BudgetWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Budgets from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Budgets.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Budgets.
     */
    distinct?: BudgetScalarFieldEnum | BudgetScalarFieldEnum[]
  }

  /**
   * Budget findMany
   */
  export type BudgetFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Budget
     */
    select?: BudgetSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Budget
     */
    omit?: BudgetOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BudgetInclude<ExtArgs> | null
    /**
     * Filter, which Budgets to fetch.
     */
    where?: BudgetWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Budgets to fetch.
     */
    orderBy?: BudgetOrderByWithRelationInput | BudgetOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Budgets.
     */
    cursor?: BudgetWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Budgets from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Budgets.
     */
    skip?: number
    distinct?: BudgetScalarFieldEnum | BudgetScalarFieldEnum[]
  }

  /**
   * Budget create
   */
  export type BudgetCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Budget
     */
    select?: BudgetSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Budget
     */
    omit?: BudgetOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BudgetInclude<ExtArgs> | null
    /**
     * The data needed to create a Budget.
     */
    data: XOR<BudgetCreateInput, BudgetUncheckedCreateInput>
  }

  /**
   * Budget createMany
   */
  export type BudgetCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Budgets.
     */
    data: BudgetCreateManyInput | BudgetCreateManyInput[]
  }

  /**
   * Budget update
   */
  export type BudgetUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Budget
     */
    select?: BudgetSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Budget
     */
    omit?: BudgetOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BudgetInclude<ExtArgs> | null
    /**
     * The data needed to update a Budget.
     */
    data: XOR<BudgetUpdateInput, BudgetUncheckedUpdateInput>
    /**
     * Choose, which Budget to update.
     */
    where: BudgetWhereUniqueInput
  }

  /**
   * Budget updateMany
   */
  export type BudgetUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Budgets.
     */
    data: XOR<BudgetUpdateManyMutationInput, BudgetUncheckedUpdateManyInput>
    /**
     * Filter which Budgets to update
     */
    where?: BudgetWhereInput
    /**
     * Limit how many Budgets to update.
     */
    limit?: number
  }

  /**
   * Budget upsert
   */
  export type BudgetUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Budget
     */
    select?: BudgetSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Budget
     */
    omit?: BudgetOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BudgetInclude<ExtArgs> | null
    /**
     * The filter to search for the Budget to update in case it exists.
     */
    where: BudgetWhereUniqueInput
    /**
     * In case the Budget found by the `where` argument doesn't exist, create a new Budget with this data.
     */
    create: XOR<BudgetCreateInput, BudgetUncheckedCreateInput>
    /**
     * In case the Budget was found with the provided `where` argument, update it with this data.
     */
    update: XOR<BudgetUpdateInput, BudgetUncheckedUpdateInput>
  }

  /**
   * Budget delete
   */
  export type BudgetDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Budget
     */
    select?: BudgetSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Budget
     */
    omit?: BudgetOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BudgetInclude<ExtArgs> | null
    /**
     * Filter which Budget to delete.
     */
    where: BudgetWhereUniqueInput
  }

  /**
   * Budget deleteMany
   */
  export type BudgetDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Budgets to delete
     */
    where?: BudgetWhereInput
    /**
     * Limit how many Budgets to delete.
     */
    limit?: number
  }

  /**
   * Budget findRaw
   */
  export type BudgetFindRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The query predicate filter. If unspecified, then all documents in the collection will match the predicate. ${@link https://docs.mongodb.com/manual/reference/operator/query MongoDB Docs}.
     */
    filter?: InputJsonValue
    /**
     * Additional options to pass to the `find` command ${@link https://docs.mongodb.com/manual/reference/command/find/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }

  /**
   * Budget aggregateRaw
   */
  export type BudgetAggregateRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * An array of aggregation stages to process and transform the document stream via the aggregation pipeline. ${@link https://docs.mongodb.com/manual/reference/operator/aggregation-pipeline MongoDB Docs}.
     */
    pipeline?: InputJsonValue[]
    /**
     * Additional options to pass to the `aggregate` command ${@link https://docs.mongodb.com/manual/reference/command/aggregate/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }

  /**
   * Budget.categoryAllocations
   */
  export type Budget$categoryAllocationsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CategoryAllocation
     */
    select?: CategoryAllocationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CategoryAllocation
     */
    omit?: CategoryAllocationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryAllocationInclude<ExtArgs> | null
    where?: CategoryAllocationWhereInput
    orderBy?: CategoryAllocationOrderByWithRelationInput | CategoryAllocationOrderByWithRelationInput[]
    cursor?: CategoryAllocationWhereUniqueInput
    take?: number
    skip?: number
    distinct?: CategoryAllocationScalarFieldEnum | CategoryAllocationScalarFieldEnum[]
  }

  /**
   * Budget without action
   */
  export type BudgetDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Budget
     */
    select?: BudgetSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Budget
     */
    omit?: BudgetOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BudgetInclude<ExtArgs> | null
  }


  /**
   * Model CategoryAllocation
   */

  export type AggregateCategoryAllocation = {
    _count: CategoryAllocationCountAggregateOutputType | null
    _avg: CategoryAllocationAvgAggregateOutputType | null
    _sum: CategoryAllocationSumAggregateOutputType | null
    _min: CategoryAllocationMinAggregateOutputType | null
    _max: CategoryAllocationMaxAggregateOutputType | null
  }

  export type CategoryAllocationAvgAggregateOutputType = {
    amount: number | null
  }

  export type CategoryAllocationSumAggregateOutputType = {
    amount: number | null
  }

  export type CategoryAllocationMinAggregateOutputType = {
    id: string | null
    amount: number | null
    budgetId: string | null
    categoryId: string | null
  }

  export type CategoryAllocationMaxAggregateOutputType = {
    id: string | null
    amount: number | null
    budgetId: string | null
    categoryId: string | null
  }

  export type CategoryAllocationCountAggregateOutputType = {
    id: number
    amount: number
    budgetId: number
    categoryId: number
    _all: number
  }


  export type CategoryAllocationAvgAggregateInputType = {
    amount?: true
  }

  export type CategoryAllocationSumAggregateInputType = {
    amount?: true
  }

  export type CategoryAllocationMinAggregateInputType = {
    id?: true
    amount?: true
    budgetId?: true
    categoryId?: true
  }

  export type CategoryAllocationMaxAggregateInputType = {
    id?: true
    amount?: true
    budgetId?: true
    categoryId?: true
  }

  export type CategoryAllocationCountAggregateInputType = {
    id?: true
    amount?: true
    budgetId?: true
    categoryId?: true
    _all?: true
  }

  export type CategoryAllocationAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which CategoryAllocation to aggregate.
     */
    where?: CategoryAllocationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CategoryAllocations to fetch.
     */
    orderBy?: CategoryAllocationOrderByWithRelationInput | CategoryAllocationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CategoryAllocationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CategoryAllocations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CategoryAllocations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned CategoryAllocations
    **/
    _count?: true | CategoryAllocationCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: CategoryAllocationAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: CategoryAllocationSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CategoryAllocationMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CategoryAllocationMaxAggregateInputType
  }

  export type GetCategoryAllocationAggregateType<T extends CategoryAllocationAggregateArgs> = {
        [P in keyof T & keyof AggregateCategoryAllocation]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCategoryAllocation[P]>
      : GetScalarType<T[P], AggregateCategoryAllocation[P]>
  }




  export type CategoryAllocationGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CategoryAllocationWhereInput
    orderBy?: CategoryAllocationOrderByWithAggregationInput | CategoryAllocationOrderByWithAggregationInput[]
    by: CategoryAllocationScalarFieldEnum[] | CategoryAllocationScalarFieldEnum
    having?: CategoryAllocationScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CategoryAllocationCountAggregateInputType | true
    _avg?: CategoryAllocationAvgAggregateInputType
    _sum?: CategoryAllocationSumAggregateInputType
    _min?: CategoryAllocationMinAggregateInputType
    _max?: CategoryAllocationMaxAggregateInputType
  }

  export type CategoryAllocationGroupByOutputType = {
    id: string
    amount: number
    budgetId: string
    categoryId: string
    _count: CategoryAllocationCountAggregateOutputType | null
    _avg: CategoryAllocationAvgAggregateOutputType | null
    _sum: CategoryAllocationSumAggregateOutputType | null
    _min: CategoryAllocationMinAggregateOutputType | null
    _max: CategoryAllocationMaxAggregateOutputType | null
  }

  type GetCategoryAllocationGroupByPayload<T extends CategoryAllocationGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CategoryAllocationGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CategoryAllocationGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CategoryAllocationGroupByOutputType[P]>
            : GetScalarType<T[P], CategoryAllocationGroupByOutputType[P]>
        }
      >
    >


  export type CategoryAllocationSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    amount?: boolean
    budgetId?: boolean
    categoryId?: boolean
    budget?: boolean | BudgetDefaultArgs<ExtArgs>
    category?: boolean | CategoryDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["categoryAllocation"]>



  export type CategoryAllocationSelectScalar = {
    id?: boolean
    amount?: boolean
    budgetId?: boolean
    categoryId?: boolean
  }

  export type CategoryAllocationOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "amount" | "budgetId" | "categoryId", ExtArgs["result"]["categoryAllocation"]>
  export type CategoryAllocationInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    budget?: boolean | BudgetDefaultArgs<ExtArgs>
    category?: boolean | CategoryDefaultArgs<ExtArgs>
  }

  export type $CategoryAllocationPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "CategoryAllocation"
    objects: {
      budget: Prisma.$BudgetPayload<ExtArgs>
      category: Prisma.$CategoryPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      amount: number
      budgetId: string
      categoryId: string
    }, ExtArgs["result"]["categoryAllocation"]>
    composites: {}
  }

  type CategoryAllocationGetPayload<S extends boolean | null | undefined | CategoryAllocationDefaultArgs> = $Result.GetResult<Prisma.$CategoryAllocationPayload, S>

  type CategoryAllocationCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<CategoryAllocationFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: CategoryAllocationCountAggregateInputType | true
    }

  export interface CategoryAllocationDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['CategoryAllocation'], meta: { name: 'CategoryAllocation' } }
    /**
     * Find zero or one CategoryAllocation that matches the filter.
     * @param {CategoryAllocationFindUniqueArgs} args - Arguments to find a CategoryAllocation
     * @example
     * // Get one CategoryAllocation
     * const categoryAllocation = await prisma.categoryAllocation.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends CategoryAllocationFindUniqueArgs>(args: SelectSubset<T, CategoryAllocationFindUniqueArgs<ExtArgs>>): Prisma__CategoryAllocationClient<$Result.GetResult<Prisma.$CategoryAllocationPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one CategoryAllocation that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {CategoryAllocationFindUniqueOrThrowArgs} args - Arguments to find a CategoryAllocation
     * @example
     * // Get one CategoryAllocation
     * const categoryAllocation = await prisma.categoryAllocation.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends CategoryAllocationFindUniqueOrThrowArgs>(args: SelectSubset<T, CategoryAllocationFindUniqueOrThrowArgs<ExtArgs>>): Prisma__CategoryAllocationClient<$Result.GetResult<Prisma.$CategoryAllocationPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first CategoryAllocation that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoryAllocationFindFirstArgs} args - Arguments to find a CategoryAllocation
     * @example
     * // Get one CategoryAllocation
     * const categoryAllocation = await prisma.categoryAllocation.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends CategoryAllocationFindFirstArgs>(args?: SelectSubset<T, CategoryAllocationFindFirstArgs<ExtArgs>>): Prisma__CategoryAllocationClient<$Result.GetResult<Prisma.$CategoryAllocationPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first CategoryAllocation that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoryAllocationFindFirstOrThrowArgs} args - Arguments to find a CategoryAllocation
     * @example
     * // Get one CategoryAllocation
     * const categoryAllocation = await prisma.categoryAllocation.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends CategoryAllocationFindFirstOrThrowArgs>(args?: SelectSubset<T, CategoryAllocationFindFirstOrThrowArgs<ExtArgs>>): Prisma__CategoryAllocationClient<$Result.GetResult<Prisma.$CategoryAllocationPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more CategoryAllocations that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoryAllocationFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all CategoryAllocations
     * const categoryAllocations = await prisma.categoryAllocation.findMany()
     * 
     * // Get first 10 CategoryAllocations
     * const categoryAllocations = await prisma.categoryAllocation.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const categoryAllocationWithIdOnly = await prisma.categoryAllocation.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends CategoryAllocationFindManyArgs>(args?: SelectSubset<T, CategoryAllocationFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CategoryAllocationPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a CategoryAllocation.
     * @param {CategoryAllocationCreateArgs} args - Arguments to create a CategoryAllocation.
     * @example
     * // Create one CategoryAllocation
     * const CategoryAllocation = await prisma.categoryAllocation.create({
     *   data: {
     *     // ... data to create a CategoryAllocation
     *   }
     * })
     * 
     */
    create<T extends CategoryAllocationCreateArgs>(args: SelectSubset<T, CategoryAllocationCreateArgs<ExtArgs>>): Prisma__CategoryAllocationClient<$Result.GetResult<Prisma.$CategoryAllocationPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many CategoryAllocations.
     * @param {CategoryAllocationCreateManyArgs} args - Arguments to create many CategoryAllocations.
     * @example
     * // Create many CategoryAllocations
     * const categoryAllocation = await prisma.categoryAllocation.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends CategoryAllocationCreateManyArgs>(args?: SelectSubset<T, CategoryAllocationCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a CategoryAllocation.
     * @param {CategoryAllocationDeleteArgs} args - Arguments to delete one CategoryAllocation.
     * @example
     * // Delete one CategoryAllocation
     * const CategoryAllocation = await prisma.categoryAllocation.delete({
     *   where: {
     *     // ... filter to delete one CategoryAllocation
     *   }
     * })
     * 
     */
    delete<T extends CategoryAllocationDeleteArgs>(args: SelectSubset<T, CategoryAllocationDeleteArgs<ExtArgs>>): Prisma__CategoryAllocationClient<$Result.GetResult<Prisma.$CategoryAllocationPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one CategoryAllocation.
     * @param {CategoryAllocationUpdateArgs} args - Arguments to update one CategoryAllocation.
     * @example
     * // Update one CategoryAllocation
     * const categoryAllocation = await prisma.categoryAllocation.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends CategoryAllocationUpdateArgs>(args: SelectSubset<T, CategoryAllocationUpdateArgs<ExtArgs>>): Prisma__CategoryAllocationClient<$Result.GetResult<Prisma.$CategoryAllocationPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more CategoryAllocations.
     * @param {CategoryAllocationDeleteManyArgs} args - Arguments to filter CategoryAllocations to delete.
     * @example
     * // Delete a few CategoryAllocations
     * const { count } = await prisma.categoryAllocation.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends CategoryAllocationDeleteManyArgs>(args?: SelectSubset<T, CategoryAllocationDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more CategoryAllocations.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoryAllocationUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many CategoryAllocations
     * const categoryAllocation = await prisma.categoryAllocation.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends CategoryAllocationUpdateManyArgs>(args: SelectSubset<T, CategoryAllocationUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one CategoryAllocation.
     * @param {CategoryAllocationUpsertArgs} args - Arguments to update or create a CategoryAllocation.
     * @example
     * // Update or create a CategoryAllocation
     * const categoryAllocation = await prisma.categoryAllocation.upsert({
     *   create: {
     *     // ... data to create a CategoryAllocation
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the CategoryAllocation we want to update
     *   }
     * })
     */
    upsert<T extends CategoryAllocationUpsertArgs>(args: SelectSubset<T, CategoryAllocationUpsertArgs<ExtArgs>>): Prisma__CategoryAllocationClient<$Result.GetResult<Prisma.$CategoryAllocationPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more CategoryAllocations that matches the filter.
     * @param {CategoryAllocationFindRawArgs} args - Select which filters you would like to apply.
     * @example
     * const categoryAllocation = await prisma.categoryAllocation.findRaw({
     *   filter: { age: { $gt: 25 } }
     * })
     */
    findRaw(args?: CategoryAllocationFindRawArgs): Prisma.PrismaPromise<JsonObject>

    /**
     * Perform aggregation operations on a CategoryAllocation.
     * @param {CategoryAllocationAggregateRawArgs} args - Select which aggregations you would like to apply.
     * @example
     * const categoryAllocation = await prisma.categoryAllocation.aggregateRaw({
     *   pipeline: [
     *     { $match: { status: "registered" } },
     *     { $group: { _id: "$country", total: { $sum: 1 } } }
     *   ]
     * })
     */
    aggregateRaw(args?: CategoryAllocationAggregateRawArgs): Prisma.PrismaPromise<JsonObject>


    /**
     * Count the number of CategoryAllocations.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoryAllocationCountArgs} args - Arguments to filter CategoryAllocations to count.
     * @example
     * // Count the number of CategoryAllocations
     * const count = await prisma.categoryAllocation.count({
     *   where: {
     *     // ... the filter for the CategoryAllocations we want to count
     *   }
     * })
    **/
    count<T extends CategoryAllocationCountArgs>(
      args?: Subset<T, CategoryAllocationCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CategoryAllocationCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a CategoryAllocation.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoryAllocationAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends CategoryAllocationAggregateArgs>(args: Subset<T, CategoryAllocationAggregateArgs>): Prisma.PrismaPromise<GetCategoryAllocationAggregateType<T>>

    /**
     * Group by CategoryAllocation.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoryAllocationGroupByArgs} args - Group by arguments.
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
      T extends CategoryAllocationGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CategoryAllocationGroupByArgs['orderBy'] }
        : { orderBy?: CategoryAllocationGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, CategoryAllocationGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCategoryAllocationGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the CategoryAllocation model
   */
  readonly fields: CategoryAllocationFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for CategoryAllocation.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CategoryAllocationClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    budget<T extends BudgetDefaultArgs<ExtArgs> = {}>(args?: Subset<T, BudgetDefaultArgs<ExtArgs>>): Prisma__BudgetClient<$Result.GetResult<Prisma.$BudgetPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    category<T extends CategoryDefaultArgs<ExtArgs> = {}>(args?: Subset<T, CategoryDefaultArgs<ExtArgs>>): Prisma__CategoryClient<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the CategoryAllocation model
   */
  interface CategoryAllocationFieldRefs {
    readonly id: FieldRef<"CategoryAllocation", 'String'>
    readonly amount: FieldRef<"CategoryAllocation", 'Float'>
    readonly budgetId: FieldRef<"CategoryAllocation", 'String'>
    readonly categoryId: FieldRef<"CategoryAllocation", 'String'>
  }
    

  // Custom InputTypes
  /**
   * CategoryAllocation findUnique
   */
  export type CategoryAllocationFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CategoryAllocation
     */
    select?: CategoryAllocationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CategoryAllocation
     */
    omit?: CategoryAllocationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryAllocationInclude<ExtArgs> | null
    /**
     * Filter, which CategoryAllocation to fetch.
     */
    where: CategoryAllocationWhereUniqueInput
  }

  /**
   * CategoryAllocation findUniqueOrThrow
   */
  export type CategoryAllocationFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CategoryAllocation
     */
    select?: CategoryAllocationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CategoryAllocation
     */
    omit?: CategoryAllocationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryAllocationInclude<ExtArgs> | null
    /**
     * Filter, which CategoryAllocation to fetch.
     */
    where: CategoryAllocationWhereUniqueInput
  }

  /**
   * CategoryAllocation findFirst
   */
  export type CategoryAllocationFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CategoryAllocation
     */
    select?: CategoryAllocationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CategoryAllocation
     */
    omit?: CategoryAllocationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryAllocationInclude<ExtArgs> | null
    /**
     * Filter, which CategoryAllocation to fetch.
     */
    where?: CategoryAllocationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CategoryAllocations to fetch.
     */
    orderBy?: CategoryAllocationOrderByWithRelationInput | CategoryAllocationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for CategoryAllocations.
     */
    cursor?: CategoryAllocationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CategoryAllocations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CategoryAllocations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of CategoryAllocations.
     */
    distinct?: CategoryAllocationScalarFieldEnum | CategoryAllocationScalarFieldEnum[]
  }

  /**
   * CategoryAllocation findFirstOrThrow
   */
  export type CategoryAllocationFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CategoryAllocation
     */
    select?: CategoryAllocationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CategoryAllocation
     */
    omit?: CategoryAllocationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryAllocationInclude<ExtArgs> | null
    /**
     * Filter, which CategoryAllocation to fetch.
     */
    where?: CategoryAllocationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CategoryAllocations to fetch.
     */
    orderBy?: CategoryAllocationOrderByWithRelationInput | CategoryAllocationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for CategoryAllocations.
     */
    cursor?: CategoryAllocationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CategoryAllocations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CategoryAllocations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of CategoryAllocations.
     */
    distinct?: CategoryAllocationScalarFieldEnum | CategoryAllocationScalarFieldEnum[]
  }

  /**
   * CategoryAllocation findMany
   */
  export type CategoryAllocationFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CategoryAllocation
     */
    select?: CategoryAllocationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CategoryAllocation
     */
    omit?: CategoryAllocationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryAllocationInclude<ExtArgs> | null
    /**
     * Filter, which CategoryAllocations to fetch.
     */
    where?: CategoryAllocationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CategoryAllocations to fetch.
     */
    orderBy?: CategoryAllocationOrderByWithRelationInput | CategoryAllocationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing CategoryAllocations.
     */
    cursor?: CategoryAllocationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CategoryAllocations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CategoryAllocations.
     */
    skip?: number
    distinct?: CategoryAllocationScalarFieldEnum | CategoryAllocationScalarFieldEnum[]
  }

  /**
   * CategoryAllocation create
   */
  export type CategoryAllocationCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CategoryAllocation
     */
    select?: CategoryAllocationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CategoryAllocation
     */
    omit?: CategoryAllocationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryAllocationInclude<ExtArgs> | null
    /**
     * The data needed to create a CategoryAllocation.
     */
    data: XOR<CategoryAllocationCreateInput, CategoryAllocationUncheckedCreateInput>
  }

  /**
   * CategoryAllocation createMany
   */
  export type CategoryAllocationCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many CategoryAllocations.
     */
    data: CategoryAllocationCreateManyInput | CategoryAllocationCreateManyInput[]
  }

  /**
   * CategoryAllocation update
   */
  export type CategoryAllocationUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CategoryAllocation
     */
    select?: CategoryAllocationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CategoryAllocation
     */
    omit?: CategoryAllocationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryAllocationInclude<ExtArgs> | null
    /**
     * The data needed to update a CategoryAllocation.
     */
    data: XOR<CategoryAllocationUpdateInput, CategoryAllocationUncheckedUpdateInput>
    /**
     * Choose, which CategoryAllocation to update.
     */
    where: CategoryAllocationWhereUniqueInput
  }

  /**
   * CategoryAllocation updateMany
   */
  export type CategoryAllocationUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update CategoryAllocations.
     */
    data: XOR<CategoryAllocationUpdateManyMutationInput, CategoryAllocationUncheckedUpdateManyInput>
    /**
     * Filter which CategoryAllocations to update
     */
    where?: CategoryAllocationWhereInput
    /**
     * Limit how many CategoryAllocations to update.
     */
    limit?: number
  }

  /**
   * CategoryAllocation upsert
   */
  export type CategoryAllocationUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CategoryAllocation
     */
    select?: CategoryAllocationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CategoryAllocation
     */
    omit?: CategoryAllocationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryAllocationInclude<ExtArgs> | null
    /**
     * The filter to search for the CategoryAllocation to update in case it exists.
     */
    where: CategoryAllocationWhereUniqueInput
    /**
     * In case the CategoryAllocation found by the `where` argument doesn't exist, create a new CategoryAllocation with this data.
     */
    create: XOR<CategoryAllocationCreateInput, CategoryAllocationUncheckedCreateInput>
    /**
     * In case the CategoryAllocation was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CategoryAllocationUpdateInput, CategoryAllocationUncheckedUpdateInput>
  }

  /**
   * CategoryAllocation delete
   */
  export type CategoryAllocationDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CategoryAllocation
     */
    select?: CategoryAllocationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CategoryAllocation
     */
    omit?: CategoryAllocationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryAllocationInclude<ExtArgs> | null
    /**
     * Filter which CategoryAllocation to delete.
     */
    where: CategoryAllocationWhereUniqueInput
  }

  /**
   * CategoryAllocation deleteMany
   */
  export type CategoryAllocationDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which CategoryAllocations to delete
     */
    where?: CategoryAllocationWhereInput
    /**
     * Limit how many CategoryAllocations to delete.
     */
    limit?: number
  }

  /**
   * CategoryAllocation findRaw
   */
  export type CategoryAllocationFindRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The query predicate filter. If unspecified, then all documents in the collection will match the predicate. ${@link https://docs.mongodb.com/manual/reference/operator/query MongoDB Docs}.
     */
    filter?: InputJsonValue
    /**
     * Additional options to pass to the `find` command ${@link https://docs.mongodb.com/manual/reference/command/find/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }

  /**
   * CategoryAllocation aggregateRaw
   */
  export type CategoryAllocationAggregateRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * An array of aggregation stages to process and transform the document stream via the aggregation pipeline. ${@link https://docs.mongodb.com/manual/reference/operator/aggregation-pipeline MongoDB Docs}.
     */
    pipeline?: InputJsonValue[]
    /**
     * Additional options to pass to the `aggregate` command ${@link https://docs.mongodb.com/manual/reference/command/aggregate/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }

  /**
   * CategoryAllocation without action
   */
  export type CategoryAllocationDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CategoryAllocation
     */
    select?: CategoryAllocationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CategoryAllocation
     */
    omit?: CategoryAllocationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryAllocationInclude<ExtArgs> | null
  }


  /**
   * Model SavingsGoal
   */

  export type AggregateSavingsGoal = {
    _count: SavingsGoalCountAggregateOutputType | null
    _avg: SavingsGoalAvgAggregateOutputType | null
    _sum: SavingsGoalSumAggregateOutputType | null
    _min: SavingsGoalMinAggregateOutputType | null
    _max: SavingsGoalMaxAggregateOutputType | null
  }

  export type SavingsGoalAvgAggregateOutputType = {
    targetAmount: number | null
    currentAmount: number | null
  }

  export type SavingsGoalSumAggregateOutputType = {
    targetAmount: number | null
    currentAmount: number | null
  }

  export type SavingsGoalMinAggregateOutputType = {
    id: string | null
    name: string | null
    targetAmount: number | null
    currentAmount: number | null
    targetDate: Date | null
    completed: boolean | null
    notes: string | null
    createdAt: Date | null
    updatedAt: Date | null
    userId: string | null
  }

  export type SavingsGoalMaxAggregateOutputType = {
    id: string | null
    name: string | null
    targetAmount: number | null
    currentAmount: number | null
    targetDate: Date | null
    completed: boolean | null
    notes: string | null
    createdAt: Date | null
    updatedAt: Date | null
    userId: string | null
  }

  export type SavingsGoalCountAggregateOutputType = {
    id: number
    name: number
    targetAmount: number
    currentAmount: number
    targetDate: number
    completed: number
    notes: number
    createdAt: number
    updatedAt: number
    userId: number
    _all: number
  }


  export type SavingsGoalAvgAggregateInputType = {
    targetAmount?: true
    currentAmount?: true
  }

  export type SavingsGoalSumAggregateInputType = {
    targetAmount?: true
    currentAmount?: true
  }

  export type SavingsGoalMinAggregateInputType = {
    id?: true
    name?: true
    targetAmount?: true
    currentAmount?: true
    targetDate?: true
    completed?: true
    notes?: true
    createdAt?: true
    updatedAt?: true
    userId?: true
  }

  export type SavingsGoalMaxAggregateInputType = {
    id?: true
    name?: true
    targetAmount?: true
    currentAmount?: true
    targetDate?: true
    completed?: true
    notes?: true
    createdAt?: true
    updatedAt?: true
    userId?: true
  }

  export type SavingsGoalCountAggregateInputType = {
    id?: true
    name?: true
    targetAmount?: true
    currentAmount?: true
    targetDate?: true
    completed?: true
    notes?: true
    createdAt?: true
    updatedAt?: true
    userId?: true
    _all?: true
  }

  export type SavingsGoalAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which SavingsGoal to aggregate.
     */
    where?: SavingsGoalWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SavingsGoals to fetch.
     */
    orderBy?: SavingsGoalOrderByWithRelationInput | SavingsGoalOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: SavingsGoalWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SavingsGoals from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SavingsGoals.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned SavingsGoals
    **/
    _count?: true | SavingsGoalCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: SavingsGoalAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: SavingsGoalSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SavingsGoalMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SavingsGoalMaxAggregateInputType
  }

  export type GetSavingsGoalAggregateType<T extends SavingsGoalAggregateArgs> = {
        [P in keyof T & keyof AggregateSavingsGoal]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSavingsGoal[P]>
      : GetScalarType<T[P], AggregateSavingsGoal[P]>
  }




  export type SavingsGoalGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SavingsGoalWhereInput
    orderBy?: SavingsGoalOrderByWithAggregationInput | SavingsGoalOrderByWithAggregationInput[]
    by: SavingsGoalScalarFieldEnum[] | SavingsGoalScalarFieldEnum
    having?: SavingsGoalScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SavingsGoalCountAggregateInputType | true
    _avg?: SavingsGoalAvgAggregateInputType
    _sum?: SavingsGoalSumAggregateInputType
    _min?: SavingsGoalMinAggregateInputType
    _max?: SavingsGoalMaxAggregateInputType
  }

  export type SavingsGoalGroupByOutputType = {
    id: string
    name: string
    targetAmount: number
    currentAmount: number
    targetDate: Date | null
    completed: boolean
    notes: string | null
    createdAt: Date
    updatedAt: Date
    userId: string
    _count: SavingsGoalCountAggregateOutputType | null
    _avg: SavingsGoalAvgAggregateOutputType | null
    _sum: SavingsGoalSumAggregateOutputType | null
    _min: SavingsGoalMinAggregateOutputType | null
    _max: SavingsGoalMaxAggregateOutputType | null
  }

  type GetSavingsGoalGroupByPayload<T extends SavingsGoalGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<SavingsGoalGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SavingsGoalGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SavingsGoalGroupByOutputType[P]>
            : GetScalarType<T[P], SavingsGoalGroupByOutputType[P]>
        }
      >
    >


  export type SavingsGoalSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    targetAmount?: boolean
    currentAmount?: boolean
    targetDate?: boolean
    completed?: boolean
    notes?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    userId?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["savingsGoal"]>



  export type SavingsGoalSelectScalar = {
    id?: boolean
    name?: boolean
    targetAmount?: boolean
    currentAmount?: boolean
    targetDate?: boolean
    completed?: boolean
    notes?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    userId?: boolean
  }

  export type SavingsGoalOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "targetAmount" | "currentAmount" | "targetDate" | "completed" | "notes" | "createdAt" | "updatedAt" | "userId", ExtArgs["result"]["savingsGoal"]>
  export type SavingsGoalInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $SavingsGoalPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "SavingsGoal"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      targetAmount: number
      currentAmount: number
      targetDate: Date | null
      completed: boolean
      notes: string | null
      createdAt: Date
      updatedAt: Date
      userId: string
    }, ExtArgs["result"]["savingsGoal"]>
    composites: {}
  }

  type SavingsGoalGetPayload<S extends boolean | null | undefined | SavingsGoalDefaultArgs> = $Result.GetResult<Prisma.$SavingsGoalPayload, S>

  type SavingsGoalCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<SavingsGoalFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: SavingsGoalCountAggregateInputType | true
    }

  export interface SavingsGoalDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['SavingsGoal'], meta: { name: 'SavingsGoal' } }
    /**
     * Find zero or one SavingsGoal that matches the filter.
     * @param {SavingsGoalFindUniqueArgs} args - Arguments to find a SavingsGoal
     * @example
     * // Get one SavingsGoal
     * const savingsGoal = await prisma.savingsGoal.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends SavingsGoalFindUniqueArgs>(args: SelectSubset<T, SavingsGoalFindUniqueArgs<ExtArgs>>): Prisma__SavingsGoalClient<$Result.GetResult<Prisma.$SavingsGoalPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one SavingsGoal that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {SavingsGoalFindUniqueOrThrowArgs} args - Arguments to find a SavingsGoal
     * @example
     * // Get one SavingsGoal
     * const savingsGoal = await prisma.savingsGoal.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends SavingsGoalFindUniqueOrThrowArgs>(args: SelectSubset<T, SavingsGoalFindUniqueOrThrowArgs<ExtArgs>>): Prisma__SavingsGoalClient<$Result.GetResult<Prisma.$SavingsGoalPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first SavingsGoal that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SavingsGoalFindFirstArgs} args - Arguments to find a SavingsGoal
     * @example
     * // Get one SavingsGoal
     * const savingsGoal = await prisma.savingsGoal.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends SavingsGoalFindFirstArgs>(args?: SelectSubset<T, SavingsGoalFindFirstArgs<ExtArgs>>): Prisma__SavingsGoalClient<$Result.GetResult<Prisma.$SavingsGoalPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first SavingsGoal that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SavingsGoalFindFirstOrThrowArgs} args - Arguments to find a SavingsGoal
     * @example
     * // Get one SavingsGoal
     * const savingsGoal = await prisma.savingsGoal.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends SavingsGoalFindFirstOrThrowArgs>(args?: SelectSubset<T, SavingsGoalFindFirstOrThrowArgs<ExtArgs>>): Prisma__SavingsGoalClient<$Result.GetResult<Prisma.$SavingsGoalPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more SavingsGoals that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SavingsGoalFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all SavingsGoals
     * const savingsGoals = await prisma.savingsGoal.findMany()
     * 
     * // Get first 10 SavingsGoals
     * const savingsGoals = await prisma.savingsGoal.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const savingsGoalWithIdOnly = await prisma.savingsGoal.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends SavingsGoalFindManyArgs>(args?: SelectSubset<T, SavingsGoalFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SavingsGoalPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a SavingsGoal.
     * @param {SavingsGoalCreateArgs} args - Arguments to create a SavingsGoal.
     * @example
     * // Create one SavingsGoal
     * const SavingsGoal = await prisma.savingsGoal.create({
     *   data: {
     *     // ... data to create a SavingsGoal
     *   }
     * })
     * 
     */
    create<T extends SavingsGoalCreateArgs>(args: SelectSubset<T, SavingsGoalCreateArgs<ExtArgs>>): Prisma__SavingsGoalClient<$Result.GetResult<Prisma.$SavingsGoalPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many SavingsGoals.
     * @param {SavingsGoalCreateManyArgs} args - Arguments to create many SavingsGoals.
     * @example
     * // Create many SavingsGoals
     * const savingsGoal = await prisma.savingsGoal.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends SavingsGoalCreateManyArgs>(args?: SelectSubset<T, SavingsGoalCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a SavingsGoal.
     * @param {SavingsGoalDeleteArgs} args - Arguments to delete one SavingsGoal.
     * @example
     * // Delete one SavingsGoal
     * const SavingsGoal = await prisma.savingsGoal.delete({
     *   where: {
     *     // ... filter to delete one SavingsGoal
     *   }
     * })
     * 
     */
    delete<T extends SavingsGoalDeleteArgs>(args: SelectSubset<T, SavingsGoalDeleteArgs<ExtArgs>>): Prisma__SavingsGoalClient<$Result.GetResult<Prisma.$SavingsGoalPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one SavingsGoal.
     * @param {SavingsGoalUpdateArgs} args - Arguments to update one SavingsGoal.
     * @example
     * // Update one SavingsGoal
     * const savingsGoal = await prisma.savingsGoal.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends SavingsGoalUpdateArgs>(args: SelectSubset<T, SavingsGoalUpdateArgs<ExtArgs>>): Prisma__SavingsGoalClient<$Result.GetResult<Prisma.$SavingsGoalPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more SavingsGoals.
     * @param {SavingsGoalDeleteManyArgs} args - Arguments to filter SavingsGoals to delete.
     * @example
     * // Delete a few SavingsGoals
     * const { count } = await prisma.savingsGoal.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends SavingsGoalDeleteManyArgs>(args?: SelectSubset<T, SavingsGoalDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more SavingsGoals.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SavingsGoalUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many SavingsGoals
     * const savingsGoal = await prisma.savingsGoal.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends SavingsGoalUpdateManyArgs>(args: SelectSubset<T, SavingsGoalUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one SavingsGoal.
     * @param {SavingsGoalUpsertArgs} args - Arguments to update or create a SavingsGoal.
     * @example
     * // Update or create a SavingsGoal
     * const savingsGoal = await prisma.savingsGoal.upsert({
     *   create: {
     *     // ... data to create a SavingsGoal
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the SavingsGoal we want to update
     *   }
     * })
     */
    upsert<T extends SavingsGoalUpsertArgs>(args: SelectSubset<T, SavingsGoalUpsertArgs<ExtArgs>>): Prisma__SavingsGoalClient<$Result.GetResult<Prisma.$SavingsGoalPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more SavingsGoals that matches the filter.
     * @param {SavingsGoalFindRawArgs} args - Select which filters you would like to apply.
     * @example
     * const savingsGoal = await prisma.savingsGoal.findRaw({
     *   filter: { age: { $gt: 25 } }
     * })
     */
    findRaw(args?: SavingsGoalFindRawArgs): Prisma.PrismaPromise<JsonObject>

    /**
     * Perform aggregation operations on a SavingsGoal.
     * @param {SavingsGoalAggregateRawArgs} args - Select which aggregations you would like to apply.
     * @example
     * const savingsGoal = await prisma.savingsGoal.aggregateRaw({
     *   pipeline: [
     *     { $match: { status: "registered" } },
     *     { $group: { _id: "$country", total: { $sum: 1 } } }
     *   ]
     * })
     */
    aggregateRaw(args?: SavingsGoalAggregateRawArgs): Prisma.PrismaPromise<JsonObject>


    /**
     * Count the number of SavingsGoals.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SavingsGoalCountArgs} args - Arguments to filter SavingsGoals to count.
     * @example
     * // Count the number of SavingsGoals
     * const count = await prisma.savingsGoal.count({
     *   where: {
     *     // ... the filter for the SavingsGoals we want to count
     *   }
     * })
    **/
    count<T extends SavingsGoalCountArgs>(
      args?: Subset<T, SavingsGoalCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SavingsGoalCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a SavingsGoal.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SavingsGoalAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends SavingsGoalAggregateArgs>(args: Subset<T, SavingsGoalAggregateArgs>): Prisma.PrismaPromise<GetSavingsGoalAggregateType<T>>

    /**
     * Group by SavingsGoal.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SavingsGoalGroupByArgs} args - Group by arguments.
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
      T extends SavingsGoalGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: SavingsGoalGroupByArgs['orderBy'] }
        : { orderBy?: SavingsGoalGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, SavingsGoalGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSavingsGoalGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the SavingsGoal model
   */
  readonly fields: SavingsGoalFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for SavingsGoal.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__SavingsGoalClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the SavingsGoal model
   */
  interface SavingsGoalFieldRefs {
    readonly id: FieldRef<"SavingsGoal", 'String'>
    readonly name: FieldRef<"SavingsGoal", 'String'>
    readonly targetAmount: FieldRef<"SavingsGoal", 'Float'>
    readonly currentAmount: FieldRef<"SavingsGoal", 'Float'>
    readonly targetDate: FieldRef<"SavingsGoal", 'DateTime'>
    readonly completed: FieldRef<"SavingsGoal", 'Boolean'>
    readonly notes: FieldRef<"SavingsGoal", 'String'>
    readonly createdAt: FieldRef<"SavingsGoal", 'DateTime'>
    readonly updatedAt: FieldRef<"SavingsGoal", 'DateTime'>
    readonly userId: FieldRef<"SavingsGoal", 'String'>
  }
    

  // Custom InputTypes
  /**
   * SavingsGoal findUnique
   */
  export type SavingsGoalFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SavingsGoal
     */
    select?: SavingsGoalSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SavingsGoal
     */
    omit?: SavingsGoalOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SavingsGoalInclude<ExtArgs> | null
    /**
     * Filter, which SavingsGoal to fetch.
     */
    where: SavingsGoalWhereUniqueInput
  }

  /**
   * SavingsGoal findUniqueOrThrow
   */
  export type SavingsGoalFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SavingsGoal
     */
    select?: SavingsGoalSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SavingsGoal
     */
    omit?: SavingsGoalOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SavingsGoalInclude<ExtArgs> | null
    /**
     * Filter, which SavingsGoal to fetch.
     */
    where: SavingsGoalWhereUniqueInput
  }

  /**
   * SavingsGoal findFirst
   */
  export type SavingsGoalFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SavingsGoal
     */
    select?: SavingsGoalSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SavingsGoal
     */
    omit?: SavingsGoalOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SavingsGoalInclude<ExtArgs> | null
    /**
     * Filter, which SavingsGoal to fetch.
     */
    where?: SavingsGoalWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SavingsGoals to fetch.
     */
    orderBy?: SavingsGoalOrderByWithRelationInput | SavingsGoalOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for SavingsGoals.
     */
    cursor?: SavingsGoalWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SavingsGoals from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SavingsGoals.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of SavingsGoals.
     */
    distinct?: SavingsGoalScalarFieldEnum | SavingsGoalScalarFieldEnum[]
  }

  /**
   * SavingsGoal findFirstOrThrow
   */
  export type SavingsGoalFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SavingsGoal
     */
    select?: SavingsGoalSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SavingsGoal
     */
    omit?: SavingsGoalOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SavingsGoalInclude<ExtArgs> | null
    /**
     * Filter, which SavingsGoal to fetch.
     */
    where?: SavingsGoalWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SavingsGoals to fetch.
     */
    orderBy?: SavingsGoalOrderByWithRelationInput | SavingsGoalOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for SavingsGoals.
     */
    cursor?: SavingsGoalWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SavingsGoals from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SavingsGoals.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of SavingsGoals.
     */
    distinct?: SavingsGoalScalarFieldEnum | SavingsGoalScalarFieldEnum[]
  }

  /**
   * SavingsGoal findMany
   */
  export type SavingsGoalFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SavingsGoal
     */
    select?: SavingsGoalSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SavingsGoal
     */
    omit?: SavingsGoalOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SavingsGoalInclude<ExtArgs> | null
    /**
     * Filter, which SavingsGoals to fetch.
     */
    where?: SavingsGoalWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SavingsGoals to fetch.
     */
    orderBy?: SavingsGoalOrderByWithRelationInput | SavingsGoalOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing SavingsGoals.
     */
    cursor?: SavingsGoalWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SavingsGoals from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SavingsGoals.
     */
    skip?: number
    distinct?: SavingsGoalScalarFieldEnum | SavingsGoalScalarFieldEnum[]
  }

  /**
   * SavingsGoal create
   */
  export type SavingsGoalCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SavingsGoal
     */
    select?: SavingsGoalSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SavingsGoal
     */
    omit?: SavingsGoalOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SavingsGoalInclude<ExtArgs> | null
    /**
     * The data needed to create a SavingsGoal.
     */
    data: XOR<SavingsGoalCreateInput, SavingsGoalUncheckedCreateInput>
  }

  /**
   * SavingsGoal createMany
   */
  export type SavingsGoalCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many SavingsGoals.
     */
    data: SavingsGoalCreateManyInput | SavingsGoalCreateManyInput[]
  }

  /**
   * SavingsGoal update
   */
  export type SavingsGoalUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SavingsGoal
     */
    select?: SavingsGoalSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SavingsGoal
     */
    omit?: SavingsGoalOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SavingsGoalInclude<ExtArgs> | null
    /**
     * The data needed to update a SavingsGoal.
     */
    data: XOR<SavingsGoalUpdateInput, SavingsGoalUncheckedUpdateInput>
    /**
     * Choose, which SavingsGoal to update.
     */
    where: SavingsGoalWhereUniqueInput
  }

  /**
   * SavingsGoal updateMany
   */
  export type SavingsGoalUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update SavingsGoals.
     */
    data: XOR<SavingsGoalUpdateManyMutationInput, SavingsGoalUncheckedUpdateManyInput>
    /**
     * Filter which SavingsGoals to update
     */
    where?: SavingsGoalWhereInput
    /**
     * Limit how many SavingsGoals to update.
     */
    limit?: number
  }

  /**
   * SavingsGoal upsert
   */
  export type SavingsGoalUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SavingsGoal
     */
    select?: SavingsGoalSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SavingsGoal
     */
    omit?: SavingsGoalOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SavingsGoalInclude<ExtArgs> | null
    /**
     * The filter to search for the SavingsGoal to update in case it exists.
     */
    where: SavingsGoalWhereUniqueInput
    /**
     * In case the SavingsGoal found by the `where` argument doesn't exist, create a new SavingsGoal with this data.
     */
    create: XOR<SavingsGoalCreateInput, SavingsGoalUncheckedCreateInput>
    /**
     * In case the SavingsGoal was found with the provided `where` argument, update it with this data.
     */
    update: XOR<SavingsGoalUpdateInput, SavingsGoalUncheckedUpdateInput>
  }

  /**
   * SavingsGoal delete
   */
  export type SavingsGoalDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SavingsGoal
     */
    select?: SavingsGoalSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SavingsGoal
     */
    omit?: SavingsGoalOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SavingsGoalInclude<ExtArgs> | null
    /**
     * Filter which SavingsGoal to delete.
     */
    where: SavingsGoalWhereUniqueInput
  }

  /**
   * SavingsGoal deleteMany
   */
  export type SavingsGoalDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which SavingsGoals to delete
     */
    where?: SavingsGoalWhereInput
    /**
     * Limit how many SavingsGoals to delete.
     */
    limit?: number
  }

  /**
   * SavingsGoal findRaw
   */
  export type SavingsGoalFindRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The query predicate filter. If unspecified, then all documents in the collection will match the predicate. ${@link https://docs.mongodb.com/manual/reference/operator/query MongoDB Docs}.
     */
    filter?: InputJsonValue
    /**
     * Additional options to pass to the `find` command ${@link https://docs.mongodb.com/manual/reference/command/find/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }

  /**
   * SavingsGoal aggregateRaw
   */
  export type SavingsGoalAggregateRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * An array of aggregation stages to process and transform the document stream via the aggregation pipeline. ${@link https://docs.mongodb.com/manual/reference/operator/aggregation-pipeline MongoDB Docs}.
     */
    pipeline?: InputJsonValue[]
    /**
     * Additional options to pass to the `aggregate` command ${@link https://docs.mongodb.com/manual/reference/command/aggregate/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }

  /**
   * SavingsGoal without action
   */
  export type SavingsGoalDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SavingsGoal
     */
    select?: SavingsGoalSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SavingsGoal
     */
    omit?: SavingsGoalOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SavingsGoalInclude<ExtArgs> | null
  }


  /**
   * Model PlanItem
   */

  export type AggregatePlanItem = {
    _count: PlanItemCountAggregateOutputType | null
    _avg: PlanItemAvgAggregateOutputType | null
    _sum: PlanItemSumAggregateOutputType | null
    _min: PlanItemMinAggregateOutputType | null
    _max: PlanItemMaxAggregateOutputType | null
  }

  export type PlanItemAvgAggregateOutputType = {
    amount: number | null
  }

  export type PlanItemSumAggregateOutputType = {
    amount: number | null
  }

  export type PlanItemMinAggregateOutputType = {
    id: string | null
    description: string | null
    amount: number | null
    notes: string | null
    planType: string | null
    itemType: string | null
    createdAt: Date | null
    updatedAt: Date | null
    userId: string | null
    categoryId: string | null
  }

  export type PlanItemMaxAggregateOutputType = {
    id: string | null
    description: string | null
    amount: number | null
    notes: string | null
    planType: string | null
    itemType: string | null
    createdAt: Date | null
    updatedAt: Date | null
    userId: string | null
    categoryId: string | null
  }

  export type PlanItemCountAggregateOutputType = {
    id: number
    description: number
    amount: number
    notes: number
    planType: number
    itemType: number
    createdAt: number
    updatedAt: number
    userId: number
    categoryId: number
    _all: number
  }


  export type PlanItemAvgAggregateInputType = {
    amount?: true
  }

  export type PlanItemSumAggregateInputType = {
    amount?: true
  }

  export type PlanItemMinAggregateInputType = {
    id?: true
    description?: true
    amount?: true
    notes?: true
    planType?: true
    itemType?: true
    createdAt?: true
    updatedAt?: true
    userId?: true
    categoryId?: true
  }

  export type PlanItemMaxAggregateInputType = {
    id?: true
    description?: true
    amount?: true
    notes?: true
    planType?: true
    itemType?: true
    createdAt?: true
    updatedAt?: true
    userId?: true
    categoryId?: true
  }

  export type PlanItemCountAggregateInputType = {
    id?: true
    description?: true
    amount?: true
    notes?: true
    planType?: true
    itemType?: true
    createdAt?: true
    updatedAt?: true
    userId?: true
    categoryId?: true
    _all?: true
  }

  export type PlanItemAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which PlanItem to aggregate.
     */
    where?: PlanItemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PlanItems to fetch.
     */
    orderBy?: PlanItemOrderByWithRelationInput | PlanItemOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PlanItemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PlanItems from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PlanItems.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned PlanItems
    **/
    _count?: true | PlanItemCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: PlanItemAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: PlanItemSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PlanItemMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PlanItemMaxAggregateInputType
  }

  export type GetPlanItemAggregateType<T extends PlanItemAggregateArgs> = {
        [P in keyof T & keyof AggregatePlanItem]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePlanItem[P]>
      : GetScalarType<T[P], AggregatePlanItem[P]>
  }




  export type PlanItemGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PlanItemWhereInput
    orderBy?: PlanItemOrderByWithAggregationInput | PlanItemOrderByWithAggregationInput[]
    by: PlanItemScalarFieldEnum[] | PlanItemScalarFieldEnum
    having?: PlanItemScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PlanItemCountAggregateInputType | true
    _avg?: PlanItemAvgAggregateInputType
    _sum?: PlanItemSumAggregateInputType
    _min?: PlanItemMinAggregateInputType
    _max?: PlanItemMaxAggregateInputType
  }

  export type PlanItemGroupByOutputType = {
    id: string
    description: string
    amount: number
    notes: string | null
    planType: string
    itemType: string
    createdAt: Date
    updatedAt: Date
    userId: string
    categoryId: string | null
    _count: PlanItemCountAggregateOutputType | null
    _avg: PlanItemAvgAggregateOutputType | null
    _sum: PlanItemSumAggregateOutputType | null
    _min: PlanItemMinAggregateOutputType | null
    _max: PlanItemMaxAggregateOutputType | null
  }

  type GetPlanItemGroupByPayload<T extends PlanItemGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PlanItemGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PlanItemGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PlanItemGroupByOutputType[P]>
            : GetScalarType<T[P], PlanItemGroupByOutputType[P]>
        }
      >
    >


  export type PlanItemSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    description?: boolean
    amount?: boolean
    notes?: boolean
    planType?: boolean
    itemType?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    userId?: boolean
    categoryId?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    category?: boolean | PlanItem$categoryArgs<ExtArgs>
  }, ExtArgs["result"]["planItem"]>



  export type PlanItemSelectScalar = {
    id?: boolean
    description?: boolean
    amount?: boolean
    notes?: boolean
    planType?: boolean
    itemType?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    userId?: boolean
    categoryId?: boolean
  }

  export type PlanItemOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "description" | "amount" | "notes" | "planType" | "itemType" | "createdAt" | "updatedAt" | "userId" | "categoryId", ExtArgs["result"]["planItem"]>
  export type PlanItemInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    category?: boolean | PlanItem$categoryArgs<ExtArgs>
  }

  export type $PlanItemPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "PlanItem"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
      category: Prisma.$CategoryPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      description: string
      amount: number
      notes: string | null
      planType: string
      itemType: string
      createdAt: Date
      updatedAt: Date
      userId: string
      categoryId: string | null
    }, ExtArgs["result"]["planItem"]>
    composites: {}
  }

  type PlanItemGetPayload<S extends boolean | null | undefined | PlanItemDefaultArgs> = $Result.GetResult<Prisma.$PlanItemPayload, S>

  type PlanItemCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<PlanItemFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: PlanItemCountAggregateInputType | true
    }

  export interface PlanItemDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['PlanItem'], meta: { name: 'PlanItem' } }
    /**
     * Find zero or one PlanItem that matches the filter.
     * @param {PlanItemFindUniqueArgs} args - Arguments to find a PlanItem
     * @example
     * // Get one PlanItem
     * const planItem = await prisma.planItem.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PlanItemFindUniqueArgs>(args: SelectSubset<T, PlanItemFindUniqueArgs<ExtArgs>>): Prisma__PlanItemClient<$Result.GetResult<Prisma.$PlanItemPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one PlanItem that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {PlanItemFindUniqueOrThrowArgs} args - Arguments to find a PlanItem
     * @example
     * // Get one PlanItem
     * const planItem = await prisma.planItem.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PlanItemFindUniqueOrThrowArgs>(args: SelectSubset<T, PlanItemFindUniqueOrThrowArgs<ExtArgs>>): Prisma__PlanItemClient<$Result.GetResult<Prisma.$PlanItemPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first PlanItem that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PlanItemFindFirstArgs} args - Arguments to find a PlanItem
     * @example
     * // Get one PlanItem
     * const planItem = await prisma.planItem.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PlanItemFindFirstArgs>(args?: SelectSubset<T, PlanItemFindFirstArgs<ExtArgs>>): Prisma__PlanItemClient<$Result.GetResult<Prisma.$PlanItemPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first PlanItem that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PlanItemFindFirstOrThrowArgs} args - Arguments to find a PlanItem
     * @example
     * // Get one PlanItem
     * const planItem = await prisma.planItem.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PlanItemFindFirstOrThrowArgs>(args?: SelectSubset<T, PlanItemFindFirstOrThrowArgs<ExtArgs>>): Prisma__PlanItemClient<$Result.GetResult<Prisma.$PlanItemPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more PlanItems that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PlanItemFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all PlanItems
     * const planItems = await prisma.planItem.findMany()
     * 
     * // Get first 10 PlanItems
     * const planItems = await prisma.planItem.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const planItemWithIdOnly = await prisma.planItem.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends PlanItemFindManyArgs>(args?: SelectSubset<T, PlanItemFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PlanItemPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a PlanItem.
     * @param {PlanItemCreateArgs} args - Arguments to create a PlanItem.
     * @example
     * // Create one PlanItem
     * const PlanItem = await prisma.planItem.create({
     *   data: {
     *     // ... data to create a PlanItem
     *   }
     * })
     * 
     */
    create<T extends PlanItemCreateArgs>(args: SelectSubset<T, PlanItemCreateArgs<ExtArgs>>): Prisma__PlanItemClient<$Result.GetResult<Prisma.$PlanItemPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many PlanItems.
     * @param {PlanItemCreateManyArgs} args - Arguments to create many PlanItems.
     * @example
     * // Create many PlanItems
     * const planItem = await prisma.planItem.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends PlanItemCreateManyArgs>(args?: SelectSubset<T, PlanItemCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a PlanItem.
     * @param {PlanItemDeleteArgs} args - Arguments to delete one PlanItem.
     * @example
     * // Delete one PlanItem
     * const PlanItem = await prisma.planItem.delete({
     *   where: {
     *     // ... filter to delete one PlanItem
     *   }
     * })
     * 
     */
    delete<T extends PlanItemDeleteArgs>(args: SelectSubset<T, PlanItemDeleteArgs<ExtArgs>>): Prisma__PlanItemClient<$Result.GetResult<Prisma.$PlanItemPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one PlanItem.
     * @param {PlanItemUpdateArgs} args - Arguments to update one PlanItem.
     * @example
     * // Update one PlanItem
     * const planItem = await prisma.planItem.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends PlanItemUpdateArgs>(args: SelectSubset<T, PlanItemUpdateArgs<ExtArgs>>): Prisma__PlanItemClient<$Result.GetResult<Prisma.$PlanItemPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more PlanItems.
     * @param {PlanItemDeleteManyArgs} args - Arguments to filter PlanItems to delete.
     * @example
     * // Delete a few PlanItems
     * const { count } = await prisma.planItem.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends PlanItemDeleteManyArgs>(args?: SelectSubset<T, PlanItemDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more PlanItems.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PlanItemUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many PlanItems
     * const planItem = await prisma.planItem.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends PlanItemUpdateManyArgs>(args: SelectSubset<T, PlanItemUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one PlanItem.
     * @param {PlanItemUpsertArgs} args - Arguments to update or create a PlanItem.
     * @example
     * // Update or create a PlanItem
     * const planItem = await prisma.planItem.upsert({
     *   create: {
     *     // ... data to create a PlanItem
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the PlanItem we want to update
     *   }
     * })
     */
    upsert<T extends PlanItemUpsertArgs>(args: SelectSubset<T, PlanItemUpsertArgs<ExtArgs>>): Prisma__PlanItemClient<$Result.GetResult<Prisma.$PlanItemPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more PlanItems that matches the filter.
     * @param {PlanItemFindRawArgs} args - Select which filters you would like to apply.
     * @example
     * const planItem = await prisma.planItem.findRaw({
     *   filter: { age: { $gt: 25 } }
     * })
     */
    findRaw(args?: PlanItemFindRawArgs): Prisma.PrismaPromise<JsonObject>

    /**
     * Perform aggregation operations on a PlanItem.
     * @param {PlanItemAggregateRawArgs} args - Select which aggregations you would like to apply.
     * @example
     * const planItem = await prisma.planItem.aggregateRaw({
     *   pipeline: [
     *     { $match: { status: "registered" } },
     *     { $group: { _id: "$country", total: { $sum: 1 } } }
     *   ]
     * })
     */
    aggregateRaw(args?: PlanItemAggregateRawArgs): Prisma.PrismaPromise<JsonObject>


    /**
     * Count the number of PlanItems.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PlanItemCountArgs} args - Arguments to filter PlanItems to count.
     * @example
     * // Count the number of PlanItems
     * const count = await prisma.planItem.count({
     *   where: {
     *     // ... the filter for the PlanItems we want to count
     *   }
     * })
    **/
    count<T extends PlanItemCountArgs>(
      args?: Subset<T, PlanItemCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PlanItemCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a PlanItem.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PlanItemAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends PlanItemAggregateArgs>(args: Subset<T, PlanItemAggregateArgs>): Prisma.PrismaPromise<GetPlanItemAggregateType<T>>

    /**
     * Group by PlanItem.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PlanItemGroupByArgs} args - Group by arguments.
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
      T extends PlanItemGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PlanItemGroupByArgs['orderBy'] }
        : { orderBy?: PlanItemGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, PlanItemGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPlanItemGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the PlanItem model
   */
  readonly fields: PlanItemFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for PlanItem.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PlanItemClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    category<T extends PlanItem$categoryArgs<ExtArgs> = {}>(args?: Subset<T, PlanItem$categoryArgs<ExtArgs>>): Prisma__CategoryClient<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the PlanItem model
   */
  interface PlanItemFieldRefs {
    readonly id: FieldRef<"PlanItem", 'String'>
    readonly description: FieldRef<"PlanItem", 'String'>
    readonly amount: FieldRef<"PlanItem", 'Float'>
    readonly notes: FieldRef<"PlanItem", 'String'>
    readonly planType: FieldRef<"PlanItem", 'String'>
    readonly itemType: FieldRef<"PlanItem", 'String'>
    readonly createdAt: FieldRef<"PlanItem", 'DateTime'>
    readonly updatedAt: FieldRef<"PlanItem", 'DateTime'>
    readonly userId: FieldRef<"PlanItem", 'String'>
    readonly categoryId: FieldRef<"PlanItem", 'String'>
  }
    

  // Custom InputTypes
  /**
   * PlanItem findUnique
   */
  export type PlanItemFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PlanItem
     */
    select?: PlanItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PlanItem
     */
    omit?: PlanItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlanItemInclude<ExtArgs> | null
    /**
     * Filter, which PlanItem to fetch.
     */
    where: PlanItemWhereUniqueInput
  }

  /**
   * PlanItem findUniqueOrThrow
   */
  export type PlanItemFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PlanItem
     */
    select?: PlanItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PlanItem
     */
    omit?: PlanItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlanItemInclude<ExtArgs> | null
    /**
     * Filter, which PlanItem to fetch.
     */
    where: PlanItemWhereUniqueInput
  }

  /**
   * PlanItem findFirst
   */
  export type PlanItemFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PlanItem
     */
    select?: PlanItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PlanItem
     */
    omit?: PlanItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlanItemInclude<ExtArgs> | null
    /**
     * Filter, which PlanItem to fetch.
     */
    where?: PlanItemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PlanItems to fetch.
     */
    orderBy?: PlanItemOrderByWithRelationInput | PlanItemOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for PlanItems.
     */
    cursor?: PlanItemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PlanItems from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PlanItems.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PlanItems.
     */
    distinct?: PlanItemScalarFieldEnum | PlanItemScalarFieldEnum[]
  }

  /**
   * PlanItem findFirstOrThrow
   */
  export type PlanItemFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PlanItem
     */
    select?: PlanItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PlanItem
     */
    omit?: PlanItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlanItemInclude<ExtArgs> | null
    /**
     * Filter, which PlanItem to fetch.
     */
    where?: PlanItemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PlanItems to fetch.
     */
    orderBy?: PlanItemOrderByWithRelationInput | PlanItemOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for PlanItems.
     */
    cursor?: PlanItemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PlanItems from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PlanItems.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PlanItems.
     */
    distinct?: PlanItemScalarFieldEnum | PlanItemScalarFieldEnum[]
  }

  /**
   * PlanItem findMany
   */
  export type PlanItemFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PlanItem
     */
    select?: PlanItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PlanItem
     */
    omit?: PlanItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlanItemInclude<ExtArgs> | null
    /**
     * Filter, which PlanItems to fetch.
     */
    where?: PlanItemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PlanItems to fetch.
     */
    orderBy?: PlanItemOrderByWithRelationInput | PlanItemOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing PlanItems.
     */
    cursor?: PlanItemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PlanItems from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PlanItems.
     */
    skip?: number
    distinct?: PlanItemScalarFieldEnum | PlanItemScalarFieldEnum[]
  }

  /**
   * PlanItem create
   */
  export type PlanItemCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PlanItem
     */
    select?: PlanItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PlanItem
     */
    omit?: PlanItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlanItemInclude<ExtArgs> | null
    /**
     * The data needed to create a PlanItem.
     */
    data: XOR<PlanItemCreateInput, PlanItemUncheckedCreateInput>
  }

  /**
   * PlanItem createMany
   */
  export type PlanItemCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many PlanItems.
     */
    data: PlanItemCreateManyInput | PlanItemCreateManyInput[]
  }

  /**
   * PlanItem update
   */
  export type PlanItemUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PlanItem
     */
    select?: PlanItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PlanItem
     */
    omit?: PlanItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlanItemInclude<ExtArgs> | null
    /**
     * The data needed to update a PlanItem.
     */
    data: XOR<PlanItemUpdateInput, PlanItemUncheckedUpdateInput>
    /**
     * Choose, which PlanItem to update.
     */
    where: PlanItemWhereUniqueInput
  }

  /**
   * PlanItem updateMany
   */
  export type PlanItemUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update PlanItems.
     */
    data: XOR<PlanItemUpdateManyMutationInput, PlanItemUncheckedUpdateManyInput>
    /**
     * Filter which PlanItems to update
     */
    where?: PlanItemWhereInput
    /**
     * Limit how many PlanItems to update.
     */
    limit?: number
  }

  /**
   * PlanItem upsert
   */
  export type PlanItemUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PlanItem
     */
    select?: PlanItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PlanItem
     */
    omit?: PlanItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlanItemInclude<ExtArgs> | null
    /**
     * The filter to search for the PlanItem to update in case it exists.
     */
    where: PlanItemWhereUniqueInput
    /**
     * In case the PlanItem found by the `where` argument doesn't exist, create a new PlanItem with this data.
     */
    create: XOR<PlanItemCreateInput, PlanItemUncheckedCreateInput>
    /**
     * In case the PlanItem was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PlanItemUpdateInput, PlanItemUncheckedUpdateInput>
  }

  /**
   * PlanItem delete
   */
  export type PlanItemDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PlanItem
     */
    select?: PlanItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PlanItem
     */
    omit?: PlanItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlanItemInclude<ExtArgs> | null
    /**
     * Filter which PlanItem to delete.
     */
    where: PlanItemWhereUniqueInput
  }

  /**
   * PlanItem deleteMany
   */
  export type PlanItemDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which PlanItems to delete
     */
    where?: PlanItemWhereInput
    /**
     * Limit how many PlanItems to delete.
     */
    limit?: number
  }

  /**
   * PlanItem findRaw
   */
  export type PlanItemFindRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The query predicate filter. If unspecified, then all documents in the collection will match the predicate. ${@link https://docs.mongodb.com/manual/reference/operator/query MongoDB Docs}.
     */
    filter?: InputJsonValue
    /**
     * Additional options to pass to the `find` command ${@link https://docs.mongodb.com/manual/reference/command/find/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }

  /**
   * PlanItem aggregateRaw
   */
  export type PlanItemAggregateRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * An array of aggregation stages to process and transform the document stream via the aggregation pipeline. ${@link https://docs.mongodb.com/manual/reference/operator/aggregation-pipeline MongoDB Docs}.
     */
    pipeline?: InputJsonValue[]
    /**
     * Additional options to pass to the `aggregate` command ${@link https://docs.mongodb.com/manual/reference/command/aggregate/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }

  /**
   * PlanItem.category
   */
  export type PlanItem$categoryArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Category
     */
    omit?: CategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryInclude<ExtArgs> | null
    where?: CategoryWhereInput
  }

  /**
   * PlanItem without action
   */
  export type PlanItemDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PlanItem
     */
    select?: PlanItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PlanItem
     */
    omit?: PlanItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlanItemInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const UserScalarFieldEnum: {
    id: 'id',
    email: 'email',
    password: 'password',
    firstName: 'firstName',
    lastName: 'lastName',
    profileImageUrl: 'profileImageUrl',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    currency: 'currency',
    symbolPosition: 'symbolPosition',
    decimalPlaces: 'decimalPlaces',
    thousandsSeparator: 'thousandsSeparator',
    decimalSeparator: 'decimalSeparator',
    hideCents: 'hideCents',
    roundToNearest: 'roundToNearest',
    weekStartDay: 'weekStartDay',
    notifyLowBalance: 'notifyLowBalance',
    notifyBillsDue: 'notifyBillsDue',
    notifyGoalReached: 'notifyGoalReached',
    notifyBudgetExceeded: 'notifyBudgetExceeded',
    theme: 'theme'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const TransactionScalarFieldEnum: {
    id: 'id',
    amount: 'amount',
    description: 'description',
    date: 'date',
    notes: 'notes',
    type: 'type',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    userId: 'userId',
    categoryId: 'categoryId',
    billId: 'billId'
  };

  export type TransactionScalarFieldEnum = (typeof TransactionScalarFieldEnum)[keyof typeof TransactionScalarFieldEnum]


  export const CategoryScalarFieldEnum: {
    id: 'id',
    name: 'name',
    description: 'description',
    color: 'color',
    icon: 'icon',
    type: 'type',
    isDefault: 'isDefault',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    userId: 'userId'
  };

  export type CategoryScalarFieldEnum = (typeof CategoryScalarFieldEnum)[keyof typeof CategoryScalarFieldEnum]


  export const BillScalarFieldEnum: {
    id: 'id',
    name: 'name',
    amount: 'amount',
    dueDate: 'dueDate',
    frequency: 'frequency',
    autopay: 'autopay',
    notes: 'notes',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    userId: 'userId',
    categoryId: 'categoryId'
  };

  export type BillScalarFieldEnum = (typeof BillScalarFieldEnum)[keyof typeof BillScalarFieldEnum]


  export const BudgetScalarFieldEnum: {
    id: 'id',
    name: 'name',
    description: 'description',
    amount: 'amount',
    startDate: 'startDate',
    endDate: 'endDate',
    type: 'type',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    userId: 'userId'
  };

  export type BudgetScalarFieldEnum = (typeof BudgetScalarFieldEnum)[keyof typeof BudgetScalarFieldEnum]


  export const CategoryAllocationScalarFieldEnum: {
    id: 'id',
    amount: 'amount',
    budgetId: 'budgetId',
    categoryId: 'categoryId'
  };

  export type CategoryAllocationScalarFieldEnum = (typeof CategoryAllocationScalarFieldEnum)[keyof typeof CategoryAllocationScalarFieldEnum]


  export const SavingsGoalScalarFieldEnum: {
    id: 'id',
    name: 'name',
    targetAmount: 'targetAmount',
    currentAmount: 'currentAmount',
    targetDate: 'targetDate',
    completed: 'completed',
    notes: 'notes',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    userId: 'userId'
  };

  export type SavingsGoalScalarFieldEnum = (typeof SavingsGoalScalarFieldEnum)[keyof typeof SavingsGoalScalarFieldEnum]


  export const PlanItemScalarFieldEnum: {
    id: 'id',
    description: 'description',
    amount: 'amount',
    notes: 'notes',
    planType: 'planType',
    itemType: 'itemType',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    userId: 'userId',
    categoryId: 'categoryId'
  };

  export type PlanItemScalarFieldEnum = (typeof PlanItemScalarFieldEnum)[keyof typeof PlanItemScalarFieldEnum]


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
   * Reference to a field of type 'SymbolPosition'
   */
  export type EnumSymbolPositionFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'SymbolPosition'>
    


  /**
   * Reference to a field of type 'SymbolPosition[]'
   */
  export type ListEnumSymbolPositionFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'SymbolPosition[]'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'RoundingOption'
   */
  export type EnumRoundingOptionFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'RoundingOption'>
    


  /**
   * Reference to a field of type 'RoundingOption[]'
   */
  export type ListEnumRoundingOptionFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'RoundingOption[]'>
    


  /**
   * Reference to a field of type 'WeekDay'
   */
  export type EnumWeekDayFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'WeekDay'>
    


  /**
   * Reference to a field of type 'WeekDay[]'
   */
  export type ListEnumWeekDayFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'WeekDay[]'>
    


  /**
   * Reference to a field of type 'Theme'
   */
  export type EnumThemeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Theme'>
    


  /**
   * Reference to a field of type 'Theme[]'
   */
  export type ListEnumThemeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Theme[]'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    


  /**
   * Reference to a field of type 'TransactionType'
   */
  export type EnumTransactionTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'TransactionType'>
    


  /**
   * Reference to a field of type 'TransactionType[]'
   */
  export type ListEnumTransactionTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'TransactionType[]'>
    


  /**
   * Reference to a field of type 'CategoryType'
   */
  export type EnumCategoryTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'CategoryType'>
    


  /**
   * Reference to a field of type 'CategoryType[]'
   */
  export type ListEnumCategoryTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'CategoryType[]'>
    


  /**
   * Reference to a field of type 'BillFrequency'
   */
  export type EnumBillFrequencyFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'BillFrequency'>
    


  /**
   * Reference to a field of type 'BillFrequency[]'
   */
  export type ListEnumBillFrequencyFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'BillFrequency[]'>
    


  /**
   * Reference to a field of type 'BudgetTimeframe'
   */
  export type EnumBudgetTimeframeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'BudgetTimeframe'>
    


  /**
   * Reference to a field of type 'BudgetTimeframe[]'
   */
  export type ListEnumBudgetTimeframeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'BudgetTimeframe[]'>
    
  /**
   * Deep Input Types
   */


  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    id?: StringFilter<"User"> | string
    email?: StringFilter<"User"> | string
    password?: StringFilter<"User"> | string
    firstName?: StringNullableFilter<"User"> | string | null
    lastName?: StringNullableFilter<"User"> | string | null
    profileImageUrl?: StringNullableFilter<"User"> | string | null
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    currency?: StringFilter<"User"> | string
    symbolPosition?: EnumSymbolPositionFilter<"User"> | $Enums.SymbolPosition
    decimalPlaces?: IntFilter<"User"> | number
    thousandsSeparator?: StringFilter<"User"> | string
    decimalSeparator?: StringFilter<"User"> | string
    hideCents?: BoolFilter<"User"> | boolean
    roundToNearest?: EnumRoundingOptionFilter<"User"> | $Enums.RoundingOption
    weekStartDay?: EnumWeekDayFilter<"User"> | $Enums.WeekDay
    notifyLowBalance?: BoolFilter<"User"> | boolean
    notifyBillsDue?: BoolFilter<"User"> | boolean
    notifyGoalReached?: BoolFilter<"User"> | boolean
    notifyBudgetExceeded?: BoolFilter<"User"> | boolean
    theme?: EnumThemeFilter<"User"> | $Enums.Theme
    budgets?: BudgetListRelationFilter
    transactions?: TransactionListRelationFilter
    categories?: CategoryListRelationFilter
    bills?: BillListRelationFilter
    savingsGoals?: SavingsGoalListRelationFilter
    planItems?: PlanItemListRelationFilter
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    email?: SortOrder
    password?: SortOrder
    firstName?: SortOrder
    lastName?: SortOrder
    profileImageUrl?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    currency?: SortOrder
    symbolPosition?: SortOrder
    decimalPlaces?: SortOrder
    thousandsSeparator?: SortOrder
    decimalSeparator?: SortOrder
    hideCents?: SortOrder
    roundToNearest?: SortOrder
    weekStartDay?: SortOrder
    notifyLowBalance?: SortOrder
    notifyBillsDue?: SortOrder
    notifyGoalReached?: SortOrder
    notifyBudgetExceeded?: SortOrder
    theme?: SortOrder
    budgets?: BudgetOrderByRelationAggregateInput
    transactions?: TransactionOrderByRelationAggregateInput
    categories?: CategoryOrderByRelationAggregateInput
    bills?: BillOrderByRelationAggregateInput
    savingsGoals?: SavingsGoalOrderByRelationAggregateInput
    planItems?: PlanItemOrderByRelationAggregateInput
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    email?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    password?: StringFilter<"User"> | string
    firstName?: StringNullableFilter<"User"> | string | null
    lastName?: StringNullableFilter<"User"> | string | null
    profileImageUrl?: StringNullableFilter<"User"> | string | null
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    currency?: StringFilter<"User"> | string
    symbolPosition?: EnumSymbolPositionFilter<"User"> | $Enums.SymbolPosition
    decimalPlaces?: IntFilter<"User"> | number
    thousandsSeparator?: StringFilter<"User"> | string
    decimalSeparator?: StringFilter<"User"> | string
    hideCents?: BoolFilter<"User"> | boolean
    roundToNearest?: EnumRoundingOptionFilter<"User"> | $Enums.RoundingOption
    weekStartDay?: EnumWeekDayFilter<"User"> | $Enums.WeekDay
    notifyLowBalance?: BoolFilter<"User"> | boolean
    notifyBillsDue?: BoolFilter<"User"> | boolean
    notifyGoalReached?: BoolFilter<"User"> | boolean
    notifyBudgetExceeded?: BoolFilter<"User"> | boolean
    theme?: EnumThemeFilter<"User"> | $Enums.Theme
    budgets?: BudgetListRelationFilter
    transactions?: TransactionListRelationFilter
    categories?: CategoryListRelationFilter
    bills?: BillListRelationFilter
    savingsGoals?: SavingsGoalListRelationFilter
    planItems?: PlanItemListRelationFilter
  }, "id" | "email">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    email?: SortOrder
    password?: SortOrder
    firstName?: SortOrder
    lastName?: SortOrder
    profileImageUrl?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    currency?: SortOrder
    symbolPosition?: SortOrder
    decimalPlaces?: SortOrder
    thousandsSeparator?: SortOrder
    decimalSeparator?: SortOrder
    hideCents?: SortOrder
    roundToNearest?: SortOrder
    weekStartDay?: SortOrder
    notifyLowBalance?: SortOrder
    notifyBillsDue?: SortOrder
    notifyGoalReached?: SortOrder
    notifyBudgetExceeded?: SortOrder
    theme?: SortOrder
    _count?: UserCountOrderByAggregateInput
    _avg?: UserAvgOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
    _sum?: UserSumOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    OR?: UserScalarWhereWithAggregatesInput[]
    NOT?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"User"> | string
    email?: StringWithAggregatesFilter<"User"> | string
    password?: StringWithAggregatesFilter<"User"> | string
    firstName?: StringNullableWithAggregatesFilter<"User"> | string | null
    lastName?: StringNullableWithAggregatesFilter<"User"> | string | null
    profileImageUrl?: StringNullableWithAggregatesFilter<"User"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
    currency?: StringWithAggregatesFilter<"User"> | string
    symbolPosition?: EnumSymbolPositionWithAggregatesFilter<"User"> | $Enums.SymbolPosition
    decimalPlaces?: IntWithAggregatesFilter<"User"> | number
    thousandsSeparator?: StringWithAggregatesFilter<"User"> | string
    decimalSeparator?: StringWithAggregatesFilter<"User"> | string
    hideCents?: BoolWithAggregatesFilter<"User"> | boolean
    roundToNearest?: EnumRoundingOptionWithAggregatesFilter<"User"> | $Enums.RoundingOption
    weekStartDay?: EnumWeekDayWithAggregatesFilter<"User"> | $Enums.WeekDay
    notifyLowBalance?: BoolWithAggregatesFilter<"User"> | boolean
    notifyBillsDue?: BoolWithAggregatesFilter<"User"> | boolean
    notifyGoalReached?: BoolWithAggregatesFilter<"User"> | boolean
    notifyBudgetExceeded?: BoolWithAggregatesFilter<"User"> | boolean
    theme?: EnumThemeWithAggregatesFilter<"User"> | $Enums.Theme
  }

  export type TransactionWhereInput = {
    AND?: TransactionWhereInput | TransactionWhereInput[]
    OR?: TransactionWhereInput[]
    NOT?: TransactionWhereInput | TransactionWhereInput[]
    id?: StringFilter<"Transaction"> | string
    amount?: FloatFilter<"Transaction"> | number
    description?: StringNullableFilter<"Transaction"> | string | null
    date?: DateTimeFilter<"Transaction"> | Date | string
    notes?: StringNullableFilter<"Transaction"> | string | null
    type?: EnumTransactionTypeFilter<"Transaction"> | $Enums.TransactionType
    createdAt?: DateTimeFilter<"Transaction"> | Date | string
    updatedAt?: DateTimeFilter<"Transaction"> | Date | string
    userId?: StringFilter<"Transaction"> | string
    categoryId?: StringFilter<"Transaction"> | string
    billId?: StringNullableFilter<"Transaction"> | string | null
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    category?: XOR<CategoryScalarRelationFilter, CategoryWhereInput>
    bill?: XOR<BillNullableScalarRelationFilter, BillWhereInput> | null
  }

  export type TransactionOrderByWithRelationInput = {
    id?: SortOrder
    amount?: SortOrder
    description?: SortOrder
    date?: SortOrder
    notes?: SortOrder
    type?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    userId?: SortOrder
    categoryId?: SortOrder
    billId?: SortOrder
    user?: UserOrderByWithRelationInput
    category?: CategoryOrderByWithRelationInput
    bill?: BillOrderByWithRelationInput
  }

  export type TransactionWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: TransactionWhereInput | TransactionWhereInput[]
    OR?: TransactionWhereInput[]
    NOT?: TransactionWhereInput | TransactionWhereInput[]
    amount?: FloatFilter<"Transaction"> | number
    description?: StringNullableFilter<"Transaction"> | string | null
    date?: DateTimeFilter<"Transaction"> | Date | string
    notes?: StringNullableFilter<"Transaction"> | string | null
    type?: EnumTransactionTypeFilter<"Transaction"> | $Enums.TransactionType
    createdAt?: DateTimeFilter<"Transaction"> | Date | string
    updatedAt?: DateTimeFilter<"Transaction"> | Date | string
    userId?: StringFilter<"Transaction"> | string
    categoryId?: StringFilter<"Transaction"> | string
    billId?: StringNullableFilter<"Transaction"> | string | null
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    category?: XOR<CategoryScalarRelationFilter, CategoryWhereInput>
    bill?: XOR<BillNullableScalarRelationFilter, BillWhereInput> | null
  }, "id">

  export type TransactionOrderByWithAggregationInput = {
    id?: SortOrder
    amount?: SortOrder
    description?: SortOrder
    date?: SortOrder
    notes?: SortOrder
    type?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    userId?: SortOrder
    categoryId?: SortOrder
    billId?: SortOrder
    _count?: TransactionCountOrderByAggregateInput
    _avg?: TransactionAvgOrderByAggregateInput
    _max?: TransactionMaxOrderByAggregateInput
    _min?: TransactionMinOrderByAggregateInput
    _sum?: TransactionSumOrderByAggregateInput
  }

  export type TransactionScalarWhereWithAggregatesInput = {
    AND?: TransactionScalarWhereWithAggregatesInput | TransactionScalarWhereWithAggregatesInput[]
    OR?: TransactionScalarWhereWithAggregatesInput[]
    NOT?: TransactionScalarWhereWithAggregatesInput | TransactionScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Transaction"> | string
    amount?: FloatWithAggregatesFilter<"Transaction"> | number
    description?: StringNullableWithAggregatesFilter<"Transaction"> | string | null
    date?: DateTimeWithAggregatesFilter<"Transaction"> | Date | string
    notes?: StringNullableWithAggregatesFilter<"Transaction"> | string | null
    type?: EnumTransactionTypeWithAggregatesFilter<"Transaction"> | $Enums.TransactionType
    createdAt?: DateTimeWithAggregatesFilter<"Transaction"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Transaction"> | Date | string
    userId?: StringWithAggregatesFilter<"Transaction"> | string
    categoryId?: StringWithAggregatesFilter<"Transaction"> | string
    billId?: StringNullableWithAggregatesFilter<"Transaction"> | string | null
  }

  export type CategoryWhereInput = {
    AND?: CategoryWhereInput | CategoryWhereInput[]
    OR?: CategoryWhereInput[]
    NOT?: CategoryWhereInput | CategoryWhereInput[]
    id?: StringFilter<"Category"> | string
    name?: StringFilter<"Category"> | string
    description?: StringNullableFilter<"Category"> | string | null
    color?: StringFilter<"Category"> | string
    icon?: StringFilter<"Category"> | string
    type?: EnumCategoryTypeFilter<"Category"> | $Enums.CategoryType
    isDefault?: BoolFilter<"Category"> | boolean
    createdAt?: DateTimeFilter<"Category"> | Date | string
    updatedAt?: DateTimeFilter<"Category"> | Date | string
    userId?: StringFilter<"Category"> | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    transactions?: TransactionListRelationFilter
    bills?: BillListRelationFilter
    allocations?: CategoryAllocationListRelationFilter
    planItems?: PlanItemListRelationFilter
  }

  export type CategoryOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    color?: SortOrder
    icon?: SortOrder
    type?: SortOrder
    isDefault?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    userId?: SortOrder
    user?: UserOrderByWithRelationInput
    transactions?: TransactionOrderByRelationAggregateInput
    bills?: BillOrderByRelationAggregateInput
    allocations?: CategoryAllocationOrderByRelationAggregateInput
    planItems?: PlanItemOrderByRelationAggregateInput
  }

  export type CategoryWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: CategoryWhereInput | CategoryWhereInput[]
    OR?: CategoryWhereInput[]
    NOT?: CategoryWhereInput | CategoryWhereInput[]
    name?: StringFilter<"Category"> | string
    description?: StringNullableFilter<"Category"> | string | null
    color?: StringFilter<"Category"> | string
    icon?: StringFilter<"Category"> | string
    type?: EnumCategoryTypeFilter<"Category"> | $Enums.CategoryType
    isDefault?: BoolFilter<"Category"> | boolean
    createdAt?: DateTimeFilter<"Category"> | Date | string
    updatedAt?: DateTimeFilter<"Category"> | Date | string
    userId?: StringFilter<"Category"> | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    transactions?: TransactionListRelationFilter
    bills?: BillListRelationFilter
    allocations?: CategoryAllocationListRelationFilter
    planItems?: PlanItemListRelationFilter
  }, "id">

  export type CategoryOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    color?: SortOrder
    icon?: SortOrder
    type?: SortOrder
    isDefault?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    userId?: SortOrder
    _count?: CategoryCountOrderByAggregateInput
    _max?: CategoryMaxOrderByAggregateInput
    _min?: CategoryMinOrderByAggregateInput
  }

  export type CategoryScalarWhereWithAggregatesInput = {
    AND?: CategoryScalarWhereWithAggregatesInput | CategoryScalarWhereWithAggregatesInput[]
    OR?: CategoryScalarWhereWithAggregatesInput[]
    NOT?: CategoryScalarWhereWithAggregatesInput | CategoryScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Category"> | string
    name?: StringWithAggregatesFilter<"Category"> | string
    description?: StringNullableWithAggregatesFilter<"Category"> | string | null
    color?: StringWithAggregatesFilter<"Category"> | string
    icon?: StringWithAggregatesFilter<"Category"> | string
    type?: EnumCategoryTypeWithAggregatesFilter<"Category"> | $Enums.CategoryType
    isDefault?: BoolWithAggregatesFilter<"Category"> | boolean
    createdAt?: DateTimeWithAggregatesFilter<"Category"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Category"> | Date | string
    userId?: StringWithAggregatesFilter<"Category"> | string
  }

  export type BillWhereInput = {
    AND?: BillWhereInput | BillWhereInput[]
    OR?: BillWhereInput[]
    NOT?: BillWhereInput | BillWhereInput[]
    id?: StringFilter<"Bill"> | string
    name?: StringFilter<"Bill"> | string
    amount?: FloatFilter<"Bill"> | number
    dueDate?: DateTimeFilter<"Bill"> | Date | string
    frequency?: EnumBillFrequencyFilter<"Bill"> | $Enums.BillFrequency
    autopay?: BoolFilter<"Bill"> | boolean
    notes?: StringNullableFilter<"Bill"> | string | null
    createdAt?: DateTimeFilter<"Bill"> | Date | string
    updatedAt?: DateTimeFilter<"Bill"> | Date | string
    userId?: StringFilter<"Bill"> | string
    categoryId?: StringFilter<"Bill"> | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    category?: XOR<CategoryScalarRelationFilter, CategoryWhereInput>
    transactions?: TransactionListRelationFilter
  }

  export type BillOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    amount?: SortOrder
    dueDate?: SortOrder
    frequency?: SortOrder
    autopay?: SortOrder
    notes?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    userId?: SortOrder
    categoryId?: SortOrder
    user?: UserOrderByWithRelationInput
    category?: CategoryOrderByWithRelationInput
    transactions?: TransactionOrderByRelationAggregateInput
  }

  export type BillWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: BillWhereInput | BillWhereInput[]
    OR?: BillWhereInput[]
    NOT?: BillWhereInput | BillWhereInput[]
    name?: StringFilter<"Bill"> | string
    amount?: FloatFilter<"Bill"> | number
    dueDate?: DateTimeFilter<"Bill"> | Date | string
    frequency?: EnumBillFrequencyFilter<"Bill"> | $Enums.BillFrequency
    autopay?: BoolFilter<"Bill"> | boolean
    notes?: StringNullableFilter<"Bill"> | string | null
    createdAt?: DateTimeFilter<"Bill"> | Date | string
    updatedAt?: DateTimeFilter<"Bill"> | Date | string
    userId?: StringFilter<"Bill"> | string
    categoryId?: StringFilter<"Bill"> | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    category?: XOR<CategoryScalarRelationFilter, CategoryWhereInput>
    transactions?: TransactionListRelationFilter
  }, "id">

  export type BillOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    amount?: SortOrder
    dueDate?: SortOrder
    frequency?: SortOrder
    autopay?: SortOrder
    notes?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    userId?: SortOrder
    categoryId?: SortOrder
    _count?: BillCountOrderByAggregateInput
    _avg?: BillAvgOrderByAggregateInput
    _max?: BillMaxOrderByAggregateInput
    _min?: BillMinOrderByAggregateInput
    _sum?: BillSumOrderByAggregateInput
  }

  export type BillScalarWhereWithAggregatesInput = {
    AND?: BillScalarWhereWithAggregatesInput | BillScalarWhereWithAggregatesInput[]
    OR?: BillScalarWhereWithAggregatesInput[]
    NOT?: BillScalarWhereWithAggregatesInput | BillScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Bill"> | string
    name?: StringWithAggregatesFilter<"Bill"> | string
    amount?: FloatWithAggregatesFilter<"Bill"> | number
    dueDate?: DateTimeWithAggregatesFilter<"Bill"> | Date | string
    frequency?: EnumBillFrequencyWithAggregatesFilter<"Bill"> | $Enums.BillFrequency
    autopay?: BoolWithAggregatesFilter<"Bill"> | boolean
    notes?: StringNullableWithAggregatesFilter<"Bill"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"Bill"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Bill"> | Date | string
    userId?: StringWithAggregatesFilter<"Bill"> | string
    categoryId?: StringWithAggregatesFilter<"Bill"> | string
  }

  export type BudgetWhereInput = {
    AND?: BudgetWhereInput | BudgetWhereInput[]
    OR?: BudgetWhereInput[]
    NOT?: BudgetWhereInput | BudgetWhereInput[]
    id?: StringFilter<"Budget"> | string
    name?: StringFilter<"Budget"> | string
    description?: StringNullableFilter<"Budget"> | string | null
    amount?: FloatFilter<"Budget"> | number
    startDate?: DateTimeFilter<"Budget"> | Date | string
    endDate?: DateTimeFilter<"Budget"> | Date | string
    type?: EnumBudgetTimeframeFilter<"Budget"> | $Enums.BudgetTimeframe
    createdAt?: DateTimeFilter<"Budget"> | Date | string
    updatedAt?: DateTimeFilter<"Budget"> | Date | string
    userId?: StringFilter<"Budget"> | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    categoryAllocations?: CategoryAllocationListRelationFilter
  }

  export type BudgetOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    amount?: SortOrder
    startDate?: SortOrder
    endDate?: SortOrder
    type?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    userId?: SortOrder
    user?: UserOrderByWithRelationInput
    categoryAllocations?: CategoryAllocationOrderByRelationAggregateInput
  }

  export type BudgetWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: BudgetWhereInput | BudgetWhereInput[]
    OR?: BudgetWhereInput[]
    NOT?: BudgetWhereInput | BudgetWhereInput[]
    name?: StringFilter<"Budget"> | string
    description?: StringNullableFilter<"Budget"> | string | null
    amount?: FloatFilter<"Budget"> | number
    startDate?: DateTimeFilter<"Budget"> | Date | string
    endDate?: DateTimeFilter<"Budget"> | Date | string
    type?: EnumBudgetTimeframeFilter<"Budget"> | $Enums.BudgetTimeframe
    createdAt?: DateTimeFilter<"Budget"> | Date | string
    updatedAt?: DateTimeFilter<"Budget"> | Date | string
    userId?: StringFilter<"Budget"> | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    categoryAllocations?: CategoryAllocationListRelationFilter
  }, "id">

  export type BudgetOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    amount?: SortOrder
    startDate?: SortOrder
    endDate?: SortOrder
    type?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    userId?: SortOrder
    _count?: BudgetCountOrderByAggregateInput
    _avg?: BudgetAvgOrderByAggregateInput
    _max?: BudgetMaxOrderByAggregateInput
    _min?: BudgetMinOrderByAggregateInput
    _sum?: BudgetSumOrderByAggregateInput
  }

  export type BudgetScalarWhereWithAggregatesInput = {
    AND?: BudgetScalarWhereWithAggregatesInput | BudgetScalarWhereWithAggregatesInput[]
    OR?: BudgetScalarWhereWithAggregatesInput[]
    NOT?: BudgetScalarWhereWithAggregatesInput | BudgetScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Budget"> | string
    name?: StringWithAggregatesFilter<"Budget"> | string
    description?: StringNullableWithAggregatesFilter<"Budget"> | string | null
    amount?: FloatWithAggregatesFilter<"Budget"> | number
    startDate?: DateTimeWithAggregatesFilter<"Budget"> | Date | string
    endDate?: DateTimeWithAggregatesFilter<"Budget"> | Date | string
    type?: EnumBudgetTimeframeWithAggregatesFilter<"Budget"> | $Enums.BudgetTimeframe
    createdAt?: DateTimeWithAggregatesFilter<"Budget"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Budget"> | Date | string
    userId?: StringWithAggregatesFilter<"Budget"> | string
  }

  export type CategoryAllocationWhereInput = {
    AND?: CategoryAllocationWhereInput | CategoryAllocationWhereInput[]
    OR?: CategoryAllocationWhereInput[]
    NOT?: CategoryAllocationWhereInput | CategoryAllocationWhereInput[]
    id?: StringFilter<"CategoryAllocation"> | string
    amount?: FloatFilter<"CategoryAllocation"> | number
    budgetId?: StringFilter<"CategoryAllocation"> | string
    categoryId?: StringFilter<"CategoryAllocation"> | string
    budget?: XOR<BudgetScalarRelationFilter, BudgetWhereInput>
    category?: XOR<CategoryScalarRelationFilter, CategoryWhereInput>
  }

  export type CategoryAllocationOrderByWithRelationInput = {
    id?: SortOrder
    amount?: SortOrder
    budgetId?: SortOrder
    categoryId?: SortOrder
    budget?: BudgetOrderByWithRelationInput
    category?: CategoryOrderByWithRelationInput
  }

  export type CategoryAllocationWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: CategoryAllocationWhereInput | CategoryAllocationWhereInput[]
    OR?: CategoryAllocationWhereInput[]
    NOT?: CategoryAllocationWhereInput | CategoryAllocationWhereInput[]
    amount?: FloatFilter<"CategoryAllocation"> | number
    budgetId?: StringFilter<"CategoryAllocation"> | string
    categoryId?: StringFilter<"CategoryAllocation"> | string
    budget?: XOR<BudgetScalarRelationFilter, BudgetWhereInput>
    category?: XOR<CategoryScalarRelationFilter, CategoryWhereInput>
  }, "id">

  export type CategoryAllocationOrderByWithAggregationInput = {
    id?: SortOrder
    amount?: SortOrder
    budgetId?: SortOrder
    categoryId?: SortOrder
    _count?: CategoryAllocationCountOrderByAggregateInput
    _avg?: CategoryAllocationAvgOrderByAggregateInput
    _max?: CategoryAllocationMaxOrderByAggregateInput
    _min?: CategoryAllocationMinOrderByAggregateInput
    _sum?: CategoryAllocationSumOrderByAggregateInput
  }

  export type CategoryAllocationScalarWhereWithAggregatesInput = {
    AND?: CategoryAllocationScalarWhereWithAggregatesInput | CategoryAllocationScalarWhereWithAggregatesInput[]
    OR?: CategoryAllocationScalarWhereWithAggregatesInput[]
    NOT?: CategoryAllocationScalarWhereWithAggregatesInput | CategoryAllocationScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"CategoryAllocation"> | string
    amount?: FloatWithAggregatesFilter<"CategoryAllocation"> | number
    budgetId?: StringWithAggregatesFilter<"CategoryAllocation"> | string
    categoryId?: StringWithAggregatesFilter<"CategoryAllocation"> | string
  }

  export type SavingsGoalWhereInput = {
    AND?: SavingsGoalWhereInput | SavingsGoalWhereInput[]
    OR?: SavingsGoalWhereInput[]
    NOT?: SavingsGoalWhereInput | SavingsGoalWhereInput[]
    id?: StringFilter<"SavingsGoal"> | string
    name?: StringFilter<"SavingsGoal"> | string
    targetAmount?: FloatFilter<"SavingsGoal"> | number
    currentAmount?: FloatFilter<"SavingsGoal"> | number
    targetDate?: DateTimeNullableFilter<"SavingsGoal"> | Date | string | null
    completed?: BoolFilter<"SavingsGoal"> | boolean
    notes?: StringNullableFilter<"SavingsGoal"> | string | null
    createdAt?: DateTimeFilter<"SavingsGoal"> | Date | string
    updatedAt?: DateTimeFilter<"SavingsGoal"> | Date | string
    userId?: StringFilter<"SavingsGoal"> | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type SavingsGoalOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    targetAmount?: SortOrder
    currentAmount?: SortOrder
    targetDate?: SortOrder
    completed?: SortOrder
    notes?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    userId?: SortOrder
    user?: UserOrderByWithRelationInput
  }

  export type SavingsGoalWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: SavingsGoalWhereInput | SavingsGoalWhereInput[]
    OR?: SavingsGoalWhereInput[]
    NOT?: SavingsGoalWhereInput | SavingsGoalWhereInput[]
    name?: StringFilter<"SavingsGoal"> | string
    targetAmount?: FloatFilter<"SavingsGoal"> | number
    currentAmount?: FloatFilter<"SavingsGoal"> | number
    targetDate?: DateTimeNullableFilter<"SavingsGoal"> | Date | string | null
    completed?: BoolFilter<"SavingsGoal"> | boolean
    notes?: StringNullableFilter<"SavingsGoal"> | string | null
    createdAt?: DateTimeFilter<"SavingsGoal"> | Date | string
    updatedAt?: DateTimeFilter<"SavingsGoal"> | Date | string
    userId?: StringFilter<"SavingsGoal"> | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id">

  export type SavingsGoalOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    targetAmount?: SortOrder
    currentAmount?: SortOrder
    targetDate?: SortOrder
    completed?: SortOrder
    notes?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    userId?: SortOrder
    _count?: SavingsGoalCountOrderByAggregateInput
    _avg?: SavingsGoalAvgOrderByAggregateInput
    _max?: SavingsGoalMaxOrderByAggregateInput
    _min?: SavingsGoalMinOrderByAggregateInput
    _sum?: SavingsGoalSumOrderByAggregateInput
  }

  export type SavingsGoalScalarWhereWithAggregatesInput = {
    AND?: SavingsGoalScalarWhereWithAggregatesInput | SavingsGoalScalarWhereWithAggregatesInput[]
    OR?: SavingsGoalScalarWhereWithAggregatesInput[]
    NOT?: SavingsGoalScalarWhereWithAggregatesInput | SavingsGoalScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"SavingsGoal"> | string
    name?: StringWithAggregatesFilter<"SavingsGoal"> | string
    targetAmount?: FloatWithAggregatesFilter<"SavingsGoal"> | number
    currentAmount?: FloatWithAggregatesFilter<"SavingsGoal"> | number
    targetDate?: DateTimeNullableWithAggregatesFilter<"SavingsGoal"> | Date | string | null
    completed?: BoolWithAggregatesFilter<"SavingsGoal"> | boolean
    notes?: StringNullableWithAggregatesFilter<"SavingsGoal"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"SavingsGoal"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"SavingsGoal"> | Date | string
    userId?: StringWithAggregatesFilter<"SavingsGoal"> | string
  }

  export type PlanItemWhereInput = {
    AND?: PlanItemWhereInput | PlanItemWhereInput[]
    OR?: PlanItemWhereInput[]
    NOT?: PlanItemWhereInput | PlanItemWhereInput[]
    id?: StringFilter<"PlanItem"> | string
    description?: StringFilter<"PlanItem"> | string
    amount?: FloatFilter<"PlanItem"> | number
    notes?: StringNullableFilter<"PlanItem"> | string | null
    planType?: StringFilter<"PlanItem"> | string
    itemType?: StringFilter<"PlanItem"> | string
    createdAt?: DateTimeFilter<"PlanItem"> | Date | string
    updatedAt?: DateTimeFilter<"PlanItem"> | Date | string
    userId?: StringFilter<"PlanItem"> | string
    categoryId?: StringNullableFilter<"PlanItem"> | string | null
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    category?: XOR<CategoryNullableScalarRelationFilter, CategoryWhereInput> | null
  }

  export type PlanItemOrderByWithRelationInput = {
    id?: SortOrder
    description?: SortOrder
    amount?: SortOrder
    notes?: SortOrder
    planType?: SortOrder
    itemType?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    userId?: SortOrder
    categoryId?: SortOrder
    user?: UserOrderByWithRelationInput
    category?: CategoryOrderByWithRelationInput
  }

  export type PlanItemWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: PlanItemWhereInput | PlanItemWhereInput[]
    OR?: PlanItemWhereInput[]
    NOT?: PlanItemWhereInput | PlanItemWhereInput[]
    description?: StringFilter<"PlanItem"> | string
    amount?: FloatFilter<"PlanItem"> | number
    notes?: StringNullableFilter<"PlanItem"> | string | null
    planType?: StringFilter<"PlanItem"> | string
    itemType?: StringFilter<"PlanItem"> | string
    createdAt?: DateTimeFilter<"PlanItem"> | Date | string
    updatedAt?: DateTimeFilter<"PlanItem"> | Date | string
    userId?: StringFilter<"PlanItem"> | string
    categoryId?: StringNullableFilter<"PlanItem"> | string | null
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    category?: XOR<CategoryNullableScalarRelationFilter, CategoryWhereInput> | null
  }, "id">

  export type PlanItemOrderByWithAggregationInput = {
    id?: SortOrder
    description?: SortOrder
    amount?: SortOrder
    notes?: SortOrder
    planType?: SortOrder
    itemType?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    userId?: SortOrder
    categoryId?: SortOrder
    _count?: PlanItemCountOrderByAggregateInput
    _avg?: PlanItemAvgOrderByAggregateInput
    _max?: PlanItemMaxOrderByAggregateInput
    _min?: PlanItemMinOrderByAggregateInput
    _sum?: PlanItemSumOrderByAggregateInput
  }

  export type PlanItemScalarWhereWithAggregatesInput = {
    AND?: PlanItemScalarWhereWithAggregatesInput | PlanItemScalarWhereWithAggregatesInput[]
    OR?: PlanItemScalarWhereWithAggregatesInput[]
    NOT?: PlanItemScalarWhereWithAggregatesInput | PlanItemScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"PlanItem"> | string
    description?: StringWithAggregatesFilter<"PlanItem"> | string
    amount?: FloatWithAggregatesFilter<"PlanItem"> | number
    notes?: StringNullableWithAggregatesFilter<"PlanItem"> | string | null
    planType?: StringWithAggregatesFilter<"PlanItem"> | string
    itemType?: StringWithAggregatesFilter<"PlanItem"> | string
    createdAt?: DateTimeWithAggregatesFilter<"PlanItem"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"PlanItem"> | Date | string
    userId?: StringWithAggregatesFilter<"PlanItem"> | string
    categoryId?: StringNullableWithAggregatesFilter<"PlanItem"> | string | null
  }

  export type UserCreateInput = {
    id?: string
    email: string
    password: string
    firstName?: string | null
    lastName?: string | null
    profileImageUrl?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    currency?: string
    symbolPosition?: $Enums.SymbolPosition
    decimalPlaces?: number
    thousandsSeparator?: string
    decimalSeparator?: string
    hideCents?: boolean
    roundToNearest?: $Enums.RoundingOption
    weekStartDay?: $Enums.WeekDay
    notifyLowBalance?: boolean
    notifyBillsDue?: boolean
    notifyGoalReached?: boolean
    notifyBudgetExceeded?: boolean
    theme?: $Enums.Theme
    budgets?: BudgetCreateNestedManyWithoutUserInput
    transactions?: TransactionCreateNestedManyWithoutUserInput
    categories?: CategoryCreateNestedManyWithoutUserInput
    bills?: BillCreateNestedManyWithoutUserInput
    savingsGoals?: SavingsGoalCreateNestedManyWithoutUserInput
    planItems?: PlanItemCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateInput = {
    id?: string
    email: string
    password: string
    firstName?: string | null
    lastName?: string | null
    profileImageUrl?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    currency?: string
    symbolPosition?: $Enums.SymbolPosition
    decimalPlaces?: number
    thousandsSeparator?: string
    decimalSeparator?: string
    hideCents?: boolean
    roundToNearest?: $Enums.RoundingOption
    weekStartDay?: $Enums.WeekDay
    notifyLowBalance?: boolean
    notifyBillsDue?: boolean
    notifyGoalReached?: boolean
    notifyBudgetExceeded?: boolean
    theme?: $Enums.Theme
    budgets?: BudgetUncheckedCreateNestedManyWithoutUserInput
    transactions?: TransactionUncheckedCreateNestedManyWithoutUserInput
    categories?: CategoryUncheckedCreateNestedManyWithoutUserInput
    bills?: BillUncheckedCreateNestedManyWithoutUserInput
    savingsGoals?: SavingsGoalUncheckedCreateNestedManyWithoutUserInput
    planItems?: PlanItemUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserUpdateInput = {
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    firstName?: NullableStringFieldUpdateOperationsInput | string | null
    lastName?: NullableStringFieldUpdateOperationsInput | string | null
    profileImageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    currency?: StringFieldUpdateOperationsInput | string
    symbolPosition?: EnumSymbolPositionFieldUpdateOperationsInput | $Enums.SymbolPosition
    decimalPlaces?: IntFieldUpdateOperationsInput | number
    thousandsSeparator?: StringFieldUpdateOperationsInput | string
    decimalSeparator?: StringFieldUpdateOperationsInput | string
    hideCents?: BoolFieldUpdateOperationsInput | boolean
    roundToNearest?: EnumRoundingOptionFieldUpdateOperationsInput | $Enums.RoundingOption
    weekStartDay?: EnumWeekDayFieldUpdateOperationsInput | $Enums.WeekDay
    notifyLowBalance?: BoolFieldUpdateOperationsInput | boolean
    notifyBillsDue?: BoolFieldUpdateOperationsInput | boolean
    notifyGoalReached?: BoolFieldUpdateOperationsInput | boolean
    notifyBudgetExceeded?: BoolFieldUpdateOperationsInput | boolean
    theme?: EnumThemeFieldUpdateOperationsInput | $Enums.Theme
    budgets?: BudgetUpdateManyWithoutUserNestedInput
    transactions?: TransactionUpdateManyWithoutUserNestedInput
    categories?: CategoryUpdateManyWithoutUserNestedInput
    bills?: BillUpdateManyWithoutUserNestedInput
    savingsGoals?: SavingsGoalUpdateManyWithoutUserNestedInput
    planItems?: PlanItemUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateInput = {
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    firstName?: NullableStringFieldUpdateOperationsInput | string | null
    lastName?: NullableStringFieldUpdateOperationsInput | string | null
    profileImageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    currency?: StringFieldUpdateOperationsInput | string
    symbolPosition?: EnumSymbolPositionFieldUpdateOperationsInput | $Enums.SymbolPosition
    decimalPlaces?: IntFieldUpdateOperationsInput | number
    thousandsSeparator?: StringFieldUpdateOperationsInput | string
    decimalSeparator?: StringFieldUpdateOperationsInput | string
    hideCents?: BoolFieldUpdateOperationsInput | boolean
    roundToNearest?: EnumRoundingOptionFieldUpdateOperationsInput | $Enums.RoundingOption
    weekStartDay?: EnumWeekDayFieldUpdateOperationsInput | $Enums.WeekDay
    notifyLowBalance?: BoolFieldUpdateOperationsInput | boolean
    notifyBillsDue?: BoolFieldUpdateOperationsInput | boolean
    notifyGoalReached?: BoolFieldUpdateOperationsInput | boolean
    notifyBudgetExceeded?: BoolFieldUpdateOperationsInput | boolean
    theme?: EnumThemeFieldUpdateOperationsInput | $Enums.Theme
    budgets?: BudgetUncheckedUpdateManyWithoutUserNestedInput
    transactions?: TransactionUncheckedUpdateManyWithoutUserNestedInput
    categories?: CategoryUncheckedUpdateManyWithoutUserNestedInput
    bills?: BillUncheckedUpdateManyWithoutUserNestedInput
    savingsGoals?: SavingsGoalUncheckedUpdateManyWithoutUserNestedInput
    planItems?: PlanItemUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateManyInput = {
    id?: string
    email: string
    password: string
    firstName?: string | null
    lastName?: string | null
    profileImageUrl?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    currency?: string
    symbolPosition?: $Enums.SymbolPosition
    decimalPlaces?: number
    thousandsSeparator?: string
    decimalSeparator?: string
    hideCents?: boolean
    roundToNearest?: $Enums.RoundingOption
    weekStartDay?: $Enums.WeekDay
    notifyLowBalance?: boolean
    notifyBillsDue?: boolean
    notifyGoalReached?: boolean
    notifyBudgetExceeded?: boolean
    theme?: $Enums.Theme
  }

  export type UserUpdateManyMutationInput = {
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    firstName?: NullableStringFieldUpdateOperationsInput | string | null
    lastName?: NullableStringFieldUpdateOperationsInput | string | null
    profileImageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    currency?: StringFieldUpdateOperationsInput | string
    symbolPosition?: EnumSymbolPositionFieldUpdateOperationsInput | $Enums.SymbolPosition
    decimalPlaces?: IntFieldUpdateOperationsInput | number
    thousandsSeparator?: StringFieldUpdateOperationsInput | string
    decimalSeparator?: StringFieldUpdateOperationsInput | string
    hideCents?: BoolFieldUpdateOperationsInput | boolean
    roundToNearest?: EnumRoundingOptionFieldUpdateOperationsInput | $Enums.RoundingOption
    weekStartDay?: EnumWeekDayFieldUpdateOperationsInput | $Enums.WeekDay
    notifyLowBalance?: BoolFieldUpdateOperationsInput | boolean
    notifyBillsDue?: BoolFieldUpdateOperationsInput | boolean
    notifyGoalReached?: BoolFieldUpdateOperationsInput | boolean
    notifyBudgetExceeded?: BoolFieldUpdateOperationsInput | boolean
    theme?: EnumThemeFieldUpdateOperationsInput | $Enums.Theme
  }

  export type UserUncheckedUpdateManyInput = {
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    firstName?: NullableStringFieldUpdateOperationsInput | string | null
    lastName?: NullableStringFieldUpdateOperationsInput | string | null
    profileImageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    currency?: StringFieldUpdateOperationsInput | string
    symbolPosition?: EnumSymbolPositionFieldUpdateOperationsInput | $Enums.SymbolPosition
    decimalPlaces?: IntFieldUpdateOperationsInput | number
    thousandsSeparator?: StringFieldUpdateOperationsInput | string
    decimalSeparator?: StringFieldUpdateOperationsInput | string
    hideCents?: BoolFieldUpdateOperationsInput | boolean
    roundToNearest?: EnumRoundingOptionFieldUpdateOperationsInput | $Enums.RoundingOption
    weekStartDay?: EnumWeekDayFieldUpdateOperationsInput | $Enums.WeekDay
    notifyLowBalance?: BoolFieldUpdateOperationsInput | boolean
    notifyBillsDue?: BoolFieldUpdateOperationsInput | boolean
    notifyGoalReached?: BoolFieldUpdateOperationsInput | boolean
    notifyBudgetExceeded?: BoolFieldUpdateOperationsInput | boolean
    theme?: EnumThemeFieldUpdateOperationsInput | $Enums.Theme
  }

  export type TransactionCreateInput = {
    id?: string
    amount: number
    description?: string | null
    date: Date | string
    notes?: string | null
    type: $Enums.TransactionType
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutTransactionsInput
    category: CategoryCreateNestedOneWithoutTransactionsInput
    bill?: BillCreateNestedOneWithoutTransactionsInput
  }

  export type TransactionUncheckedCreateInput = {
    id?: string
    amount: number
    description?: string | null
    date: Date | string
    notes?: string | null
    type: $Enums.TransactionType
    createdAt?: Date | string
    updatedAt?: Date | string
    userId: string
    categoryId: string
    billId?: string | null
  }

  export type TransactionUpdateInput = {
    amount?: FloatFieldUpdateOperationsInput | number
    description?: NullableStringFieldUpdateOperationsInput | string | null
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    type?: EnumTransactionTypeFieldUpdateOperationsInput | $Enums.TransactionType
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutTransactionsNestedInput
    category?: CategoryUpdateOneRequiredWithoutTransactionsNestedInput
    bill?: BillUpdateOneWithoutTransactionsNestedInput
  }

  export type TransactionUncheckedUpdateInput = {
    amount?: FloatFieldUpdateOperationsInput | number
    description?: NullableStringFieldUpdateOperationsInput | string | null
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    type?: EnumTransactionTypeFieldUpdateOperationsInput | $Enums.TransactionType
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: StringFieldUpdateOperationsInput | string
    categoryId?: StringFieldUpdateOperationsInput | string
    billId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type TransactionCreateManyInput = {
    id?: string
    amount: number
    description?: string | null
    date: Date | string
    notes?: string | null
    type: $Enums.TransactionType
    createdAt?: Date | string
    updatedAt?: Date | string
    userId: string
    categoryId: string
    billId?: string | null
  }

  export type TransactionUpdateManyMutationInput = {
    amount?: FloatFieldUpdateOperationsInput | number
    description?: NullableStringFieldUpdateOperationsInput | string | null
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    type?: EnumTransactionTypeFieldUpdateOperationsInput | $Enums.TransactionType
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TransactionUncheckedUpdateManyInput = {
    amount?: FloatFieldUpdateOperationsInput | number
    description?: NullableStringFieldUpdateOperationsInput | string | null
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    type?: EnumTransactionTypeFieldUpdateOperationsInput | $Enums.TransactionType
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: StringFieldUpdateOperationsInput | string
    categoryId?: StringFieldUpdateOperationsInput | string
    billId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type CategoryCreateInput = {
    id?: string
    name: string
    description?: string | null
    color: string
    icon: string
    type: $Enums.CategoryType
    isDefault?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutCategoriesInput
    transactions?: TransactionCreateNestedManyWithoutCategoryInput
    bills?: BillCreateNestedManyWithoutCategoryInput
    allocations?: CategoryAllocationCreateNestedManyWithoutCategoryInput
    planItems?: PlanItemCreateNestedManyWithoutCategoryInput
  }

  export type CategoryUncheckedCreateInput = {
    id?: string
    name: string
    description?: string | null
    color: string
    icon: string
    type: $Enums.CategoryType
    isDefault?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    userId: string
    transactions?: TransactionUncheckedCreateNestedManyWithoutCategoryInput
    bills?: BillUncheckedCreateNestedManyWithoutCategoryInput
    allocations?: CategoryAllocationUncheckedCreateNestedManyWithoutCategoryInput
    planItems?: PlanItemUncheckedCreateNestedManyWithoutCategoryInput
  }

  export type CategoryUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    color?: StringFieldUpdateOperationsInput | string
    icon?: StringFieldUpdateOperationsInput | string
    type?: EnumCategoryTypeFieldUpdateOperationsInput | $Enums.CategoryType
    isDefault?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutCategoriesNestedInput
    transactions?: TransactionUpdateManyWithoutCategoryNestedInput
    bills?: BillUpdateManyWithoutCategoryNestedInput
    allocations?: CategoryAllocationUpdateManyWithoutCategoryNestedInput
    planItems?: PlanItemUpdateManyWithoutCategoryNestedInput
  }

  export type CategoryUncheckedUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    color?: StringFieldUpdateOperationsInput | string
    icon?: StringFieldUpdateOperationsInput | string
    type?: EnumCategoryTypeFieldUpdateOperationsInput | $Enums.CategoryType
    isDefault?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: StringFieldUpdateOperationsInput | string
    transactions?: TransactionUncheckedUpdateManyWithoutCategoryNestedInput
    bills?: BillUncheckedUpdateManyWithoutCategoryNestedInput
    allocations?: CategoryAllocationUncheckedUpdateManyWithoutCategoryNestedInput
    planItems?: PlanItemUncheckedUpdateManyWithoutCategoryNestedInput
  }

  export type CategoryCreateManyInput = {
    id?: string
    name: string
    description?: string | null
    color: string
    icon: string
    type: $Enums.CategoryType
    isDefault?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    userId: string
  }

  export type CategoryUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    color?: StringFieldUpdateOperationsInput | string
    icon?: StringFieldUpdateOperationsInput | string
    type?: EnumCategoryTypeFieldUpdateOperationsInput | $Enums.CategoryType
    isDefault?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CategoryUncheckedUpdateManyInput = {
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    color?: StringFieldUpdateOperationsInput | string
    icon?: StringFieldUpdateOperationsInput | string
    type?: EnumCategoryTypeFieldUpdateOperationsInput | $Enums.CategoryType
    isDefault?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: StringFieldUpdateOperationsInput | string
  }

  export type BillCreateInput = {
    id?: string
    name: string
    amount: number
    dueDate: Date | string
    frequency: $Enums.BillFrequency
    autopay?: boolean
    notes?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutBillsInput
    category: CategoryCreateNestedOneWithoutBillsInput
    transactions?: TransactionCreateNestedManyWithoutBillInput
  }

  export type BillUncheckedCreateInput = {
    id?: string
    name: string
    amount: number
    dueDate: Date | string
    frequency: $Enums.BillFrequency
    autopay?: boolean
    notes?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    userId: string
    categoryId: string
    transactions?: TransactionUncheckedCreateNestedManyWithoutBillInput
  }

  export type BillUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    amount?: FloatFieldUpdateOperationsInput | number
    dueDate?: DateTimeFieldUpdateOperationsInput | Date | string
    frequency?: EnumBillFrequencyFieldUpdateOperationsInput | $Enums.BillFrequency
    autopay?: BoolFieldUpdateOperationsInput | boolean
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutBillsNestedInput
    category?: CategoryUpdateOneRequiredWithoutBillsNestedInput
    transactions?: TransactionUpdateManyWithoutBillNestedInput
  }

  export type BillUncheckedUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    amount?: FloatFieldUpdateOperationsInput | number
    dueDate?: DateTimeFieldUpdateOperationsInput | Date | string
    frequency?: EnumBillFrequencyFieldUpdateOperationsInput | $Enums.BillFrequency
    autopay?: BoolFieldUpdateOperationsInput | boolean
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: StringFieldUpdateOperationsInput | string
    categoryId?: StringFieldUpdateOperationsInput | string
    transactions?: TransactionUncheckedUpdateManyWithoutBillNestedInput
  }

  export type BillCreateManyInput = {
    id?: string
    name: string
    amount: number
    dueDate: Date | string
    frequency: $Enums.BillFrequency
    autopay?: boolean
    notes?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    userId: string
    categoryId: string
  }

  export type BillUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    amount?: FloatFieldUpdateOperationsInput | number
    dueDate?: DateTimeFieldUpdateOperationsInput | Date | string
    frequency?: EnumBillFrequencyFieldUpdateOperationsInput | $Enums.BillFrequency
    autopay?: BoolFieldUpdateOperationsInput | boolean
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BillUncheckedUpdateManyInput = {
    name?: StringFieldUpdateOperationsInput | string
    amount?: FloatFieldUpdateOperationsInput | number
    dueDate?: DateTimeFieldUpdateOperationsInput | Date | string
    frequency?: EnumBillFrequencyFieldUpdateOperationsInput | $Enums.BillFrequency
    autopay?: BoolFieldUpdateOperationsInput | boolean
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: StringFieldUpdateOperationsInput | string
    categoryId?: StringFieldUpdateOperationsInput | string
  }

  export type BudgetCreateInput = {
    id?: string
    name: string
    description?: string | null
    amount: number
    startDate: Date | string
    endDate: Date | string
    type: $Enums.BudgetTimeframe
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutBudgetsInput
    categoryAllocations?: CategoryAllocationCreateNestedManyWithoutBudgetInput
  }

  export type BudgetUncheckedCreateInput = {
    id?: string
    name: string
    description?: string | null
    amount: number
    startDate: Date | string
    endDate: Date | string
    type: $Enums.BudgetTimeframe
    createdAt?: Date | string
    updatedAt?: Date | string
    userId: string
    categoryAllocations?: CategoryAllocationUncheckedCreateNestedManyWithoutBudgetInput
  }

  export type BudgetUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    amount?: FloatFieldUpdateOperationsInput | number
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: DateTimeFieldUpdateOperationsInput | Date | string
    type?: EnumBudgetTimeframeFieldUpdateOperationsInput | $Enums.BudgetTimeframe
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutBudgetsNestedInput
    categoryAllocations?: CategoryAllocationUpdateManyWithoutBudgetNestedInput
  }

  export type BudgetUncheckedUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    amount?: FloatFieldUpdateOperationsInput | number
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: DateTimeFieldUpdateOperationsInput | Date | string
    type?: EnumBudgetTimeframeFieldUpdateOperationsInput | $Enums.BudgetTimeframe
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: StringFieldUpdateOperationsInput | string
    categoryAllocations?: CategoryAllocationUncheckedUpdateManyWithoutBudgetNestedInput
  }

  export type BudgetCreateManyInput = {
    id?: string
    name: string
    description?: string | null
    amount: number
    startDate: Date | string
    endDate: Date | string
    type: $Enums.BudgetTimeframe
    createdAt?: Date | string
    updatedAt?: Date | string
    userId: string
  }

  export type BudgetUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    amount?: FloatFieldUpdateOperationsInput | number
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: DateTimeFieldUpdateOperationsInput | Date | string
    type?: EnumBudgetTimeframeFieldUpdateOperationsInput | $Enums.BudgetTimeframe
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BudgetUncheckedUpdateManyInput = {
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    amount?: FloatFieldUpdateOperationsInput | number
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: DateTimeFieldUpdateOperationsInput | Date | string
    type?: EnumBudgetTimeframeFieldUpdateOperationsInput | $Enums.BudgetTimeframe
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: StringFieldUpdateOperationsInput | string
  }

  export type CategoryAllocationCreateInput = {
    id?: string
    amount: number
    budget: BudgetCreateNestedOneWithoutCategoryAllocationsInput
    category: CategoryCreateNestedOneWithoutAllocationsInput
  }

  export type CategoryAllocationUncheckedCreateInput = {
    id?: string
    amount: number
    budgetId: string
    categoryId: string
  }

  export type CategoryAllocationUpdateInput = {
    amount?: FloatFieldUpdateOperationsInput | number
    budget?: BudgetUpdateOneRequiredWithoutCategoryAllocationsNestedInput
    category?: CategoryUpdateOneRequiredWithoutAllocationsNestedInput
  }

  export type CategoryAllocationUncheckedUpdateInput = {
    amount?: FloatFieldUpdateOperationsInput | number
    budgetId?: StringFieldUpdateOperationsInput | string
    categoryId?: StringFieldUpdateOperationsInput | string
  }

  export type CategoryAllocationCreateManyInput = {
    id?: string
    amount: number
    budgetId: string
    categoryId: string
  }

  export type CategoryAllocationUpdateManyMutationInput = {
    amount?: FloatFieldUpdateOperationsInput | number
  }

  export type CategoryAllocationUncheckedUpdateManyInput = {
    amount?: FloatFieldUpdateOperationsInput | number
    budgetId?: StringFieldUpdateOperationsInput | string
    categoryId?: StringFieldUpdateOperationsInput | string
  }

  export type SavingsGoalCreateInput = {
    id?: string
    name: string
    targetAmount: number
    currentAmount?: number
    targetDate?: Date | string | null
    completed?: boolean
    notes?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutSavingsGoalsInput
  }

  export type SavingsGoalUncheckedCreateInput = {
    id?: string
    name: string
    targetAmount: number
    currentAmount?: number
    targetDate?: Date | string | null
    completed?: boolean
    notes?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    userId: string
  }

  export type SavingsGoalUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    targetAmount?: FloatFieldUpdateOperationsInput | number
    currentAmount?: FloatFieldUpdateOperationsInput | number
    targetDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    completed?: BoolFieldUpdateOperationsInput | boolean
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutSavingsGoalsNestedInput
  }

  export type SavingsGoalUncheckedUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    targetAmount?: FloatFieldUpdateOperationsInput | number
    currentAmount?: FloatFieldUpdateOperationsInput | number
    targetDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    completed?: BoolFieldUpdateOperationsInput | boolean
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: StringFieldUpdateOperationsInput | string
  }

  export type SavingsGoalCreateManyInput = {
    id?: string
    name: string
    targetAmount: number
    currentAmount?: number
    targetDate?: Date | string | null
    completed?: boolean
    notes?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    userId: string
  }

  export type SavingsGoalUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    targetAmount?: FloatFieldUpdateOperationsInput | number
    currentAmount?: FloatFieldUpdateOperationsInput | number
    targetDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    completed?: BoolFieldUpdateOperationsInput | boolean
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SavingsGoalUncheckedUpdateManyInput = {
    name?: StringFieldUpdateOperationsInput | string
    targetAmount?: FloatFieldUpdateOperationsInput | number
    currentAmount?: FloatFieldUpdateOperationsInput | number
    targetDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    completed?: BoolFieldUpdateOperationsInput | boolean
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: StringFieldUpdateOperationsInput | string
  }

  export type PlanItemCreateInput = {
    id?: string
    description: string
    amount: number
    notes?: string | null
    planType: string
    itemType: string
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutPlanItemsInput
    category?: CategoryCreateNestedOneWithoutPlanItemsInput
  }

  export type PlanItemUncheckedCreateInput = {
    id?: string
    description: string
    amount: number
    notes?: string | null
    planType: string
    itemType: string
    createdAt?: Date | string
    updatedAt?: Date | string
    userId: string
    categoryId?: string | null
  }

  export type PlanItemUpdateInput = {
    description?: StringFieldUpdateOperationsInput | string
    amount?: FloatFieldUpdateOperationsInput | number
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    planType?: StringFieldUpdateOperationsInput | string
    itemType?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutPlanItemsNestedInput
    category?: CategoryUpdateOneWithoutPlanItemsNestedInput
  }

  export type PlanItemUncheckedUpdateInput = {
    description?: StringFieldUpdateOperationsInput | string
    amount?: FloatFieldUpdateOperationsInput | number
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    planType?: StringFieldUpdateOperationsInput | string
    itemType?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: StringFieldUpdateOperationsInput | string
    categoryId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type PlanItemCreateManyInput = {
    id?: string
    description: string
    amount: number
    notes?: string | null
    planType: string
    itemType: string
    createdAt?: Date | string
    updatedAt?: Date | string
    userId: string
    categoryId?: string | null
  }

  export type PlanItemUpdateManyMutationInput = {
    description?: StringFieldUpdateOperationsInput | string
    amount?: FloatFieldUpdateOperationsInput | number
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    planType?: StringFieldUpdateOperationsInput | string
    itemType?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PlanItemUncheckedUpdateManyInput = {
    description?: StringFieldUpdateOperationsInput | string
    amount?: FloatFieldUpdateOperationsInput | number
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    planType?: StringFieldUpdateOperationsInput | string
    itemType?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: StringFieldUpdateOperationsInput | string
    categoryId?: NullableStringFieldUpdateOperationsInput | string | null
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

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
    isSet?: boolean
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

  export type EnumSymbolPositionFilter<$PrismaModel = never> = {
    equals?: $Enums.SymbolPosition | EnumSymbolPositionFieldRefInput<$PrismaModel>
    in?: $Enums.SymbolPosition[] | ListEnumSymbolPositionFieldRefInput<$PrismaModel>
    notIn?: $Enums.SymbolPosition[] | ListEnumSymbolPositionFieldRefInput<$PrismaModel>
    not?: NestedEnumSymbolPositionFilter<$PrismaModel> | $Enums.SymbolPosition
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

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type EnumRoundingOptionFilter<$PrismaModel = never> = {
    equals?: $Enums.RoundingOption | EnumRoundingOptionFieldRefInput<$PrismaModel>
    in?: $Enums.RoundingOption[] | ListEnumRoundingOptionFieldRefInput<$PrismaModel>
    notIn?: $Enums.RoundingOption[] | ListEnumRoundingOptionFieldRefInput<$PrismaModel>
    not?: NestedEnumRoundingOptionFilter<$PrismaModel> | $Enums.RoundingOption
  }

  export type EnumWeekDayFilter<$PrismaModel = never> = {
    equals?: $Enums.WeekDay | EnumWeekDayFieldRefInput<$PrismaModel>
    in?: $Enums.WeekDay[] | ListEnumWeekDayFieldRefInput<$PrismaModel>
    notIn?: $Enums.WeekDay[] | ListEnumWeekDayFieldRefInput<$PrismaModel>
    not?: NestedEnumWeekDayFilter<$PrismaModel> | $Enums.WeekDay
  }

  export type EnumThemeFilter<$PrismaModel = never> = {
    equals?: $Enums.Theme | EnumThemeFieldRefInput<$PrismaModel>
    in?: $Enums.Theme[] | ListEnumThemeFieldRefInput<$PrismaModel>
    notIn?: $Enums.Theme[] | ListEnumThemeFieldRefInput<$PrismaModel>
    not?: NestedEnumThemeFilter<$PrismaModel> | $Enums.Theme
  }

  export type BudgetListRelationFilter = {
    every?: BudgetWhereInput
    some?: BudgetWhereInput
    none?: BudgetWhereInput
  }

  export type TransactionListRelationFilter = {
    every?: TransactionWhereInput
    some?: TransactionWhereInput
    none?: TransactionWhereInput
  }

  export type CategoryListRelationFilter = {
    every?: CategoryWhereInput
    some?: CategoryWhereInput
    none?: CategoryWhereInput
  }

  export type BillListRelationFilter = {
    every?: BillWhereInput
    some?: BillWhereInput
    none?: BillWhereInput
  }

  export type SavingsGoalListRelationFilter = {
    every?: SavingsGoalWhereInput
    some?: SavingsGoalWhereInput
    none?: SavingsGoalWhereInput
  }

  export type PlanItemListRelationFilter = {
    every?: PlanItemWhereInput
    some?: PlanItemWhereInput
    none?: PlanItemWhereInput
  }

  export type BudgetOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type TransactionOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type CategoryOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type BillOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type SavingsGoalOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type PlanItemOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    password?: SortOrder
    firstName?: SortOrder
    lastName?: SortOrder
    profileImageUrl?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    currency?: SortOrder
    symbolPosition?: SortOrder
    decimalPlaces?: SortOrder
    thousandsSeparator?: SortOrder
    decimalSeparator?: SortOrder
    hideCents?: SortOrder
    roundToNearest?: SortOrder
    weekStartDay?: SortOrder
    notifyLowBalance?: SortOrder
    notifyBillsDue?: SortOrder
    notifyGoalReached?: SortOrder
    notifyBudgetExceeded?: SortOrder
    theme?: SortOrder
  }

  export type UserAvgOrderByAggregateInput = {
    decimalPlaces?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    password?: SortOrder
    firstName?: SortOrder
    lastName?: SortOrder
    profileImageUrl?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    currency?: SortOrder
    symbolPosition?: SortOrder
    decimalPlaces?: SortOrder
    thousandsSeparator?: SortOrder
    decimalSeparator?: SortOrder
    hideCents?: SortOrder
    roundToNearest?: SortOrder
    weekStartDay?: SortOrder
    notifyLowBalance?: SortOrder
    notifyBillsDue?: SortOrder
    notifyGoalReached?: SortOrder
    notifyBudgetExceeded?: SortOrder
    theme?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    password?: SortOrder
    firstName?: SortOrder
    lastName?: SortOrder
    profileImageUrl?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    currency?: SortOrder
    symbolPosition?: SortOrder
    decimalPlaces?: SortOrder
    thousandsSeparator?: SortOrder
    decimalSeparator?: SortOrder
    hideCents?: SortOrder
    roundToNearest?: SortOrder
    weekStartDay?: SortOrder
    notifyLowBalance?: SortOrder
    notifyBillsDue?: SortOrder
    notifyGoalReached?: SortOrder
    notifyBudgetExceeded?: SortOrder
    theme?: SortOrder
  }

  export type UserSumOrderByAggregateInput = {
    decimalPlaces?: SortOrder
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

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
    isSet?: boolean
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

  export type EnumSymbolPositionWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.SymbolPosition | EnumSymbolPositionFieldRefInput<$PrismaModel>
    in?: $Enums.SymbolPosition[] | ListEnumSymbolPositionFieldRefInput<$PrismaModel>
    notIn?: $Enums.SymbolPosition[] | ListEnumSymbolPositionFieldRefInput<$PrismaModel>
    not?: NestedEnumSymbolPositionWithAggregatesFilter<$PrismaModel> | $Enums.SymbolPosition
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumSymbolPositionFilter<$PrismaModel>
    _max?: NestedEnumSymbolPositionFilter<$PrismaModel>
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

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type EnumRoundingOptionWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.RoundingOption | EnumRoundingOptionFieldRefInput<$PrismaModel>
    in?: $Enums.RoundingOption[] | ListEnumRoundingOptionFieldRefInput<$PrismaModel>
    notIn?: $Enums.RoundingOption[] | ListEnumRoundingOptionFieldRefInput<$PrismaModel>
    not?: NestedEnumRoundingOptionWithAggregatesFilter<$PrismaModel> | $Enums.RoundingOption
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumRoundingOptionFilter<$PrismaModel>
    _max?: NestedEnumRoundingOptionFilter<$PrismaModel>
  }

  export type EnumWeekDayWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.WeekDay | EnumWeekDayFieldRefInput<$PrismaModel>
    in?: $Enums.WeekDay[] | ListEnumWeekDayFieldRefInput<$PrismaModel>
    notIn?: $Enums.WeekDay[] | ListEnumWeekDayFieldRefInput<$PrismaModel>
    not?: NestedEnumWeekDayWithAggregatesFilter<$PrismaModel> | $Enums.WeekDay
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumWeekDayFilter<$PrismaModel>
    _max?: NestedEnumWeekDayFilter<$PrismaModel>
  }

  export type EnumThemeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Theme | EnumThemeFieldRefInput<$PrismaModel>
    in?: $Enums.Theme[] | ListEnumThemeFieldRefInput<$PrismaModel>
    notIn?: $Enums.Theme[] | ListEnumThemeFieldRefInput<$PrismaModel>
    not?: NestedEnumThemeWithAggregatesFilter<$PrismaModel> | $Enums.Theme
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumThemeFilter<$PrismaModel>
    _max?: NestedEnumThemeFilter<$PrismaModel>
  }

  export type FloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type EnumTransactionTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.TransactionType | EnumTransactionTypeFieldRefInput<$PrismaModel>
    in?: $Enums.TransactionType[] | ListEnumTransactionTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.TransactionType[] | ListEnumTransactionTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumTransactionTypeFilter<$PrismaModel> | $Enums.TransactionType
  }

  export type UserScalarRelationFilter = {
    is?: UserWhereInput
    isNot?: UserWhereInput
  }

  export type CategoryScalarRelationFilter = {
    is?: CategoryWhereInput
    isNot?: CategoryWhereInput
  }

  export type BillNullableScalarRelationFilter = {
    is?: BillWhereInput | null
    isNot?: BillWhereInput | null
  }

  export type TransactionCountOrderByAggregateInput = {
    id?: SortOrder
    amount?: SortOrder
    description?: SortOrder
    date?: SortOrder
    notes?: SortOrder
    type?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    userId?: SortOrder
    categoryId?: SortOrder
    billId?: SortOrder
  }

  export type TransactionAvgOrderByAggregateInput = {
    amount?: SortOrder
  }

  export type TransactionMaxOrderByAggregateInput = {
    id?: SortOrder
    amount?: SortOrder
    description?: SortOrder
    date?: SortOrder
    notes?: SortOrder
    type?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    userId?: SortOrder
    categoryId?: SortOrder
    billId?: SortOrder
  }

  export type TransactionMinOrderByAggregateInput = {
    id?: SortOrder
    amount?: SortOrder
    description?: SortOrder
    date?: SortOrder
    notes?: SortOrder
    type?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    userId?: SortOrder
    categoryId?: SortOrder
    billId?: SortOrder
  }

  export type TransactionSumOrderByAggregateInput = {
    amount?: SortOrder
  }

  export type FloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
  }

  export type EnumTransactionTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.TransactionType | EnumTransactionTypeFieldRefInput<$PrismaModel>
    in?: $Enums.TransactionType[] | ListEnumTransactionTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.TransactionType[] | ListEnumTransactionTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumTransactionTypeWithAggregatesFilter<$PrismaModel> | $Enums.TransactionType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumTransactionTypeFilter<$PrismaModel>
    _max?: NestedEnumTransactionTypeFilter<$PrismaModel>
  }

  export type EnumCategoryTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.CategoryType | EnumCategoryTypeFieldRefInput<$PrismaModel>
    in?: $Enums.CategoryType[] | ListEnumCategoryTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.CategoryType[] | ListEnumCategoryTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumCategoryTypeFilter<$PrismaModel> | $Enums.CategoryType
  }

  export type CategoryAllocationListRelationFilter = {
    every?: CategoryAllocationWhereInput
    some?: CategoryAllocationWhereInput
    none?: CategoryAllocationWhereInput
  }

  export type CategoryAllocationOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type CategoryCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    color?: SortOrder
    icon?: SortOrder
    type?: SortOrder
    isDefault?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    userId?: SortOrder
  }

  export type CategoryMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    color?: SortOrder
    icon?: SortOrder
    type?: SortOrder
    isDefault?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    userId?: SortOrder
  }

  export type CategoryMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    color?: SortOrder
    icon?: SortOrder
    type?: SortOrder
    isDefault?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    userId?: SortOrder
  }

  export type EnumCategoryTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.CategoryType | EnumCategoryTypeFieldRefInput<$PrismaModel>
    in?: $Enums.CategoryType[] | ListEnumCategoryTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.CategoryType[] | ListEnumCategoryTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumCategoryTypeWithAggregatesFilter<$PrismaModel> | $Enums.CategoryType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumCategoryTypeFilter<$PrismaModel>
    _max?: NestedEnumCategoryTypeFilter<$PrismaModel>
  }

  export type EnumBillFrequencyFilter<$PrismaModel = never> = {
    equals?: $Enums.BillFrequency | EnumBillFrequencyFieldRefInput<$PrismaModel>
    in?: $Enums.BillFrequency[] | ListEnumBillFrequencyFieldRefInput<$PrismaModel>
    notIn?: $Enums.BillFrequency[] | ListEnumBillFrequencyFieldRefInput<$PrismaModel>
    not?: NestedEnumBillFrequencyFilter<$PrismaModel> | $Enums.BillFrequency
  }

  export type BillCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    amount?: SortOrder
    dueDate?: SortOrder
    frequency?: SortOrder
    autopay?: SortOrder
    notes?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    userId?: SortOrder
    categoryId?: SortOrder
  }

  export type BillAvgOrderByAggregateInput = {
    amount?: SortOrder
  }

  export type BillMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    amount?: SortOrder
    dueDate?: SortOrder
    frequency?: SortOrder
    autopay?: SortOrder
    notes?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    userId?: SortOrder
    categoryId?: SortOrder
  }

  export type BillMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    amount?: SortOrder
    dueDate?: SortOrder
    frequency?: SortOrder
    autopay?: SortOrder
    notes?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    userId?: SortOrder
    categoryId?: SortOrder
  }

  export type BillSumOrderByAggregateInput = {
    amount?: SortOrder
  }

  export type EnumBillFrequencyWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.BillFrequency | EnumBillFrequencyFieldRefInput<$PrismaModel>
    in?: $Enums.BillFrequency[] | ListEnumBillFrequencyFieldRefInput<$PrismaModel>
    notIn?: $Enums.BillFrequency[] | ListEnumBillFrequencyFieldRefInput<$PrismaModel>
    not?: NestedEnumBillFrequencyWithAggregatesFilter<$PrismaModel> | $Enums.BillFrequency
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumBillFrequencyFilter<$PrismaModel>
    _max?: NestedEnumBillFrequencyFilter<$PrismaModel>
  }

  export type EnumBudgetTimeframeFilter<$PrismaModel = never> = {
    equals?: $Enums.BudgetTimeframe | EnumBudgetTimeframeFieldRefInput<$PrismaModel>
    in?: $Enums.BudgetTimeframe[] | ListEnumBudgetTimeframeFieldRefInput<$PrismaModel>
    notIn?: $Enums.BudgetTimeframe[] | ListEnumBudgetTimeframeFieldRefInput<$PrismaModel>
    not?: NestedEnumBudgetTimeframeFilter<$PrismaModel> | $Enums.BudgetTimeframe
  }

  export type BudgetCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    amount?: SortOrder
    startDate?: SortOrder
    endDate?: SortOrder
    type?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    userId?: SortOrder
  }

  export type BudgetAvgOrderByAggregateInput = {
    amount?: SortOrder
  }

  export type BudgetMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    amount?: SortOrder
    startDate?: SortOrder
    endDate?: SortOrder
    type?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    userId?: SortOrder
  }

  export type BudgetMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    amount?: SortOrder
    startDate?: SortOrder
    endDate?: SortOrder
    type?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    userId?: SortOrder
  }

  export type BudgetSumOrderByAggregateInput = {
    amount?: SortOrder
  }

  export type EnumBudgetTimeframeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.BudgetTimeframe | EnumBudgetTimeframeFieldRefInput<$PrismaModel>
    in?: $Enums.BudgetTimeframe[] | ListEnumBudgetTimeframeFieldRefInput<$PrismaModel>
    notIn?: $Enums.BudgetTimeframe[] | ListEnumBudgetTimeframeFieldRefInput<$PrismaModel>
    not?: NestedEnumBudgetTimeframeWithAggregatesFilter<$PrismaModel> | $Enums.BudgetTimeframe
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumBudgetTimeframeFilter<$PrismaModel>
    _max?: NestedEnumBudgetTimeframeFilter<$PrismaModel>
  }

  export type BudgetScalarRelationFilter = {
    is?: BudgetWhereInput
    isNot?: BudgetWhereInput
  }

  export type CategoryAllocationCountOrderByAggregateInput = {
    id?: SortOrder
    amount?: SortOrder
    budgetId?: SortOrder
    categoryId?: SortOrder
  }

  export type CategoryAllocationAvgOrderByAggregateInput = {
    amount?: SortOrder
  }

  export type CategoryAllocationMaxOrderByAggregateInput = {
    id?: SortOrder
    amount?: SortOrder
    budgetId?: SortOrder
    categoryId?: SortOrder
  }

  export type CategoryAllocationMinOrderByAggregateInput = {
    id?: SortOrder
    amount?: SortOrder
    budgetId?: SortOrder
    categoryId?: SortOrder
  }

  export type CategoryAllocationSumOrderByAggregateInput = {
    amount?: SortOrder
  }

  export type DateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
    isSet?: boolean
  }

  export type SavingsGoalCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    targetAmount?: SortOrder
    currentAmount?: SortOrder
    targetDate?: SortOrder
    completed?: SortOrder
    notes?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    userId?: SortOrder
  }

  export type SavingsGoalAvgOrderByAggregateInput = {
    targetAmount?: SortOrder
    currentAmount?: SortOrder
  }

  export type SavingsGoalMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    targetAmount?: SortOrder
    currentAmount?: SortOrder
    targetDate?: SortOrder
    completed?: SortOrder
    notes?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    userId?: SortOrder
  }

  export type SavingsGoalMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    targetAmount?: SortOrder
    currentAmount?: SortOrder
    targetDate?: SortOrder
    completed?: SortOrder
    notes?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    userId?: SortOrder
  }

  export type SavingsGoalSumOrderByAggregateInput = {
    targetAmount?: SortOrder
    currentAmount?: SortOrder
  }

  export type DateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
    isSet?: boolean
  }

  export type CategoryNullableScalarRelationFilter = {
    is?: CategoryWhereInput | null
    isNot?: CategoryWhereInput | null
  }

  export type PlanItemCountOrderByAggregateInput = {
    id?: SortOrder
    description?: SortOrder
    amount?: SortOrder
    notes?: SortOrder
    planType?: SortOrder
    itemType?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    userId?: SortOrder
    categoryId?: SortOrder
  }

  export type PlanItemAvgOrderByAggregateInput = {
    amount?: SortOrder
  }

  export type PlanItemMaxOrderByAggregateInput = {
    id?: SortOrder
    description?: SortOrder
    amount?: SortOrder
    notes?: SortOrder
    planType?: SortOrder
    itemType?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    userId?: SortOrder
    categoryId?: SortOrder
  }

  export type PlanItemMinOrderByAggregateInput = {
    id?: SortOrder
    description?: SortOrder
    amount?: SortOrder
    notes?: SortOrder
    planType?: SortOrder
    itemType?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    userId?: SortOrder
    categoryId?: SortOrder
  }

  export type PlanItemSumOrderByAggregateInput = {
    amount?: SortOrder
  }

  export type BudgetCreateNestedManyWithoutUserInput = {
    create?: XOR<BudgetCreateWithoutUserInput, BudgetUncheckedCreateWithoutUserInput> | BudgetCreateWithoutUserInput[] | BudgetUncheckedCreateWithoutUserInput[]
    connectOrCreate?: BudgetCreateOrConnectWithoutUserInput | BudgetCreateOrConnectWithoutUserInput[]
    createMany?: BudgetCreateManyUserInputEnvelope
    connect?: BudgetWhereUniqueInput | BudgetWhereUniqueInput[]
  }

  export type TransactionCreateNestedManyWithoutUserInput = {
    create?: XOR<TransactionCreateWithoutUserInput, TransactionUncheckedCreateWithoutUserInput> | TransactionCreateWithoutUserInput[] | TransactionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: TransactionCreateOrConnectWithoutUserInput | TransactionCreateOrConnectWithoutUserInput[]
    createMany?: TransactionCreateManyUserInputEnvelope
    connect?: TransactionWhereUniqueInput | TransactionWhereUniqueInput[]
  }

  export type CategoryCreateNestedManyWithoutUserInput = {
    create?: XOR<CategoryCreateWithoutUserInput, CategoryUncheckedCreateWithoutUserInput> | CategoryCreateWithoutUserInput[] | CategoryUncheckedCreateWithoutUserInput[]
    connectOrCreate?: CategoryCreateOrConnectWithoutUserInput | CategoryCreateOrConnectWithoutUserInput[]
    createMany?: CategoryCreateManyUserInputEnvelope
    connect?: CategoryWhereUniqueInput | CategoryWhereUniqueInput[]
  }

  export type BillCreateNestedManyWithoutUserInput = {
    create?: XOR<BillCreateWithoutUserInput, BillUncheckedCreateWithoutUserInput> | BillCreateWithoutUserInput[] | BillUncheckedCreateWithoutUserInput[]
    connectOrCreate?: BillCreateOrConnectWithoutUserInput | BillCreateOrConnectWithoutUserInput[]
    createMany?: BillCreateManyUserInputEnvelope
    connect?: BillWhereUniqueInput | BillWhereUniqueInput[]
  }

  export type SavingsGoalCreateNestedManyWithoutUserInput = {
    create?: XOR<SavingsGoalCreateWithoutUserInput, SavingsGoalUncheckedCreateWithoutUserInput> | SavingsGoalCreateWithoutUserInput[] | SavingsGoalUncheckedCreateWithoutUserInput[]
    connectOrCreate?: SavingsGoalCreateOrConnectWithoutUserInput | SavingsGoalCreateOrConnectWithoutUserInput[]
    createMany?: SavingsGoalCreateManyUserInputEnvelope
    connect?: SavingsGoalWhereUniqueInput | SavingsGoalWhereUniqueInput[]
  }

  export type PlanItemCreateNestedManyWithoutUserInput = {
    create?: XOR<PlanItemCreateWithoutUserInput, PlanItemUncheckedCreateWithoutUserInput> | PlanItemCreateWithoutUserInput[] | PlanItemUncheckedCreateWithoutUserInput[]
    connectOrCreate?: PlanItemCreateOrConnectWithoutUserInput | PlanItemCreateOrConnectWithoutUserInput[]
    createMany?: PlanItemCreateManyUserInputEnvelope
    connect?: PlanItemWhereUniqueInput | PlanItemWhereUniqueInput[]
  }

  export type BudgetUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<BudgetCreateWithoutUserInput, BudgetUncheckedCreateWithoutUserInput> | BudgetCreateWithoutUserInput[] | BudgetUncheckedCreateWithoutUserInput[]
    connectOrCreate?: BudgetCreateOrConnectWithoutUserInput | BudgetCreateOrConnectWithoutUserInput[]
    createMany?: BudgetCreateManyUserInputEnvelope
    connect?: BudgetWhereUniqueInput | BudgetWhereUniqueInput[]
  }

  export type TransactionUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<TransactionCreateWithoutUserInput, TransactionUncheckedCreateWithoutUserInput> | TransactionCreateWithoutUserInput[] | TransactionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: TransactionCreateOrConnectWithoutUserInput | TransactionCreateOrConnectWithoutUserInput[]
    createMany?: TransactionCreateManyUserInputEnvelope
    connect?: TransactionWhereUniqueInput | TransactionWhereUniqueInput[]
  }

  export type CategoryUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<CategoryCreateWithoutUserInput, CategoryUncheckedCreateWithoutUserInput> | CategoryCreateWithoutUserInput[] | CategoryUncheckedCreateWithoutUserInput[]
    connectOrCreate?: CategoryCreateOrConnectWithoutUserInput | CategoryCreateOrConnectWithoutUserInput[]
    createMany?: CategoryCreateManyUserInputEnvelope
    connect?: CategoryWhereUniqueInput | CategoryWhereUniqueInput[]
  }

  export type BillUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<BillCreateWithoutUserInput, BillUncheckedCreateWithoutUserInput> | BillCreateWithoutUserInput[] | BillUncheckedCreateWithoutUserInput[]
    connectOrCreate?: BillCreateOrConnectWithoutUserInput | BillCreateOrConnectWithoutUserInput[]
    createMany?: BillCreateManyUserInputEnvelope
    connect?: BillWhereUniqueInput | BillWhereUniqueInput[]
  }

  export type SavingsGoalUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<SavingsGoalCreateWithoutUserInput, SavingsGoalUncheckedCreateWithoutUserInput> | SavingsGoalCreateWithoutUserInput[] | SavingsGoalUncheckedCreateWithoutUserInput[]
    connectOrCreate?: SavingsGoalCreateOrConnectWithoutUserInput | SavingsGoalCreateOrConnectWithoutUserInput[]
    createMany?: SavingsGoalCreateManyUserInputEnvelope
    connect?: SavingsGoalWhereUniqueInput | SavingsGoalWhereUniqueInput[]
  }

  export type PlanItemUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<PlanItemCreateWithoutUserInput, PlanItemUncheckedCreateWithoutUserInput> | PlanItemCreateWithoutUserInput[] | PlanItemUncheckedCreateWithoutUserInput[]
    connectOrCreate?: PlanItemCreateOrConnectWithoutUserInput | PlanItemCreateOrConnectWithoutUserInput[]
    createMany?: PlanItemCreateManyUserInputEnvelope
    connect?: PlanItemWhereUniqueInput | PlanItemWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
    unset?: boolean
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type EnumSymbolPositionFieldUpdateOperationsInput = {
    set?: $Enums.SymbolPosition
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type EnumRoundingOptionFieldUpdateOperationsInput = {
    set?: $Enums.RoundingOption
  }

  export type EnumWeekDayFieldUpdateOperationsInput = {
    set?: $Enums.WeekDay
  }

  export type EnumThemeFieldUpdateOperationsInput = {
    set?: $Enums.Theme
  }

  export type BudgetUpdateManyWithoutUserNestedInput = {
    create?: XOR<BudgetCreateWithoutUserInput, BudgetUncheckedCreateWithoutUserInput> | BudgetCreateWithoutUserInput[] | BudgetUncheckedCreateWithoutUserInput[]
    connectOrCreate?: BudgetCreateOrConnectWithoutUserInput | BudgetCreateOrConnectWithoutUserInput[]
    upsert?: BudgetUpsertWithWhereUniqueWithoutUserInput | BudgetUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: BudgetCreateManyUserInputEnvelope
    set?: BudgetWhereUniqueInput | BudgetWhereUniqueInput[]
    disconnect?: BudgetWhereUniqueInput | BudgetWhereUniqueInput[]
    delete?: BudgetWhereUniqueInput | BudgetWhereUniqueInput[]
    connect?: BudgetWhereUniqueInput | BudgetWhereUniqueInput[]
    update?: BudgetUpdateWithWhereUniqueWithoutUserInput | BudgetUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: BudgetUpdateManyWithWhereWithoutUserInput | BudgetUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: BudgetScalarWhereInput | BudgetScalarWhereInput[]
  }

  export type TransactionUpdateManyWithoutUserNestedInput = {
    create?: XOR<TransactionCreateWithoutUserInput, TransactionUncheckedCreateWithoutUserInput> | TransactionCreateWithoutUserInput[] | TransactionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: TransactionCreateOrConnectWithoutUserInput | TransactionCreateOrConnectWithoutUserInput[]
    upsert?: TransactionUpsertWithWhereUniqueWithoutUserInput | TransactionUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: TransactionCreateManyUserInputEnvelope
    set?: TransactionWhereUniqueInput | TransactionWhereUniqueInput[]
    disconnect?: TransactionWhereUniqueInput | TransactionWhereUniqueInput[]
    delete?: TransactionWhereUniqueInput | TransactionWhereUniqueInput[]
    connect?: TransactionWhereUniqueInput | TransactionWhereUniqueInput[]
    update?: TransactionUpdateWithWhereUniqueWithoutUserInput | TransactionUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: TransactionUpdateManyWithWhereWithoutUserInput | TransactionUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: TransactionScalarWhereInput | TransactionScalarWhereInput[]
  }

  export type CategoryUpdateManyWithoutUserNestedInput = {
    create?: XOR<CategoryCreateWithoutUserInput, CategoryUncheckedCreateWithoutUserInput> | CategoryCreateWithoutUserInput[] | CategoryUncheckedCreateWithoutUserInput[]
    connectOrCreate?: CategoryCreateOrConnectWithoutUserInput | CategoryCreateOrConnectWithoutUserInput[]
    upsert?: CategoryUpsertWithWhereUniqueWithoutUserInput | CategoryUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: CategoryCreateManyUserInputEnvelope
    set?: CategoryWhereUniqueInput | CategoryWhereUniqueInput[]
    disconnect?: CategoryWhereUniqueInput | CategoryWhereUniqueInput[]
    delete?: CategoryWhereUniqueInput | CategoryWhereUniqueInput[]
    connect?: CategoryWhereUniqueInput | CategoryWhereUniqueInput[]
    update?: CategoryUpdateWithWhereUniqueWithoutUserInput | CategoryUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: CategoryUpdateManyWithWhereWithoutUserInput | CategoryUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: CategoryScalarWhereInput | CategoryScalarWhereInput[]
  }

  export type BillUpdateManyWithoutUserNestedInput = {
    create?: XOR<BillCreateWithoutUserInput, BillUncheckedCreateWithoutUserInput> | BillCreateWithoutUserInput[] | BillUncheckedCreateWithoutUserInput[]
    connectOrCreate?: BillCreateOrConnectWithoutUserInput | BillCreateOrConnectWithoutUserInput[]
    upsert?: BillUpsertWithWhereUniqueWithoutUserInput | BillUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: BillCreateManyUserInputEnvelope
    set?: BillWhereUniqueInput | BillWhereUniqueInput[]
    disconnect?: BillWhereUniqueInput | BillWhereUniqueInput[]
    delete?: BillWhereUniqueInput | BillWhereUniqueInput[]
    connect?: BillWhereUniqueInput | BillWhereUniqueInput[]
    update?: BillUpdateWithWhereUniqueWithoutUserInput | BillUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: BillUpdateManyWithWhereWithoutUserInput | BillUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: BillScalarWhereInput | BillScalarWhereInput[]
  }

  export type SavingsGoalUpdateManyWithoutUserNestedInput = {
    create?: XOR<SavingsGoalCreateWithoutUserInput, SavingsGoalUncheckedCreateWithoutUserInput> | SavingsGoalCreateWithoutUserInput[] | SavingsGoalUncheckedCreateWithoutUserInput[]
    connectOrCreate?: SavingsGoalCreateOrConnectWithoutUserInput | SavingsGoalCreateOrConnectWithoutUserInput[]
    upsert?: SavingsGoalUpsertWithWhereUniqueWithoutUserInput | SavingsGoalUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: SavingsGoalCreateManyUserInputEnvelope
    set?: SavingsGoalWhereUniqueInput | SavingsGoalWhereUniqueInput[]
    disconnect?: SavingsGoalWhereUniqueInput | SavingsGoalWhereUniqueInput[]
    delete?: SavingsGoalWhereUniqueInput | SavingsGoalWhereUniqueInput[]
    connect?: SavingsGoalWhereUniqueInput | SavingsGoalWhereUniqueInput[]
    update?: SavingsGoalUpdateWithWhereUniqueWithoutUserInput | SavingsGoalUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: SavingsGoalUpdateManyWithWhereWithoutUserInput | SavingsGoalUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: SavingsGoalScalarWhereInput | SavingsGoalScalarWhereInput[]
  }

  export type PlanItemUpdateManyWithoutUserNestedInput = {
    create?: XOR<PlanItemCreateWithoutUserInput, PlanItemUncheckedCreateWithoutUserInput> | PlanItemCreateWithoutUserInput[] | PlanItemUncheckedCreateWithoutUserInput[]
    connectOrCreate?: PlanItemCreateOrConnectWithoutUserInput | PlanItemCreateOrConnectWithoutUserInput[]
    upsert?: PlanItemUpsertWithWhereUniqueWithoutUserInput | PlanItemUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: PlanItemCreateManyUserInputEnvelope
    set?: PlanItemWhereUniqueInput | PlanItemWhereUniqueInput[]
    disconnect?: PlanItemWhereUniqueInput | PlanItemWhereUniqueInput[]
    delete?: PlanItemWhereUniqueInput | PlanItemWhereUniqueInput[]
    connect?: PlanItemWhereUniqueInput | PlanItemWhereUniqueInput[]
    update?: PlanItemUpdateWithWhereUniqueWithoutUserInput | PlanItemUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: PlanItemUpdateManyWithWhereWithoutUserInput | PlanItemUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: PlanItemScalarWhereInput | PlanItemScalarWhereInput[]
  }

  export type BudgetUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<BudgetCreateWithoutUserInput, BudgetUncheckedCreateWithoutUserInput> | BudgetCreateWithoutUserInput[] | BudgetUncheckedCreateWithoutUserInput[]
    connectOrCreate?: BudgetCreateOrConnectWithoutUserInput | BudgetCreateOrConnectWithoutUserInput[]
    upsert?: BudgetUpsertWithWhereUniqueWithoutUserInput | BudgetUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: BudgetCreateManyUserInputEnvelope
    set?: BudgetWhereUniqueInput | BudgetWhereUniqueInput[]
    disconnect?: BudgetWhereUniqueInput | BudgetWhereUniqueInput[]
    delete?: BudgetWhereUniqueInput | BudgetWhereUniqueInput[]
    connect?: BudgetWhereUniqueInput | BudgetWhereUniqueInput[]
    update?: BudgetUpdateWithWhereUniqueWithoutUserInput | BudgetUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: BudgetUpdateManyWithWhereWithoutUserInput | BudgetUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: BudgetScalarWhereInput | BudgetScalarWhereInput[]
  }

  export type TransactionUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<TransactionCreateWithoutUserInput, TransactionUncheckedCreateWithoutUserInput> | TransactionCreateWithoutUserInput[] | TransactionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: TransactionCreateOrConnectWithoutUserInput | TransactionCreateOrConnectWithoutUserInput[]
    upsert?: TransactionUpsertWithWhereUniqueWithoutUserInput | TransactionUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: TransactionCreateManyUserInputEnvelope
    set?: TransactionWhereUniqueInput | TransactionWhereUniqueInput[]
    disconnect?: TransactionWhereUniqueInput | TransactionWhereUniqueInput[]
    delete?: TransactionWhereUniqueInput | TransactionWhereUniqueInput[]
    connect?: TransactionWhereUniqueInput | TransactionWhereUniqueInput[]
    update?: TransactionUpdateWithWhereUniqueWithoutUserInput | TransactionUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: TransactionUpdateManyWithWhereWithoutUserInput | TransactionUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: TransactionScalarWhereInput | TransactionScalarWhereInput[]
  }

  export type CategoryUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<CategoryCreateWithoutUserInput, CategoryUncheckedCreateWithoutUserInput> | CategoryCreateWithoutUserInput[] | CategoryUncheckedCreateWithoutUserInput[]
    connectOrCreate?: CategoryCreateOrConnectWithoutUserInput | CategoryCreateOrConnectWithoutUserInput[]
    upsert?: CategoryUpsertWithWhereUniqueWithoutUserInput | CategoryUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: CategoryCreateManyUserInputEnvelope
    set?: CategoryWhereUniqueInput | CategoryWhereUniqueInput[]
    disconnect?: CategoryWhereUniqueInput | CategoryWhereUniqueInput[]
    delete?: CategoryWhereUniqueInput | CategoryWhereUniqueInput[]
    connect?: CategoryWhereUniqueInput | CategoryWhereUniqueInput[]
    update?: CategoryUpdateWithWhereUniqueWithoutUserInput | CategoryUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: CategoryUpdateManyWithWhereWithoutUserInput | CategoryUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: CategoryScalarWhereInput | CategoryScalarWhereInput[]
  }

  export type BillUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<BillCreateWithoutUserInput, BillUncheckedCreateWithoutUserInput> | BillCreateWithoutUserInput[] | BillUncheckedCreateWithoutUserInput[]
    connectOrCreate?: BillCreateOrConnectWithoutUserInput | BillCreateOrConnectWithoutUserInput[]
    upsert?: BillUpsertWithWhereUniqueWithoutUserInput | BillUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: BillCreateManyUserInputEnvelope
    set?: BillWhereUniqueInput | BillWhereUniqueInput[]
    disconnect?: BillWhereUniqueInput | BillWhereUniqueInput[]
    delete?: BillWhereUniqueInput | BillWhereUniqueInput[]
    connect?: BillWhereUniqueInput | BillWhereUniqueInput[]
    update?: BillUpdateWithWhereUniqueWithoutUserInput | BillUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: BillUpdateManyWithWhereWithoutUserInput | BillUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: BillScalarWhereInput | BillScalarWhereInput[]
  }

  export type SavingsGoalUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<SavingsGoalCreateWithoutUserInput, SavingsGoalUncheckedCreateWithoutUserInput> | SavingsGoalCreateWithoutUserInput[] | SavingsGoalUncheckedCreateWithoutUserInput[]
    connectOrCreate?: SavingsGoalCreateOrConnectWithoutUserInput | SavingsGoalCreateOrConnectWithoutUserInput[]
    upsert?: SavingsGoalUpsertWithWhereUniqueWithoutUserInput | SavingsGoalUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: SavingsGoalCreateManyUserInputEnvelope
    set?: SavingsGoalWhereUniqueInput | SavingsGoalWhereUniqueInput[]
    disconnect?: SavingsGoalWhereUniqueInput | SavingsGoalWhereUniqueInput[]
    delete?: SavingsGoalWhereUniqueInput | SavingsGoalWhereUniqueInput[]
    connect?: SavingsGoalWhereUniqueInput | SavingsGoalWhereUniqueInput[]
    update?: SavingsGoalUpdateWithWhereUniqueWithoutUserInput | SavingsGoalUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: SavingsGoalUpdateManyWithWhereWithoutUserInput | SavingsGoalUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: SavingsGoalScalarWhereInput | SavingsGoalScalarWhereInput[]
  }

  export type PlanItemUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<PlanItemCreateWithoutUserInput, PlanItemUncheckedCreateWithoutUserInput> | PlanItemCreateWithoutUserInput[] | PlanItemUncheckedCreateWithoutUserInput[]
    connectOrCreate?: PlanItemCreateOrConnectWithoutUserInput | PlanItemCreateOrConnectWithoutUserInput[]
    upsert?: PlanItemUpsertWithWhereUniqueWithoutUserInput | PlanItemUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: PlanItemCreateManyUserInputEnvelope
    set?: PlanItemWhereUniqueInput | PlanItemWhereUniqueInput[]
    disconnect?: PlanItemWhereUniqueInput | PlanItemWhereUniqueInput[]
    delete?: PlanItemWhereUniqueInput | PlanItemWhereUniqueInput[]
    connect?: PlanItemWhereUniqueInput | PlanItemWhereUniqueInput[]
    update?: PlanItemUpdateWithWhereUniqueWithoutUserInput | PlanItemUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: PlanItemUpdateManyWithWhereWithoutUserInput | PlanItemUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: PlanItemScalarWhereInput | PlanItemScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutTransactionsInput = {
    create?: XOR<UserCreateWithoutTransactionsInput, UserUncheckedCreateWithoutTransactionsInput>
    connectOrCreate?: UserCreateOrConnectWithoutTransactionsInput
    connect?: UserWhereUniqueInput
  }

  export type CategoryCreateNestedOneWithoutTransactionsInput = {
    create?: XOR<CategoryCreateWithoutTransactionsInput, CategoryUncheckedCreateWithoutTransactionsInput>
    connectOrCreate?: CategoryCreateOrConnectWithoutTransactionsInput
    connect?: CategoryWhereUniqueInput
  }

  export type BillCreateNestedOneWithoutTransactionsInput = {
    create?: XOR<BillCreateWithoutTransactionsInput, BillUncheckedCreateWithoutTransactionsInput>
    connectOrCreate?: BillCreateOrConnectWithoutTransactionsInput
    connect?: BillWhereUniqueInput
  }

  export type FloatFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type EnumTransactionTypeFieldUpdateOperationsInput = {
    set?: $Enums.TransactionType
  }

  export type UserUpdateOneRequiredWithoutTransactionsNestedInput = {
    create?: XOR<UserCreateWithoutTransactionsInput, UserUncheckedCreateWithoutTransactionsInput>
    connectOrCreate?: UserCreateOrConnectWithoutTransactionsInput
    upsert?: UserUpsertWithoutTransactionsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutTransactionsInput, UserUpdateWithoutTransactionsInput>, UserUncheckedUpdateWithoutTransactionsInput>
  }

  export type CategoryUpdateOneRequiredWithoutTransactionsNestedInput = {
    create?: XOR<CategoryCreateWithoutTransactionsInput, CategoryUncheckedCreateWithoutTransactionsInput>
    connectOrCreate?: CategoryCreateOrConnectWithoutTransactionsInput
    upsert?: CategoryUpsertWithoutTransactionsInput
    connect?: CategoryWhereUniqueInput
    update?: XOR<XOR<CategoryUpdateToOneWithWhereWithoutTransactionsInput, CategoryUpdateWithoutTransactionsInput>, CategoryUncheckedUpdateWithoutTransactionsInput>
  }

  export type BillUpdateOneWithoutTransactionsNestedInput = {
    create?: XOR<BillCreateWithoutTransactionsInput, BillUncheckedCreateWithoutTransactionsInput>
    connectOrCreate?: BillCreateOrConnectWithoutTransactionsInput
    upsert?: BillUpsertWithoutTransactionsInput
    disconnect?: boolean
    delete?: BillWhereInput | boolean
    connect?: BillWhereUniqueInput
    update?: XOR<XOR<BillUpdateToOneWithWhereWithoutTransactionsInput, BillUpdateWithoutTransactionsInput>, BillUncheckedUpdateWithoutTransactionsInput>
  }

  export type UserCreateNestedOneWithoutCategoriesInput = {
    create?: XOR<UserCreateWithoutCategoriesInput, UserUncheckedCreateWithoutCategoriesInput>
    connectOrCreate?: UserCreateOrConnectWithoutCategoriesInput
    connect?: UserWhereUniqueInput
  }

  export type TransactionCreateNestedManyWithoutCategoryInput = {
    create?: XOR<TransactionCreateWithoutCategoryInput, TransactionUncheckedCreateWithoutCategoryInput> | TransactionCreateWithoutCategoryInput[] | TransactionUncheckedCreateWithoutCategoryInput[]
    connectOrCreate?: TransactionCreateOrConnectWithoutCategoryInput | TransactionCreateOrConnectWithoutCategoryInput[]
    createMany?: TransactionCreateManyCategoryInputEnvelope
    connect?: TransactionWhereUniqueInput | TransactionWhereUniqueInput[]
  }

  export type BillCreateNestedManyWithoutCategoryInput = {
    create?: XOR<BillCreateWithoutCategoryInput, BillUncheckedCreateWithoutCategoryInput> | BillCreateWithoutCategoryInput[] | BillUncheckedCreateWithoutCategoryInput[]
    connectOrCreate?: BillCreateOrConnectWithoutCategoryInput | BillCreateOrConnectWithoutCategoryInput[]
    createMany?: BillCreateManyCategoryInputEnvelope
    connect?: BillWhereUniqueInput | BillWhereUniqueInput[]
  }

  export type CategoryAllocationCreateNestedManyWithoutCategoryInput = {
    create?: XOR<CategoryAllocationCreateWithoutCategoryInput, CategoryAllocationUncheckedCreateWithoutCategoryInput> | CategoryAllocationCreateWithoutCategoryInput[] | CategoryAllocationUncheckedCreateWithoutCategoryInput[]
    connectOrCreate?: CategoryAllocationCreateOrConnectWithoutCategoryInput | CategoryAllocationCreateOrConnectWithoutCategoryInput[]
    createMany?: CategoryAllocationCreateManyCategoryInputEnvelope
    connect?: CategoryAllocationWhereUniqueInput | CategoryAllocationWhereUniqueInput[]
  }

  export type PlanItemCreateNestedManyWithoutCategoryInput = {
    create?: XOR<PlanItemCreateWithoutCategoryInput, PlanItemUncheckedCreateWithoutCategoryInput> | PlanItemCreateWithoutCategoryInput[] | PlanItemUncheckedCreateWithoutCategoryInput[]
    connectOrCreate?: PlanItemCreateOrConnectWithoutCategoryInput | PlanItemCreateOrConnectWithoutCategoryInput[]
    createMany?: PlanItemCreateManyCategoryInputEnvelope
    connect?: PlanItemWhereUniqueInput | PlanItemWhereUniqueInput[]
  }

  export type TransactionUncheckedCreateNestedManyWithoutCategoryInput = {
    create?: XOR<TransactionCreateWithoutCategoryInput, TransactionUncheckedCreateWithoutCategoryInput> | TransactionCreateWithoutCategoryInput[] | TransactionUncheckedCreateWithoutCategoryInput[]
    connectOrCreate?: TransactionCreateOrConnectWithoutCategoryInput | TransactionCreateOrConnectWithoutCategoryInput[]
    createMany?: TransactionCreateManyCategoryInputEnvelope
    connect?: TransactionWhereUniqueInput | TransactionWhereUniqueInput[]
  }

  export type BillUncheckedCreateNestedManyWithoutCategoryInput = {
    create?: XOR<BillCreateWithoutCategoryInput, BillUncheckedCreateWithoutCategoryInput> | BillCreateWithoutCategoryInput[] | BillUncheckedCreateWithoutCategoryInput[]
    connectOrCreate?: BillCreateOrConnectWithoutCategoryInput | BillCreateOrConnectWithoutCategoryInput[]
    createMany?: BillCreateManyCategoryInputEnvelope
    connect?: BillWhereUniqueInput | BillWhereUniqueInput[]
  }

  export type CategoryAllocationUncheckedCreateNestedManyWithoutCategoryInput = {
    create?: XOR<CategoryAllocationCreateWithoutCategoryInput, CategoryAllocationUncheckedCreateWithoutCategoryInput> | CategoryAllocationCreateWithoutCategoryInput[] | CategoryAllocationUncheckedCreateWithoutCategoryInput[]
    connectOrCreate?: CategoryAllocationCreateOrConnectWithoutCategoryInput | CategoryAllocationCreateOrConnectWithoutCategoryInput[]
    createMany?: CategoryAllocationCreateManyCategoryInputEnvelope
    connect?: CategoryAllocationWhereUniqueInput | CategoryAllocationWhereUniqueInput[]
  }

  export type PlanItemUncheckedCreateNestedManyWithoutCategoryInput = {
    create?: XOR<PlanItemCreateWithoutCategoryInput, PlanItemUncheckedCreateWithoutCategoryInput> | PlanItemCreateWithoutCategoryInput[] | PlanItemUncheckedCreateWithoutCategoryInput[]
    connectOrCreate?: PlanItemCreateOrConnectWithoutCategoryInput | PlanItemCreateOrConnectWithoutCategoryInput[]
    createMany?: PlanItemCreateManyCategoryInputEnvelope
    connect?: PlanItemWhereUniqueInput | PlanItemWhereUniqueInput[]
  }

  export type EnumCategoryTypeFieldUpdateOperationsInput = {
    set?: $Enums.CategoryType
  }

  export type UserUpdateOneRequiredWithoutCategoriesNestedInput = {
    create?: XOR<UserCreateWithoutCategoriesInput, UserUncheckedCreateWithoutCategoriesInput>
    connectOrCreate?: UserCreateOrConnectWithoutCategoriesInput
    upsert?: UserUpsertWithoutCategoriesInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutCategoriesInput, UserUpdateWithoutCategoriesInput>, UserUncheckedUpdateWithoutCategoriesInput>
  }

  export type TransactionUpdateManyWithoutCategoryNestedInput = {
    create?: XOR<TransactionCreateWithoutCategoryInput, TransactionUncheckedCreateWithoutCategoryInput> | TransactionCreateWithoutCategoryInput[] | TransactionUncheckedCreateWithoutCategoryInput[]
    connectOrCreate?: TransactionCreateOrConnectWithoutCategoryInput | TransactionCreateOrConnectWithoutCategoryInput[]
    upsert?: TransactionUpsertWithWhereUniqueWithoutCategoryInput | TransactionUpsertWithWhereUniqueWithoutCategoryInput[]
    createMany?: TransactionCreateManyCategoryInputEnvelope
    set?: TransactionWhereUniqueInput | TransactionWhereUniqueInput[]
    disconnect?: TransactionWhereUniqueInput | TransactionWhereUniqueInput[]
    delete?: TransactionWhereUniqueInput | TransactionWhereUniqueInput[]
    connect?: TransactionWhereUniqueInput | TransactionWhereUniqueInput[]
    update?: TransactionUpdateWithWhereUniqueWithoutCategoryInput | TransactionUpdateWithWhereUniqueWithoutCategoryInput[]
    updateMany?: TransactionUpdateManyWithWhereWithoutCategoryInput | TransactionUpdateManyWithWhereWithoutCategoryInput[]
    deleteMany?: TransactionScalarWhereInput | TransactionScalarWhereInput[]
  }

  export type BillUpdateManyWithoutCategoryNestedInput = {
    create?: XOR<BillCreateWithoutCategoryInput, BillUncheckedCreateWithoutCategoryInput> | BillCreateWithoutCategoryInput[] | BillUncheckedCreateWithoutCategoryInput[]
    connectOrCreate?: BillCreateOrConnectWithoutCategoryInput | BillCreateOrConnectWithoutCategoryInput[]
    upsert?: BillUpsertWithWhereUniqueWithoutCategoryInput | BillUpsertWithWhereUniqueWithoutCategoryInput[]
    createMany?: BillCreateManyCategoryInputEnvelope
    set?: BillWhereUniqueInput | BillWhereUniqueInput[]
    disconnect?: BillWhereUniqueInput | BillWhereUniqueInput[]
    delete?: BillWhereUniqueInput | BillWhereUniqueInput[]
    connect?: BillWhereUniqueInput | BillWhereUniqueInput[]
    update?: BillUpdateWithWhereUniqueWithoutCategoryInput | BillUpdateWithWhereUniqueWithoutCategoryInput[]
    updateMany?: BillUpdateManyWithWhereWithoutCategoryInput | BillUpdateManyWithWhereWithoutCategoryInput[]
    deleteMany?: BillScalarWhereInput | BillScalarWhereInput[]
  }

  export type CategoryAllocationUpdateManyWithoutCategoryNestedInput = {
    create?: XOR<CategoryAllocationCreateWithoutCategoryInput, CategoryAllocationUncheckedCreateWithoutCategoryInput> | CategoryAllocationCreateWithoutCategoryInput[] | CategoryAllocationUncheckedCreateWithoutCategoryInput[]
    connectOrCreate?: CategoryAllocationCreateOrConnectWithoutCategoryInput | CategoryAllocationCreateOrConnectWithoutCategoryInput[]
    upsert?: CategoryAllocationUpsertWithWhereUniqueWithoutCategoryInput | CategoryAllocationUpsertWithWhereUniqueWithoutCategoryInput[]
    createMany?: CategoryAllocationCreateManyCategoryInputEnvelope
    set?: CategoryAllocationWhereUniqueInput | CategoryAllocationWhereUniqueInput[]
    disconnect?: CategoryAllocationWhereUniqueInput | CategoryAllocationWhereUniqueInput[]
    delete?: CategoryAllocationWhereUniqueInput | CategoryAllocationWhereUniqueInput[]
    connect?: CategoryAllocationWhereUniqueInput | CategoryAllocationWhereUniqueInput[]
    update?: CategoryAllocationUpdateWithWhereUniqueWithoutCategoryInput | CategoryAllocationUpdateWithWhereUniqueWithoutCategoryInput[]
    updateMany?: CategoryAllocationUpdateManyWithWhereWithoutCategoryInput | CategoryAllocationUpdateManyWithWhereWithoutCategoryInput[]
    deleteMany?: CategoryAllocationScalarWhereInput | CategoryAllocationScalarWhereInput[]
  }

  export type PlanItemUpdateManyWithoutCategoryNestedInput = {
    create?: XOR<PlanItemCreateWithoutCategoryInput, PlanItemUncheckedCreateWithoutCategoryInput> | PlanItemCreateWithoutCategoryInput[] | PlanItemUncheckedCreateWithoutCategoryInput[]
    connectOrCreate?: PlanItemCreateOrConnectWithoutCategoryInput | PlanItemCreateOrConnectWithoutCategoryInput[]
    upsert?: PlanItemUpsertWithWhereUniqueWithoutCategoryInput | PlanItemUpsertWithWhereUniqueWithoutCategoryInput[]
    createMany?: PlanItemCreateManyCategoryInputEnvelope
    set?: PlanItemWhereUniqueInput | PlanItemWhereUniqueInput[]
    disconnect?: PlanItemWhereUniqueInput | PlanItemWhereUniqueInput[]
    delete?: PlanItemWhereUniqueInput | PlanItemWhereUniqueInput[]
    connect?: PlanItemWhereUniqueInput | PlanItemWhereUniqueInput[]
    update?: PlanItemUpdateWithWhereUniqueWithoutCategoryInput | PlanItemUpdateWithWhereUniqueWithoutCategoryInput[]
    updateMany?: PlanItemUpdateManyWithWhereWithoutCategoryInput | PlanItemUpdateManyWithWhereWithoutCategoryInput[]
    deleteMany?: PlanItemScalarWhereInput | PlanItemScalarWhereInput[]
  }

  export type TransactionUncheckedUpdateManyWithoutCategoryNestedInput = {
    create?: XOR<TransactionCreateWithoutCategoryInput, TransactionUncheckedCreateWithoutCategoryInput> | TransactionCreateWithoutCategoryInput[] | TransactionUncheckedCreateWithoutCategoryInput[]
    connectOrCreate?: TransactionCreateOrConnectWithoutCategoryInput | TransactionCreateOrConnectWithoutCategoryInput[]
    upsert?: TransactionUpsertWithWhereUniqueWithoutCategoryInput | TransactionUpsertWithWhereUniqueWithoutCategoryInput[]
    createMany?: TransactionCreateManyCategoryInputEnvelope
    set?: TransactionWhereUniqueInput | TransactionWhereUniqueInput[]
    disconnect?: TransactionWhereUniqueInput | TransactionWhereUniqueInput[]
    delete?: TransactionWhereUniqueInput | TransactionWhereUniqueInput[]
    connect?: TransactionWhereUniqueInput | TransactionWhereUniqueInput[]
    update?: TransactionUpdateWithWhereUniqueWithoutCategoryInput | TransactionUpdateWithWhereUniqueWithoutCategoryInput[]
    updateMany?: TransactionUpdateManyWithWhereWithoutCategoryInput | TransactionUpdateManyWithWhereWithoutCategoryInput[]
    deleteMany?: TransactionScalarWhereInput | TransactionScalarWhereInput[]
  }

  export type BillUncheckedUpdateManyWithoutCategoryNestedInput = {
    create?: XOR<BillCreateWithoutCategoryInput, BillUncheckedCreateWithoutCategoryInput> | BillCreateWithoutCategoryInput[] | BillUncheckedCreateWithoutCategoryInput[]
    connectOrCreate?: BillCreateOrConnectWithoutCategoryInput | BillCreateOrConnectWithoutCategoryInput[]
    upsert?: BillUpsertWithWhereUniqueWithoutCategoryInput | BillUpsertWithWhereUniqueWithoutCategoryInput[]
    createMany?: BillCreateManyCategoryInputEnvelope
    set?: BillWhereUniqueInput | BillWhereUniqueInput[]
    disconnect?: BillWhereUniqueInput | BillWhereUniqueInput[]
    delete?: BillWhereUniqueInput | BillWhereUniqueInput[]
    connect?: BillWhereUniqueInput | BillWhereUniqueInput[]
    update?: BillUpdateWithWhereUniqueWithoutCategoryInput | BillUpdateWithWhereUniqueWithoutCategoryInput[]
    updateMany?: BillUpdateManyWithWhereWithoutCategoryInput | BillUpdateManyWithWhereWithoutCategoryInput[]
    deleteMany?: BillScalarWhereInput | BillScalarWhereInput[]
  }

  export type CategoryAllocationUncheckedUpdateManyWithoutCategoryNestedInput = {
    create?: XOR<CategoryAllocationCreateWithoutCategoryInput, CategoryAllocationUncheckedCreateWithoutCategoryInput> | CategoryAllocationCreateWithoutCategoryInput[] | CategoryAllocationUncheckedCreateWithoutCategoryInput[]
    connectOrCreate?: CategoryAllocationCreateOrConnectWithoutCategoryInput | CategoryAllocationCreateOrConnectWithoutCategoryInput[]
    upsert?: CategoryAllocationUpsertWithWhereUniqueWithoutCategoryInput | CategoryAllocationUpsertWithWhereUniqueWithoutCategoryInput[]
    createMany?: CategoryAllocationCreateManyCategoryInputEnvelope
    set?: CategoryAllocationWhereUniqueInput | CategoryAllocationWhereUniqueInput[]
    disconnect?: CategoryAllocationWhereUniqueInput | CategoryAllocationWhereUniqueInput[]
    delete?: CategoryAllocationWhereUniqueInput | CategoryAllocationWhereUniqueInput[]
    connect?: CategoryAllocationWhereUniqueInput | CategoryAllocationWhereUniqueInput[]
    update?: CategoryAllocationUpdateWithWhereUniqueWithoutCategoryInput | CategoryAllocationUpdateWithWhereUniqueWithoutCategoryInput[]
    updateMany?: CategoryAllocationUpdateManyWithWhereWithoutCategoryInput | CategoryAllocationUpdateManyWithWhereWithoutCategoryInput[]
    deleteMany?: CategoryAllocationScalarWhereInput | CategoryAllocationScalarWhereInput[]
  }

  export type PlanItemUncheckedUpdateManyWithoutCategoryNestedInput = {
    create?: XOR<PlanItemCreateWithoutCategoryInput, PlanItemUncheckedCreateWithoutCategoryInput> | PlanItemCreateWithoutCategoryInput[] | PlanItemUncheckedCreateWithoutCategoryInput[]
    connectOrCreate?: PlanItemCreateOrConnectWithoutCategoryInput | PlanItemCreateOrConnectWithoutCategoryInput[]
    upsert?: PlanItemUpsertWithWhereUniqueWithoutCategoryInput | PlanItemUpsertWithWhereUniqueWithoutCategoryInput[]
    createMany?: PlanItemCreateManyCategoryInputEnvelope
    set?: PlanItemWhereUniqueInput | PlanItemWhereUniqueInput[]
    disconnect?: PlanItemWhereUniqueInput | PlanItemWhereUniqueInput[]
    delete?: PlanItemWhereUniqueInput | PlanItemWhereUniqueInput[]
    connect?: PlanItemWhereUniqueInput | PlanItemWhereUniqueInput[]
    update?: PlanItemUpdateWithWhereUniqueWithoutCategoryInput | PlanItemUpdateWithWhereUniqueWithoutCategoryInput[]
    updateMany?: PlanItemUpdateManyWithWhereWithoutCategoryInput | PlanItemUpdateManyWithWhereWithoutCategoryInput[]
    deleteMany?: PlanItemScalarWhereInput | PlanItemScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutBillsInput = {
    create?: XOR<UserCreateWithoutBillsInput, UserUncheckedCreateWithoutBillsInput>
    connectOrCreate?: UserCreateOrConnectWithoutBillsInput
    connect?: UserWhereUniqueInput
  }

  export type CategoryCreateNestedOneWithoutBillsInput = {
    create?: XOR<CategoryCreateWithoutBillsInput, CategoryUncheckedCreateWithoutBillsInput>
    connectOrCreate?: CategoryCreateOrConnectWithoutBillsInput
    connect?: CategoryWhereUniqueInput
  }

  export type TransactionCreateNestedManyWithoutBillInput = {
    create?: XOR<TransactionCreateWithoutBillInput, TransactionUncheckedCreateWithoutBillInput> | TransactionCreateWithoutBillInput[] | TransactionUncheckedCreateWithoutBillInput[]
    connectOrCreate?: TransactionCreateOrConnectWithoutBillInput | TransactionCreateOrConnectWithoutBillInput[]
    createMany?: TransactionCreateManyBillInputEnvelope
    connect?: TransactionWhereUniqueInput | TransactionWhereUniqueInput[]
  }

  export type TransactionUncheckedCreateNestedManyWithoutBillInput = {
    create?: XOR<TransactionCreateWithoutBillInput, TransactionUncheckedCreateWithoutBillInput> | TransactionCreateWithoutBillInput[] | TransactionUncheckedCreateWithoutBillInput[]
    connectOrCreate?: TransactionCreateOrConnectWithoutBillInput | TransactionCreateOrConnectWithoutBillInput[]
    createMany?: TransactionCreateManyBillInputEnvelope
    connect?: TransactionWhereUniqueInput | TransactionWhereUniqueInput[]
  }

  export type EnumBillFrequencyFieldUpdateOperationsInput = {
    set?: $Enums.BillFrequency
  }

  export type UserUpdateOneRequiredWithoutBillsNestedInput = {
    create?: XOR<UserCreateWithoutBillsInput, UserUncheckedCreateWithoutBillsInput>
    connectOrCreate?: UserCreateOrConnectWithoutBillsInput
    upsert?: UserUpsertWithoutBillsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutBillsInput, UserUpdateWithoutBillsInput>, UserUncheckedUpdateWithoutBillsInput>
  }

  export type CategoryUpdateOneRequiredWithoutBillsNestedInput = {
    create?: XOR<CategoryCreateWithoutBillsInput, CategoryUncheckedCreateWithoutBillsInput>
    connectOrCreate?: CategoryCreateOrConnectWithoutBillsInput
    upsert?: CategoryUpsertWithoutBillsInput
    connect?: CategoryWhereUniqueInput
    update?: XOR<XOR<CategoryUpdateToOneWithWhereWithoutBillsInput, CategoryUpdateWithoutBillsInput>, CategoryUncheckedUpdateWithoutBillsInput>
  }

  export type TransactionUpdateManyWithoutBillNestedInput = {
    create?: XOR<TransactionCreateWithoutBillInput, TransactionUncheckedCreateWithoutBillInput> | TransactionCreateWithoutBillInput[] | TransactionUncheckedCreateWithoutBillInput[]
    connectOrCreate?: TransactionCreateOrConnectWithoutBillInput | TransactionCreateOrConnectWithoutBillInput[]
    upsert?: TransactionUpsertWithWhereUniqueWithoutBillInput | TransactionUpsertWithWhereUniqueWithoutBillInput[]
    createMany?: TransactionCreateManyBillInputEnvelope
    set?: TransactionWhereUniqueInput | TransactionWhereUniqueInput[]
    disconnect?: TransactionWhereUniqueInput | TransactionWhereUniqueInput[]
    delete?: TransactionWhereUniqueInput | TransactionWhereUniqueInput[]
    connect?: TransactionWhereUniqueInput | TransactionWhereUniqueInput[]
    update?: TransactionUpdateWithWhereUniqueWithoutBillInput | TransactionUpdateWithWhereUniqueWithoutBillInput[]
    updateMany?: TransactionUpdateManyWithWhereWithoutBillInput | TransactionUpdateManyWithWhereWithoutBillInput[]
    deleteMany?: TransactionScalarWhereInput | TransactionScalarWhereInput[]
  }

  export type TransactionUncheckedUpdateManyWithoutBillNestedInput = {
    create?: XOR<TransactionCreateWithoutBillInput, TransactionUncheckedCreateWithoutBillInput> | TransactionCreateWithoutBillInput[] | TransactionUncheckedCreateWithoutBillInput[]
    connectOrCreate?: TransactionCreateOrConnectWithoutBillInput | TransactionCreateOrConnectWithoutBillInput[]
    upsert?: TransactionUpsertWithWhereUniqueWithoutBillInput | TransactionUpsertWithWhereUniqueWithoutBillInput[]
    createMany?: TransactionCreateManyBillInputEnvelope
    set?: TransactionWhereUniqueInput | TransactionWhereUniqueInput[]
    disconnect?: TransactionWhereUniqueInput | TransactionWhereUniqueInput[]
    delete?: TransactionWhereUniqueInput | TransactionWhereUniqueInput[]
    connect?: TransactionWhereUniqueInput | TransactionWhereUniqueInput[]
    update?: TransactionUpdateWithWhereUniqueWithoutBillInput | TransactionUpdateWithWhereUniqueWithoutBillInput[]
    updateMany?: TransactionUpdateManyWithWhereWithoutBillInput | TransactionUpdateManyWithWhereWithoutBillInput[]
    deleteMany?: TransactionScalarWhereInput | TransactionScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutBudgetsInput = {
    create?: XOR<UserCreateWithoutBudgetsInput, UserUncheckedCreateWithoutBudgetsInput>
    connectOrCreate?: UserCreateOrConnectWithoutBudgetsInput
    connect?: UserWhereUniqueInput
  }

  export type CategoryAllocationCreateNestedManyWithoutBudgetInput = {
    create?: XOR<CategoryAllocationCreateWithoutBudgetInput, CategoryAllocationUncheckedCreateWithoutBudgetInput> | CategoryAllocationCreateWithoutBudgetInput[] | CategoryAllocationUncheckedCreateWithoutBudgetInput[]
    connectOrCreate?: CategoryAllocationCreateOrConnectWithoutBudgetInput | CategoryAllocationCreateOrConnectWithoutBudgetInput[]
    createMany?: CategoryAllocationCreateManyBudgetInputEnvelope
    connect?: CategoryAllocationWhereUniqueInput | CategoryAllocationWhereUniqueInput[]
  }

  export type CategoryAllocationUncheckedCreateNestedManyWithoutBudgetInput = {
    create?: XOR<CategoryAllocationCreateWithoutBudgetInput, CategoryAllocationUncheckedCreateWithoutBudgetInput> | CategoryAllocationCreateWithoutBudgetInput[] | CategoryAllocationUncheckedCreateWithoutBudgetInput[]
    connectOrCreate?: CategoryAllocationCreateOrConnectWithoutBudgetInput | CategoryAllocationCreateOrConnectWithoutBudgetInput[]
    createMany?: CategoryAllocationCreateManyBudgetInputEnvelope
    connect?: CategoryAllocationWhereUniqueInput | CategoryAllocationWhereUniqueInput[]
  }

  export type EnumBudgetTimeframeFieldUpdateOperationsInput = {
    set?: $Enums.BudgetTimeframe
  }

  export type UserUpdateOneRequiredWithoutBudgetsNestedInput = {
    create?: XOR<UserCreateWithoutBudgetsInput, UserUncheckedCreateWithoutBudgetsInput>
    connectOrCreate?: UserCreateOrConnectWithoutBudgetsInput
    upsert?: UserUpsertWithoutBudgetsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutBudgetsInput, UserUpdateWithoutBudgetsInput>, UserUncheckedUpdateWithoutBudgetsInput>
  }

  export type CategoryAllocationUpdateManyWithoutBudgetNestedInput = {
    create?: XOR<CategoryAllocationCreateWithoutBudgetInput, CategoryAllocationUncheckedCreateWithoutBudgetInput> | CategoryAllocationCreateWithoutBudgetInput[] | CategoryAllocationUncheckedCreateWithoutBudgetInput[]
    connectOrCreate?: CategoryAllocationCreateOrConnectWithoutBudgetInput | CategoryAllocationCreateOrConnectWithoutBudgetInput[]
    upsert?: CategoryAllocationUpsertWithWhereUniqueWithoutBudgetInput | CategoryAllocationUpsertWithWhereUniqueWithoutBudgetInput[]
    createMany?: CategoryAllocationCreateManyBudgetInputEnvelope
    set?: CategoryAllocationWhereUniqueInput | CategoryAllocationWhereUniqueInput[]
    disconnect?: CategoryAllocationWhereUniqueInput | CategoryAllocationWhereUniqueInput[]
    delete?: CategoryAllocationWhereUniqueInput | CategoryAllocationWhereUniqueInput[]
    connect?: CategoryAllocationWhereUniqueInput | CategoryAllocationWhereUniqueInput[]
    update?: CategoryAllocationUpdateWithWhereUniqueWithoutBudgetInput | CategoryAllocationUpdateWithWhereUniqueWithoutBudgetInput[]
    updateMany?: CategoryAllocationUpdateManyWithWhereWithoutBudgetInput | CategoryAllocationUpdateManyWithWhereWithoutBudgetInput[]
    deleteMany?: CategoryAllocationScalarWhereInput | CategoryAllocationScalarWhereInput[]
  }

  export type CategoryAllocationUncheckedUpdateManyWithoutBudgetNestedInput = {
    create?: XOR<CategoryAllocationCreateWithoutBudgetInput, CategoryAllocationUncheckedCreateWithoutBudgetInput> | CategoryAllocationCreateWithoutBudgetInput[] | CategoryAllocationUncheckedCreateWithoutBudgetInput[]
    connectOrCreate?: CategoryAllocationCreateOrConnectWithoutBudgetInput | CategoryAllocationCreateOrConnectWithoutBudgetInput[]
    upsert?: CategoryAllocationUpsertWithWhereUniqueWithoutBudgetInput | CategoryAllocationUpsertWithWhereUniqueWithoutBudgetInput[]
    createMany?: CategoryAllocationCreateManyBudgetInputEnvelope
    set?: CategoryAllocationWhereUniqueInput | CategoryAllocationWhereUniqueInput[]
    disconnect?: CategoryAllocationWhereUniqueInput | CategoryAllocationWhereUniqueInput[]
    delete?: CategoryAllocationWhereUniqueInput | CategoryAllocationWhereUniqueInput[]
    connect?: CategoryAllocationWhereUniqueInput | CategoryAllocationWhereUniqueInput[]
    update?: CategoryAllocationUpdateWithWhereUniqueWithoutBudgetInput | CategoryAllocationUpdateWithWhereUniqueWithoutBudgetInput[]
    updateMany?: CategoryAllocationUpdateManyWithWhereWithoutBudgetInput | CategoryAllocationUpdateManyWithWhereWithoutBudgetInput[]
    deleteMany?: CategoryAllocationScalarWhereInput | CategoryAllocationScalarWhereInput[]
  }

  export type BudgetCreateNestedOneWithoutCategoryAllocationsInput = {
    create?: XOR<BudgetCreateWithoutCategoryAllocationsInput, BudgetUncheckedCreateWithoutCategoryAllocationsInput>
    connectOrCreate?: BudgetCreateOrConnectWithoutCategoryAllocationsInput
    connect?: BudgetWhereUniqueInput
  }

  export type CategoryCreateNestedOneWithoutAllocationsInput = {
    create?: XOR<CategoryCreateWithoutAllocationsInput, CategoryUncheckedCreateWithoutAllocationsInput>
    connectOrCreate?: CategoryCreateOrConnectWithoutAllocationsInput
    connect?: CategoryWhereUniqueInput
  }

  export type BudgetUpdateOneRequiredWithoutCategoryAllocationsNestedInput = {
    create?: XOR<BudgetCreateWithoutCategoryAllocationsInput, BudgetUncheckedCreateWithoutCategoryAllocationsInput>
    connectOrCreate?: BudgetCreateOrConnectWithoutCategoryAllocationsInput
    upsert?: BudgetUpsertWithoutCategoryAllocationsInput
    connect?: BudgetWhereUniqueInput
    update?: XOR<XOR<BudgetUpdateToOneWithWhereWithoutCategoryAllocationsInput, BudgetUpdateWithoutCategoryAllocationsInput>, BudgetUncheckedUpdateWithoutCategoryAllocationsInput>
  }

  export type CategoryUpdateOneRequiredWithoutAllocationsNestedInput = {
    create?: XOR<CategoryCreateWithoutAllocationsInput, CategoryUncheckedCreateWithoutAllocationsInput>
    connectOrCreate?: CategoryCreateOrConnectWithoutAllocationsInput
    upsert?: CategoryUpsertWithoutAllocationsInput
    connect?: CategoryWhereUniqueInput
    update?: XOR<XOR<CategoryUpdateToOneWithWhereWithoutAllocationsInput, CategoryUpdateWithoutAllocationsInput>, CategoryUncheckedUpdateWithoutAllocationsInput>
  }

  export type UserCreateNestedOneWithoutSavingsGoalsInput = {
    create?: XOR<UserCreateWithoutSavingsGoalsInput, UserUncheckedCreateWithoutSavingsGoalsInput>
    connectOrCreate?: UserCreateOrConnectWithoutSavingsGoalsInput
    connect?: UserWhereUniqueInput
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
    unset?: boolean
  }

  export type UserUpdateOneRequiredWithoutSavingsGoalsNestedInput = {
    create?: XOR<UserCreateWithoutSavingsGoalsInput, UserUncheckedCreateWithoutSavingsGoalsInput>
    connectOrCreate?: UserCreateOrConnectWithoutSavingsGoalsInput
    upsert?: UserUpsertWithoutSavingsGoalsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutSavingsGoalsInput, UserUpdateWithoutSavingsGoalsInput>, UserUncheckedUpdateWithoutSavingsGoalsInput>
  }

  export type UserCreateNestedOneWithoutPlanItemsInput = {
    create?: XOR<UserCreateWithoutPlanItemsInput, UserUncheckedCreateWithoutPlanItemsInput>
    connectOrCreate?: UserCreateOrConnectWithoutPlanItemsInput
    connect?: UserWhereUniqueInput
  }

  export type CategoryCreateNestedOneWithoutPlanItemsInput = {
    create?: XOR<CategoryCreateWithoutPlanItemsInput, CategoryUncheckedCreateWithoutPlanItemsInput>
    connectOrCreate?: CategoryCreateOrConnectWithoutPlanItemsInput
    connect?: CategoryWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutPlanItemsNestedInput = {
    create?: XOR<UserCreateWithoutPlanItemsInput, UserUncheckedCreateWithoutPlanItemsInput>
    connectOrCreate?: UserCreateOrConnectWithoutPlanItemsInput
    upsert?: UserUpsertWithoutPlanItemsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutPlanItemsInput, UserUpdateWithoutPlanItemsInput>, UserUncheckedUpdateWithoutPlanItemsInput>
  }

  export type CategoryUpdateOneWithoutPlanItemsNestedInput = {
    create?: XOR<CategoryCreateWithoutPlanItemsInput, CategoryUncheckedCreateWithoutPlanItemsInput>
    connectOrCreate?: CategoryCreateOrConnectWithoutPlanItemsInput
    upsert?: CategoryUpsertWithoutPlanItemsInput
    disconnect?: boolean
    delete?: CategoryWhereInput | boolean
    connect?: CategoryWhereUniqueInput
    update?: XOR<XOR<CategoryUpdateToOneWithWhereWithoutPlanItemsInput, CategoryUpdateWithoutPlanItemsInput>, CategoryUncheckedUpdateWithoutPlanItemsInput>
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

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
    isSet?: boolean
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

  export type NestedEnumSymbolPositionFilter<$PrismaModel = never> = {
    equals?: $Enums.SymbolPosition | EnumSymbolPositionFieldRefInput<$PrismaModel>
    in?: $Enums.SymbolPosition[] | ListEnumSymbolPositionFieldRefInput<$PrismaModel>
    notIn?: $Enums.SymbolPosition[] | ListEnumSymbolPositionFieldRefInput<$PrismaModel>
    not?: NestedEnumSymbolPositionFilter<$PrismaModel> | $Enums.SymbolPosition
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

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedEnumRoundingOptionFilter<$PrismaModel = never> = {
    equals?: $Enums.RoundingOption | EnumRoundingOptionFieldRefInput<$PrismaModel>
    in?: $Enums.RoundingOption[] | ListEnumRoundingOptionFieldRefInput<$PrismaModel>
    notIn?: $Enums.RoundingOption[] | ListEnumRoundingOptionFieldRefInput<$PrismaModel>
    not?: NestedEnumRoundingOptionFilter<$PrismaModel> | $Enums.RoundingOption
  }

  export type NestedEnumWeekDayFilter<$PrismaModel = never> = {
    equals?: $Enums.WeekDay | EnumWeekDayFieldRefInput<$PrismaModel>
    in?: $Enums.WeekDay[] | ListEnumWeekDayFieldRefInput<$PrismaModel>
    notIn?: $Enums.WeekDay[] | ListEnumWeekDayFieldRefInput<$PrismaModel>
    not?: NestedEnumWeekDayFilter<$PrismaModel> | $Enums.WeekDay
  }

  export type NestedEnumThemeFilter<$PrismaModel = never> = {
    equals?: $Enums.Theme | EnumThemeFieldRefInput<$PrismaModel>
    in?: $Enums.Theme[] | ListEnumThemeFieldRefInput<$PrismaModel>
    notIn?: $Enums.Theme[] | ListEnumThemeFieldRefInput<$PrismaModel>
    not?: NestedEnumThemeFilter<$PrismaModel> | $Enums.Theme
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

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
    isSet?: boolean
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
    isSet?: boolean
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

  export type NestedEnumSymbolPositionWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.SymbolPosition | EnumSymbolPositionFieldRefInput<$PrismaModel>
    in?: $Enums.SymbolPosition[] | ListEnumSymbolPositionFieldRefInput<$PrismaModel>
    notIn?: $Enums.SymbolPosition[] | ListEnumSymbolPositionFieldRefInput<$PrismaModel>
    not?: NestedEnumSymbolPositionWithAggregatesFilter<$PrismaModel> | $Enums.SymbolPosition
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumSymbolPositionFilter<$PrismaModel>
    _max?: NestedEnumSymbolPositionFilter<$PrismaModel>
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

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type NestedEnumRoundingOptionWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.RoundingOption | EnumRoundingOptionFieldRefInput<$PrismaModel>
    in?: $Enums.RoundingOption[] | ListEnumRoundingOptionFieldRefInput<$PrismaModel>
    notIn?: $Enums.RoundingOption[] | ListEnumRoundingOptionFieldRefInput<$PrismaModel>
    not?: NestedEnumRoundingOptionWithAggregatesFilter<$PrismaModel> | $Enums.RoundingOption
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumRoundingOptionFilter<$PrismaModel>
    _max?: NestedEnumRoundingOptionFilter<$PrismaModel>
  }

  export type NestedEnumWeekDayWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.WeekDay | EnumWeekDayFieldRefInput<$PrismaModel>
    in?: $Enums.WeekDay[] | ListEnumWeekDayFieldRefInput<$PrismaModel>
    notIn?: $Enums.WeekDay[] | ListEnumWeekDayFieldRefInput<$PrismaModel>
    not?: NestedEnumWeekDayWithAggregatesFilter<$PrismaModel> | $Enums.WeekDay
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumWeekDayFilter<$PrismaModel>
    _max?: NestedEnumWeekDayFilter<$PrismaModel>
  }

  export type NestedEnumThemeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Theme | EnumThemeFieldRefInput<$PrismaModel>
    in?: $Enums.Theme[] | ListEnumThemeFieldRefInput<$PrismaModel>
    notIn?: $Enums.Theme[] | ListEnumThemeFieldRefInput<$PrismaModel>
    not?: NestedEnumThemeWithAggregatesFilter<$PrismaModel> | $Enums.Theme
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumThemeFilter<$PrismaModel>
    _max?: NestedEnumThemeFilter<$PrismaModel>
  }

  export type NestedEnumTransactionTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.TransactionType | EnumTransactionTypeFieldRefInput<$PrismaModel>
    in?: $Enums.TransactionType[] | ListEnumTransactionTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.TransactionType[] | ListEnumTransactionTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumTransactionTypeFilter<$PrismaModel> | $Enums.TransactionType
  }

  export type NestedFloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
  }

  export type NestedEnumTransactionTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.TransactionType | EnumTransactionTypeFieldRefInput<$PrismaModel>
    in?: $Enums.TransactionType[] | ListEnumTransactionTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.TransactionType[] | ListEnumTransactionTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumTransactionTypeWithAggregatesFilter<$PrismaModel> | $Enums.TransactionType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumTransactionTypeFilter<$PrismaModel>
    _max?: NestedEnumTransactionTypeFilter<$PrismaModel>
  }

  export type NestedEnumCategoryTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.CategoryType | EnumCategoryTypeFieldRefInput<$PrismaModel>
    in?: $Enums.CategoryType[] | ListEnumCategoryTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.CategoryType[] | ListEnumCategoryTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumCategoryTypeFilter<$PrismaModel> | $Enums.CategoryType
  }

  export type NestedEnumCategoryTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.CategoryType | EnumCategoryTypeFieldRefInput<$PrismaModel>
    in?: $Enums.CategoryType[] | ListEnumCategoryTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.CategoryType[] | ListEnumCategoryTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumCategoryTypeWithAggregatesFilter<$PrismaModel> | $Enums.CategoryType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumCategoryTypeFilter<$PrismaModel>
    _max?: NestedEnumCategoryTypeFilter<$PrismaModel>
  }

  export type NestedEnumBillFrequencyFilter<$PrismaModel = never> = {
    equals?: $Enums.BillFrequency | EnumBillFrequencyFieldRefInput<$PrismaModel>
    in?: $Enums.BillFrequency[] | ListEnumBillFrequencyFieldRefInput<$PrismaModel>
    notIn?: $Enums.BillFrequency[] | ListEnumBillFrequencyFieldRefInput<$PrismaModel>
    not?: NestedEnumBillFrequencyFilter<$PrismaModel> | $Enums.BillFrequency
  }

  export type NestedEnumBillFrequencyWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.BillFrequency | EnumBillFrequencyFieldRefInput<$PrismaModel>
    in?: $Enums.BillFrequency[] | ListEnumBillFrequencyFieldRefInput<$PrismaModel>
    notIn?: $Enums.BillFrequency[] | ListEnumBillFrequencyFieldRefInput<$PrismaModel>
    not?: NestedEnumBillFrequencyWithAggregatesFilter<$PrismaModel> | $Enums.BillFrequency
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumBillFrequencyFilter<$PrismaModel>
    _max?: NestedEnumBillFrequencyFilter<$PrismaModel>
  }

  export type NestedEnumBudgetTimeframeFilter<$PrismaModel = never> = {
    equals?: $Enums.BudgetTimeframe | EnumBudgetTimeframeFieldRefInput<$PrismaModel>
    in?: $Enums.BudgetTimeframe[] | ListEnumBudgetTimeframeFieldRefInput<$PrismaModel>
    notIn?: $Enums.BudgetTimeframe[] | ListEnumBudgetTimeframeFieldRefInput<$PrismaModel>
    not?: NestedEnumBudgetTimeframeFilter<$PrismaModel> | $Enums.BudgetTimeframe
  }

  export type NestedEnumBudgetTimeframeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.BudgetTimeframe | EnumBudgetTimeframeFieldRefInput<$PrismaModel>
    in?: $Enums.BudgetTimeframe[] | ListEnumBudgetTimeframeFieldRefInput<$PrismaModel>
    notIn?: $Enums.BudgetTimeframe[] | ListEnumBudgetTimeframeFieldRefInput<$PrismaModel>
    not?: NestedEnumBudgetTimeframeWithAggregatesFilter<$PrismaModel> | $Enums.BudgetTimeframe
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumBudgetTimeframeFilter<$PrismaModel>
    _max?: NestedEnumBudgetTimeframeFilter<$PrismaModel>
  }

  export type NestedDateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
    isSet?: boolean
  }

  export type NestedDateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
    isSet?: boolean
  }

  export type BudgetCreateWithoutUserInput = {
    id?: string
    name: string
    description?: string | null
    amount: number
    startDate: Date | string
    endDate: Date | string
    type: $Enums.BudgetTimeframe
    createdAt?: Date | string
    updatedAt?: Date | string
    categoryAllocations?: CategoryAllocationCreateNestedManyWithoutBudgetInput
  }

  export type BudgetUncheckedCreateWithoutUserInput = {
    id?: string
    name: string
    description?: string | null
    amount: number
    startDate: Date | string
    endDate: Date | string
    type: $Enums.BudgetTimeframe
    createdAt?: Date | string
    updatedAt?: Date | string
    categoryAllocations?: CategoryAllocationUncheckedCreateNestedManyWithoutBudgetInput
  }

  export type BudgetCreateOrConnectWithoutUserInput = {
    where: BudgetWhereUniqueInput
    create: XOR<BudgetCreateWithoutUserInput, BudgetUncheckedCreateWithoutUserInput>
  }

  export type BudgetCreateManyUserInputEnvelope = {
    data: BudgetCreateManyUserInput | BudgetCreateManyUserInput[]
  }

  export type TransactionCreateWithoutUserInput = {
    id?: string
    amount: number
    description?: string | null
    date: Date | string
    notes?: string | null
    type: $Enums.TransactionType
    createdAt?: Date | string
    updatedAt?: Date | string
    category: CategoryCreateNestedOneWithoutTransactionsInput
    bill?: BillCreateNestedOneWithoutTransactionsInput
  }

  export type TransactionUncheckedCreateWithoutUserInput = {
    id?: string
    amount: number
    description?: string | null
    date: Date | string
    notes?: string | null
    type: $Enums.TransactionType
    createdAt?: Date | string
    updatedAt?: Date | string
    categoryId: string
    billId?: string | null
  }

  export type TransactionCreateOrConnectWithoutUserInput = {
    where: TransactionWhereUniqueInput
    create: XOR<TransactionCreateWithoutUserInput, TransactionUncheckedCreateWithoutUserInput>
  }

  export type TransactionCreateManyUserInputEnvelope = {
    data: TransactionCreateManyUserInput | TransactionCreateManyUserInput[]
  }

  export type CategoryCreateWithoutUserInput = {
    id?: string
    name: string
    description?: string | null
    color: string
    icon: string
    type: $Enums.CategoryType
    isDefault?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    transactions?: TransactionCreateNestedManyWithoutCategoryInput
    bills?: BillCreateNestedManyWithoutCategoryInput
    allocations?: CategoryAllocationCreateNestedManyWithoutCategoryInput
    planItems?: PlanItemCreateNestedManyWithoutCategoryInput
  }

  export type CategoryUncheckedCreateWithoutUserInput = {
    id?: string
    name: string
    description?: string | null
    color: string
    icon: string
    type: $Enums.CategoryType
    isDefault?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    transactions?: TransactionUncheckedCreateNestedManyWithoutCategoryInput
    bills?: BillUncheckedCreateNestedManyWithoutCategoryInput
    allocations?: CategoryAllocationUncheckedCreateNestedManyWithoutCategoryInput
    planItems?: PlanItemUncheckedCreateNestedManyWithoutCategoryInput
  }

  export type CategoryCreateOrConnectWithoutUserInput = {
    where: CategoryWhereUniqueInput
    create: XOR<CategoryCreateWithoutUserInput, CategoryUncheckedCreateWithoutUserInput>
  }

  export type CategoryCreateManyUserInputEnvelope = {
    data: CategoryCreateManyUserInput | CategoryCreateManyUserInput[]
  }

  export type BillCreateWithoutUserInput = {
    id?: string
    name: string
    amount: number
    dueDate: Date | string
    frequency: $Enums.BillFrequency
    autopay?: boolean
    notes?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    category: CategoryCreateNestedOneWithoutBillsInput
    transactions?: TransactionCreateNestedManyWithoutBillInput
  }

  export type BillUncheckedCreateWithoutUserInput = {
    id?: string
    name: string
    amount: number
    dueDate: Date | string
    frequency: $Enums.BillFrequency
    autopay?: boolean
    notes?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    categoryId: string
    transactions?: TransactionUncheckedCreateNestedManyWithoutBillInput
  }

  export type BillCreateOrConnectWithoutUserInput = {
    where: BillWhereUniqueInput
    create: XOR<BillCreateWithoutUserInput, BillUncheckedCreateWithoutUserInput>
  }

  export type BillCreateManyUserInputEnvelope = {
    data: BillCreateManyUserInput | BillCreateManyUserInput[]
  }

  export type SavingsGoalCreateWithoutUserInput = {
    id?: string
    name: string
    targetAmount: number
    currentAmount?: number
    targetDate?: Date | string | null
    completed?: boolean
    notes?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type SavingsGoalUncheckedCreateWithoutUserInput = {
    id?: string
    name: string
    targetAmount: number
    currentAmount?: number
    targetDate?: Date | string | null
    completed?: boolean
    notes?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type SavingsGoalCreateOrConnectWithoutUserInput = {
    where: SavingsGoalWhereUniqueInput
    create: XOR<SavingsGoalCreateWithoutUserInput, SavingsGoalUncheckedCreateWithoutUserInput>
  }

  export type SavingsGoalCreateManyUserInputEnvelope = {
    data: SavingsGoalCreateManyUserInput | SavingsGoalCreateManyUserInput[]
  }

  export type PlanItemCreateWithoutUserInput = {
    id?: string
    description: string
    amount: number
    notes?: string | null
    planType: string
    itemType: string
    createdAt?: Date | string
    updatedAt?: Date | string
    category?: CategoryCreateNestedOneWithoutPlanItemsInput
  }

  export type PlanItemUncheckedCreateWithoutUserInput = {
    id?: string
    description: string
    amount: number
    notes?: string | null
    planType: string
    itemType: string
    createdAt?: Date | string
    updatedAt?: Date | string
    categoryId?: string | null
  }

  export type PlanItemCreateOrConnectWithoutUserInput = {
    where: PlanItemWhereUniqueInput
    create: XOR<PlanItemCreateWithoutUserInput, PlanItemUncheckedCreateWithoutUserInput>
  }

  export type PlanItemCreateManyUserInputEnvelope = {
    data: PlanItemCreateManyUserInput | PlanItemCreateManyUserInput[]
  }

  export type BudgetUpsertWithWhereUniqueWithoutUserInput = {
    where: BudgetWhereUniqueInput
    update: XOR<BudgetUpdateWithoutUserInput, BudgetUncheckedUpdateWithoutUserInput>
    create: XOR<BudgetCreateWithoutUserInput, BudgetUncheckedCreateWithoutUserInput>
  }

  export type BudgetUpdateWithWhereUniqueWithoutUserInput = {
    where: BudgetWhereUniqueInput
    data: XOR<BudgetUpdateWithoutUserInput, BudgetUncheckedUpdateWithoutUserInput>
  }

  export type BudgetUpdateManyWithWhereWithoutUserInput = {
    where: BudgetScalarWhereInput
    data: XOR<BudgetUpdateManyMutationInput, BudgetUncheckedUpdateManyWithoutUserInput>
  }

  export type BudgetScalarWhereInput = {
    AND?: BudgetScalarWhereInput | BudgetScalarWhereInput[]
    OR?: BudgetScalarWhereInput[]
    NOT?: BudgetScalarWhereInput | BudgetScalarWhereInput[]
    id?: StringFilter<"Budget"> | string
    name?: StringFilter<"Budget"> | string
    description?: StringNullableFilter<"Budget"> | string | null
    amount?: FloatFilter<"Budget"> | number
    startDate?: DateTimeFilter<"Budget"> | Date | string
    endDate?: DateTimeFilter<"Budget"> | Date | string
    type?: EnumBudgetTimeframeFilter<"Budget"> | $Enums.BudgetTimeframe
    createdAt?: DateTimeFilter<"Budget"> | Date | string
    updatedAt?: DateTimeFilter<"Budget"> | Date | string
    userId?: StringFilter<"Budget"> | string
  }

  export type TransactionUpsertWithWhereUniqueWithoutUserInput = {
    where: TransactionWhereUniqueInput
    update: XOR<TransactionUpdateWithoutUserInput, TransactionUncheckedUpdateWithoutUserInput>
    create: XOR<TransactionCreateWithoutUserInput, TransactionUncheckedCreateWithoutUserInput>
  }

  export type TransactionUpdateWithWhereUniqueWithoutUserInput = {
    where: TransactionWhereUniqueInput
    data: XOR<TransactionUpdateWithoutUserInput, TransactionUncheckedUpdateWithoutUserInput>
  }

  export type TransactionUpdateManyWithWhereWithoutUserInput = {
    where: TransactionScalarWhereInput
    data: XOR<TransactionUpdateManyMutationInput, TransactionUncheckedUpdateManyWithoutUserInput>
  }

  export type TransactionScalarWhereInput = {
    AND?: TransactionScalarWhereInput | TransactionScalarWhereInput[]
    OR?: TransactionScalarWhereInput[]
    NOT?: TransactionScalarWhereInput | TransactionScalarWhereInput[]
    id?: StringFilter<"Transaction"> | string
    amount?: FloatFilter<"Transaction"> | number
    description?: StringNullableFilter<"Transaction"> | string | null
    date?: DateTimeFilter<"Transaction"> | Date | string
    notes?: StringNullableFilter<"Transaction"> | string | null
    type?: EnumTransactionTypeFilter<"Transaction"> | $Enums.TransactionType
    createdAt?: DateTimeFilter<"Transaction"> | Date | string
    updatedAt?: DateTimeFilter<"Transaction"> | Date | string
    userId?: StringFilter<"Transaction"> | string
    categoryId?: StringFilter<"Transaction"> | string
    billId?: StringNullableFilter<"Transaction"> | string | null
  }

  export type CategoryUpsertWithWhereUniqueWithoutUserInput = {
    where: CategoryWhereUniqueInput
    update: XOR<CategoryUpdateWithoutUserInput, CategoryUncheckedUpdateWithoutUserInput>
    create: XOR<CategoryCreateWithoutUserInput, CategoryUncheckedCreateWithoutUserInput>
  }

  export type CategoryUpdateWithWhereUniqueWithoutUserInput = {
    where: CategoryWhereUniqueInput
    data: XOR<CategoryUpdateWithoutUserInput, CategoryUncheckedUpdateWithoutUserInput>
  }

  export type CategoryUpdateManyWithWhereWithoutUserInput = {
    where: CategoryScalarWhereInput
    data: XOR<CategoryUpdateManyMutationInput, CategoryUncheckedUpdateManyWithoutUserInput>
  }

  export type CategoryScalarWhereInput = {
    AND?: CategoryScalarWhereInput | CategoryScalarWhereInput[]
    OR?: CategoryScalarWhereInput[]
    NOT?: CategoryScalarWhereInput | CategoryScalarWhereInput[]
    id?: StringFilter<"Category"> | string
    name?: StringFilter<"Category"> | string
    description?: StringNullableFilter<"Category"> | string | null
    color?: StringFilter<"Category"> | string
    icon?: StringFilter<"Category"> | string
    type?: EnumCategoryTypeFilter<"Category"> | $Enums.CategoryType
    isDefault?: BoolFilter<"Category"> | boolean
    createdAt?: DateTimeFilter<"Category"> | Date | string
    updatedAt?: DateTimeFilter<"Category"> | Date | string
    userId?: StringFilter<"Category"> | string
  }

  export type BillUpsertWithWhereUniqueWithoutUserInput = {
    where: BillWhereUniqueInput
    update: XOR<BillUpdateWithoutUserInput, BillUncheckedUpdateWithoutUserInput>
    create: XOR<BillCreateWithoutUserInput, BillUncheckedCreateWithoutUserInput>
  }

  export type BillUpdateWithWhereUniqueWithoutUserInput = {
    where: BillWhereUniqueInput
    data: XOR<BillUpdateWithoutUserInput, BillUncheckedUpdateWithoutUserInput>
  }

  export type BillUpdateManyWithWhereWithoutUserInput = {
    where: BillScalarWhereInput
    data: XOR<BillUpdateManyMutationInput, BillUncheckedUpdateManyWithoutUserInput>
  }

  export type BillScalarWhereInput = {
    AND?: BillScalarWhereInput | BillScalarWhereInput[]
    OR?: BillScalarWhereInput[]
    NOT?: BillScalarWhereInput | BillScalarWhereInput[]
    id?: StringFilter<"Bill"> | string
    name?: StringFilter<"Bill"> | string
    amount?: FloatFilter<"Bill"> | number
    dueDate?: DateTimeFilter<"Bill"> | Date | string
    frequency?: EnumBillFrequencyFilter<"Bill"> | $Enums.BillFrequency
    autopay?: BoolFilter<"Bill"> | boolean
    notes?: StringNullableFilter<"Bill"> | string | null
    createdAt?: DateTimeFilter<"Bill"> | Date | string
    updatedAt?: DateTimeFilter<"Bill"> | Date | string
    userId?: StringFilter<"Bill"> | string
    categoryId?: StringFilter<"Bill"> | string
  }

  export type SavingsGoalUpsertWithWhereUniqueWithoutUserInput = {
    where: SavingsGoalWhereUniqueInput
    update: XOR<SavingsGoalUpdateWithoutUserInput, SavingsGoalUncheckedUpdateWithoutUserInput>
    create: XOR<SavingsGoalCreateWithoutUserInput, SavingsGoalUncheckedCreateWithoutUserInput>
  }

  export type SavingsGoalUpdateWithWhereUniqueWithoutUserInput = {
    where: SavingsGoalWhereUniqueInput
    data: XOR<SavingsGoalUpdateWithoutUserInput, SavingsGoalUncheckedUpdateWithoutUserInput>
  }

  export type SavingsGoalUpdateManyWithWhereWithoutUserInput = {
    where: SavingsGoalScalarWhereInput
    data: XOR<SavingsGoalUpdateManyMutationInput, SavingsGoalUncheckedUpdateManyWithoutUserInput>
  }

  export type SavingsGoalScalarWhereInput = {
    AND?: SavingsGoalScalarWhereInput | SavingsGoalScalarWhereInput[]
    OR?: SavingsGoalScalarWhereInput[]
    NOT?: SavingsGoalScalarWhereInput | SavingsGoalScalarWhereInput[]
    id?: StringFilter<"SavingsGoal"> | string
    name?: StringFilter<"SavingsGoal"> | string
    targetAmount?: FloatFilter<"SavingsGoal"> | number
    currentAmount?: FloatFilter<"SavingsGoal"> | number
    targetDate?: DateTimeNullableFilter<"SavingsGoal"> | Date | string | null
    completed?: BoolFilter<"SavingsGoal"> | boolean
    notes?: StringNullableFilter<"SavingsGoal"> | string | null
    createdAt?: DateTimeFilter<"SavingsGoal"> | Date | string
    updatedAt?: DateTimeFilter<"SavingsGoal"> | Date | string
    userId?: StringFilter<"SavingsGoal"> | string
  }

  export type PlanItemUpsertWithWhereUniqueWithoutUserInput = {
    where: PlanItemWhereUniqueInput
    update: XOR<PlanItemUpdateWithoutUserInput, PlanItemUncheckedUpdateWithoutUserInput>
    create: XOR<PlanItemCreateWithoutUserInput, PlanItemUncheckedCreateWithoutUserInput>
  }

  export type PlanItemUpdateWithWhereUniqueWithoutUserInput = {
    where: PlanItemWhereUniqueInput
    data: XOR<PlanItemUpdateWithoutUserInput, PlanItemUncheckedUpdateWithoutUserInput>
  }

  export type PlanItemUpdateManyWithWhereWithoutUserInput = {
    where: PlanItemScalarWhereInput
    data: XOR<PlanItemUpdateManyMutationInput, PlanItemUncheckedUpdateManyWithoutUserInput>
  }

  export type PlanItemScalarWhereInput = {
    AND?: PlanItemScalarWhereInput | PlanItemScalarWhereInput[]
    OR?: PlanItemScalarWhereInput[]
    NOT?: PlanItemScalarWhereInput | PlanItemScalarWhereInput[]
    id?: StringFilter<"PlanItem"> | string
    description?: StringFilter<"PlanItem"> | string
    amount?: FloatFilter<"PlanItem"> | number
    notes?: StringNullableFilter<"PlanItem"> | string | null
    planType?: StringFilter<"PlanItem"> | string
    itemType?: StringFilter<"PlanItem"> | string
    createdAt?: DateTimeFilter<"PlanItem"> | Date | string
    updatedAt?: DateTimeFilter<"PlanItem"> | Date | string
    userId?: StringFilter<"PlanItem"> | string
    categoryId?: StringNullableFilter<"PlanItem"> | string | null
  }

  export type UserCreateWithoutTransactionsInput = {
    id?: string
    email: string
    password: string
    firstName?: string | null
    lastName?: string | null
    profileImageUrl?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    currency?: string
    symbolPosition?: $Enums.SymbolPosition
    decimalPlaces?: number
    thousandsSeparator?: string
    decimalSeparator?: string
    hideCents?: boolean
    roundToNearest?: $Enums.RoundingOption
    weekStartDay?: $Enums.WeekDay
    notifyLowBalance?: boolean
    notifyBillsDue?: boolean
    notifyGoalReached?: boolean
    notifyBudgetExceeded?: boolean
    theme?: $Enums.Theme
    budgets?: BudgetCreateNestedManyWithoutUserInput
    categories?: CategoryCreateNestedManyWithoutUserInput
    bills?: BillCreateNestedManyWithoutUserInput
    savingsGoals?: SavingsGoalCreateNestedManyWithoutUserInput
    planItems?: PlanItemCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutTransactionsInput = {
    id?: string
    email: string
    password: string
    firstName?: string | null
    lastName?: string | null
    profileImageUrl?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    currency?: string
    symbolPosition?: $Enums.SymbolPosition
    decimalPlaces?: number
    thousandsSeparator?: string
    decimalSeparator?: string
    hideCents?: boolean
    roundToNearest?: $Enums.RoundingOption
    weekStartDay?: $Enums.WeekDay
    notifyLowBalance?: boolean
    notifyBillsDue?: boolean
    notifyGoalReached?: boolean
    notifyBudgetExceeded?: boolean
    theme?: $Enums.Theme
    budgets?: BudgetUncheckedCreateNestedManyWithoutUserInput
    categories?: CategoryUncheckedCreateNestedManyWithoutUserInput
    bills?: BillUncheckedCreateNestedManyWithoutUserInput
    savingsGoals?: SavingsGoalUncheckedCreateNestedManyWithoutUserInput
    planItems?: PlanItemUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutTransactionsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutTransactionsInput, UserUncheckedCreateWithoutTransactionsInput>
  }

  export type CategoryCreateWithoutTransactionsInput = {
    id?: string
    name: string
    description?: string | null
    color: string
    icon: string
    type: $Enums.CategoryType
    isDefault?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutCategoriesInput
    bills?: BillCreateNestedManyWithoutCategoryInput
    allocations?: CategoryAllocationCreateNestedManyWithoutCategoryInput
    planItems?: PlanItemCreateNestedManyWithoutCategoryInput
  }

  export type CategoryUncheckedCreateWithoutTransactionsInput = {
    id?: string
    name: string
    description?: string | null
    color: string
    icon: string
    type: $Enums.CategoryType
    isDefault?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    userId: string
    bills?: BillUncheckedCreateNestedManyWithoutCategoryInput
    allocations?: CategoryAllocationUncheckedCreateNestedManyWithoutCategoryInput
    planItems?: PlanItemUncheckedCreateNestedManyWithoutCategoryInput
  }

  export type CategoryCreateOrConnectWithoutTransactionsInput = {
    where: CategoryWhereUniqueInput
    create: XOR<CategoryCreateWithoutTransactionsInput, CategoryUncheckedCreateWithoutTransactionsInput>
  }

  export type BillCreateWithoutTransactionsInput = {
    id?: string
    name: string
    amount: number
    dueDate: Date | string
    frequency: $Enums.BillFrequency
    autopay?: boolean
    notes?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutBillsInput
    category: CategoryCreateNestedOneWithoutBillsInput
  }

  export type BillUncheckedCreateWithoutTransactionsInput = {
    id?: string
    name: string
    amount: number
    dueDate: Date | string
    frequency: $Enums.BillFrequency
    autopay?: boolean
    notes?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    userId: string
    categoryId: string
  }

  export type BillCreateOrConnectWithoutTransactionsInput = {
    where: BillWhereUniqueInput
    create: XOR<BillCreateWithoutTransactionsInput, BillUncheckedCreateWithoutTransactionsInput>
  }

  export type UserUpsertWithoutTransactionsInput = {
    update: XOR<UserUpdateWithoutTransactionsInput, UserUncheckedUpdateWithoutTransactionsInput>
    create: XOR<UserCreateWithoutTransactionsInput, UserUncheckedCreateWithoutTransactionsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutTransactionsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutTransactionsInput, UserUncheckedUpdateWithoutTransactionsInput>
  }

  export type UserUpdateWithoutTransactionsInput = {
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    firstName?: NullableStringFieldUpdateOperationsInput | string | null
    lastName?: NullableStringFieldUpdateOperationsInput | string | null
    profileImageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    currency?: StringFieldUpdateOperationsInput | string
    symbolPosition?: EnumSymbolPositionFieldUpdateOperationsInput | $Enums.SymbolPosition
    decimalPlaces?: IntFieldUpdateOperationsInput | number
    thousandsSeparator?: StringFieldUpdateOperationsInput | string
    decimalSeparator?: StringFieldUpdateOperationsInput | string
    hideCents?: BoolFieldUpdateOperationsInput | boolean
    roundToNearest?: EnumRoundingOptionFieldUpdateOperationsInput | $Enums.RoundingOption
    weekStartDay?: EnumWeekDayFieldUpdateOperationsInput | $Enums.WeekDay
    notifyLowBalance?: BoolFieldUpdateOperationsInput | boolean
    notifyBillsDue?: BoolFieldUpdateOperationsInput | boolean
    notifyGoalReached?: BoolFieldUpdateOperationsInput | boolean
    notifyBudgetExceeded?: BoolFieldUpdateOperationsInput | boolean
    theme?: EnumThemeFieldUpdateOperationsInput | $Enums.Theme
    budgets?: BudgetUpdateManyWithoutUserNestedInput
    categories?: CategoryUpdateManyWithoutUserNestedInput
    bills?: BillUpdateManyWithoutUserNestedInput
    savingsGoals?: SavingsGoalUpdateManyWithoutUserNestedInput
    planItems?: PlanItemUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutTransactionsInput = {
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    firstName?: NullableStringFieldUpdateOperationsInput | string | null
    lastName?: NullableStringFieldUpdateOperationsInput | string | null
    profileImageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    currency?: StringFieldUpdateOperationsInput | string
    symbolPosition?: EnumSymbolPositionFieldUpdateOperationsInput | $Enums.SymbolPosition
    decimalPlaces?: IntFieldUpdateOperationsInput | number
    thousandsSeparator?: StringFieldUpdateOperationsInput | string
    decimalSeparator?: StringFieldUpdateOperationsInput | string
    hideCents?: BoolFieldUpdateOperationsInput | boolean
    roundToNearest?: EnumRoundingOptionFieldUpdateOperationsInput | $Enums.RoundingOption
    weekStartDay?: EnumWeekDayFieldUpdateOperationsInput | $Enums.WeekDay
    notifyLowBalance?: BoolFieldUpdateOperationsInput | boolean
    notifyBillsDue?: BoolFieldUpdateOperationsInput | boolean
    notifyGoalReached?: BoolFieldUpdateOperationsInput | boolean
    notifyBudgetExceeded?: BoolFieldUpdateOperationsInput | boolean
    theme?: EnumThemeFieldUpdateOperationsInput | $Enums.Theme
    budgets?: BudgetUncheckedUpdateManyWithoutUserNestedInput
    categories?: CategoryUncheckedUpdateManyWithoutUserNestedInput
    bills?: BillUncheckedUpdateManyWithoutUserNestedInput
    savingsGoals?: SavingsGoalUncheckedUpdateManyWithoutUserNestedInput
    planItems?: PlanItemUncheckedUpdateManyWithoutUserNestedInput
  }

  export type CategoryUpsertWithoutTransactionsInput = {
    update: XOR<CategoryUpdateWithoutTransactionsInput, CategoryUncheckedUpdateWithoutTransactionsInput>
    create: XOR<CategoryCreateWithoutTransactionsInput, CategoryUncheckedCreateWithoutTransactionsInput>
    where?: CategoryWhereInput
  }

  export type CategoryUpdateToOneWithWhereWithoutTransactionsInput = {
    where?: CategoryWhereInput
    data: XOR<CategoryUpdateWithoutTransactionsInput, CategoryUncheckedUpdateWithoutTransactionsInput>
  }

  export type CategoryUpdateWithoutTransactionsInput = {
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    color?: StringFieldUpdateOperationsInput | string
    icon?: StringFieldUpdateOperationsInput | string
    type?: EnumCategoryTypeFieldUpdateOperationsInput | $Enums.CategoryType
    isDefault?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutCategoriesNestedInput
    bills?: BillUpdateManyWithoutCategoryNestedInput
    allocations?: CategoryAllocationUpdateManyWithoutCategoryNestedInput
    planItems?: PlanItemUpdateManyWithoutCategoryNestedInput
  }

  export type CategoryUncheckedUpdateWithoutTransactionsInput = {
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    color?: StringFieldUpdateOperationsInput | string
    icon?: StringFieldUpdateOperationsInput | string
    type?: EnumCategoryTypeFieldUpdateOperationsInput | $Enums.CategoryType
    isDefault?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: StringFieldUpdateOperationsInput | string
    bills?: BillUncheckedUpdateManyWithoutCategoryNestedInput
    allocations?: CategoryAllocationUncheckedUpdateManyWithoutCategoryNestedInput
    planItems?: PlanItemUncheckedUpdateManyWithoutCategoryNestedInput
  }

  export type BillUpsertWithoutTransactionsInput = {
    update: XOR<BillUpdateWithoutTransactionsInput, BillUncheckedUpdateWithoutTransactionsInput>
    create: XOR<BillCreateWithoutTransactionsInput, BillUncheckedCreateWithoutTransactionsInput>
    where?: BillWhereInput
  }

  export type BillUpdateToOneWithWhereWithoutTransactionsInput = {
    where?: BillWhereInput
    data: XOR<BillUpdateWithoutTransactionsInput, BillUncheckedUpdateWithoutTransactionsInput>
  }

  export type BillUpdateWithoutTransactionsInput = {
    name?: StringFieldUpdateOperationsInput | string
    amount?: FloatFieldUpdateOperationsInput | number
    dueDate?: DateTimeFieldUpdateOperationsInput | Date | string
    frequency?: EnumBillFrequencyFieldUpdateOperationsInput | $Enums.BillFrequency
    autopay?: BoolFieldUpdateOperationsInput | boolean
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutBillsNestedInput
    category?: CategoryUpdateOneRequiredWithoutBillsNestedInput
  }

  export type BillUncheckedUpdateWithoutTransactionsInput = {
    name?: StringFieldUpdateOperationsInput | string
    amount?: FloatFieldUpdateOperationsInput | number
    dueDate?: DateTimeFieldUpdateOperationsInput | Date | string
    frequency?: EnumBillFrequencyFieldUpdateOperationsInput | $Enums.BillFrequency
    autopay?: BoolFieldUpdateOperationsInput | boolean
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: StringFieldUpdateOperationsInput | string
    categoryId?: StringFieldUpdateOperationsInput | string
  }

  export type UserCreateWithoutCategoriesInput = {
    id?: string
    email: string
    password: string
    firstName?: string | null
    lastName?: string | null
    profileImageUrl?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    currency?: string
    symbolPosition?: $Enums.SymbolPosition
    decimalPlaces?: number
    thousandsSeparator?: string
    decimalSeparator?: string
    hideCents?: boolean
    roundToNearest?: $Enums.RoundingOption
    weekStartDay?: $Enums.WeekDay
    notifyLowBalance?: boolean
    notifyBillsDue?: boolean
    notifyGoalReached?: boolean
    notifyBudgetExceeded?: boolean
    theme?: $Enums.Theme
    budgets?: BudgetCreateNestedManyWithoutUserInput
    transactions?: TransactionCreateNestedManyWithoutUserInput
    bills?: BillCreateNestedManyWithoutUserInput
    savingsGoals?: SavingsGoalCreateNestedManyWithoutUserInput
    planItems?: PlanItemCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutCategoriesInput = {
    id?: string
    email: string
    password: string
    firstName?: string | null
    lastName?: string | null
    profileImageUrl?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    currency?: string
    symbolPosition?: $Enums.SymbolPosition
    decimalPlaces?: number
    thousandsSeparator?: string
    decimalSeparator?: string
    hideCents?: boolean
    roundToNearest?: $Enums.RoundingOption
    weekStartDay?: $Enums.WeekDay
    notifyLowBalance?: boolean
    notifyBillsDue?: boolean
    notifyGoalReached?: boolean
    notifyBudgetExceeded?: boolean
    theme?: $Enums.Theme
    budgets?: BudgetUncheckedCreateNestedManyWithoutUserInput
    transactions?: TransactionUncheckedCreateNestedManyWithoutUserInput
    bills?: BillUncheckedCreateNestedManyWithoutUserInput
    savingsGoals?: SavingsGoalUncheckedCreateNestedManyWithoutUserInput
    planItems?: PlanItemUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutCategoriesInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutCategoriesInput, UserUncheckedCreateWithoutCategoriesInput>
  }

  export type TransactionCreateWithoutCategoryInput = {
    id?: string
    amount: number
    description?: string | null
    date: Date | string
    notes?: string | null
    type: $Enums.TransactionType
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutTransactionsInput
    bill?: BillCreateNestedOneWithoutTransactionsInput
  }

  export type TransactionUncheckedCreateWithoutCategoryInput = {
    id?: string
    amount: number
    description?: string | null
    date: Date | string
    notes?: string | null
    type: $Enums.TransactionType
    createdAt?: Date | string
    updatedAt?: Date | string
    userId: string
    billId?: string | null
  }

  export type TransactionCreateOrConnectWithoutCategoryInput = {
    where: TransactionWhereUniqueInput
    create: XOR<TransactionCreateWithoutCategoryInput, TransactionUncheckedCreateWithoutCategoryInput>
  }

  export type TransactionCreateManyCategoryInputEnvelope = {
    data: TransactionCreateManyCategoryInput | TransactionCreateManyCategoryInput[]
  }

  export type BillCreateWithoutCategoryInput = {
    id?: string
    name: string
    amount: number
    dueDate: Date | string
    frequency: $Enums.BillFrequency
    autopay?: boolean
    notes?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutBillsInput
    transactions?: TransactionCreateNestedManyWithoutBillInput
  }

  export type BillUncheckedCreateWithoutCategoryInput = {
    id?: string
    name: string
    amount: number
    dueDate: Date | string
    frequency: $Enums.BillFrequency
    autopay?: boolean
    notes?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    userId: string
    transactions?: TransactionUncheckedCreateNestedManyWithoutBillInput
  }

  export type BillCreateOrConnectWithoutCategoryInput = {
    where: BillWhereUniqueInput
    create: XOR<BillCreateWithoutCategoryInput, BillUncheckedCreateWithoutCategoryInput>
  }

  export type BillCreateManyCategoryInputEnvelope = {
    data: BillCreateManyCategoryInput | BillCreateManyCategoryInput[]
  }

  export type CategoryAllocationCreateWithoutCategoryInput = {
    id?: string
    amount: number
    budget: BudgetCreateNestedOneWithoutCategoryAllocationsInput
  }

  export type CategoryAllocationUncheckedCreateWithoutCategoryInput = {
    id?: string
    amount: number
    budgetId: string
  }

  export type CategoryAllocationCreateOrConnectWithoutCategoryInput = {
    where: CategoryAllocationWhereUniqueInput
    create: XOR<CategoryAllocationCreateWithoutCategoryInput, CategoryAllocationUncheckedCreateWithoutCategoryInput>
  }

  export type CategoryAllocationCreateManyCategoryInputEnvelope = {
    data: CategoryAllocationCreateManyCategoryInput | CategoryAllocationCreateManyCategoryInput[]
  }

  export type PlanItemCreateWithoutCategoryInput = {
    id?: string
    description: string
    amount: number
    notes?: string | null
    planType: string
    itemType: string
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutPlanItemsInput
  }

  export type PlanItemUncheckedCreateWithoutCategoryInput = {
    id?: string
    description: string
    amount: number
    notes?: string | null
    planType: string
    itemType: string
    createdAt?: Date | string
    updatedAt?: Date | string
    userId: string
  }

  export type PlanItemCreateOrConnectWithoutCategoryInput = {
    where: PlanItemWhereUniqueInput
    create: XOR<PlanItemCreateWithoutCategoryInput, PlanItemUncheckedCreateWithoutCategoryInput>
  }

  export type PlanItemCreateManyCategoryInputEnvelope = {
    data: PlanItemCreateManyCategoryInput | PlanItemCreateManyCategoryInput[]
  }

  export type UserUpsertWithoutCategoriesInput = {
    update: XOR<UserUpdateWithoutCategoriesInput, UserUncheckedUpdateWithoutCategoriesInput>
    create: XOR<UserCreateWithoutCategoriesInput, UserUncheckedCreateWithoutCategoriesInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutCategoriesInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutCategoriesInput, UserUncheckedUpdateWithoutCategoriesInput>
  }

  export type UserUpdateWithoutCategoriesInput = {
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    firstName?: NullableStringFieldUpdateOperationsInput | string | null
    lastName?: NullableStringFieldUpdateOperationsInput | string | null
    profileImageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    currency?: StringFieldUpdateOperationsInput | string
    symbolPosition?: EnumSymbolPositionFieldUpdateOperationsInput | $Enums.SymbolPosition
    decimalPlaces?: IntFieldUpdateOperationsInput | number
    thousandsSeparator?: StringFieldUpdateOperationsInput | string
    decimalSeparator?: StringFieldUpdateOperationsInput | string
    hideCents?: BoolFieldUpdateOperationsInput | boolean
    roundToNearest?: EnumRoundingOptionFieldUpdateOperationsInput | $Enums.RoundingOption
    weekStartDay?: EnumWeekDayFieldUpdateOperationsInput | $Enums.WeekDay
    notifyLowBalance?: BoolFieldUpdateOperationsInput | boolean
    notifyBillsDue?: BoolFieldUpdateOperationsInput | boolean
    notifyGoalReached?: BoolFieldUpdateOperationsInput | boolean
    notifyBudgetExceeded?: BoolFieldUpdateOperationsInput | boolean
    theme?: EnumThemeFieldUpdateOperationsInput | $Enums.Theme
    budgets?: BudgetUpdateManyWithoutUserNestedInput
    transactions?: TransactionUpdateManyWithoutUserNestedInput
    bills?: BillUpdateManyWithoutUserNestedInput
    savingsGoals?: SavingsGoalUpdateManyWithoutUserNestedInput
    planItems?: PlanItemUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutCategoriesInput = {
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    firstName?: NullableStringFieldUpdateOperationsInput | string | null
    lastName?: NullableStringFieldUpdateOperationsInput | string | null
    profileImageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    currency?: StringFieldUpdateOperationsInput | string
    symbolPosition?: EnumSymbolPositionFieldUpdateOperationsInput | $Enums.SymbolPosition
    decimalPlaces?: IntFieldUpdateOperationsInput | number
    thousandsSeparator?: StringFieldUpdateOperationsInput | string
    decimalSeparator?: StringFieldUpdateOperationsInput | string
    hideCents?: BoolFieldUpdateOperationsInput | boolean
    roundToNearest?: EnumRoundingOptionFieldUpdateOperationsInput | $Enums.RoundingOption
    weekStartDay?: EnumWeekDayFieldUpdateOperationsInput | $Enums.WeekDay
    notifyLowBalance?: BoolFieldUpdateOperationsInput | boolean
    notifyBillsDue?: BoolFieldUpdateOperationsInput | boolean
    notifyGoalReached?: BoolFieldUpdateOperationsInput | boolean
    notifyBudgetExceeded?: BoolFieldUpdateOperationsInput | boolean
    theme?: EnumThemeFieldUpdateOperationsInput | $Enums.Theme
    budgets?: BudgetUncheckedUpdateManyWithoutUserNestedInput
    transactions?: TransactionUncheckedUpdateManyWithoutUserNestedInput
    bills?: BillUncheckedUpdateManyWithoutUserNestedInput
    savingsGoals?: SavingsGoalUncheckedUpdateManyWithoutUserNestedInput
    planItems?: PlanItemUncheckedUpdateManyWithoutUserNestedInput
  }

  export type TransactionUpsertWithWhereUniqueWithoutCategoryInput = {
    where: TransactionWhereUniqueInput
    update: XOR<TransactionUpdateWithoutCategoryInput, TransactionUncheckedUpdateWithoutCategoryInput>
    create: XOR<TransactionCreateWithoutCategoryInput, TransactionUncheckedCreateWithoutCategoryInput>
  }

  export type TransactionUpdateWithWhereUniqueWithoutCategoryInput = {
    where: TransactionWhereUniqueInput
    data: XOR<TransactionUpdateWithoutCategoryInput, TransactionUncheckedUpdateWithoutCategoryInput>
  }

  export type TransactionUpdateManyWithWhereWithoutCategoryInput = {
    where: TransactionScalarWhereInput
    data: XOR<TransactionUpdateManyMutationInput, TransactionUncheckedUpdateManyWithoutCategoryInput>
  }

  export type BillUpsertWithWhereUniqueWithoutCategoryInput = {
    where: BillWhereUniqueInput
    update: XOR<BillUpdateWithoutCategoryInput, BillUncheckedUpdateWithoutCategoryInput>
    create: XOR<BillCreateWithoutCategoryInput, BillUncheckedCreateWithoutCategoryInput>
  }

  export type BillUpdateWithWhereUniqueWithoutCategoryInput = {
    where: BillWhereUniqueInput
    data: XOR<BillUpdateWithoutCategoryInput, BillUncheckedUpdateWithoutCategoryInput>
  }

  export type BillUpdateManyWithWhereWithoutCategoryInput = {
    where: BillScalarWhereInput
    data: XOR<BillUpdateManyMutationInput, BillUncheckedUpdateManyWithoutCategoryInput>
  }

  export type CategoryAllocationUpsertWithWhereUniqueWithoutCategoryInput = {
    where: CategoryAllocationWhereUniqueInput
    update: XOR<CategoryAllocationUpdateWithoutCategoryInput, CategoryAllocationUncheckedUpdateWithoutCategoryInput>
    create: XOR<CategoryAllocationCreateWithoutCategoryInput, CategoryAllocationUncheckedCreateWithoutCategoryInput>
  }

  export type CategoryAllocationUpdateWithWhereUniqueWithoutCategoryInput = {
    where: CategoryAllocationWhereUniqueInput
    data: XOR<CategoryAllocationUpdateWithoutCategoryInput, CategoryAllocationUncheckedUpdateWithoutCategoryInput>
  }

  export type CategoryAllocationUpdateManyWithWhereWithoutCategoryInput = {
    where: CategoryAllocationScalarWhereInput
    data: XOR<CategoryAllocationUpdateManyMutationInput, CategoryAllocationUncheckedUpdateManyWithoutCategoryInput>
  }

  export type CategoryAllocationScalarWhereInput = {
    AND?: CategoryAllocationScalarWhereInput | CategoryAllocationScalarWhereInput[]
    OR?: CategoryAllocationScalarWhereInput[]
    NOT?: CategoryAllocationScalarWhereInput | CategoryAllocationScalarWhereInput[]
    id?: StringFilter<"CategoryAllocation"> | string
    amount?: FloatFilter<"CategoryAllocation"> | number
    budgetId?: StringFilter<"CategoryAllocation"> | string
    categoryId?: StringFilter<"CategoryAllocation"> | string
  }

  export type PlanItemUpsertWithWhereUniqueWithoutCategoryInput = {
    where: PlanItemWhereUniqueInput
    update: XOR<PlanItemUpdateWithoutCategoryInput, PlanItemUncheckedUpdateWithoutCategoryInput>
    create: XOR<PlanItemCreateWithoutCategoryInput, PlanItemUncheckedCreateWithoutCategoryInput>
  }

  export type PlanItemUpdateWithWhereUniqueWithoutCategoryInput = {
    where: PlanItemWhereUniqueInput
    data: XOR<PlanItemUpdateWithoutCategoryInput, PlanItemUncheckedUpdateWithoutCategoryInput>
  }

  export type PlanItemUpdateManyWithWhereWithoutCategoryInput = {
    where: PlanItemScalarWhereInput
    data: XOR<PlanItemUpdateManyMutationInput, PlanItemUncheckedUpdateManyWithoutCategoryInput>
  }

  export type UserCreateWithoutBillsInput = {
    id?: string
    email: string
    password: string
    firstName?: string | null
    lastName?: string | null
    profileImageUrl?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    currency?: string
    symbolPosition?: $Enums.SymbolPosition
    decimalPlaces?: number
    thousandsSeparator?: string
    decimalSeparator?: string
    hideCents?: boolean
    roundToNearest?: $Enums.RoundingOption
    weekStartDay?: $Enums.WeekDay
    notifyLowBalance?: boolean
    notifyBillsDue?: boolean
    notifyGoalReached?: boolean
    notifyBudgetExceeded?: boolean
    theme?: $Enums.Theme
    budgets?: BudgetCreateNestedManyWithoutUserInput
    transactions?: TransactionCreateNestedManyWithoutUserInput
    categories?: CategoryCreateNestedManyWithoutUserInput
    savingsGoals?: SavingsGoalCreateNestedManyWithoutUserInput
    planItems?: PlanItemCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutBillsInput = {
    id?: string
    email: string
    password: string
    firstName?: string | null
    lastName?: string | null
    profileImageUrl?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    currency?: string
    symbolPosition?: $Enums.SymbolPosition
    decimalPlaces?: number
    thousandsSeparator?: string
    decimalSeparator?: string
    hideCents?: boolean
    roundToNearest?: $Enums.RoundingOption
    weekStartDay?: $Enums.WeekDay
    notifyLowBalance?: boolean
    notifyBillsDue?: boolean
    notifyGoalReached?: boolean
    notifyBudgetExceeded?: boolean
    theme?: $Enums.Theme
    budgets?: BudgetUncheckedCreateNestedManyWithoutUserInput
    transactions?: TransactionUncheckedCreateNestedManyWithoutUserInput
    categories?: CategoryUncheckedCreateNestedManyWithoutUserInput
    savingsGoals?: SavingsGoalUncheckedCreateNestedManyWithoutUserInput
    planItems?: PlanItemUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutBillsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutBillsInput, UserUncheckedCreateWithoutBillsInput>
  }

  export type CategoryCreateWithoutBillsInput = {
    id?: string
    name: string
    description?: string | null
    color: string
    icon: string
    type: $Enums.CategoryType
    isDefault?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutCategoriesInput
    transactions?: TransactionCreateNestedManyWithoutCategoryInput
    allocations?: CategoryAllocationCreateNestedManyWithoutCategoryInput
    planItems?: PlanItemCreateNestedManyWithoutCategoryInput
  }

  export type CategoryUncheckedCreateWithoutBillsInput = {
    id?: string
    name: string
    description?: string | null
    color: string
    icon: string
    type: $Enums.CategoryType
    isDefault?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    userId: string
    transactions?: TransactionUncheckedCreateNestedManyWithoutCategoryInput
    allocations?: CategoryAllocationUncheckedCreateNestedManyWithoutCategoryInput
    planItems?: PlanItemUncheckedCreateNestedManyWithoutCategoryInput
  }

  export type CategoryCreateOrConnectWithoutBillsInput = {
    where: CategoryWhereUniqueInput
    create: XOR<CategoryCreateWithoutBillsInput, CategoryUncheckedCreateWithoutBillsInput>
  }

  export type TransactionCreateWithoutBillInput = {
    id?: string
    amount: number
    description?: string | null
    date: Date | string
    notes?: string | null
    type: $Enums.TransactionType
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutTransactionsInput
    category: CategoryCreateNestedOneWithoutTransactionsInput
  }

  export type TransactionUncheckedCreateWithoutBillInput = {
    id?: string
    amount: number
    description?: string | null
    date: Date | string
    notes?: string | null
    type: $Enums.TransactionType
    createdAt?: Date | string
    updatedAt?: Date | string
    userId: string
    categoryId: string
  }

  export type TransactionCreateOrConnectWithoutBillInput = {
    where: TransactionWhereUniqueInput
    create: XOR<TransactionCreateWithoutBillInput, TransactionUncheckedCreateWithoutBillInput>
  }

  export type TransactionCreateManyBillInputEnvelope = {
    data: TransactionCreateManyBillInput | TransactionCreateManyBillInput[]
  }

  export type UserUpsertWithoutBillsInput = {
    update: XOR<UserUpdateWithoutBillsInput, UserUncheckedUpdateWithoutBillsInput>
    create: XOR<UserCreateWithoutBillsInput, UserUncheckedCreateWithoutBillsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutBillsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutBillsInput, UserUncheckedUpdateWithoutBillsInput>
  }

  export type UserUpdateWithoutBillsInput = {
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    firstName?: NullableStringFieldUpdateOperationsInput | string | null
    lastName?: NullableStringFieldUpdateOperationsInput | string | null
    profileImageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    currency?: StringFieldUpdateOperationsInput | string
    symbolPosition?: EnumSymbolPositionFieldUpdateOperationsInput | $Enums.SymbolPosition
    decimalPlaces?: IntFieldUpdateOperationsInput | number
    thousandsSeparator?: StringFieldUpdateOperationsInput | string
    decimalSeparator?: StringFieldUpdateOperationsInput | string
    hideCents?: BoolFieldUpdateOperationsInput | boolean
    roundToNearest?: EnumRoundingOptionFieldUpdateOperationsInput | $Enums.RoundingOption
    weekStartDay?: EnumWeekDayFieldUpdateOperationsInput | $Enums.WeekDay
    notifyLowBalance?: BoolFieldUpdateOperationsInput | boolean
    notifyBillsDue?: BoolFieldUpdateOperationsInput | boolean
    notifyGoalReached?: BoolFieldUpdateOperationsInput | boolean
    notifyBudgetExceeded?: BoolFieldUpdateOperationsInput | boolean
    theme?: EnumThemeFieldUpdateOperationsInput | $Enums.Theme
    budgets?: BudgetUpdateManyWithoutUserNestedInput
    transactions?: TransactionUpdateManyWithoutUserNestedInput
    categories?: CategoryUpdateManyWithoutUserNestedInput
    savingsGoals?: SavingsGoalUpdateManyWithoutUserNestedInput
    planItems?: PlanItemUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutBillsInput = {
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    firstName?: NullableStringFieldUpdateOperationsInput | string | null
    lastName?: NullableStringFieldUpdateOperationsInput | string | null
    profileImageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    currency?: StringFieldUpdateOperationsInput | string
    symbolPosition?: EnumSymbolPositionFieldUpdateOperationsInput | $Enums.SymbolPosition
    decimalPlaces?: IntFieldUpdateOperationsInput | number
    thousandsSeparator?: StringFieldUpdateOperationsInput | string
    decimalSeparator?: StringFieldUpdateOperationsInput | string
    hideCents?: BoolFieldUpdateOperationsInput | boolean
    roundToNearest?: EnumRoundingOptionFieldUpdateOperationsInput | $Enums.RoundingOption
    weekStartDay?: EnumWeekDayFieldUpdateOperationsInput | $Enums.WeekDay
    notifyLowBalance?: BoolFieldUpdateOperationsInput | boolean
    notifyBillsDue?: BoolFieldUpdateOperationsInput | boolean
    notifyGoalReached?: BoolFieldUpdateOperationsInput | boolean
    notifyBudgetExceeded?: BoolFieldUpdateOperationsInput | boolean
    theme?: EnumThemeFieldUpdateOperationsInput | $Enums.Theme
    budgets?: BudgetUncheckedUpdateManyWithoutUserNestedInput
    transactions?: TransactionUncheckedUpdateManyWithoutUserNestedInput
    categories?: CategoryUncheckedUpdateManyWithoutUserNestedInput
    savingsGoals?: SavingsGoalUncheckedUpdateManyWithoutUserNestedInput
    planItems?: PlanItemUncheckedUpdateManyWithoutUserNestedInput
  }

  export type CategoryUpsertWithoutBillsInput = {
    update: XOR<CategoryUpdateWithoutBillsInput, CategoryUncheckedUpdateWithoutBillsInput>
    create: XOR<CategoryCreateWithoutBillsInput, CategoryUncheckedCreateWithoutBillsInput>
    where?: CategoryWhereInput
  }

  export type CategoryUpdateToOneWithWhereWithoutBillsInput = {
    where?: CategoryWhereInput
    data: XOR<CategoryUpdateWithoutBillsInput, CategoryUncheckedUpdateWithoutBillsInput>
  }

  export type CategoryUpdateWithoutBillsInput = {
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    color?: StringFieldUpdateOperationsInput | string
    icon?: StringFieldUpdateOperationsInput | string
    type?: EnumCategoryTypeFieldUpdateOperationsInput | $Enums.CategoryType
    isDefault?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutCategoriesNestedInput
    transactions?: TransactionUpdateManyWithoutCategoryNestedInput
    allocations?: CategoryAllocationUpdateManyWithoutCategoryNestedInput
    planItems?: PlanItemUpdateManyWithoutCategoryNestedInput
  }

  export type CategoryUncheckedUpdateWithoutBillsInput = {
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    color?: StringFieldUpdateOperationsInput | string
    icon?: StringFieldUpdateOperationsInput | string
    type?: EnumCategoryTypeFieldUpdateOperationsInput | $Enums.CategoryType
    isDefault?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: StringFieldUpdateOperationsInput | string
    transactions?: TransactionUncheckedUpdateManyWithoutCategoryNestedInput
    allocations?: CategoryAllocationUncheckedUpdateManyWithoutCategoryNestedInput
    planItems?: PlanItemUncheckedUpdateManyWithoutCategoryNestedInput
  }

  export type TransactionUpsertWithWhereUniqueWithoutBillInput = {
    where: TransactionWhereUniqueInput
    update: XOR<TransactionUpdateWithoutBillInput, TransactionUncheckedUpdateWithoutBillInput>
    create: XOR<TransactionCreateWithoutBillInput, TransactionUncheckedCreateWithoutBillInput>
  }

  export type TransactionUpdateWithWhereUniqueWithoutBillInput = {
    where: TransactionWhereUniqueInput
    data: XOR<TransactionUpdateWithoutBillInput, TransactionUncheckedUpdateWithoutBillInput>
  }

  export type TransactionUpdateManyWithWhereWithoutBillInput = {
    where: TransactionScalarWhereInput
    data: XOR<TransactionUpdateManyMutationInput, TransactionUncheckedUpdateManyWithoutBillInput>
  }

  export type UserCreateWithoutBudgetsInput = {
    id?: string
    email: string
    password: string
    firstName?: string | null
    lastName?: string | null
    profileImageUrl?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    currency?: string
    symbolPosition?: $Enums.SymbolPosition
    decimalPlaces?: number
    thousandsSeparator?: string
    decimalSeparator?: string
    hideCents?: boolean
    roundToNearest?: $Enums.RoundingOption
    weekStartDay?: $Enums.WeekDay
    notifyLowBalance?: boolean
    notifyBillsDue?: boolean
    notifyGoalReached?: boolean
    notifyBudgetExceeded?: boolean
    theme?: $Enums.Theme
    transactions?: TransactionCreateNestedManyWithoutUserInput
    categories?: CategoryCreateNestedManyWithoutUserInput
    bills?: BillCreateNestedManyWithoutUserInput
    savingsGoals?: SavingsGoalCreateNestedManyWithoutUserInput
    planItems?: PlanItemCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutBudgetsInput = {
    id?: string
    email: string
    password: string
    firstName?: string | null
    lastName?: string | null
    profileImageUrl?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    currency?: string
    symbolPosition?: $Enums.SymbolPosition
    decimalPlaces?: number
    thousandsSeparator?: string
    decimalSeparator?: string
    hideCents?: boolean
    roundToNearest?: $Enums.RoundingOption
    weekStartDay?: $Enums.WeekDay
    notifyLowBalance?: boolean
    notifyBillsDue?: boolean
    notifyGoalReached?: boolean
    notifyBudgetExceeded?: boolean
    theme?: $Enums.Theme
    transactions?: TransactionUncheckedCreateNestedManyWithoutUserInput
    categories?: CategoryUncheckedCreateNestedManyWithoutUserInput
    bills?: BillUncheckedCreateNestedManyWithoutUserInput
    savingsGoals?: SavingsGoalUncheckedCreateNestedManyWithoutUserInput
    planItems?: PlanItemUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutBudgetsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutBudgetsInput, UserUncheckedCreateWithoutBudgetsInput>
  }

  export type CategoryAllocationCreateWithoutBudgetInput = {
    id?: string
    amount: number
    category: CategoryCreateNestedOneWithoutAllocationsInput
  }

  export type CategoryAllocationUncheckedCreateWithoutBudgetInput = {
    id?: string
    amount: number
    categoryId: string
  }

  export type CategoryAllocationCreateOrConnectWithoutBudgetInput = {
    where: CategoryAllocationWhereUniqueInput
    create: XOR<CategoryAllocationCreateWithoutBudgetInput, CategoryAllocationUncheckedCreateWithoutBudgetInput>
  }

  export type CategoryAllocationCreateManyBudgetInputEnvelope = {
    data: CategoryAllocationCreateManyBudgetInput | CategoryAllocationCreateManyBudgetInput[]
  }

  export type UserUpsertWithoutBudgetsInput = {
    update: XOR<UserUpdateWithoutBudgetsInput, UserUncheckedUpdateWithoutBudgetsInput>
    create: XOR<UserCreateWithoutBudgetsInput, UserUncheckedCreateWithoutBudgetsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutBudgetsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutBudgetsInput, UserUncheckedUpdateWithoutBudgetsInput>
  }

  export type UserUpdateWithoutBudgetsInput = {
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    firstName?: NullableStringFieldUpdateOperationsInput | string | null
    lastName?: NullableStringFieldUpdateOperationsInput | string | null
    profileImageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    currency?: StringFieldUpdateOperationsInput | string
    symbolPosition?: EnumSymbolPositionFieldUpdateOperationsInput | $Enums.SymbolPosition
    decimalPlaces?: IntFieldUpdateOperationsInput | number
    thousandsSeparator?: StringFieldUpdateOperationsInput | string
    decimalSeparator?: StringFieldUpdateOperationsInput | string
    hideCents?: BoolFieldUpdateOperationsInput | boolean
    roundToNearest?: EnumRoundingOptionFieldUpdateOperationsInput | $Enums.RoundingOption
    weekStartDay?: EnumWeekDayFieldUpdateOperationsInput | $Enums.WeekDay
    notifyLowBalance?: BoolFieldUpdateOperationsInput | boolean
    notifyBillsDue?: BoolFieldUpdateOperationsInput | boolean
    notifyGoalReached?: BoolFieldUpdateOperationsInput | boolean
    notifyBudgetExceeded?: BoolFieldUpdateOperationsInput | boolean
    theme?: EnumThemeFieldUpdateOperationsInput | $Enums.Theme
    transactions?: TransactionUpdateManyWithoutUserNestedInput
    categories?: CategoryUpdateManyWithoutUserNestedInput
    bills?: BillUpdateManyWithoutUserNestedInput
    savingsGoals?: SavingsGoalUpdateManyWithoutUserNestedInput
    planItems?: PlanItemUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutBudgetsInput = {
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    firstName?: NullableStringFieldUpdateOperationsInput | string | null
    lastName?: NullableStringFieldUpdateOperationsInput | string | null
    profileImageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    currency?: StringFieldUpdateOperationsInput | string
    symbolPosition?: EnumSymbolPositionFieldUpdateOperationsInput | $Enums.SymbolPosition
    decimalPlaces?: IntFieldUpdateOperationsInput | number
    thousandsSeparator?: StringFieldUpdateOperationsInput | string
    decimalSeparator?: StringFieldUpdateOperationsInput | string
    hideCents?: BoolFieldUpdateOperationsInput | boolean
    roundToNearest?: EnumRoundingOptionFieldUpdateOperationsInput | $Enums.RoundingOption
    weekStartDay?: EnumWeekDayFieldUpdateOperationsInput | $Enums.WeekDay
    notifyLowBalance?: BoolFieldUpdateOperationsInput | boolean
    notifyBillsDue?: BoolFieldUpdateOperationsInput | boolean
    notifyGoalReached?: BoolFieldUpdateOperationsInput | boolean
    notifyBudgetExceeded?: BoolFieldUpdateOperationsInput | boolean
    theme?: EnumThemeFieldUpdateOperationsInput | $Enums.Theme
    transactions?: TransactionUncheckedUpdateManyWithoutUserNestedInput
    categories?: CategoryUncheckedUpdateManyWithoutUserNestedInput
    bills?: BillUncheckedUpdateManyWithoutUserNestedInput
    savingsGoals?: SavingsGoalUncheckedUpdateManyWithoutUserNestedInput
    planItems?: PlanItemUncheckedUpdateManyWithoutUserNestedInput
  }

  export type CategoryAllocationUpsertWithWhereUniqueWithoutBudgetInput = {
    where: CategoryAllocationWhereUniqueInput
    update: XOR<CategoryAllocationUpdateWithoutBudgetInput, CategoryAllocationUncheckedUpdateWithoutBudgetInput>
    create: XOR<CategoryAllocationCreateWithoutBudgetInput, CategoryAllocationUncheckedCreateWithoutBudgetInput>
  }

  export type CategoryAllocationUpdateWithWhereUniqueWithoutBudgetInput = {
    where: CategoryAllocationWhereUniqueInput
    data: XOR<CategoryAllocationUpdateWithoutBudgetInput, CategoryAllocationUncheckedUpdateWithoutBudgetInput>
  }

  export type CategoryAllocationUpdateManyWithWhereWithoutBudgetInput = {
    where: CategoryAllocationScalarWhereInput
    data: XOR<CategoryAllocationUpdateManyMutationInput, CategoryAllocationUncheckedUpdateManyWithoutBudgetInput>
  }

  export type BudgetCreateWithoutCategoryAllocationsInput = {
    id?: string
    name: string
    description?: string | null
    amount: number
    startDate: Date | string
    endDate: Date | string
    type: $Enums.BudgetTimeframe
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutBudgetsInput
  }

  export type BudgetUncheckedCreateWithoutCategoryAllocationsInput = {
    id?: string
    name: string
    description?: string | null
    amount: number
    startDate: Date | string
    endDate: Date | string
    type: $Enums.BudgetTimeframe
    createdAt?: Date | string
    updatedAt?: Date | string
    userId: string
  }

  export type BudgetCreateOrConnectWithoutCategoryAllocationsInput = {
    where: BudgetWhereUniqueInput
    create: XOR<BudgetCreateWithoutCategoryAllocationsInput, BudgetUncheckedCreateWithoutCategoryAllocationsInput>
  }

  export type CategoryCreateWithoutAllocationsInput = {
    id?: string
    name: string
    description?: string | null
    color: string
    icon: string
    type: $Enums.CategoryType
    isDefault?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutCategoriesInput
    transactions?: TransactionCreateNestedManyWithoutCategoryInput
    bills?: BillCreateNestedManyWithoutCategoryInput
    planItems?: PlanItemCreateNestedManyWithoutCategoryInput
  }

  export type CategoryUncheckedCreateWithoutAllocationsInput = {
    id?: string
    name: string
    description?: string | null
    color: string
    icon: string
    type: $Enums.CategoryType
    isDefault?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    userId: string
    transactions?: TransactionUncheckedCreateNestedManyWithoutCategoryInput
    bills?: BillUncheckedCreateNestedManyWithoutCategoryInput
    planItems?: PlanItemUncheckedCreateNestedManyWithoutCategoryInput
  }

  export type CategoryCreateOrConnectWithoutAllocationsInput = {
    where: CategoryWhereUniqueInput
    create: XOR<CategoryCreateWithoutAllocationsInput, CategoryUncheckedCreateWithoutAllocationsInput>
  }

  export type BudgetUpsertWithoutCategoryAllocationsInput = {
    update: XOR<BudgetUpdateWithoutCategoryAllocationsInput, BudgetUncheckedUpdateWithoutCategoryAllocationsInput>
    create: XOR<BudgetCreateWithoutCategoryAllocationsInput, BudgetUncheckedCreateWithoutCategoryAllocationsInput>
    where?: BudgetWhereInput
  }

  export type BudgetUpdateToOneWithWhereWithoutCategoryAllocationsInput = {
    where?: BudgetWhereInput
    data: XOR<BudgetUpdateWithoutCategoryAllocationsInput, BudgetUncheckedUpdateWithoutCategoryAllocationsInput>
  }

  export type BudgetUpdateWithoutCategoryAllocationsInput = {
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    amount?: FloatFieldUpdateOperationsInput | number
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: DateTimeFieldUpdateOperationsInput | Date | string
    type?: EnumBudgetTimeframeFieldUpdateOperationsInput | $Enums.BudgetTimeframe
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutBudgetsNestedInput
  }

  export type BudgetUncheckedUpdateWithoutCategoryAllocationsInput = {
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    amount?: FloatFieldUpdateOperationsInput | number
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: DateTimeFieldUpdateOperationsInput | Date | string
    type?: EnumBudgetTimeframeFieldUpdateOperationsInput | $Enums.BudgetTimeframe
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: StringFieldUpdateOperationsInput | string
  }

  export type CategoryUpsertWithoutAllocationsInput = {
    update: XOR<CategoryUpdateWithoutAllocationsInput, CategoryUncheckedUpdateWithoutAllocationsInput>
    create: XOR<CategoryCreateWithoutAllocationsInput, CategoryUncheckedCreateWithoutAllocationsInput>
    where?: CategoryWhereInput
  }

  export type CategoryUpdateToOneWithWhereWithoutAllocationsInput = {
    where?: CategoryWhereInput
    data: XOR<CategoryUpdateWithoutAllocationsInput, CategoryUncheckedUpdateWithoutAllocationsInput>
  }

  export type CategoryUpdateWithoutAllocationsInput = {
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    color?: StringFieldUpdateOperationsInput | string
    icon?: StringFieldUpdateOperationsInput | string
    type?: EnumCategoryTypeFieldUpdateOperationsInput | $Enums.CategoryType
    isDefault?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutCategoriesNestedInput
    transactions?: TransactionUpdateManyWithoutCategoryNestedInput
    bills?: BillUpdateManyWithoutCategoryNestedInput
    planItems?: PlanItemUpdateManyWithoutCategoryNestedInput
  }

  export type CategoryUncheckedUpdateWithoutAllocationsInput = {
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    color?: StringFieldUpdateOperationsInput | string
    icon?: StringFieldUpdateOperationsInput | string
    type?: EnumCategoryTypeFieldUpdateOperationsInput | $Enums.CategoryType
    isDefault?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: StringFieldUpdateOperationsInput | string
    transactions?: TransactionUncheckedUpdateManyWithoutCategoryNestedInput
    bills?: BillUncheckedUpdateManyWithoutCategoryNestedInput
    planItems?: PlanItemUncheckedUpdateManyWithoutCategoryNestedInput
  }

  export type UserCreateWithoutSavingsGoalsInput = {
    id?: string
    email: string
    password: string
    firstName?: string | null
    lastName?: string | null
    profileImageUrl?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    currency?: string
    symbolPosition?: $Enums.SymbolPosition
    decimalPlaces?: number
    thousandsSeparator?: string
    decimalSeparator?: string
    hideCents?: boolean
    roundToNearest?: $Enums.RoundingOption
    weekStartDay?: $Enums.WeekDay
    notifyLowBalance?: boolean
    notifyBillsDue?: boolean
    notifyGoalReached?: boolean
    notifyBudgetExceeded?: boolean
    theme?: $Enums.Theme
    budgets?: BudgetCreateNestedManyWithoutUserInput
    transactions?: TransactionCreateNestedManyWithoutUserInput
    categories?: CategoryCreateNestedManyWithoutUserInput
    bills?: BillCreateNestedManyWithoutUserInput
    planItems?: PlanItemCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutSavingsGoalsInput = {
    id?: string
    email: string
    password: string
    firstName?: string | null
    lastName?: string | null
    profileImageUrl?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    currency?: string
    symbolPosition?: $Enums.SymbolPosition
    decimalPlaces?: number
    thousandsSeparator?: string
    decimalSeparator?: string
    hideCents?: boolean
    roundToNearest?: $Enums.RoundingOption
    weekStartDay?: $Enums.WeekDay
    notifyLowBalance?: boolean
    notifyBillsDue?: boolean
    notifyGoalReached?: boolean
    notifyBudgetExceeded?: boolean
    theme?: $Enums.Theme
    budgets?: BudgetUncheckedCreateNestedManyWithoutUserInput
    transactions?: TransactionUncheckedCreateNestedManyWithoutUserInput
    categories?: CategoryUncheckedCreateNestedManyWithoutUserInput
    bills?: BillUncheckedCreateNestedManyWithoutUserInput
    planItems?: PlanItemUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutSavingsGoalsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutSavingsGoalsInput, UserUncheckedCreateWithoutSavingsGoalsInput>
  }

  export type UserUpsertWithoutSavingsGoalsInput = {
    update: XOR<UserUpdateWithoutSavingsGoalsInput, UserUncheckedUpdateWithoutSavingsGoalsInput>
    create: XOR<UserCreateWithoutSavingsGoalsInput, UserUncheckedCreateWithoutSavingsGoalsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutSavingsGoalsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutSavingsGoalsInput, UserUncheckedUpdateWithoutSavingsGoalsInput>
  }

  export type UserUpdateWithoutSavingsGoalsInput = {
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    firstName?: NullableStringFieldUpdateOperationsInput | string | null
    lastName?: NullableStringFieldUpdateOperationsInput | string | null
    profileImageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    currency?: StringFieldUpdateOperationsInput | string
    symbolPosition?: EnumSymbolPositionFieldUpdateOperationsInput | $Enums.SymbolPosition
    decimalPlaces?: IntFieldUpdateOperationsInput | number
    thousandsSeparator?: StringFieldUpdateOperationsInput | string
    decimalSeparator?: StringFieldUpdateOperationsInput | string
    hideCents?: BoolFieldUpdateOperationsInput | boolean
    roundToNearest?: EnumRoundingOptionFieldUpdateOperationsInput | $Enums.RoundingOption
    weekStartDay?: EnumWeekDayFieldUpdateOperationsInput | $Enums.WeekDay
    notifyLowBalance?: BoolFieldUpdateOperationsInput | boolean
    notifyBillsDue?: BoolFieldUpdateOperationsInput | boolean
    notifyGoalReached?: BoolFieldUpdateOperationsInput | boolean
    notifyBudgetExceeded?: BoolFieldUpdateOperationsInput | boolean
    theme?: EnumThemeFieldUpdateOperationsInput | $Enums.Theme
    budgets?: BudgetUpdateManyWithoutUserNestedInput
    transactions?: TransactionUpdateManyWithoutUserNestedInput
    categories?: CategoryUpdateManyWithoutUserNestedInput
    bills?: BillUpdateManyWithoutUserNestedInput
    planItems?: PlanItemUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutSavingsGoalsInput = {
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    firstName?: NullableStringFieldUpdateOperationsInput | string | null
    lastName?: NullableStringFieldUpdateOperationsInput | string | null
    profileImageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    currency?: StringFieldUpdateOperationsInput | string
    symbolPosition?: EnumSymbolPositionFieldUpdateOperationsInput | $Enums.SymbolPosition
    decimalPlaces?: IntFieldUpdateOperationsInput | number
    thousandsSeparator?: StringFieldUpdateOperationsInput | string
    decimalSeparator?: StringFieldUpdateOperationsInput | string
    hideCents?: BoolFieldUpdateOperationsInput | boolean
    roundToNearest?: EnumRoundingOptionFieldUpdateOperationsInput | $Enums.RoundingOption
    weekStartDay?: EnumWeekDayFieldUpdateOperationsInput | $Enums.WeekDay
    notifyLowBalance?: BoolFieldUpdateOperationsInput | boolean
    notifyBillsDue?: BoolFieldUpdateOperationsInput | boolean
    notifyGoalReached?: BoolFieldUpdateOperationsInput | boolean
    notifyBudgetExceeded?: BoolFieldUpdateOperationsInput | boolean
    theme?: EnumThemeFieldUpdateOperationsInput | $Enums.Theme
    budgets?: BudgetUncheckedUpdateManyWithoutUserNestedInput
    transactions?: TransactionUncheckedUpdateManyWithoutUserNestedInput
    categories?: CategoryUncheckedUpdateManyWithoutUserNestedInput
    bills?: BillUncheckedUpdateManyWithoutUserNestedInput
    planItems?: PlanItemUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateWithoutPlanItemsInput = {
    id?: string
    email: string
    password: string
    firstName?: string | null
    lastName?: string | null
    profileImageUrl?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    currency?: string
    symbolPosition?: $Enums.SymbolPosition
    decimalPlaces?: number
    thousandsSeparator?: string
    decimalSeparator?: string
    hideCents?: boolean
    roundToNearest?: $Enums.RoundingOption
    weekStartDay?: $Enums.WeekDay
    notifyLowBalance?: boolean
    notifyBillsDue?: boolean
    notifyGoalReached?: boolean
    notifyBudgetExceeded?: boolean
    theme?: $Enums.Theme
    budgets?: BudgetCreateNestedManyWithoutUserInput
    transactions?: TransactionCreateNestedManyWithoutUserInput
    categories?: CategoryCreateNestedManyWithoutUserInput
    bills?: BillCreateNestedManyWithoutUserInput
    savingsGoals?: SavingsGoalCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutPlanItemsInput = {
    id?: string
    email: string
    password: string
    firstName?: string | null
    lastName?: string | null
    profileImageUrl?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    currency?: string
    symbolPosition?: $Enums.SymbolPosition
    decimalPlaces?: number
    thousandsSeparator?: string
    decimalSeparator?: string
    hideCents?: boolean
    roundToNearest?: $Enums.RoundingOption
    weekStartDay?: $Enums.WeekDay
    notifyLowBalance?: boolean
    notifyBillsDue?: boolean
    notifyGoalReached?: boolean
    notifyBudgetExceeded?: boolean
    theme?: $Enums.Theme
    budgets?: BudgetUncheckedCreateNestedManyWithoutUserInput
    transactions?: TransactionUncheckedCreateNestedManyWithoutUserInput
    categories?: CategoryUncheckedCreateNestedManyWithoutUserInput
    bills?: BillUncheckedCreateNestedManyWithoutUserInput
    savingsGoals?: SavingsGoalUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutPlanItemsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutPlanItemsInput, UserUncheckedCreateWithoutPlanItemsInput>
  }

  export type CategoryCreateWithoutPlanItemsInput = {
    id?: string
    name: string
    description?: string | null
    color: string
    icon: string
    type: $Enums.CategoryType
    isDefault?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutCategoriesInput
    transactions?: TransactionCreateNestedManyWithoutCategoryInput
    bills?: BillCreateNestedManyWithoutCategoryInput
    allocations?: CategoryAllocationCreateNestedManyWithoutCategoryInput
  }

  export type CategoryUncheckedCreateWithoutPlanItemsInput = {
    id?: string
    name: string
    description?: string | null
    color: string
    icon: string
    type: $Enums.CategoryType
    isDefault?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    userId: string
    transactions?: TransactionUncheckedCreateNestedManyWithoutCategoryInput
    bills?: BillUncheckedCreateNestedManyWithoutCategoryInput
    allocations?: CategoryAllocationUncheckedCreateNestedManyWithoutCategoryInput
  }

  export type CategoryCreateOrConnectWithoutPlanItemsInput = {
    where: CategoryWhereUniqueInput
    create: XOR<CategoryCreateWithoutPlanItemsInput, CategoryUncheckedCreateWithoutPlanItemsInput>
  }

  export type UserUpsertWithoutPlanItemsInput = {
    update: XOR<UserUpdateWithoutPlanItemsInput, UserUncheckedUpdateWithoutPlanItemsInput>
    create: XOR<UserCreateWithoutPlanItemsInput, UserUncheckedCreateWithoutPlanItemsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutPlanItemsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutPlanItemsInput, UserUncheckedUpdateWithoutPlanItemsInput>
  }

  export type UserUpdateWithoutPlanItemsInput = {
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    firstName?: NullableStringFieldUpdateOperationsInput | string | null
    lastName?: NullableStringFieldUpdateOperationsInput | string | null
    profileImageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    currency?: StringFieldUpdateOperationsInput | string
    symbolPosition?: EnumSymbolPositionFieldUpdateOperationsInput | $Enums.SymbolPosition
    decimalPlaces?: IntFieldUpdateOperationsInput | number
    thousandsSeparator?: StringFieldUpdateOperationsInput | string
    decimalSeparator?: StringFieldUpdateOperationsInput | string
    hideCents?: BoolFieldUpdateOperationsInput | boolean
    roundToNearest?: EnumRoundingOptionFieldUpdateOperationsInput | $Enums.RoundingOption
    weekStartDay?: EnumWeekDayFieldUpdateOperationsInput | $Enums.WeekDay
    notifyLowBalance?: BoolFieldUpdateOperationsInput | boolean
    notifyBillsDue?: BoolFieldUpdateOperationsInput | boolean
    notifyGoalReached?: BoolFieldUpdateOperationsInput | boolean
    notifyBudgetExceeded?: BoolFieldUpdateOperationsInput | boolean
    theme?: EnumThemeFieldUpdateOperationsInput | $Enums.Theme
    budgets?: BudgetUpdateManyWithoutUserNestedInput
    transactions?: TransactionUpdateManyWithoutUserNestedInput
    categories?: CategoryUpdateManyWithoutUserNestedInput
    bills?: BillUpdateManyWithoutUserNestedInput
    savingsGoals?: SavingsGoalUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutPlanItemsInput = {
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    firstName?: NullableStringFieldUpdateOperationsInput | string | null
    lastName?: NullableStringFieldUpdateOperationsInput | string | null
    profileImageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    currency?: StringFieldUpdateOperationsInput | string
    symbolPosition?: EnumSymbolPositionFieldUpdateOperationsInput | $Enums.SymbolPosition
    decimalPlaces?: IntFieldUpdateOperationsInput | number
    thousandsSeparator?: StringFieldUpdateOperationsInput | string
    decimalSeparator?: StringFieldUpdateOperationsInput | string
    hideCents?: BoolFieldUpdateOperationsInput | boolean
    roundToNearest?: EnumRoundingOptionFieldUpdateOperationsInput | $Enums.RoundingOption
    weekStartDay?: EnumWeekDayFieldUpdateOperationsInput | $Enums.WeekDay
    notifyLowBalance?: BoolFieldUpdateOperationsInput | boolean
    notifyBillsDue?: BoolFieldUpdateOperationsInput | boolean
    notifyGoalReached?: BoolFieldUpdateOperationsInput | boolean
    notifyBudgetExceeded?: BoolFieldUpdateOperationsInput | boolean
    theme?: EnumThemeFieldUpdateOperationsInput | $Enums.Theme
    budgets?: BudgetUncheckedUpdateManyWithoutUserNestedInput
    transactions?: TransactionUncheckedUpdateManyWithoutUserNestedInput
    categories?: CategoryUncheckedUpdateManyWithoutUserNestedInput
    bills?: BillUncheckedUpdateManyWithoutUserNestedInput
    savingsGoals?: SavingsGoalUncheckedUpdateManyWithoutUserNestedInput
  }

  export type CategoryUpsertWithoutPlanItemsInput = {
    update: XOR<CategoryUpdateWithoutPlanItemsInput, CategoryUncheckedUpdateWithoutPlanItemsInput>
    create: XOR<CategoryCreateWithoutPlanItemsInput, CategoryUncheckedCreateWithoutPlanItemsInput>
    where?: CategoryWhereInput
  }

  export type CategoryUpdateToOneWithWhereWithoutPlanItemsInput = {
    where?: CategoryWhereInput
    data: XOR<CategoryUpdateWithoutPlanItemsInput, CategoryUncheckedUpdateWithoutPlanItemsInput>
  }

  export type CategoryUpdateWithoutPlanItemsInput = {
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    color?: StringFieldUpdateOperationsInput | string
    icon?: StringFieldUpdateOperationsInput | string
    type?: EnumCategoryTypeFieldUpdateOperationsInput | $Enums.CategoryType
    isDefault?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutCategoriesNestedInput
    transactions?: TransactionUpdateManyWithoutCategoryNestedInput
    bills?: BillUpdateManyWithoutCategoryNestedInput
    allocations?: CategoryAllocationUpdateManyWithoutCategoryNestedInput
  }

  export type CategoryUncheckedUpdateWithoutPlanItemsInput = {
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    color?: StringFieldUpdateOperationsInput | string
    icon?: StringFieldUpdateOperationsInput | string
    type?: EnumCategoryTypeFieldUpdateOperationsInput | $Enums.CategoryType
    isDefault?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: StringFieldUpdateOperationsInput | string
    transactions?: TransactionUncheckedUpdateManyWithoutCategoryNestedInput
    bills?: BillUncheckedUpdateManyWithoutCategoryNestedInput
    allocations?: CategoryAllocationUncheckedUpdateManyWithoutCategoryNestedInput
  }

  export type BudgetCreateManyUserInput = {
    id?: string
    name: string
    description?: string | null
    amount: number
    startDate: Date | string
    endDate: Date | string
    type: $Enums.BudgetTimeframe
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type TransactionCreateManyUserInput = {
    id?: string
    amount: number
    description?: string | null
    date: Date | string
    notes?: string | null
    type: $Enums.TransactionType
    createdAt?: Date | string
    updatedAt?: Date | string
    categoryId: string
    billId?: string | null
  }

  export type CategoryCreateManyUserInput = {
    id?: string
    name: string
    description?: string | null
    color: string
    icon: string
    type: $Enums.CategoryType
    isDefault?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type BillCreateManyUserInput = {
    id?: string
    name: string
    amount: number
    dueDate: Date | string
    frequency: $Enums.BillFrequency
    autopay?: boolean
    notes?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    categoryId: string
  }

  export type SavingsGoalCreateManyUserInput = {
    id?: string
    name: string
    targetAmount: number
    currentAmount?: number
    targetDate?: Date | string | null
    completed?: boolean
    notes?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PlanItemCreateManyUserInput = {
    id?: string
    description: string
    amount: number
    notes?: string | null
    planType: string
    itemType: string
    createdAt?: Date | string
    updatedAt?: Date | string
    categoryId?: string | null
  }

  export type BudgetUpdateWithoutUserInput = {
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    amount?: FloatFieldUpdateOperationsInput | number
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: DateTimeFieldUpdateOperationsInput | Date | string
    type?: EnumBudgetTimeframeFieldUpdateOperationsInput | $Enums.BudgetTimeframe
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    categoryAllocations?: CategoryAllocationUpdateManyWithoutBudgetNestedInput
  }

  export type BudgetUncheckedUpdateWithoutUserInput = {
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    amount?: FloatFieldUpdateOperationsInput | number
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: DateTimeFieldUpdateOperationsInput | Date | string
    type?: EnumBudgetTimeframeFieldUpdateOperationsInput | $Enums.BudgetTimeframe
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    categoryAllocations?: CategoryAllocationUncheckedUpdateManyWithoutBudgetNestedInput
  }

  export type BudgetUncheckedUpdateManyWithoutUserInput = {
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    amount?: FloatFieldUpdateOperationsInput | number
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: DateTimeFieldUpdateOperationsInput | Date | string
    type?: EnumBudgetTimeframeFieldUpdateOperationsInput | $Enums.BudgetTimeframe
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TransactionUpdateWithoutUserInput = {
    amount?: FloatFieldUpdateOperationsInput | number
    description?: NullableStringFieldUpdateOperationsInput | string | null
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    type?: EnumTransactionTypeFieldUpdateOperationsInput | $Enums.TransactionType
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    category?: CategoryUpdateOneRequiredWithoutTransactionsNestedInput
    bill?: BillUpdateOneWithoutTransactionsNestedInput
  }

  export type TransactionUncheckedUpdateWithoutUserInput = {
    amount?: FloatFieldUpdateOperationsInput | number
    description?: NullableStringFieldUpdateOperationsInput | string | null
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    type?: EnumTransactionTypeFieldUpdateOperationsInput | $Enums.TransactionType
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    categoryId?: StringFieldUpdateOperationsInput | string
    billId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type TransactionUncheckedUpdateManyWithoutUserInput = {
    amount?: FloatFieldUpdateOperationsInput | number
    description?: NullableStringFieldUpdateOperationsInput | string | null
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    type?: EnumTransactionTypeFieldUpdateOperationsInput | $Enums.TransactionType
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    categoryId?: StringFieldUpdateOperationsInput | string
    billId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type CategoryUpdateWithoutUserInput = {
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    color?: StringFieldUpdateOperationsInput | string
    icon?: StringFieldUpdateOperationsInput | string
    type?: EnumCategoryTypeFieldUpdateOperationsInput | $Enums.CategoryType
    isDefault?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    transactions?: TransactionUpdateManyWithoutCategoryNestedInput
    bills?: BillUpdateManyWithoutCategoryNestedInput
    allocations?: CategoryAllocationUpdateManyWithoutCategoryNestedInput
    planItems?: PlanItemUpdateManyWithoutCategoryNestedInput
  }

  export type CategoryUncheckedUpdateWithoutUserInput = {
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    color?: StringFieldUpdateOperationsInput | string
    icon?: StringFieldUpdateOperationsInput | string
    type?: EnumCategoryTypeFieldUpdateOperationsInput | $Enums.CategoryType
    isDefault?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    transactions?: TransactionUncheckedUpdateManyWithoutCategoryNestedInput
    bills?: BillUncheckedUpdateManyWithoutCategoryNestedInput
    allocations?: CategoryAllocationUncheckedUpdateManyWithoutCategoryNestedInput
    planItems?: PlanItemUncheckedUpdateManyWithoutCategoryNestedInput
  }

  export type CategoryUncheckedUpdateManyWithoutUserInput = {
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    color?: StringFieldUpdateOperationsInput | string
    icon?: StringFieldUpdateOperationsInput | string
    type?: EnumCategoryTypeFieldUpdateOperationsInput | $Enums.CategoryType
    isDefault?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BillUpdateWithoutUserInput = {
    name?: StringFieldUpdateOperationsInput | string
    amount?: FloatFieldUpdateOperationsInput | number
    dueDate?: DateTimeFieldUpdateOperationsInput | Date | string
    frequency?: EnumBillFrequencyFieldUpdateOperationsInput | $Enums.BillFrequency
    autopay?: BoolFieldUpdateOperationsInput | boolean
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    category?: CategoryUpdateOneRequiredWithoutBillsNestedInput
    transactions?: TransactionUpdateManyWithoutBillNestedInput
  }

  export type BillUncheckedUpdateWithoutUserInput = {
    name?: StringFieldUpdateOperationsInput | string
    amount?: FloatFieldUpdateOperationsInput | number
    dueDate?: DateTimeFieldUpdateOperationsInput | Date | string
    frequency?: EnumBillFrequencyFieldUpdateOperationsInput | $Enums.BillFrequency
    autopay?: BoolFieldUpdateOperationsInput | boolean
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    categoryId?: StringFieldUpdateOperationsInput | string
    transactions?: TransactionUncheckedUpdateManyWithoutBillNestedInput
  }

  export type BillUncheckedUpdateManyWithoutUserInput = {
    name?: StringFieldUpdateOperationsInput | string
    amount?: FloatFieldUpdateOperationsInput | number
    dueDate?: DateTimeFieldUpdateOperationsInput | Date | string
    frequency?: EnumBillFrequencyFieldUpdateOperationsInput | $Enums.BillFrequency
    autopay?: BoolFieldUpdateOperationsInput | boolean
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    categoryId?: StringFieldUpdateOperationsInput | string
  }

  export type SavingsGoalUpdateWithoutUserInput = {
    name?: StringFieldUpdateOperationsInput | string
    targetAmount?: FloatFieldUpdateOperationsInput | number
    currentAmount?: FloatFieldUpdateOperationsInput | number
    targetDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    completed?: BoolFieldUpdateOperationsInput | boolean
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SavingsGoalUncheckedUpdateWithoutUserInput = {
    name?: StringFieldUpdateOperationsInput | string
    targetAmount?: FloatFieldUpdateOperationsInput | number
    currentAmount?: FloatFieldUpdateOperationsInput | number
    targetDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    completed?: BoolFieldUpdateOperationsInput | boolean
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SavingsGoalUncheckedUpdateManyWithoutUserInput = {
    name?: StringFieldUpdateOperationsInput | string
    targetAmount?: FloatFieldUpdateOperationsInput | number
    currentAmount?: FloatFieldUpdateOperationsInput | number
    targetDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    completed?: BoolFieldUpdateOperationsInput | boolean
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PlanItemUpdateWithoutUserInput = {
    description?: StringFieldUpdateOperationsInput | string
    amount?: FloatFieldUpdateOperationsInput | number
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    planType?: StringFieldUpdateOperationsInput | string
    itemType?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    category?: CategoryUpdateOneWithoutPlanItemsNestedInput
  }

  export type PlanItemUncheckedUpdateWithoutUserInput = {
    description?: StringFieldUpdateOperationsInput | string
    amount?: FloatFieldUpdateOperationsInput | number
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    planType?: StringFieldUpdateOperationsInput | string
    itemType?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    categoryId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type PlanItemUncheckedUpdateManyWithoutUserInput = {
    description?: StringFieldUpdateOperationsInput | string
    amount?: FloatFieldUpdateOperationsInput | number
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    planType?: StringFieldUpdateOperationsInput | string
    itemType?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    categoryId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type TransactionCreateManyCategoryInput = {
    id?: string
    amount: number
    description?: string | null
    date: Date | string
    notes?: string | null
    type: $Enums.TransactionType
    createdAt?: Date | string
    updatedAt?: Date | string
    userId: string
    billId?: string | null
  }

  export type BillCreateManyCategoryInput = {
    id?: string
    name: string
    amount: number
    dueDate: Date | string
    frequency: $Enums.BillFrequency
    autopay?: boolean
    notes?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    userId: string
  }

  export type CategoryAllocationCreateManyCategoryInput = {
    id?: string
    amount: number
    budgetId: string
  }

  export type PlanItemCreateManyCategoryInput = {
    id?: string
    description: string
    amount: number
    notes?: string | null
    planType: string
    itemType: string
    createdAt?: Date | string
    updatedAt?: Date | string
    userId: string
  }

  export type TransactionUpdateWithoutCategoryInput = {
    amount?: FloatFieldUpdateOperationsInput | number
    description?: NullableStringFieldUpdateOperationsInput | string | null
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    type?: EnumTransactionTypeFieldUpdateOperationsInput | $Enums.TransactionType
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutTransactionsNestedInput
    bill?: BillUpdateOneWithoutTransactionsNestedInput
  }

  export type TransactionUncheckedUpdateWithoutCategoryInput = {
    amount?: FloatFieldUpdateOperationsInput | number
    description?: NullableStringFieldUpdateOperationsInput | string | null
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    type?: EnumTransactionTypeFieldUpdateOperationsInput | $Enums.TransactionType
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: StringFieldUpdateOperationsInput | string
    billId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type TransactionUncheckedUpdateManyWithoutCategoryInput = {
    amount?: FloatFieldUpdateOperationsInput | number
    description?: NullableStringFieldUpdateOperationsInput | string | null
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    type?: EnumTransactionTypeFieldUpdateOperationsInput | $Enums.TransactionType
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: StringFieldUpdateOperationsInput | string
    billId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type BillUpdateWithoutCategoryInput = {
    name?: StringFieldUpdateOperationsInput | string
    amount?: FloatFieldUpdateOperationsInput | number
    dueDate?: DateTimeFieldUpdateOperationsInput | Date | string
    frequency?: EnumBillFrequencyFieldUpdateOperationsInput | $Enums.BillFrequency
    autopay?: BoolFieldUpdateOperationsInput | boolean
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutBillsNestedInput
    transactions?: TransactionUpdateManyWithoutBillNestedInput
  }

  export type BillUncheckedUpdateWithoutCategoryInput = {
    name?: StringFieldUpdateOperationsInput | string
    amount?: FloatFieldUpdateOperationsInput | number
    dueDate?: DateTimeFieldUpdateOperationsInput | Date | string
    frequency?: EnumBillFrequencyFieldUpdateOperationsInput | $Enums.BillFrequency
    autopay?: BoolFieldUpdateOperationsInput | boolean
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: StringFieldUpdateOperationsInput | string
    transactions?: TransactionUncheckedUpdateManyWithoutBillNestedInput
  }

  export type BillUncheckedUpdateManyWithoutCategoryInput = {
    name?: StringFieldUpdateOperationsInput | string
    amount?: FloatFieldUpdateOperationsInput | number
    dueDate?: DateTimeFieldUpdateOperationsInput | Date | string
    frequency?: EnumBillFrequencyFieldUpdateOperationsInput | $Enums.BillFrequency
    autopay?: BoolFieldUpdateOperationsInput | boolean
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: StringFieldUpdateOperationsInput | string
  }

  export type CategoryAllocationUpdateWithoutCategoryInput = {
    amount?: FloatFieldUpdateOperationsInput | number
    budget?: BudgetUpdateOneRequiredWithoutCategoryAllocationsNestedInput
  }

  export type CategoryAllocationUncheckedUpdateWithoutCategoryInput = {
    amount?: FloatFieldUpdateOperationsInput | number
    budgetId?: StringFieldUpdateOperationsInput | string
  }

  export type CategoryAllocationUncheckedUpdateManyWithoutCategoryInput = {
    amount?: FloatFieldUpdateOperationsInput | number
    budgetId?: StringFieldUpdateOperationsInput | string
  }

  export type PlanItemUpdateWithoutCategoryInput = {
    description?: StringFieldUpdateOperationsInput | string
    amount?: FloatFieldUpdateOperationsInput | number
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    planType?: StringFieldUpdateOperationsInput | string
    itemType?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutPlanItemsNestedInput
  }

  export type PlanItemUncheckedUpdateWithoutCategoryInput = {
    description?: StringFieldUpdateOperationsInput | string
    amount?: FloatFieldUpdateOperationsInput | number
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    planType?: StringFieldUpdateOperationsInput | string
    itemType?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: StringFieldUpdateOperationsInput | string
  }

  export type PlanItemUncheckedUpdateManyWithoutCategoryInput = {
    description?: StringFieldUpdateOperationsInput | string
    amount?: FloatFieldUpdateOperationsInput | number
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    planType?: StringFieldUpdateOperationsInput | string
    itemType?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: StringFieldUpdateOperationsInput | string
  }

  export type TransactionCreateManyBillInput = {
    id?: string
    amount: number
    description?: string | null
    date: Date | string
    notes?: string | null
    type: $Enums.TransactionType
    createdAt?: Date | string
    updatedAt?: Date | string
    userId: string
    categoryId: string
  }

  export type TransactionUpdateWithoutBillInput = {
    amount?: FloatFieldUpdateOperationsInput | number
    description?: NullableStringFieldUpdateOperationsInput | string | null
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    type?: EnumTransactionTypeFieldUpdateOperationsInput | $Enums.TransactionType
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutTransactionsNestedInput
    category?: CategoryUpdateOneRequiredWithoutTransactionsNestedInput
  }

  export type TransactionUncheckedUpdateWithoutBillInput = {
    amount?: FloatFieldUpdateOperationsInput | number
    description?: NullableStringFieldUpdateOperationsInput | string | null
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    type?: EnumTransactionTypeFieldUpdateOperationsInput | $Enums.TransactionType
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: StringFieldUpdateOperationsInput | string
    categoryId?: StringFieldUpdateOperationsInput | string
  }

  export type TransactionUncheckedUpdateManyWithoutBillInput = {
    amount?: FloatFieldUpdateOperationsInput | number
    description?: NullableStringFieldUpdateOperationsInput | string | null
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    type?: EnumTransactionTypeFieldUpdateOperationsInput | $Enums.TransactionType
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: StringFieldUpdateOperationsInput | string
    categoryId?: StringFieldUpdateOperationsInput | string
  }

  export type CategoryAllocationCreateManyBudgetInput = {
    id?: string
    amount: number
    categoryId: string
  }

  export type CategoryAllocationUpdateWithoutBudgetInput = {
    amount?: FloatFieldUpdateOperationsInput | number
    category?: CategoryUpdateOneRequiredWithoutAllocationsNestedInput
  }

  export type CategoryAllocationUncheckedUpdateWithoutBudgetInput = {
    amount?: FloatFieldUpdateOperationsInput | number
    categoryId?: StringFieldUpdateOperationsInput | string
  }

  export type CategoryAllocationUncheckedUpdateManyWithoutBudgetInput = {
    amount?: FloatFieldUpdateOperationsInput | number
    categoryId?: StringFieldUpdateOperationsInput | string
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