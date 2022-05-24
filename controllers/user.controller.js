const db = require('../db/connection');
const { ROLES } = require('../constant/app.constant');

const getUserName = (username) => {
    return new Promise((resolve, reject) => {
        let query = `SELECT id from Users WHERE username = "${username}"`;
        db.query(query, (err, data) => {
            if (err) {
                reject(err); 
            } else {
                console.log(data);
                resolve(data);
            }
        });
    });   
}

const signupCtrl = (data) => {
  
    return new Promise((resolve, reject) => {

        // we can use here express-validator
        if (!data.username || !data.password || !data.role) {
            return reject(new Error('Invalide request'));
        }

        if (!ROLES.includes(data.role)) {
            return reject(new Error('Invalide role!'));
        }

        getUserName(data.username)
            .then(res => {
                if (res.length > 0) {
                    return reject(new Error('Username is duplicate'))
                }

                // we can use here encryption for password
                let insertQuery = `
                    INSERT INTO Users (username, password, role, created_at) 
                    VALUES ('${data.username}', '${data.password}', '${data.role}', NOW())
                `;
                console.log('insertQuery',insertQuery);
                db.query(insertQuery, (err, data) => {
                    if (err) {
                        return reject(err);
                    }
                    resolve(data);
                })
            })
            .catch(err => {
                reject(err);
            })
    })
   


}

const loginCtrl = (data) => {
 
    // we can use here express-validator
    if (!data.username || !data.password) {
        return reject(new Error('Invalide request'));
    }

    return new Promise((resolve, reject) => {
        let query = `SELECT id from Users WHERE username = "${data.username}" 
            AND password= "${data.password}"`;
        db.query(query, (err, data) => {
            if (err) {
                reject(err); 
            } else {
                console.log(data);
                resolve(data);
            }
        });
    }); 
}

module.exports = {
    signupCtrl,
    loginCtrl
}