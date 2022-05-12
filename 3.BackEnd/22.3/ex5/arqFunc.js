const fs = require( "fs" );
const funcWriteFile = ( arqName, text ) => {
  try {
    const write = fs.writeFileSync( arqName, text );
    return "success!";
  } catch ( err ) {
    return err.message;
  }
} 

module.exports = funcWriteFile; 