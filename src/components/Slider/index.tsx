'use client'

import styles from './styles.module.scss'
import { useRef } from 'react';
import { Navigation } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import { CardCategory } from '../Cards/Category';
import { ChevronLeft, ChevronRight } from '../Icons';
import { NavigationOptions } from 'swiper/types';

import 'swiper/scss';

interface IProps {
  title?: string
  slides?: any
}

const slides = Array.from({length: 8})

export function Slider({title}: IProps) {
  const navigation = {
    prev: useRef(null),
    next: useRef(null),
  }

  return (
    <section className={styles.slider}>
      <div className={styles.slider__inner}>
        {title && <h2 className={styles.slider__title}>{title}</h2>}
        <div className={styles.slider__wrapper}>
          <div className={styles.slider__swiper_wrapper}>
            <Swiper
              className='swiper'
              onBeforeInit={(swiper) => {
                if (swiper.params.navigation) {
                  (swiper.params.navigation as NavigationOptions).prevEl = navigation.prev.current;
                  (swiper.params.navigation as NavigationOptions).nextEl = navigation.next.current;
                }
              }}
              modules={[Navigation]}
              slidesPerView={'auto'}
              loop={true}
            >
              {slides.map((_, i) => <SwiperSlide className={styles['swiper__slide']} key={i}><CardCategory/></SwiperSlide>)}
            </Swiper>
          </div>
          <button type='button' ref={navigation.prev} className={styles['swiper__prev']}><ChevronLeft/></button>
          <button type='button' ref={navigation.next} className={styles['swiper__next']}><ChevronRight/></button>
        </div>
      </div>
    </section>
  )
}