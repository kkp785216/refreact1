import React from 'react'
import './Testimonials.css'
import { Swiper, SwiperSlide } from 'swiper/react'
import ProfilePic1 from '../../img/profile1.jpg'
import ProfilePic2 from '../../img/profile2.jpg'
import ProfilePic3 from '../../img/profile3.jpg'
import ProfilePic4 from '../../img/profile4.jpg'
import ProfilePic5 from '../../img/profile5.jpg'
import ProfilePic6 from '../../img/profile6.jpg'
import { Pagination } from 'swiper'
import 'swiper/css/pagination'
import 'swiper/css'

const Testimonials = () => {
    const clients = [
        {
            img: ProfilePic1,
            revies:
                "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Enim deserunt nulla consequatur. Ex nemo iste fuga magnam dolorum. Animi autem distinctio aperiam repellat aliquid! Repellat aperiam illo fugiat excepturi fugit."
        },
        {
            img: ProfilePic2,
            revies:
                "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Enim deserunt nulla consequatur. Ex nemo iste fuga magnam dolorum. Animi autem distinctio aperiam repellat aliquid! Repellat aperiam illo fugiat excepturi fugit."
        },
        {
            img: ProfilePic3,
            revies:
                "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Enim deserunt nulla consequatur. Ex nemo iste fuga magnam dolorum. Animi autem distinctio aperiam repellat aliquid! Repellat aperiam illo fugiat excepturi fugit."
        },
        {
            img: ProfilePic4,
            revies:
                "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Enim deserunt nulla consequatur. Ex nemo iste fuga magnam dolorum. Animi autem distinctio aperiam repellat aliquid! Repellat aperiam illo fugiat excepturi fugit."
        },
        {
            img: ProfilePic5,
            revies:
                "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Enim deserunt nulla consequatur. Ex nemo iste fuga magnam dolorum. Animi autem distinctio aperiam repellat aliquid! Repellat aperiam illo fugiat excepturi fugit."
        },
        {
            img: ProfilePic6,
            revies:
                "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Enim deserunt nulla consequatur. Ex nemo iste fuga magnam dolorum. Animi autem distinctio aperiam repellat aliquid! Repellat aperiam illo fugiat excepturi fugit."
        },
    ]
    return (
        <div id='testimonials' className="testimonials">
            <div className="t-wrapper">
                <div className="t-heading">
                    <span>Clints always Get </span>
                    <span>Exceptional Work </span>
                    <span>From me...</span>
                    <div className="blur t-blur1" style={{ background: 'rgb(193, 245, 255)', zIndex: '-9' }}></div>
                    <div className="blur t-blur2" style={{ background: 'Var(--purple)', zIndex: '-9' }}></div>
                </div>

                {/* swiper */}
                <Swiper
                    modules={[Pagination]}
                    slidesPerView={1}
                    pagination={{ clickable: true }}
                >
                    {clients.map((client, index) => {
                        return (
                            <SwiperSlide key={index}>
                                <div className="testimonial">
                                    <img src={client.img} alt="" />
                                    <span>{client.revies}</span>
                                </div>
                            </SwiperSlide>
                        )
                    })}
                </Swiper>
            </div>
        </div>
    )
}

export default Testimonials