'use client'

import styles from './styles.module.scss'
import { useEffect, useRef } from 'react';
import { Navigation } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import { CardCategory } from '../Cards/Category';
import { ChevronLeft, ChevronRight } from '../Icons';
import { NavButton } from './SliderNavBtn';

import 'swiper/scss';

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
            onSwiper={(swiper) => {
              swiper.params.navigation.prevEl = sliderNav.prev.current;
              swiper.params.navigation.nextEl = sliderNav.next.current;
              swiper.navigation.init();
              swiper.navigation.update();
            }}
            modules={[Navigation]}
            slidesPerView={'auto'}
            loop={true}
          >
            {slides.map((_, i) => <SwiperSlide className={styles['swiper__slide']} key={i}><CardCategory/></SwiperSlide>)}
          </Swiper>
        </div>

        <button type='button' ref={sliderNav.prev} className={styles['swiper__prev']}><ChevronLeft/></button>
        <button type='button' ref={sliderNav.next} className={styles['swiper__next']}><ChevronRight/></button>
      </div>
    </section>
  )
}