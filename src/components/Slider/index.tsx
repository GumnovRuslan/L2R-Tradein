'use client'

import styles from './styles.module.scss'
import { useRef } from 'react';
import { Navigation } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import { CardCategory } from '../Cards/Category';
import { ChevronLeft, ChevronRight } from '../Icons';

import 'swiper/scss';
import 'swiper/css/navigation';

interface IProps {
  title?: string
  slides?: any
}

const slides = Array.from({length: 8})

export function Slider({title}: IProps) {
  const sliderNav = {
    prev: useRef(null),
    next: useRef(null),
  }

  return (
    <section className={styles['slider']}>
      <div className={styles['slider__inner']}>
        {title && <h2 className={styles['slider__title']}>{title}</h2>}
        <div className={styles['slider__swiper-wrapper']}>
          <Swiper
            className='swiper'
            modules={[Navigation]}
            slidesPerView={'auto'}
            navigation={{
              prevEl: sliderNav.prev.current,
              nextEl: sliderNav.next.current,
            }}
            loop={true}
          >
            {slides.map((_, i) => <SwiperSlide className={styles['swiper__slide']} key={i}><CardCategory/></SwiperSlide>)}
          </Swiper>
        </div>

        <button type='button' ref={sliderNav.prev} className={styles['swiper__prev']}>
          <ChevronLeft/>
        </button>
        <button type='button' ref={sliderNav.next} className={styles['swiper__next']}>
          <ChevronRight/>
        </button>
      </div>
    </section>
  )
}