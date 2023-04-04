import { renderHook, waitFor } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import { RecoilRoot } from 'recoil'
import { usePodcasts } from './usePodcasts'
import { podcastsModel } from '@/mocks/api/podcasts'

describe('usePodcasts', () => {
  it('should return podcasts', async () => {
    const { result } = renderHook(usePodcasts, { wrapper: RecoilRoot })

    await waitFor(() => expect(result.current.podcasts.length).toEqual(podcastsModel.length))
  })
})
