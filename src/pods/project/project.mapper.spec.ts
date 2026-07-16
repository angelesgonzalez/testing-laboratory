//test mapper

import { mapProjectFromApiToVm } from "./project.mapper";
import * as apiModel from './api/project.api-model';
import * as viewModel from './project.vm'

describe('./pods/project/project.mapper', () => {

    it('It should return empty project when feeding a null value', () => {
        // Arrange
        const project = null;

        // Act
        const result = mapProjectFromApiToVm(project);

        // Assert
        expect(result).toEqual(viewModel.createEmptyProject());
    });

    /*----------------------*/



})