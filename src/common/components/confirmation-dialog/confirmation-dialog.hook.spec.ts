import {renderHook, act} from '@testing-library/react-hooks';
import {useConfirmationDialog} from './confirmation-dialog.hook';
import { createEmptyLookup, Lookup } from 'common/models';

describe('ConfirmationDialogHook hook specs', () => {
    it('should return empty data when item delete', () => {
        // Arrange
        const itemDelete: Lookup = { id: 'test id', name: 'test name' };
        const emptyData: Lookup = {id: '', name: ''};
    
        // Act
        const { result } = renderHook(useConfirmationDialog);
        
        act(() => {
            result.current.onOpenDialog(itemDelete);
        });

        act(() => {
            result.current.onAccept();
        });

        // Assert
        expect(result.current.itemToDelete).toEqual(emptyData);
    });

    it('should pass when open dialog', () => {
        // Arrange
        const itemDelete: Lookup = { id: 'test id', name: 'test name' };
    
        // Act
        const { result } = renderHook(useConfirmationDialog);
        
        act(() => {
            result.current.onOpenDialog(itemDelete);
        });

        // Assert
        expect(result.current.isOpen).toEqual(true);
    });

    it('should pass when close dialog', () => {
        // Arrange
        const itemDelete: Lookup = { id: 'test id', name: 'test name' };
    
        // Act
        const { result } = renderHook(useConfirmationDialog);
        
        act(() => {
            result.current.onOpenDialog(itemDelete);
        });

        act(() => {
            result.current.onClose();
        });

        // Assert
        expect(result.current.isOpen).toEqual(false);
    });
})