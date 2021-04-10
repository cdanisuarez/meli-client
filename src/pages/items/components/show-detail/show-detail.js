import React, { useEffect, useState } from "react"
import PropTypes from "prop-types"
import Breadcrumb from "../../../../components/breadcrumb/breadcrumb"
import ItemsService from "../../../../services/items-service"
import './show-detail.scss'

const ShowDetail = ({ history, dataCategories, dataItem }) => {

  const [categories, setCategories] = useState(dataCategories ?? [])
  const [item, setItem] = useState(dataItem ?? null)

  useEffect(() => {
    if (history.location.data) {
      setCategories(history.location.data.categories)
    }

    const id = history.location.pathname.split("/")[history.location.pathname.split("/").length - 1]

    ItemsService.getItemById(id)
      .then(({ item }) => setItem(item))
      .catch((error) => console.error(error))
      
  }, [history.location.pathname])

  const BUY_LABEL = 'Comprar'
  const DESCRIPTION_LABEL = 'Descripción del producto'

  return (
    <>
      {item !== null && (
        <div className="show-detail">
          <div className="breadcumbs">
            {categories.length > 0 ? (
              categories.map((category, index) => (
                <Breadcrumb key={category} properties={{ category, lengthCatgories: categories.length, index, history }} />
              ))) : (<> <div className=""></div></>
            )}
          </div>

          <div className="card">
            <div className="card-detail">
              <div className="card-img">
                <img
                  src={item.picture}
                  alt={item.picture}
                />
              </div>
              <div className="card-info">
                <div className="detail status">
                  {item.condition === 'new' ? 'Nuevo' : 'Usado'} - {item.sold_quantity} {item.sold_quantity === 1 ? 'vendido' : 'vendidos'}
                </div>
                <div className="detail title">{item.title}</div>
                <div className="detail price">
                  <div className="value">
                    ${" "}
                    {new Intl.NumberFormat("de-DE").format(item.price.amount)}
                  </div>
                  <div className="decimal">
                    {item.price.decimals === 0 ? '00' : item.price.decimals}
                  </div>
                </div>
                <div className="detail buy">
                  <span>{BUY_LABEL}</span>
                </div>
              </div>
            </div>

            <div className="card-description">
              <p className="title">
                {DESCRIPTION_LABEL}
              </p>
              <p className="description">
                {item.description}
              </p>
            </div>
          </div>
        </div>
      )}
    </>
  )
}

ShowDetail.propTypes = {
  history: PropTypes.object.isRequired
}

export default ShowDetail