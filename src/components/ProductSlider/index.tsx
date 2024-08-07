'use client'
import styles from './styles.module.scss'
import Image from 'next/image'
import { useRef, useState } from 'react';
import { ChevronLeft, ChevronRight } from '../Icons';
import { Navigation } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/scss';
import classnames from '@/utils/classnames';
import { NavigationOptions } from 'swiper/types';

const variations = [['1/1', '1/2','1/3',], ['2/1', '2/2','2/3',], ['3/1', '3/2','3/3',]]

export function ProductSlider() {
  const [variationActive, setVariationActive] = useState(0)
  const navigation = {
    prev: useRef<HTMLButtonElement>(null),
    next: useRef<HTMLButtonElement>(null),
  }

  return (
    <div className={styles.slider}>
      <div className={styles.slider__inner}>
        <div className={styles.slider__variations}>
          {variations.map((_, i) => 
          <button type='button' className={classnames(styles.slider__variation, variationActive == i ? styles.slider__variation_active : '')} key={i} onClick={() => setVariationActive(i)}>
            <Image src={'/image.jpg'} width={70} height={70} alt='img' objectFit='cover'/>
          </button>
          )}
        </div>
        <div className={styles.slider__content}>
          <Swiper
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
            {variations[variationActive].map((el, i) => 
            <SwiperSlide key={i}>
              <div className={styles.slider__image_wrapper}>
                <Image src='/image.jpg' fill={true} objectFit='cover' alt={'product '+ el}/>
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