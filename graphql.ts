import { gql } from "@apollo/client";
import * as Apollo from "@apollo/client";
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = {
  [K in keyof T]: T[K];
};
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]?: Maybe<T[SubKey]>;
};
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]: Maybe<T[SubKey]>;
};
export type MakeEmpty<
  T extends { [key: string]: unknown },
  K extends keyof T,
> = { [_ in K]?: never };
export type Incremental<T> =
  | T
  | {
      [P in keyof T]?: P extends " $fragmentName" | "__typename" ? T[P] : never;
    };
const defaultOptions = {} as const;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string };
  String: { input: string; output: string };
  Boolean: { input: boolean; output: boolean };
  Int: { input: number; output: number };
  Float: { input: number; output: number };
  date: { input: any; output: any };
  timestamp: { input: any; output: any };
};

/** Boolean expression to compare columns of type "Int". All fields are combined with logical 'AND'. */
export type Int_Array_Comparison_Exp = {
  /** is the array contained in the given array value */
  _contained_in?: InputMaybe<Array<Scalars["Int"]["input"]>>;
  /** does the array contain the given value */
  _contains?: InputMaybe<Array<Scalars["Int"]["input"]>>;
  _eq?: InputMaybe<Array<Scalars["Int"]["input"]>>;
  _gt?: InputMaybe<Array<Scalars["Int"]["input"]>>;
  _gte?: InputMaybe<Array<Scalars["Int"]["input"]>>;
  _in?: InputMaybe<Array<Array<Scalars["Int"]["input"]>>>;
  _is_null?: InputMaybe<Scalars["Boolean"]["input"]>;
  _lt?: InputMaybe<Array<Scalars["Int"]["input"]>>;
  _lte?: InputMaybe<Array<Scalars["Int"]["input"]>>;
  _neq?: InputMaybe<Array<Scalars["Int"]["input"]>>;
  _nin?: InputMaybe<Array<Array<Scalars["Int"]["input"]>>>;
};

/** Boolean expression to compare columns of type "Int". All fields are combined with logical 'AND'. */
export type Int_Comparison_Exp = {
  _eq?: InputMaybe<Scalars["Int"]["input"]>;
  _gt?: InputMaybe<Scalars["Int"]["input"]>;
  _gte?: InputMaybe<Scalars["Int"]["input"]>;
  _in?: InputMaybe<Array<Scalars["Int"]["input"]>>;
  _is_null?: InputMaybe<Scalars["Boolean"]["input"]>;
  _lt?: InputMaybe<Scalars["Int"]["input"]>;
  _lte?: InputMaybe<Scalars["Int"]["input"]>;
  _neq?: InputMaybe<Scalars["Int"]["input"]>;
  _nin?: InputMaybe<Array<Scalars["Int"]["input"]>>;
};

/** Boolean expression to compare columns of type "String". All fields are combined with logical 'AND'. */
export type String_Array_Comparison_Exp = {
  /** is the array contained in the given array value */
  _contained_in?: InputMaybe<Array<Scalars["String"]["input"]>>;
  /** does the array contain the given value */
  _contains?: InputMaybe<Array<Scalars["String"]["input"]>>;
  _eq?: InputMaybe<Array<Scalars["String"]["input"]>>;
  _gt?: InputMaybe<Array<Scalars["String"]["input"]>>;
  _gte?: InputMaybe<Array<Scalars["String"]["input"]>>;
  _in?: InputMaybe<Array<Array<Scalars["String"]["input"]>>>;
  _is_null?: InputMaybe<Scalars["Boolean"]["input"]>;
  _lt?: InputMaybe<Array<Scalars["String"]["input"]>>;
  _lte?: InputMaybe<Array<Scalars["String"]["input"]>>;
  _neq?: InputMaybe<Array<Scalars["String"]["input"]>>;
  _nin?: InputMaybe<Array<Array<Scalars["String"]["input"]>>>;
};

/** Boolean expression to compare columns of type "String". All fields are combined with logical 'AND'. */
export type String_Comparison_Exp = {
  _eq?: InputMaybe<Scalars["String"]["input"]>;
  _gt?: InputMaybe<Scalars["String"]["input"]>;
  _gte?: InputMaybe<Scalars["String"]["input"]>;
  /** does the column match the given case-insensitive pattern */
  _ilike?: InputMaybe<Scalars["String"]["input"]>;
  _in?: InputMaybe<Array<Scalars["String"]["input"]>>;
  /** does the column match the given POSIX regular expression, case insensitive */
  _iregex?: InputMaybe<Scalars["String"]["input"]>;
  _is_null?: InputMaybe<Scalars["Boolean"]["input"]>;
  /** does the column match the given pattern */
  _like?: InputMaybe<Scalars["String"]["input"]>;
  _lt?: InputMaybe<Scalars["String"]["input"]>;
  _lte?: InputMaybe<Scalars["String"]["input"]>;
  _neq?: InputMaybe<Scalars["String"]["input"]>;
  /** does the column NOT match the given case-insensitive pattern */
  _nilike?: InputMaybe<Scalars["String"]["input"]>;
  _nin?: InputMaybe<Array<Scalars["String"]["input"]>>;
  /** does the column NOT match the given POSIX regular expression, case insensitive */
  _niregex?: InputMaybe<Scalars["String"]["input"]>;
  /** does the column NOT match the given pattern */
  _nlike?: InputMaybe<Scalars["String"]["input"]>;
  /** does the column NOT match the given POSIX regular expression, case sensitive */
  _nregex?: InputMaybe<Scalars["String"]["input"]>;
  /** does the column NOT match the given SQL regular expression */
  _nsimilar?: InputMaybe<Scalars["String"]["input"]>;
  /** does the column match the given POSIX regular expression, case sensitive */
  _regex?: InputMaybe<Scalars["String"]["input"]>;
  /** does the column match the given SQL regular expression */
  _similar?: InputMaybe<Scalars["String"]["input"]>;
};

/** ordering argument of a cursor */
export enum Cursor_Ordering {
  /** ascending ordering of the cursor */
  Asc = "ASC",
  /** descending ordering of the cursor */
  Desc = "DESC",
}

/** columns and relationships of "daily_horoscope" */
export type Daily_Horoscope = {
  __typename?: "daily_horoscope";
  created_at?: Maybe<Scalars["timestamp"]["output"]>;
  daily_career?: Maybe<Scalars["String"]["output"]>;
  daily_finance?: Maybe<Scalars["String"]["output"]>;
  daily_health?: Maybe<Scalars["String"]["output"]>;
  daily_horoscope_id: Scalars["Int"]["output"];
  daily_love?: Maybe<Scalars["String"]["output"]>;
  daily_lucky_colors?: Maybe<Array<Scalars["String"]["output"]>>;
  daily_lucky_numbers?: Maybe<Array<Scalars["Int"]["output"]>>;
  date?: Maybe<Scalars["date"]["output"]>;
  deleted_at?: Maybe<Scalars["timestamp"]["output"]>;
  horoscope_content?: Maybe<Scalars["String"]["output"]>;
  updated_at?: Maybe<Scalars["timestamp"]["output"]>;
  /** An object relationship */
  zodiac?: Maybe<Zodiac>;
  zodiac_id?: Maybe<Scalars["Int"]["output"]>;
};

/** aggregated selection of "daily_horoscope" */
export type Daily_Horoscope_Aggregate = {
  __typename?: "daily_horoscope_aggregate";
  aggregate?: Maybe<Daily_Horoscope_Aggregate_Fields>;
  nodes: Array<Daily_Horoscope>;
};

export type Daily_Horoscope_Aggregate_Bool_Exp = {
  count?: InputMaybe<Daily_Horoscope_Aggregate_Bool_Exp_Count>;
};

export type Daily_Horoscope_Aggregate_Bool_Exp_Count = {
  arguments?: InputMaybe<Array<Daily_Horoscope_Select_Column>>;
  distinct?: InputMaybe<Scalars["Boolean"]["input"]>;
  filter?: InputMaybe<Daily_Horoscope_Bool_Exp>;
  predicate: Int_Comparison_Exp;
};

/** aggregate fields of "daily_horoscope" */
export type Daily_Horoscope_Aggregate_Fields = {
  __typename?: "daily_horoscope_aggregate_fields";
  avg?: Maybe<Daily_Horoscope_Avg_Fields>;
  count: Scalars["Int"]["output"];
  max?: Maybe<Daily_Horoscope_Max_Fields>;
  min?: Maybe<Daily_Horoscope_Min_Fields>;
  stddev?: Maybe<Daily_Horoscope_Stddev_Fields>;
  stddev_pop?: Maybe<Daily_Horoscope_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Daily_Horoscope_Stddev_Samp_Fields>;
  sum?: Maybe<Daily_Horoscope_Sum_Fields>;
  var_pop?: Maybe<Daily_Horoscope_Var_Pop_Fields>;
  var_samp?: Maybe<Daily_Horoscope_Var_Samp_Fields>;
  variance?: Maybe<Daily_Horoscope_Variance_Fields>;
};

/** aggregate fields of "daily_horoscope" */
export type Daily_Horoscope_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Daily_Horoscope_Select_Column>>;
  distinct?: InputMaybe<Scalars["Boolean"]["input"]>;
};

/** order by aggregate values of table "daily_horoscope" */
export type Daily_Horoscope_Aggregate_Order_By = {
  avg?: InputMaybe<Daily_Horoscope_Avg_Order_By>;
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<Daily_Horoscope_Max_Order_By>;
  min?: InputMaybe<Daily_Horoscope_Min_Order_By>;
  stddev?: InputMaybe<Daily_Horoscope_Stddev_Order_By>;
  stddev_pop?: InputMaybe<Daily_Horoscope_Stddev_Pop_Order_By>;
  stddev_samp?: InputMaybe<Daily_Horoscope_Stddev_Samp_Order_By>;
  sum?: InputMaybe<Daily_Horoscope_Sum_Order_By>;
  var_pop?: InputMaybe<Daily_Horoscope_Var_Pop_Order_By>;
  var_samp?: InputMaybe<Daily_Horoscope_Var_Samp_Order_By>;
  variance?: InputMaybe<Daily_Horoscope_Variance_Order_By>;
};

/** input type for inserting array relation for remote table "daily_horoscope" */
export type Daily_Horoscope_Arr_Rel_Insert_Input = {
  data: Array<Daily_Horoscope_Insert_Input>;
  /** upsert condition */
  on_conflict?: InputMaybe<Daily_Horoscope_On_Conflict>;
};

/** aggregate avg on columns */
export type Daily_Horoscope_Avg_Fields = {
  __typename?: "daily_horoscope_avg_fields";
  daily_horoscope_id?: Maybe<Scalars["Float"]["output"]>;
  zodiac_id?: Maybe<Scalars["Float"]["output"]>;
};

/** order by avg() on columns of table "daily_horoscope" */
export type Daily_Horoscope_Avg_Order_By = {
  daily_horoscope_id?: InputMaybe<Order_By>;
  zodiac_id?: InputMaybe<Order_By>;
};

/** Boolean expression to filter rows from the table "daily_horoscope". All fields are combined with a logical 'AND'. */
export type Daily_Horoscope_Bool_Exp = {
  _and?: InputMaybe<Array<Daily_Horoscope_Bool_Exp>>;
  _not?: InputMaybe<Daily_Horoscope_Bool_Exp>;
  _or?: InputMaybe<Array<Daily_Horoscope_Bool_Exp>>;
  created_at?: InputMaybe<Timestamp_Comparison_Exp>;
  daily_career?: InputMaybe<String_Comparison_Exp>;
  daily_finance?: InputMaybe<String_Comparison_Exp>;
  daily_health?: InputMaybe<String_Comparison_Exp>;
  daily_horoscope_id?: InputMaybe<Int_Comparison_Exp>;
  daily_love?: InputMaybe<String_Comparison_Exp>;
  daily_lucky_colors?: InputMaybe<String_Array_Comparison_Exp>;
  daily_lucky_numbers?: InputMaybe<Int_Array_Comparison_Exp>;
  date?: InputMaybe<Date_Comparison_Exp>;
  deleted_at?: InputMaybe<Timestamp_Comparison_Exp>;
  horoscope_content?: InputMaybe<String_Comparison_Exp>;
  updated_at?: InputMaybe<Timestamp_Comparison_Exp>;
  zodiac?: InputMaybe<Zodiac_Bool_Exp>;
  zodiac_id?: InputMaybe<Int_Comparison_Exp>;
};

/** unique or primary key constraints on table "daily_horoscope" */
export enum Daily_Horoscope_Constraint {
  /** unique or primary key constraint on columns "daily_horoscope_id" */
  DailyHoroscopePkey = "daily_horoscope_pkey",
}

/** input type for incrementing numeric columns in table "daily_horoscope" */
export type Daily_Horoscope_Inc_Input = {
  daily_horoscope_id?: InputMaybe<Scalars["Int"]["input"]>;
  zodiac_id?: InputMaybe<Scalars["Int"]["input"]>;
};

/** input type for inserting data into table "daily_horoscope" */
export type Daily_Horoscope_Insert_Input = {
  created_at?: InputMaybe<Scalars["timestamp"]["input"]>;
  daily_career?: InputMaybe<Scalars["String"]["input"]>;
  daily_finance?: InputMaybe<Scalars["String"]["input"]>;
  daily_health?: InputMaybe<Scalars["String"]["input"]>;
  daily_horoscope_id?: InputMaybe<Scalars["Int"]["input"]>;
  daily_love?: InputMaybe<Scalars["String"]["input"]>;
  daily_lucky_colors?: InputMaybe<Array<Scalars["String"]["input"]>>;
  daily_lucky_numbers?: InputMaybe<Array<Scalars["Int"]["input"]>>;
  date?: InputMaybe<Scalars["date"]["input"]>;
  deleted_at?: InputMaybe<Scalars["timestamp"]["input"]>;
  horoscope_content?: InputMaybe<Scalars["String"]["input"]>;
  updated_at?: InputMaybe<Scalars["timestamp"]["input"]>;
  zodiac?: InputMaybe<Zodiac_Obj_Rel_Insert_Input>;
  zodiac_id?: InputMaybe<Scalars["Int"]["input"]>;
};

/** aggregate max on columns */
export type Daily_Horoscope_Max_Fields = {
  __typename?: "daily_horoscope_max_fields";
  created_at?: Maybe<Scalars["timestamp"]["output"]>;
  daily_career?: Maybe<Scalars["String"]["output"]>;
  daily_finance?: Maybe<Scalars["String"]["output"]>;
  daily_health?: Maybe<Scalars["String"]["output"]>;
  daily_horoscope_id?: Maybe<Scalars["Int"]["output"]>;
  daily_love?: Maybe<Scalars["String"]["output"]>;
  daily_lucky_colors?: Maybe<Array<Scalars["String"]["output"]>>;
  daily_lucky_numbers?: Maybe<Array<Scalars["Int"]["output"]>>;
  date?: Maybe<Scalars["date"]["output"]>;
  deleted_at?: Maybe<Scalars["timestamp"]["output"]>;
  horoscope_content?: Maybe<Scalars["String"]["output"]>;
  updated_at?: Maybe<Scalars["timestamp"]["output"]>;
  zodiac_id?: Maybe<Scalars["Int"]["output"]>;
};

