import React from 'react';
// import Slider from 'react-slick';
import { Carousel } from 'antd';



const App = () => {
  const contentStyle = {

  };

  const onChange = (currentSlide) => {
    console.log(currentSlide);
  };

  return (
    <Carousel
      autoplay
      afterChange={onChange}>
      <div>
        <h3 style={{
          height: '300px',
          color: '#fff',
          lineHeight: '300px',
          textAlign: 'center',
          background: '#364d79',
        }}>1
        </h3>
      </div>
      <div>
        <h3 style={{
          height: '300px',
          color: '#fff',
          lineHeight: '300px',
          textAlign: 'center',
          background: '#364d79',
        }}>2
        </h3>
      </div>
      <div>
        <h3 style={{
          height: '300px',
          color: '#fff',
          lineHeight: '300px',
          textAlign: 'center',
          background: '#364d79',
        }}>3
        </h3>
      </div>
      <div>
        <h3 style={{
          height: '300px',
          color: '#fff',
          lineHeight: '300px',
          textAlign: 'center',
          background: '#364d79',
        }}>4
        </h3>
      </div>
    </Carousel>
  );
};

export default App;
// export default function SliderPage() {
//   const settings = {
//     dots: true,
//     infinite: true,
//     speed: 500,
//     slidesToShow: 1,
//     slidesToScroll: 1,
//     adaptiveHeight: true,
//   };

//   const arr = [1, 2, 3, 4];

//   return (
//     <div>
//       <Slider {...settings} style={{
//         padding: '10px',
//         background: '#fff',
//       }}>
//         {
//           arr.map((item) => (
//             <div key={item}>
//               <img style={{ margin: 'auto' }} src="http://placekitten.com/g/400/200" />
//             </div>
//           )
//           )
//         }
//       </Slider >
//     </div>
//   );
// }