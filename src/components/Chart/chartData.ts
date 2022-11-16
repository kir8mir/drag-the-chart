export type DailyStars = {
  date: Date,
  stars: number,
}

export type Series = {
  label: string,
  data: DailyStars[]
}



export const data: Series[] = [
  {
    label: 'React Charts',
    data: [
      {
        date: new Date(),
        stars: 202123,
      }
    ]
  },

  {
    label: 'React Query',
    data: [
      {
        date: new Date(),
        stars: 10234230,
      }
    ]
  }
]