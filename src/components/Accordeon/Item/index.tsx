'use client'
import { useEffect, useRef, useState } from 'react'
import styles from './styles.module.scss'
import { ChevronLeft } from '@/components/Icons'
import classnames from '@/utils/classnames'

export function AccordionItem() {
  const [isOpen, setIsOpen] = useState(false)
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (contentRef.current) {
      contentRef.current.style.maxHeight = isOpen ? `${contentRef.current.scrollHeight}px` : '0px';
    }
  }, [isOpen]);

  return (
    <div className={styles.item}>
      <button className={styles.item__header} onClick={() => setIsOpen(!isOpen)}>
        <p className={styles.item__header_name}>Apple iPhone Trade-In</p>
        <div className={classnames(styles.item__header_icon, isOpen ? styles.item__header_icon_open : '')}>
          <ChevronLeft/>
        </div>
      </button>
      <div className={styles.item__content} ref={contentRef}>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iusto optio quaerat distinctio saepe autem quis hic quia nesciunt consectetur, consequatur error porro accusantium magni fugit commodi numquam repellat aspernatur sed?
            Tempore quisquam ab saepe debitis, explicabo suscipit hic unde dolores veniam, ut nobis pariatur. Impedit porro nemo voluptatem possimus sapiente quae amet vitae nostrum placeat deserunt. Nihil in neque tempore.
            Debitis minima, distinctio voluptatibus, nihil repellat voluptates illum libero voluptatem, error doloribus esse ducimus suscipit atque iste eius inventore harum in nostrum ex mollitia eligendi delectus odio placeat possimus. Temporibus!
            Earum omnis corrupti quod beatae, nulla, excepturi ducimus non laborum id nam voluptatem dolore saepe illo obcaecati rem voluptates. Nostrum possimus quidem corrupti voluptate natus fugiat velit repudiandae voluptatem quas.
            Provident iure perferendis excepturi error et quos neque molestiae repudiandae est, labore sint pariatur odit reiciendis iste architecto aspernatur id nobis animi tenetur aut facilis quibusdam. Dolorem obcaecati nostrum fugit?
            Necessitatibus repudiandae velit sapiente voluptates, in, excepturi dicta voluptas placeat aut, explicabo porro nostrum rerum cumque suscipit adipisci! Aspernatur unde, ipsa in aliquid dolores nobis sed facere ipsum ullam odio.
            Ex omnis voluptatum optio corrupti sint modi fugiat eveniet rem deserunt voluptas quod nostrum, sequi quo! Illum harum tempora velit laudantium facilis tenetur aliquid veritatis, beatae veniam! Fugit, nesciunt libero!
            Facilis sequi non dolore? Officiis, voluptatum fuga! Autem ex et nisi consequuntur ullam perferendis quam id aliquam modi ducimus. Consequatur esse quidem sit est, reprehenderit excepturi hic dolorum delectus possimus?
            Error id fuga harum dolor deleniti, modi odio quibusdam assumenda, dolores eveniet necessitatibus ut voluptatem possimus doloribus molestias alias voluptate commodi animi. Eligendi, tempora ipsum numquam minima amet odio quis.
            Ipsum, earum sapiente mollitia, dolorum omnis in, fuga illo eos expedita impedit voluptatibus suscipit porro laborum sequi corporis? Neque consequuntur autem officiis totam numquam magni, odit ipsa voluptate natus quaerat.
            Est aperiam ipsa totam quasi illum. Ipsa explicabo molestiae quibusdam qui accusamus expedita suscipit voluptas pariatur iusto autem consectetur magnam architecto dicta nesciunt minima repellendus laudantium, magni earum necessitatibus in?
            Repudiandae cupiditate, dicta commodi totam nesciunt explicabo dolorum culpa. Laboriosam illum, suscipit a saepe eius quae cum numquam repellendus corrupti enim, dolorem nesciunt? Quod veniam reiciendis ratione officiis quam. Dolore!
            Eveniet, eius nostrum facilis optio commodi sequi corporis maiores aut rem nam incidunt blanditiis adipisci porro non. Fugit hic tenetur accusantium dolores itaque labore quasi quibusdam. Perferendis sint consequuntur inventore.
            Ipsa veniam facere ab natus, sed incidunt aspernatur iste reprehenderit similique! Ut obcaecati sunt dicta illum, repellendus ullam exercitationem unde praesentium fugiat non numquam, ipsa officiis reprehenderit vitae pariatur placeat?
      </div>
    </div>
  )
}