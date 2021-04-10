import React from 'react';
import ItemsRouter from './routes/items';

const Items = ({history}) => <ItemsRouter parentHistory={history}/>

export default Items;