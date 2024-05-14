import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
const defaultOptions = {} as const;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
  date: { input: any; output: any; }
  timestamp: { input: any; output: any; }
};

export type AuthOutput = {
  __typename?: 'AuthOutput';
  fullName: Scalars['String']['output'];
  token: Scalars['String']['output'];
  userId: Scalars['String']['output'];
  zodiacId?: Maybe<Scalars['String']['output']>;
};

/** Boolean expression to compare columns of type "Int". All fields are combined with logical 'AND'. */
export type Int_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['Int']['input']>;
  _gt?: InputMaybe<Scalars['Int']['input']>;
  _gte?: InputMaybe<Scalars['Int']['input']>;
  _in?: InputMaybe<Array<Scalars['Int']['input']>>;
  _is_null?: InputMaybe<Scalars['Boolean']['input']>;
  _lt?: InputMaybe<Scalars['Int']['input']>;
  _lte?: InputMaybe<Scalars['Int']['input']>;
  _neq?: InputMaybe<Scalars['Int']['input']>;
  _nin?: InputMaybe<Array<Scalars['Int']['input']>>;
};

export type MyOutput = {
  __typename?: 'MyOutput';
  description?: Maybe<Scalars['String']['output']>;
  end_date?: Maybe<Scalars['String']['output']>;
  large_image_url?: Maybe<Scalars['String']['output']>;
  name_en?: Maybe<Scalars['String']['output']>;
  name_vi?: Maybe<Scalars['String']['output']>;
  small_image_url?: Maybe<Scalars['String']['output']>;
  start_date?: Maybe<Scalars['String']['output']>;
  strengths?: Maybe<Scalars['String']['output']>;
  weaknesses?: Maybe<Scalars['String']['output']>;
  zodiac_id?: Maybe<Scalars['Int']['output']>;
};

/** Boolean expression to compare columns of type "String". All fields are combined with logical 'AND'. */
export type String_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['String']['input']>;
  _gt?: InputMaybe<Scalars['String']['input']>;
  _gte?: InputMaybe<Scalars['String']['input']>;
  /** does the column match the given case-insensitive pattern */
  _ilike?: InputMaybe<Scalars['String']['input']>;
  _in?: InputMaybe<Array<Scalars['String']['input']>>;
  /** does the column match the given POSIX regular expression, case insensitive */
  _iregex?: InputMaybe<Scalars['String']['input']>;
  _is_null?: InputMaybe<Scalars['Boolean']['input']>;
  /** does the column match the given pattern */
  _like?: InputMaybe<Scalars['String']['input']>;
  _lt?: InputMaybe<Scalars['String']['input']>;
  _lte?: InputMaybe<Scalars['String']['input']>;
  _neq?: InputMaybe<Scalars['String']['input']>;
  /** does the column NOT match the given case-insensitive pattern */
  _nilike?: InputMaybe<Scalars['String']['input']>;
  _nin?: InputMaybe<Array<Scalars['String']['input']>>;
  /** does the column NOT match the given POSIX regular expression, case insensitive */
  _niregex?: InputMaybe<Scalars['String']['input']>;
  /** does the column NOT match the given pattern */
  _nlike?: InputMaybe<Scalars['String']['input']>;
  /** does the column NOT match the given POSIX regular expression, case sensitive */
  _nregex?: InputMaybe<Scalars['String']['input']>;
  /** does the column NOT match the given SQL regular expression */
  _nsimilar?: InputMaybe<Scalars['String']['input']>;
  /** does the column match the given POSIX regular expression, case sensitive */
  _regex?: InputMaybe<Scalars['String']['input']>;
  /** does the column match the given SQL regular expression */
  _similar?: InputMaybe<Scalars['String']['input']>;
};

/** columns and relationships of "daily_horoscope" */
export type Daily_Horoscope = {
  __typename?: 'daily_horoscope';
  created_at?: Maybe<Scalars['timestamp']['output']>;
  daily_career?: Maybe<Scalars['String']['output']>;
  daily_finance?: Maybe<Scalars['String']['output']>;
  daily_health?: Maybe<Scalars['String']['output']>;
  daily_horoscope_id: Scalars['Int']['output'];
  daily_love?: Maybe<Scalars['String']['output']>;
  daily_lucky_colors?: Maybe<Scalars['String']['output']>;
  daily_lucky_message?: Maybe<Scalars['String']['output']>;
  daily_lucky_numbers?: Maybe<Scalars['String']['output']>;
  date?: Maybe<Scalars['date']['output']>;
  deleted_at?: Maybe<Scalars['timestamp']['output']>;
  horoscope_content?: Maybe<Scalars['String']['output']>;
  updated_at?: Maybe<Scalars['timestamp']['output']>;
  /** An object relationship */
  zodiac?: Maybe<Zodiac>;
  zodiac_id?: Maybe<Scalars['Int']['output']>;
};

/** aggregated selection of "daily_horoscope" */
export type Daily_Horoscope_Aggregate = {
  __typename?: 'daily_horoscope_aggregate';
  aggregate?: Maybe<Daily_Horoscope_Aggregate_Fields>;
  nodes: Array<Daily_Horoscope>;
};

/** aggregate fields of "daily_horoscope" */
export type Daily_Horoscope_Aggregate_Fields = {
  __typename?: 'daily_horoscope_aggregate_fields';
  avg?: Maybe<Daily_Horoscope_Avg_Fields>;
  count: Scalars['Int']['output'];
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
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
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
  /** on conflict condition */
  on_conflict?: InputMaybe<Daily_Horoscope_On_Conflict>;
};

/** aggregate avg on columns */
export type Daily_Horoscope_Avg_Fields = {
  __typename?: 'daily_horoscope_avg_fields';
  daily_horoscope_id?: Maybe<Scalars['Float']['output']>;
  zodiac_id?: Maybe<Scalars['Float']['output']>;
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
  daily_lucky_colors?: InputMaybe<String_Comparison_Exp>;
  daily_lucky_message?: InputMaybe<String_Comparison_Exp>;
  daily_lucky_numbers?: InputMaybe<String_Comparison_Exp>;
  date?: InputMaybe<Date_Comparison_Exp>;
  deleted_at?: InputMaybe<Timestamp_Comparison_Exp>;
  horoscope_content?: InputMaybe<String_Comparison_Exp>;
  updated_at?: InputMaybe<Timestamp_Comparison_Exp>;
  zodiac?: InputMaybe<Zodiac_Bool_Exp>;
  zodiac_id?: InputMaybe<Int_Comparison_Exp>;
};

/** unique or primary key constraints on table "daily_horoscope" */
export enum Daily_Horoscope_Constraint {
  /** unique or primary key constraint */
  DailyHoroscopePkey = 'daily_horoscope_pkey'
}

/** input type for incrementing numeric columns in table "daily_horoscope" */
export type Daily_Horoscope_Inc_Input = {
  daily_horoscope_id?: InputMaybe<Scalars['Int']['input']>;
  zodiac_id?: InputMaybe<Scalars['Int']['input']>;
};

/** input type for inserting data into table "daily_horoscope" */
export type Daily_Horoscope_Insert_Input = {
  created_at?: InputMaybe<Scalars['timestamp']['input']>;
  daily_career?: InputMaybe<Scalars['String']['input']>;
  daily_finance?: InputMaybe<Scalars['String']['input']>;
  daily_health?: InputMaybe<Scalars['String']['input']>;
  daily_horoscope_id?: InputMaybe<Scalars['Int']['input']>;
  daily_love?: InputMaybe<Scalars['String']['input']>;
  daily_lucky_colors?: InputMaybe<Scalars['String']['input']>;
  daily_lucky_message?: InputMaybe<Scalars['String']['input']>;
  daily_lucky_numbers?: InputMaybe<Scalars['String']['input']>;
  date?: InputMaybe<Scalars['date']['input']>;
  deleted_at?: InputMaybe<Scalars['timestamp']['input']>;
  horoscope_content?: InputMaybe<Scalars['String']['input']>;
  updated_at?: InputMaybe<Scalars['timestamp']['input']>;
  zodiac?: InputMaybe<Zodiac_Obj_Rel_Insert_Input>;
  zodiac_id?: InputMaybe<Scalars['Int']['input']>;
};

/** aggregate max on columns */
export type Daily_Horoscope_Max_Fields = {
  __typename?: 'daily_horoscope_max_fields';
  created_at?: Maybe<Scalars['timestamp']['output']>;
  daily_career?: Maybe<Scalars['String']['output']>;
  daily_finance?: Maybe<Scalars['String']['output']>;
  daily_health?: Maybe<Scalars['String']['output']>;
  daily_horoscope_id?: Maybe<Scalars['Int']['output']>;
  daily_love?: Maybe<Scalars['String']['output']>;
  daily_lucky_colors?: Maybe<Scalars['String']['output']>;
  daily_lucky_message?: Maybe<Scalars['String']['output']>;
  daily_lucky_numbers?: Maybe<Scalars['String']['output']>;
  date?: Maybe<Scalars['date']['output']>;
  deleted_at?: Maybe<Scalars['timestamp']['output']>;
  horoscope_content?: Maybe<Scalars['String']['output']>;
  updated_at?: Maybe<Scalars['timestamp']['output']>;
  zodiac_id?: Maybe<Scalars['Int']['output']>;
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
  daily_lucky_message?: InputMaybe<Order_By>;
  daily_lucky_numbers?: InputMaybe<Order_By>;
  date?: InputMaybe<Order_By>;
  deleted_at?: InputMaybe<Order_By>;
  horoscope_content?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
  zodiac_id?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type Daily_Horoscope_Min_Fields = {
  __typename?: 'daily_horoscope_min_fields';
  created_at?: Maybe<Scalars['timestamp']['output']>;
  daily_career?: Maybe<Scalars['String']['output']>;
  daily_finance?: Maybe<Scalars['String']['output']>;
  daily_health?: Maybe<Scalars['String']['output']>;
  daily_horoscope_id?: Maybe<Scalars['Int']['output']>;
  daily_love?: Maybe<Scalars['String']['output']>;
  daily_lucky_colors?: Maybe<Scalars['String']['output']>;
  daily_lucky_message?: Maybe<Scalars['String']['output']>;
  daily_lucky_numbers?: Maybe<Scalars['String']['output']>;
  date?: Maybe<Scalars['date']['output']>;
  deleted_at?: Maybe<Scalars['timestamp']['output']>;
  horoscope_content?: Maybe<Scalars['String']['output']>;
  updated_at?: Maybe<Scalars['timestamp']['output']>;
  zodiac_id?: Maybe<Scalars['Int']['output']>;
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
  daily_lucky_message?: InputMaybe<Order_By>;
  daily_lucky_numbers?: InputMaybe<Order_By>;
  date?: InputMaybe<Order_By>;
  deleted_at?: InputMaybe<Order_By>;
  horoscope_content?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
  zodiac_id?: InputMaybe<Order_By>;
};

/** response of any mutation on the table "daily_horoscope" */
export type Daily_Horoscope_Mutation_Response = {
  __typename?: 'daily_horoscope_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']['output'];
  /** data from the rows affected by the mutation */
  returning: Array<Daily_Horoscope>;
};

/** on conflict condition type for table "daily_horoscope" */
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
  daily_lucky_message?: InputMaybe<Order_By>;
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
  daily_horoscope_id: Scalars['Int']['input'];
};

/** select columns of table "daily_horoscope" */
export enum Daily_Horoscope_Select_Column {
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  DailyCareer = 'daily_career',
  /** column name */
  DailyFinance = 'daily_finance',
  /** column name */
  DailyHealth = 'daily_health',
  /** column name */
  DailyHoroscopeId = 'daily_horoscope_id',
  /** column name */
  DailyLove = 'daily_love',
  /** column name */
  DailyLuckyColors = 'daily_lucky_colors',
  /** column name */
  DailyLuckyMessage = 'daily_lucky_message',
  /** column name */
  DailyLuckyNumbers = 'daily_lucky_numbers',
  /** column name */
  Date = 'date',
  /** column name */
  DeletedAt = 'deleted_at',
  /** column name */
  HoroscopeContent = 'horoscope_content',
  /** column name */
  UpdatedAt = 'updated_at',
  /** column name */
  ZodiacId = 'zodiac_id'
}

/** input type for updating data in table "daily_horoscope" */
export type Daily_Horoscope_Set_Input = {
  created_at?: InputMaybe<Scalars['timestamp']['input']>;
  daily_career?: InputMaybe<Scalars['String']['input']>;
  daily_finance?: InputMaybe<Scalars['String']['input']>;
  daily_health?: InputMaybe<Scalars['String']['input']>;
  daily_horoscope_id?: InputMaybe<Scalars['Int']['input']>;
  daily_love?: InputMaybe<Scalars['String']['input']>;
  daily_lucky_colors?: InputMaybe<Scalars['String']['input']>;
  daily_lucky_message?: InputMaybe<Scalars['String']['input']>;
  daily_lucky_numbers?: InputMaybe<Scalars['String']['input']>;
  date?: InputMaybe<Scalars['date']['input']>;
  deleted_at?: InputMaybe<Scalars['timestamp']['input']>;
  horoscope_content?: InputMaybe<Scalars['String']['input']>;
  updated_at?: InputMaybe<Scalars['timestamp']['input']>;
  zodiac_id?: InputMaybe<Scalars['Int']['input']>;
};

/** aggregate stddev on columns */
export type Daily_Horoscope_Stddev_Fields = {
  __typename?: 'daily_horoscope_stddev_fields';
  daily_horoscope_id?: Maybe<Scalars['Float']['output']>;
  zodiac_id?: Maybe<Scalars['Float']['output']>;
};

