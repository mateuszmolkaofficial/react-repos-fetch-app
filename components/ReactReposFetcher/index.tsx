import { gql, useQuery } from '@apollo/client'
import Table from 'components/Table'
import { Column } from 'react-table'
import { useMemo } from 'react'

export const ALL_REPOS_QUERY = gql`
  query allRepos {
    search(query: "react", type: REPOSITORY, first: 10) {
      nodes {
        ... on Repository {
          name
          url
          forkCount
          stargazerCount
        }
      }
    }
  }
`

type Repo = {
  name: string
  url: string
  stargazerCount: number
  forkCount: number
}

const ReactReposFetcher = () => {
  const { loading, error, data } = useQuery(ALL_REPOS_QUERY)

  const columns: Column<Repo>[] = useMemo(
    () => [
      {
        id: 'name',
        Header: '<name>',
        accessor: ({ name, url }): string[] => [name, url],
        Cell: ({ value }) => (
          <div>
            <a href={value[1]}>{value[0]}</a>
          </div>
        ),
      },
      {
        id: 'stars',
        accessor: 'stargazerCount',
        Header: '🌟 <stars>',
      },
      {
        id: 'forks',
        accessor: 'forkCount',
        Header: '🍴 - <forks>',
      },
    ],
    [],
  )

  if (loading) {
    return <div>Loading...</div>
  }

  if (error) {
    return <div>Something went wrong... Try again later</div>
  }

  return <Table data={data.search.nodes} columns={columns} />
}

export default ReactReposFetcher
