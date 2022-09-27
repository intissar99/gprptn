import React from 'react'
import Featurebox from './Featurebox'
import featureimage from '../images/feature_1.png'
import featureimage2 from '../images/feature_2.png'
import featureimage3 from '../images/feature_3.png'


const Home = () => {
  return (
    <div className='column'>
      <div id="main">
        <div className='name' >
          <h1> <span> Welcome to the portal of</span>  GPRO   Consulting</h1>
          <p className='details'> Lorem ipsum dolor sit amet...</p>
        </div>
      </div>
      <div id='features'>
        <div className='a-container'>
          <Featurebox image={featureimage} title='Lorem ipsum dolor sit amet' />
          <Featurebox image={featureimage2} title='Lorem ipsum dolor sit amet' />
          <Featurebox image={featureimage3} title='Lorem ipsum dolor sit amet' />
        </div>
      </div>


    </div>
  )
}

export default Home