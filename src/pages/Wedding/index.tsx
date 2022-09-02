import { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import {
  Mousewheel,
  Scrollbar,
  Keyboard,
  FreeMode,
  Navigation,
  Thumbs,
  Pagination,
} from 'swiper';
import 'swiper/css';
import 'swiper/css/mousewheel';
import 'swiper/css/scrollbar';
import 'swiper/css/free-mode';
import 'swiper/css/navigation';
import 'swiper/css/thumbs';
import 'swiper/css/pagination';
import './index.scss';
import type { PaginationOptions } from 'swiper/types/modules/pagination';

const isMobile =
  /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
    navigator.userAgent
  );
console.log('isMobile', isMobile);

const domain = 'http://cdn.110108.top/wedding/';

const config = {
  homeImg: '202205310279-034.jpg',
  timeline: [
    {
      img: '202205310279-158.jpg',
      year: '2018',
      data: '2018.12',
      title: '初见',
      text:
        'Love alters not with his brief hours and weeks.\n' +
        '\n' +
        'But bears it out even to the edge of doom.\n' +
        '\n' +
        'If this be error and upon me proved.\n' +
        '\n' +
        'I never writ, nor no man ever loved.',
    },
    {
      img: '202205310279-154.jpg',
      year: '2019',
      data: '2019.12',
      title: '"相亲"',
      text:
        'She walks in beauty, like the night\n' +
        '\n' +
        'Of cloudless climes and starry skies;\n' +
        '\n' +
        "And all that's best of dark and bright；\n" +
        '\n' +
        'Meet in her aspect and her eyes.',
    },
    {
      img: '202205310279-161.jpg',
      year: '2020',
      data: '2020.01',
      title: '表白',
      text:
        'A long while amid the noises of coming and going,\n' +
        '\n' +
        'of drinking and oath and smutty jest,\n' +
        '\n' +
        'There we two, content, happy in being together,\n' +
        '\n' +
        'speaking little, perhaps not a word.',
    },
    {
      img: '202205310279-171.jpg',
      year: '2022',
      data: '2022.10',
      title: '结婚',
      text:
        'I loved you first, but afterwards your love outsoaring mine,\n' +
        '\n' +
        '..For one is both and both are one in love:\n' +
        '\n' +
        'Rich love knows nought of ‘thine that is not mine;\n' +
        '\n' +
        'Both have the strength and both the length thereof,\n' +
        '\n' +
        'Both of us, of the love which makes us one.\n' +
        '\n',
    },
  ],
  list: [
    '202205310279-003.jpg',
    '202205310279-004.jpg',
    '202205310279-005.jpg',
    '202205310279-006.jpg',
    '202205310279-007.jpg',
    '202205310279-009.jpg',
    '202205310279-012.jpg',
    '202205310279-014.jpg',
    '202205310279-016.jpg',
    '202205310279-020.jpg',
    '202205310279-023.jpg',
    '202205310279-024.jpg',
    '202205310279-034.jpg',
    '202205310279-037.jpg',
    '202205310279-042.jpg',
    '202205310279-045.jpg',
    '202205310279-046.jpg',
    '202205310279-056.jpg',
    '202205310279-057.jpg',
    '202205310279-058.jpg',
    '202205310279-061.jpg',
    '202205310279-062.jpg',
    '202205310279-063 -留底 小产品按照这个张 入场费按隔壁这张.jpg',
    '202205310279-063.jpg',
    '202205310279-066.jpg',
    '202205310279-069.jpg',
    '202205310279-070.jpg',
    '202205310279-074.jpg',
    '202205310279-076.jpg',
    '202205310279-077.jpg',
    '202205310279-079.jpg',
    '202205310279-082.jpg',
    '202205310279-085.jpg',
    '202205310279-092.jpg',
    '202205310279-095.jpg',
    '202205310279-097.jpg',
    '202205310279-105.jpg',
    '202205310279-109.jpg',
    '202205310279-113.jpg',
    '202205310279-118.jpg',
    '202205310279-121.jpg',
    '202205310279-123.jpg',
    '202205310279-128.jpg',
    '202205310279-133.jpg',
    '202205310279-135.jpg',
    '202205310279-136.jpg',
    '202205310279-137.jpg',
    '202205310279-139.jpg',
  ],
  video: '612video.mp4',
  poster: '1661589417985.jpg',
  bgcImg: '1661589417957.jpg',
};

