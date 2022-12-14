import React, { useState, useEffect} from 'react'
import { GoogleMap, LoadScript, MarkerF, InfoWindowF} from '@react-google-maps/api';
import './Contactus.css';

const containerStyle = {
    height: '100%',
    width:'100%'
};

const center = {
    lat: 26.191131,
    lng:  91.69250
};
const position = {
    lat: 26.191131,
    lng:  91.69219
};
function Contactus() {
  const [selectedCenter, setSelectedCenter] = useState({});
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);
    useEffect(() => {

        const changeWidth = () => {
            setScreenWidth(window.innerWidth);
        }

        window.addEventListener('resize', changeWidth)
        return () => {
            window.removeEventListener('resize', changeWidth)
        }

    }, [])
    return (
      <div className='cont'>
            {(screenWidth > 750) && <div className="eclipse"></div>}
            {(screenWidth > 750) && <div className="eclipse-2"></div>}
            {(screenWidth > 750) && <div className="heading">
                <div className="block1"></div>
                <div className="text">
                    CONTACT US
                </div>
                <div className="block2"></div>
            </div>}
            {(screenWidth < 750) && <div className="text2">
                CONTACT-US
            </div>}
            <div className="vi">
                <ul className='lis'>
                    <li className='li1'>
                        CALL US:
                        <ul className='op'>
                            123456789<br/>
                            123456789<br/>
                            123456789
                        </ul>
                    </li>
                    <li className='li2'>
                       MAIL US:   
                       <ul className='op'>iitgmun@alcheringa.com</ul>
                    </li>
                    <li className='li3'>
                        OUR LOCATION:
                        <div className='card' id = 'map' >
                          <GoogleMap
                              id='map'
                            mapContainerStyle={containerStyle}
                            center={center}
                            zoom={16}
                          >
                            <MarkerF
                            position={position}
                            onClick={() => {
                              setSelectedCenter(center.lat);
                              console.log(center.lat)
                          }}
                            />

                          {/* {selectedCenter && (
                            <InfoWindowF
                                onCloseClick={() => {
                                  setSelectedCenter(null);
                                }}
                                position={{
                                  lat: selectedCenter.latitude,
                                  lng: selectedCenter.longitude
                              }}
                            >
                            </InfoWindowF>
                          )} */}
                          </GoogleMap>
                              
                          </div>
                           
                            
                    </li>
                </ul>
            </div>
        
            
        </div>
    )
  }
  
  export default React.memo(Contactus)
