import * as React from "react";
import SimpleContext from "../contexts/SimpleContext";

interface Props {
    name?: string,
}

const FunctionalComponent: React.FunctionComponent<Props> = (props) => {
    return <SimpleContext.Consumer>{({ userId }) => { return <p id={userId}>How are you {props.name}?</p>}}</SimpleContext.Consumer>
}

FunctionalComponent.defaultProps = {
    name: "lanoid"
}

export default FunctionalComponent;