/** order by max() on columns of table "daily_horoscope" */
export type Daily_Horoscope_Max_Order_By = {
  created_at?: InputMaybe<Order_By>;
  daily_career?: InputMaybe<Order_By>;
  daily_finance?: InputMaybe<Order_By>;
  daily_health?: InputMaybe<Order_By>;
  daily_horoscope_id?: InputMaybe<Order_By>;
  daily_love?: InputMaybe<Order_By>;
  daily_lucky_colors?: InputMaybe<Order_By>;
  daily_lucky_numbers?: InputMaybe<Order_By>;
  date?: InputMaybe<Order_By>;
  deleted_at?: InputMaybe<Order_By>;
  horoscope_content?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
  zodiac_id?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type Daily_Horoscope_Min_Fields = {
  __typename?: "daily_horoscope_min_fields";
  created_at?: Maybe<Scalars["timestamp"]["output"]>;
  daily_career?: Maybe<Scalars["String"]["output"]>;
  daily_finance?: Maybe<Scalars["String"]["output"]>;
  daily_health?: Maybe<Scalars["String"]["output"]>;
  daily_horoscope_id?: Maybe<Scalars["Int"]["output"]>;
  daily_love?: Maybe<Scalars["String"]["output"]>;
  daily_lucky_colors?: Maybe<Array<Scalars["String"]["output"]>>;
  daily_lucky_numbers?: Maybe<Array<Scalars["Int"]["output"]>>;
  date?: Maybe<Scalars["date"]["output"]>;
  deleted_at?: Maybe<Scalars["timestamp"]["output"]>;
  horoscope_content?: Maybe<Scalars["String"]["output"]>;
  updated_at?: Maybe<Scalars["timestamp"]["output"]>;
  zodiac_id?: Maybe<Scalars["Int"]["output"]>;
};

/** order by min() on columns of table "daily_horoscope" */
export type Daily_Horoscope_Min_Order_By = {
  created_at?: InputMaybe<Order_By>;
  daily_career?: InputMaybe<Order_By>;
  daily_finance?: InputMaybe<Order_By>;
  daily_health?: InputMaybe<Order_By>;
  daily_horoscope_id?: InputMaybe<Order_By>;
  daily_love?: InputMaybe<Order_By>;
  daily_lucky_colors?: InputMaybe<Order_By>;
  daily_lucky_numbers?: InputMaybe<Order_By>;
  date?: InputMaybe<Order_By>;
  deleted_at?: InputMaybe<Order_By>;
  horoscope_content?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
  zodiac_id?: InputMaybe<Order_By>;
};

/** response of any mutation on the table "daily_horoscope" */
export type Daily_Horoscope_Mutation_Response = {
  __typename?: "daily_horoscope_mutation_response";
  /** number of rows affected by the mutation */
  affected_rows: Scalars["Int"]["output"];
  /** data from the rows affected by the mutation */
  returning: Array<Daily_Horoscope>;
};

/** on_conflict condition type for table "daily_horoscope" */
export type Daily_Horoscope_On_Conflict = {
  constraint: Daily_Horoscope_Constraint;
  update_columns?: Array<Daily_Horoscope_Update_Column>;
  where?: InputMaybe<Daily_Horoscope_Bool_Exp>;
};

/** Ordering options when selecting data from "daily_horoscope". */
export type Daily_Horoscope_Order_By = {
  created_at?: InputMaybe<Order_By>;
  daily_career?: InputMaybe<Order_By>;
  daily_finance?: InputMaybe<Order_By>;
  daily_health?: InputMaybe<Order_By>;
  daily_horoscope_id?: InputMaybe<Order_By>;
  daily_love?: InputMaybe<Order_By>;
  daily_lucky_colors?: InputMaybe<Order_By>;
  daily_lucky_numbers?: InputMaybe<Order_By>;
  date?: InputMaybe<Order_By>;
  deleted_at?: InputMaybe<Order_By>;
  horoscope_content?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
  zodiac?: InputMaybe<Zodiac_Order_By>;
  zodiac_id?: InputMaybe<Order_By>;
};

/** primary key columns input for table: daily_horoscope */
export type Daily_Horoscope_Pk_Columns_Input = {
  daily_horoscope_id: Scalars["Int"]["input"];
};

/** select columns of table "daily_horoscope" */
export enum Daily_Horoscope_Select_Column {
  /** column name */
  CreatedAt = "created_at",
  /** column name */
  DailyCareer = "daily_career",
  /** column name */
  DailyFinance = "daily_finance",
  /** column name */
  DailyHealth = "daily_health",
  /** column name */
  DailyHoroscopeId = "daily_horoscope_id",
  /** column name */
  DailyLove = "daily_love",
  /** column name */
  DailyLuckyColors = "daily_lucky_colors",
  /** column name */
  DailyLuckyNumbers = "daily_lucky_numbers",
  /** column name */
  Date = "date",
  /** column name */
  DeletedAt = "deleted_at",
  /** column name */
  HoroscopeContent = "horoscope_content",
  /** column name */
  UpdatedAt = "updated_at",
  /** column name */
  ZodiacId = "zodiac_id",
}

/** input type for updating data in table "daily_horoscope" */
export type Daily_Horoscope_Set_Input = {
  created_at?: InputMaybe<Scalars["timestamp"]["input"]>;
  daily_career?: InputMaybe<Scalars["String"]["input"]>;
  daily_finance?: InputMaybe<Scalars["String"]["input"]>;
  daily_health?: InputMaybe<Scalars["String"]["input"]>;
  daily_horoscope_id?: InputMaybe<Scalars["Int"]["input"]>;
  daily_love?: InputMaybe<Scalars["String"]["input"]>;
  daily_lucky_colors?: InputMaybe<Array<Scalars["String"]["input"]>>;
  daily_lucky_numbers?: InputMaybe<Array<Scalars["Int"]["input"]>>;
  date?: InputMaybe<Scalars["date"]["input"]>;
  deleted_at?: InputMaybe<Scalars["timestamp"]["input"]>;
  horoscope_content?: InputMaybe<Scalars["String"]["input"]>;
  updated_at?: InputMaybe<Scalars["timestamp"]["input"]>;
  zodiac_id?: InputMaybe<Scalars["Int"]["input"]>;
};

/** aggregate stddev on columns */
export type Daily_Horoscope_Stddev_Fields = {
  __typename?: "daily_horoscope_stddev_fields";
  daily_horoscope_id?: Maybe<Scalars["Float"]["output"]>;
  zodiac_id?: Maybe<Scalars["Float"]["output"]>;
};

/** order by stddev() on columns of table "daily_horoscope" */
export type Daily_Horoscope_Stddev_Order_By = {
  daily_horoscope_id?: InputMaybe<Order_By>;
  zodiac_id?: InputMaybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type Daily_Horoscope_Stddev_Pop_Fields = {
  __typename?: "daily_horoscope_stddev_pop_fields";
  daily_horoscope_id?: Maybe<Scalars["Float"]["output"]>;
  zodiac_id?: Maybe<Scalars["Float"]["output"]>;
};

/** order by stddev_pop() on columns of table "daily_horoscope" */
export type Daily_Horoscope_Stddev_Pop_Order_By = {
  daily_horoscope_id?: InputMaybe<Order_By>;
  zodiac_id?: InputMaybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type Daily_Horoscope_Stddev_Samp_Fields = {
  __typename?: "daily_horoscope_stddev_samp_fields";
  daily_horoscope_id?: Maybe<Scalars["Float"]["output"]>;
  zodiac_id?: Maybe<Scalars["Float"]["output"]>;
};

/** order by stddev_samp() on columns of table "daily_horoscope" */
export type Daily_Horoscope_Stddev_Samp_Order_By = {
  daily_horoscope_id?: InputMaybe<Order_By>;
  zodiac_id?: InputMaybe<Order_By>;
};

/** Streaming cursor of the table "daily_horoscope" */
export type Daily_Horoscope_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Daily_Horoscope_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Daily_Horoscope_Stream_Cursor_Value_Input = {
  created_at?: InputMaybe<Scalars["timestamp"]["input"]>;
  daily_career?: InputMaybe<Scalars["String"]["input"]>;
  daily_finance?: InputMaybe<Scalars["String"]["input"]>;
  daily_health?: InputMaybe<Scalars["String"]["input"]>;
  daily_horoscope_id?: InputMaybe<Scalars["Int"]["input"]>;
  daily_love?: InputMaybe<Scalars["String"]["input"]>;
  daily_lucky_colors?: InputMaybe<Array<Scalars["String"]["input"]>>;
  daily_lucky_numbers?: InputMaybe<Array<Scalars["Int"]["input"]>>;
  date?: InputMaybe<Scalars["date"]["input"]>;
  deleted_at?: InputMaybe<Scalars["timestamp"]["input"]>;
  horoscope_content?: InputMaybe<Scalars["String"]["input"]>;
  updated_at?: InputMaybe<Scalars["timestamp"]["input"]>;
  zodiac_id?: InputMaybe<Scalars["Int"]["input"]>;
};

/** aggregate sum on columns */
export type Daily_Horoscope_Sum_Fields = {
  __typename?: "daily_horoscope_sum_fields";
  daily_horoscope_id?: Maybe<Scalars["Int"]["output"]>;
  zodiac_id?: Maybe<Scalars["Int"]["output"]>;
};

/** order by sum() on columns of table "daily_horoscope" */
export type Daily_Horoscope_Sum_Order_By = {
  daily_horoscope_id?: InputMaybe<Order_By>;
  zodiac_id?: InputMaybe<Order_By>;
};

/** update columns of table "daily_horoscope" */
export enum Daily_Horoscope_Update_Column {
  /** column name */
  CreatedAt = "created_at",
  /** column name */
  DailyCareer = "daily_career",
  /** column name */
  DailyFinance = "daily_finance",
  /** column name */
  DailyHealth = "daily_health",
  /** column name */
  DailyHoroscopeId = "daily_horoscope_id",
  /** column name */
  DailyLove = "daily_love",
  /** column name */
  DailyLuckyColors = "daily_lucky_colors",
  /** column name */
  DailyLuckyNumbers = "daily_lucky_numbers",
  /** column name */
  Date = "date",
  /** column name */
  DeletedAt = "deleted_at",
  /** column name */
  HoroscopeContent = "horoscope_content",
  /** column name */
  UpdatedAt = "updated_at",
  /** column name */
  ZodiacId = "zodiac_id",
}

export type Daily_Horoscope_Updates = {
  /** increments the numeric columns with given value of the filtered values */
  _inc?: InputMaybe<Daily_Horoscope_Inc_Input>;
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Daily_Horoscope_Set_Input>;
  /** filter the rows which have to be updated */
  where: Daily_Horoscope_Bool_Exp;
};

/** aggregate var_pop on columns */
export type Daily_Horoscope_Var_Pop_Fields = {
  __typename?: "daily_horoscope_var_pop_fields";
  daily_horoscope_id?: Maybe<Scalars["Float"]["output"]>;
  zodiac_id?: Maybe<Scalars["Float"]["output"]>;
};

/** order by var_pop() on columns of table "daily_horoscope" */
export type Daily_Horoscope_Var_Pop_Order_By = {
  daily_horoscope_id?: InputMaybe<Order_By>;
  zodiac_id?: InputMaybe<Order_By>;
};

/** aggregate var_samp on columns */
export type Daily_Horoscope_Var_Samp_Fields = {
  __typename?: "daily_horoscope_var_samp_fields";
  daily_horoscope_id?: Maybe<Scalars["Float"]["output"]>;
  zodiac_id?: Maybe<Scalars["Float"]["output"]>;
};

/** order by var_samp() on columns of table "daily_horoscope" */
export type Daily_Horoscope_Var_Samp_Order_By = {
  daily_horoscope_id?: InputMaybe<Order_By>;
  zodiac_id?: InputMaybe<Order_By>;
};

/** aggregate variance on columns */
export type Daily_Horoscope_Variance_Fields = {
  __typename?: "daily_horoscope_variance_fields";
  daily_horoscope_id?: Maybe<Scalars["Float"]["output"]>;
  zodiac_id?: Maybe<Scalars["Float"]["output"]>;
};

/** order by variance() on columns of table "daily_horoscope" */
export type Daily_Horoscope_Variance_Order_By = {
  daily_horoscope_id?: InputMaybe<Order_By>;
  zodiac_id?: InputMaybe<Order_By>;
};

/** Boolean expression to compare columns of type "date". All fields are combined with logical 'AND'. */
export type Date_Comparison_Exp = {
  _eq?: InputMaybe<Scalars["date"]["input"]>;
  _gt?: InputMaybe<Scalars["date"]["input"]>;
  _gte?: InputMaybe<Scalars["date"]["input"]>;
  _in?: InputMaybe<Array<Scalars["date"]["input"]>>;
  _is_null?: InputMaybe<Scalars["Boolean"]["input"]>;
  _lt?: InputMaybe<Scalars["date"]["input"]>;
  _lte?: InputMaybe<Scalars["date"]["input"]>;
  _neq?: InputMaybe<Scalars["date"]["input"]>;
  _nin?: InputMaybe<Array<Scalars["date"]["input"]>>;
};

/** columns and relationships of "monthly_horoscope" */
export type Monthly_Horoscope = {
  __typename?: "monthly_horoscope";
  created_at?: Maybe<Scalars["timestamp"]["output"]>;
  deleted_at?: Maybe<Scalars["timestamp"]["output"]>;
  horoscope_content?: Maybe<Scalars["String"]["output"]>;
  month?: Maybe<Scalars["Int"]["output"]>;
  monthly_career?: Maybe<Scalars["String"]["output"]>;
  monthly_finance?: Maybe<Scalars["String"]["output"]>;
  monthly_health?: Maybe<Scalars["String"]["output"]>;
  monthly_horoscope_id: Scalars["Int"]["output"];
  monthly_love?: Maybe<Scalars["String"]["output"]>;
  monthly_lucky_colors?: Maybe<Array<Scalars["String"]["output"]>>;
  monthly_lucky_numbers?: Maybe<Array<Scalars["Int"]["output"]>>;
  updated_at?: Maybe<Scalars["timestamp"]["output"]>;
  year?: Maybe<Scalars["Int"]["output"]>;
  /** An object relationship */
  zodiac?: Maybe<Zodiac>;
  zodiac_id?: Maybe<Scalars["Int"]["output"]>;
};

/** aggregated selection of "monthly_horoscope" */
export type Monthly_Horoscope_Aggregate = {
  __typename?: "monthly_horoscope_aggregate";
  aggregate?: Maybe<Monthly_Horoscope_Aggregate_Fields>;
  nodes: Array<Monthly_Horoscope>;
};

export type Monthly_Horoscope_Aggregate_Bool_Exp = {
  count?: InputMaybe<Monthly_Horoscope_Aggregate_Bool_Exp_Count>;
};

export type Monthly_Horoscope_Aggregate_Bool_Exp_Count = {
  arguments?: InputMaybe<Array<Monthly_Horoscope_Select_Column>>;
  distinct?: InputMaybe<Scalars["Boolean"]["input"]>;
  filter?: InputMaybe<Monthly_Horoscope_Bool_Exp>;
  predicate: Int_Comparison_Exp;
};

/** aggregate fields of "monthly_horoscope" */
export type Monthly_Horoscope_Aggregate_Fields = {
  __typename?: "monthly_horoscope_aggregate_fields";
  avg?: Maybe<Monthly_Horoscope_Avg_Fields>;
  count: Scalars["Int"]["output"];
  max?: Maybe<Monthly_Horoscope_Max_Fields>;
  min?: Maybe<Monthly_Horoscope_Min_Fields>;
  stddev?: Maybe<Monthly_Horoscope_Stddev_Fields>;
  stddev_pop?: Maybe<Monthly_Horoscope_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Monthly_Horoscope_Stddev_Samp_Fields>;
  sum?: Maybe<Monthly_Horoscope_Sum_Fields>;
  var_pop?: Maybe<Monthly_Horoscope_Var_Pop_Fields>;
  var_samp?: Maybe<Monthly_Horoscope_Var_Samp_Fields>;
  variance?: Maybe<Monthly_Horoscope_Variance_Fields>;
};

/** aggregate fields of "monthly_horoscope" */
export type Monthly_Horoscope_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Monthly_Horoscope_Select_Column>>;
  distinct?: InputMaybe<Scalars["Boolean"]["input"]>;
};

/** order by aggregate values of table "monthly_horoscope" */
export type Monthly_Horoscope_Aggregate_Order_By = {
  avg?: InputMaybe<Monthly_Horoscope_Avg_Order_By>;
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<Monthly_Horoscope_Max_Order_By>;
  min?: InputMaybe<Monthly_Horoscope_Min_Order_By>;
  stddev?: InputMaybe<Monthly_Horoscope_Stddev_Order_By>;
  stddev_pop?: InputMaybe<Monthly_Horoscope_Stddev_Pop_Order_By>;
  stddev_samp?: InputMaybe<Monthly_Horoscope_Stddev_Samp_Order_By>;
  sum?: InputMaybe<Monthly_Horoscope_Sum_Order_By>;
  var_pop?: InputMaybe<Monthly_Horoscope_Var_Pop_Order_By>;
  var_samp?: InputMaybe<Monthly_Horoscope_Var_Samp_Order_By>;
  variance?: InputMaybe<Monthly_Horoscope_Variance_Order_By>;
};

/** input type for inserting array relation for remote table "monthly_horoscope" */
export type Monthly_Horoscope_Arr_Rel_Insert_Input = {
  data: Array<Monthly_Horoscope_Insert_Input>;
  /** upsert condition */
  on_conflict?: InputMaybe<Monthly_Horoscope_On_Conflict>;
};

/** aggregate avg on columns */
export type Monthly_Horoscope_Avg_Fields = {
  __typename?: "monthly_horoscope_avg_fields";
  month?: Maybe<Scalars["Float"]["output"]>;
  monthly_horoscope_id?: Maybe<Scalars["Float"]["output"]>;
  year?: Maybe<Scalars["Float"]["output"]>;
  zodiac_id?: Maybe<Scalars["Float"]["output"]>;
};

/** order by avg() on columns of table "monthly_horoscope" */
export type Monthly_Horoscope_Avg_Order_By = {
  month?: InputMaybe<Order_By>;
  monthly_horoscope_id?: InputMaybe<Order_By>;
  year?: InputMaybe<Order_By>;
  zodiac_id?: InputMaybe<Order_By>;
};

/** Boolean expression to filter rows from the table "monthly_horoscope". All fields are combined with a logical 'AND'. */
export type Monthly_Horoscope_Bool_Exp = {
  _and?: InputMaybe<Array<Monthly_Horoscope_Bool_Exp>>;
  _not?: InputMaybe<Monthly_Horoscope_Bool_Exp>;
  _or?: InputMaybe<Array<Monthly_Horoscope_Bool_Exp>>;
  created_at?: InputMaybe<Timestamp_Comparison_Exp>;
  deleted_at?: InputMaybe<Timestamp_Comparison_Exp>;
  horoscope_content?: InputMaybe<String_Comparison_Exp>;
  month?: InputMaybe<Int_Comparison_Exp>;
  monthly_career?: InputMaybe<String_Comparison_Exp>;
  monthly_finance?: InputMaybe<String_Comparison_Exp>;
  monthly_health?: InputMaybe<String_Comparison_Exp>;
  monthly_horoscope_id?: InputMaybe<Int_Comparison_Exp>;
  monthly_love?: InputMaybe<String_Comparison_Exp>;
  monthly_lucky_colors?: InputMaybe<String_Array_Comparison_Exp>;
  monthly_lucky_numbers?: InputMaybe<Int_Array_Comparison_Exp>;
  updated_at?: InputMaybe<Timestamp_Comparison_Exp>;
  year?: InputMaybe<Int_Comparison_Exp>;
  zodiac?: InputMaybe<Zodiac_Bool_Exp>;
  zodiac_id?: InputMaybe<Int_Comparison_Exp>;
};

/** unique or primary key constraints on table "monthly_horoscope" */
export enum Monthly_Horoscope_Constraint {
  /** unique or primary key constraint on columns "monthly_horoscope_id" */
  MonthlyHoroscopePkey = "monthly_horoscope_pkey",
}

/** input type for incrementing numeric columns in table "monthly_horoscope" */
export type Monthly_Horoscope_Inc_Input = {
  month?: InputMaybe<Scalars["Int"]["input"]>;
  monthly_horoscope_id?: InputMaybe<Scalars["Int"]["input"]>;
  year?: InputMaybe<Scalars["Int"]["input"]>;
  zodiac_id?: InputMaybe<Scalars["Int"]["input"]>;
};

/** input type for inserting data into table "monthly_horoscope" */
export type Monthly_Horoscope_Insert_Input = {
  created_at?: InputMaybe<Scalars["timestamp"]["input"]>;
  deleted_at?: InputMaybe<Scalars["timestamp"]["input"]>;
  horoscope_content?: InputMaybe<Scalars["String"]["input"]>;
  month?: InputMaybe<Scalars["Int"]["input"]>;
  monthly_career?: InputMaybe<Scalars["String"]["input"]>;
  monthly_finance?: InputMaybe<Scalars["String"]["input"]>;
  monthly_health?: InputMaybe<Scalars["String"]["input"]>;
  monthly_horoscope_id?: InputMaybe<Scalars["Int"]["input"]>;
  monthly_love?: InputMaybe<Scalars["String"]["input"]>;
  monthly_lucky_colors?: InputMaybe<Array<Scalars["String"]["input"]>>;
  monthly_lucky_numbers?: InputMaybe<Array<Scalars["Int"]["input"]>>;
  updated_at?: InputMaybe<Scalars["timestamp"]["input"]>;
  year?: InputMaybe<Scalars["Int"]["input"]>;
  zodiac?: InputMaybe<Zodiac_Obj_Rel_Insert_Input>;
  zodiac_id?: InputMaybe<Scalars["Int"]["input"]>;
};

/** aggregate max on columns */
export type Monthly_Horoscope_Max_Fields = {
  __typename?: "monthly_horoscope_max_fields";
  created_at?: Maybe<Scalars["timestamp"]["output"]>;
  deleted_at?: Maybe<Scalars["timestamp"]["output"]>;
  horoscope_content?: Maybe<Scalars["String"]["output"]>;
  month?: Maybe<Scalars["Int"]["output"]>;
  monthly_career?: Maybe<Scalars["String"]["output"]>;
  monthly_finance?: Maybe<Scalars["String"]["output"]>;
  monthly_health?: Maybe<Scalars["String"]["output"]>;
  monthly_horoscope_id?: Maybe<Scalars["Int"]["output"]>;
  monthly_love?: Maybe<Scalars["String"]["output"]>;
  monthly_lucky_colors?: Maybe<Array<Scalars["String"]["output"]>>;
  monthly_lucky_numbers?: Maybe<Array<Scalars["Int"]["output"]>>;
  updated_at?: Maybe<Scalars["timestamp"]["output"]>;
  year?: Maybe<Scalars["Int"]["output"]>;
  zodiac_id?: Maybe<Scalars["Int"]["output"]>;
};

/** order by max() on columns of table "monthly_horoscope" */
export type Monthly_Horoscope_Max_Order_By = {
  created_at?: InputMaybe<Order_By>;
  deleted_at?: InputMaybe<Order_By>;
  horoscope_content?: InputMaybe<Order_By>;
  month?: InputMaybe<Order_By>;
  monthly_career?: InputMaybe<Order_By>;
  monthly_finance?: InputMaybe<Order_By>;
  monthly_health?: InputMaybe<Order_By>;
  monthly_horoscope_id?: InputMaybe<Order_By>;
  monthly_love?: InputMaybe<Order_By>;
  monthly_lucky_colors?: InputMaybe<Order_By>;
  monthly_lucky_numbers?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
  year?: InputMaybe<Order_By>;
  zodiac_id?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type Monthly_Horoscope_Min_Fields = {
  __typename?: "monthly_horoscope_min_fields";
  created_at?: Maybe<Scalars["timestamp"]["output"]>;
  deleted_at?: Maybe<Scalars["timestamp"]["output"]>;
  horoscope_content?: Maybe<Scalars["String"]["output"]>;
  month?: Maybe<Scalars["Int"]["output"]>;
  monthly_career?: Maybe<Scalars["String"]["output"]>;
  monthly_finance?: Maybe<Scalars["String"]["output"]>;
  monthly_health?: Maybe<Scalars["String"]["output"]>;
  monthly_horoscope_id?: Maybe<Scalars["Int"]["output"]>;
  monthly_love?: Maybe<Scalars["String"]["output"]>;
  monthly_lucky_colors?: Maybe<Array<Scalars["String"]["output"]>>;
  monthly_lucky_numbers?: Maybe<Array<Scalars["Int"]["output"]>>;
  updated_at?: Maybe<Scalars["timestamp"]["output"]>;
  year?: Maybe<Scalars["Int"]["output"]>;
  zodiac_id?: Maybe<Scalars["Int"]["output"]>;
};

/** order by min() on columns of table "monthly_horoscope" */
export type Monthly_Horoscope_Min_Order_By = {
  created_at?: InputMaybe<Order_By>;
  deleted_at?: InputMaybe<Order_By>;
  horoscope_content?: InputMaybe<Order_By>;
  month?: InputMaybe<Order_By>;
  monthly_career?: InputMaybe<Order_By>;
  monthly_finance?: InputMaybe<Order_By>;
  monthly_health?: InputMaybe<Order_By>;
  monthly_horoscope_id?: InputMaybe<Order_By>;
  monthly_love?: InputMaybe<Order_By>;
  monthly_lucky_colors?: InputMaybe<Order_By>;
  monthly_lucky_numbers?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
  year?: InputMaybe<Order_By>;
  zodiac_id?: InputMaybe<Order_By>;
};

/** response of any mutation on the table "monthly_horoscope" */
export type Monthly_Horoscope_Mutation_Response = {
  __typename?: "monthly_horoscope_mutation_response";
  /** number of rows affected by the mutation */
  affected_rows: Scalars["Int"]["output"];
  /** data from the rows affected by the mutation */
  returning: Array<Monthly_Horoscope>;
};

/** on_conflict condition type for table "monthly_horoscope" */
export type Monthly_Horoscope_On_Conflict = {
  constraint: Monthly_Horoscope_Constraint;
  update_columns?: Array<Monthly_Horoscope_Update_Column>;
  where?: InputMaybe<Monthly_Horoscope_Bool_Exp>;
};

/** Ordering options when selecting data from "monthly_horoscope". */
export type Monthly_Horoscope_Order_By = {
  created_at?: InputMaybe<Order_By>;
  deleted_at?: InputMaybe<Order_By>;
  horoscope_content?: InputMaybe<Order_By>;
  month?: InputMaybe<Order_By>;
  monthly_career?: InputMaybe<Order_By>;
  monthly_finance?: InputMaybe<Order_By>;
  monthly_health?: InputMaybe<Order_By>;
  monthly_horoscope_id?: InputMaybe<Order_By>;
  monthly_love?: InputMaybe<Order_By>;
  monthly_lucky_colors?: InputMaybe<Order_By>;
  monthly_lucky_numbers?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
  year?: InputMaybe<Order_By>;
  zodiac?: InputMaybe<Zodiac_Order_By>;
  zodiac_id?: InputMaybe<Order_By>;
};

/** primary key columns input for table: monthly_horoscope */
export type Monthly_Horoscope_Pk_Columns_Input = {
  monthly_horoscope_id: Scalars["Int"]["input"];
};

/** select columns of table "monthly_horoscope" */
export enum Monthly_Horoscope_Select_Column {
  /** column name */
  CreatedAt = "created_at",
  /** column name */
  DeletedAt = "deleted_at",
  /** column name */
  HoroscopeContent = "horoscope_content",
  /** column name */
  Month = "month",
  /** column name */
  MonthlyCareer = "monthly_career",
  /** column name */
  MonthlyFinance = "monthly_finance",
  /** column name */
  MonthlyHealth = "monthly_health",
  /** column name */
  MonthlyHoroscopeId = "monthly_horoscope_id",
  /** column name */
  MonthlyLove = "monthly_love",
  /** column name */
  MonthlyLuckyColors = "monthly_lucky_colors",
  /** column name */
  MonthlyLuckyNumbers = "monthly_lucky_numbers",
  /** column name */
  UpdatedAt = "updated_at",
  /** column name */
  Year = "year",
  /** column name */
  ZodiacId = "zodiac_id",
}

/** input type for updating data in table "monthly_horoscope" */
export type Monthly_Horoscope_Set_Input = {
  created_at?: InputMaybe<Scalars["timestamp"]["input"]>;
  deleted_at?: InputMaybe<Scalars["timestamp"]["input"]>;
  horoscope_content?: InputMaybe<Scalars["String"]["input"]>;
  month?: InputMaybe<Scalars["Int"]["input"]>;
  monthly_career?: InputMaybe<Scalars["String"]["input"]>;
  monthly_finance?: InputMaybe<Scalars["String"]["input"]>;
  monthly_health?: InputMaybe<Scalars["String"]["input"]>;
  monthly_horoscope_id?: InputMaybe<Scalars["Int"]["input"]>;
  monthly_love?: InputMaybe<Scalars["String"]["input"]>;
  monthly_lucky_colors?: InputMaybe<Array<Scalars["String"]["input"]>>;
  monthly_lucky_numbers?: InputMaybe<Array<Scalars["Int"]["input"]>>;
  updated_at?: InputMaybe<Scalars["timestamp"]["input"]>;
  year?: InputMaybe<Scalars["Int"]["input"]>;
  zodiac_id?: InputMaybe<Scalars["Int"]["input"]>;
};

/** aggregate stddev on columns */
export type Monthly_Horoscope_Stddev_Fields = {
  __typename?: "monthly_horoscope_stddev_fields";
  month?: Maybe<Scalars["Float"]["output"]>;
  monthly_horoscope_id?: Maybe<Scalars["Float"]["output"]>;
  year?: Maybe<Scalars["Float"]["output"]>;
  zodiac_id?: Maybe<Scalars["Float"]["output"]>;
};

/** order by stddev() on columns of table "monthly_horoscope" */
export type Monthly_Horoscope_Stddev_Order_By = {
  month?: InputMaybe<Order_By>;
  monthly_horoscope_id?: InputMaybe<Order_By>;
  year?: InputMaybe<Order_By>;
  zodiac_id?: InputMaybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type Monthly_Horoscope_Stddev_Pop_Fields = {
  __typename?: "monthly_horoscope_stddev_pop_fields";
  month?: Maybe<Scalars["Float"]["output"]>;
  monthly_horoscope_id?: Maybe<Scalars["Float"]["output"]>;
  year?: Maybe<Scalars["Float"]["output"]>;
  zodiac_id?: Maybe<Scalars["Float"]["output"]>;
};

/** order by stddev_pop() on columns of table "monthly_horoscope" */
export type Monthly_Horoscope_Stddev_Pop_Order_By = {
  month?: InputMaybe<Order_By>;
  monthly_horoscope_id?: InputMaybe<Order_By>;
  year?: InputMaybe<Order_By>;
  zodiac_id?: InputMaybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type Monthly_Horoscope_Stddev_Samp_Fields = {
  __typename?: "monthly_horoscope_stddev_samp_fields";
  month?: Maybe<Scalars["Float"]["output"]>;
  monthly_horoscope_id?: Maybe<Scalars["Float"]["output"]>;
  year?: Maybe<Scalars["Float"]["output"]>;
  zodiac_id?: Maybe<Scalars["Float"]["output"]>;
};

/** order by stddev_samp() on columns of table "monthly_horoscope" */
export type Monthly_Horoscope_Stddev_Samp_Order_By = {
  month?: InputMaybe<Order_By>;
  monthly_horoscope_id?: InputMaybe<Order_By>;
  year?: InputMaybe<Order_By>;
  zodiac_id?: InputMaybe<Order_By>;
};

/** Streaming cursor of the table "monthly_horoscope" */
export type Monthly_Horoscope_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Monthly_Horoscope_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Monthly_Horoscope_Stream_Cursor_Value_Input = {
  created_at?: InputMaybe<Scalars["timestamp"]["input"]>;
  deleted_at?: InputMaybe<Scalars["timestamp"]["input"]>;
  horoscope_content?: InputMaybe<Scalars["String"]["input"]>;
  month?: InputMaybe<Scalars["Int"]["input"]>;
  monthly_career?: InputMaybe<Scalars["String"]["input"]>;
  monthly_finance?: InputMaybe<Scalars["String"]["input"]>;
  monthly_health?: InputMaybe<Scalars["String"]["input"]>;
  monthly_horoscope_id?: InputMaybe<Scalars["Int"]["input"]>;
  monthly_love?: InputMaybe<Scalars["String"]["input"]>;
  monthly_lucky_colors?: InputMaybe<Array<Scalars["String"]["input"]>>;
  monthly_lucky_numbers?: InputMaybe<Array<Scalars["Int"]["input"]>>;
  updated_at?: InputMaybe<Scalars["timestamp"]["input"]>;
  year?: InputMaybe<Scalars["Int"]["input"]>;
  zodiac_id?: InputMaybe<Scalars["Int"]["input"]>;
};

/** aggregate sum on columns */
export type Monthly_Horoscope_Sum_Fields = {
  __typename?: "monthly_horoscope_sum_fields";
  month?: Maybe<Scalars["Int"]["output"]>;
  monthly_horoscope_id?: Maybe<Scalars["Int"]["output"]>;
  year?: Maybe<Scalars["Int"]["output"]>;
  zodiac_id?: Maybe<Scalars["Int"]["output"]>;
};

/** order by sum() on columns of table "monthly_horoscope" */
export type Monthly_Horoscope_Sum_Order_By = {
  month?: InputMaybe<Order_By>;
  monthly_horoscope_id?: InputMaybe<Order_By>;
  year?: InputMaybe<Order_By>;
  zodiac_id?: InputMaybe<Order_By>;
};

/** update columns of table "monthly_horoscope" */
export enum Monthly_Horoscope_Update_Column {
  /** column name */
  CreatedAt = "created_at",
  /** column name */
  DeletedAt = "deleted_at",
  /** column name */
  HoroscopeContent = "horoscope_content",
  /** column name */
  Month = "month",
  /** column name */
  MonthlyCareer = "monthly_career",
  /** column name */
  MonthlyFinance = "monthly_finance",
  /** column name */
  MonthlyHealth = "monthly_health",
  /** column name */
  MonthlyHoroscopeId = "monthly_horoscope_id",
  /** column name */
  MonthlyLove = "monthly_love",
  /** column name */
  MonthlyLuckyColors = "monthly_lucky_colors",
  /** column name */
  MonthlyLuckyNumbers = "monthly_lucky_numbers",
  /** column name */
  UpdatedAt = "updated_at",
  /** column name */
  Year = "year",
  /** column name */
  ZodiacId = "zodiac_id",
}

export type Monthly_Horoscope_Updates = {
  /** increments the numeric columns with given value of the filtered values */
  _inc?: InputMaybe<Monthly_Horoscope_Inc_Input>;
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Monthly_Horoscope_Set_Input>;
  /** filter the rows which have to be updated */
  where: Monthly_Horoscope_Bool_Exp;
};

/** aggregate var_pop on columns */
export type Monthly_Horoscope_Var_Pop_Fields = {
  __typename?: "monthly_horoscope_var_pop_fields";
  month?: Maybe<Scalars["Float"]["output"]>;
  monthly_horoscope_id?: Maybe<Scalars["Float"]["output"]>;
  year?: Maybe<Scalars["Float"]["output"]>;
  zodiac_id?: Maybe<Scalars["Float"]["output"]>;
};

/** order by var_pop() on columns of table "monthly_horoscope" */
export type Monthly_Horoscope_Var_Pop_Order_By = {
  month?: InputMaybe<Order_By>;
  monthly_horoscope_id?: InputMaybe<Order_By>;
  year?: InputMaybe<Order_By>;
  zodiac_id?: InputMaybe<Order_By>;
};

/** aggregate var_samp on columns */
export type Monthly_Horoscope_Var_Samp_Fields = {
  __typename?: "monthly_horoscope_var_samp_fields";
  month?: Maybe<Scalars["Float"]["output"]>;
  monthly_horoscope_id?: Maybe<Scalars["Float"]["output"]>;
  year?: Maybe<Scalars["Float"]["output"]>;
  zodiac_id?: Maybe<Scalars["Float"]["output"]>;
};

/** order by var_samp() on columns of table "monthly_horoscope" */
export type Monthly_Horoscope_Var_Samp_Order_By = {
  month?: InputMaybe<Order_By>;
  monthly_horoscope_id?: InputMaybe<Order_By>;
  year?: InputMaybe<Order_By>;
  zodiac_id?: InputMaybe<Order_By>;
};

/** aggregate variance on columns */
export type Monthly_Horoscope_Variance_Fields = {
  __typename?: "monthly_horoscope_variance_fields";
  month?: Maybe<Scalars["Float"]["output"]>;
  monthly_horoscope_id?: Maybe<Scalars["Float"]["output"]>;
  year?: Maybe<Scalars["Float"]["output"]>;
  zodiac_id?: Maybe<Scalars["Float"]["output"]>;
};

/** order by variance() on columns of table "monthly_horoscope" */
export type Monthly_Horoscope_Variance_Order_By = {
  month?: InputMaybe<Order_By>;
  monthly_horoscope_id?: InputMaybe<Order_By>;
  year?: InputMaybe<Order_By>;
  zodiac_id?: InputMaybe<Order_By>;
};

/** mutation root */
export type Mutation_Root = {
  __typename?: "mutation_root";
  /** delete data from the table: "daily_horoscope" */
  delete_daily_horoscope?: Maybe<Daily_Horoscope_Mutation_Response>;
  /** delete single row from the table: "daily_horoscope" */
  delete_daily_horoscope_by_pk?: Maybe<Daily_Horoscope>;
  /** delete data from the table: "monthly_horoscope" */
  delete_monthly_horoscope?: Maybe<Monthly_Horoscope_Mutation_Response>;
  /** delete single row from the table: "monthly_horoscope" */
  delete_monthly_horoscope_by_pk?: Maybe<Monthly_Horoscope>;
  /** delete data from the table: "users" */
  delete_users?: Maybe<Users_Mutation_Response>;
  /** delete single row from the table: "users" */
  delete_users_by_pk?: Maybe<Users>;
  /** delete data from the table: "weekly_horoscope" */
  delete_weekly_horoscope?: Maybe<Weekly_Horoscope_Mutation_Response>;
  /** delete single row from the table: "weekly_horoscope" */
  delete_weekly_horoscope_by_pk?: Maybe<Weekly_Horoscope>;
  /** delete data from the table: "zodiac" */
  delete_zodiac?: Maybe<Zodiac_Mutation_Response>;
  /** delete single row from the table: "zodiac" */
  delete_zodiac_by_pk?: Maybe<Zodiac>;
  /** insert data into the table: "daily_horoscope" */
  insert_daily_horoscope?: Maybe<Daily_Horoscope_Mutation_Response>;
  /** insert a single row into the table: "daily_horoscope" */
  insert_daily_horoscope_one?: Maybe<Daily_Horoscope>;
  /** insert data into the table: "monthly_horoscope" */
  insert_monthly_horoscope?: Maybe<Monthly_Horoscope_Mutation_Response>;
  /** insert a single row into the table: "monthly_horoscope" */
  insert_monthly_horoscope_one?: Maybe<Monthly_Horoscope>;
  /** insert data into the table: "users" */
  insert_users?: Maybe<Users_Mutation_Response>;
  /** insert a single row into the table: "users" */
  insert_users_one?: Maybe<Users>;
  /** insert data into the table: "weekly_horoscope" */
  insert_weekly_horoscope?: Maybe<Weekly_Horoscope_Mutation_Response>;
  /** insert a single row into the table: "weekly_horoscope" */
  insert_weekly_horoscope_one?: Maybe<Weekly_Horoscope>;
  /** insert data into the table: "zodiac" */
  insert_zodiac?: Maybe<Zodiac_Mutation_Response>;
  /** insert a single row into the table: "zodiac" */
  insert_zodiac_one?: Maybe<Zodiac>;
  /** update data of the table: "daily_horoscope" */
  update_daily_horoscope?: Maybe<Daily_Horoscope_Mutation_Response>;
  /** update single row of the table: "daily_horoscope" */
  update_daily_horoscope_by_pk?: Maybe<Daily_Horoscope>;
  /** update multiples rows of table: "daily_horoscope" */
  update_daily_horoscope_many?: Maybe<
    Array<Maybe<Daily_Horoscope_Mutation_Response>>
  >;
  /** update data of the table: "monthly_horoscope" */
  update_monthly_horoscope?: Maybe<Monthly_Horoscope_Mutation_Response>;
  /** update single row of the table: "monthly_horoscope" */
  update_monthly_horoscope_by_pk?: Maybe<Monthly_Horoscope>;
  /** update multiples rows of table: "monthly_horoscope" */
  update_monthly_horoscope_many?: Maybe<
    Array<Maybe<Monthly_Horoscope_Mutation_Response>>
  >;
  /** update data of the table: "users" */
  update_users?: Maybe<Users_Mutation_Response>;
  /** update single row of the table: "users" */
  update_users_by_pk?: Maybe<Users>;
  /** update multiples rows of table: "users" */
  update_users_many?: Maybe<Array<Maybe<Users_Mutation_Response>>>;
  /** update data of the table: "weekly_horoscope" */
  update_weekly_horoscope?: Maybe<Weekly_Horoscope_Mutation_Response>;
  /** update single row of the table: "weekly_horoscope" */
  update_weekly_horoscope_by_pk?: Maybe<Weekly_Horoscope>;
  /** update multiples rows of table: "weekly_horoscope" */
  update_weekly_horoscope_many?: Maybe<
    Array<Maybe<Weekly_Horoscope_Mutation_Response>>
  >;
  /** update data of the table: "zodiac" */
  update_zodiac?: Maybe<Zodiac_Mutation_Response>;
  /** update single row of the table: "zodiac" */
  update_zodiac_by_pk?: Maybe<Zodiac>;
  /** update multiples rows of table: "zodiac" */
  update_zodiac_many?: Maybe<Array<Maybe<Zodiac_Mutation_Response>>>;
};

/** mutation root */
export type Mutation_RootDelete_Daily_HoroscopeArgs = {
  where: Daily_Horoscope_Bool_Exp;
};

/** mutation root */
export type Mutation_RootDelete_Daily_Horoscope_By_PkArgs = {
  daily_horoscope_id: Scalars["Int"]["input"];
};

/** mutation root */
export type Mutation_RootDelete_Monthly_HoroscopeArgs = {
  where: Monthly_Horoscope_Bool_Exp;
};

/** mutation root */
export type Mutation_RootDelete_Monthly_Horoscope_By_PkArgs = {
  monthly_horoscope_id: Scalars["Int"]["input"];
};

/** mutation root */
export type Mutation_RootDelete_UsersArgs = {
  where: Users_Bool_Exp;
};

/** mutation root */
export type Mutation_RootDelete_Users_By_PkArgs = {
  user_id: Scalars["Int"]["input"];
};

/** mutation root */
export type Mutation_RootDelete_Weekly_HoroscopeArgs = {
  where: Weekly_Horoscope_Bool_Exp;
};

/** mutation root */
export type Mutation_RootDelete_Weekly_Horoscope_By_PkArgs = {
  weekly_horoscope_id: Scalars["Int"]["input"];
};

/** mutation root */
export type Mutation_RootDelete_ZodiacArgs = {
  where: Zodiac_Bool_Exp;
};

/** mutation root */
export type Mutation_RootDelete_Zodiac_By_PkArgs = {
  zodiac_id: Scalars["Int"]["input"];
};

/** mutation root */
export type Mutation_RootInsert_Daily_HoroscopeArgs = {
  objects: Array<Daily_Horoscope_Insert_Input>;
  on_conflict?: InputMaybe<Daily_Horoscope_On_Conflict>;
};

/** mutation root */
export type Mutation_RootInsert_Daily_Horoscope_OneArgs = {
  object: Daily_Horoscope_Insert_Input;
  on_conflict?: InputMaybe<Daily_Horoscope_On_Conflict>;
};

/** mutation root */
export type Mutation_RootInsert_Monthly_HoroscopeArgs = {
  objects: Array<Monthly_Horoscope_Insert_Input>;
  on_conflict?: InputMaybe<Monthly_Horoscope_On_Conflict>;
};

/** mutation root */
export type Mutation_RootInsert_Monthly_Horoscope_OneArgs = {
  object: Monthly_Horoscope_Insert_Input;
  on_conflict?: InputMaybe<Monthly_Horoscope_On_Conflict>;
};

/** mutation root */
export type Mutation_RootInsert_UsersArgs = {
  objects: Array<Users_Insert_Input>;
  on_conflict?: InputMaybe<Users_On_Conflict>;
};

/** mutation root */
export type Mutation_RootInsert_Users_OneArgs = {
  object: Users_Insert_Input;
  on_conflict?: InputMaybe<Users_On_Conflict>;
};

/** mutation root */
export type Mutation_RootInsert_Weekly_HoroscopeArgs = {
  objects: Array<Weekly_Horoscope_Insert_Input>;
  on_conflict?: InputMaybe<Weekly_Horoscope_On_Conflict>;
};

/** mutation root */
export type Mutation_RootInsert_Weekly_Horoscope_OneArgs = {
  object: Weekly_Horoscope_Insert_Input;
  on_conflict?: InputMaybe<Weekly_Horoscope_On_Conflict>;
};

/** mutation root */
export type Mutation_RootInsert_ZodiacArgs = {
  objects: Array<Zodiac_Insert_Input>;
  on_conflict?: InputMaybe<Zodiac_On_Conflict>;
};

/** mutation root */
export type Mutation_RootInsert_Zodiac_OneArgs = {
  object: Zodiac_Insert_Input;
  on_conflict?: InputMaybe<Zodiac_On_Conflict>;
};

/** mutation root */
export type Mutation_RootUpdate_Daily_HoroscopeArgs = {
  _inc?: InputMaybe<Daily_Horoscope_Inc_Input>;
  _set?: InputMaybe<Daily_Horoscope_Set_Input>;
  where: Daily_Horoscope_Bool_Exp;
};

/** mutation root */
export type Mutation_RootUpdate_Daily_Horoscope_By_PkArgs = {
  _inc?: InputMaybe<Daily_Horoscope_Inc_Input>;
  _set?: InputMaybe<Daily_Horoscope_Set_Input>;
  pk_columns: Daily_Horoscope_Pk_Columns_Input;
};

/** mutation root */
export type Mutation_RootUpdate_Daily_Horoscope_ManyArgs = {
  updates: Array<Daily_Horoscope_Updates>;
};

/** mutation root */
export type Mutation_RootUpdate_Monthly_HoroscopeArgs = {
  _inc?: InputMaybe<Monthly_Horoscope_Inc_Input>;
  _set?: InputMaybe<Monthly_Horoscope_Set_Input>;
  where: Monthly_Horoscope_Bool_Exp;
};

/** mutation root */
export type Mutation_RootUpdate_Monthly_Horoscope_By_PkArgs = {
  _inc?: InputMaybe<Monthly_Horoscope_Inc_Input>;
  _set?: InputMaybe<Monthly_Horoscope_Set_Input>;
  pk_columns: Monthly_Horoscope_Pk_Columns_Input;
};

/** mutation root */
export type Mutation_RootUpdate_Monthly_Horoscope_ManyArgs = {
  updates: Array<Monthly_Horoscope_Updates>;
};

/** mutation root */
export type Mutation_RootUpdate_UsersArgs = {
  _inc?: InputMaybe<Users_Inc_Input>;
  _set?: InputMaybe<Users_Set_Input>;
  where: Users_Bool_Exp;
};

/** mutation root */
export type Mutation_RootUpdate_Users_By_PkArgs = {
  _inc?: InputMaybe<Users_Inc_Input>;
  _set?: InputMaybe<Users_Set_Input>;
  pk_columns: Users_Pk_Columns_Input;
};

/** mutation root */
export type Mutation_RootUpdate_Users_ManyArgs = {
  updates: Array<Users_Updates>;
};

/** mutation root */
export type Mutation_RootUpdate_Weekly_HoroscopeArgs = {
  _inc?: InputMaybe<Weekly_Horoscope_Inc_Input>;
  _set?: InputMaybe<Weekly_Horoscope_Set_Input>;
  where: Weekly_Horoscope_Bool_Exp;
};

/** mutation root */
export type Mutation_RootUpdate_Weekly_Horoscope_By_PkArgs = {
  _inc?: InputMaybe<Weekly_Horoscope_Inc_Input>;
  _set?: InputMaybe<Weekly_Horoscope_Set_Input>;
  pk_columns: Weekly_Horoscope_Pk_Columns_Input;
};

/** mutation root */
export type Mutation_RootUpdate_Weekly_Horoscope_ManyArgs = {
  updates: Array<Weekly_Horoscope_Updates>;
};

/** mutation root */
export type Mutation_RootUpdate_ZodiacArgs = {
  _inc?: InputMaybe<Zodiac_Inc_Input>;
  _set?: InputMaybe<Zodiac_Set_Input>;
  where: Zodiac_Bool_Exp;
};

/** mutation root */
export type Mutation_RootUpdate_Zodiac_By_PkArgs = {
  _inc?: InputMaybe<Zodiac_Inc_Input>;
  _set?: InputMaybe<Zodiac_Set_Input>;
  pk_columns: Zodiac_Pk_Columns_Input;
};

/** mutation root */
export type Mutation_RootUpdate_Zodiac_ManyArgs = {
  updates: Array<Zodiac_Updates>;
};

/** column ordering options */
export enum Order_By {
  /** in ascending order, nulls last */
  Asc = "asc",
  /** in ascending order, nulls first */
  AscNullsFirst = "asc_nulls_first",
  /** in ascending order, nulls last */
  AscNullsLast = "asc_nulls_last",
  /** in descending order, nulls first */
  Desc = "desc",
  /** in descending order, nulls first */
  DescNullsFirst = "desc_nulls_first",
  /** in descending order, nulls last */
  DescNullsLast = "desc_nulls_last",
}

export type Query_Root = {
  __typename?: "query_root";
  /** fetch data from the table: "daily_horoscope" */
  daily_horoscope: Array<Daily_Horoscope>;
  /** fetch aggregated fields from the table: "daily_horoscope" */
  daily_horoscope_aggregate: Daily_Horoscope_Aggregate;
  /** fetch data from the table: "daily_horoscope" using primary key columns */
  daily_horoscope_by_pk?: Maybe<Daily_Horoscope>;
  /** fetch data from the table: "monthly_horoscope" */
  monthly_horoscope: Array<Monthly_Horoscope>;
  /** fetch aggregated fields from the table: "monthly_horoscope" */
  monthly_horoscope_aggregate: Monthly_Horoscope_Aggregate;
  /** fetch data from the table: "monthly_horoscope" using primary key columns */
  monthly_horoscope_by_pk?: Maybe<Monthly_Horoscope>;
  /** An array relationship */
  users: Array<Users>;
  /** An aggregate relationship */
  users_aggregate: Users_Aggregate;
  /** fetch data from the table: "users" using primary key columns */
  users_by_pk?: Maybe<Users>;
  /** fetch data from the table: "weekly_horoscope" */
  weekly_horoscope: Array<Weekly_Horoscope>;
  /** fetch aggregated fields from the table: "weekly_horoscope" */
  weekly_horoscope_aggregate: Weekly_Horoscope_Aggregate;
  /** fetch data from the table: "weekly_horoscope" using primary key columns */
  weekly_horoscope_by_pk?: Maybe<Weekly_Horoscope>;
  /** fetch data from the table: "zodiac" */
  zodiac: Array<Zodiac>;
  /** fetch aggregated fields from the table: "zodiac" */
  zodiac_aggregate: Zodiac_Aggregate;
  /** fetch data from the table: "zodiac" using primary key columns */
  zodiac_by_pk?: Maybe<Zodiac>;
};

export type Query_RootDaily_HoroscopeArgs = {
  distinct_on?: InputMaybe<Array<Daily_Horoscope_Select_Column>>;
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
  order_by?: InputMaybe<Array<Daily_Horoscope_Order_By>>;
  where?: InputMaybe<Daily_Horoscope_Bool_Exp>;
};

export type Query_RootDaily_Horoscope_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Daily_Horoscope_Select_Column>>;
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
  order_by?: InputMaybe<Array<Daily_Horoscope_Order_By>>;
  where?: InputMaybe<Daily_Horoscope_Bool_Exp>;
};

export type Query_RootDaily_Horoscope_By_PkArgs = {
  daily_horoscope_id: Scalars["Int"]["input"];
};

export type Query_RootMonthly_HoroscopeArgs = {
  distinct_on?: InputMaybe<Array<Monthly_Horoscope_Select_Column>>;
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
  order_by?: InputMaybe<Array<Monthly_Horoscope_Order_By>>;
  where?: InputMaybe<Monthly_Horoscope_Bool_Exp>;
};

export type Query_RootMonthly_Horoscope_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Monthly_Horoscope_Select_Column>>;
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
  order_by?: InputMaybe<Array<Monthly_Horoscope_Order_By>>;
  where?: InputMaybe<Monthly_Horoscope_Bool_Exp>;
};

export type Query_RootMonthly_Horoscope_By_PkArgs = {
  monthly_horoscope_id: Scalars["Int"]["input"];
};

export type Query_RootUsersArgs = {
  distinct_on?: InputMaybe<Array<Users_Select_Column>>;
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
  order_by?: InputMaybe<Array<Users_Order_By>>;
  where?: InputMaybe<Users_Bool_Exp>;
};

export type Query_RootUsers_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Users_Select_Column>>;
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
  order_by?: InputMaybe<Array<Users_Order_By>>;
  where?: InputMaybe<Users_Bool_Exp>;
};

export type Query_RootUsers_By_PkArgs = {
  user_id: Scalars["Int"]["input"];
};

export type Query_RootWeekly_HoroscopeArgs = {
  distinct_on?: InputMaybe<Array<Weekly_Horoscope_Select_Column>>;
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
  order_by?: InputMaybe<Array<Weekly_Horoscope_Order_By>>;
  where?: InputMaybe<Weekly_Horoscope_Bool_Exp>;
};

export type Query_RootWeekly_Horoscope_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Weekly_Horoscope_Select_Column>>;
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
  order_by?: InputMaybe<Array<Weekly_Horoscope_Order_By>>;
  where?: InputMaybe<Weekly_Horoscope_Bool_Exp>;
};

export type Query_RootWeekly_Horoscope_By_PkArgs = {
  weekly_horoscope_id: Scalars["Int"]["input"];
};

export type Query_RootZodiacArgs = {
  distinct_on?: InputMaybe<Array<Zodiac_Select_Column>>;
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
  order_by?: InputMaybe<Array<Zodiac_Order_By>>;
  where?: InputMaybe<Zodiac_Bool_Exp>;
};

export type Query_RootZodiac_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Zodiac_Select_Column>>;
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
  order_by?: InputMaybe<Array<Zodiac_Order_By>>;
  where?: InputMaybe<Zodiac_Bool_Exp>;
};

