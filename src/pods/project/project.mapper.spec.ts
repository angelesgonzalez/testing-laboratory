//test mapper

import { mapProjectFromApiToVm } from "./project.mapper";
import * as apiModel from './api/project.api-model';
import * as viewModel from './project.vm'

describe('./pods/project/project.mapper', () => {

    it('Should return empty project when feeding a null value', () => {
        // Arrange
        const project = null;

        // Act
        const result = mapProjectFromApiToVm(project);

        // Assert
        expect(result).toEqual(viewModel.createEmptyProject());
    });

    /*----------------------*/

    it('Should return empty project when feeding a undefined value', () => {
        // Arrange
        const project = undefined;

        // Act
        const result = mapProjectFromApiToVm(project);

        // Assert
        expect(result).toEqual(viewModel.createEmptyProject());
    });


    /*----------------------*/

    it('Should return expected result when feeding null employees list', () => {
        // Arrange
        const project: apiModel.Project = {
            id: 'test id',
            name: 'test name',
            isActive: true,
            employees: null,
        };

        const expectedResult: viewModel.Project = {
            id: 'test id',
            name: 'test name',
            isActive: true,
            employees: [],
        };

        // Act
        const result = mapProjectFromApiToVm(project);

        // Assert
        expect(result).toEqual(expectedResult);
    });

    /*----------------------*/

    it('Should return expected result when feeding undefined employees list', () => {
        // Arrange
        const project: apiModel.Project = {
            id: 'test id',
            name: 'test name',
            isActive: true,
            employees: undefined,
        };

        const expectedResult: viewModel.Project = {
            id: 'test id',
            name: 'test name',
            isActive: true,
            employees: [],
        };

        // Act
        const result = mapProjectFromApiToVm(project);

        // Assert
        expect(result).toEqual(expectedResult);
    });




    /*----------------------*/

    it('Should return expected result when feeding project with correct values and one  employee', () => {
        // Arrange
        const project: apiModel.Project = {
            id: 'test id',
            name: 'test name',
            isActive: true,
            employees: [{
                id: 'test-id',
                isAssigned: false,
                employeeName: 'Name'
            }],
        };

        const expectedResult: viewModel.Project = {
            id: 'test id',
            name: 'test name',
            isActive: true,
            employees: [{
                id: 'test-id',
                isAssigned: false,
                employeeName: 'Name'
            }],
        };

        // Act
        const result = mapProjectFromApiToVm(project);

        // Assert
        expect(result).toEqual(expectedResult);
    });




    /*----------------------*/

    it('Should return expected result when feeding project with correct values and  multiple employees', () => {

        // Arrange
        const project: apiModel.Project = {
            id: 'test id',
            name: 'test name',
            isActive: true,
            employees: [{
                id: 'test-id',
                isAssigned: false,
                employeeName: 'Name'
            }, {
                id: 'test-id-02',
                isAssigned: true,
                employeeName: 'Name 02'
            }],
        };

        const expectedResult: viewModel.Project = {
            id: 'test id',
            name: 'test name',
            isActive: true,
            employees: [{
                id: 'test-id',
                isAssigned: false,
                employeeName: 'Name'
            }, {
                id: 'test-id-02',
                isAssigned: true,
                employeeName: 'Name 02'
            }],
        };

        // Act
        const result = mapProjectFromApiToVm(project);

        // Assert
        expect(result).toEqual(expectedResult);
    });





})