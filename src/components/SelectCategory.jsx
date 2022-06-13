import { Form } from 'react-bootstrap'

const SelectCategory = ({ setSelectValue, fetchCategory }) => (
  <Form>
    <Form.Group controlId="exampleForm.SelectCustom">
      <Form.Label>Select Category</Form.Label>
      <Form.Control
        as="select"
        custom
        onChange={(e) => {
          fetchCategory(e.target.value)
        }}
      >
        <option> </option>
        <option>All others</option>
        <option>Business</option>
        <option>Customer Service</option>
        <option>Data</option>
        <option>Design</option>
        <option>DevOps / Sysadmin</option>
        <option>Finance / Legal</option>
        <option>Human Resources</option>
        <option>Marketing</option>
        <option>Product</option>
        <option>QA</option>
        <option>Sales</option>
        <option>Software Development</option>
        <option>Teaching</option>
        <option>Writing</option>
      </Form.Control>
    </Form.Group>
  </Form>
)

export default SelectCategory
