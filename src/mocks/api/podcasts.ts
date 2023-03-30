import { rest } from 'msw'

export const podcastModel = [
  {
    id: '1535809341',
    image:
      'https://is1-ssl.mzstatic.com/image/thumb/Podcasts113/v4/f2/21/fa/f221fabd-017f-5125-633b-f1fe4f39802a/mza_182995249085044287.jpg/170x170bb.png',
    title: 'The Joe Budden Podcast',
    author: 'The Joe Budden Network',
    description:
      'Tune into Joe Budden and his friends. Follow along the crazy adventures of these very random friends.',
    episodes: []
  },
  {
    id: '1096830182',
    image:
      'https://is4-ssl.mzstatic.com/image/thumb/Podcasts113/v4/46/39/69/46396977-6d87-f120-6432-6373dcefdf9b/mza_6589930413574180525.jpg/170x170bb.png',
    title: 'Drink Champs',
    author: 'Interval Presents',
    description:
      'Legendary Queens rapper-turned show host N.O.R.E. teams up with Miami hip-hop pioneer DJ EFN for a night of boozy conversation and boisterous storytelling. The hosts and guests engage together in fun, light-hearted conversation - looking back at their paths to success, highlighting their lives, friendships, and iconic moments within their career. In this unfiltered series, drinks are flowing and jokes are rolling - take a seat at the table with N.O.R.E & EFN. You Gotta Relax!',
    episodes: []
  },
  {
    id: '1460157002',
    image:
      'https://is2-ssl.mzstatic.com/image/thumb/Podcasts125/v4/7b/cf/f6/7bcff6bb-5f99-6c2f-c6c5-3a9799f3df21/mza_8544742664200824246.jpg/170x170bb.png',
    title: 'Million Dollaz Worth Of Game',
    author: 'Barstool Sports',
    description:
      'The Million Dollaz Worth of Game show, a weekly podcast with rapper/actor @GillieDaKing and social media influencer and disruptor @Wallo267 - The perfect blend of discussing music, real life issues, personal experiences, honest advice and comedy\n\nYou can find every episode of this show on Apple Podcasts, Spotify or YouTube. Prime Members can listen ad-free on Amazon Music. For more, visit barstool.link/mworthofgame',
    episodes: []
  },
  {
    id: '1275172907',
    image:
      'https://is4-ssl.mzstatic.com/image/thumb/Podcasts123/v4/9b/56/5c/9b565c54-ffd7-be9d-ff96-be60e36ae59a/mza_14743797108223744429.jpeg/170x170bb.png',
    title: 'DISGRACELAND',
    author: 'Double Elvis',
    description:
      'Disgraceland is the award winning music podcast hosted by Jake Brennan that explores the alleged true crime antics and criminal connections of musicians we love like Jerry Lee Lewis, the Rolling Stones, Taylor Swift, David Bowie, Cardi B, the Grateful Dead, Amy Winehouse, Bob Marley, and more. Disgraceland is a scripted, single voice narrative storytelling podcast that melds true crime, music history, mystery, and misadventure. Disgraceland is not a journalistic podcast. It is an entertainment podcast inspired by true events. Certain dialogue and scenes are sometimes fictionalized for dramatic purposes as they are in most scripted entertainment based on true events. Sources and credits for each episode are available at disgracelandpod.com. Full scripted episodes are released every Tuesday. Bonus “After Party” episodes are released every Thursday. Disgraceland is available wherever you get your podcasts.',
    episodes: []
  },
  {
    id: '1658497449',
    image:
      'https://is2-ssl.mzstatic.com/image/thumb/Podcasts112/v4/cd/82/0c/cd820cfe-fce5-56aa-ef2c-da67576fd4b3/mza_3363134633883714623.jpeg/170x170bb.png',
    title: 'Back on Figg',
    author: 'T-Rell B.O.F.',
    description: 'Back on Figg Youtube Live Stream. Hosted by T-Rell and Smacc',
    episodes: []
  }
]

