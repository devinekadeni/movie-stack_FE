import { useState, useEffect, Dispatch, SetStateAction } from 'react'

/**
 * UseInfiniteScroll for detecting scroll element position and invoke a callback when the scroll position has reached the bottom scroll position
 * `callback`: (function) => callback will be called when user scroll the page until bottom page
 * `customElement`: (HTMLelement) => if you want to watch scroll position of certain element instead of window's scroll position
 *    ex: e.current or e.target
 */
type CustomElement = HTMLElement | null

type SetIsFetching = Dispatch<SetStateAction<boolean>>
type IsFetching = boolean

type UseInfiniteScroll = (
  callback: () => void,
  customElement: CustomElement
) => [IsFetching, SetIsFetching]

const useInfiniteScroll: UseInfiniteScroll = (callback, customElement = null) => {
  const [isFetching, setIsFetching] = useState(false)

  useEffect(() => {
    customElement
      ? customElement.addEventListener('scroll', elementScrollListener)
      : window.addEventListener('scroll', windowScrollListener)
    return () => {
      customElement
        ? customElement.removeEventListener('scroll', elementScrollListener)
        : window.removeEventListener('scroll', windowScrollListener)
    }
  }, [customElement])

  useEffect(() => {
    if (isFetching) {
      callback()
    }
  }, [isFetching])

  const windowScrollListener = () => {
    // scroll listener for window element (whole page)
    const windowViewPort = window.innerHeight
    const scrollPosition = document.documentElement.scrollTop
    const wholePageHeight = document.documentElement.offsetHeight

    // NOTE: + 1 = for mobile needs, mobile view lack of 1px
    if (windowViewPort + scrollPosition + 1 < wholePageHeight || isFetching) {
      return
    }
    // if user's scroll position reach the buttom of window, setIsFetching(true)
    setIsFetching(true)
  }

  const elementScrollListener = () => {
    // scroll listener for custom element
    const elementHeight = customElement?.offsetHeight || 0
    const scrollPosition = customElement?.scrollTop || 0
    const wholeElementHeight = customElement?.scrollHeight || 0

    // NOTE: + 1 = for mobile needs, mobile view lack of 1px
    if (elementHeight + scrollPosition + 1 < wholeElementHeight || isFetching) {
      return
    }
    // if user's scroll position reach the buttom of element, setIsFetching(true)
    setIsFetching(true)
  }

  return [isFetching, setIsFetching]
}

export default useInfiniteScroll
