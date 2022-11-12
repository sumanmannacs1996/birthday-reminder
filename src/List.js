import React from 'react'

function List({ peoples }) {
	return (
		<>
			{peoples.map((peoples) => {
				const { id, name, age, image } = peoples
				return (
					<article key={id} className='person'>
						<img src={image} alt={name} />
						<div>
							<h4>{name}</h4>
							<p>{age} years</p>
						</div>
					</article>
				)
			})}
		</>
	)
}

export default List
