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
    UseSortByState,
  } from "react-table"

  export interface TableOptions<D extends object> extends UseSortByOptions<D> {}

  export interface Hooks<D extends object = {}> extends UseSortByHooks<D> {}

  export interface TableInstance<D extends object = {}> extends UseSortByInstanceProps<D> {}

  export interface TableState<D extends object = {}> extends UseSortByState<D> {}

  export interface ColumnInstance<D extends object = {}> extends UseSortByColumnProps<D> {}

  export interface ColumnInterface<D extends object = {}> extends UseSortByColumnOptions<D> {
    onClick?: (e: MouseEvent, cell: Cell<D>, row: Row<D>, index: number) => void
  }

  export interface Cell<D extends object = {}> {}

  export interface Row<D extends object = {}> {}
}
