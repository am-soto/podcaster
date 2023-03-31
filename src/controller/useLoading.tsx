import { loadingState } from '@/data/atoms/loading'
import { useRecoilState } from 'recoil'

interface IUseLoading {
  loading: boolean
  updateLoading: (newValue: boolean) => void
}

export const useLoading = (): IUseLoading => {
  const [loading, setLoading] = useRecoilState(loadingState)

  const updateLoading = (newValue: boolean) => {
    setLoading(newValue)
  }

  return {
    loading,
    updateLoading
  }
}