export type Query_RootZodiac_By_PkArgs = {
  zodiac_id: Scalars["Int"]["input"];
};

export type Subscription_Root = {
  __typename?: "subscription_root";
  /** fetch data from the table: "daily_horoscope" */
  daily_horoscope: Array<Daily_Horoscope>;
  /** fetch aggregated fields from the table: "daily_horoscope" */
  daily_horoscope_aggregate: Daily_Horoscope_Aggregate;
  /** fetch data from the table: "daily_horoscope" using primary key columns */
  daily_horoscope_by_pk?: Maybe<Daily_Horoscope>;
  /** fetch data from the table in a streaming manner: "daily_horoscope" */
  daily_horoscope_stream: Array<Daily_Horoscope>;
  /** fetch data from the table: "monthly_horoscope" */
  monthly_horoscope: Array<Monthly_Horoscope>;
  /** fetch aggregated fields from the table: "monthly_horoscope" */
  monthly_horoscope_aggregate: Monthly_Horoscope_Aggregate;
  /** fetch data from the table: "monthly_horoscope" using primary key columns */
  monthly_horoscope_by_pk?: Maybe<Monthly_Horoscope>;
  /** fetch data from the table in a streaming manner: "monthly_horoscope" */
  monthly_horoscope_stream: Array<Monthly_Horoscope>;
  /** An array relationship */
  users: Array<Users>;
  /** An aggregate relationship */
  users_aggregate: Users_Aggregate;
  /** fetch data from the table: "users" using primary key columns */
  users_by_pk?: Maybe<Users>;
  /** fetch data from the table in a streaming manner: "users" */
  users_stream: Array<Users>;
  /** fetch data from the table: "weekly_horoscope" */
  weekly_horoscope: Array<Weekly_Horoscope>;
  /** fetch aggregated fields from the table: "weekly_horoscope" */
  weekly_horoscope_aggregate: Weekly_Horoscope_Aggregate;
  /** fetch data from the table: "weekly_horoscope" using primary key columns */
  weekly_horoscope_by_pk?: Maybe<Weekly_Horoscope>;
  /** fetch data from the table in a streaming manner: "weekly_horoscope" */
  weekly_horoscope_stream: Array<Weekly_Horoscope>;
  /** fetch data from the table: "zodiac" */
  zodiac: Array<Zodiac>;
  /** fetch aggregated fields from the table: "zodiac" */
  zodiac_aggregate: Zodiac_Aggregate;
  /** fetch data from the table: "zodiac" using primary key columns */
  zodiac_by_pk?: Maybe<Zodiac>;
  /** fetch data from the table in a streaming manner: "zodiac" */
  zodiac_stream: Array<Zodiac>;
};

