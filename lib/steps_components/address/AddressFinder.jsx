import React, { Component } from 'react';
import axios from 'axios';

class AddressFinder extends Component {

    constructor(props) {
        super(props);
        this.state = {
            addressList: [],
            selectedAddress: {
                address1: '',
                address2: '',
                address3: '',
                town: '',
                county: '',
            },
            hasRun: false,
        }
    }

    componentDidMount() {
        const { postcode } = this.props;

        axios.get('https://www.choosewisely.co.uk/ajax/address-by-postcode', {
            params: {
                f: 'FormActions',
                postcode,
            },
        })
            .then(response => {
                const { data: { result } } = response;

                this.setState({
                    addressList: result
                })
            })
    }

    updateselectedAddress = () => {
        return (e) => {
            const { addressList } = this.state;
            const selectedAddress = addressList[e.currentTarget.value]
            this.setState({
                selectedAddress,
                hasRun: true,
            });
        }
    }


    render() {
        const {
            hasRun,
            addressList,
            selectedAddress: {
                address1,
                address2,
                address3,
                town,
                county,
            }
        } = this.state;

        const {
            updateAddressStep,
            step
        } = this.props

        const hasAddresses = addressList.length > 0;

        return (
            <div className="rsc-address">
                {
                    hasAddresses &&
                    <select name="addressList" id="addressList" onChange={this.updateselectedAddress()}>
                        <option disabled selected>Select Address...</option>
                        {
                            addressList.map((address, index) => {
                                const { addressFull } = address;
                                return (
                                    <option key={addressFull} name={addressFull} value={index}>
                                        {addressFull}
                                    </option>
                                )
                            })
                        }
                    </select>
                }
                <div>
                    <input type="text" value={address1} />
                </div>
                <div>
                    <input type="text" value={address2} />
                </div>
                <div>
                    <input type="text" value={address3} />
                </div>
                <div>
                    <input type="text" value={town} />
                </div>
                <div>
                    <input type="text" value={county} />
                </div>
                {hasRun && this.state.selectedAddress &&
                    // TODO WTF wont it let me use deconstructed value?
                    <button onClick={() => updateAddressStep(this.state.selectedAddress, step)}>Use this address</button>
                }

            </div>
        )
    }
}

export default AddressFinder