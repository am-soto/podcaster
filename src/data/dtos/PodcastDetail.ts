export interface PodcastDetail {
  resultCount: number
  results: Result[]
}

interface Result {
  wrapperType: string
  kind: string
  artistId?: number
  collectionId: number
  trackId: number
  artistName?: string
  collectionName: string
  trackName: string
  collectionCensoredName?: string
  trackCensoredName?: string
  artistViewUrl: string
  collectionViewUrl: string
  feedUrl: string
  trackViewUrl: string
  artworkUrl30?: string
  artworkUrl60: string
  artworkUrl100?: string
  collectionPrice?: number
  trackPrice?: number
  collectionHdPrice?: number
  releaseDate: string
  collectionExplicitness?: string
  trackExplicitness?: string
  trackCount?: number
  trackTimeMillis: number
  country: string
  currency?: string
  primaryGenreName?: string
  artworkUrl600: string
  genreIds?: string[]
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  genres: any[]
  episodeUrl?: string
  artistIds?: number[]
  closedCaptioning?: string
  episodeContentType?: string
  episodeGuid?: string
  description?: string
  shortDescription?: string
  previewUrl?: string
  artworkUrl160?: string
  episodeFileExtension?: string
}