const ListSlides = (flag = false) => {
  return (
    <>
      {config.list.map((el) => (
        <SwiperSlide key={el}>
          {flag ? (
            <div
              className="album"
              style={{ backgroundImage: `url('${domain + el}')` }}
            >
              <div className="filter">
                <img src={domain + el} alt="img" />
              </div>
            </div>
          ) : (
            <img src={domain + el} alt="img" />
          )}
        </SwiperSlide>
      ))}
    </>
  );
};

const Wedding = () => {
  const [thumbsSwiper, setThumbsSwiper] = useState<any>(null);

  const timeLine = (
    <>
      {config.timeline.map((el) => (
        <SwiperSlide
          key={el.data}
          style={{ backgroundImage: `url(${domain + el.img})` }}
        >
          <div className="swiper-slide-content">
            <span className="timeline-year">{el.year}</span>
            <h4 className="timeline-title">{el.title}</h4>
            <p className="timeline-text">{el.text}</p>
          </div>
        </SwiperSlide>
      ))}
    </>
  );

  // 分页器
  const pagination: PaginationOptions = {
    clickable: true,
    renderBullet: (index, className) => {
      return `<span class="${className}">${config.timeline[index].data}</span>`;
    },
  };

  return (
    <Swiper
      style={{ width: '100%', height: '100vh' }}
      modules={[Mousewheel, Scrollbar, Keyboard]}
      direction="vertical"
      speed={1600}
      mousewheel
      scrollbar={{ hide: true }}
      keyboard={{
        enabled: true,
      }}
    >
      <SwiperSlide>
        <div
          className="home-img"
          style={{ backgroundImage: `url('${domain + config.homeImg}')` }}
        >
          <h1>WEDDING</h1>
        </div>
        <div className="glide" />
      </SwiperSlide>

      {/* 时间轴 */}
      <SwiperSlide>
        <Swiper
          className="timeline"
          modules={[Mousewheel, Scrollbar, Pagination, Navigation]}
          direction="vertical"
          speed={1600}
          pagination={pagination}
          navigation
          mousewheel
          nested
        >
          {timeLine}
        </Swiper>
      </SwiperSlide>

      {/* 微视频 */}
      <SwiperSlide>
        <div
          className="video-block"
          style={{ backgroundImage: `url('${domain + config.bgcImg}')` }}
        >
          <div className="filter">
            {/* eslint-disable-next-line jsx-a11y/media-has-caption */}
            <video
              controls
              width={isMobile ? '100%' : '1000'}
              src={domain + config.video}
              poster={domain + config.poster}
            />
          </div>
        </div>
      </SwiperSlide>

      {/* 相册 */}
      <SwiperSlide>
        <Swiper
          className="swiperAlbum"
          spaceBetween={10}
          navigation
          mousewheel
          thumbs={{
            swiper:
              thumbsSwiper && !thumbsSwiper.destroyed ? thumbsSwiper : null,
          }}
          modules={[Mousewheel, FreeMode, Navigation, Thumbs]}
        >
          {ListSlides(true)}
        </Swiper>
        <Swiper
          className="swiperThumbs"
          onSwiper={setThumbsSwiper}
          spaceBetween={10}
          slidesPerView={4}
          freeMode
          watchSlidesProgress
          modules={[FreeMode, Navigation, Thumbs]}
        >
          {ListSlides(false)}
        </Swiper>
      </SwiperSlide>
    </Swiper>
  );
};

export default Wedding;
