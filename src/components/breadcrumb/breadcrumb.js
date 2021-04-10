import React from "react"
import PropTypes from "prop-types"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faChevronRight } from '@fortawesome/free-solid-svg-icons'
import "./breadcrumb.scss"

const Breadcrumb = ({
  properties: { category, lengthCatgories, index, history },
}) => {

  const onClickRedirect = (category) => {
    history.push(`/items?search=${category.trim()}`)
  }

  return (
    <div className="breadcumb" key={category}>
      <p className="item" onClick={() => { onClickRedirect(category) }}>
        {category}
      </p>
      {(index + 1) < lengthCatgories ? <FontAwesomeIcon icon={faChevronRight} style={{
        fontSize: 19,
        color: '#999999',
        alignSelf: 'center',
        paddingLeft: 5,
        paddingRigth: 5,
      }} /> : <></>}
    </div>
  )
}

Breadcrumb.propTypes = {
  properties: PropTypes.object.isRequired,
}

export default Breadcrumb