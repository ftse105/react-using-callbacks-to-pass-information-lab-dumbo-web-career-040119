import React, { Component } from 'react';
import chromeBoi from './data.js'
import Cell from './Cell.js'
import ColorSelector from './ColorSelector.js'

export default class Matrix extends Component {

  state = {
    selectedColor: '#FFF'
  }

  setColorMethod = (str) => {
    this.setState({
      selectedColor: str
    })
  }

  getColorMethod = () => (this.state.selectedColor)


  genRow = (vals) => (
    vals.map((val, idx) => <Cell key={idx} color={val} getColorMethod={this.getColorMethod}/>)
  )

  genMatrix = () => (
    this.props.values.map((rowVals, idx) => <div key={idx} className="row">{this.genRow(rowVals)}</div>)
  )


  render() {
    return (
      <div id="app">
        <ColorSelector  setColorMethod={this.setColorMethod}/>
        <div id="matrix">
          {this.genMatrix()}
        </div>
      </div>
    )
  }

}

Matrix.defaultProps = {
  values: chromeBoi
}