export type Subscription_RootDaily_HoroscopeArgs = {
  distinct_on?: InputMaybe<Array<Daily_Horoscope_Select_Column>>;
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
  order_by?: InputMaybe<Array<Daily_Horoscope_Order_By>>;
  where?: InputMaybe<Daily_Horoscope_Bool_Exp>;
};

export type Subscription_RootDaily_Horoscope_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Daily_Horoscope_Select_Column>>;
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
  order_by?: InputMaybe<Array<Daily_Horoscope_Order_By>>;
  where?: InputMaybe<Daily_Horoscope_Bool_Exp>;
};

export type Subscription_RootDaily_Horoscope_By_PkArgs = {
  daily_horoscope_id: Scalars["Int"]["input"];
};

export type Subscription_RootDaily_Horoscope_StreamArgs = {
  batch_size: Scalars["Int"]["input"];
  cursor: Array<InputMaybe<Daily_Horoscope_Stream_Cursor_Input>>;
  where?: InputMaybe<Daily_Horoscope_Bool_Exp>;
};

export type Subscription_RootMonthly_HoroscopeArgs = {
  distinct_on?: InputMaybe<Array<Monthly_Horoscope_Select_Column>>;
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
  order_by?: InputMaybe<Array<Monthly_Horoscope_Order_By>>;
  where?: InputMaybe<Monthly_Horoscope_Bool_Exp>;
};

