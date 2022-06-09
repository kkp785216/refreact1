import React, {useContext} from 'react'
import './Portfolio.css'
import {Swiper, SwiperSlide} from 'swiper/react'
import Sidebar from '../../img/sidebar.png'
import Ecommerce from '../../img/ecommerce.png'
import HOC from '../../img/hoc.png'
import MusicApp from '../../img/musicapp.png'
import 'swiper/css'
import { themeContext } from '../../Context/Context'

const Portfolio = () => {
    const theme = useContext(themeContext);
    const {darkMode, transition} = theme.state;
  return (
      <div id='portfolio' className="portfolio">
          <span style={{transition:transition, color:darkMode?'white':''}}>Recent Projects</span>
          <span>Portfolio</span>

          {/* Swiper */}
          <Swiper
          spaceBetween={30}
          slidesPerView={3}
          grabCursor={true}
          className={'portfolio-slider'}
          >
              <SwiperSlide>
                  <img src={Sidebar} alt="" />
              </SwiperSlide>
              <SwiperSlide>
                  <img src={Ecommerce} alt="" />
              </SwiperSlide>
              <SwiperSlide>
                  <img src={MusicApp} alt="" />
              </SwiperSlide>
              <SwiperSlide>
                  <img src={HOC} alt="" />
              </SwiperSlide>
          </Swiper>
          <div className="blur s-blur1" style={{ background: 'rgb(193, 245, 255)', zIndex: '-9' }}></div>
          <div className="blur s-blur2" style={{ background: 'Var(--purple)', zIndex: '-9' }}></div>
      </div>
  )
}

export default Portfolio