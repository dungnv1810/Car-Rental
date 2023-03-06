import React from "react";
import { Form, FormGroup } from "reactstrap"

import "../../Styles/FindCarForm.css"
const FindCarForm = () => {
    return (
        <>
            <Form className="form">
                <div className="d-flex align-items-center justify-content-between flex-wrap">
                    <FormGroup className="form__group">
                        <input type='text' placeholder="From address" required/>
                    </FormGroup>
                    <FormGroup className="form__group">
                        <input type='text' placeholder="To address" required/>
                    </FormGroup>
                    <FormGroup className="form__group">
                        <input type='date' placeholder="Journey date" required/>
                    </FormGroup>
                    <FormGroup className="form__group">
                        <input type='time' className="journey__time" placeholder="Journey time" required/>
                    </FormGroup>
                    <FormGroup className="select__group">
                        <select>
                            <option value='ac'>Ac Car</option>
                            <option value='non-ac'>Non Ac Car</option>
                        </select>
                    </FormGroup>
                    <FormGroup className="form__group">
                        <button className="btn find__car__btn">Find Car</button>
                    </FormGroup>
                </div>
            </Form>
        </>
    )
}
export default FindCarForm