import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import DemoUseEffect from './DemoUseEffect'
import Home from './component/pages/Home'
import { categories } from './data/category'
// import './App.css'

function App() {

  return (
    <>
      {/* <DemoUseEffect /> */}
      <Home />
      <div
        class="container"
      >
        <div className="row">
          <div className="col-lg-4">
            <h2>Danh muc</h2>
            <ul class="list-group list-group-numbered">
              {categories.map((item) =>
                <li class="list-group-item">{item.name}</li>
              )}

            </ul>
          </div>
          <div className="col-lg-8">
            <h2 className='text-center'>Sản phẩm</h2>
            <div className="row">
              <div className="col-lg-4">
                <div class="card">
                  <img class="card-img-top" src="https://media.licdn.com/dms/image/v2/C5112AQHNlJvcof6UFA/article-cover_image-shrink_720_1280/article-cover_image-shrink_720_1280/0/1555920117170?e=2147483647&v=beta&t=-0jVD6bDqItrOITVzGKPLA14rhL3ZgTcK2Cq_xk3h3M" alt="Title" />
                  <div class="card-body">
                    <h4 class="card-title">Title</h4>
                    <p class="card-text">Text</p>
                  </div>
                </div>
              </div>
              <div className="col-lg-4">
                <div class="card">
                  <img class="card-img-top" src="https://media.licdn.com/dms/image/v2/C5112AQHNlJvcof6UFA/article-cover_image-shrink_720_1280/article-cover_image-shrink_720_1280/0/1555920117170?e=2147483647&v=beta&t=-0jVD6bDqItrOITVzGKPLA14rhL3ZgTcK2Cq_xk3h3M" alt="Title" />
                  <div class="card-body">
                    <h4 class="card-title">Title</h4>
                    <p class="card-text">Text</p>
                  </div>
                </div>
              </div>
              <div className="col-lg-4">
                <div class="card">
                  <img class="card-img-top" src="https://media.licdn.com/dms/image/v2/C5112AQHNlJvcof6UFA/article-cover_image-shrink_720_1280/article-cover_image-shrink_720_1280/0/1555920117170?e=2147483647&v=beta&t=-0jVD6bDqItrOITVzGKPLA14rhL3ZgTcK2Cq_xk3h3M" alt="Title" />
                  <div class="card-body">
                    <h4 class="card-title">Title</h4>
                    <p class="card-text">Text</p>
                  </div>
                </div>
              </div>
              <div className="col-lg-4">
                <div class="card">
                  <img class="card-img-top" src="https://media.licdn.com/dms/image/v2/C5112AQHNlJvcof6UFA/article-cover_image-shrink_720_1280/article-cover_image-shrink_720_1280/0/1555920117170?e=2147483647&v=beta&t=-0jVD6bDqItrOITVzGKPLA14rhL3ZgTcK2Cq_xk3h3M" alt="Title" />
                  <div class="card-body">
                    <h4 class="card-title">Title</h4>
                    <p class="card-text">Text</p>
                  </div>
                </div>
              </div>
              <div className="col-lg-4">
                <div class="card">
                  <img class="card-img-top" src="https://media.licdn.com/dms/image/v2/C5112AQHNlJvcof6UFA/article-cover_image-shrink_720_1280/article-cover_image-shrink_720_1280/0/1555920117170?e=2147483647&v=beta&t=-0jVD6bDqItrOITVzGKPLA14rhL3ZgTcK2Cq_xk3h3M" alt="Title" />
                  <div class="card-body">
                    <h4 class="card-title">Title</h4>
                    <p class="card-text">Text</p>
                  </div>
                </div>
              </div>
              <div className="col-lg-4">
                <div class="card">
                  <img class="card-img-top" src="https://media.licdn.com/dms/image/v2/C5112AQHNlJvcof6UFA/article-cover_image-shrink_720_1280/article-cover_image-shrink_720_1280/0/1555920117170?e=2147483647&v=beta&t=-0jVD6bDqItrOITVzGKPLA14rhL3ZgTcK2Cq_xk3h3M" alt="Title" />
                  <div class="card-body">
                    <h4 class="card-title">Title</h4>
                    <p class="card-text">Text</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

    </>
  )
}

export default App
