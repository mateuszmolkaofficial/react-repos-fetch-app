import {
  useTable,
  useFlexLayout,
  TableOptions,
  UsePaginationOptions,
  usePagination,
} from 'react-table'
import { ReactElement } from 'react'
import {
  TableWrapper,
  HeaderRow,
  HeaderCell,
  BodyCell,
  RowWrapper,
  PaginationWrapper,
} from './styles'

interface TableProps<D extends Record<string, unknown>>
  extends TableOptions<D>,
    UsePaginationOptions<D> {}

const Table = <D extends Record<string, unknown>>({
  columns,
  data,
}: TableProps<D>): ReactElement<TableProps<D>> => {
  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    page,
    prepareRow,

    canPreviousPage,
    canNextPage,
    pageOptions,
    pageCount,
    gotoPage,
    nextPage,
    previousPage,
    state: { pageIndex },
  } = useTable<D>(
    {
      columns,
      data,
    },
    useFlexLayout,
    usePagination,
  )

  return (
    <TableWrapper {...getTableProps()}>
      <div>
        {
          // Loop over the header rows
          headerGroups.map((headerGroup, index) => (
            // Apply the header row props
            <HeaderRow {...headerGroup.getHeaderGroupProps()} key={index}>
              {
                // Loop over the headers in each row
                headerGroup.headers.map((column, index) => (
                  <HeaderCell {...column.getHeaderProps()} key={index}>
                    {column.render('Header')}
                  </HeaderCell>
                ))
              }
            </HeaderRow>
          ))
        }
      </div>
      <div {...getTableBodyProps()} data-test-id="table-body">
        {
          // Loop over the table rows
          page.map((row, index) => {
            // Prepare the row for display
            prepareRow(row)
            return (
              // Apply the row props
              <RowWrapper {...row.getRowProps()} key={index}>
                {
                  // Loop over the rows cells
                  row.cells.map((cell, index) => (
                    <BodyCell {...cell.getCellProps()} key={index}>
                      {
                        // Render the cell contents
                        cell.render('Cell')
                      }
                    </BodyCell>
                  ))
                }
              </RowWrapper>
            )
          })
        }
      </div>
      <PaginationWrapper>
        <div className="pagination">
          <button onClick={() => gotoPage(0)} disabled={!canPreviousPage}>
            {'<<'}
          </button>{' '}
          <button onClick={() => previousPage()} disabled={!canPreviousPage}>
            {'<'}
          </button>{' '}
          <button onClick={() => nextPage()} disabled={!canNextPage}>
            {'>'}
          </button>{' '}
          <button onClick={() => gotoPage(pageCount - 1)} disabled={!canNextPage}>
            {'>>'}
          </button>{' '}
        </div>
        <span>
          Page{' '}
          <strong>
            {pageIndex + 1} of {pageOptions.length}
          </strong>{' '}
        </span>
      </PaginationWrapper>
    </TableWrapper>
  )
}

export default Table
