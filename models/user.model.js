const bcrypt = require("bcryptjs");
const db = require("../data/database");

class Users {
    constructor(email, password, fullname, street, postalCode, city) {
        this.email = email;
        this.password = password;
        this.fullname = fullname;
        this.address = {
            street: street,
            postalCode: postalCode,
            city: city,
        };
    }

    async signup() {
        const hashedPassword = await bcrypt.hash(this.password, 12);
        await db.getDb().collection("users").insertOne({
            email: this.email,
            password: hashedPassword,
            name: this.fullname,
            address: this.address,
        });
    }

    async getuserWithSameEmail() {
        return await db.getDb().collection('users').findOne({ email: this.email });
    }

    async existsAlready() {
        return !!(await this.getuserWithSameEmail()); // ✅ Simplified check
    }

    async passwordIsCorrect(hashedPassword) {
        return await bcrypt.compare(this.password, hashedPassword);
    }
}

module.exports = Users;
