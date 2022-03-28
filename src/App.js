import React, { useEffect, useState } from 'react'
import './App.css';
import instance from './axios'
import Banner from './compenents/Banner';
import Navbar from './compenents/Navbar';
import Row from './compenents/Row'
import requests from './request'

const App = () => {
	// const [data, setData] = useState({});
	// useEffect(() => {
	// 	instance.get(requests.fetchTrending).then((res) => setData(res));
	// }, [])

	// console.log(data)

	return (
		<div className='app'>
			<Navbar />
			<Banner />

			<Row title={'NETFLIX ORIGINALS'} fetchUrl={requests.fetchNetflixOriginals} isLargeRow={true} />
			<Row title={'Trending Now'} fetchUrl={requests.fetchTrending} isLargeRow={false} />
			<Row title={'Action Movies'} fetchUrl={requests.fetchActionMovies} isLargeRow={false} />
			<Row title={'Comedy Movies'} fetchUrl={requests.fetchComedyMovies} isLargeRow={false} />
			<Row title={'Horror Movies'} fetchUrl={requests.fetchHorrorovies} isLargeRow={false} />
			<Row title={'Romance Movies'} fetchUrl={requests.fetchRomanceovies} isLargeRow={false} />
			<Row title={'Documentaries'} fetchUrl={requests.fetchDocumentaries} isLargeRow={false} />
		</div>
	)
}

export default App