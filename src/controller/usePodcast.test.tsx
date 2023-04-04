import { renderHook, waitFor } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import { RecoilRoot } from 'recoil'
import { usePodcast } from './usePodcast'
import { podcastDetailsModel } from '@/mocks/api/podcastDetails'

describe('usePodcast', () => {
  it('should return podcast', async () => {
    const { result } = renderHook(() => usePodcast(podcastDetailsModel.id), { wrapper: RecoilRoot })

    await waitFor(() => expect(result.current.podcast?.title).toEqual(podcastDetailsModel.title))
  })
})
