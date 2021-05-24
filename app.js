const intern = require('./lib/intern');
const engineer = require('./lib/engineer');
const manager = require('./lib/manager');
const path = require('path');
const inquirer = require('inquire');
const fs = require('fs');
const jest = require('jest');

function validation(input) {
    if(input) {
        return true;
    }
    return 'The field cannot be left empty.';
}

const data = [];
const createEmployee = [
    {
        type: 'input',
        name: 'name',
        message: 'Name:',
        validate: validation,
    },
    {
        type: 'input',
        name: 'id',
        message: 'ID #:',
        validate: validation,
    },
    {
        type: 'input',
        name: 'email',
        message: 'Email:',
        validate: validation,
    },
    {
        type: 'list',
        name: 'role',
        message: 'Job Title:',
        choices: ['Manager', 'Engineer', 'Intern'],
    },
    {
        type: 'input',
        name: 'officeNumber',
        message: 'Office #:',
        validate: validation,
        //overriding response to make role manager
        when: function getRole(response) {
            return response.role == 'Manager';
        },
    },
    {
        type: 'input',
        name: 'github',
        message: 'GitHub:',
        validate: validation,
        //overriding response to make role engineer
        when: function getGithub(response) {
            return response.role == 'Engineer';
        },
    },
    {
        type: 'input',
        name: 'school',
        message: 'School:',
        validate: validation,
        //overriding response to make role intern
        when: function getSchool(response) {
            return response.role == 'Intern';
        }
    },
    {
        type: 'list',
        name: 'more',
        message: 'Add another employee',
        choices: ['Yes', 'No'],
    },
];










