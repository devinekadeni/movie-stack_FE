declare module '*.graphql' {
  import { DocumentNode } from 'graphql'

  const value: {
    [key: string]: DocumentNode
  }

  export = value
}

declare module 'jest-next-dynamic'
