import React from 'react'
import Select from 'react-select'//https://github.com/JedWatson/react-select
import 'react-select/dist/react-select.css'

const options = [
    { value: 'chocolate', label: 'Chocolate' },
    { value: 'strawberry', label: 'Strawberry' },
    { value: 'vanilla', label: 'Vanilla' }
]

class CSelect extends React.Component {
    state = {
        selectedOption: null,
    }
    handleChange = (selectedOption) => {
        this.setState({ selectedOption });
        console.log(`Option selected:`, selectedOption);
    }
    render() {
        const { selectedOption } = this.state;

        return (
            <Select
                value={selectedOption}
                onChange={this.handleChange}
                options={options} />
        )
    }
}

export default CSelect