export type Subscription_RootMonthly_Horoscope_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Monthly_Horoscope_Select_Column>>;
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
  order_by?: InputMaybe<Array<Monthly_Horoscope_Order_By>>;
  where?: InputMaybe<Monthly_Horoscope_Bool_Exp>;
};

export type Subscription_RootMonthly_Horoscope_By_PkArgs = {
  monthly_horoscope_id: Scalars["Int"]["input"];
};

export type Subscription_RootMonthly_Horoscope_StreamArgs = {
  batch_size: Scalars["Int"]["input"];
  cursor: Array<InputMaybe<Monthly_Horoscope_Stream_Cursor_Input>>;
  where?: InputMaybe<Monthly_Horoscope_Bool_Exp>;
};

export type Subscription_RootUsersArgs = {
  distinct_on?: InputMaybe<Array<Users_Select_Column>>;
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
  order_by?: InputMaybe<Array<Users_Order_By>>;
  where?: InputMaybe<Users_Bool_Exp>;
};

export type Subscription_RootUsers_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Users_Select_Column>>;
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
  order_by?: InputMaybe<Array<Users_Order_By>>;
  where?: InputMaybe<Users_Bool_Exp>;
};

export type Subscription_RootUsers_By_PkArgs = {
  user_id: Scalars["Int"]["input"];
};

export type Subscription_RootUsers_StreamArgs = {
  batch_size: Scalars["Int"]["input"];
  cursor: Array<InputMaybe<Users_Stream_Cursor_Input>>;
  where?: InputMaybe<Users_Bool_Exp>;
};

export type Subscription_RootWeekly_HoroscopeArgs = {
  distinct_on?: InputMaybe<Array<Weekly_Horoscope_Select_Column>>;
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
  order_by?: InputMaybe<Array<Weekly_Horoscope_Order_By>>;
  where?: InputMaybe<Weekly_Horoscope_Bool_Exp>;
};

export type Subscription_RootWeekly_Horoscope_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Weekly_Horoscope_Select_Column>>;
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
  order_by?: InputMaybe<Array<Weekly_Horoscope_Order_By>>;
  where?: InputMaybe<Weekly_Horoscope_Bool_Exp>;
};

export type Subscription_RootWeekly_Horoscope_By_PkArgs = {
  weekly_horoscope_id: Scalars["Int"]["input"];
};

export type Subscription_RootWeekly_Horoscope_StreamArgs = {
  batch_size: Scalars["Int"]["input"];
  cursor: Array<InputMaybe<Weekly_Horoscope_Stream_Cursor_Input>>;
  where?: InputMaybe<Weekly_Horoscope_Bool_Exp>;
};

export type Subscription_RootZodiacArgs = {
  distinct_on?: InputMaybe<Array<Zodiac_Select_Column>>;
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
  order_by?: InputMaybe<Array<Zodiac_Order_By>>;
  where?: InputMaybe<Zodiac_Bool_Exp>;
};

export type Subscription_RootZodiac_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Zodiac_Select_Column>>;
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
  order_by?: InputMaybe<Array<Zodiac_Order_By>>;
  where?: InputMaybe<Zodiac_Bool_Exp>;
};

export type Subscription_RootZodiac_By_PkArgs = {
  zodiac_id: Scalars["Int"]["input"];
};

export type Subscription_RootZodiac_StreamArgs = {
  batch_size: Scalars["Int"]["input"];
  cursor: Array<InputMaybe<Zodiac_Stream_Cursor_Input>>;
  where?: InputMaybe<Zodiac_Bool_Exp>;
};

/** Boolean expression to compare columns of type "timestamp". All fields are combined with logical 'AND'. */
export type Timestamp_Comparison_Exp = {
  _eq?: InputMaybe<Scalars["timestamp"]["input"]>;
  _gt?: InputMaybe<Scalars["timestamp"]["input"]>;
  _gte?: InputMaybe<Scalars["timestamp"]["input"]>;
  _in?: InputMaybe<Array<Scalars["timestamp"]["input"]>>;
  _is_null?: InputMaybe<Scalars["Boolean"]["input"]>;
  _lt?: InputMaybe<Scalars["timestamp"]["input"]>;
  _lte?: InputMaybe<Scalars["timestamp"]["input"]>;
  _neq?: InputMaybe<Scalars["timestamp"]["input"]>;
  _nin?: InputMaybe<Array<Scalars["timestamp"]["input"]>>;
};

/** columns and relationships of "users" */
export type Users = {
  __typename?: "users";
  birthdate?: Maybe<Scalars["date"]["output"]>;
  created_at?: Maybe<Scalars["timestamp"]["output"]>;
  deleted_at?: Maybe<Scalars["timestamp"]["output"]>;
  full_name?: Maybe<Scalars["String"]["output"]>;
  phone_number?: Maybe<Scalars["String"]["output"]>;
  updated_at?: Maybe<Scalars["timestamp"]["output"]>;
  user_id: Scalars["Int"]["output"];
  username?: Maybe<Scalars["String"]["output"]>;
  zalo_id?: Maybe<Scalars["String"]["output"]>;
  /** An object relationship */
  zodiac?: Maybe<Zodiac>;
  zodiac_id?: Maybe<Scalars["Int"]["output"]>;
};

/** aggregated selection of "users" */
export type Users_Aggregate = {
  __typename?: "users_aggregate";
  aggregate?: Maybe<Users_Aggregate_Fields>;
  nodes: Array<Users>;
};

export type Users_Aggregate_Bool_Exp = {
  count?: InputMaybe<Users_Aggregate_Bool_Exp_Count>;
};

export type Users_Aggregate_Bool_Exp_Count = {
  arguments?: InputMaybe<Array<Users_Select_Column>>;
  distinct?: InputMaybe<Scalars["Boolean"]["input"]>;
  filter?: InputMaybe<Users_Bool_Exp>;
  predicate: Int_Comparison_Exp;
};

/** aggregate fields of "users" */
export type Users_Aggregate_Fields = {
  __typename?: "users_aggregate_fields";
  avg?: Maybe<Users_Avg_Fields>;
  count: Scalars["Int"]["output"];
  max?: Maybe<Users_Max_Fields>;
  min?: Maybe<Users_Min_Fields>;
  stddev?: Maybe<Users_Stddev_Fields>;
  stddev_pop?: Maybe<Users_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Users_Stddev_Samp_Fields>;
  sum?: Maybe<Users_Sum_Fields>;
  var_pop?: Maybe<Users_Var_Pop_Fields>;
  var_samp?: Maybe<Users_Var_Samp_Fields>;
  variance?: Maybe<Users_Variance_Fields>;
};

/** aggregate fields of "users" */
export type Users_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Users_Select_Column>>;
  distinct?: InputMaybe<Scalars["Boolean"]["input"]>;
};

/** order by aggregate values of table "users" */
export type Users_Aggregate_Order_By = {
  avg?: InputMaybe<Users_Avg_Order_By>;
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<Users_Max_Order_By>;
  min?: InputMaybe<Users_Min_Order_By>;
  stddev?: InputMaybe<Users_Stddev_Order_By>;
  stddev_pop?: InputMaybe<Users_Stddev_Pop_Order_By>;
  stddev_samp?: InputMaybe<Users_Stddev_Samp_Order_By>;
  sum?: InputMaybe<Users_Sum_Order_By>;
  var_pop?: InputMaybe<Users_Var_Pop_Order_By>;
  var_samp?: InputMaybe<Users_Var_Samp_Order_By>;
  variance?: InputMaybe<Users_Variance_Order_By>;
};

/** input type for inserting array relation for remote table "users" */
export type Users_Arr_Rel_Insert_Input = {
  data: Array<Users_Insert_Input>;
  /** upsert condition */
  on_conflict?: InputMaybe<Users_On_Conflict>;
};

/** aggregate avg on columns */
export type Users_Avg_Fields = {
  __typename?: "users_avg_fields";
  user_id?: Maybe<Scalars["Float"]["output"]>;
  zodiac_id?: Maybe<Scalars["Float"]["output"]>;
};

/** order by avg() on columns of table "users" */
export type Users_Avg_Order_By = {
  user_id?: InputMaybe<Order_By>;
  zodiac_id?: InputMaybe<Order_By>;
};

/** Boolean expression to filter rows from the table "users". All fields are combined with a logical 'AND'. */
export type Users_Bool_Exp = {
  _and?: InputMaybe<Array<Users_Bool_Exp>>;
  _not?: InputMaybe<Users_Bool_Exp>;
  _or?: InputMaybe<Array<Users_Bool_Exp>>;
  birthdate?: InputMaybe<Date_Comparison_Exp>;
  created_at?: InputMaybe<Timestamp_Comparison_Exp>;
  deleted_at?: InputMaybe<Timestamp_Comparison_Exp>;
  full_name?: InputMaybe<String_Comparison_Exp>;
  phone_number?: InputMaybe<String_Comparison_Exp>;
  updated_at?: InputMaybe<Timestamp_Comparison_Exp>;
  user_id?: InputMaybe<Int_Comparison_Exp>;
  username?: InputMaybe<String_Comparison_Exp>;
  zalo_id?: InputMaybe<String_Comparison_Exp>;
  zodiac?: InputMaybe<Zodiac_Bool_Exp>;
  zodiac_id?: InputMaybe<Int_Comparison_Exp>;
};

/** unique or primary key constraints on table "users" */
export enum Users_Constraint {
  /** unique or primary key constraint on columns "user_id" */
  UsersPkey = "users_pkey",
}

/** input type for incrementing numeric columns in table "users" */
export type Users_Inc_Input = {
  user_id?: InputMaybe<Scalars["Int"]["input"]>;
  zodiac_id?: InputMaybe<Scalars["Int"]["input"]>;
};

/** input type for inserting data into table "users" */
export type Users_Insert_Input = {
  birthdate?: InputMaybe<Scalars["date"]["input"]>;
  created_at?: InputMaybe<Scalars["timestamp"]["input"]>;
  deleted_at?: InputMaybe<Scalars["timestamp"]["input"]>;
  full_name?: InputMaybe<Scalars["String"]["input"]>;
  phone_number?: InputMaybe<Scalars["String"]["input"]>;
  updated_at?: InputMaybe<Scalars["timestamp"]["input"]>;
  user_id?: InputMaybe<Scalars["Int"]["input"]>;
  username?: InputMaybe<Scalars["String"]["input"]>;
  zalo_id?: InputMaybe<Scalars["String"]["input"]>;
  zodiac?: InputMaybe<Zodiac_Obj_Rel_Insert_Input>;
  zodiac_id?: InputMaybe<Scalars["Int"]["input"]>;
};

/** aggregate max on columns */
export type Users_Max_Fields = {
  __typename?: "users_max_fields";
  birthdate?: Maybe<Scalars["date"]["output"]>;
  created_at?: Maybe<Scalars["timestamp"]["output"]>;
  deleted_at?: Maybe<Scalars["timestamp"]["output"]>;
  full_name?: Maybe<Scalars["String"]["output"]>;
  phone_number?: Maybe<Scalars["String"]["output"]>;
  updated_at?: Maybe<Scalars["timestamp"]["output"]>;
  user_id?: Maybe<Scalars["Int"]["output"]>;
  username?: Maybe<Scalars["String"]["output"]>;
  zalo_id?: Maybe<Scalars["String"]["output"]>;
  zodiac_id?: Maybe<Scalars["Int"]["output"]>;
};

