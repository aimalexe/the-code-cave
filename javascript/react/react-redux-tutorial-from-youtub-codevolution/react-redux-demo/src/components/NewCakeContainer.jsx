import React, { useState } from 'react'
import { buyCake } from '../redux/cake/cakeActions';
import { connect } from 'react-redux';

function NewCakeContainer(props) {
    const [numberOfCakes, setNumberOfCakes] = useState(1);
    return (
        <div>
            <h1>Cake Container "connect" based with number of Cakes</h1>
            <h2>Number of Cakes In Store: {props.numberOfCakes}</h2>
            <input type="number" value={numberOfCakes} onChange={e => setNumberOfCakes(e.target.value)} />
            <button onClick={() => props.buyCake(numberOfCakes)}>Buy {numberOfCakes} Cake(s)</button>
        </div>
    )
}

const mapStateToProps = state => ({
    numberOfCakes: state.cake.numberOfCakes
});

const mapDispatchToProps = dispatch => ({
    buyCake: numberOfCakes => dispatch(buyCake(numberOfCakes))
});

export default connect(mapStateToProps, mapDispatchToProps)(NewCakeContainer)
// export default NewCakeContainer;
