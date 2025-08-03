import React, { Component } from 'react';
import './CurrencyConverter.css';

class CurrencyConverter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      rupees: '',
      euros: '',
      convertedAmount: null,
      conversionType: 'INR_TO_EUR'
    };

    // Exchange rate: 1 EUR = 89.5 INR (approximate)
    this.EUR_TO_INR_RATE = 89.5;
    this.INR_TO_EUR_RATE = 1 / this.EUR_TO_INR_RATE;

    // Binding methods to use 'this' keyword
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleRupeeChange = this.handleRupeeChange.bind(this);
    this.handleEuroChange = this.handleEuroChange.bind(this);
    this.resetConverter = this.resetConverter.bind(this);
  }

  // Handle form submission and conversion
  handleSubmit() {
    if (this.state.rupees && this.state.conversionType === 'INR_TO_EUR') {
      const euroAmount = parseFloat(this.state.rupees) * this.INR_TO_EUR_RATE;
      this.setState({
        convertedAmount: `₹${this.state.rupees} = €${euroAmount.toFixed(2)}`,
        conversionType: 'INR_TO_EUR'
      });
    } else if (this.state.euros && this.state.conversionType === 'EUR_TO_INR') {
      const rupeeAmount = parseFloat(this.state.euros) * this.EUR_TO_INR_RATE;
      this.setState({
        convertedAmount: `€${this.state.euros} = ₹${rupeeAmount.toFixed(2)}`,
        conversionType: 'EUR_TO_INR'
      });
    }
  }

  handleRupeeChange(event) {
    this.setState({
      rupees: event.target.value,
      euros: '',
      convertedAmount: null,
      conversionType: 'INR_TO_EUR'
    });
  }

  handleEuroChange(event) {
    this.setState({
      euros: event.target.value,
      rupees: '',
      convertedAmount: null,
      conversionType: 'EUR_TO_INR'
    });
  }

  resetConverter() {
    this.setState({
      rupees: '',
      euros: '',
      convertedAmount: null,
      conversionType: 'INR_TO_EUR'
    });
  }

  render() {
    return (
      <div className="currency-converter">
        <h3>Currency Converter</h3>
        <p className="converter-description">
          Convert between Indian Rupees (INR) and Euros (EUR)
        </p>
        
        <div className="converter-form">
          <div className="input-group">
            <label htmlFor="rupees">Indian Rupees (INR):</label>
            <input
              type="number"
              id="rupees"
              value={this.state.rupees}
              onChange={this.handleRupeeChange}
              placeholder="Enter amount in INR"
              className="currency-input"
            />
          </div>

          <div className="conversion-divider">OR</div>

          <div className="input-group">
            <label htmlFor="euros">Euros (EUR):</label>
            <input
              type="number"
              id="euros"
              value={this.state.euros}
              onChange={this.handleEuroChange}
              placeholder="Enter amount in EUR"
              className="currency-input"
            />
          </div>

          <div className="button-group">
            <button
              onClick={this.handleSubmit}
              className="btn btn-convert"
              disabled={!this.state.rupees && !this.state.euros}
            >
              Convert
            </button>
            <button
              onClick={this.resetConverter}
              className="btn btn-reset"
            >
              Reset
            </button>
          </div>
        </div>

        {this.state.convertedAmount && (
          <div className="conversion-result">
            <h4>Conversion Result:</h4>
            <p className="result-amount">{this.state.convertedAmount}</p>
            <p className="exchange-rate">
              Exchange Rate: 1 EUR = ₹{this.EUR_TO_INR_RATE}
            </p>
          </div>
        )}

        <div className="converter-info">
          <h4>Event Handling Features:</h4>
          <ul>
            <li>✓ handleSubmit event for conversion</li>
            <li>✓ onChange events for input handling</li>
            <li>✓ Click events for buttons</li>
            <li>✓ 'this' keyword binding in class component</li>
          </ul>
        </div>
      </div>
    );
  }
}

export default CurrencyConverter;
