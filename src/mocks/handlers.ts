import { rest } from 'msw'
import { podcastsDTO } from './api/podcasts'
import { podcastDetailsDTO } from './api/podcastDetails'

export const handlers = [
  rest.get('https://api.allorigins.win/get', (req, res, ctx) => {
    if (req.url.searchParams.get('url')?.includes('https://itunes.apple.com/us/rss/toppodcasts/')) {
      return res(ctx.json(podcastsDTO))
    }
    if (req.url.searchParams.get('url')?.includes('https://itunes.apple.com/lookup')) {
      return res(ctx.json(podcastDetailsDTO))
    }
  })
]
