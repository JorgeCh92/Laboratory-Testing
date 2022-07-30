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

        const buttonElement = screen.queryByRole('heading', {
            name: /test dialog/i,
        });

        //Assert
        expect(buttonElement).toBe(null);
    })
})