/** order by max() on columns of table "users" */
export type Users_Max_Order_By = {
  birthdate?: InputMaybe<Order_By>;
  created_at?: InputMaybe<Order_By>;
  deleted_at?: InputMaybe<Order_By>;
  full_name?: InputMaybe<Order_By>;
  phone_number?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
  user_id?: InputMaybe<Order_By>;
  username?: InputMaybe<Order_By>;
  zalo_id?: InputMaybe<Order_By>;
  zodiac_id?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type Users_Min_Fields = {
  __typename?: "users_min_fields";
  birthdate?: Maybe<Scalars["date"]["output"]>;
  created_at?: Maybe<Scalars["timestamp"]["output"]>;
  deleted_at?: Maybe<Scalars["timestamp"]["output"]>;
  full_name?: Maybe<Scalars["String"]["output"]>;
  phone_number?: Maybe<Scalars["String"]["output"]>;
  updated_at?: Maybe<Scalars["timestamp"]["output"]>;
  user_id?: Maybe<Scalars["Int"]["output"]>;
  username?: Maybe<Scalars["String"]["output"]>;
  zalo_id?: Maybe<Scalars["String"]["output"]>;
  zodiac_id?: Maybe<Scalars["Int"]["output"]>;
};

/** order by min() on columns of table "users" */
export type Users_Min_Order_By = {
  birthdate?: InputMaybe<Order_By>;
  created_at?: InputMaybe<Order_By>;
  deleted_at?: InputMaybe<Order_By>;
  full_name?: InputMaybe<Order_By>;
  phone_number?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
  user_id?: InputMaybe<Order_By>;
  username?: InputMaybe<Order_By>;
  zalo_id?: InputMaybe<Order_By>;
  zodiac_id?: InputMaybe<Order_By>;
};

/** response of any mutation on the table "users" */
export type Users_Mutation_Response = {
  __typename?: "users_mutation_response";
  /** number of rows affected by the mutation */
  affected_rows: Scalars["Int"]["output"];
  /** data from the rows affected by the mutation */
  returning: Array<Users>;
};

/** on_conflict condition type for table "users" */
export type Users_On_Conflict = {
  constraint: Users_Constraint;
  update_columns?: Array<Users_Update_Column>;
  where?: InputMaybe<Users_Bool_Exp>;
};

/** Ordering options when selecting data from "users". */
export type Users_Order_By = {
  birthdate?: InputMaybe<Order_By>;
  created_at?: InputMaybe<Order_By>;
  deleted_at?: InputMaybe<Order_By>;
  full_name?: InputMaybe<Order_By>;
  phone_number?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
  user_id?: InputMaybe<Order_By>;
  username?: InputMaybe<Order_By>;
  zalo_id?: InputMaybe<Order_By>;
  zodiac?: InputMaybe<Zodiac_Order_By>;
  zodiac_id?: InputMaybe<Order_By>;
};

/** primary key columns input for table: users */
export type Users_Pk_Columns_Input = {
  user_id: Scalars["Int"]["input"];
};

/** select columns of table "users" */
export enum Users_Select_Column {
  /** column name */
  Birthdate = "birthdate",
  /** column name */
  CreatedAt = "created_at",
  /** column name */
  DeletedAt = "deleted_at",
  /** column name */
  FullName = "full_name",
  /** column name */
  PhoneNumber = "phone_number",
  /** column name */
  UpdatedAt = "updated_at",
  /** column name */
  UserId = "user_id",
  /** column name */
  Username = "username",
  /** column name */
  ZaloId = "zalo_id",
  /** column name */
  ZodiacId = "zodiac_id",
}

/** input type for updating data in table "users" */
export type Users_Set_Input = {
  birthdate?: InputMaybe<Scalars["date"]["input"]>;
  created_at?: InputMaybe<Scalars["timestamp"]["input"]>;
  deleted_at?: InputMaybe<Scalars["timestamp"]["input"]>;
  full_name?: InputMaybe<Scalars["String"]["input"]>;
  phone_number?: InputMaybe<Scalars["String"]["input"]>;
  updated_at?: InputMaybe<Scalars["timestamp"]["input"]>;
  user_id?: InputMaybe<Scalars["Int"]["input"]>;
  username?: InputMaybe<Scalars["String"]["input"]>;
  zalo_id?: InputMaybe<Scalars["String"]["input"]>;
  zodiac_id?: InputMaybe<Scalars["Int"]["input"]>;
};

/** aggregate stddev on columns */
export type Users_Stddev_Fields = {
  __typename?: "users_stddev_fields";
  user_id?: Maybe<Scalars["Float"]["output"]>;
  zodiac_id?: Maybe<Scalars["Float"]["output"]>;
};

/** order by stddev() on columns of table "users" */
export type Users_Stddev_Order_By = {
  user_id?: InputMaybe<Order_By>;
  zodiac_id?: InputMaybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type Users_Stddev_Pop_Fields = {
  __typename?: "users_stddev_pop_fields";
  user_id?: Maybe<Scalars["Float"]["output"]>;
  zodiac_id?: Maybe<Scalars["Float"]["output"]>;
};

/** order by stddev_pop() on columns of table "users" */
export type Users_Stddev_Pop_Order_By = {
  user_id?: InputMaybe<Order_By>;
  zodiac_id?: InputMaybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type Users_Stddev_Samp_Fields = {
  __typename?: "users_stddev_samp_fields";
  user_id?: Maybe<Scalars["Float"]["output"]>;
  zodiac_id?: Maybe<Scalars["Float"]["output"]>;
};

/** order by stddev_samp() on columns of table "users" */
export type Users_Stddev_Samp_Order_By = {
  user_id?: InputMaybe<Order_By>;
  zodiac_id?: InputMaybe<Order_By>;
};

/** Streaming cursor of the table "users" */
export type Users_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Users_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Users_Stream_Cursor_Value_Input = {
  birthdate?: InputMaybe<Scalars["date"]["input"]>;
  created_at?: InputMaybe<Scalars["timestamp"]["input"]>;
  deleted_at?: InputMaybe<Scalars["timestamp"]["input"]>;
  full_name?: InputMaybe<Scalars["String"]["input"]>;
  phone_number?: InputMaybe<Scalars["String"]["input"]>;
  updated_at?: InputMaybe<Scalars["timestamp"]["input"]>;
  user_id?: InputMaybe<Scalars["Int"]["input"]>;
  username?: InputMaybe<Scalars["String"]["input"]>;
  zalo_id?: InputMaybe<Scalars["String"]["input"]>;
  zodiac_id?: InputMaybe<Scalars["Int"]["input"]>;
};

/** aggregate sum on columns */
export type Users_Sum_Fields = {
  __typename?: "users_sum_fields";
  user_id?: Maybe<Scalars["Int"]["output"]>;
  zodiac_id?: Maybe<Scalars["Int"]["output"]>;
};

/** order by sum() on columns of table "users" */
export type Users_Sum_Order_By = {
  user_id?: InputMaybe<Order_By>;
  zodiac_id?: InputMaybe<Order_By>;
};

/** update columns of table "users" */
export enum Users_Update_Column {
  /** column name */
  Birthdate = "birthdate",
  /** column name */
  CreatedAt = "created_at",
  /** column name */
  DeletedAt = "deleted_at",
  /** column name */
  FullName = "full_name",
  /** column name */
  PhoneNumber = "phone_number",
  /** column name */
  UpdatedAt = "updated_at",
  /** column name */
  UserId = "user_id",
  /** column name */
  Username = "username",
  /** column name */
  ZaloId = "zalo_id",
  /** column name */
  ZodiacId = "zodiac_id",
}

export type Users_Updates = {
  /** increments the numeric columns with given value of the filtered values */
  _inc?: InputMaybe<Users_Inc_Input>;
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Users_Set_Input>;
  /** filter the rows which have to be updated */
  where: Users_Bool_Exp;
};

/** aggregate var_pop on columns */
export type Users_Var_Pop_Fields = {
  __typename?: "users_var_pop_fields";
  user_id?: Maybe<Scalars["Float"]["output"]>;
  zodiac_id?: Maybe<Scalars["Float"]["output"]>;
};

/** order by var_pop() on columns of table "users" */
export type Users_Var_Pop_Order_By = {
  user_id?: InputMaybe<Order_By>;
  zodiac_id?: InputMaybe<Order_By>;
};

/** aggregate var_samp on columns */
export type Users_Var_Samp_Fields = {
  __typename?: "users_var_samp_fields";
  user_id?: Maybe<Scalars["Float"]["output"]>;
  zodiac_id?: Maybe<Scalars["Float"]["output"]>;
};

/** order by var_samp() on columns of table "users" */
export type Users_Var_Samp_Order_By = {
  user_id?: InputMaybe<Order_By>;
  zodiac_id?: InputMaybe<Order_By>;
};

/** aggregate variance on columns */
export type Users_Variance_Fields = {
  __typename?: "users_variance_fields";
  user_id?: Maybe<Scalars["Float"]["output"]>;
  zodiac_id?: Maybe<Scalars["Float"]["output"]>;
};

/** order by variance() on columns of table "users" */
export type Users_Variance_Order_By = {
  user_id?: InputMaybe<Order_By>;
  zodiac_id?: InputMaybe<Order_By>;
};

/** columns and relationships of "weekly_horoscope" */
export type Weekly_Horoscope = {
  __typename?: "weekly_horoscope";
  created_at?: Maybe<Scalars["timestamp"]["output"]>;
  deleted_at?: Maybe<Scalars["timestamp"]["output"]>;
  horoscope_content?: Maybe<Scalars["String"]["output"]>;
  updated_at?: Maybe<Scalars["timestamp"]["output"]>;
  week_end_date?: Maybe<Scalars["date"]["output"]>;
  week_start_date?: Maybe<Scalars["date"]["output"]>;
  weekly_career?: Maybe<Scalars["String"]["output"]>;
  weekly_finance?: Maybe<Scalars["String"]["output"]>;
  weekly_health?: Maybe<Scalars["String"]["output"]>;
  weekly_horoscope_id: Scalars["Int"]["output"];
  weekly_love?: Maybe<Scalars["String"]["output"]>;
  weekly_lucky_colors?: Maybe<Array<Scalars["String"]["output"]>>;
  weekly_lucky_numbers?: Maybe<Array<Scalars["Int"]["output"]>>;
  /** An object relationship */
  zodiac?: Maybe<Zodiac>;
  zodiac_id?: Maybe<Scalars["Int"]["output"]>;
};

/** aggregated selection of "weekly_horoscope" */
export type Weekly_Horoscope_Aggregate = {
  __typename?: "weekly_horoscope_aggregate";
  aggregate?: Maybe<Weekly_Horoscope_Aggregate_Fields>;
  nodes: Array<Weekly_Horoscope>;
};

export type Weekly_Horoscope_Aggregate_Bool_Exp = {
  count?: InputMaybe<Weekly_Horoscope_Aggregate_Bool_Exp_Count>;
};

export type Weekly_Horoscope_Aggregate_Bool_Exp_Count = {
  arguments?: InputMaybe<Array<Weekly_Horoscope_Select_Column>>;
  distinct?: InputMaybe<Scalars["Boolean"]["input"]>;
  filter?: InputMaybe<Weekly_Horoscope_Bool_Exp>;
  predicate: Int_Comparison_Exp;
};

/** aggregate fields of "weekly_horoscope" */
export type Weekly_Horoscope_Aggregate_Fields = {
  __typename?: "weekly_horoscope_aggregate_fields";
  avg?: Maybe<Weekly_Horoscope_Avg_Fields>;
  count: Scalars["Int"]["output"];
  max?: Maybe<Weekly_Horoscope_Max_Fields>;
  min?: Maybe<Weekly_Horoscope_Min_Fields>;
  stddev?: Maybe<Weekly_Horoscope_Stddev_Fields>;
  stddev_pop?: Maybe<Weekly_Horoscope_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Weekly_Horoscope_Stddev_Samp_Fields>;
  sum?: Maybe<Weekly_Horoscope_Sum_Fields>;
  var_pop?: Maybe<Weekly_Horoscope_Var_Pop_Fields>;
  var_samp?: Maybe<Weekly_Horoscope_Var_Samp_Fields>;
  variance?: Maybe<Weekly_Horoscope_Variance_Fields>;
};

/** aggregate fields of "weekly_horoscope" */
export type Weekly_Horoscope_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Weekly_Horoscope_Select_Column>>;
  distinct?: InputMaybe<Scalars["Boolean"]["input"]>;
};

/** order by aggregate values of table "weekly_horoscope" */
export type Weekly_Horoscope_Aggregate_Order_By = {
  avg?: InputMaybe<Weekly_Horoscope_Avg_Order_By>;
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<Weekly_Horoscope_Max_Order_By>;
  min?: InputMaybe<Weekly_Horoscope_Min_Order_By>;
  stddev?: InputMaybe<Weekly_Horoscope_Stddev_Order_By>;
  stddev_pop?: InputMaybe<Weekly_Horoscope_Stddev_Pop_Order_By>;
  stddev_samp?: InputMaybe<Weekly_Horoscope_Stddev_Samp_Order_By>;
  sum?: InputMaybe<Weekly_Horoscope_Sum_Order_By>;
  var_pop?: InputMaybe<Weekly_Horoscope_Var_Pop_Order_By>;
  var_samp?: InputMaybe<Weekly_Horoscope_Var_Samp_Order_By>;
  variance?: InputMaybe<Weekly_Horoscope_Variance_Order_By>;
};

/** input type for inserting array relation for remote table "weekly_horoscope" */
export type Weekly_Horoscope_Arr_Rel_Insert_Input = {
  data: Array<Weekly_Horoscope_Insert_Input>;
  /** upsert condition */
  on_conflict?: InputMaybe<Weekly_Horoscope_On_Conflict>;
};

/** aggregate avg on columns */
export type Weekly_Horoscope_Avg_Fields = {
  __typename?: "weekly_horoscope_avg_fields";
  weekly_horoscope_id?: Maybe<Scalars["Float"]["output"]>;
  zodiac_id?: Maybe<Scalars["Float"]["output"]>;
};

/** order by avg() on columns of table "weekly_horoscope" */
export type Weekly_Horoscope_Avg_Order_By = {
  weekly_horoscope_id?: InputMaybe<Order_By>;
  zodiac_id?: InputMaybe<Order_By>;
};

/** Boolean expression to filter rows from the table "weekly_horoscope". All fields are combined with a logical 'AND'. */
export type Weekly_Horoscope_Bool_Exp = {
  _and?: InputMaybe<Array<Weekly_Horoscope_Bool_Exp>>;
  _not?: InputMaybe<Weekly_Horoscope_Bool_Exp>;
  _or?: InputMaybe<Array<Weekly_Horoscope_Bool_Exp>>;
  created_at?: InputMaybe<Timestamp_Comparison_Exp>;
  deleted_at?: InputMaybe<Timestamp_Comparison_Exp>;
  horoscope_content?: InputMaybe<String_Comparison_Exp>;
  updated_at?: InputMaybe<Timestamp_Comparison_Exp>;
  week_end_date?: InputMaybe<Date_Comparison_Exp>;
  week_start_date?: InputMaybe<Date_Comparison_Exp>;
  weekly_career?: InputMaybe<String_Comparison_Exp>;
  weekly_finance?: InputMaybe<String_Comparison_Exp>;
  weekly_health?: InputMaybe<String_Comparison_Exp>;
  weekly_horoscope_id?: InputMaybe<Int_Comparison_Exp>;
  weekly_love?: InputMaybe<String_Comparison_Exp>;
  weekly_lucky_colors?: InputMaybe<String_Array_Comparison_Exp>;
  weekly_lucky_numbers?: InputMaybe<Int_Array_Comparison_Exp>;
  zodiac?: InputMaybe<Zodiac_Bool_Exp>;
  zodiac_id?: InputMaybe<Int_Comparison_Exp>;
};

/** unique or primary key constraints on table "weekly_horoscope" */
export enum Weekly_Horoscope_Constraint {
  /** unique or primary key constraint on columns "weekly_horoscope_id" */
  WeeklyHoroscopePkey = "weekly_horoscope_pkey",
}

/** input type for incrementing numeric columns in table "weekly_horoscope" */
export type Weekly_Horoscope_Inc_Input = {
  weekly_horoscope_id?: InputMaybe<Scalars["Int"]["input"]>;
  zodiac_id?: InputMaybe<Scalars["Int"]["input"]>;
};

/** input type for inserting data into table "weekly_horoscope" */
export type Weekly_Horoscope_Insert_Input = {
  created_at?: InputMaybe<Scalars["timestamp"]["input"]>;
  deleted_at?: InputMaybe<Scalars["timestamp"]["input"]>;
  horoscope_content?: InputMaybe<Scalars["String"]["input"]>;
  updated_at?: InputMaybe<Scalars["timestamp"]["input"]>;
  week_end_date?: InputMaybe<Scalars["date"]["input"]>;
  week_start_date?: InputMaybe<Scalars["date"]["input"]>;
  weekly_career?: InputMaybe<Scalars["String"]["input"]>;
  weekly_finance?: InputMaybe<Scalars["String"]["input"]>;
  weekly_health?: InputMaybe<Scalars["String"]["input"]>;
  weekly_horoscope_id?: InputMaybe<Scalars["Int"]["input"]>;
  weekly_love?: InputMaybe<Scalars["String"]["input"]>;
  weekly_lucky_colors?: InputMaybe<Array<Scalars["String"]["input"]>>;
  weekly_lucky_numbers?: InputMaybe<Array<Scalars["Int"]["input"]>>;
  zodiac?: InputMaybe<Zodiac_Obj_Rel_Insert_Input>;
  zodiac_id?: InputMaybe<Scalars["Int"]["input"]>;
};

/** aggregate max on columns */
export type Weekly_Horoscope_Max_Fields = {
  __typename?: "weekly_horoscope_max_fields";
  created_at?: Maybe<Scalars["timestamp"]["output"]>;
  deleted_at?: Maybe<Scalars["timestamp"]["output"]>;
  horoscope_content?: Maybe<Scalars["String"]["output"]>;
  updated_at?: Maybe<Scalars["timestamp"]["output"]>;
  week_end_date?: Maybe<Scalars["date"]["output"]>;
  week_start_date?: Maybe<Scalars["date"]["output"]>;
  weekly_career?: Maybe<Scalars["String"]["output"]>;
  weekly_finance?: Maybe<Scalars["String"]["output"]>;
  weekly_health?: Maybe<Scalars["String"]["output"]>;
  weekly_horoscope_id?: Maybe<Scalars["Int"]["output"]>;
  weekly_love?: Maybe<Scalars["String"]["output"]>;
  weekly_lucky_colors?: Maybe<Array<Scalars["String"]["output"]>>;
  weekly_lucky_numbers?: Maybe<Array<Scalars["Int"]["output"]>>;
  zodiac_id?: Maybe<Scalars["Int"]["output"]>;
};

/** order by max() on columns of table "weekly_horoscope" */
export type Weekly_Horoscope_Max_Order_By = {
  created_at?: InputMaybe<Order_By>;
  deleted_at?: InputMaybe<Order_By>;
  horoscope_content?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
  week_end_date?: InputMaybe<Order_By>;
  week_start_date?: InputMaybe<Order_By>;
  weekly_career?: InputMaybe<Order_By>;
  weekly_finance?: InputMaybe<Order_By>;
  weekly_health?: InputMaybe<Order_By>;
  weekly_horoscope_id?: InputMaybe<Order_By>;
  weekly_love?: InputMaybe<Order_By>;
  weekly_lucky_colors?: InputMaybe<Order_By>;
  weekly_lucky_numbers?: InputMaybe<Order_By>;
  zodiac_id?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type Weekly_Horoscope_Min_Fields = {
  __typename?: "weekly_horoscope_min_fields";
  created_at?: Maybe<Scalars["timestamp"]["output"]>;
  deleted_at?: Maybe<Scalars["timestamp"]["output"]>;
  horoscope_content?: Maybe<Scalars["String"]["output"]>;
  updated_at?: Maybe<Scalars["timestamp"]["output"]>;
  week_end_date?: Maybe<Scalars["date"]["output"]>;
  week_start_date?: Maybe<Scalars["date"]["output"]>;
  weekly_career?: Maybe<Scalars["String"]["output"]>;
  weekly_finance?: Maybe<Scalars["String"]["output"]>;
  weekly_health?: Maybe<Scalars["String"]["output"]>;
  weekly_horoscope_id?: Maybe<Scalars["Int"]["output"]>;
  weekly_love?: Maybe<Scalars["String"]["output"]>;
  weekly_lucky_colors?: Maybe<Array<Scalars["String"]["output"]>>;
  weekly_lucky_numbers?: Maybe<Array<Scalars["Int"]["output"]>>;
  zodiac_id?: Maybe<Scalars["Int"]["output"]>;
};

/** order by min() on columns of table "weekly_horoscope" */
export type Weekly_Horoscope_Min_Order_By = {
  created_at?: InputMaybe<Order_By>;
  deleted_at?: InputMaybe<Order_By>;
  horoscope_content?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
  week_end_date?: InputMaybe<Order_By>;
  week_start_date?: InputMaybe<Order_By>;
  weekly_career?: InputMaybe<Order_By>;
  weekly_finance?: InputMaybe<Order_By>;
  weekly_health?: InputMaybe<Order_By>;
  weekly_horoscope_id?: InputMaybe<Order_By>;
  weekly_love?: InputMaybe<Order_By>;
  weekly_lucky_colors?: InputMaybe<Order_By>;
  weekly_lucky_numbers?: InputMaybe<Order_By>;
  zodiac_id?: InputMaybe<Order_By>;
};

/** response of any mutation on the table "weekly_horoscope" */
export type Weekly_Horoscope_Mutation_Response = {
  __typename?: "weekly_horoscope_mutation_response";
  /** number of rows affected by the mutation */
  affected_rows: Scalars["Int"]["output"];
  /** data from the rows affected by the mutation */
  returning: Array<Weekly_Horoscope>;
};

/** on_conflict condition type for table "weekly_horoscope" */
export type Weekly_Horoscope_On_Conflict = {
  constraint: Weekly_Horoscope_Constraint;
  update_columns?: Array<Weekly_Horoscope_Update_Column>;
  where?: InputMaybe<Weekly_Horoscope_Bool_Exp>;
};

/** Ordering options when selecting data from "weekly_horoscope". */
export type Weekly_Horoscope_Order_By = {
  created_at?: InputMaybe<Order_By>;
  deleted_at?: InputMaybe<Order_By>;
  horoscope_content?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
  week_end_date?: InputMaybe<Order_By>;
  week_start_date?: InputMaybe<Order_By>;
  weekly_career?: InputMaybe<Order_By>;
  weekly_finance?: InputMaybe<Order_By>;
  weekly_health?: InputMaybe<Order_By>;
  weekly_horoscope_id?: InputMaybe<Order_By>;
  weekly_love?: InputMaybe<Order_By>;
  weekly_lucky_colors?: InputMaybe<Order_By>;
  weekly_lucky_numbers?: InputMaybe<Order_By>;
  zodiac?: InputMaybe<Zodiac_Order_By>;
  zodiac_id?: InputMaybe<Order_By>;
};

/** primary key columns input for table: weekly_horoscope */
export type Weekly_Horoscope_Pk_Columns_Input = {
  weekly_horoscope_id: Scalars["Int"]["input"];
};

/** select columns of table "weekly_horoscope" */
export enum Weekly_Horoscope_Select_Column {
  /** column name */
  CreatedAt = "created_at",
  /** column name */
  DeletedAt = "deleted_at",
  /** column name */
  HoroscopeContent = "horoscope_content",
  /** column name */
  UpdatedAt = "updated_at",
  /** column name */
  WeekEndDate = "week_end_date",
  /** column name */
  WeekStartDate = "week_start_date",
  /** column name */
  WeeklyCareer = "weekly_career",
  /** column name */
  WeeklyFinance = "weekly_finance",
  /** column name */
  WeeklyHealth = "weekly_health",
  /** column name */
  WeeklyHoroscopeId = "weekly_horoscope_id",
  /** column name */
  WeeklyLove = "weekly_love",
  /** column name */
  WeeklyLuckyColors = "weekly_lucky_colors",
  /** column name */
  WeeklyLuckyNumbers = "weekly_lucky_numbers",
  /** column name */
  ZodiacId = "zodiac_id",
}

/** input type for updating data in table "weekly_horoscope" */
export type Weekly_Horoscope_Set_Input = {
  created_at?: InputMaybe<Scalars["timestamp"]["input"]>;
  deleted_at?: InputMaybe<Scalars["timestamp"]["input"]>;
  horoscope_content?: InputMaybe<Scalars["String"]["input"]>;
  updated_at?: InputMaybe<Scalars["timestamp"]["input"]>;
  week_end_date?: InputMaybe<Scalars["date"]["input"]>;
  week_start_date?: InputMaybe<Scalars["date"]["input"]>;
  weekly_career?: InputMaybe<Scalars["String"]["input"]>;
  weekly_finance?: InputMaybe<Scalars["String"]["input"]>;
  weekly_health?: InputMaybe<Scalars["String"]["input"]>;
  weekly_horoscope_id?: InputMaybe<Scalars["Int"]["input"]>;
  weekly_love?: InputMaybe<Scalars["String"]["input"]>;
  weekly_lucky_colors?: InputMaybe<Array<Scalars["String"]["input"]>>;
  weekly_lucky_numbers?: InputMaybe<Array<Scalars["Int"]["input"]>>;
  zodiac_id?: InputMaybe<Scalars["Int"]["input"]>;
};

/** aggregate stddev on columns */
export type Weekly_Horoscope_Stddev_Fields = {
  __typename?: "weekly_horoscope_stddev_fields";
  weekly_horoscope_id?: Maybe<Scalars["Float"]["output"]>;
  zodiac_id?: Maybe<Scalars["Float"]["output"]>;
};

/** order by stddev() on columns of table "weekly_horoscope" */
export type Weekly_Horoscope_Stddev_Order_By = {
  weekly_horoscope_id?: InputMaybe<Order_By>;
  zodiac_id?: InputMaybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type Weekly_Horoscope_Stddev_Pop_Fields = {
  __typename?: "weekly_horoscope_stddev_pop_fields";
  weekly_horoscope_id?: Maybe<Scalars["Float"]["output"]>;
  zodiac_id?: Maybe<Scalars["Float"]["output"]>;
};

/** order by stddev_pop() on columns of table "weekly_horoscope" */
export type Weekly_Horoscope_Stddev_Pop_Order_By = {
  weekly_horoscope_id?: InputMaybe<Order_By>;
  zodiac_id?: InputMaybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type Weekly_Horoscope_Stddev_Samp_Fields = {
  __typename?: "weekly_horoscope_stddev_samp_fields";
  weekly_horoscope_id?: Maybe<Scalars["Float"]["output"]>;
  zodiac_id?: Maybe<Scalars["Float"]["output"]>;
};

/** order by stddev_samp() on columns of table "weekly_horoscope" */
export type Weekly_Horoscope_Stddev_Samp_Order_By = {
  weekly_horoscope_id?: InputMaybe<Order_By>;
  zodiac_id?: InputMaybe<Order_By>;
};

/** Streaming cursor of the table "weekly_horoscope" */
export type Weekly_Horoscope_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Weekly_Horoscope_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Weekly_Horoscope_Stream_Cursor_Value_Input = {
  created_at?: InputMaybe<Scalars["timestamp"]["input"]>;
  deleted_at?: InputMaybe<Scalars["timestamp"]["input"]>;
  horoscope_content?: InputMaybe<Scalars["String"]["input"]>;
  updated_at?: InputMaybe<Scalars["timestamp"]["input"]>;
  week_end_date?: InputMaybe<Scalars["date"]["input"]>;
  week_start_date?: InputMaybe<Scalars["date"]["input"]>;
  weekly_career?: InputMaybe<Scalars["String"]["input"]>;
  weekly_finance?: InputMaybe<Scalars["String"]["input"]>;
  weekly_health?: InputMaybe<Scalars["String"]["input"]>;
  weekly_horoscope_id?: InputMaybe<Scalars["Int"]["input"]>;
  weekly_love?: InputMaybe<Scalars["String"]["input"]>;
  weekly_lucky_colors?: InputMaybe<Array<Scalars["String"]["input"]>>;
  weekly_lucky_numbers?: InputMaybe<Array<Scalars["Int"]["input"]>>;
  zodiac_id?: InputMaybe<Scalars["Int"]["input"]>;
};

/** aggregate sum on columns */
export type Weekly_Horoscope_Sum_Fields = {
  __typename?: "weekly_horoscope_sum_fields";
  weekly_horoscope_id?: Maybe<Scalars["Int"]["output"]>;
  zodiac_id?: Maybe<Scalars["Int"]["output"]>;
};

/** order by sum() on columns of table "weekly_horoscope" */
export type Weekly_Horoscope_Sum_Order_By = {
  weekly_horoscope_id?: InputMaybe<Order_By>;
  zodiac_id?: InputMaybe<Order_By>;
};

/** update columns of table "weekly_horoscope" */
export enum Weekly_Horoscope_Update_Column {
  /** column name */
  CreatedAt = "created_at",
  /** column name */
  DeletedAt = "deleted_at",
  /** column name */
  HoroscopeContent = "horoscope_content",
  /** column name */
  UpdatedAt = "updated_at",
  /** column name */
  WeekEndDate = "week_end_date",
  /** column name */
  WeekStartDate = "week_start_date",
  /** column name */
  WeeklyCareer = "weekly_career",
  /** column name */
  WeeklyFinance = "weekly_finance",
  /** column name */
  WeeklyHealth = "weekly_health",
  /** column name */
  WeeklyHoroscopeId = "weekly_horoscope_id",
  /** column name */
  WeeklyLove = "weekly_love",
  /** column name */
  WeeklyLuckyColors = "weekly_lucky_colors",
  /** column name */
  WeeklyLuckyNumbers = "weekly_lucky_numbers",
  /** column name */
  ZodiacId = "zodiac_id",
}

export type Weekly_Horoscope_Updates = {
  /** increments the numeric columns with given value of the filtered values */
  _inc?: InputMaybe<Weekly_Horoscope_Inc_Input>;
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Weekly_Horoscope_Set_Input>;
  /** filter the rows which have to be updated */
  where: Weekly_Horoscope_Bool_Exp;
};

/** aggregate var_pop on columns */
export type Weekly_Horoscope_Var_Pop_Fields = {
  __typename?: "weekly_horoscope_var_pop_fields";
  weekly_horoscope_id?: Maybe<Scalars["Float"]["output"]>;
  zodiac_id?: Maybe<Scalars["Float"]["output"]>;
};

/** order by var_pop() on columns of table "weekly_horoscope" */
export type Weekly_Horoscope_Var_Pop_Order_By = {
  weekly_horoscope_id?: InputMaybe<Order_By>;
  zodiac_id?: InputMaybe<Order_By>;
};

/** aggregate var_samp on columns */
export type Weekly_Horoscope_Var_Samp_Fields = {
  __typename?: "weekly_horoscope_var_samp_fields";
  weekly_horoscope_id?: Maybe<Scalars["Float"]["output"]>;
  zodiac_id?: Maybe<Scalars["Float"]["output"]>;
};

/** order by var_samp() on columns of table "weekly_horoscope" */
export type Weekly_Horoscope_Var_Samp_Order_By = {
  weekly_horoscope_id?: InputMaybe<Order_By>;
  zodiac_id?: InputMaybe<Order_By>;
};

/** aggregate variance on columns */
export type Weekly_Horoscope_Variance_Fields = {
  __typename?: "weekly_horoscope_variance_fields";
  weekly_horoscope_id?: Maybe<Scalars["Float"]["output"]>;
  zodiac_id?: Maybe<Scalars["Float"]["output"]>;
};

/** order by variance() on columns of table "weekly_horoscope" */
export type Weekly_Horoscope_Variance_Order_By = {
  weekly_horoscope_id?: InputMaybe<Order_By>;
  zodiac_id?: InputMaybe<Order_By>;
};

/** columns and relationships of "zodiac" */
export type Zodiac = {
  __typename?: "zodiac";
  created_at?: Maybe<Scalars["timestamp"]["output"]>;
  /** An array relationship */
  daily_horoscopes: Array<Daily_Horoscope>;
  /** An aggregate relationship */
  daily_horoscopes_aggregate: Daily_Horoscope_Aggregate;
  deleted_at?: Maybe<Scalars["timestamp"]["output"]>;
  description?: Maybe<Scalars["String"]["output"]>;
  end_date?: Maybe<Scalars["date"]["output"]>;
  large_image_url?: Maybe<Scalars["String"]["output"]>;
  /** An array relationship */
  monthly_horoscopes: Array<Monthly_Horoscope>;
  /** An aggregate relationship */
  monthly_horoscopes_aggregate: Monthly_Horoscope_Aggregate;
  name_en?: Maybe<Scalars["String"]["output"]>;
  name_vi?: Maybe<Scalars["String"]["output"]>;
  small_image_url?: Maybe<Scalars["String"]["output"]>;
  start_date?: Maybe<Scalars["date"]["output"]>;
  strengths?: Maybe<Scalars["String"]["output"]>;
  symbol_url?: Maybe<Scalars["String"]["output"]>;
  updated_at?: Maybe<Scalars["timestamp"]["output"]>;
  /** An array relationship */
  users: Array<Users>;
  /** An aggregate relationship */
  users_aggregate: Users_Aggregate;
  weaknesses?: Maybe<Scalars["String"]["output"]>;
  /** An array relationship */
  weekly_horoscopes: Array<Weekly_Horoscope>;
  /** An aggregate relationship */
  weekly_horoscopes_aggregate: Weekly_Horoscope_Aggregate;
  zodiac_id: Scalars["Int"]["output"];
};

/** columns and relationships of "zodiac" */
export type ZodiacDaily_HoroscopesArgs = {
  distinct_on?: InputMaybe<Array<Daily_Horoscope_Select_Column>>;
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
  order_by?: InputMaybe<Array<Daily_Horoscope_Order_By>>;
  where?: InputMaybe<Daily_Horoscope_Bool_Exp>;
};

/** columns and relationships of "zodiac" */
export type ZodiacDaily_Horoscopes_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Daily_Horoscope_Select_Column>>;
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
  order_by?: InputMaybe<Array<Daily_Horoscope_Order_By>>;
  where?: InputMaybe<Daily_Horoscope_Bool_Exp>;
};

/** columns and relationships of "zodiac" */
export type ZodiacMonthly_HoroscopesArgs = {
  distinct_on?: InputMaybe<Array<Monthly_Horoscope_Select_Column>>;
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
  order_by?: InputMaybe<Array<Monthly_Horoscope_Order_By>>;
  where?: InputMaybe<Monthly_Horoscope_Bool_Exp>;
};

/** columns and relationships of "zodiac" */
export type ZodiacMonthly_Horoscopes_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Monthly_Horoscope_Select_Column>>;
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
  order_by?: InputMaybe<Array<Monthly_Horoscope_Order_By>>;
  where?: InputMaybe<Monthly_Horoscope_Bool_Exp>;
};

/** columns and relationships of "zodiac" */
export type ZodiacUsersArgs = {
  distinct_on?: InputMaybe<Array<Users_Select_Column>>;
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
  order_by?: InputMaybe<Array<Users_Order_By>>;
  where?: InputMaybe<Users_Bool_Exp>;
};

/** columns and relationships of "zodiac" */
export type ZodiacUsers_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Users_Select_Column>>;
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
  order_by?: InputMaybe<Array<Users_Order_By>>;
  where?: InputMaybe<Users_Bool_Exp>;
};

/** columns and relationships of "zodiac" */
export type ZodiacWeekly_HoroscopesArgs = {
  distinct_on?: InputMaybe<Array<Weekly_Horoscope_Select_Column>>;
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
  order_by?: InputMaybe<Array<Weekly_Horoscope_Order_By>>;
  where?: InputMaybe<Weekly_Horoscope_Bool_Exp>;
};

/** columns and relationships of "zodiac" */
export type ZodiacWeekly_Horoscopes_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Weekly_Horoscope_Select_Column>>;
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
  order_by?: InputMaybe<Array<Weekly_Horoscope_Order_By>>;
  where?: InputMaybe<Weekly_Horoscope_Bool_Exp>;
};

/** aggregated selection of "zodiac" */
export type Zodiac_Aggregate = {
  __typename?: "zodiac_aggregate";
  aggregate?: Maybe<Zodiac_Aggregate_Fields>;
  nodes: Array<Zodiac>;
};

/** aggregate fields of "zodiac" */
export type Zodiac_Aggregate_Fields = {
  __typename?: "zodiac_aggregate_fields";
  avg?: Maybe<Zodiac_Avg_Fields>;
  count: Scalars["Int"]["output"];
  max?: Maybe<Zodiac_Max_Fields>;
  min?: Maybe<Zodiac_Min_Fields>;
  stddev?: Maybe<Zodiac_Stddev_Fields>;
  stddev_pop?: Maybe<Zodiac_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Zodiac_Stddev_Samp_Fields>;
  sum?: Maybe<Zodiac_Sum_Fields>;
  var_pop?: Maybe<Zodiac_Var_Pop_Fields>;
  var_samp?: Maybe<Zodiac_Var_Samp_Fields>;
  variance?: Maybe<Zodiac_Variance_Fields>;
};

/** aggregate fields of "zodiac" */
export type Zodiac_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Zodiac_Select_Column>>;
  distinct?: InputMaybe<Scalars["Boolean"]["input"]>;
};

