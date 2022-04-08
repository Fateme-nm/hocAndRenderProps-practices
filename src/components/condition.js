import React, {useState} from 'react';

const Condition = (Component) => {
    return function ConditionComponent({ ...props }) {
        return (
            <div>
                {!!props.error && props.error}
                {props.loading ? <h5>Loading....</h5> : <Component {...props} />}
            </div>
        )
            
    }
}

export default Condition;
