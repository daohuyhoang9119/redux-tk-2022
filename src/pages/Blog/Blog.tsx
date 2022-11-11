import PostList from './components/PostList'
import CreatePost from './components/CreatePost/CreatePost'

export default function Blog() {
  return (
    <div className='p-5'>
      <CreatePost />
      <PostList />
    </div>
  )
}
