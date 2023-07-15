import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import breaking1 from '../images/breaking1.jpg';

const newsData = [
  {
    title: "Risk of heavy rain in the Tohoku region until the 16th. Hokuriku and Niigata also on alert for landslides.",
    image: breaking1
  },
  {
    title: "Health insurance cards will be discontinued by December 8th of next year. The specific time period is under discussion, says the Minister of Health, Labour and Welfare",
    image: "https://www3.nhk.or.jp/news/html/20230714/K10014129821_2307141400_0714143045_01_02.jpg"
  },
];

const BreakingNews = () => {
  return (
    <div className="breaking-news-container">
      <h2 id="header">Breaking News</h2>
      <div className="carousel-wrapper">
        <Carousel 
          showThumbs={false}
          autoPlay 
          infiniteLoop 
          showArrows={false}
          showStatus={true}
          showIndicators={false}
        >
          {newsData.map((news, index) => (
            <div key={index}>
              <img src={news.image} alt={news.title} />
              <div className="legendContainer">
                <h3 className="legendTitle">{news.title}</h3>
              </div>
            </div>
          ))}
        </Carousel>
      </div>
    </div>
  );
};

export default BreakingNews;
