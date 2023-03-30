export interface Feed {
  author: Author
  entry: Entry[]
  updated: Updated
  rights: Rights
  title: Title
  icon: Icon
  link: Link[]
  id: Id
}

interface Updated {
  label: string
}

interface Rights {
  label: string
}

interface Title {
  label: string
}

interface Icon {
  label: string
}

interface Id {
  label: string
}

// AUTHOR
interface Author {
  name: Name
  uri: Uri
}

interface Name {
  label: string
}

interface Uri {
  label: string
}

// ENTRY
interface Entry {
  'im:name': ImName
  'im:image': ImImage[]
  summary: Summary
  'im:price': ImPrice
  'im:contentType': ImContentType
  rights?: Rights
  title: Title
  link: Link
  id: Id
  'im:artist': ImArtist
  category: Category
  'im:releaseDate': ImReleaseDate
}

interface ImName {
  label: string
}

interface ImImage {
  label: string
  attributes: ImageAttributes
}

interface ImageAttributes {
  height: string
}

interface Summary {
  label: string
}

interface ImPrice {
  label: string
  attributes: PriceAttributes
}

interface PriceAttributes {
  amount: string
  currency: string
}

interface ImContentType {
  attributes: ContentTypeAttributes
}

interface ContentTypeAttributes {
  term: string
  label: string
}

interface Rights {
  label: string
}

interface Title {
  label: string
}

interface Id {
  label: string
  attributes: IdAttributes
}

interface IdAttributes {
  'im:id': string
}

interface ImArtist {
  label: string
  attributes?: ArtistAttributes
}

interface ArtistAttributes {
  href: string
}

interface Category {
  attributes: CategoryAttributes
}

interface CategoryAttributes {
  'im:id': string
  term: string
  scheme: string
  label: string
}

interface ImReleaseDate {
  label: string
  attributes: ReleaseDateAttributes
}

interface ReleaseDateAttributes {
  label: string
}

interface Link {
  attributes: Attributes
}

interface Attributes {
  rel: string
  type?: string
  href: string
}
