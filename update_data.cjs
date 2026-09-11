const fs = require('fs');

let content = fs.readFileSync('src/data/companyData.ts', 'utf8');

// 1. Rename Edificio to Pixels
content = content.replace("title: 'Edificio',", "title: 'Pixels',");

// 2. Change address
content = content.replace(/address: '.*?',/, "address: 'Venustiano Carranza Nte. #500, Plaza Comercial Carranza , Monterrey Nuevo Leon',");

// 3. Remove services. 
// It's safer to just do string replacement of the specific items in the SERVICES array.
// I'll parse the file or do careful regex. Let's do it by reading the file, parsing as AST or simpler:
// Since it's typescript, we can just replace the specific blocks.
// Wait, I can do it easily with `replace_file_content` block by block, or I can just re-generate the SERVICES array.

fs.writeFileSync('src/data/companyData.ts', content);
console.log("Replaced address and demo title");