/** order by stddev() on columns of table "daily_horoscope" */
export type Daily_Horoscope_Stddev_Order_By = {
  daily_horoscope_id?: InputMaybe<Order_By>;
  zodiac_id?: InputMaybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type Daily_Horoscope_Stddev_Pop_Fields = {
  __typename?: 'daily_horoscope_stddev_pop_fields';
  daily_horoscope_id?: Maybe<Scalars['Float']['output']>;
  zodiac_id?: Maybe<Scalars['Float']['output']>;
};

/** order by stddev_pop() on columns of table "daily_horoscope" */
export type Daily_Horoscope_Stddev_Pop_Order_By = {
  daily_horoscope_id?: InputMaybe<Order_By>;
  zodiac_id?: InputMaybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type Daily_Horoscope_Stddev_Samp_Fields = {
  __typename?: 'daily_horoscope_stddev_samp_fields';
  daily_horoscope_id?: Maybe<Scalars['Float']['output']>;
  zodiac_id?: Maybe<Scalars['Float']['output']>;
};

/** order by stddev_samp() on columns of table "daily_horoscope" */
export type Daily_Horoscope_Stddev_Samp_Order_By = {
  daily_horoscope_id?: InputMaybe<Order_By>;
  zodiac_id?: InputMaybe<Order_By>;
};

/** aggregate sum on columns */
export type Daily_Horoscope_Sum_Fields = {
  __typename?: 'daily_horoscope_sum_fields';
  daily_horoscope_id?: Maybe<Scalars['Int']['output']>;
  zodiac_id?: Maybe<Scalars['Int']['output']>;
};

/** order by sum() on columns of table "daily_horoscope" */
export type Daily_Horoscope_Sum_Order_By = {
  daily_horoscope_id?: InputMaybe<Order_By>;
  zodiac_id?: InputMaybe<Order_By>;
};

/** update columns of table "daily_horoscope" */
export enum Daily_Horoscope_Update_Column {
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  DailyCareer = 'daily_career',
  /** column name */
  DailyFinance = 'daily_finance',
  /** column name */
  DailyHealth = 'daily_health',
  /** column name */
  DailyHoroscopeId = 'daily_horoscope_id',
  /** column name */
  DailyLove = 'daily_love',
  /** column name */
  DailyLuckyColors = 'daily_lucky_colors',
  /** column name */
  DailyLuckyMessage = 'daily_lucky_message',
  /** column name */
  DailyLuckyNumbers = 'daily_lucky_numbers',
  /** column name */
  Date = 'date',
  /** column name */
  DeletedAt = 'deleted_at',
  /** column name */
  HoroscopeContent = 'horoscope_content',
  /** column name */
  UpdatedAt = 'updated_at',
  /** column name */
  ZodiacId = 'zodiac_id'
}

/** aggregate var_pop on columns */
export type Daily_Horoscope_Var_Pop_Fields = {
  __typename?: 'daily_horoscope_var_pop_fields';
  daily_horoscope_id?: Maybe<Scalars['Float']['output']>;
  zodiac_id?: Maybe<Scalars['Float']['output']>;
};

/** order by var_pop() on columns of table "daily_horoscope" */
export type Daily_Horoscope_Var_Pop_Order_By = {
  daily_horoscope_id?: InputMaybe<Order_By>;
  zodiac_id?: InputMaybe<Order_By>;
};

/** aggregate var_samp on columns */
export type Daily_Horoscope_Var_Samp_Fields = {
  __typename?: 'daily_horoscope_var_samp_fields';
  daily_horoscope_id?: Maybe<Scalars['Float']['output']>;
  zodiac_id?: Maybe<Scalars['Float']['output']>;
};

/** order by var_samp() on columns of table "daily_horoscope" */
export type Daily_Horoscope_Var_Samp_Order_By = {
  daily_horoscope_id?: InputMaybe<Order_By>;
  zodiac_id?: InputMaybe<Order_By>;
};

/** aggregate variance on columns */
export type Daily_Horoscope_Variance_Fields = {
  __typename?: 'daily_horoscope_variance_fields';
  daily_horoscope_id?: Maybe<Scalars['Float']['output']>;
  zodiac_id?: Maybe<Scalars['Float']['output']>;
};

/** order by variance() on columns of table "daily_horoscope" */
export type Daily_Horoscope_Variance_Order_By = {
  daily_horoscope_id?: InputMaybe<Order_By>;
  zodiac_id?: InputMaybe<Order_By>;
};

/** Boolean expression to compare columns of type "date". All fields are combined with logical 'AND'. */
export type Date_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['date']['input']>;
  _gt?: InputMaybe<Scalars['date']['input']>;
  _gte?: InputMaybe<Scalars['date']['input']>;
  _in?: InputMaybe<Array<Scalars['date']['input']>>;
  _is_null?: InputMaybe<Scalars['Boolean']['input']>;
  _lt?: InputMaybe<Scalars['date']['input']>;
  _lte?: InputMaybe<Scalars['date']['input']>;
  _neq?: InputMaybe<Scalars['date']['input']>;
  _nin?: InputMaybe<Array<Scalars['date']['input']>>;
};

export type InfoInput = {
  birthday: Scalars['date']['input'];
  idUser: Scalars['String']['input'];
};

export type InfoOutput = {
  __typename?: 'infoOutput';
  birthdate: Scalars['date']['output'];
  user_id: Scalars['String']['output'];
  zodiac_id: Scalars['String']['output'];
};

/** columns and relationships of "monthly_horoscope" */
export type Monthly_Horoscope = {
  __typename?: 'monthly_horoscope';
  created_at?: Maybe<Scalars['timestamp']['output']>;
  deleted_at?: Maybe<Scalars['timestamp']['output']>;
  horoscope_content?: Maybe<Scalars['String']['output']>;
  month?: Maybe<Scalars['Int']['output']>;
  monthly_career?: Maybe<Scalars['String']['output']>;
  monthly_finance?: Maybe<Scalars['String']['output']>;
  monthly_health?: Maybe<Scalars['String']['output']>;
  monthly_horoscope_id: Scalars['Int']['output'];
  monthly_love?: Maybe<Scalars['String']['output']>;
  monthly_lucky_colors?: Maybe<Scalars['String']['output']>;
  monthly_lucky_message?: Maybe<Scalars['String']['output']>;
  monthly_lucky_numbers?: Maybe<Scalars['String']['output']>;
  updated_at?: Maybe<Scalars['timestamp']['output']>;
  year?: Maybe<Scalars['Int']['output']>;
  /** An object relationship */
  zodiac?: Maybe<Zodiac>;
  zodiac_id?: Maybe<Scalars['Int']['output']>;
};

/** aggregated selection of "monthly_horoscope" */
export type Monthly_Horoscope_Aggregate = {
  __typename?: 'monthly_horoscope_aggregate';
  aggregate?: Maybe<Monthly_Horoscope_Aggregate_Fields>;
  nodes: Array<Monthly_Horoscope>;
};

/** aggregate fields of "monthly_horoscope" */
export type Monthly_Horoscope_Aggregate_Fields = {
  __typename?: 'monthly_horoscope_aggregate_fields';
  avg?: Maybe<Monthly_Horoscope_Avg_Fields>;
  count: Scalars['Int']['output'];
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
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
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
  /** on conflict condition */
  on_conflict?: InputMaybe<Monthly_Horoscope_On_Conflict>;
};

/** aggregate avg on columns */
export type Monthly_Horoscope_Avg_Fields = {
  __typename?: 'monthly_horoscope_avg_fields';
  month?: Maybe<Scalars['Float']['output']>;
  monthly_horoscope_id?: Maybe<Scalars['Float']['output']>;
  year?: Maybe<Scalars['Float']['output']>;
  zodiac_id?: Maybe<Scalars['Float']['output']>;
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
  monthly_lucky_colors?: InputMaybe<String_Comparison_Exp>;
  monthly_lucky_message?: InputMaybe<String_Comparison_Exp>;
  monthly_lucky_numbers?: InputMaybe<String_Comparison_Exp>;
  updated_at?: InputMaybe<Timestamp_Comparison_Exp>;
  year?: InputMaybe<Int_Comparison_Exp>;
  zodiac?: InputMaybe<Zodiac_Bool_Exp>;
  zodiac_id?: InputMaybe<Int_Comparison_Exp>;
};

/** unique or primary key constraints on table "monthly_horoscope" */
export enum Monthly_Horoscope_Constraint {
  /** unique or primary key constraint */
  MonthlyHoroscopePkey = 'monthly_horoscope_pkey'
}

/** input type for incrementing numeric columns in table "monthly_horoscope" */
export type Monthly_Horoscope_Inc_Input = {
  month?: InputMaybe<Scalars['Int']['input']>;
  monthly_horoscope_id?: InputMaybe<Scalars['Int']['input']>;
  year?: InputMaybe<Scalars['Int']['input']>;
  zodiac_id?: InputMaybe<Scalars['Int']['input']>;
};

/** input type for inserting data into table "monthly_horoscope" */
export type Monthly_Horoscope_Insert_Input = {
  created_at?: InputMaybe<Scalars['timestamp']['input']>;
  deleted_at?: InputMaybe<Scalars['timestamp']['input']>;
  horoscope_content?: InputMaybe<Scalars['String']['input']>;
  month?: InputMaybe<Scalars['Int']['input']>;
  monthly_career?: InputMaybe<Scalars['String']['input']>;
  monthly_finance?: InputMaybe<Scalars['String']['input']>;
  monthly_health?: InputMaybe<Scalars['String']['input']>;
  monthly_horoscope_id?: InputMaybe<Scalars['Int']['input']>;
  monthly_love?: InputMaybe<Scalars['String']['input']>;
  monthly_lucky_colors?: InputMaybe<Scalars['String']['input']>;
  monthly_lucky_message?: InputMaybe<Scalars['String']['input']>;
  monthly_lucky_numbers?: InputMaybe<Scalars['String']['input']>;
  updated_at?: InputMaybe<Scalars['timestamp']['input']>;
  year?: InputMaybe<Scalars['Int']['input']>;
  zodiac?: InputMaybe<Zodiac_Obj_Rel_Insert_Input>;
  zodiac_id?: InputMaybe<Scalars['Int']['input']>;
};

/** aggregate max on columns */
export type Monthly_Horoscope_Max_Fields = {
  __typename?: 'monthly_horoscope_max_fields';
  created_at?: Maybe<Scalars['timestamp']['output']>;
  deleted_at?: Maybe<Scalars['timestamp']['output']>;
  horoscope_content?: Maybe<Scalars['String']['output']>;
  month?: Maybe<Scalars['Int']['output']>;
  monthly_career?: Maybe<Scalars['String']['output']>;
  monthly_finance?: Maybe<Scalars['String']['output']>;
  monthly_health?: Maybe<Scalars['String']['output']>;
  monthly_horoscope_id?: Maybe<Scalars['Int']['output']>;
  monthly_love?: Maybe<Scalars['String']['output']>;
  monthly_lucky_colors?: Maybe<Scalars['String']['output']>;
  monthly_lucky_message?: Maybe<Scalars['String']['output']>;
  monthly_lucky_numbers?: Maybe<Scalars['String']['output']>;
  updated_at?: Maybe<Scalars['timestamp']['output']>;
  year?: Maybe<Scalars['Int']['output']>;
  zodiac_id?: Maybe<Scalars['Int']['output']>;
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
  monthly_lucky_message?: InputMaybe<Order_By>;
  monthly_lucky_numbers?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
  year?: InputMaybe<Order_By>;
  zodiac_id?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type Monthly_Horoscope_Min_Fields = {
  __typename?: 'monthly_horoscope_min_fields';
  created_at?: Maybe<Scalars['timestamp']['output']>;
  deleted_at?: Maybe<Scalars['timestamp']['output']>;
  horoscope_content?: Maybe<Scalars['String']['output']>;
  month?: Maybe<Scalars['Int']['output']>;
  monthly_career?: Maybe<Scalars['String']['output']>;
  monthly_finance?: Maybe<Scalars['String']['output']>;
  monthly_health?: Maybe<Scalars['String']['output']>;
  monthly_horoscope_id?: Maybe<Scalars['Int']['output']>;
  monthly_love?: Maybe<Scalars['String']['output']>;
  monthly_lucky_colors?: Maybe<Scalars['String']['output']>;
  monthly_lucky_message?: Maybe<Scalars['String']['output']>;
  monthly_lucky_numbers?: Maybe<Scalars['String']['output']>;
  updated_at?: Maybe<Scalars['timestamp']['output']>;
  year?: Maybe<Scalars['Int']['output']>;
  zodiac_id?: Maybe<Scalars['Int']['output']>;
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
  monthly_lucky_message?: InputMaybe<Order_By>;
  monthly_lucky_numbers?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
  year?: InputMaybe<Order_By>;
  zodiac_id?: InputMaybe<Order_By>;
};

/** response of any mutation on the table "monthly_horoscope" */
export type Monthly_Horoscope_Mutation_Response = {
  __typename?: 'monthly_horoscope_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']['output'];
  /** data from the rows affected by the mutation */
  returning: Array<Monthly_Horoscope>;
};

/** on conflict condition type for table "monthly_horoscope" */
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
  monthly_lucky_message?: InputMaybe<Order_By>;
  monthly_lucky_numbers?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
  year?: InputMaybe<Order_By>;
  zodiac?: InputMaybe<Zodiac_Order_By>;
  zodiac_id?: InputMaybe<Order_By>;
};

/** primary key columns input for table: monthly_horoscope */
export type Monthly_Horoscope_Pk_Columns_Input = {
  monthly_horoscope_id: Scalars['Int']['input'];
};

/** select columns of table "monthly_horoscope" */
export enum Monthly_Horoscope_Select_Column {
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  DeletedAt = 'deleted_at',
  /** column name */
  HoroscopeContent = 'horoscope_content',
  /** column name */
  Month = 'month',
  /** column name */
  MonthlyCareer = 'monthly_career',
  /** column name */
  MonthlyFinance = 'monthly_finance',
  /** column name */
  MonthlyHealth = 'monthly_health',
  /** column name */
  MonthlyHoroscopeId = 'monthly_horoscope_id',
  /** column name */
  MonthlyLove = 'monthly_love',
  /** column name */
  MonthlyLuckyColors = 'monthly_lucky_colors',
  /** column name */
  MonthlyLuckyMessage = 'monthly_lucky_message',
  /** column name */
  MonthlyLuckyNumbers = 'monthly_lucky_numbers',
  /** column name */
  UpdatedAt = 'updated_at',
  /** column name */
  Year = 'year',
  /** column name */
  ZodiacId = 'zodiac_id'
}

