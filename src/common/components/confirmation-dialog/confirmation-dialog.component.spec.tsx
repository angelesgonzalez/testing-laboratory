import React from 'react';
import { render, fireEvent, getByText } from '@testing-library/react'
import { ConfirmationDialogComponent } from './confirmation-dialog.component';

/*
Se renderiza el text?
no se muestra nada cuando esta isOpen = false
al hacer click en cancel se llama onClose
al hacer click en accept se llama onAccept y onCLose 



*/


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

    it('Should not display any content when isOpen = false', () => {
        //Arrange

        const props = {
            isOpen: false,
            onAccept: vi.fn(),
            onClose: vi.fn(),
            title: "Test title",
            labels: { closeButton: 'Cancel', acceptButton: 'Accept' },
            children: <p> Dialog Content</p>,
        };

        //Act

        const { queryByText } = render(<ConfirmationDialogComponent {...props} />);

        //Assert

        expect(queryByText('Dialog Content')).not.toBeInTheDocument();

    });

    /*-------------- */


    it('Should call onClose when Cancel is clicked', () => {
        //Arrange

        const props = {
            isOpen: true,
            onAccept: vi.fn(),
            onClose: vi.fn(),
            title: "Test title",
            labels: { closeButton: 'Cancel', acceptButton: 'Accept' },
            children: <p> Dialog Content</p>,
        };

        //Act

        const { getByText } = render(<ConfirmationDialogComponent {...props} />);
        const cancelButton = getByText('Cancel');


        fireEvent.click(cancelButton);

        //Assert

        expect(props.onClose).toHaveBeenCalledTimes(1);
        expect(props.onAccept).not.toHaveBeenCalled();
    });


    /*-------------- */

    it('Should call onAccept and onClose when accept is clicked', () => {
        //Arrange

        const props = {
            isOpen: true,
            onAccept: vi.fn(),
            onClose: vi.fn(),
            title: "Test title",
            labels: { closeButton: 'Cancel', acceptButton: 'Accept' },
            children: <p> Dialog Content</p>,
        };

        //Act

        const { getByText } = render(<ConfirmationDialogComponent {...props} />);
        const acceptButton = getByText('Accept');


        fireEvent.click(acceptButton);

        //Assert

        expect(props.onAccept).toHaveBeenCalledTimes(1);
        expect(props.onClose).toHaveBeenCalledAfter(props.onAccept)
    });







})

