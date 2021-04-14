const member = require('../lib/team');

class Intern extends member {
    constructor(name, id, email, school) {
        super(name, id, email);
        this.school = school;
    } 
    job() {
        return 'Intern';
    }
    school() {
        return this.school;
    }
}

module.exports = Intern;