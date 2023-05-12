// Write your code here
import {Component} from 'react'

import './index.css'

import DenominationItem from '../DenominationItem'

class CashWithdrawal extends Component {
  state = {balance: 2000}

  cashWithdraw = value => {
    this.setState(prevState => ({
      balance: prevState.balance - value,
    }))
  }

  render() {
    const {balance} = this.state
    const {denominationsList} = this.props

    return (
      <div className="container">
        <div className="card">
          <div className="c1">
            <div className="pro">
              <p className="p1">s</p>
            </div>
            <p className="name">Sarah Williams</p>
          </div>
          <div className="c2">
            <p className="bal">Your Balance</p>
            <div>
              <p className="value">{balance}</p>
              <p className="r1">In Rupees</p>
            </div>
          </div>
          <div>
            <p className="w">Withdraw</p>
            <p className="s">CHOOSE SUM (IN RUPEES)</p>
          </div>
          <ul className="ul">
            {denominationsList.map(each => (
              <DenominationItem
                rupees={each}
                key={each.id}
                cashWithdraw={this.cashWithdraw}
              />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}
export default CashWithdrawal
