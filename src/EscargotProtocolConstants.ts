/*
 * Copyright 2020-present Samsung Electronics Co., Ltd. and other contributors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

'use strict';

// Expected Escargot debugger protocol version.
export const ESCARGOT_DEBUGGER_VERSION = 1;

// Packages sent from the server to the client.
export enum SERVER {
  ESCARGOT_DEBUGGER_VERSION = 0,
  ESCARGOT_DEBUGGER_CONFIGURATION = 1,
  ESCARGOT_DEBUGGER_CLOSE_CONNECTION = 2,
  ESCARGOT_DEBUGGER_RELEASE_FUNCTION = 3,
  ESCARGOT_DEBUGGER_PARSE_NODE = 4,
  ESCARGOT_DEBUGGER_PARSE_ERROR = 5,
  // These four must be in the same order.
  ESCARGOT_DEBUGGER_SOURCE_8BIT = 6,
  ESCARGOT_DEBUGGER_SOURCE_8BIT_END = 7,
  ESCARGOT_DEBUGGER_SOURCE_16BIT = 8,
  ESCARGOT_DEBUGGER_SOURCE_16BIT_END = 9,
  // These four must be in the same order.
  ESCARGOT_DEBUGGER_FILE_NAME_8BIT = 10,
  ESCARGOT_DEBUGGER_FILE_NAME_8BIT_END = 11,
  ESCARGOT_DEBUGGER_FILE_NAME_16BIT = 12,
  ESCARGOT_DEBUGGER_FILE_NAME_16BIT_END = 13,
  // These four must be in the same order.
  ESCARGOT_DEBUGGER_FUNCTION_NAME_8BIT = 14,
  ESCARGOT_DEBUGGER_FUNCTION_NAME_8BIT_END = 15,
  ESCARGOT_DEBUGGER_FUNCTION_NAME_16BIT = 16,
  ESCARGOT_DEBUGGER_FUNCTION_NAME_16BIT_END = 17,
  ESCARGOT_DEBUGGER_BREAKPOINT_LOCATION = 18,
  ESCARGOT_DEBUGGER_FUNCTION_PTR = 19,
  ESCARGOT_DEBUGGER_BREAKPOINT_HIT = 20,
  ESCARGOT_DEBUGGER_EXCEPTION_HIT = 21,
  // These four must be in the same order.
  ESCARGOT_DEBUGGER_EVAL_RESULT_8BIT = 22,
  ESCARGOT_DEBUGGER_EVAL_RESULT_8BIT_END = 23,
  ESCARGOT_DEBUGGER_EVAL_RESULT_16BIT = 24,
  ESCARGOT_DEBUGGER_EVAL_RESULT_16BIT_END = 25,
  // These four must be in the same order.
  ESCARGOT_DEBUGGER_EVAL_FAILED_8BIT = 26,
  ESCARGOT_DEBUGGER_EVAL_FAILED_8BIT_END = 27,
  ESCARGOT_DEBUGGER_EVAL_FAILED_16BIT = 28,
  ESCARGOT_DEBUGGER_EVAL_FAILED_16BIT_END = 29,
  ESCARGOT_DEBUGGER_BACKTRACE_TOTAL = 30,
  ESCARGOT_DEBUGGER_BACKTRACE = 31,
  ESCARGOT_DEBUGGER_BACKTRACE_END = 32,
  ESCARGOT_DEBUGGER_SCOPE_CHAIN = 33,
  ESCARGOT_DEBUGGER_SCOPE_CHAIN_END = 34,
  // These four must be in the same order.
  ESCARGOT_DEBUGGER_STRING_8BIT = 35,
  ESCARGOT_DEBUGGER_STRING_8BIT_END = 36,
  ESCARGOT_DEBUGGER_STRING_16BIT = 37,
  ESCARGOT_DEBUGGER_STRING_16BIT_END = 38,
  ESCARGOT_DEBUGGER_MESSAGE_VARIABLE = 39,
  ESCARGOT_DEBUGGER_MESSAGE_PRINT = 40,
  ESCARGOT_DEBUGGER_MESSAGE_EXCEPTION = 41,
  ESCARGOT_DEBUGGER_MESSAGE_EXCEPTION_BACKTRACE = 42,
  ESCARGOT_DEBUGGER_WAITWAIT_FOR_SOURCE = 43,
  ESCARGOT_DEBUGGER_WAITING_AFTER_PENDING = 44,
}

// Packages sent from the client to the server.
export enum CLIENT {
  ESCARGOT_DEBUGGER_FUNCTION_RELEASED = 0,
  ESCARGOT_DEBUGGER_UPDATE_BREAKPOINT = 1,
  ESCARGOT_DEBUGGER_CONTINUE = 2,
  ESCARGOT_DEBUGGER_STEP = 3,
  ESCARGOT_DEBUGGER_NEXT = 4,
  ESCARGOT_DEBUGGER_FINISH = 5,
  // These four must be in the same order.
  ESCARGOT_DEBUGGER_EVAL_8BIT_START = 6,
  ESCARGOT_DEBUGGER_EVAL_8BIT = 7,
  ESCARGOT_DEBUGGER_EVAL_16BIT_START = 8,
  ESCARGOT_DEBUGGER_EVAL_16BIT = 9,

  ESCARGOT_DEBUGGER_GET_BACKTRACE = 10,
  ESCARGOT_DEBUGGER_GET_SCOPE_CHAIN = 11,
  ESCARGOT_DEBUGGER_GET_SCOPE_VARIABLES = 12,
  ESCARGOT_DEBUGGER_GET_OBJECT = 13,

  // These four must be in the same order.
  ESCARGOT_DEBUGGER_CLIENT_SOURCE_8BIT_START = 14,
  ESCARGOT_DEBUGGER_CLIENT_SOURCE_8BIT = 15,
  ESCARGOT_DEBUGGER_CLIENT_SOURCE_16BIT_START = 16,
  ESCARGOT_DEBUGGER_CLIENT_SOURCE_16BIT = 17,
  ESCARGOT_DEBUGGER_THERE_WAS_NO_SOURCE = 18,
  ESCARGOT_DEBUGGER_PENDING_CONFIG = 19,
  ESCARGOT_DEBUGGER_PENDING_RESUME = 20,

  ESCARGOT_DEBUGGER_STOP = 21,
}

// Types of scope chain.
export enum ESCARGOT_DEBUGGER_SCOPE_TYPE {
  ESCARGOT_DEBUGGER_SCOPE_GLOBAL = 0 ,
  ESCARGOT_DEBUGGER_SCOPE_FUNCTION = 1,
  ESCARGOT_DEBUGGER_SCOPE_DECLARATIVE = 2,
  ESCARGOT_DEBUGGER_SCOPE_OBJECT = 3,
  ESCARGOT_DEBUGGER_SCOPE_MODULE = 4,
  ESCARGOT_DEBUGGER_SCOPE_UNKNOWN = 5
}

// Type of scope variables.
export enum ESCARGOT_DEBUGGER_SCOPE_VARIABLES {
  ESCARGOT_DEBUGGER_VARIABLE_END = 0,
  ESCARGOT_DEBUGGER_VARIABLE_UNACCESSIBLE = 1,
  ESCARGOT_DEBUGGER_VARIABLE_UNDEFINED = 2,
  ESCARGOT_DEBUGGER_VARIABLE_NULL = 3,
  ESCARGOT_DEBUGGER_VARIABLE_TRUE = 4,
  ESCARGOT_DEBUGGER_VARIABLE_FALSE = 5,
  ESCARGOT_DEBUGGER_VARIABLE_NUMBER = 6,
  ESCARGOT_DEBUGGER_VARIABLE_STRING = 7,
  ESCARGOT_DEBUGGER_VARIABLE_SYMBOL = 8,
  ESCARGOT_DEBUGGER_VARIABLE_OBJECT = 9,
  ESCARGOT_DEBUGGER_VARIABLE_ARRAY = 10,
  ESCARGOT_DEBUGGER_VARIABLE_FUNCTION = 11,
  ESCARGOT_DEBUGGER_VARIABLE_LONG_NAME = 0x40,
  ESCARGOT_DEBUGGER_VARIABLE_LONG_VALUE = 0x80,
}