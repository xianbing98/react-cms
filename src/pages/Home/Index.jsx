import React, { useEffect, useState } from 'react';
import { Carousel, WingBlank } from 'antd-mobile';
import styles from './style.css';

const Home = () => {
  
  const [data, setData] = useState(['1', '2', '3']);
  const [slideIndex, setSlideIndex] = useState(0);
  const [imgHeight, setImgHeight] = useState(176);

  useEffect(() => {
    setTimeout(() => {
      setData(['AiyWuByWklrrUDlFignR', 'TekJlZRVCjLFexlOCuWn', 'IJOtIlfsYdTyaDTRVrLI'])
    }, 100);
  }, [])

  return (
    <>
      <WingBlank>
        <Carousel className={styles.spaceCarousel}
          frameOverflow="visible"
          cellSpacing={10}
          slideWidth={0.8}
          autoplay
          infinite
          beforeChange={(from, to) => console.log(`slide from ${from} to ${to}`)}
          afterChange={index => {
            console.log(index)
            setSlideIndex(index)
          }}
        >
          {data.map((val, index) => (
            <div
              key={val}
              style={{
                position: 'relative',
                top: slideIndex === index ? -10 : 0,
                height: imgHeight,
                boxShadow: '2px 1px 1px rgba(0, 0, 0, 0.2)',
              }}
            >
              <img
                src={`https://zos.alipayobjects.com/rmsportal/${val}.png`}
                alt=""
                style={{ width: '100%', verticalAlign: 'top' }}
                onLoad={() => {
                  // fire window resize event to change height
                  window.dispatchEvent(new Event('resize'));
                  setImgHeight('auto')
                }}
              />
            </div>
          ))}
        </Carousel>
      </WingBlank>
      <div>
        
      </div>
    </>
  );
}

export default Home;