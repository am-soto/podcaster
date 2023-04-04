import { act, renderHook } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import { useLoading } from './useLoading'
import { RecoilRoot } from 'recoil'

describe('useLoading', () => {
  it('should update loading', async () => {
    const { result } = renderHook(useLoading, { wrapper: RecoilRoot })

    expect(result.current.loading).toEqual(false)
    act(() => result.current.updateLoading(true))
    expect(result.current.loading).toEqual(true)
  })
})
