import React, {Component} from 'react';

import '../styles/BadgeNew.css'

import Navbar from '../Navbar'
import BadgeForm from '../BadgeForm'
import Badge from '../Badge'
import header from '../../images/badge-header.svg'

class BadgeNew extends Component {
    state={form: {
        firstName: '',
        lastName: '',
        email: '',
        jobTitle: '',
        twitter: '',
    }}

    // 16 - Subimos este método de BadgeForm a BadgeNew.js, el cual
    // se compartirá como props a su componente inicial.
    handleChange = e => {
        this.setState({
            form: {
                // 16- Solución 2 que propone Richard Kaufman es con
                // el spread operator 
                ...this.state.form,
                [e.target.name]: e.target.value,
            },
        })
    }

    render() {
        return (
            <div>
                <div className="BadgeNew__hero">
                    <img className="img-fluid" src={header} alt="Logo" />
                </div>

                <div className="container">
                    <div className="row">
                        <div className="col-6">
                            <Badge
                                firstName={this.state.form.firstName}
                                lastName={this.state.form.lastName}
                                jobTitle={this.state.form.jobTitle}
                                twitter={this.state.form.twitter}
                                email={this.state.form.email}
                            />
                        </div>
                        <div className="col-6">
                            {/* 16- Aquí se está compartiendo mediante props a BadgeForm.js*/}
                            <BadgeForm 
                                onChange={this.handleChange}
                                formValues={this.state.form}
                            />
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default BadgeNew;