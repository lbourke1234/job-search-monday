import { useEffect, useState } from 'react'
import SingleJob from './SingleJob'
import { useLocation } from 'react-router-dom'

const FullJob = () => {
  const [jobs, setJobs] = useState([])

  const search = useLocation().search
  const company = new URLSearchParams(search).get('company')

  const fetchJobs = async () => {
    const response = await fetch(
      `https://strive-jobs-api.herokuapp.com/jobs?company=${company}`
    )
    if (response.ok) {
      const body = await response.json()
      console.log(body.data)
      setJobs(body.data)
    }
  }

  useEffect(() => {
    fetchJobs()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return jobs.map((job) => <SingleJob job={job} key={job._id} />)
}

export default FullJob
