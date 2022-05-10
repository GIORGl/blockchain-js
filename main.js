const SHA256 = require('crypto-js/sha256')

class Block {
  constructor(index, timestamp, data, perviousHash) {
    this.index = index;
    this.timestamp = timestamp;
    this.data = data;
    this.perviousHash = perviousHash;
    this.hash = this.calcHash()
  }

  calcHash() {
  return SHA256(this.index + this.timestamp + this.perviousHash + JSON.stringify(this.data))
  }
}


class BlockChain {
    constructor() {
        this.chain = [this.createGenisisBlock()]
    }

    createGenisisBlock() {
        return new Block(0, "10.05.2022", "Genesis block", "0")
    }

    getLatestBlock() {
        return this.chain[this.chain.length -1]
    }

    addBlock(newBlock) {
        newBlock.perviousHash = this.getLatestBlock().perviousHash;

        newBlock.hash = newBlock.calcHash();

        this.chain.push(newBlock);
    }
}

