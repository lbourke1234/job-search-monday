import { Link } from 'react-router-dom'
import { Card } from 'react-bootstrap'

const SingleJob = ({ job }) => (
  <Card>
    <Card.Body>
      <Link to={`/${job.company_name}`}>
        <Card.Title>{job.company_name}</Card.Title>
      </Link>
      <h4>Title</h4>
      <Card.Text>{job.title}</Card.Text>
      <h4>Category</h4>
      <Card.Text>{job.category}</Card.Text>
      <h4>Salary</h4>
      <Card.Text>{job.salary}</Card.Text>
      <h4>Type</h4>
      <Card.Text>{job.type}</Card.Text>
    </Card.Body>
  </Card>
)

export default SingleJob