export const podcastsDTO = {
  contents:
    '{"feed":{"author":{"name":{"label":"iTunes Store"}, "uri":{"label":"http://www.apple.com/itunes/"}}, "entry":[\n{"im:name":{"label":"The Joe Budden Podcast"}, "im:image":[\n{"label":"https://is3-ssl.mzstatic.com/image/thumb/Podcasts113/v4/f2/21/fa/f221fabd-017f-5125-633b-f1fe4f39802a/mza_182995249085044287.jpg/55x55bb.png", "attributes":{"height":"55"}}, \n{"label":"https://is5-ssl.mzstatic.com/image/thumb/Podcasts113/v4/f2/21/fa/f221fabd-017f-5125-633b-f1fe4f39802a/mza_182995249085044287.jpg/60x60bb.png", "attributes":{"height":"60"}}, \n{"label":"https://is1-ssl.mzstatic.com/image/thumb/Podcasts113/v4/f2/21/fa/f221fabd-017f-5125-633b-f1fe4f39802a/mza_182995249085044287.jpg/170x170bb.png", "attributes":{"height":"170"}}], "summary":{"label":"Tune into Joe Budden and his friends. Follow along the crazy adventures of these very random friends."}, "im:price":{"label":"Get", "attributes":{"amount":"0", "currency":"USD"}}, "im:contentType":{"attributes":{"term":"Podcast", "label":"Podcast"}}, "rights":{"label":"© All rights reserved"}, "title":{"label":"The Joe Budden Podcast - The Joe Budden Network"}, "link":{"attributes":{"rel":"alternate", "type":"text/html", "href":"https://podcasts.apple.com/us/podcast/the-joe-budden-podcast/id1535809341?uo=2"}}, "id":{"label":"https://podcasts.apple.com/us/podcast/the-joe-budden-podcast/id1535809341?uo=2", "attributes":{"im:id":"1535809341"}}, "im:artist":{"label":"The Joe Budden Network", "attributes":{"href":"https://podcasts.apple.com/us/artist/the-joe-budden-network/1535844019?uo=2"}}, "category":{"attributes":{"im:id":"1310", "term":"Music", "scheme":"https://podcasts.apple.com/us/genre/podcasts-music/id1310?uo=2", "label":"Music"}}, "im:releaseDate":{"label":"2023-03-25T00:00:00-07:00", "attributes":{"label":"March 25, 2023"}}}, \n{"im:name":{"label":"Drink Champs"}, "im:image":[\n{"label":"https://is4-ssl.mzstatic.com/image/thumb/Podcasts113/v4/46/39/69/46396977-6d87-f120-6432-6373dcefdf9b/mza_6589930413574180525.jpg/55x55bb.png", "attributes":{"height":"55"}}, \n{"label":"https://is1-ssl.mzstatic.com/image/thumb/Podcasts113/v4/46/39/69/46396977-6d87-f120-6432-6373dcefdf9b/mza_6589930413574180525.jpg/60x60bb.png", "attributes":{"height":"60"}}, \n{"label":"https://is4-ssl.mzstatic.com/image/thumb/Podcasts113/v4/46/39/69/46396977-6d87-f120-6432-6373dcefdf9b/mza_6589930413574180525.jpg/170x170bb.png", "attributes":{"height":"170"}}], "summary":{"label":"Legendary Queens rapper-turned show host N.O.R.E. teams up with Miami hip-hop pioneer DJ EFN for a night of boozy conversation and boisterous storytelling. The hosts and guests engage together in fun, light-hearted conversation - looking back at their paths to success, highlighting their lives, friendships, and iconic moments within their career. In this unfiltered series, drinks are flowing and jokes are rolling - take a seat at the table with N.O.R.E & EFN. You Gotta Relax!"}, "im:price":{"label":"Get", "attributes":{"amount":"0", "currency":"USD"}}, "im:contentType":{"attributes":{"term":"Podcast", "label":"Podcast"}}, "rights":{"label":"© 2023 Interval Presents"}, "title":{"label":"Drink Champs - Interval Presents"}, "link":{"attributes":{"rel":"alternate", "type":"text/html", "href":"https://podcasts.apple.com/us/podcast/drink-champs/id1096830182?uo=2"}}, "id":{"label":"https://podcasts.apple.com/us/podcast/drink-champs/id1096830182?uo=2", "attributes":{"im:id":"1096830182"}}, "im:artist":{"label":"Interval Presents", "attributes":{"href":"https://podcasts.apple.com/us/artist/iheartradio/284341002?uo=2"}}, "category":{"attributes":{"im:id":"1310", "term":"Music", "scheme":"https://podcasts.apple.com/us/genre/podcasts-music/id1310?uo=2", "label":"Music"}}, "im:releaseDate":{"label":"2023-03-17T00:01:00-07:00", "attributes":{"label":"March 17, 2023"}}}, \n{"im:name":{"label":"Million Dollaz Worth Of Game"}, "im:image":[\n{"label":"https://is1-ssl.mzstatic.com/image/thumb/Podcasts125/v4/7b/cf/f6/7bcff6bb-5f99-6c2f-c6c5-3a9799f3df21/mza_8544742664200824246.jpg/55x55bb.png", "attributes":{"height":"55"}}, \n{"label":"https://is3-ssl.mzstatic.com/image/thumb/Podcasts125/v4/7b/cf/f6/7bcff6bb-5f99-6c2f-c6c5-3a9799f3df21/mza_8544742664200824246.jpg/60x60bb.png", "attributes":{"height":"60"}}, \n{"label":"https://is2-ssl.mzstatic.com/image/thumb/Podcasts125/v4/7b/cf/f6/7bcff6bb-5f99-6c2f-c6c5-3a9799f3df21/mza_8544742664200824246.jpg/170x170bb.png", "attributes":{"height":"170"}}], "summary":{"label":"The Million Dollaz Worth of Game show, a weekly podcast with rapper/actor @GillieDaKing and social media influencer and disruptor @Wallo267 - The perfect blend of discussing music, real life issues, personal experiences, honest advice and comedy\\n\\nYou can find every episode of this show on Apple Podcasts, Spotify or YouTube. Prime Members can listen ad-free on Amazon Music. For more, visit barstool.link/mworthofgame"}, "im:price":{"label":"Get", "attributes":{"amount":"0", "currency":"USD"}}, "im:contentType":{"attributes":{"term":"Podcast", "label":"Podcast"}}, "rights":{"label":"© 2023 Barstool Sports, Inc."}, "title":{"label":"Million Dollaz Worth Of Game - Barstool Sports"}, "link":{"attributes":{"rel":"alternate", "type":"text/html", "href":"https://podcasts.apple.com/us/podcast/million-dollaz-worth-of-game/id1460157002?uo=2"}}, "id":{"label":"https://podcasts.apple.com/us/podcast/million-dollaz-worth-of-game/id1460157002?uo=2", "attributes":{"im:id":"1460157002"}}, "im:artist":{"label":"Barstool Sports", "attributes":{"href":"https://podcasts.apple.com/us/artist/barstool-sports/1524874689?uo=2"}}, "category":{"attributes":{"im:id":"1523", "term":"Music Commentary", "scheme":"https://podcasts.apple.com/us/genre/podcasts-music-music-commentary/id1523?uo=2", "label":"Music Commentary"}}, "im:releaseDate":{"label":"2023-03-19T16:30:00-07:00", "attributes":{"label":"March 19, 2023"}}}, \n{"im:name":{"label":"DISGRACELAND"}, "im:image":[\n{"label":"https://is5-ssl.mzstatic.com/image/thumb/Podcasts123/v4/9b/56/5c/9b565c54-ffd7-be9d-ff96-be60e36ae59a/mza_14743797108223744429.jpeg/55x55bb.png", "attributes":{"height":"55"}}, \n{"label":"https://is2-ssl.mzstatic.com/image/thumb/Podcasts123/v4/9b/56/5c/9b565c54-ffd7-be9d-ff96-be60e36ae59a/mza_14743797108223744429.jpeg/60x60bb.png", "attributes":{"height":"60"}}, \n{"label":"https://is4-ssl.mzstatic.com/image/thumb/Podcasts123/v4/9b/56/5c/9b565c54-ffd7-be9d-ff96-be60e36ae59a/mza_14743797108223744429.jpeg/170x170bb.png", "attributes":{"height":"170"}}], "summary":{"label":"Disgraceland is the award winning music podcast hosted by Jake Brennan that explores the alleged true crime antics and criminal connections of musicians we love like Jerry Lee Lewis, the Rolling Stones, Taylor Swift, David Bowie, Cardi B, the Grateful Dead, Amy Winehouse, Bob Marley, and more. Disgraceland is a scripted, single voice narrative storytelling podcast that melds true crime, music history, mystery, and misadventure. Disgraceland is not a journalistic podcast. It is an entertainment podcast inspired by true events. Certain dialogue and scenes are sometimes fictionalized for dramatic purposes as they are in most scripted entertainment based on true events. Sources and credits for each episode are available at disgracelandpod.com. Full scripted episodes are released every Tuesday. Bonus “After Party” episodes are released every Thursday. Disgraceland is available wherever you get your podcasts."}, "im:price":{"label":"Get", "attributes":{"amount":"0", "currency":"USD"}}, "im:contentType":{"attributes":{"term":"Podcast", "label":"Podcast"}}, "rights":{"label":"© Double Elvis"}, "title":{"label":"DISGRACELAND - Double Elvis"}, "link":{"attributes":{"rel":"alternate", "type":"text/html", "href":"https://podcasts.apple.com/us/podcast/disgraceland/id1275172907?uo=2"}}, "id":{"label":"https://podcasts.apple.com/us/podcast/disgraceland/id1275172907?uo=2", "attributes":{"im:id":"1275172907"}}, "im:artist":{"label":"Double Elvis"}, "category":{"attributes":{"im:id":"1310", "term":"Music", "scheme":"https://podcasts.apple.com/us/genre/podcasts-music/id1310?uo=2", "label":"Music"}}, "im:releaseDate":{"label":"2023-03-28T00:07:00-07:00", "attributes":{"label":"March 28, 2023"}}}, \n{"im:name":{"label":"Back on Figg"}, "im:price":{"label":"Get", "attributes":{"amount":"0", "currency":"USD"}}, "im:image":[\n{"label":"https://is1-ssl.mzstatic.com/image/thumb/Podcasts112/v4/cd/82/0c/cd820cfe-fce5-56aa-ef2c-da67576fd4b3/mza_3363134633883714623.jpeg/55x55bb.png", "attributes":{"height":"55"}}, \n{"label":"https://is3-ssl.mzstatic.com/image/thumb/Podcasts112/v4/cd/82/0c/cd820cfe-fce5-56aa-ef2c-da67576fd4b3/mza_3363134633883714623.jpeg/60x60bb.png", "attributes":{"height":"60"}}, \n{"label":"https://is2-ssl.mzstatic.com/image/thumb/Podcasts112/v4/cd/82/0c/cd820cfe-fce5-56aa-ef2c-da67576fd4b3/mza_3363134633883714623.jpeg/170x170bb.png", "attributes":{"height":"170"}}], "summary":{"label":"Back on Figg Youtube Live Stream. Hosted by T-Rell and Smacc"}, "im:artist":{"label":"T-Rell B.O.F."}, "title":{"label":"Back on Figg - T-Rell B.O.F."}, "link":{"attributes":{"rel":"alternate", "type":"text/html", "href":"https://podcasts.apple.com/us/podcast/back-on-figg/id1658497449?uo=2"}}, "id":{"label":"https://podcasts.apple.com/us/podcast/back-on-figg/id1658497449?uo=2", "attributes":{"im:id":"1658497449"}}, "im:contentType":{"attributes":{"term":"Podcast", "label":"Podcast"}}, "category":{"attributes":{"im:id":"1525", "term":"Music Interviews", "scheme":"https://podcasts.apple.com/us/genre/podcasts-music-music-interviews/id1525?uo=2", "label":"Music Interviews"}}, "im:releaseDate":{"label":"2023-03-28T15:39:00-07:00", "attributes":{"label":"March 28, 2023"}}}], "updated":{"label":"2023-03-29T09:58:43-07:00"}, "rights":{"label":"Copyright 2008 Apple Inc."}, "title":{"label":"iTunes Store: Top Podcasts in Music"}, "icon":{"label":"http://itunes.apple.com/favicon.ico"}, "link":[\n{"attributes":{"rel":"alternate", "type":"text/html", "href":"https://podcasts.apple.com/WebObjects/MZStore.woa/wa/viewTop?cc=us&id=179537&popId=3"}}, \n{"attributes":{"rel":"self", "href":"https://mzstoreservices-int-st.itunes.apple.com/us/rss/toppodcasts/limit=5/genre=1310/json"}}], "id":{"label":"https://mzstoreservices-int-st.itunes.apple.com/us/rss/toppodcasts/limit=5/genre=1310/json"}}}',
  status: {
    url: 'https://itunes.apple.com/us/rss/toppodcasts/limit=5/genre=1310/json',
    // eslint-disable-next-line camelcase
    content_type: 'text/javascript; charset=UTF-8',
    // eslint-disable-next-line camelcase
    http_code: 200,
    // eslint-disable-next-line camelcase
    response_time: 590,
    // eslint-disable-next-line camelcase
    content_length: 2646
  }
}

// Podcast lenght = 5. Copied from https://api.allorigins.win/get?url=https://itunes.apple.com/us/rss/toppodcasts/limit=5/genre=1310/json
export const podcastsAPI = [
  rest.get('https://api.allorigins.win/get', (req, res, ctx) => res(ctx.json(podcastsDTO)))
]