/** input type for updating data in table "monthly_horoscope" */
export type Monthly_Horoscope_Set_Input = {
  created_at?: InputMaybe<Scalars['timestamp']['input']>;
  deleted_at?: InputMaybe<Scalars['timestamp']['input']>;
  horoscope_content?: InputMaybe<Scalars['String']['input']>;
  month?: InputMaybe<Scalars['Int']['input']>;
  monthly_career?: InputMaybe<Scalars['String']['input']>;
  monthly_finance?: InputMaybe<Scalars['String']['input']>;
  monthly_health?: InputMaybe<Scalars['String']['input']>;
  monthly_horoscope_id?: InputMaybe<Scalars['Int']['input']>;
  monthly_love?: InputMaybe<Scalars['String']['input']>;
  monthly_lucky_colors?: InputMaybe<Scalars['String']['input']>;
  monthly_lucky_message?: InputMaybe<Scalars['String']['input']>;
  monthly_lucky_numbers?: InputMaybe<Scalars['String']['input']>;
  updated_at?: InputMaybe<Scalars['timestamp']['input']>;
  year?: InputMaybe<Scalars['Int']['input']>;
  zodiac_id?: InputMaybe<Scalars['Int']['input']>;
};

/** aggregate stddev on columns */
export type Monthly_Horoscope_Stddev_Fields = {
  __typename?: 'monthly_horoscope_stddev_fields';
  month?: Maybe<Scalars['Float']['output']>;
  monthly_horoscope_id?: Maybe<Scalars['Float']['output']>;
  year?: Maybe<Scalars['Float']['output']>;
  zodiac_id?: Maybe<Scalars['Float']['output']>;
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
  __typename?: 'monthly_horoscope_stddev_pop_fields';
  month?: Maybe<Scalars['Float']['output']>;
  monthly_horoscope_id?: Maybe<Scalars['Float']['output']>;
  year?: Maybe<Scalars['Float']['output']>;
  zodiac_id?: Maybe<Scalars['Float']['output']>;
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
  __typename?: 'monthly_horoscope_stddev_samp_fields';
  month?: Maybe<Scalars['Float']['output']>;
  monthly_horoscope_id?: Maybe<Scalars['Float']['output']>;
  year?: Maybe<Scalars['Float']['output']>;
  zodiac_id?: Maybe<Scalars['Float']['output']>;
};

/** order by stddev_samp() on columns of table "monthly_horoscope" */
export type Monthly_Horoscope_Stddev_Samp_Order_By = {
  month?: InputMaybe<Order_By>;
  monthly_horoscope_id?: InputMaybe<Order_By>;
  year?: InputMaybe<Order_By>;
  zodiac_id?: InputMaybe<Order_By>;
};

/** aggregate sum on columns */
export type Monthly_Horoscope_Sum_Fields = {
  __typename?: 'monthly_horoscope_sum_fields';
  month?: Maybe<Scalars['Int']['output']>;
  monthly_horoscope_id?: Maybe<Scalars['Int']['output']>;
  year?: Maybe<Scalars['Int']['output']>;
  zodiac_id?: Maybe<Scalars['Int']['output']>;
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
  CreatedAt = 'created_at',
  /** column name */
  DeletedAt = 'deleted_at',
  /** column name */
  HoroscopeContent = 'horoscope_content',
  /** column name */
  Month = 'month',
  /** column name */
  MonthlyCareer = 'monthly_career',
  /** column name */
  MonthlyFinance = 'monthly_finance',
  /** column name */
  MonthlyHealth = 'monthly_health',
  /** column name */
  MonthlyHoroscopeId = 'monthly_horoscope_id',
  /** column name */
  MonthlyLove = 'monthly_love',
  /** column name */
  MonthlyLuckyColors = 'monthly_lucky_colors',
  /** column name */
  MonthlyLuckyMessage = 'monthly_lucky_message',
  /** column name */
  MonthlyLuckyNumbers = 'monthly_lucky_numbers',
  /** column name */
  UpdatedAt = 'updated_at',
  /** column name */
  Year = 'year',
  /** column name */
  ZodiacId = 'zodiac_id'
}

/** aggregate var_pop on columns */
export type Monthly_Horoscope_Var_Pop_Fields = {
  __typename?: 'monthly_horoscope_var_pop_fields';
  month?: Maybe<Scalars['Float']['output']>;
  monthly_horoscope_id?: Maybe<Scalars['Float']['output']>;
  year?: Maybe<Scalars['Float']['output']>;
  zodiac_id?: Maybe<Scalars['Float']['output']>;
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
  __typename?: 'monthly_horoscope_var_samp_fields';
  month?: Maybe<Scalars['Float']['output']>;
  monthly_horoscope_id?: Maybe<Scalars['Float']['output']>;
  year?: Maybe<Scalars['Float']['output']>;
  zodiac_id?: Maybe<Scalars['Float']['output']>;
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
  __typename?: 'monthly_horoscope_variance_fields';
  month?: Maybe<Scalars['Float']['output']>;
  monthly_horoscope_id?: Maybe<Scalars['Float']['output']>;
  year?: Maybe<Scalars['Float']['output']>;
  zodiac_id?: Maybe<Scalars['Float']['output']>;
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
  __typename?: 'mutation_root';
  actionLogin?: Maybe<AuthOutput>;
  actionUpdateBirthday?: Maybe<InfoOutput>;
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
  /** update data of the table: "monthly_horoscope" */
  update_monthly_horoscope?: Maybe<Monthly_Horoscope_Mutation_Response>;
  /** update single row of the table: "monthly_horoscope" */
  update_monthly_horoscope_by_pk?: Maybe<Monthly_Horoscope>;
  /** update data of the table: "users" */
  update_users?: Maybe<Users_Mutation_Response>;
  /** update single row of the table: "users" */
  update_users_by_pk?: Maybe<Users>;
  /** update data of the table: "weekly_horoscope" */
  update_weekly_horoscope?: Maybe<Weekly_Horoscope_Mutation_Response>;
  /** update single row of the table: "weekly_horoscope" */
  update_weekly_horoscope_by_pk?: Maybe<Weekly_Horoscope>;
  /** update data of the table: "zodiac" */
  update_zodiac?: Maybe<Zodiac_Mutation_Response>;
  /** update single row of the table: "zodiac" */
  update_zodiac_by_pk?: Maybe<Zodiac>;
};


/** mutation root */
export type Mutation_RootActionLoginArgs = {
  token: Scalars['String']['input'];
};


/** mutation root */
export type Mutation_RootActionUpdateBirthdayArgs = {
  arg1: InfoInput;
};


/** mutation root */
export type Mutation_RootDelete_Daily_HoroscopeArgs = {
  where: Daily_Horoscope_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Daily_Horoscope_By_PkArgs = {
  daily_horoscope_id: Scalars['Int']['input'];
};


/** mutation root */
export type Mutation_RootDelete_Monthly_HoroscopeArgs = {
  where: Monthly_Horoscope_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Monthly_Horoscope_By_PkArgs = {
  monthly_horoscope_id: Scalars['Int']['input'];
};


/** mutation root */
export type Mutation_RootDelete_UsersArgs = {
  where: Users_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Users_By_PkArgs = {
  user_id: Scalars['Int']['input'];
};


/** mutation root */
export type Mutation_RootDelete_Weekly_HoroscopeArgs = {
  where: Weekly_Horoscope_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Weekly_Horoscope_By_PkArgs = {
  weekly_horoscope_id: Scalars['Int']['input'];
};


/** mutation root */
export type Mutation_RootDelete_ZodiacArgs = {
  where: Zodiac_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Zodiac_By_PkArgs = {
  zodiac_id: Scalars['Int']['input'];
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

/** column ordering options */
export enum Order_By {
  /** in ascending order, nulls last */
  Asc = 'asc',
  /** in ascending order, nulls first */
  AscNullsFirst = 'asc_nulls_first',
  /** in ascending order, nulls last */
  AscNullsLast = 'asc_nulls_last',
  /** in descending order, nulls first */
  Desc = 'desc',
  /** in descending order, nulls first */
  DescNullsFirst = 'desc_nulls_first',
  /** in descending order, nulls last */
  DescNullsLast = 'desc_nulls_last'
}

export type Query_Root = {
  __typename?: 'query_root';
  /** fetch data from the table: "daily_horoscope" */
  daily_horoscope: Array<Daily_Horoscope>;
  /** fetch aggregated fields from the table: "daily_horoscope" */
  daily_horoscope_aggregate: Daily_Horoscope_Aggregate;
  /** fetch data from the table: "daily_horoscope" using primary key columns */
  daily_horoscope_by_pk?: Maybe<Daily_Horoscope>;
  getZodiacByBirthDay?: Maybe<MyOutput>;
  /** fetch data from the table: "monthly_horoscope" */
  monthly_horoscope: Array<Monthly_Horoscope>;
  /** fetch aggregated fields from the table: "monthly_horoscope" */
  monthly_horoscope_aggregate: Monthly_Horoscope_Aggregate;
  /** fetch data from the table: "monthly_horoscope" using primary key columns */
  monthly_horoscope_by_pk?: Maybe<Monthly_Horoscope>;
  /** fetch data from the table: "users" */
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
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Daily_Horoscope_Order_By>>;
  where?: InputMaybe<Daily_Horoscope_Bool_Exp>;
};


export type Query_RootDaily_Horoscope_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Daily_Horoscope_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Daily_Horoscope_Order_By>>;
  where?: InputMaybe<Daily_Horoscope_Bool_Exp>;
};


export type Query_RootDaily_Horoscope_By_PkArgs = {
  daily_horoscope_id: Scalars['Int']['input'];
};


export type Query_RootGetZodiacByBirthDayArgs = {
  date: Scalars['String']['input'];
};


export type Query_RootMonthly_HoroscopeArgs = {
  distinct_on?: InputMaybe<Array<Monthly_Horoscope_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Monthly_Horoscope_Order_By>>;
  where?: InputMaybe<Monthly_Horoscope_Bool_Exp>;
};


export type Query_RootMonthly_Horoscope_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Monthly_Horoscope_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Monthly_Horoscope_Order_By>>;
  where?: InputMaybe<Monthly_Horoscope_Bool_Exp>;
};


export type Query_RootMonthly_Horoscope_By_PkArgs = {
  monthly_horoscope_id: Scalars['Int']['input'];
};


export type Query_RootUsersArgs = {
  distinct_on?: InputMaybe<Array<Users_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Users_Order_By>>;
  where?: InputMaybe<Users_Bool_Exp>;
};


export type Query_RootUsers_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Users_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Users_Order_By>>;
  where?: InputMaybe<Users_Bool_Exp>;
};


export type Query_RootUsers_By_PkArgs = {
  user_id: Scalars['Int']['input'];
};


export type Query_RootWeekly_HoroscopeArgs = {
  distinct_on?: InputMaybe<Array<Weekly_Horoscope_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Weekly_Horoscope_Order_By>>;
  where?: InputMaybe<Weekly_Horoscope_Bool_Exp>;
};


export type Query_RootWeekly_Horoscope_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Weekly_Horoscope_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Weekly_Horoscope_Order_By>>;
  where?: InputMaybe<Weekly_Horoscope_Bool_Exp>;
};


export type Query_RootWeekly_Horoscope_By_PkArgs = {
  weekly_horoscope_id: Scalars['Int']['input'];
};


export type Query_RootZodiacArgs = {
  distinct_on?: InputMaybe<Array<Zodiac_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Zodiac_Order_By>>;
  where?: InputMaybe<Zodiac_Bool_Exp>;
};


export type Query_RootZodiac_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Zodiac_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Zodiac_Order_By>>;
  where?: InputMaybe<Zodiac_Bool_Exp>;
};


export type Query_RootZodiac_By_PkArgs = {
  zodiac_id: Scalars['Int']['input'];
};

export type Subscription_Root = {
  __typename?: 'subscription_root';
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
  /** fetch data from the table: "users" */
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


export type Subscription_RootDaily_HoroscopeArgs = {
  distinct_on?: InputMaybe<Array<Daily_Horoscope_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Daily_Horoscope_Order_By>>;
  where?: InputMaybe<Daily_Horoscope_Bool_Exp>;
};


export type Subscription_RootDaily_Horoscope_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Daily_Horoscope_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Daily_Horoscope_Order_By>>;
  where?: InputMaybe<Daily_Horoscope_Bool_Exp>;
};


export type Subscription_RootDaily_Horoscope_By_PkArgs = {
  daily_horoscope_id: Scalars['Int']['input'];
};


export type Subscription_RootMonthly_HoroscopeArgs = {
  distinct_on?: InputMaybe<Array<Monthly_Horoscope_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Monthly_Horoscope_Order_By>>;
  where?: InputMaybe<Monthly_Horoscope_Bool_Exp>;
};


export type Subscription_RootMonthly_Horoscope_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Monthly_Horoscope_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Monthly_Horoscope_Order_By>>;
  where?: InputMaybe<Monthly_Horoscope_Bool_Exp>;
};


export type Subscription_RootMonthly_Horoscope_By_PkArgs = {
  monthly_horoscope_id: Scalars['Int']['input'];
};


export type Subscription_RootUsersArgs = {
  distinct_on?: InputMaybe<Array<Users_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Users_Order_By>>;
  where?: InputMaybe<Users_Bool_Exp>;
};


export type Subscription_RootUsers_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Users_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Users_Order_By>>;
  where?: InputMaybe<Users_Bool_Exp>;
};


export type Subscription_RootUsers_By_PkArgs = {
  user_id: Scalars['Int']['input'];
};


export type Subscription_RootWeekly_HoroscopeArgs = {
  distinct_on?: InputMaybe<Array<Weekly_Horoscope_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Weekly_Horoscope_Order_By>>;
  where?: InputMaybe<Weekly_Horoscope_Bool_Exp>;
};


export type Subscription_RootWeekly_Horoscope_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Weekly_Horoscope_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Weekly_Horoscope_Order_By>>;
  where?: InputMaybe<Weekly_Horoscope_Bool_Exp>;
};


export type Subscription_RootWeekly_Horoscope_By_PkArgs = {
  weekly_horoscope_id: Scalars['Int']['input'];
};


export type Subscription_RootZodiacArgs = {
  distinct_on?: InputMaybe<Array<Zodiac_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Zodiac_Order_By>>;
  where?: InputMaybe<Zodiac_Bool_Exp>;
};


export type Subscription_RootZodiac_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Zodiac_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Zodiac_Order_By>>;
  where?: InputMaybe<Zodiac_Bool_Exp>;
};


export type Subscription_RootZodiac_By_PkArgs = {
  zodiac_id: Scalars['Int']['input'];
};

