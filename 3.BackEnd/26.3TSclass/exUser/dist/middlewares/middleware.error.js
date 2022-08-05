"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function default_1() { }
exports.default = default_1;
(err, req, res, next) => {
    const { message, status } = err;
    console.log(`message: ${message}`);
    res.status(status).json({ message: message });
    console.error(err);
    next();
};
;
