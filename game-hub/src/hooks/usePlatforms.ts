import useData from "./useData";
import platforms from '@/data/Platforms'

interface Platform{
    id: number
    name: string
    slug: string
}

// const usePlatforms = () => useData<Platform>('/platforms/lists/parents')
const usePlatforms = () =>({data: platforms, isLoading: false, error:null})


export default usePlatforms; 