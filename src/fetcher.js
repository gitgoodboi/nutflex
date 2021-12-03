import instance from './axios'

const fetcher = url => instance.get(url).then(res => res.data)
export default fetcher;