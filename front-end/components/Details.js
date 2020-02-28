import React from "react";
import { BASE_URL, DETAILS_URL } from './consts';
import GettingDetails from "./GettingDetails";
import axios from "axios";


export default class Details extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            Details: []
        };
    }

    componentDidMount() {
        axios.get({BASE_URL}+{DETAILS_URL}+":id")
            .then(({ data }) => {
                this.setState({
                    Details: [data]
                });
            })
            .catch(err => {
                console.warn(err);
                this.setState({ error: err.message })
                alert("error occured" +"\n" + err.message);
            });
    };


    render() {
        return(

            <article>
                <h3>Details go below me thinks</h3>
                <section>
                    {Array.isArray(this.state.Details) &&
                    this.state.Details.map(Details => <GettingDetails {...Details} />)}
                </section>
            </article>
        );
    }
}
