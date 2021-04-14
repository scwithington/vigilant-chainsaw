const member = require('../lib/team');

class Manager extends member {
    constructor(name, id, email, number) {
        super(name, id, email);
        this.number = number;
    } 
    job() {
        return 'Manager';
    }
    officeNumber() {
        return this.number;
    }
}

module.exports = Manager;