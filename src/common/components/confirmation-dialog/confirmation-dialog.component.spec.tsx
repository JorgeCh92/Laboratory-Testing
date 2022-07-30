import React from 'react';
import {render, screen, fireEvent} from '@testing-library/react';
import {ConfirmationDialogComponent} from './confirmation-dialog.component';
import { LabelProps } from '../table';

describe('ConfirmationDialogComponent component specs', () => {
    it('should render empty when isOpen is false', () => {
        //Arrange
        const props = {
            isOpen: false,
            onAccept: jest.fn(),
            onClose: jest.fn(),
            title: 'Test dialog',
            labels: {
                closeButton: "Close Button",
                acceptButton: "Accept Button",
            },
        };

        //Act
        render(<ConfirmationDialogComponent {...props} />);

        const testDialog = screen.queryByRole('heading', {
            name: /test dialog/i,
        });

        //Assert
        expect(testDialog).toBe(null);
    });

    it('should render pass when passing props required', () => {
        //Arrange
        const props = {
            isOpen: true,
            onAccept: jest.fn(),
            onClose: jest.fn(),
            title: 'Test dialog',
            labels: {
                closeButton: "Close Button",
                acceptButton: "Accept Button",
            },
        };

        //Act
        render(<ConfirmationDialogComponent {...props} />);

        const testDialog = screen.getByRole('heading', {
            name: /Test dialog/i,
        });

        const buttonAcept= screen.getByRole('button', {
            name: /accept/i,
        });

        const buttonClose= screen.getByRole('button', {
            name: /close/i,
        });

        //Assert
        expect(testDialog).toBeInTheDocument();
        expect(buttonAcept).toBeInTheDocument();
        expect(buttonClose).toBeInTheDocument();
    });

    it('should render pass when passing children', () => {
        //Arrange
        const props = {
            isOpen: true,
            onAccept: jest.fn(),
            onClose: jest.fn(),
            title: 'Test dialog',
            labels: {
                closeButton: "Close Button",
                acceptButton: "Accept Button",
            },
        };

        //Act
        render(<ConfirmationDialogComponent {...props} >
                <p>Children from dialog</p>
            </ConfirmationDialogComponent>    
        );

        const testDialog = screen.getByText(
            /Children from dialog/i
        );

        //Assert
        expect(testDialog).toBeInTheDocument();
    });

    it('should render pass when click on accept button', () => {
        //Arrange
        const props = {
            isOpen: true,
            onAccept: jest.fn(),
            onClose: jest.fn(),
            title: 'Test dialog',
            labels: {
                closeButton: "Close Button",
                acceptButton: "Accept Button",
            },
        };

        //Act
        render(<ConfirmationDialogComponent {...props} />);

        const acceptButton = screen.getByRole('button', {
            name: /accept/i,
        });

        fireEvent.click(acceptButton)

        //Assert
        expect(props.onAccept).toHaveBeenCalled();
    });

    it('should render pass when click on close button', () => {
        //Arrange
        const props = {
            isOpen: true,
            onAccept: jest.fn(),
            onClose: jest.fn(),
            title: 'Test dialog',
            labels: {
                closeButton: "Close Button",
                acceptButton: "Accept Button",
            },
        };

        //Act
        render(<ConfirmationDialogComponent {...props} />);

        const closeButton = screen.getByRole('button', {
            name: /close/i,
        });

        fireEvent.click(closeButton)

        //Assert
        expect(props.onClose).toHaveBeenCalled();
    });
})