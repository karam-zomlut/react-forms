import React from 'react'

const celsiusToFahrenheit = c => Math.round((c * 9) / 5 + 32);
const fahrenheitToCelsius = f => Math.round(((f - 32) * 5) / 9);

class Form extends React.Component {
  state = {
    scaleType: 'F',
    tempNum: ''
  }

  HandleChange = (e) => {
    const {target} = e;
    const {name, value} = target;

    this.setState(() => {
      return {[name]: value}
    });
  }

  render(){
    const {scaleType, tempNum} = this.state;
    console.log(this.state)
    return (
        <form>
          <fieldset>
            <legend>Scale</legend>
            <div className="radio">
              <input onChange={this.HandleChange} checked={this.state.scaleType === 'C'} type="radio" id="celsius" name="scaleType" value="C" />
              <label htmlFor="celsius">Celsius</label>
            </div>
            <div className="radio">
              <input onChange={this.HandleChange} checked={this.state.scaleType === 'F'} type="radio" id="fahrenheit" name="scaleType" value="F" />
              <label htmlFor="fahrenheit">Fahrenheit</label>
            </div>
          </fieldset>
            <div className="form-group">
              <input onChange={this.HandleChange} type="number" name='tempNum' value={this.state.tempNum} />
            </div>
            <div className="result">
              <p>{tempNum && (scaleType === 'F' ? fahrenheitToCelsius(tempNum) + 'C' : celsiusToFahrenheit(tempNum) + 'F')}</p>
            </div>
        </form>
    )
  }
}

export default Form