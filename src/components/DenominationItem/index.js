// Write your code here
import './index.css'

const DenominationItem = props => {
  const {rupees, cashWithdraw} = props

  const {id, value} = rupees

  const withdraw = () => {
    cashWithdraw(value)
  }

  return (
    <li className="li">
      <button className="btn" type="button" onClick={withdraw}>
        {value}
      </button>
    </li>
  )
}
export default DenominationItem
