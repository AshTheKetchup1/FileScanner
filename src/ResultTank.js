var fs = require('fs');

class ResultTank{
  constructor(filePath){
      this.filePath = filePath;
      try{
        this.scanResults = JSON.parse(fs.readFileSync(this.filePath));
      }
      catch(err) {
        this.scanResults = {};
      }
  }

  getScanResults(scannedFilePath){
    return this.scanResults[scannedFilePath];
  }

  addScanResults(scannedFilePath,results){
    this.scanResults[scannedFilePath] = results;
  }

  saveToFile(){
    fs.writeFileSync(this.filePath,JSON.stringify(this.scanResults));
  }

  readFromFile(){
    this.scanResults = JSON.parse(fs.readFileSync(this.filePath));
  }

}

var testTank = new ResultTank("scanResults.txt");
var testTank2 = new ResultTank("doesntExist.txt");
// testTank.addScanResults("fake.txt", {resultCode: 1});
// testTank.saveToFile();
//testTank.readFromFile();
//console.log(testTank.getScanResults("fake.txt"));
console.log(testTank.scanResults);
console.log(testTank2.scanResults);
