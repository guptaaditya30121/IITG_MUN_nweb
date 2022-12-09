import React,{useState,useEffect} from 'react'
import './Secretariat.css';
function Profile(){
    return(
        <>
            <div className="profile">

            </div>
        </>
    );
}
export default function Secretariat() {
    const [screenWidth, setScreenWidth] = useState(window.innerWidth)
    useEffect(() => {
    
        const changeWidth = () => {
          setScreenWidth(window.innerWidth);
        }
        window.addEventListener('resize', changeWidth)
        return () => {
            window.removeEventListener('resize', changeWidth)
        }
    
      },[])
  return (
    <>
    <div className='page'>
            {(screenWidth > 750) &&<div className="eclipse"></div>}
            {(screenWidth > 750) &&<div className="eclipse-2"></div>}
            {(screenWidth > 750) &&<div className="heading">
                <div className="block1"></div>
                <div className="text">
                    THE SECRETARIAT
                </div>
                <div className="block2"></div>
            </div>}
            {(screenWidth < 750) && <div className="text2">
                    THE SECRETARIAT
                </div>}
            <div className="list_people">

            </div>
    </div>
    <div className="profile">
        mfkdskl
    </div>
    </>
  );
}