/** aggregate avg on columns */
export type Zodiac_Avg_Fields = {
  __typename?: "zodiac_avg_fields";
  zodiac_id?: Maybe<Scalars["Float"]["output"]>;
};

/** Boolean expression to filter rows from the table "zodiac". All fields are combined with a logical 'AND'. */
export type Zodiac_Bool_Exp = {
  _and?: InputMaybe<Array<Zodiac_Bool_Exp>>;
  _not?: InputMaybe<Zodiac_Bool_Exp>;
  _or?: InputMaybe<Array<Zodiac_Bool_Exp>>;
  created_at?: InputMaybe<Timestamp_Comparison_Exp>;
  daily_horoscopes?: InputMaybe<Daily_Horoscope_Bool_Exp>;
  daily_horoscopes_aggregate?: InputMaybe<Daily_Horoscope_Aggregate_Bool_Exp>;
  deleted_at?: InputMaybe<Timestamp_Comparison_Exp>;
  description?: InputMaybe<String_Comparison_Exp>;
  end_date?: InputMaybe<Date_Comparison_Exp>;
  large_image_url?: InputMaybe<String_Comparison_Exp>;
  monthly_horoscopes?: InputMaybe<Monthly_Horoscope_Bool_Exp>;
  monthly_horoscopes_aggregate?: InputMaybe<Monthly_Horoscope_Aggregate_Bool_Exp>;
  name_en?: InputMaybe<String_Comparison_Exp>;
  name_vi?: InputMaybe<String_Comparison_Exp>;
  small_image_url?: InputMaybe<String_Comparison_Exp>;
  start_date?: InputMaybe<Date_Comparison_Exp>;
  strengths?: InputMaybe<String_Comparison_Exp>;
  symbol_url?: InputMaybe<String_Comparison_Exp>;
  updated_at?: InputMaybe<Timestamp_Comparison_Exp>;
  users?: InputMaybe<Users_Bool_Exp>;
  users_aggregate?: InputMaybe<Users_Aggregate_Bool_Exp>;
  weaknesses?: InputMaybe<String_Comparison_Exp>;
  weekly_horoscopes?: InputMaybe<Weekly_Horoscope_Bool_Exp>;
  weekly_horoscopes_aggregate?: InputMaybe<Weekly_Horoscope_Aggregate_Bool_Exp>;
  zodiac_id?: InputMaybe<Int_Comparison_Exp>;
};

