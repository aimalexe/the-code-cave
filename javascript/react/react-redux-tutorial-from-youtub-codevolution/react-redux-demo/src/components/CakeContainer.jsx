import React from 'react'
import { buyCake } from '../redux/cake/cakeActions';
import { connect } from 'react-redux';

function CakeContainer(props) {
    return (
        <div>
            <h1>Cake Container "connect" based</h1>
            <h2>Number of Cakes In Store: {props.numberOfCakes}</h2>
            <button onClick={props.buyCake}>Buy Cake</button>
        </div>
    )
}

const mapStateToProps = state => ({
    numberOfCakes: state.cake.numberOfCakes
});

const mapDispatchToProps = dispatch => ({
    buyCake: () => dispatch(buyCake())
});

export default connect(mapStateToProps, mapDispatchToProps)(CakeContainer)
// export default CakeContainer;
