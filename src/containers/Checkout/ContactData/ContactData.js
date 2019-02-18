import React, { Component } from 'react';
import Button from "../../../components/UI/Button/Button";
import axios from "../../../axios-orders";
import classes from './ContactData.css';
import Spinner from '../../../components/UI/Spinner/Spinner';

class ContactData extends Component {
    state = {
        name: '',
        email: '',
        address: {
            street: '',
            postalCode: '',
        },
        loading: false
    };
    renderHandler = (event) => {
        event.preventDefault();
        this.setState({ loading: true });
        const order = {
            ingredients: this.props.ingredients,
            price: this.props.price,
            customer: {
                name: "Slava Vasylencko",
                address: {
                    street: "Teststreet 1",
                    zipCode: "12345",
                    country: "Ukraine"
                },
                email: "test@test.com"
            },
            deliveryMethod: "fastest"
        };
        axios.post("/orders.json", order)
            .then(response => {
                this.setState({ loading: false })
                this.props.history.push('/');
            })
            .catch(error => this.setState({ loading: false }));
    };

    render() {
        let form = (
            <form action="">
                <input type="text" className={classes.Input} name='name' placeholder='Your name' />
                <input type="text" className={classes.Input} name='email' placeholder='Your mail' />
                <input type="text" className={classes.Input} name='street' placeholder='Street' />
                <input type="text" className={classes.Input} name='postal' placeholder='Postal Code' />
                <Button btnType='Success' clicked={this.renderHandler}>ORDER</Button>
            </form>
        );
        if (this.state.loading) {
            form = <Spinner />
        }
        return (
            <div className={classes.ContactData}>
                <h4>Enter Your Contact Data</h4>
                {form}
            </div>
        );
    }
}

export default ContactData;
