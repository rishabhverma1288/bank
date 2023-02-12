

const fs = require('fs');
const crypto = require('crypto');
const util = require('util');
const { json } = require('body-parser');

class TransactionRepo {
    constructor(filename){
        if(!filename){
            throw new Error("Need a filename")
        }
        this.filename = filename

        try{
            fs.accessSync(this.filename)
        }catch(err){
            fs.writeFileSync(this.filename,"[]")
        }
    }

    async getAll(){
        return JSON.parse(
            await fs.promises.readFile(this.filename,{
                encoding:"utf8"
            })
        )
    }

    async create(attrs){
        attrs.id = this.randomId()
        const ts = Date.now()
        let date_ob = new Date(ts);
        // let date = date_ob.getDate()
        const dr = `${date_ob}`
        const dr1 = dr.split(" GMT")[0]
        attrs.date = dr1
        const recordsOld = await this.getAll()

        const records = []
        records.push(attrs)
        for (let i of recordsOld){
          records.push(i)
        }
        

        await this.writeAll(records)
        return attrs

    }
    randomId(){
        return crypto.randomBytes(4).toString('hex');
    }

    async getOne(id){
        const records = await this.getAll()
        return records.find(record=>record.id===id) 
    }

    async delete(id){
        const records = await this.getAll()
        const updated = records.find(record=>record.id!==id) 
        await this.writeAll(updated)
    }

    async writeAll(records) {
        await fs.promises.writeFile(
          this.filename,
          JSON.stringify(records, null, 2)
        );
      }
    
    async update(id, attrs) {
        const records = await this.getAll();
        const record = records.find(record => record.id === id);
    
        if (!record) {
          throw new Error(`Record with id ${id} not found`);
        }
    
        Object.assign(record, attrs);
        await this.writeAll(records);
      }

    async getOneBy(filters) {
        const records = await this.getAll();
    
        for (let record of records) {
          let found = true;
    
          for (let key in filters) {
            if (record[key] !== filters[key]) {
              found = false;
            }
          }
    
          if (found) {
            return record;
          }
        }
      }
    

}

module.exports = new TransactionRepo('transactions.json')