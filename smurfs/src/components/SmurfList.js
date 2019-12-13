import React from 'react';
import { connect } from 'react-redux';
import { fetchSmurf, removeSmurf } from '../actions/action';
import Smurf from './Smurf';

const SmurfList = props => {
    return (
        <div>
            <button onClick={() => props.dispatch(fetchSmurf())}>
                Get Smurfs
            </button>
            {props.isFetching && <span role='img' aria-label='loading'>🔃</span>}
            {props.error && <div>{props.error.message}</div>}
            <ul>
                {props.smurf[0] ? props.smurf.map(smurf => (
                    <li key={smurf.id}>
                        <Smurf key={smurf.id} smurf={smurf}
                        />
                        <button onClick={() => props.dispatch(removeSmurf(smurf.id))}>
                            Delete Smurf
                        </button>
                    </li>
                )) : <h1>
                        There are no Smurfs (get/add Smurfs)
                    </h1>
                }
            </ul>
        </div>
    );
}

export default connect(state => {
    return state;
})(SmurfList);