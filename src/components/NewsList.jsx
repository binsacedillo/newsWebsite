import { useState } from 'react';
import PropTypes from 'prop-types';
import image1 from '../images/news1.png';
import image2 from '../images/news2.png';

const NewsItem = ({ image, title, date, teaser, link }) => (
  <div className="flex flex-col sm:flex-row items-center gap-4 p-4 border-b sm:my-2">
    <img src={image} alt={title} className="w-12 h-12 rounded sm:w-24 sm:h-24 sm:object-cover news-image" />
    <div className="sm:ml-4">
      <h2 className="text-lg font-bold">{title}</h2>
      <p className="text-sm text-gray-400">{date}</p>
      <p className="my-2">{teaser}</p>
      <a href={link} className="inline-block px-2 py-1 text-sm text-white bg-gray-500 rounded hover:bg-gray-600 transition-colors duration-200">
        Read More
      </a>
    </div>
  </div>
);

NewsItem.propTypes = {
  image: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  teaser: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired,
};

const NewsList = () => {
  const [newsItems, setNewsItems] = useState([
    {
      image: image1,
      title: 'Staff member dies during rehearsal for music event, possibly hit by jet of water, in Osaka',
      date: 'July 14, 2023',
      teaser: 'A tragic incident occurred during a rehearsal for a music event in Osaka, where a staff member died after being hit by water from a machine. The event, featuring Korean artists, has been canceled, and the organizers have issued an apology and will provide full refunds. The police are investigating the incident to determine the cause.',
      link: 'news-article-1'
    },
    {
      image: 'https://www3.nhk.or.jp/news/html/20230714/K10014130021_2307141715_0714172248_01_02.jpg',
      title: 'Increase in new coronavirus infection cases across 45 prefectures nationwide, compared to last week.',
      date: 'July 7, 2023',
      teaser: 'The number of COVID-19 patients in Japan continues to rise, with 9.14 patients per medical institution during the week ending on July 9th, 2023, which is 1.26 times higher than the previous week. Many prefectures in Kyushu, Chugoku, and Shikoku had higher increases than the previous week, and experts warn that the risk of a surge in infections is high in August, particularly during the Obon holiday period.',
      link: 'news-article-2'
    },
    // Add more initial news items as needed
  ]);
  const [isLoaded, setIsLoaded] = useState(false);

  const handleLoadMore = () => {
    if (!isLoaded) {
      // Simulated API call or data fetching to load more news items
      // This is a placeholder implementation
      // In a real scenario, you would typically make an API request and update the news items state with the fetched data
      const newNewsItems = [
        {
          image: image2,
          title: '[Explanation] President Putin\'s unprecedented meeting, with the "traitor" lasting for 3 hours...',
          date: 'July 7, 2023',
          teaser: 'As the Ukrainian military continues its counteroffensive, attention is still focused on the movements of the private military company Wagner\'s representative, Mr. Prigozhin, within Russia. The recent revelation of a meeting between President Putin and Prigozhin has shaken the Putin administration, particularly since it occurred just five days after the armed rebellion. The meeting\'s primary focus was likely on ensuring that Wagner continues to fight for Russia and emphasizing that the country is united behind President Putin.',
          link: 'news-article-3'
        },
        {
          image: 'https://www3.nhk.or.jp/news/html/20230714/K10014128181_2307141618_0714161938_01_02.jpg',
          title: 'Nationwide increase in fires - Pay careful attention to how lithium-ion batteries are handled.',
          date: 'July 14, 2023',
          teaser: 'Lithium-ion batteries, which are lightweight and rechargeable, play a vital role in powering portable electronic devices such as smartphones and mobile batteries. However, these batteries pose a risk of smoking and catching fire when subjected to significant pressure. Improperly disposed batteries have been causing fires in waste disposal facilities, resulting in substantial damages for municipalities. Our report investigates the extent of the nationwide damages and explores the implemented measures to address this issue.',
          link: 'news-article-4'
        },
        // Add more dynamically loaded news items as needed
      ];

      setNewsItems(prevNewsItems => [...prevNewsItems, ...newNewsItems]);
      setIsLoaded(true);
    } else {
      // Revert the changes by removing the dynamically loaded news items
      setNewsItems(prevNewsItems => prevNewsItems.slice(0, prevNewsItems.length - 2));
      setIsLoaded(false);
    }
  };

  return (
    <div id="newsList" className="flex justify-center items-center min-h-screen mb-0">
      <div className="w-full max-w-5xl"> {/* Increased width */}
        <h1 className="text-2xl font-bold mb-4">Latest News</h1>
        <div className="grid gap-4 sm:gap-8">
          {newsItems.map((newsItem, index) => (
            <NewsItem key={index} {...newsItem} />
          ))}
        </div>
        <div className="flex justify-center mt-4">
          <button
            className="text-white bg-gray-500 py-1 px-2 mt-4 rounded-lg w-32 sm:w-auto text-xs transition-colors duration-200 hover:bg-gray-600"
            onClick={handleLoadMore}
          >
            {isLoaded ? 'Revert' : 'Load More'}
          </button>
        </div>
        <div className="mt-4 mb-5 flex justify-center">
          <input type="text" placeholder="Search" className="border rounded px-2 py-1 mr-2 sm:mr-4" />
          <button className="gradient-button text-white py-1 px-2 rounded">Search</button>
        </div>
      </div>
    </div>
  );
};

export default NewsList;
