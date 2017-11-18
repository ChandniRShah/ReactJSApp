import React,{Component} from 'react';

class homePage extends Component{
  render(){
    return (
    <div className="home_page">
      <div className="title">
      <h1>India</h1>
      </div>

      <div className="description">
      <ul>
      <li>
      <p>Indian Culture is full of several unique customs and traditions, which outsiders might find really intriguing. Most of these originate from the Ancient Indian scriptures and texts, which have dictated the way of life in India for thousands of years. </p>
      </li>
      </ul>
      </div>
      <hr />
      <div className="title">
      <h1>New York</h1>
      </div>

      <div className="description">
      <ul>
      <li>
      <p>New York’s incredibly multi-ethnic population defines the city’s culture as one of the most ecclectic anywhere. The city’s theater, dance, literature, music, art and cuisine are all reflections of the mix of traditions brought in by millions of immigrants. At the turn of the last millennium, 36 percent of New York’s population was foreign born, although no single ethnicity dominates and most are honored by official holidays denoting important milestones in their heritage.</p>
</li>
</ul>

      </div>
      <hr />
      <div className="title">
      <h1>France</h1>
      </div>

      <div className="description">
      <ul>
      <li>
      <p>Most people associate French culture with Paris, which is a center of fashion, cuisine, art and architecture, but life outside of the City of Lights is very different and varies by region.
      France doesn't just have culture; the word "culture" actually comes from France.</p>
      </li>
      </ul>
      </div>
    </div>
    );
  }
}
export default homePage;
