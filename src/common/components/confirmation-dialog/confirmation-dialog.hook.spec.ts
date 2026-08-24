import { renderHook } from '@testing-library/react';
import { useConfirmationDialog } from './confirmation-dialog.hook';

/*
1- comprobar que isOpen = false itemToDelete = a nada
2 - onOpenDialog -> al llamar con un item, isOPen = true e itemToDelete = guarda ese item (lo que se le pasa a la fn)
3- onClose - cuando se llama, isOPen = false
4 - onAccept - cuando se llama, itemToDelete se pone vacio 
 
 
*/


describe('common/components/useConfirmationDialog', () => {

    it('Should return initial state', () => {
        // Arrange & Act
        const { result } = renderHook(() => useConfirmationDialog());

        // Assert
        expect(result.current.isOpen).toBe(false);
        expect(result.current.itemToDelete).toEqual({ id: '', name: '' });
    });

});