import { AllowOriginsResponse } from '../dtos/AllowOriginsResponse'

export function responseTo<T>(response: AllowOriginsResponse): T {
  const typedResponse: T = JSON.parse(response.contents)
  return typedResponse
}
