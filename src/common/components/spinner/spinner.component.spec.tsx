import React from 'react';
import { render } from '@testing-library/react';
import { usePromiseTracker } from 'react-promise-tracker';
import { SpinnerComponent } from './spinner.component';

vi.mock('react-promise-tracker');

describe('common/components/SpinnerComponent', () => {

    it('Should not be visible when there isnt a promise in progress', () => {

        const mockedPromise = { promiseInProgress: false };

        // Arrange
        vi.mocked(usePromiseTracker).mockReturnValue(mockedPromise);

        // Act
        const { queryByRole } = render(<SpinnerComponent />);

        // Assert
        expect(queryByRole('presentation')).not.toBeInTheDocument();
    });

});

