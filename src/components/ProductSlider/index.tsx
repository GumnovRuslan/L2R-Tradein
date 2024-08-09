'use client'
import styles from './styles.module.scss'
import Image from 'next/image'
import classnames from '@/utils/classnames';
import { useRef, useState } from 'react';
import { ChevronLeft, ChevronRight } from '../Icons';
import { Navigation, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide, SwiperRef } from 'swiper/react';
import { NavigationOptions } from 'swiper/types';
import 'swiper/scss';

const variations = ['1', '2','3','4']

export function ProductSlider() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const navigation = {
    prev: useRef<HTMLButtonElement>(null),
    next: useRef<HTMLButtonElement>(null),
  }
  const swiperRef = useRef<SwiperRef  | null>(null);
  const swiper = swiperRef.current?.swiper

  return (
    <div className={styles.slider}>
      <div className={styles.slider__inner}>
        <div className={styles.slider__variations}>
          {variations.map((_, i) => 
          <button type='button' className={classnames(styles.slider__variation, currentIndex === i ? styles.slider__variation_active : '')} key={i} 
           onClick={() => swiper?.slideToLoop(i)}>
            <Image src={'/image.jpg'} width={70} height={70} alt={'img' + i} objectFit='cover'/>
          </button>
          )}
        </div>
        <div className={styles.slider__content}>
          <Swiper
          ref={swiperRef}
            onBeforeInit={(swiper) => {
              if (swiper.params.navigation) {
                (swiper.params.navigation as NavigationOptions).prevEl = navigation.prev.current;
                (swiper.params.navigation as NavigationOptions).nextEl = navigation.next.current;
              }
            }}
            modules={[Navigation, Pagination]}
            onSlideChange={() => setCurrentIndex(swiper?.realIndex || 0)}
            pagination={{clickable: true}}
            slidesPerView={'auto'}
            // loop={true}
          >
            {variations.map((_, i) => 
            <SwiperSlide key={i}>
              <div className={styles.slider__image_wrapper}>
                <Image src='/image.jpg' fill={true} objectFit='cover' alt={'product '+ i}/>
              </div>
            </SwiperSlide>)}
          </Swiper>
        </div>
        <div className={styles.slider__nav}>
          <button type='button' ref={navigation.prev} className={styles.slider__nav_prev}><ChevronLeft/></button>
          <button type='button' ref={navigation.next} className={styles.slider__nav_next}><ChevronRight/></button>
        </div>
      </div>
    </div>
  )
}