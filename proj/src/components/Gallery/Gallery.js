import React, {useState, useEffect} from 'react';
import AOS from "aos";
import "aos/dist/aos.css";
import "./Gallery.css";
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import $ from 'jquery';
import Logo from "../assets/logo-gallery.png";
import sanityClient from "../../client";

const Gallery = () => {
    const [screenWidth, setScreenWidth] = useState(window.innerWidth)
    const [scrollX, setscrollX] = useState(0);
    const [gallery, setGallery] = useState();

    useEffect(() => {
      sanityClient
        .fetch(
          `*[_type == "gallery"]{
                      edition_num,
                      img_urls
                  }`
        )
        .then((data) => setGallery(data))
        .catch(console.error);
    }, []);

    useEffect(() => {
        AOS.init({duration:2000});
        const changeWidth = () => {
          setScreenWidth(window.innerWidth);
        }
        window.addEventListener('resize', changeWidth)
        return () => {
            window.removeEventListener('resize', changeWidth)
        }
    
      },[])
      const slide = (shift) => {
      };

    return ( 
        <div>
            {(screenWidth > 750) && <div className="eclipse"></div>}
            {(screenWidth > 750) && <div className="eclipse-2"></div>}
            {(screenWidth > 750) && <div className="heading">
                <div className="block1"></div>
                <div className="text">
                    GALLERY
                </div>
                <div className="block2"></div>
            </div>}
            {(screenWidth < 750) && <div className="text2">
                GALLERY
            </div>}
            {gallery &&
              gallery.map( (edition) => (
                <div className='parent'data-aos="fade-in">
                    <h2 className='edition'>{edition.edition_num}</h2>
                    <div className="arrange">
                        <ChevronLeftIcon id="scroll-icon" className='left-angle'/>
                        <div className="cardd-container" >
                            {edition.img_urls.map( (img_url) => (
                              <img className='cardd' id="tp" 
                                src = {img_url || Logo}
                                alt = "ImageNotFound"
                              ></img>
                            ))}                      
                        </div>
                        <ChevronRightIcon id="scroll-icon" className='right-angle'/>
                    </div>
                </div>
              ))
            }
        </div>
     );
}
 
export default Gallery;