/** unique or primary key constraints on table "zodiac" */
export enum Zodiac_Constraint {
  /** unique or primary key constraint on columns "zodiac_id" */
  ZodiacPkey = "zodiac_pkey",
}

/** input type for incrementing numeric columns in table "zodiac" */
export type Zodiac_Inc_Input = {
  zodiac_id?: InputMaybe<Scalars["Int"]["input"]>;
};

/** input type for inserting data into table "zodiac" */
export type Zodiac_Insert_Input = {
  created_at?: InputMaybe<Scalars["timestamp"]["input"]>;
  daily_horoscopes?: InputMaybe<Daily_Horoscope_Arr_Rel_Insert_Input>;
  deleted_at?: InputMaybe<Scalars["timestamp"]["input"]>;
  description?: InputMaybe<Scalars["String"]["input"]>;
  end_date?: InputMaybe<Scalars["date"]["input"]>;
  large_image_url?: InputMaybe<Scalars["String"]["input"]>;
  monthly_horoscopes?: InputMaybe<Monthly_Horoscope_Arr_Rel_Insert_Input>;
  name_en?: InputMaybe<Scalars["String"]["input"]>;
  name_vi?: InputMaybe<Scalars["String"]["input"]>;
  small_image_url?: InputMaybe<Scalars["String"]["input"]>;
  start_date?: InputMaybe<Scalars["date"]["input"]>;
  strengths?: InputMaybe<Scalars["String"]["input"]>;
  symbol_url?: InputMaybe<Scalars["String"]["input"]>;
  updated_at?: InputMaybe<Scalars["timestamp"]["input"]>;
  users?: InputMaybe<Users_Arr_Rel_Insert_Input>;
  weaknesses?: InputMaybe<Scalars["String"]["input"]>;
  weekly_horoscopes?: InputMaybe<Weekly_Horoscope_Arr_Rel_Insert_Input>;
  zodiac_id?: InputMaybe<Scalars["Int"]["input"]>;
};

/** aggregate max on columns */
export type Zodiac_Max_Fields = {
  __typename?: "zodiac_max_fields";
  created_at?: Maybe<Scalars["timestamp"]["output"]>;
  deleted_at?: Maybe<Scalars["timestamp"]["output"]>;
  description?: Maybe<Scalars["String"]["output"]>;
  end_date?: Maybe<Scalars["date"]["output"]>;
  large_image_url?: Maybe<Scalars["String"]["output"]>;
  name_en?: Maybe<Scalars["String"]["output"]>;
  name_vi?: Maybe<Scalars["String"]["output"]>;
  small_image_url?: Maybe<Scalars["String"]["output"]>;
  start_date?: Maybe<Scalars["date"]["output"]>;
  strengths?: Maybe<Scalars["String"]["output"]>;
  symbol_url?: Maybe<Scalars["String"]["output"]>;
  updated_at?: Maybe<Scalars["timestamp"]["output"]>;
  weaknesses?: Maybe<Scalars["String"]["output"]>;
  zodiac_id?: Maybe<Scalars["Int"]["output"]>;
};

/** aggregate min on columns */
export type Zodiac_Min_Fields = {
  __typename?: "zodiac_min_fields";
  created_at?: Maybe<Scalars["timestamp"]["output"]>;
  deleted_at?: Maybe<Scalars["timestamp"]["output"]>;
  description?: Maybe<Scalars["String"]["output"]>;
  end_date?: Maybe<Scalars["date"]["output"]>;
  large_image_url?: Maybe<Scalars["String"]["output"]>;
  name_en?: Maybe<Scalars["String"]["output"]>;
  name_vi?: Maybe<Scalars["String"]["output"]>;
  small_image_url?: Maybe<Scalars["String"]["output"]>;
  start_date?: Maybe<Scalars["date"]["output"]>;
  strengths?: Maybe<Scalars["String"]["output"]>;
  symbol_url?: Maybe<Scalars["String"]["output"]>;
  updated_at?: Maybe<Scalars["timestamp"]["output"]>;
  weaknesses?: Maybe<Scalars["String"]["output"]>;
  zodiac_id?: Maybe<Scalars["Int"]["output"]>;
};

/** response of any mutation on the table "zodiac" */
export type Zodiac_Mutation_Response = {
  __typename?: "zodiac_mutation_response";
  /** number of rows affected by the mutation */
  affected_rows: Scalars["Int"]["output"];
  /** data from the rows affected by the mutation */
  returning: Array<Zodiac>;
};

/** input type for inserting object relation for remote table "zodiac" */
export type Zodiac_Obj_Rel_Insert_Input = {
  data: Zodiac_Insert_Input;
  /** upsert condition */
  on_conflict?: InputMaybe<Zodiac_On_Conflict>;
};

/** on_conflict condition type for table "zodiac" */
export type Zodiac_On_Conflict = {
  constraint: Zodiac_Constraint;
  update_columns?: Array<Zodiac_Update_Column>;
  where?: InputMaybe<Zodiac_Bool_Exp>;
};

/** Ordering options when selecting data from "zodiac". */
export type Zodiac_Order_By = {
  created_at?: InputMaybe<Order_By>;
  daily_horoscopes_aggregate?: InputMaybe<Daily_Horoscope_Aggregate_Order_By>;
  deleted_at?: InputMaybe<Order_By>;
  description?: InputMaybe<Order_By>;
  end_date?: InputMaybe<Order_By>;
  large_image_url?: InputMaybe<Order_By>;
  monthly_horoscopes_aggregate?: InputMaybe<Monthly_Horoscope_Aggregate_Order_By>;
  name_en?: InputMaybe<Order_By>;
  name_vi?: InputMaybe<Order_By>;
  small_image_url?: InputMaybe<Order_By>;
  start_date?: InputMaybe<Order_By>;
  strengths?: InputMaybe<Order_By>;
  symbol_url?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
  users_aggregate?: InputMaybe<Users_Aggregate_Order_By>;
  weaknesses?: InputMaybe<Order_By>;
  weekly_horoscopes_aggregate?: InputMaybe<Weekly_Horoscope_Aggregate_Order_By>;
  zodiac_id?: InputMaybe<Order_By>;
};

/** primary key columns input for table: zodiac */
export type Zodiac_Pk_Columns_Input = {
  zodiac_id: Scalars["Int"]["input"];
};

/** select columns of table "zodiac" */
export enum Zodiac_Select_Column {
  /** column name */
  CreatedAt = "created_at",
  /** column name */
  DeletedAt = "deleted_at",
  /** column name */
  Description = "description",
  /** column name */
  EndDate = "end_date",
  /** column name */
  LargeImageUrl = "large_image_url",
  /** column name */
  NameEn = "name_en",
  /** column name */
  NameVi = "name_vi",
  /** column name */
  SmallImageUrl = "small_image_url",
  /** column name */
  StartDate = "start_date",
  /** column name */
  Strengths = "strengths",
  /** column name */
  SymbolUrl = "symbol_url",
  /** column name */
  UpdatedAt = "updated_at",
  /** column name */
  Weaknesses = "weaknesses",
  /** column name */
  ZodiacId = "zodiac_id",
}

/** input type for updating data in table "zodiac" */
export type Zodiac_Set_Input = {
  created_at?: InputMaybe<Scalars["timestamp"]["input"]>;
  deleted_at?: InputMaybe<Scalars["timestamp"]["input"]>;
  description?: InputMaybe<Scalars["String"]["input"]>;
  end_date?: InputMaybe<Scalars["date"]["input"]>;
  large_image_url?: InputMaybe<Scalars["String"]["input"]>;
  name_en?: InputMaybe<Scalars["String"]["input"]>;
  name_vi?: InputMaybe<Scalars["String"]["input"]>;
  small_image_url?: InputMaybe<Scalars["String"]["input"]>;
  start_date?: InputMaybe<Scalars["date"]["input"]>;
  strengths?: InputMaybe<Scalars["String"]["input"]>;
  symbol_url?: InputMaybe<Scalars["String"]["input"]>;
  updated_at?: InputMaybe<Scalars["timestamp"]["input"]>;
  weaknesses?: InputMaybe<Scalars["String"]["input"]>;
  zodiac_id?: InputMaybe<Scalars["Int"]["input"]>;
};

/** aggregate stddev on columns */
export type Zodiac_Stddev_Fields = {
  __typename?: "zodiac_stddev_fields";
  zodiac_id?: Maybe<Scalars["Float"]["output"]>;
};

/** aggregate stddev_pop on columns */
export type Zodiac_Stddev_Pop_Fields = {
  __typename?: "zodiac_stddev_pop_fields";
  zodiac_id?: Maybe<Scalars["Float"]["output"]>;
};

/** aggregate stddev_samp on columns */
export type Zodiac_Stddev_Samp_Fields = {
  __typename?: "zodiac_stddev_samp_fields";
  zodiac_id?: Maybe<Scalars["Float"]["output"]>;
};

/** Streaming cursor of the table "zodiac" */
export type Zodiac_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Zodiac_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Zodiac_Stream_Cursor_Value_Input = {
  created_at?: InputMaybe<Scalars["timestamp"]["input"]>;
  deleted_at?: InputMaybe<Scalars["timestamp"]["input"]>;
  description?: InputMaybe<Scalars["String"]["input"]>;
  end_date?: InputMaybe<Scalars["date"]["input"]>;
  large_image_url?: InputMaybe<Scalars["String"]["input"]>;
  name_en?: InputMaybe<Scalars["String"]["input"]>;
  name_vi?: InputMaybe<Scalars["String"]["input"]>;
  small_image_url?: InputMaybe<Scalars["String"]["input"]>;
  start_date?: InputMaybe<Scalars["date"]["input"]>;
  strengths?: InputMaybe<Scalars["String"]["input"]>;
  symbol_url?: InputMaybe<Scalars["String"]["input"]>;
  updated_at?: InputMaybe<Scalars["timestamp"]["input"]>;
  weaknesses?: InputMaybe<Scalars["String"]["input"]>;
  zodiac_id?: InputMaybe<Scalars["Int"]["input"]>;
};

/** aggregate sum on columns */
export type Zodiac_Sum_Fields = {
  __typename?: "zodiac_sum_fields";
  zodiac_id?: Maybe<Scalars["Int"]["output"]>;
};

/** update columns of table "zodiac" */
export enum Zodiac_Update_Column {
  /** column name */
  CreatedAt = "created_at",
  /** column name */
  DeletedAt = "deleted_at",
  /** column name */
  Description = "description",
  /** column name */
  EndDate = "end_date",
  /** column name */
  LargeImageUrl = "large_image_url",
  /** column name */
  NameEn = "name_en",
  /** column name */
  NameVi = "name_vi",
  /** column name */
  SmallImageUrl = "small_image_url",
  /** column name */
  StartDate = "start_date",
  /** column name */
  Strengths = "strengths",
  /** column name */
  SymbolUrl = "symbol_url",
  /** column name */
  UpdatedAt = "updated_at",
  /** column name */
  Weaknesses = "weaknesses",
  /** column name */
  ZodiacId = "zodiac_id",
}

export type Zodiac_Updates = {
  /** increments the numeric columns with given value of the filtered values */
  _inc?: InputMaybe<Zodiac_Inc_Input>;
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Zodiac_Set_Input>;
  /** filter the rows which have to be updated */
  where: Zodiac_Bool_Exp;
};

/** aggregate var_pop on columns */
export type Zodiac_Var_Pop_Fields = {
  __typename?: "zodiac_var_pop_fields";
  zodiac_id?: Maybe<Scalars["Float"]["output"]>;
};

/** aggregate var_samp on columns */
export type Zodiac_Var_Samp_Fields = {
  __typename?: "zodiac_var_samp_fields";
  zodiac_id?: Maybe<Scalars["Float"]["output"]>;
};

/** aggregate variance on columns */
export type Zodiac_Variance_Fields = {
  __typename?: "zodiac_variance_fields";
  zodiac_id?: Maybe<Scalars["Float"]["output"]>;
};

export type MyQueryQueryVariables = Exact<{ [key: string]: never }>;

export type MyQueryQuery = {
  __typename?: "query_root";
  zodiac: Array<{
    __typename?: "zodiac";
    name_en?: string | null;
    name_vi?: string | null;
    strengths?: string | null;
  }>;
};

export const MyQueryDocument = gql`
  query MyQuery {
    zodiac {
      name_en
      name_vi
      strengths
    }
  }
`;

/**
 * __useMyQueryQuery__
 *
 * To run a query within a React component, call `useMyQueryQuery` and pass it any options that fit your needs.
 * When your component renders, `useMyQueryQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useMyQueryQuery({
 *   variables: {
 *   },
 * });
 */
export function useMyQueryQuery(
  baseOptions?: Apollo.QueryHookOptions<MyQueryQuery, MyQueryQueryVariables>,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<MyQueryQuery, MyQueryQueryVariables>(
    MyQueryDocument,
    options,
  );
}
export function useMyQueryLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    MyQueryQuery,
    MyQueryQueryVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<MyQueryQuery, MyQueryQueryVariables>(
    MyQueryDocument,
    options,
  );
}
export function useMyQuerySuspenseQuery(
  baseOptions?: Apollo.SuspenseQueryHookOptions<
    MyQueryQuery,
    MyQueryQueryVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useSuspenseQuery<MyQueryQuery, MyQueryQueryVariables>(
    MyQueryDocument,
    options,
  );
}
export type MyQueryQueryHookResult = ReturnType<typeof useMyQueryQuery>;
export type MyQueryLazyQueryHookResult = ReturnType<typeof useMyQueryLazyQuery>;
export type MyQuerySuspenseQueryHookResult = ReturnType<
  typeof useMyQuerySuspenseQuery
>;
export type MyQueryQueryResult = Apollo.QueryResult<
  MyQueryQuery,
  MyQueryQueryVariables
>;
