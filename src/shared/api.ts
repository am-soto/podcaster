export async function get<T>(url: string): Promise<T> {
  return fetch(url)
    .then((response) => {
      return response.json() as Promise<T>
    })
    .catch((e) => {
      throw new Error(e)
    })
}
