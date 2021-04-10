import React, { useEffect, useState } from "react"
import PropTypes from "prop-types"
import ItemsService from "../../../../services/items-service"
import freeShipping from "../../../../assets/img/icons/ic_shipping@2x.png.png.png"
import Breadcumb from "../../../../components/breadcrumb/breadcrumb"
import "./show-items.scss"

const ShowItems = ({ history, dataItems }) => {

  const [items, setItems] = useState(dataItems ?? [])
  const [categories, setCategories] = useState([])

  useEffect(() => {
    if (history.location.search !== "") {
      const query = history.location.search.split("=")[1]

      ItemsService.getItems(query)
        .then(({ items, categories }) => {
          setItems(items.slice(0, 4))
          setCategories(categories.slice(0, 5))
        })
        .catch((error) => console.error(error))
    }
  }, [history.location.search])

  const onClickCard = (id) => {
    history.push({
      pathname: `/items/${id.trim()}`,
      data: {
        categories: categories,
      },
    })
  }

  return (
    <div className="show-items">
      <div className="breadcumbs">
        {categories.length > 0 ? (
          categories.map((category, index) => (
            <Breadcumb key={category} properties={{ category, lengthCatgories: categories.length, index, history }} />
          ))) : (<> <div className=""></div></>
        )}
      </div>
      <div className="cards">
        {items.map((item) => (
          <div className="card" key={item.id} onClick={() => { onClickCard(item.id) }}>
            <div className="card-img">
              <img src={item.picture} alt={item.picture} />
            </div>
            <div className="card-details">
              <div className="price">
                <span className="value">
                  ${" "} {new Intl.NumberFormat("de-DE").format(item.price.amount)}
                </span>

                <span className="shipping">
                  {item.free_shipping ? <img src={freeShipping} alt={freeShipping} /> : <></>}
                </span>
              </div>

              <div className="title">
                  <p >{item.title}</p>
                </div>
            </div>
            <div className="card-city">{item.city}</div>
          </div>
        ))}
      </div>
    </div>
  )
}

ShowItems.propTypes = {
  history: PropTypes.object.isRequired,
}

export default ShowItems