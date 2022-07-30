import { Project } from 'pods/project-list/project-list.vm';
import * as mapper from './project.mapper';
import * as apiModel from './api/project.api-model';
import * as viewModel from './project.vm';
import { mapEmployeeFromApiToVm } from './project.mapper';
import { mapProjectFromApiToVm } from './project.mapper';

describe('Mapper tests', () => {

    describe('Employee mapper', () =>
    {
        test('should return empty array when it feeds employees equals undefined', () => {
            //Arrange
            const employees: apiModel.EmployeeSummary[]= undefined;
        
            //Act
            const result: viewModel.EmployeeSummary[]= mapEmployeeFromApiToVm(employees);
        
            //Assert
            expect(result).toEqual([]);
        });

        test('should return empty array when it feeds employees equals null', () => {
            //Arrange
            const employees: apiModel.EmployeeSummary[]= null;
        
            //Act
            const result: viewModel.EmployeeSummary[]= mapEmployeeFromApiToVm(employees);
        
            //Assert
            expect(result).toEqual([]);
        });

        test('should return empty array when it feeds employees equals empty array', () => {
            //Arrange
            const employees: apiModel.EmployeeSummary[]= [];
        
            //Act
            const result: viewModel.EmployeeSummary[]= mapEmployeeFromApiToVm(employees);
        
            //Assert
            expect(result).toEqual([]);
        });

        test('should return one mapped item when it feeds employees with one item', () => {
            
            //Arrange
            const employees: apiModel.EmployeeSummary[]= [
                {id: "1", isAssigned: true, employeeName: 'Juan'},
            ];
        
            //Act
            const result: viewModel.EmployeeSummary[]= mapEmployeeFromApiToVm(employees);
        
            //Assert
            const expectResult: viewModel.EmployeeSummary[]= [
                {id: "1", isAssigned: true, employeeName: "Juan"},
            ];
            
            expect(result).toEqual(expectResult);
        });
    });


    describe('Project mapper', () =>
    {
        test('should return empty array when it feeds project equals undefined', () => {
            //Arrange
            const project: apiModel.Project= undefined;
        
            //Act
            const result: viewModel.Project= mapProjectFromApiToVm(project);
        
            //Assert
            const expectResult: viewModel.Project= 
            {
                id: "", name: "", externalId: "", comments: "", isActive: false,
                    employees: []
            };

            expect(result).toEqual(expectResult);
        });

        test('should return empty array when it feeds project equals null', () => {
            //Arrange
            const project: apiModel.Project= null;
        
            //Act
            const result: viewModel.Project= mapProjectFromApiToVm(project);
        
            //Assert
            const expectResult: viewModel.Project= 
            {
                id: "", name: "", externalId: "", comments: "", isActive: false,
                    employees: []
            };

            expect(result).toEqual(expectResult);
        });

        test('should return one mapped item when it feeds project with one item', () => {
            
            //Arrange
            const project: apiModel.Project= 
            {
                id: "1", name: "Prueba", externalId: "23423", comments: "Es una prueba", isActive: true,
                    employees: [{id: "1", isAssigned: true, employeeName: "Juan"}]
            };
        
            //Act
            const result: viewModel.Project= mapProjectFromApiToVm(project);
        
            //Assert
            const expectResult: viewModel.Project= 
            {
                id: "1", name: "Prueba", externalId: "23423", comments: "Es una prueba", isActive: true,
                    employees: [{id: "1", isAssigned: true, employeeName: "Juan"}]
            };
            
            expect(result).toEqual(expectResult);
        });
    });
  });