/** Boolean expression to compare columns of type "timestamp". All fields are combined with logical 'AND'. */
export type Timestamp_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['timestamp']['input']>;
  _gt?: InputMaybe<Scalars['timestamp']['input']>;
  _gte?: InputMaybe<Scalars['timestamp']['input']>;
  _in?: InputMaybe<Array<Scalars['timestamp']['input']>>;
  _is_null?: InputMaybe<Scalars['Boolean']['input']>;
  _lt?: InputMaybe<Scalars['timestamp']['input']>;
  _lte?: InputMaybe<Scalars['timestamp']['input']>;
  _neq?: InputMaybe<Scalars['timestamp']['input']>;
  _nin?: InputMaybe<Array<Scalars['timestamp']['input']>>;
};

/** columns and relationships of "users" */
export type Users = {
  __typename?: 'users';
  birthdate?: Maybe<Scalars['date']['output']>;
  created_at?: Maybe<Scalars['timestamp']['output']>;
  deleted_at?: Maybe<Scalars['timestamp']['output']>;
  full_name?: Maybe<Scalars['String']['output']>;
  phone_number?: Maybe<Scalars['String']['output']>;
  updated_at?: Maybe<Scalars['timestamp']['output']>;
  user_id: Scalars['Int']['output'];
  username?: Maybe<Scalars['String']['output']>;
  zalo_id?: Maybe<Scalars['String']['output']>;
  /** An object relationship */
  zodiac?: Maybe<Zodiac>;
  zodiac_id?: Maybe<Scalars['Int']['output']>;
};

/** aggregated selection of "users" */
export type Users_Aggregate = {
  __typename?: 'users_aggregate';
  aggregate?: Maybe<Users_Aggregate_Fields>;
  nodes: Array<Users>;
};

/** aggregate fields of "users" */
export type Users_Aggregate_Fields = {
  __typename?: 'users_aggregate_fields';
  avg?: Maybe<Users_Avg_Fields>;
  count: Scalars['Int']['output'];
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
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
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
  /** on conflict condition */
  on_conflict?: InputMaybe<Users_On_Conflict>;
};

/** aggregate avg on columns */
export type Users_Avg_Fields = {
  __typename?: 'users_avg_fields';
  user_id?: Maybe<Scalars['Float']['output']>;
  zodiac_id?: Maybe<Scalars['Float']['output']>;
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
  /** unique or primary key constraint */
  UsersPkey = 'users_pkey'
}

/** input type for incrementing numeric columns in table "users" */
export type Users_Inc_Input = {
  user_id?: InputMaybe<Scalars['Int']['input']>;
  zodiac_id?: InputMaybe<Scalars['Int']['input']>;
};

/** input type for inserting data into table "users" */
export type Users_Insert_Input = {
  birthdate?: InputMaybe<Scalars['date']['input']>;
  created_at?: InputMaybe<Scalars['timestamp']['input']>;
  deleted_at?: InputMaybe<Scalars['timestamp']['input']>;
  full_name?: InputMaybe<Scalars['String']['input']>;
  phone_number?: InputMaybe<Scalars['String']['input']>;
  updated_at?: InputMaybe<Scalars['timestamp']['input']>;
  user_id?: InputMaybe<Scalars['Int']['input']>;
  username?: InputMaybe<Scalars['String']['input']>;
  zalo_id?: InputMaybe<Scalars['String']['input']>;
  zodiac?: InputMaybe<Zodiac_Obj_Rel_Insert_Input>;
  zodiac_id?: InputMaybe<Scalars['Int']['input']>;
};

/** aggregate max on columns */
export type Users_Max_Fields = {
  __typename?: 'users_max_fields';
  birthdate?: Maybe<Scalars['date']['output']>;
  created_at?: Maybe<Scalars['timestamp']['output']>;
  deleted_at?: Maybe<Scalars['timestamp']['output']>;
  full_name?: Maybe<Scalars['String']['output']>;
  phone_number?: Maybe<Scalars['String']['output']>;
  updated_at?: Maybe<Scalars['timestamp']['output']>;
  user_id?: Maybe<Scalars['Int']['output']>;
  username?: Maybe<Scalars['String']['output']>;
  zalo_id?: Maybe<Scalars['String']['output']>;
  zodiac_id?: Maybe<Scalars['Int']['output']>;
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
  __typename?: 'users_min_fields';
  birthdate?: Maybe<Scalars['date']['output']>;
  created_at?: Maybe<Scalars['timestamp']['output']>;
  deleted_at?: Maybe<Scalars['timestamp']['output']>;
  full_name?: Maybe<Scalars['String']['output']>;
  phone_number?: Maybe<Scalars['String']['output']>;
  updated_at?: Maybe<Scalars['timestamp']['output']>;
  user_id?: Maybe<Scalars['Int']['output']>;
  username?: Maybe<Scalars['String']['output']>;
  zalo_id?: Maybe<Scalars['String']['output']>;
  zodiac_id?: Maybe<Scalars['Int']['output']>;
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
  __typename?: 'users_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']['output'];
  /** data from the rows affected by the mutation */
  returning: Array<Users>;
};

/** on conflict condition type for table "users" */
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
  user_id: Scalars['Int']['input'];
};

/** select columns of table "users" */
export enum Users_Select_Column {
  /** column name */
  Birthdate = 'birthdate',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  DeletedAt = 'deleted_at',
  /** column name */
  FullName = 'full_name',
  /** column name */
  PhoneNumber = 'phone_number',
  /** column name */
  UpdatedAt = 'updated_at',
  /** column name */
  UserId = 'user_id',
  /** column name */
  Username = 'username',
  /** column name */
  ZaloId = 'zalo_id',
  /** column name */
  ZodiacId = 'zodiac_id'
}

/** input type for updating data in table "users" */
export type Users_Set_Input = {
  birthdate?: InputMaybe<Scalars['date']['input']>;
  created_at?: InputMaybe<Scalars['timestamp']['input']>;
  deleted_at?: InputMaybe<Scalars['timestamp']['input']>;
  full_name?: InputMaybe<Scalars['String']['input']>;
  phone_number?: InputMaybe<Scalars['String']['input']>;
  updated_at?: InputMaybe<Scalars['timestamp']['input']>;
  user_id?: InputMaybe<Scalars['Int']['input']>;
  username?: InputMaybe<Scalars['String']['input']>;
  zalo_id?: InputMaybe<Scalars['String']['input']>;
  zodiac_id?: InputMaybe<Scalars['Int']['input']>;
};

/** aggregate stddev on columns */
export type Users_Stddev_Fields = {
  __typename?: 'users_stddev_fields';
  user_id?: Maybe<Scalars['Float']['output']>;
  zodiac_id?: Maybe<Scalars['Float']['output']>;
};

