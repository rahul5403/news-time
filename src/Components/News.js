import React, { Component } from 'react'
import NewsItem from './NewsItem'

export class News extends Component {
  render() {
    return (
      <div className='container my-3'>
        <h2>News Times - Top Headlines</h2>
        <div className="row">
          <div className="col-md-4">
            <NewsItem title="Rahul" description ="Best hooper of the world" imageUrl="https://s.yimg.com/ny/api/res/1.2/9kSJG76jWypIR2qPEacE_Q--/YXBwaWQ9aGlnaGxhbmRlcjt3PTEyMDA7aD02NzU-/https://s.yimg.com/os/creatr-uploaded-images/2023-07/a4c338e0-1b82-11ee-9677-bdffe35b4ce3"/>
          </div>
          <div className="col-md-4">
            <NewsItem/>
          </div>
          <div className="col-md-4">
            <NewsItem/>
          </div>
        </div>
        <div className="row">
          <div className="col-md-4">
            <NewsItem/>
          </div>
          <div className="col-md-4">
            <NewsItem/>
          </div>
          <div className="col-md-4">
            <NewsItem/>
          </div>
        </div>
      </div>
    )
  }
}

export default News
