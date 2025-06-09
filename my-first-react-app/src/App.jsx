import React, { useMemo, useState } from 'react'
import './styles/App.css'
import PostList from './components/PostList'
import PostForm from './components/PostForm'
import PostFilter from './components/PostFIlter'

function App() {
	const [posts, setPosts] = useState([
		{ id: 1, title: 'фффф', body: 'пппп' },
		{ id: 2, title: 'аааа', body: 'ууу' },
		{ id: 3, title: 'шшшш', body: 'ееее' },
	])

	// const [selectedSort, setSelectedSort] = useState('')
	// const [searchQuery, setSearchQuery] = useState('')
	const [filter, setFilter] = useState({ sort: '', query: '' })

	const sortedPosts = useMemo(() => {
		console.log('Проверка')

		if (filter.sort) {
			return [...posts].sort((a, b) =>
				a[filter.sort].localeCompare(b[filter.sort])
			)
		}
		return posts
	}, [filter.sort, posts])

	const sortedAndSearchedPosts = useMemo(() => {
		return sortedPosts.filter(posts =>
			posts.title.toLowerCase().includes(filter.query.toLowerCase())
		)
	}, [filter.query, sortedPosts])

	const createPost = newPost => {
		setPosts([...posts, newPost])
	}

	const removePost = post => {
		setPosts(posts.filter(p => p.id !== post.id))
	}

	return (
		<div className='App'>
			<PostForm create={createPost} />

			<hr style={{ marginBlock: '15px' }} />
			<PostFilter filter={filter} setFilter={setFilter} />

			<PostList
				remove={removePost}
				posts={sortedAndSearchedPosts}
				title={'Список постов:'}
			/>
		</div>
	)
}

export default App
