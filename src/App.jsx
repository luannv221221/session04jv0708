import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import DemoUseEffect from './DemoUseEffect'
import Home from './component/pages/Home'
import { categories } from './data/category'
import { products } from './data/product'
// import './App.css'

function App() {
  const [indexCate, setIndexCate] = useState(0)
  const [listProduct, setlistProduct] = useState([]);
  const handlerClicCate = (idx) => {
    setIndexCate(idx);
    const dataFind = products.filter((pro) => {
      return pro.categoryId == idx;
    });
    console.log(dataFind);
    setlistProduct(dataFind);
  }

  useEffect(() => {
    // call API 
    setlistProduct(products);
    setIndexCate(products[0].id)
  }, [])
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
              {categories.map((item, index) =>
                <li key={item.id} className={"list-group-item" + (indexCate === item.id && " active")} onClick={() => handlerClicCate(item.id)} >{item.name}{index}</li>
              )}

            </ul>
          </div>
          <div className="col-lg-8">
            <h2 className='text-center'>Sản phẩm</h2>
            <div className="row">

              {listProduct.map((item) =>
                <div className="col-lg-4">
                  <div class="card">
                    <img class="card-img-top" src="https://media.licdn.com/dms/image/v2/C5112AQHNlJvcof6UFA/article-cover_image-shrink_720_1280/article-cover_image-shrink_720_1280/0/1555920117170?e=2147483647&v=beta&t=-0jVD6bDqItrOITVzGKPLA14rhL3ZgTcK2Cq_xk3h3M" alt="Title" />
                    <div class="card-body">
                      <h4 class="card-title">Title</h4>
                      <p class="card-text">Text</p>
                    </div>
                  </div>
                </div>
              )}


            </div>
          </div>
        </div>
      </div>

    </>
  )
}

export default App
