import axios from 'axios'

class PostsService {
    static getSingleProduct = () => axios.get('https://dummyjson.com/products/7')
}
export default PostsService