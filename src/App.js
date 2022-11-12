import { useState } from 'react'
import './App.css'
import data from './data'
import List from './List'

function App() {
	const [peoples, setPeople] = useState(data)
	return (
		<main>
			<section className='container'>
				<h3>{peoples.length} birthdays today</h3>
				<List peoples={peoples} />
				<button onClick={() => setPeople([])}>Clear All</button>
			</section>
		</main>
	)
}

export default App
