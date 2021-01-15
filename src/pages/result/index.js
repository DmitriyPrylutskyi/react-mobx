import React from 'react';

import {routesMap} from '~/routes';
import withStore from '~/hocs/withStore';
import LinkButton from "~c/links/button";

class Result extends React.Component{
    render(){
        let data = this.props.stores.order.lastOrderCache;

        return (
            <div>
                <h2>Congratulations!</h2>
                <p>Hi, {data.name}!</p>
                <p><strong>Total: {data.total}</strong></p>
                <div>
                    <LinkButton to={routesMap.home} className="btn btn-primary">
                        Home
                    </LinkButton>
                </div>
            </div>
        )
    }
}

export default withStore(Result);