/** order by stddev() on columns of table "users" */
export type Users_Stddev_Order_By = {
  user_id?: InputMaybe<Order_By>;
  zodiac_id?: InputMaybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type Users_Stddev_Pop_Fields = {
  __typename?: 'users_stddev_pop_fields';
  user_id?: Maybe<Scalars['Float']['output']>;
  zodiac_id?: Maybe<Scalars['Float']['output']>;
};

/** order by stddev_pop() on columns of table "users" */
export type Users_Stddev_Pop_Order_By = {
  user_id?: InputMaybe<Order_By>;
  zodiac_id?: InputMaybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type Users_Stddev_Samp_Fields = {
  __typename?: 'users_stddev_samp_fields';
  user_id?: Maybe<Scalars['Float']['output']>;
  zodiac_id?: Maybe<Scalars['Float']['output']>;
};

/** order by stddev_samp() on columns of table "users" */
export type Users_Stddev_Samp_Order_By = {
  user_id?: InputMaybe<Order_By>;
  zodiac_id?: InputMaybe<Order_By>;
};

/** aggregate sum on columns */
export type Users_Sum_Fields = {
  __typename?: 'users_sum_fields';
  user_id?: Maybe<Scalars['Int']['output']>;
  zodiac_id?: Maybe<Scalars['Int']['output']>;
};

/** order by sum() on columns of table "users" */
export type Users_Sum_Order_By = {
  user_id?: InputMaybe<Order_By>;
  zodiac_id?: InputMaybe<Order_By>;
};

/** update columns of table "users" */
export enum Users_Update_Column {
  /** column name */
  Birthdate = 'birthdate',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  DeletedAt = 'deleted_at',
  /** column name */
  FullName = 'full_name',
  /** column name */
  PhoneNumber = 'phone_number',
  /** column name */
  UpdatedAt = 'updated_at',
  /** column name */
  UserId = 'user_id',
  /** column name */
  Username = 'username',
  /** column name */
  ZaloId = 'zalo_id',
  /** column name */
  ZodiacId = 'zodiac_id'
}

/** aggregate var_pop on columns */
export type Users_Var_Pop_Fields = {
  __typename?: 'users_var_pop_fields';
  user_id?: Maybe<Scalars['Float']['output']>;
  zodiac_id?: Maybe<Scalars['Float']['output']>;
};

/** order by var_pop() on columns of table "users" */
export type Users_Var_Pop_Order_By = {
  user_id?: InputMaybe<Order_By>;
  zodiac_id?: InputMaybe<Order_By>;
};

/** aggregate var_samp on columns */
export type Users_Var_Samp_Fields = {
  __typename?: 'users_var_samp_fields';
  user_id?: Maybe<Scalars['Float']['output']>;
  zodiac_id?: Maybe<Scalars['Float']['output']>;
};

/** order by var_samp() on columns of table "users" */
export type Users_Var_Samp_Order_By = {
  user_id?: InputMaybe<Order_By>;
  zodiac_id?: InputMaybe<Order_By>;
};

/** aggregate variance on columns */
export type Users_Variance_Fields = {
  __typename?: 'users_variance_fields';
  user_id?: Maybe<Scalars['Float']['output']>;
  zodiac_id?: Maybe<Scalars['Float']['output']>;
};

/** order by variance() on columns of table "users" */
export type Users_Variance_Order_By = {
  user_id?: InputMaybe<Order_By>;
  zodiac_id?: InputMaybe<Order_By>;
};

/** columns and relationships of "weekly_horoscope" */
export type Weekly_Horoscope = {
  __typename?: 'weekly_horoscope';
  created_at?: Maybe<Scalars['timestamp']['output']>;
  deleted_at?: Maybe<Scalars['timestamp']['output']>;
  horoscope_content?: Maybe<Scalars['String']['output']>;
  updated_at?: Maybe<Scalars['timestamp']['output']>;
  week_end_date?: Maybe<Scalars['date']['output']>;
  week_start_date?: Maybe<Scalars['date']['output']>;
  weekly_career?: Maybe<Scalars['String']['output']>;
  weekly_finance?: Maybe<Scalars['String']['output']>;
  weekly_health?: Maybe<Scalars['String']['output']>;
  weekly_horoscope_id: Scalars['Int']['output'];
  weekly_love?: Maybe<Scalars['String']['output']>;
  weekly_lucky_colors?: Maybe<Scalars['String']['output']>;
  weekly_lucky_message?: Maybe<Scalars['String']['output']>;
  weekly_lucky_numbers?: Maybe<Scalars['String']['output']>;
  /** An object relationship */
  zodiac?: Maybe<Zodiac>;
  zodiac_id?: Maybe<Scalars['Int']['output']>;
};

/** aggregated selection of "weekly_horoscope" */
export type Weekly_Horoscope_Aggregate = {
  __typename?: 'weekly_horoscope_aggregate';
  aggregate?: Maybe<Weekly_Horoscope_Aggregate_Fields>;
  nodes: Array<Weekly_Horoscope>;
};

/** aggregate fields of "weekly_horoscope" */
export type Weekly_Horoscope_Aggregate_Fields = {
  __typename?: 'weekly_horoscope_aggregate_fields';
  avg?: Maybe<Weekly_Horoscope_Avg_Fields>;
  count: Scalars['Int']['output'];
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
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
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
  /** on conflict condition */
  on_conflict?: InputMaybe<Weekly_Horoscope_On_Conflict>;
};

/** aggregate avg on columns */
export type Weekly_Horoscope_Avg_Fields = {
  __typename?: 'weekly_horoscope_avg_fields';
  weekly_horoscope_id?: Maybe<Scalars['Float']['output']>;
  zodiac_id?: Maybe<Scalars['Float']['output']>;
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
  weekly_lucky_colors?: InputMaybe<String_Comparison_Exp>;
  weekly_lucky_message?: InputMaybe<String_Comparison_Exp>;
  weekly_lucky_numbers?: InputMaybe<String_Comparison_Exp>;
  zodiac?: InputMaybe<Zodiac_Bool_Exp>;
  zodiac_id?: InputMaybe<Int_Comparison_Exp>;
};

/** unique or primary key constraints on table "weekly_horoscope" */
export enum Weekly_Horoscope_Constraint {
  /** unique or primary key constraint */
  WeeklyHoroscopePkey = 'weekly_horoscope_pkey'
}

/** input type for incrementing numeric columns in table "weekly_horoscope" */
export type Weekly_Horoscope_Inc_Input = {
  weekly_horoscope_id?: InputMaybe<Scalars['Int']['input']>;
  zodiac_id?: InputMaybe<Scalars['Int']['input']>;
};

/** input type for inserting data into table "weekly_horoscope" */
export type Weekly_Horoscope_Insert_Input = {
  created_at?: InputMaybe<Scalars['timestamp']['input']>;
  deleted_at?: InputMaybe<Scalars['timestamp']['input']>;
  horoscope_content?: InputMaybe<Scalars['String']['input']>;
  updated_at?: InputMaybe<Scalars['timestamp']['input']>;
  week_end_date?: InputMaybe<Scalars['date']['input']>;
  week_start_date?: InputMaybe<Scalars['date']['input']>;
  weekly_career?: InputMaybe<Scalars['String']['input']>;
  weekly_finance?: InputMaybe<Scalars['String']['input']>;
  weekly_health?: InputMaybe<Scalars['String']['input']>;
  weekly_horoscope_id?: InputMaybe<Scalars['Int']['input']>;
  weekly_love?: InputMaybe<Scalars['String']['input']>;
  weekly_lucky_colors?: InputMaybe<Scalars['String']['input']>;
  weekly_lucky_message?: InputMaybe<Scalars['String']['input']>;
  weekly_lucky_numbers?: InputMaybe<Scalars['String']['input']>;
  zodiac?: InputMaybe<Zodiac_Obj_Rel_Insert_Input>;
  zodiac_id?: InputMaybe<Scalars['Int']['input']>;
};

/** aggregate max on columns */
export type Weekly_Horoscope_Max_Fields = {
  __typename?: 'weekly_horoscope_max_fields';
  created_at?: Maybe<Scalars['timestamp']['output']>;
  deleted_at?: Maybe<Scalars['timestamp']['output']>;
  horoscope_content?: Maybe<Scalars['String']['output']>;
  updated_at?: Maybe<Scalars['timestamp']['output']>;
  week_end_date?: Maybe<Scalars['date']['output']>;
  week_start_date?: Maybe<Scalars['date']['output']>;
  weekly_career?: Maybe<Scalars['String']['output']>;
  weekly_finance?: Maybe<Scalars['String']['output']>;
  weekly_health?: Maybe<Scalars['String']['output']>;
  weekly_horoscope_id?: Maybe<Scalars['Int']['output']>;
  weekly_love?: Maybe<Scalars['String']['output']>;
  weekly_lucky_colors?: Maybe<Scalars['String']['output']>;
  weekly_lucky_message?: Maybe<Scalars['String']['output']>;
  weekly_lucky_numbers?: Maybe<Scalars['String']['output']>;
  zodiac_id?: Maybe<Scalars['Int']['output']>;
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
  weekly_lucky_message?: InputMaybe<Order_By>;
  weekly_lucky_numbers?: InputMaybe<Order_By>;
  zodiac_id?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type Weekly_Horoscope_Min_Fields = {
  __typename?: 'weekly_horoscope_min_fields';
  created_at?: Maybe<Scalars['timestamp']['output']>;
  deleted_at?: Maybe<Scalars['timestamp']['output']>;
  horoscope_content?: Maybe<Scalars['String']['output']>;
  updated_at?: Maybe<Scalars['timestamp']['output']>;
  week_end_date?: Maybe<Scalars['date']['output']>;
  week_start_date?: Maybe<Scalars['date']['output']>;
  weekly_career?: Maybe<Scalars['String']['output']>;
  weekly_finance?: Maybe<Scalars['String']['output']>;
  weekly_health?: Maybe<Scalars['String']['output']>;
  weekly_horoscope_id?: Maybe<Scalars['Int']['output']>;
  weekly_love?: Maybe<Scalars['String']['output']>;
  weekly_lucky_colors?: Maybe<Scalars['String']['output']>;
  weekly_lucky_message?: Maybe<Scalars['String']['output']>;
  weekly_lucky_numbers?: Maybe<Scalars['String']['output']>;
  zodiac_id?: Maybe<Scalars['Int']['output']>;
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
  weekly_lucky_message?: InputMaybe<Order_By>;
  weekly_lucky_numbers?: InputMaybe<Order_By>;
  zodiac_id?: InputMaybe<Order_By>;
};

/** response of any mutation on the table "weekly_horoscope" */
export type Weekly_Horoscope_Mutation_Response = {
  __typename?: 'weekly_horoscope_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']['output'];
  /** data from the rows affected by the mutation */
  returning: Array<Weekly_Horoscope>;
};

/** on conflict condition type for table "weekly_horoscope" */
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
  weekly_lucky_message?: InputMaybe<Order_By>;
  weekly_lucky_numbers?: InputMaybe<Order_By>;
  zodiac?: InputMaybe<Zodiac_Order_By>;
  zodiac_id?: InputMaybe<Order_By>;
};

/** primary key columns input for table: weekly_horoscope */
export type Weekly_Horoscope_Pk_Columns_Input = {
  weekly_horoscope_id: Scalars['Int']['input'];
};

/** select columns of table "weekly_horoscope" */
export enum Weekly_Horoscope_Select_Column {
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  DeletedAt = 'deleted_at',
  /** column name */
  HoroscopeContent = 'horoscope_content',
  /** column name */
  UpdatedAt = 'updated_at',
  /** column name */
  WeekEndDate = 'week_end_date',
  /** column name */
  WeekStartDate = 'week_start_date',
  /** column name */
  WeeklyCareer = 'weekly_career',
  /** column name */
  WeeklyFinance = 'weekly_finance',
  /** column name */
  WeeklyHealth = 'weekly_health',
  /** column name */
  WeeklyHoroscopeId = 'weekly_horoscope_id',
  /** column name */
  WeeklyLove = 'weekly_love',
  /** column name */
  WeeklyLuckyColors = 'weekly_lucky_colors',
  /** column name */
  WeeklyLuckyMessage = 'weekly_lucky_message',
  /** column name */
  WeeklyLuckyNumbers = 'weekly_lucky_numbers',
  /** column name */
  ZodiacId = 'zodiac_id'
}

/** input type for updating data in table "weekly_horoscope" */
export type Weekly_Horoscope_Set_Input = {
  created_at?: InputMaybe<Scalars['timestamp']['input']>;
  deleted_at?: InputMaybe<Scalars['timestamp']['input']>;
  horoscope_content?: InputMaybe<Scalars['String']['input']>;
  updated_at?: InputMaybe<Scalars['timestamp']['input']>;
  week_end_date?: InputMaybe<Scalars['date']['input']>;
  week_start_date?: InputMaybe<Scalars['date']['input']>;
  weekly_career?: InputMaybe<Scalars['String']['input']>;
  weekly_finance?: InputMaybe<Scalars['String']['input']>;
  weekly_health?: InputMaybe<Scalars['String']['input']>;
  weekly_horoscope_id?: InputMaybe<Scalars['Int']['input']>;
  weekly_love?: InputMaybe<Scalars['String']['input']>;
  weekly_lucky_colors?: InputMaybe<Scalars['String']['input']>;
  weekly_lucky_message?: InputMaybe<Scalars['String']['input']>;
  weekly_lucky_numbers?: InputMaybe<Scalars['String']['input']>;
  zodiac_id?: InputMaybe<Scalars['Int']['input']>;
};

/** aggregate stddev on columns */
export type Weekly_Horoscope_Stddev_Fields = {
  __typename?: 'weekly_horoscope_stddev_fields';
  weekly_horoscope_id?: Maybe<Scalars['Float']['output']>;
  zodiac_id?: Maybe<Scalars['Float']['output']>;
};

/** order by stddev() on columns of table "weekly_horoscope" */
export type Weekly_Horoscope_Stddev_Order_By = {
  weekly_horoscope_id?: InputMaybe<Order_By>;
  zodiac_id?: InputMaybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type Weekly_Horoscope_Stddev_Pop_Fields = {
  __typename?: 'weekly_horoscope_stddev_pop_fields';
  weekly_horoscope_id?: Maybe<Scalars['Float']['output']>;
  zodiac_id?: Maybe<Scalars['Float']['output']>;
};

/** order by stddev_pop() on columns of table "weekly_horoscope" */
export type Weekly_Horoscope_Stddev_Pop_Order_By = {
  weekly_horoscope_id?: InputMaybe<Order_By>;
  zodiac_id?: InputMaybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type Weekly_Horoscope_Stddev_Samp_Fields = {
  __typename?: 'weekly_horoscope_stddev_samp_fields';
  weekly_horoscope_id?: Maybe<Scalars['Float']['output']>;
  zodiac_id?: Maybe<Scalars['Float']['output']>;
};

/** order by stddev_samp() on columns of table "weekly_horoscope" */
export type Weekly_Horoscope_Stddev_Samp_Order_By = {
  weekly_horoscope_id?: InputMaybe<Order_By>;
  zodiac_id?: InputMaybe<Order_By>;
};

/** aggregate sum on columns */
export type Weekly_Horoscope_Sum_Fields = {
  __typename?: 'weekly_horoscope_sum_fields';
  weekly_horoscope_id?: Maybe<Scalars['Int']['output']>;
  zodiac_id?: Maybe<Scalars['Int']['output']>;
};

/** order by sum() on columns of table "weekly_horoscope" */
export type Weekly_Horoscope_Sum_Order_By = {
  weekly_horoscope_id?: InputMaybe<Order_By>;
  zodiac_id?: InputMaybe<Order_By>;
};

/** update columns of table "weekly_horoscope" */
export enum Weekly_Horoscope_Update_Column {
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  DeletedAt = 'deleted_at',
  /** column name */
  HoroscopeContent = 'horoscope_content',
  /** column name */
  UpdatedAt = 'updated_at',
  /** column name */
  WeekEndDate = 'week_end_date',
  /** column name */
  WeekStartDate = 'week_start_date',
  /** column name */
  WeeklyCareer = 'weekly_career',
  /** column name */
  WeeklyFinance = 'weekly_finance',
  /** column name */
  WeeklyHealth = 'weekly_health',
  /** column name */
  WeeklyHoroscopeId = 'weekly_horoscope_id',
  /** column name */
  WeeklyLove = 'weekly_love',
  /** column name */
  WeeklyLuckyColors = 'weekly_lucky_colors',
  /** column name */
  WeeklyLuckyMessage = 'weekly_lucky_message',
  /** column name */
  WeeklyLuckyNumbers = 'weekly_lucky_numbers',
  /** column name */
  ZodiacId = 'zodiac_id'
}

/** aggregate var_pop on columns */
export type Weekly_Horoscope_Var_Pop_Fields = {
  __typename?: 'weekly_horoscope_var_pop_fields';
  weekly_horoscope_id?: Maybe<Scalars['Float']['output']>;
  zodiac_id?: Maybe<Scalars['Float']['output']>;
};

/** order by var_pop() on columns of table "weekly_horoscope" */
export type Weekly_Horoscope_Var_Pop_Order_By = {
  weekly_horoscope_id?: InputMaybe<Order_By>;
  zodiac_id?: InputMaybe<Order_By>;
};

/** aggregate var_samp on columns */
export type Weekly_Horoscope_Var_Samp_Fields = {
  __typename?: 'weekly_horoscope_var_samp_fields';
  weekly_horoscope_id?: Maybe<Scalars['Float']['output']>;
  zodiac_id?: Maybe<Scalars['Float']['output']>;
};

/** order by var_samp() on columns of table "weekly_horoscope" */
export type Weekly_Horoscope_Var_Samp_Order_By = {
  weekly_horoscope_id?: InputMaybe<Order_By>;
  zodiac_id?: InputMaybe<Order_By>;
};

/** aggregate variance on columns */
export type Weekly_Horoscope_Variance_Fields = {
  __typename?: 'weekly_horoscope_variance_fields';
  weekly_horoscope_id?: Maybe<Scalars['Float']['output']>;
  zodiac_id?: Maybe<Scalars['Float']['output']>;
};

/** order by variance() on columns of table "weekly_horoscope" */
export type Weekly_Horoscope_Variance_Order_By = {
  weekly_horoscope_id?: InputMaybe<Order_By>;
  zodiac_id?: InputMaybe<Order_By>;
};

/** columns and relationships of "zodiac" */
export type Zodiac = {
  __typename?: 'zodiac';
  created_at?: Maybe<Scalars['timestamp']['output']>;
  /** An array relationship */
  daily_horoscopes: Array<Daily_Horoscope>;
  /** An aggregate relationship */
  daily_horoscopes_aggregate: Daily_Horoscope_Aggregate;
  deleted_at?: Maybe<Scalars['timestamp']['output']>;
  description?: Maybe<Scalars['String']['output']>;
  end_date?: Maybe<Scalars['date']['output']>;
  large_image_url?: Maybe<Scalars['String']['output']>;
  /** An array relationship */
  monthly_horoscopes: Array<Monthly_Horoscope>;
  /** An aggregate relationship */
  monthly_horoscopes_aggregate: Monthly_Horoscope_Aggregate;
  name_en?: Maybe<Scalars['String']['output']>;
  name_vi?: Maybe<Scalars['String']['output']>;
  small_image_url?: Maybe<Scalars['String']['output']>;
  start_date?: Maybe<Scalars['date']['output']>;
  strengths?: Maybe<Scalars['String']['output']>;
  symbol_url?: Maybe<Scalars['String']['output']>;
  updated_at?: Maybe<Scalars['timestamp']['output']>;
  /** fetch data from the table: "users" */
  users: Array<Users>;
  /** An aggregate relationship */
  users_aggregate: Users_Aggregate;
  weaknesses?: Maybe<Scalars['String']['output']>;
  /** An array relationship */
  weekly_horoscopes: Array<Weekly_Horoscope>;
  /** An aggregate relationship */
  weekly_horoscopes_aggregate: Weekly_Horoscope_Aggregate;
  zodiac_id: Scalars['Int']['output'];
};


/** columns and relationships of "zodiac" */
export type ZodiacDaily_HoroscopesArgs = {
  distinct_on?: InputMaybe<Array<Daily_Horoscope_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Daily_Horoscope_Order_By>>;
  where?: InputMaybe<Daily_Horoscope_Bool_Exp>;
};


/** columns and relationships of "zodiac" */
export type ZodiacDaily_Horoscopes_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Daily_Horoscope_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Daily_Horoscope_Order_By>>;
  where?: InputMaybe<Daily_Horoscope_Bool_Exp>;
};


/** columns and relationships of "zodiac" */
export type ZodiacMonthly_HoroscopesArgs = {
  distinct_on?: InputMaybe<Array<Monthly_Horoscope_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Monthly_Horoscope_Order_By>>;
  where?: InputMaybe<Monthly_Horoscope_Bool_Exp>;
};


/** columns and relationships of "zodiac" */
export type ZodiacMonthly_Horoscopes_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Monthly_Horoscope_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Monthly_Horoscope_Order_By>>;
  where?: InputMaybe<Monthly_Horoscope_Bool_Exp>;
};


/** columns and relationships of "zodiac" */
export type ZodiacUsersArgs = {
  distinct_on?: InputMaybe<Array<Users_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Users_Order_By>>;
  where?: InputMaybe<Users_Bool_Exp>;
};


/** columns and relationships of "zodiac" */
export type ZodiacUsers_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Users_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Users_Order_By>>;
  where?: InputMaybe<Users_Bool_Exp>;
};


/** columns and relationships of "zodiac" */
export type ZodiacWeekly_HoroscopesArgs = {
  distinct_on?: InputMaybe<Array<Weekly_Horoscope_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Weekly_Horoscope_Order_By>>;
  where?: InputMaybe<Weekly_Horoscope_Bool_Exp>;
};


