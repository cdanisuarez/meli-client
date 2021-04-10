import React from 'react';
import { Switch, Route } from "react-router-dom";
import Header from '../../../components/header/header';
import ShowDetail from '../components/show-detail/show-detail';
import ShowItems from '../components/show-items/show-items';
import PropTypes from 'prop-types'

const ItemsRouter = ({ parentHistory }) => {
  return (
    <>
      <Header parentHistory={parentHistory} />
      <div>
        <Switch>
          <Route exact path="/items" component={ShowItems} ></Route>
          <Route exact path="/items/:id" component={ShowDetail} ></Route>
        </Switch>

      </div>

    </>
  );
};

ItemsRouter.propTypes = {
  parentHistory: PropTypes.object.isRequired
}

export default ItemsRouter;