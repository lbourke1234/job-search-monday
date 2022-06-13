import { Link } from 'react-router-dom'
import { Card } from 'react-bootstrap'

const SingleJob = ({ job }) => (
  <Card>
    <Card.Body>
      <Link to={`/${job.company_name}`}>
        <Card.Title>${job.company_name}</Card.Title>
      </Link>
      <Card.Text>${job.title}</Card.Text>
    </Card.Body>
  </Card>
)

export default SingleJob