/** columns and relationships of "zodiac" */
export type ZodiacWeekly_Horoscopes_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Weekly_Horoscope_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Weekly_Horoscope_Order_By>>;
  where?: InputMaybe<Weekly_Horoscope_Bool_Exp>;
};

/** aggregated selection of "zodiac" */
export type Zodiac_Aggregate = {
  __typename?: 'zodiac_aggregate';
  aggregate?: Maybe<Zodiac_Aggregate_Fields>;
  nodes: Array<Zodiac>;
};

/** aggregate fields of "zodiac" */
export type Zodiac_Aggregate_Fields = {
  __typename?: 'zodiac_aggregate_fields';
  avg?: Maybe<Zodiac_Avg_Fields>;
  count: Scalars['Int']['output'];
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
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** aggregate avg on columns */
export type Zodiac_Avg_Fields = {
  __typename?: 'zodiac_avg_fields';
  zodiac_id?: Maybe<Scalars['Float']['output']>;
};

/** Boolean expression to filter rows from the table "zodiac". All fields are combined with a logical 'AND'. */
export type Zodiac_Bool_Exp = {
  _and?: InputMaybe<Array<Zodiac_Bool_Exp>>;
  _not?: InputMaybe<Zodiac_Bool_Exp>;
  _or?: InputMaybe<Array<Zodiac_Bool_Exp>>;
  created_at?: InputMaybe<Timestamp_Comparison_Exp>;
  daily_horoscopes?: InputMaybe<Daily_Horoscope_Bool_Exp>;
  deleted_at?: InputMaybe<Timestamp_Comparison_Exp>;
  description?: InputMaybe<String_Comparison_Exp>;
  end_date?: InputMaybe<Date_Comparison_Exp>;
  large_image_url?: InputMaybe<String_Comparison_Exp>;
  monthly_horoscopes?: InputMaybe<Monthly_Horoscope_Bool_Exp>;
  name_en?: InputMaybe<String_Comparison_Exp>;
  name_vi?: InputMaybe<String_Comparison_Exp>;
  small_image_url?: InputMaybe<String_Comparison_Exp>;
  start_date?: InputMaybe<Date_Comparison_Exp>;
  strengths?: InputMaybe<String_Comparison_Exp>;
  symbol_url?: InputMaybe<String_Comparison_Exp>;
  updated_at?: InputMaybe<Timestamp_Comparison_Exp>;
  users?: InputMaybe<Users_Bool_Exp>;
  weaknesses?: InputMaybe<String_Comparison_Exp>;
  weekly_horoscopes?: InputMaybe<Weekly_Horoscope_Bool_Exp>;
  zodiac_id?: InputMaybe<Int_Comparison_Exp>;
};

/** unique or primary key constraints on table "zodiac" */
export enum Zodiac_Constraint {
  /** unique or primary key constraint */
  ZodiacPkey = 'zodiac_pkey'
}

/** input type for incrementing numeric columns in table "zodiac" */
export type Zodiac_Inc_Input = {
  zodiac_id?: InputMaybe<Scalars['Int']['input']>;
};

/** input type for inserting data into table "zodiac" */
export type Zodiac_Insert_Input = {
  created_at?: InputMaybe<Scalars['timestamp']['input']>;
  daily_horoscopes?: InputMaybe<Daily_Horoscope_Arr_Rel_Insert_Input>;
  deleted_at?: InputMaybe<Scalars['timestamp']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  end_date?: InputMaybe<Scalars['date']['input']>;
  large_image_url?: InputMaybe<Scalars['String']['input']>;
  monthly_horoscopes?: InputMaybe<Monthly_Horoscope_Arr_Rel_Insert_Input>;
  name_en?: InputMaybe<Scalars['String']['input']>;
  name_vi?: InputMaybe<Scalars['String']['input']>;
  small_image_url?: InputMaybe<Scalars['String']['input']>;
  start_date?: InputMaybe<Scalars['date']['input']>;
  strengths?: InputMaybe<Scalars['String']['input']>;
  symbol_url?: InputMaybe<Scalars['String']['input']>;
  updated_at?: InputMaybe<Scalars['timestamp']['input']>;
  users?: InputMaybe<Users_Arr_Rel_Insert_Input>;
  weaknesses?: InputMaybe<Scalars['String']['input']>;
  weekly_horoscopes?: InputMaybe<Weekly_Horoscope_Arr_Rel_Insert_Input>;
  zodiac_id?: InputMaybe<Scalars['Int']['input']>;
};

/** aggregate max on columns */
export type Zodiac_Max_Fields = {
  __typename?: 'zodiac_max_fields';
  created_at?: Maybe<Scalars['timestamp']['output']>;
  deleted_at?: Maybe<Scalars['timestamp']['output']>;
  description?: Maybe<Scalars['String']['output']>;
  end_date?: Maybe<Scalars['date']['output']>;
  large_image_url?: Maybe<Scalars['String']['output']>;
  name_en?: Maybe<Scalars['String']['output']>;
  name_vi?: Maybe<Scalars['String']['output']>;
  small_image_url?: Maybe<Scalars['String']['output']>;
  start_date?: Maybe<Scalars['date']['output']>;
  strengths?: Maybe<Scalars['String']['output']>;
  symbol_url?: Maybe<Scalars['String']['output']>;
  updated_at?: Maybe<Scalars['timestamp']['output']>;
  weaknesses?: Maybe<Scalars['String']['output']>;
  zodiac_id?: Maybe<Scalars['Int']['output']>;
};

/** aggregate min on columns */
export type Zodiac_Min_Fields = {
  __typename?: 'zodiac_min_fields';
  created_at?: Maybe<Scalars['timestamp']['output']>;
  deleted_at?: Maybe<Scalars['timestamp']['output']>;
  description?: Maybe<Scalars['String']['output']>;
  end_date?: Maybe<Scalars['date']['output']>;
  large_image_url?: Maybe<Scalars['String']['output']>;
  name_en?: Maybe<Scalars['String']['output']>;
  name_vi?: Maybe<Scalars['String']['output']>;
  small_image_url?: Maybe<Scalars['String']['output']>;
  start_date?: Maybe<Scalars['date']['output']>;
  strengths?: Maybe<Scalars['String']['output']>;
  symbol_url?: Maybe<Scalars['String']['output']>;
  updated_at?: Maybe<Scalars['timestamp']['output']>;
  weaknesses?: Maybe<Scalars['String']['output']>;
  zodiac_id?: Maybe<Scalars['Int']['output']>;
};

/** response of any mutation on the table "zodiac" */
export type Zodiac_Mutation_Response = {
  __typename?: 'zodiac_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']['output'];
  /** data from the rows affected by the mutation */
  returning: Array<Zodiac>;
};

/** input type for inserting object relation for remote table "zodiac" */
export type Zodiac_Obj_Rel_Insert_Input = {
  data: Zodiac_Insert_Input;
  /** on conflict condition */
  on_conflict?: InputMaybe<Zodiac_On_Conflict>;
};

/** on conflict condition type for table "zodiac" */
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
  zodiac_id: Scalars['Int']['input'];
};

/** select columns of table "zodiac" */
export enum Zodiac_Select_Column {
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  DeletedAt = 'deleted_at',
  /** column name */
  Description = 'description',
  /** column name */
  EndDate = 'end_date',
  /** column name */
  LargeImageUrl = 'large_image_url',
  /** column name */
  NameEn = 'name_en',
  /** column name */
  NameVi = 'name_vi',
  /** column name */
  SmallImageUrl = 'small_image_url',
  /** column name */
  StartDate = 'start_date',
  /** column name */
  Strengths = 'strengths',
  /** column name */
  SymbolUrl = 'symbol_url',
  /** column name */
  UpdatedAt = 'updated_at',
  /** column name */
  Weaknesses = 'weaknesses',
  /** column name */
  ZodiacId = 'zodiac_id'
}

/** input type for updating data in table "zodiac" */
export type Zodiac_Set_Input = {
  created_at?: InputMaybe<Scalars['timestamp']['input']>;
  deleted_at?: InputMaybe<Scalars['timestamp']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  end_date?: InputMaybe<Scalars['date']['input']>;
  large_image_url?: InputMaybe<Scalars['String']['input']>;
  name_en?: InputMaybe<Scalars['String']['input']>;
  name_vi?: InputMaybe<Scalars['String']['input']>;
  small_image_url?: InputMaybe<Scalars['String']['input']>;
  start_date?: InputMaybe<Scalars['date']['input']>;
  strengths?: InputMaybe<Scalars['String']['input']>;
  symbol_url?: InputMaybe<Scalars['String']['input']>;
  updated_at?: InputMaybe<Scalars['timestamp']['input']>;
  weaknesses?: InputMaybe<Scalars['String']['input']>;
  zodiac_id?: InputMaybe<Scalars['Int']['input']>;
};

/** aggregate stddev on columns */
export type Zodiac_Stddev_Fields = {
  __typename?: 'zodiac_stddev_fields';
  zodiac_id?: Maybe<Scalars['Float']['output']>;
};

/** aggregate stddev_pop on columns */
export type Zodiac_Stddev_Pop_Fields = {
  __typename?: 'zodiac_stddev_pop_fields';
  zodiac_id?: Maybe<Scalars['Float']['output']>;
};

/** aggregate stddev_samp on columns */
export type Zodiac_Stddev_Samp_Fields = {
  __typename?: 'zodiac_stddev_samp_fields';
  zodiac_id?: Maybe<Scalars['Float']['output']>;
};

/** aggregate sum on columns */
export type Zodiac_Sum_Fields = {
  __typename?: 'zodiac_sum_fields';
  zodiac_id?: Maybe<Scalars['Int']['output']>;
};

/** update columns of table "zodiac" */
export enum Zodiac_Update_Column {
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  DeletedAt = 'deleted_at',
  /** column name */
  Description = 'description',
  /** column name */
  EndDate = 'end_date',
  /** column name */
  LargeImageUrl = 'large_image_url',
  /** column name */
  NameEn = 'name_en',
  /** column name */
  NameVi = 'name_vi',
  /** column name */
  SmallImageUrl = 'small_image_url',
  /** column name */
  StartDate = 'start_date',
  /** column name */
  Strengths = 'strengths',
  /** column name */
  SymbolUrl = 'symbol_url',
  /** column name */
  UpdatedAt = 'updated_at',
  /** column name */
  Weaknesses = 'weaknesses',
  /** column name */
  ZodiacId = 'zodiac_id'
}

/** aggregate var_pop on columns */
export type Zodiac_Var_Pop_Fields = {
  __typename?: 'zodiac_var_pop_fields';
  zodiac_id?: Maybe<Scalars['Float']['output']>;
};

/** aggregate var_samp on columns */
export type Zodiac_Var_Samp_Fields = {
  __typename?: 'zodiac_var_samp_fields';
  zodiac_id?: Maybe<Scalars['Float']['output']>;
};

/** aggregate variance on columns */
export type Zodiac_Variance_Fields = {
  __typename?: 'zodiac_variance_fields';
  zodiac_id?: Maybe<Scalars['Float']['output']>;
};

export type QueryDailyHoroscopeQueryVariables = Exact<{
  date: Scalars['date']['input'];
  userId: Scalars['Int']['input'];
}>;


export type QueryDailyHoroscopeQuery = { __typename?: 'query_root', users: Array<{ __typename?: 'users', zodiac_id?: number | null, zodiac?: { __typename?: 'zodiac', name_en?: string | null, name_vi?: string | null, daily_horoscopes: Array<{ __typename?: 'daily_horoscope', daily_career?: string | null, daily_finance?: string | null, daily_health?: string | null, daily_horoscope_id: number, daily_love?: string | null, daily_lucky_colors?: string | null, daily_lucky_message?: string | null, daily_lucky_numbers?: string | null, date?: any | null, horoscope_content?: string | null }> } | null }> };

export type QueryMonthHoroscopeQueryVariables = Exact<{
  date: Scalars['Int']['input'];
  userId: Scalars['Int']['input'];
}>;


export type QueryMonthHoroscopeQuery = { __typename?: 'query_root', users: Array<{ __typename?: 'users', zodiac_id?: number | null, zodiac?: { __typename?: 'zodiac', name_en?: string | null, name_vi?: string | null, monthly_horoscopes: Array<{ __typename?: 'monthly_horoscope', created_at?: any | null, deleted_at?: any | null, horoscope_content?: string | null, month?: number | null, monthly_career?: string | null, monthly_finance?: string | null, monthly_health?: string | null, monthly_horoscope_id: number, monthly_love?: string | null, monthly_lucky_message?: string | null, monthly_lucky_colors?: string | null, monthly_lucky_numbers?: string | null, updated_at?: any | null, year?: number | null }> } | null }> };

export type QueryWeeklyHoroscopeQueryQueryVariables = Exact<{
  date: Scalars['date']['input'];
  userId: Scalars['Int']['input'];
}>;


export type QueryWeeklyHoroscopeQueryQuery = { __typename?: 'query_root', users: Array<{ __typename?: 'users', zodiac_id?: number | null, zodiac?: { __typename?: 'zodiac', name_en?: string | null, name_vi?: string | null, weekly_horoscopes: Array<{ __typename?: 'weekly_horoscope', created_at?: any | null, deleted_at?: any | null, horoscope_content?: string | null, updated_at?: any | null, week_end_date?: any | null, week_start_date?: any | null, weekly_career?: string | null, weekly_finance?: string | null, weekly_health?: string | null, weekly_horoscope_id: number, weekly_love?: string | null, weekly_lucky_colors?: string | null, weekly_lucky_message?: string | null, weekly_lucky_numbers?: string | null }> } | null }> };

export type QueryZodiacQueryVariables = Exact<{
  date: Scalars['date']['input'];
  id: Scalars['Int']['input'];
}>;


export type QueryZodiacQuery = { __typename?: 'query_root', zodiac: Array<{ __typename?: 'zodiac', name_en?: string | null, name_vi?: string | null, daily_horoscopes: Array<{ __typename?: 'daily_horoscope', created_at?: any | null, daily_career?: string | null, daily_finance?: string | null, daily_health?: string | null, daily_horoscope_id: number, daily_love?: string | null, daily_lucky_colors?: string | null, daily_lucky_message?: string | null, daily_lucky_numbers?: string | null, date?: any | null, deleted_at?: any | null, horoscope_content?: string | null, updated_at?: any | null, zodiac_id?: number | null }> }> };

