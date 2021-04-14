const member = require('../lib/team');

class Engineer extends member {
    constructor(name, id, email, git) {
        super(name, id, email);
        this.git = git;
    } 
    job() {
        return 'Engineer';
    }
    github() {
        return this.git;
    }
}

module.exports = Engineer;