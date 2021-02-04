import fnsAdd from 'date-fns/add'
import fnsSub from 'date-fns/sub'
import fnsFormat from 'date-fns/format'

export const SORT_ITEMS = [
  { value: 'popularity.desc', name: 'Most Popular' },
  { value: 'release_date.desc', name: 'Recently Release' },
  { value: 'vote_average.desc', name: 'Highest Rating ' },
]

const today = fnsFormat(new Date(), 'yyyy-MM-dd')
export const next4Month = fnsFormat(fnsAdd(new Date(), { months: 4 }), 'yyyy-MM-dd')
const next2Day = fnsFormat(fnsAdd(new Date(), { days: 2 }), 'yyyy-MM-dd')
const next3Week = fnsFormat(fnsAdd(new Date(), { weeks: 3, days: 2 }), 'yyyy-MM-dd')
const lastMonth1Week = fnsFormat(
  fnsSub(new Date(), { months: 1, weeks: 1 }),
  'yyyy-MM-dd'
)

export const movieTypeMapping = {
  ALL: {
    releaseDateStart: '',
    releaseDateEnd: next4Month,
    ratingStart: 0,
    ratingEnd: 10,
  },
  UPCOMING: {
    releaseDateStart: next2Day,
    releaseDateEnd: next3Week,
    ratingStart: 0,
    ratingEnd: 10,
  },
  NOW_PLAYING: {
    releaseDateStart: lastMonth1Week,
    releaseDateEnd: today,
    ratingStart: 0,
    ratingEnd: 10,
  },
  TOP_RATED: {
    releaseDateStart: '',
    releaseDateEnd: next4Month,
    ratingStart: 0,
    ratingEnd: 10,
  },
}
