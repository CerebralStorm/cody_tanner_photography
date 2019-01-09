import React from 'react'
import Header from './header'
import Footer from './footer'
// import FlashMessage from './flash_message'

class App extends React.Component {
  render() {
    return (
      <div>
        <Header />
        {this.props.children}
        <Footer />
      </div>
    );
  }
}

export default App;