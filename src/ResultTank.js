class ResultTank{
  constructor(filePath){
      this.filePath = filePath;
      this.scanResults = {};
  }

  getScanResults(filePath){
    return this.scanResults[filePath];
  }

  addScanResults(filePath,results){
    this.scanResults[filePath] = results;
  }

}
