/* eslint-disable */

// Comes from
// https://github.com/DefinitelyTyped/DefinitelyTyped/tree/master/types/react-table

import "react-table"

declare module "react-table" {
  import {
    UseSortByColumnOptions,
    UseSortByColumnProps,
    UseSortByHooks,
    UseSortByInstanceProps,
    UseSortByOptions,
    UsePaginationInstanceProps,
    UsePaginationState,
    UseSortByState,
  } from "react-table"

  export interface TableOptions<D extends object> extends UseSortByOptions<D> {}
  // note that having Record here allows you to add anything to the options, this matches the spirit of the
  // underlying js library, but might be cleaner if it's replaced by a more specific type that matches your
  // feature set, this is a safe default.
  // Record<string, any>

  export interface Hooks<D extends object = {}> extends UseSortByHooks<D> {}

  export interface TableInstance<D extends object = {}> extends UsePaginationInstanceProps<D> {}

  export interface TableState<D extends object = {}> extends UsePaginationState<D> {}

  export interface ColumnInstance<D extends object = {}> extends UseSortByColumnProps<D> {}

  export interface ColumnInterface<D extends object = {}> extends UseSortByColumnOptions<D> {
    onClick?: (e: MouseEvent, cell: Cell<D>, row: Row<D>, index: number) => void
  }

  export interface Cell<D extends object = {}> {}

  export interface Row<D extends object = {}> {}
}
