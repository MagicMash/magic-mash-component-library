import React from "react";
import { render, screen } from "@testing-library/react";
import Button from "../../src/components/button/button";
import Modal from '../../src/components/modal/modal'

describe('modal component', () => {

    it('renders the modal and children when isOpen props is true', () => {
        render( <Modal isOpen > <h1>Test</h1> </Modal> )
        const test = screen.getByRole('heading', {
            name: 'Test'
        })
        expect(test).toBeInTheDocument()
    })
})