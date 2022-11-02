import './App.css'
import React, { Component } from 'react';
import CardSection from './components/CardSection';
import ChartSection from './components/ChartSection';

export default class App extends Component {
  

    constructor() {
      super();
      this.state = {
        Id: "terra-luna",
        Data: {}
      }
    }
    fetchData = async () => {
      let data = await fetch('https://api.coingecko.com/api/v3/coins/terra-luna')
      let JsonData = await data.json()
      this.setState({ Id: this.state.Id, Data: JsonData })
  
    }
    handleSubmit = async (event) => {
      console.log(event.target.value)
      await this.setState({ Id: event.target.value, Data: this.state.Data })
      this.fetchData()
    }
  
    componentDidMount() {
      this.fetchData()
    }
  
    componentWillUnmount() {
      clearInterval(this.interval);
    }
  
    render() {
      return (
  
        <div>
            
  
          <CardSection currentPrice={this.state.Data.market_data ? this.state.Data.market_data.current_price["usd"] : ""}
            mCap24={this.state.Data.market_data ? this.state.Data.market_data.market_cap_change_percentage_24h : ""}
            Supply={this.state.Data.market_data ? this.state.Data.market_data.circulating_supply : ""} atl={this.state.Data.market_data ? this.state.Data.market_data.ath.usd : ""}
            sentiment={this.state.Data.sentiment_votes_up_percentage} high24={this.state.Data.market_data ? this.state.Data.market_data.high_24h["usd"] : ""}
            low24={this.state.Data.market_data ? this.state.Data.market_data.low_24h["usd"] : ""} />
          <ChartSection Id={this.state.Id} priceChange24={this.state.Data.market_data ? this.state.Data.market_data.price_change_24h_in_currency.usd : ""}
            MarketCap={this.state.Data.market_data ? this.state.Data.market_data.market_cap.usd : ""}
            TotVol={this.state.Data.market_data ? this.state.Data.market_data.total_volume.usd : ""}
            Circulating={this.state.Data.market_data ? this.state.Data.market_data["circulating_supply"] : ""}
  
          />
        </div>
      )
    }
  }