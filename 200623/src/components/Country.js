import React from "react";

const Country = (props) => {
    const result = props.data.map((item, i) => {
        console.log(item);
        return (
            <React.Fragment>
                <h2>{item.name}</h2>
                <img src={item.flag} alt={item.name} key={i} className="flag" />
                <h4>{`Capital: ${item.capital}`}</h4>
                <i> {`Population: ${item.population}`}</i>
            </React.Fragment>
        );
    });

    return <React.Fragment>{result}</React.Fragment>;
};
export default Country;