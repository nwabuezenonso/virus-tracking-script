import React from 'react'
//importing several component file
//folder automatically loads index file
import { Cards, Chart, CountryPicker } from './components';
import styles from './App.module.css';
//folder automatically loads index file fomr the api folder
import { fetchData } from './api'


//class component
class App extends React.Component {
  //state is used for storing data
  //state with data and country properties
  state = {
    data: {},
    country: ''
  }

  //loads the method when the component is mounted
  //async operation in a component did mount comes right in front of it
  async componentDidMount(){
    const fetchedData = await fetchData()
    
    //setting the state
    this.setState({ data: fetchedData })

  }

  //function to handle country change
  handleCountryChange = async( country ) => {
    console.log(country)
    // fetch the data    
    //set the state
  }

  render(){
    //taking the data from the state and share it using props
    const { data } = this.state

    //nesting components in the root app component
    return (
      <div className={styles.container}>
        {/* passing data as props from the state */}
        <Cards data={data}/>
        <CountryPicker  handleCountryChange={this.handleCountryChange}/>
        <Chart />
      </div>
    );
  }
}

export default App;
