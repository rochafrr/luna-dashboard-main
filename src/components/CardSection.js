import React, {Component} from 'react'

export  class CardSection extends Component {
    render() {
        return(
            <div>
                
                <section className="row m-3 mb-0" style={{ marginTop: ' 2px !important' }}>
                    <div className="card text-white text-center  m-3"
                        style={{ width: "13rem", backgroundColor: "rgb(43, 43, 43)", marginTop: "0px !important" }}>
                        <div className="card-body">
                            <h6 className="card-title" style={{ fontFamily: 'NHaasGroteskDSPro-65Md' }}>Current Price</h6>
                            <p className="card-text fw-bold fs-5" style={{ color: "#006A89" }}>
                            ${this.props.currentPrice} 
                            </p>
                        </div>
                    </div>
                    
                    
                    
                  <div className="card text-white text-center  m-3"
                        style={{ width: "16.5rem", backgroundColor: "rgb(43, 43, 43)", marginTop: "0px !important" }}>
                        <div className="card-body">
                            <h6 className="card-title" style={{ fontFamily: 'NHaasGroteskDSPro-65Md' }}>Total Supply</h6>
                            <p className="card-text fw-bold fs-5" style={{ color: "#006A89" }}>
                                {parseFloat(this.props.Supply).toLocaleString('pt-br', {minimumFractionDigits: 2})}
                            </p>
                        </div>
                    </div>

                    <div className="card text-white text-center  m-3"
                        style={{ width: "13rem", backgroundColor: "rgb(43, 43, 43)", marginTop: "0px !important" }}>
                        <div className="card-body">
                            <h6 className="card-title" style={{ fontFamily: 'NHaasGroteskDSPro-65Md' }}>Positive Sentiments </h6>
                            <p className="card-text fw-bold fs-5" style={{ color: "#006A89" }}>
                                {this.props.sentiment} %
                            </p>
                        </div>
                    </div>
                    <div className="card text-white text-center  m-3"
                        style={{ width: "13rem", backgroundColor: "rgb(43, 43, 43)", marginTop: "0px !important" }}>
                        <div className="card-body">
                            <h6 className="card-title" style={{ fontFamily: 'NHaasGroteskDSPro-65Md' }}> High 24Hrs </h6>
                            <p className="card-text fw-bold fs-5" style={{ color: "rgb(51, 255, 0) " }}>
                                ${this.props.high24}
                            </p>
                        </div>
                    </div>
                    <div className="card text-white text-center  m-3"
                        style={{ width: "13rem", backgroundColor: "rgb(43, 43, 43)", marginTop: "0px !important" }}>
                        <div className="card-body">
                            <h6 className="card-title" style={{ fontFamily: 'NHaasGroteskDSPro-65Md' }}> Low 24Hrs </h6>
                            <p className="card-text fw-bold fs-5" style={{ color: 'rgb(255, 32, 32)' }}>
                                ${this.props.low24}
                            </p>
                        </div>
                    </div>
                </section>
                <div>
                    
                </div>
            </div>
        )
    }
}

export default CardSection