export type QueryZodiacWeeklyQueryVariables = Exact<{
  date: Scalars['date']['input'];
  id: Scalars['Int']['input'];
}>;


export type QueryZodiacWeeklyQuery = { __typename?: 'query_root', zodiac: Array<{ __typename?: 'zodiac', name_en?: string | null, name_vi?: string | null, weekly_horoscopes: Array<{ __typename?: 'weekly_horoscope', created_at?: any | null, deleted_at?: any | null, horoscope_content?: string | null, updated_at?: any | null, week_end_date?: any | null, week_start_date?: any | null, weekly_career?: string | null, weekly_finance?: string | null, weekly_health?: string | null, weekly_horoscope_id: number, weekly_love?: string | null, weekly_lucky_colors?: string | null, weekly_lucky_message?: string | null, weekly_lucky_numbers?: string | null, zodiac_id?: number | null }> }> };

export type QueryZodiacMonthlyQueryVariables = Exact<{
  date: Scalars['Int']['input'];
  id: Scalars['Int']['input'];
}>;


export type QueryZodiacMonthlyQuery = { __typename?: 'query_root', zodiac: Array<{ __typename?: 'zodiac', name_en?: string | null, name_vi?: string | null, monthly_horoscopes: Array<{ __typename?: 'monthly_horoscope', created_at?: any | null, deleted_at?: any | null, horoscope_content?: string | null, month?: number | null, monthly_career?: string | null, monthly_finance?: string | null, monthly_health?: string | null, monthly_horoscope_id: number, monthly_love?: string | null, monthly_lucky_message?: string | null, monthly_lucky_colors?: string | null, monthly_lucky_numbers?: string | null, updated_at?: any | null, year?: number | null, zodiac_id?: number | null }> }> };

export type LoginActionMutationVariables = Exact<{
  token: Scalars['String']['input'];
}>;


export type LoginActionMutation = { __typename?: 'mutation_root', actionLogin?: { __typename?: 'AuthOutput', fullName: string, token: string, userId: string, zodiacId?: string | null } | null };

export type MutationUserUpdateNameMutationVariables = Exact<{
  userId: Scalars['Int']['input'];
  full_name: Scalars['String']['input'];
}>;


export type MutationUserUpdateNameMutation = { __typename?: 'mutation_root', update_users?: { __typename?: 'users_mutation_response', returning: Array<{ __typename?: 'users', birthdate?: any | null, created_at?: any | null, deleted_at?: any | null, full_name?: string | null, phone_number?: string | null, zodiac_id?: number | null, zalo_id?: string | null, username?: string | null, user_id: number, updated_at?: any | null, zodiac?: { __typename?: 'zodiac', name_vi?: string | null } | null }> } | null };

export type QueryByBirthDayQueryVariables = Exact<{
  date: Scalars['String']['input'];
}>;


export type QueryByBirthDayQuery = { __typename?: 'query_root', getZodiacByBirthDay?: { __typename?: 'MyOutput', zodiac_id?: number | null, name_vi?: string | null, description?: string | null, end_date?: string | null, large_image_url?: string | null, name_en?: string | null, small_image_url?: string | null, start_date?: string | null, strengths?: string | null, weaknesses?: string | null } | null };

export type QueryUserByUpdateQueryVariables = Exact<{
  userId: Scalars['Int']['input'];
}>;


export type QueryUserByUpdateQuery = { __typename?: 'query_root', users: Array<{ __typename?: 'users', birthdate?: any | null, created_at?: any | null, deleted_at?: any | null, full_name?: string | null, phone_number?: string | null, updated_at?: any | null, user_id: number, username?: string | null, zalo_id?: string | null, zodiac_id?: number | null }> };

export type UpdateBirthdateActionMutationVariables = Exact<{
  idUser: Scalars['String']['input'];
  birthday: Scalars['date']['input'];
}>;


export type UpdateBirthdateActionMutation = { __typename?: 'mutation_root', actionUpdateBirthday?: { __typename?: 'infoOutput', user_id: string, zodiac_id: string } | null };


export const QueryDailyHoroscopeDocument = gql`
    query QueryDailyHoroscope($date: date!, $userId: Int!) {
  users(where: {_and: {user_id: {_eq: $userId}}}) {
    zodiac_id
    zodiac {
      name_en
      name_vi
      daily_horoscopes(where: {_and: {date: {_eq: $date}}}) {
        daily_career
        daily_finance
        daily_health
        daily_horoscope_id
        daily_love
        daily_lucky_colors
        daily_lucky_message
        daily_lucky_numbers
        date
        horoscope_content
      }
    }
  }
}
    `;

/**
 * __useQueryDailyHoroscopeQuery__
 *
 * To run a query within a React component, call `useQueryDailyHoroscopeQuery` and pass it any options that fit your needs.
 * When your component renders, `useQueryDailyHoroscopeQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useQueryDailyHoroscopeQuery({
 *   variables: {
 *      date: // value for 'date'
 *      userId: // value for 'userId'
 *   },
 * });
 */
export function useQueryDailyHoroscopeQuery(baseOptions: Apollo.QueryHookOptions<QueryDailyHoroscopeQuery, QueryDailyHoroscopeQueryVariables> & ({ variables: QueryDailyHoroscopeQueryVariables; skip?: boolean; } | { skip: boolean; }) ) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<QueryDailyHoroscopeQuery, QueryDailyHoroscopeQueryVariables>(QueryDailyHoroscopeDocument, options);
      }
export function useQueryDailyHoroscopeLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<QueryDailyHoroscopeQuery, QueryDailyHoroscopeQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<QueryDailyHoroscopeQuery, QueryDailyHoroscopeQueryVariables>(QueryDailyHoroscopeDocument, options);
        }
export function useQueryDailyHoroscopeSuspenseQuery(baseOptions?: Apollo.SuspenseQueryHookOptions<QueryDailyHoroscopeQuery, QueryDailyHoroscopeQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<QueryDailyHoroscopeQuery, QueryDailyHoroscopeQueryVariables>(QueryDailyHoroscopeDocument, options);
        }
export type QueryDailyHoroscopeQueryHookResult = ReturnType<typeof useQueryDailyHoroscopeQuery>;
export type QueryDailyHoroscopeLazyQueryHookResult = ReturnType<typeof useQueryDailyHoroscopeLazyQuery>;
export type QueryDailyHoroscopeSuspenseQueryHookResult = ReturnType<typeof useQueryDailyHoroscopeSuspenseQuery>;
export type QueryDailyHoroscopeQueryResult = Apollo.QueryResult<QueryDailyHoroscopeQuery, QueryDailyHoroscopeQueryVariables>;
export const QueryMonthHoroscopeDocument = gql`
    query QueryMonthHoroscope($date: Int!, $userId: Int!) {
  users(where: {_and: {user_id: {_eq: $userId}}}) {
    zodiac_id
    zodiac {
      name_en
      name_vi
      monthly_horoscopes(where: {_and: {month: {_eq: $date}}}) {
        created_at
        deleted_at
        horoscope_content
        month
        monthly_career
        monthly_finance
        monthly_health
        monthly_horoscope_id
        monthly_love
        monthly_lucky_message
        monthly_lucky_colors
        monthly_lucky_numbers
        updated_at
        year
      }
    }
  }
}
    `;

/**
 * __useQueryMonthHoroscopeQuery__
 *
 * To run a query within a React component, call `useQueryMonthHoroscopeQuery` and pass it any options that fit your needs.
 * When your component renders, `useQueryMonthHoroscopeQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useQueryMonthHoroscopeQuery({
 *   variables: {
 *      date: // value for 'date'
 *      userId: // value for 'userId'
 *   },
 * });
 */
export function useQueryMonthHoroscopeQuery(baseOptions: Apollo.QueryHookOptions<QueryMonthHoroscopeQuery, QueryMonthHoroscopeQueryVariables> & ({ variables: QueryMonthHoroscopeQueryVariables; skip?: boolean; } | { skip: boolean; }) ) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<QueryMonthHoroscopeQuery, QueryMonthHoroscopeQueryVariables>(QueryMonthHoroscopeDocument, options);
      }
export function useQueryMonthHoroscopeLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<QueryMonthHoroscopeQuery, QueryMonthHoroscopeQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<QueryMonthHoroscopeQuery, QueryMonthHoroscopeQueryVariables>(QueryMonthHoroscopeDocument, options);
        }
export function useQueryMonthHoroscopeSuspenseQuery(baseOptions?: Apollo.SuspenseQueryHookOptions<QueryMonthHoroscopeQuery, QueryMonthHoroscopeQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<QueryMonthHoroscopeQuery, QueryMonthHoroscopeQueryVariables>(QueryMonthHoroscopeDocument, options);
        }
export type QueryMonthHoroscopeQueryHookResult = ReturnType<typeof useQueryMonthHoroscopeQuery>;
export type QueryMonthHoroscopeLazyQueryHookResult = ReturnType<typeof useQueryMonthHoroscopeLazyQuery>;
export type QueryMonthHoroscopeSuspenseQueryHookResult = ReturnType<typeof useQueryMonthHoroscopeSuspenseQuery>;
export type QueryMonthHoroscopeQueryResult = Apollo.QueryResult<QueryMonthHoroscopeQuery, QueryMonthHoroscopeQueryVariables>;
export const QueryWeeklyHoroscopeQueryDocument = gql`
    query QueryWeeklyHoroscopeQuery($date: date!, $userId: Int!) {
  users(where: {_and: {user_id: {_eq: $userId}}}) {
    zodiac_id
    zodiac {
      name_en
      name_vi
      weekly_horoscopes(
        where: {_and: {week_start_date: {_lte: $date}, week_end_date: {_gte: $date}}}
      ) {
        created_at
        deleted_at
        horoscope_content
        updated_at
        week_end_date
        week_start_date
        weekly_career
        weekly_finance
        weekly_health
        weekly_horoscope_id
        weekly_love
        weekly_lucky_colors
        weekly_lucky_message
        weekly_lucky_numbers
      }
    }
  }
}
    `;

/**
 * __useQueryWeeklyHoroscopeQueryQuery__
 *
 * To run a query within a React component, call `useQueryWeeklyHoroscopeQueryQuery` and pass it any options that fit your needs.
 * When your component renders, `useQueryWeeklyHoroscopeQueryQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useQueryWeeklyHoroscopeQueryQuery({
 *   variables: {
 *      date: // value for 'date'
 *      userId: // value for 'userId'
 *   },
 * });
 */
export function useQueryWeeklyHoroscopeQueryQuery(baseOptions: Apollo.QueryHookOptions<QueryWeeklyHoroscopeQueryQuery, QueryWeeklyHoroscopeQueryQueryVariables> & ({ variables: QueryWeeklyHoroscopeQueryQueryVariables; skip?: boolean; } | { skip: boolean; }) ) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<QueryWeeklyHoroscopeQueryQuery, QueryWeeklyHoroscopeQueryQueryVariables>(QueryWeeklyHoroscopeQueryDocument, options);
      }
export function useQueryWeeklyHoroscopeQueryLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<QueryWeeklyHoroscopeQueryQuery, QueryWeeklyHoroscopeQueryQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<QueryWeeklyHoroscopeQueryQuery, QueryWeeklyHoroscopeQueryQueryVariables>(QueryWeeklyHoroscopeQueryDocument, options);
        }
export function useQueryWeeklyHoroscopeQuerySuspenseQuery(baseOptions?: Apollo.SuspenseQueryHookOptions<QueryWeeklyHoroscopeQueryQuery, QueryWeeklyHoroscopeQueryQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<QueryWeeklyHoroscopeQueryQuery, QueryWeeklyHoroscopeQueryQueryVariables>(QueryWeeklyHoroscopeQueryDocument, options);
        }
export type QueryWeeklyHoroscopeQueryQueryHookResult = ReturnType<typeof useQueryWeeklyHoroscopeQueryQuery>;
export type QueryWeeklyHoroscopeQueryLazyQueryHookResult = ReturnType<typeof useQueryWeeklyHoroscopeQueryLazyQuery>;
export type QueryWeeklyHoroscopeQuerySuspenseQueryHookResult = ReturnType<typeof useQueryWeeklyHoroscopeQuerySuspenseQuery>;
export type QueryWeeklyHoroscopeQueryQueryResult = Apollo.QueryResult<QueryWeeklyHoroscopeQueryQuery, QueryWeeklyHoroscopeQueryQueryVariables>;
export const QueryZodiacDocument = gql`
    query QueryZodiac($date: date!, $id: Int!) {
  zodiac(where: {zodiac_id: {_eq: $id}}) {
    name_en
    name_vi
    daily_horoscopes(where: {_and: {date: {_eq: $date}}}) {
      created_at
      daily_career
      daily_finance
      daily_health
      daily_horoscope_id
      daily_love
      daily_lucky_colors
      daily_lucky_message
      daily_lucky_numbers
      date
      deleted_at
      horoscope_content
      updated_at
      zodiac_id
    }
  }
}
    `;

/**
 * __useQueryZodiacQuery__
 *
 * To run a query within a React component, call `useQueryZodiacQuery` and pass it any options that fit your needs.
 * When your component renders, `useQueryZodiacQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useQueryZodiacQuery({
 *   variables: {
 *      date: // value for 'date'
 *      id: // value for 'id'
 *   },
 * });
 */
export function useQueryZodiacQuery(baseOptions: Apollo.QueryHookOptions<QueryZodiacQuery, QueryZodiacQueryVariables> & ({ variables: QueryZodiacQueryVariables; skip?: boolean; } | { skip: boolean; }) ) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<QueryZodiacQuery, QueryZodiacQueryVariables>(QueryZodiacDocument, options);
      }
export function useQueryZodiacLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<QueryZodiacQuery, QueryZodiacQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<QueryZodiacQuery, QueryZodiacQueryVariables>(QueryZodiacDocument, options);
        }
export function useQueryZodiacSuspenseQuery(baseOptions?: Apollo.SuspenseQueryHookOptions<QueryZodiacQuery, QueryZodiacQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<QueryZodiacQuery, QueryZodiacQueryVariables>(QueryZodiacDocument, options);
        }
