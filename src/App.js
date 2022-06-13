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
  const [selectValue, setSelectValue] = useState(' ')

  const searchFunc = (titleSearchResults, companySearchResults) => {
    if (titleSearchResults) {
      return titleSearchResults
    } else {
      return companySearchResults
    }
  }

  const fetchSearchApi = async (searchText) => {
    const response = await fetch(
      `https://strive-jobs-api.herokuapp.com/jobs?search=${searchText}&limit=10`
    )
    if (response.ok) {
      const body = await response.json()

      const titleSearchResults = body.data.filter(
        (job) =>
          job.title.toLowerCase().includes(searchText.toLowerCase()) ||
          job.company_name.toLowerCase().includes(searchText.toLowerCase())
      )

      // const companySearchResults = body.data.filter((job) =>
      //   job.company_name.toLowerCase().includes(searchText.toLowerCase())
      // )

      setJobs(titleSearchResults)
    }
  }

  const fetchCategory = async (selectValue) => {
    const response = await fetch(
      `https://strive-jobs-api.herokuapp.com/jobs?category=${selectValue}&limit=10`
    )

    if (response.ok) {
      const body = await response.json()
      setJobs(body.data)
    }
  }

  useEffect(() => {
    fetchSearchApi(searchText)
  }, [searchText])

  useEffect(
    (selectValue) => {
      if (selectValue !== ' ') {
        fetchCategory(selectValue)
      }
    },
    [selectValue]
  )

  return (
    <BrowserRouter>
      <Container>
        <Row>
          <Col>
            <h1 className="text-center">Job Search</h1>
          </Col>
          <SearchBar setSearchText={setSearchText} />
          <SelectCategory setSelectValue={setSelectValue} fetchCategory={fetchCategory} />
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
