import Home from "../component/Home";
import { connect } from "react-redux";
import { increment, decrement } from "../Action/Actions";

const mapStateToProps = (state) => {
    return{
        count: state
    }
}

const mapDispatchToProps = (dispatch) => {
    return{
        increment: () => dispatch(increment()),
        decrement: () => dispatch(decrement())
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(Home)