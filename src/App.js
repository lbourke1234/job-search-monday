import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Container, Row, Col } from 'react-bootstrap'
import SearchBar from './components/SearchBar'
import { useState, useEffect } from 'react'
import JobsList from './components/JobsList'
import FullJob from './components/FullJob'
import SelectCategory from './components/SelectCategory'

const App = () => {
  const [searchText, setSearchText] = useState('')
  const [jobs, setJobs] = useState([])

  const fetchSearchApi = async (searchText) => {
    const response = await fetch(
      `https://strive-jobs-api.herokuapp.com/jobs?search=${searchText}&limit=10`
    )
    if (response.ok) {
      const body = await response.json()
      console.log(body.data)
      setJobs(body.data)
    }
  }

  useEffect(() => {
    fetchSearchApi(searchText)
  }, [searchText])

  return (
    <BrowserRouter>
      <Container>
        <Row>
          <Col>
            <h1 className="text-center">Job Search</h1>
          </Col>
          <SearchBar setSearchText={setSearchText} />
          <SelectCategory />
        </Row>
        <Row></Row>
        <hr />
        <Routes>
          <Route path={'/'} element={<JobsList jobs={jobs} />} />
          <Route path={'/:company'} element={<FullJob />} />
        </Routes>
      </Container>
    </BrowserRouter>
  )
}

export default App