export type QueryZodiacQueryHookResult = ReturnType<typeof useQueryZodiacQuery>;
export type QueryZodiacLazyQueryHookResult = ReturnType<typeof useQueryZodiacLazyQuery>;
export type QueryZodiacSuspenseQueryHookResult = ReturnType<typeof useQueryZodiacSuspenseQuery>;
export type QueryZodiacQueryResult = Apollo.QueryResult<QueryZodiacQuery, QueryZodiacQueryVariables>;
export const QueryZodiacWeeklyDocument = gql`
    query QueryZodiacWeekly($date: date!, $id: Int!) {
  zodiac(where: {zodiac_id: {_eq: $id}}) {
    name_en
    name_vi
    weekly_horoscopes(
      where: {_and: {week_start_date: {_lte: $date}, week_end_date: {_gte: $date}}}
    ) {
      created_at
      deleted_at
      horoscope_content
      updated_at
      week_end_date
      week_start_date
      weekly_career
      weekly_finance
      weekly_health
      weekly_horoscope_id
      weekly_love
      weekly_lucky_colors
      weekly_lucky_message
      weekly_lucky_numbers
      zodiac_id
    }
  }
}
    `;

/**
 * __useQueryZodiacWeeklyQuery__
 *
 * To run a query within a React component, call `useQueryZodiacWeeklyQuery` and pass it any options that fit your needs.
 * When your component renders, `useQueryZodiacWeeklyQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useQueryZodiacWeeklyQuery({
 *   variables: {
 *      date: // value for 'date'
 *      id: // value for 'id'
 *   },
 * });
 */
export function useQueryZodiacWeeklyQuery(baseOptions: Apollo.QueryHookOptions<QueryZodiacWeeklyQuery, QueryZodiacWeeklyQueryVariables> & ({ variables: QueryZodiacWeeklyQueryVariables; skip?: boolean; } | { skip: boolean; }) ) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<QueryZodiacWeeklyQuery, QueryZodiacWeeklyQueryVariables>(QueryZodiacWeeklyDocument, options);
      }
export function useQueryZodiacWeeklyLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<QueryZodiacWeeklyQuery, QueryZodiacWeeklyQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<QueryZodiacWeeklyQuery, QueryZodiacWeeklyQueryVariables>(QueryZodiacWeeklyDocument, options);
        }
export function useQueryZodiacWeeklySuspenseQuery(baseOptions?: Apollo.SuspenseQueryHookOptions<QueryZodiacWeeklyQuery, QueryZodiacWeeklyQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<QueryZodiacWeeklyQuery, QueryZodiacWeeklyQueryVariables>(QueryZodiacWeeklyDocument, options);
        }
export type QueryZodiacWeeklyQueryHookResult = ReturnType<typeof useQueryZodiacWeeklyQuery>;
export type QueryZodiacWeeklyLazyQueryHookResult = ReturnType<typeof useQueryZodiacWeeklyLazyQuery>;
export type QueryZodiacWeeklySuspenseQueryHookResult = ReturnType<typeof useQueryZodiacWeeklySuspenseQuery>;
export type QueryZodiacWeeklyQueryResult = Apollo.QueryResult<QueryZodiacWeeklyQuery, QueryZodiacWeeklyQueryVariables>;
export const QueryZodiacMonthlyDocument = gql`
    query QueryZodiacMonthly($date: Int!, $id: Int!) {
  zodiac(where: {zodiac_id: {_eq: $id}}) {
    name_en
    name_vi
    monthly_horoscopes(where: {_and: {month: {_eq: $date}}}) {
      created_at
      deleted_at
      horoscope_content
      month
      monthly_career
      monthly_finance
      monthly_health
      monthly_horoscope_id
      monthly_love
      monthly_lucky_message
      monthly_lucky_colors
      monthly_lucky_numbers
      updated_at
      year
      zodiac_id
    }
  }
}
    `;

/**
 * __useQueryZodiacMonthlyQuery__
 *
 * To run a query within a React component, call `useQueryZodiacMonthlyQuery` and pass it any options that fit your needs.
 * When your component renders, `useQueryZodiacMonthlyQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useQueryZodiacMonthlyQuery({
 *   variables: {
 *      date: // value for 'date'
 *      id: // value for 'id'
 *   },
 * });
 */
export function useQueryZodiacMonthlyQuery(baseOptions: Apollo.QueryHookOptions<QueryZodiacMonthlyQuery, QueryZodiacMonthlyQueryVariables> & ({ variables: QueryZodiacMonthlyQueryVariables; skip?: boolean; } | { skip: boolean; }) ) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<QueryZodiacMonthlyQuery, QueryZodiacMonthlyQueryVariables>(QueryZodiacMonthlyDocument, options);
      }
export function useQueryZodiacMonthlyLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<QueryZodiacMonthlyQuery, QueryZodiacMonthlyQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<QueryZodiacMonthlyQuery, QueryZodiacMonthlyQueryVariables>(QueryZodiacMonthlyDocument, options);
        }
export function useQueryZodiacMonthlySuspenseQuery(baseOptions?: Apollo.SuspenseQueryHookOptions<QueryZodiacMonthlyQuery, QueryZodiacMonthlyQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<QueryZodiacMonthlyQuery, QueryZodiacMonthlyQueryVariables>(QueryZodiacMonthlyDocument, options);
        }
export type QueryZodiacMonthlyQueryHookResult = ReturnType<typeof useQueryZodiacMonthlyQuery>;
export type QueryZodiacMonthlyLazyQueryHookResult = ReturnType<typeof useQueryZodiacMonthlyLazyQuery>;
export type QueryZodiacMonthlySuspenseQueryHookResult = ReturnType<typeof useQueryZodiacMonthlySuspenseQuery>;
export type QueryZodiacMonthlyQueryResult = Apollo.QueryResult<QueryZodiacMonthlyQuery, QueryZodiacMonthlyQueryVariables>;
export const LoginActionDocument = gql`
    mutation LoginAction($token: String!) {
  actionLogin(token: $token) {
    fullName
    token
    userId
    zodiacId
  }
}
    `;
export type LoginActionMutationFn = Apollo.MutationFunction<LoginActionMutation, LoginActionMutationVariables>;

/**
 * __useLoginActionMutation__
 *
 * To run a mutation, you first call `useLoginActionMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useLoginActionMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [loginActionMutation, { data, loading, error }] = useLoginActionMutation({
 *   variables: {
 *      token: // value for 'token'
 *   },
 * });
 */
export function useLoginActionMutation(baseOptions?: Apollo.MutationHookOptions<LoginActionMutation, LoginActionMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<LoginActionMutation, LoginActionMutationVariables>(LoginActionDocument, options);
      }
export type LoginActionMutationHookResult = ReturnType<typeof useLoginActionMutation>;
export type LoginActionMutationResult = Apollo.MutationResult<LoginActionMutation>;
export type LoginActionMutationOptions = Apollo.BaseMutationOptions<LoginActionMutation, LoginActionMutationVariables>;
export const MutationUserUpdateNameDocument = gql`
    mutation MutationUserUpdateName($userId: Int!, $full_name: String!) {
  update_users(where: {user_id: {_eq: $userId}}, _set: {full_name: $full_name}) {
    returning {
      birthdate
      created_at
      deleted_at
      full_name
      phone_number
      zodiac_id
      zalo_id
      username
      user_id
      updated_at
      zodiac {
        name_vi
      }
    }
  }
}
    `;
export type MutationUserUpdateNameMutationFn = Apollo.MutationFunction<MutationUserUpdateNameMutation, MutationUserUpdateNameMutationVariables>;

/**
 * __useMutationUserUpdateNameMutation__
 *
 * To run a mutation, you first call `useMutationUserUpdateNameMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useMutationUserUpdateNameMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [mutationUserUpdateNameMutation, { data, loading, error }] = useMutationUserUpdateNameMutation({
 *   variables: {
 *      userId: // value for 'userId'
 *      full_name: // value for 'full_name'
 *   },
 * });
 */
export function useMutationUserUpdateNameMutation(baseOptions?: Apollo.MutationHookOptions<MutationUserUpdateNameMutation, MutationUserUpdateNameMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<MutationUserUpdateNameMutation, MutationUserUpdateNameMutationVariables>(MutationUserUpdateNameDocument, options);
      }
export type MutationUserUpdateNameMutationHookResult = ReturnType<typeof useMutationUserUpdateNameMutation>;
export type MutationUserUpdateNameMutationResult = Apollo.MutationResult<MutationUserUpdateNameMutation>;
export type MutationUserUpdateNameMutationOptions = Apollo.BaseMutationOptions<MutationUserUpdateNameMutation, MutationUserUpdateNameMutationVariables>;
export const QueryByBirthDayDocument = gql`
    query QueryByBirthDay($date: String!) {
  getZodiacByBirthDay(date: $date) {
    zodiac_id
    name_vi
    description
    end_date
    large_image_url
    name_en
    small_image_url
    start_date
    strengths
    weaknesses
  }
}
    `;

/**
 * __useQueryByBirthDayQuery__
 *
 * To run a query within a React component, call `useQueryByBirthDayQuery` and pass it any options that fit your needs.
 * When your component renders, `useQueryByBirthDayQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useQueryByBirthDayQuery({
 *   variables: {
 *      date: // value for 'date'
 *   },
 * });
 */
export function useQueryByBirthDayQuery(baseOptions: Apollo.QueryHookOptions<QueryByBirthDayQuery, QueryByBirthDayQueryVariables> & ({ variables: QueryByBirthDayQueryVariables; skip?: boolean; } | { skip: boolean; }) ) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<QueryByBirthDayQuery, QueryByBirthDayQueryVariables>(QueryByBirthDayDocument, options);
      }
export function useQueryByBirthDayLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<QueryByBirthDayQuery, QueryByBirthDayQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<QueryByBirthDayQuery, QueryByBirthDayQueryVariables>(QueryByBirthDayDocument, options);
        }
export function useQueryByBirthDaySuspenseQuery(baseOptions?: Apollo.SuspenseQueryHookOptions<QueryByBirthDayQuery, QueryByBirthDayQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<QueryByBirthDayQuery, QueryByBirthDayQueryVariables>(QueryByBirthDayDocument, options);
        }
export type QueryByBirthDayQueryHookResult = ReturnType<typeof useQueryByBirthDayQuery>;
export type QueryByBirthDayLazyQueryHookResult = ReturnType<typeof useQueryByBirthDayLazyQuery>;
export type QueryByBirthDaySuspenseQueryHookResult = ReturnType<typeof useQueryByBirthDaySuspenseQuery>;
export type QueryByBirthDayQueryResult = Apollo.QueryResult<QueryByBirthDayQuery, QueryByBirthDayQueryVariables>;
export const QueryUserByUpdateDocument = gql`
    query QueryUserByUpdate($userId: Int!) {
  users(where: {user_id: {_eq: $userId}}) {
    birthdate
    created_at
    deleted_at
    full_name
    phone_number
    updated_at
    user_id
    username
    zalo_id
    zodiac_id
  }
}
    `;

/**
 * __useQueryUserByUpdateQuery__
 *
 * To run a query within a React component, call `useQueryUserByUpdateQuery` and pass it any options that fit your needs.
 * When your component renders, `useQueryUserByUpdateQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useQueryUserByUpdateQuery({
 *   variables: {
 *      userId: // value for 'userId'
 *   },
 * });
 */
export function useQueryUserByUpdateQuery(baseOptions: Apollo.QueryHookOptions<QueryUserByUpdateQuery, QueryUserByUpdateQueryVariables> & ({ variables: QueryUserByUpdateQueryVariables; skip?: boolean; } | { skip: boolean; }) ) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<QueryUserByUpdateQuery, QueryUserByUpdateQueryVariables>(QueryUserByUpdateDocument, options);
      }
export function useQueryUserByUpdateLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<QueryUserByUpdateQuery, QueryUserByUpdateQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<QueryUserByUpdateQuery, QueryUserByUpdateQueryVariables>(QueryUserByUpdateDocument, options);
        }
export function useQueryUserByUpdateSuspenseQuery(baseOptions?: Apollo.SuspenseQueryHookOptions<QueryUserByUpdateQuery, QueryUserByUpdateQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<QueryUserByUpdateQuery, QueryUserByUpdateQueryVariables>(QueryUserByUpdateDocument, options);
        }
export type QueryUserByUpdateQueryHookResult = ReturnType<typeof useQueryUserByUpdateQuery>;
export type QueryUserByUpdateLazyQueryHookResult = ReturnType<typeof useQueryUserByUpdateLazyQuery>;
export type QueryUserByUpdateSuspenseQueryHookResult = ReturnType<typeof useQueryUserByUpdateSuspenseQuery>;
export type QueryUserByUpdateQueryResult = Apollo.QueryResult<QueryUserByUpdateQuery, QueryUserByUpdateQueryVariables>;
export const UpdateBirthdateActionDocument = gql`
    mutation updateBirthdateAction($idUser: String!, $birthday: date!) {
  actionUpdateBirthday(arg1: {idUser: $idUser, birthday: $birthday}) {
    user_id
    zodiac_id
  }
}
    `;
export type UpdateBirthdateActionMutationFn = Apollo.MutationFunction<UpdateBirthdateActionMutation, UpdateBirthdateActionMutationVariables>;

/**
 * __useUpdateBirthdateActionMutation__
 *
 * To run a mutation, you first call `useUpdateBirthdateActionMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateBirthdateActionMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateBirthdateActionMutation, { data, loading, error }] = useUpdateBirthdateActionMutation({
 *   variables: {
 *      idUser: // value for 'idUser'
 *      birthday: // value for 'birthday'
 *   },
 * });
 */
export function useUpdateBirthdateActionMutation(baseOptions?: Apollo.MutationHookOptions<UpdateBirthdateActionMutation, UpdateBirthdateActionMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<UpdateBirthdateActionMutation, UpdateBirthdateActionMutationVariables>(UpdateBirthdateActionDocument, options);
      }
export type UpdateBirthdateActionMutationHookResult = ReturnType<typeof useUpdateBirthdateActionMutation>;
export type UpdateBirthdateActionMutationResult = Apollo.MutationResult<UpdateBirthdateActionMutation>;
export type UpdateBirthdateActionMutationOptions = Apollo.BaseMutationOptions<UpdateBirthdateActionMutation, UpdateBirthdateActionMutationVariables>;