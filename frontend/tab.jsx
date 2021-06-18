import { divide } from 'lodash'
import React from 'react'
import App from './app.jsx'

class Tab extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      index: 0
    }
  }

  render() {
    return (
      <div className = "tabs">
        <h1>Tabs</h1>
          {this.props.tabs.map((el, idx) => {
            return (
              <div>
              <ul onClick={ this.changeTab.bind(this, idx) } className="tab">{el.title}: </ul>
              <header className="pane">
                {this.state.index === idx ? el.content : ""}
              </header>
            </div>
            )      
          }
      </div>
    )
  }

  changeTab(idx){
    this.setState({index: idx})
  }
}

export default Tab
