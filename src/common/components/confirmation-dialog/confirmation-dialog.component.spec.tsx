import React from 'react';
import { render } from '@testing-library/react'
import { ConfirmationDialogComponent } from './confirmation-dialog.component';


describe('common/components/ConfirmationDialogComponent', () => {

    it('Should render title, content and buttons when isOpen is true', () => {
        //Arrange

        const props = {
            isOpen: true,
            onAccept: vi.fn(),
            onClose: vi.fn(),
            title: 'Test title',
            labels: { closeButton: 'Cancel', acceptButton: 'Accept' },
            children: <p> Dialog content </p>,
        };

        //Act

        const { getByText } = render(<ConfirmationDialogComponent {...props} />)

        //Assert 

        expect(getByText('Test title')).toBeInTheDocument();
        expect(getByText('Dialog content')).toBeInTheDocument();
        expect(getByText('Cancel')).toBeInTheDocument();
        expect(getByText('Accept')).toBeInTheDocument();





    })





})

