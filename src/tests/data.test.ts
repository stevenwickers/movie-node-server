import { DataServices } from '../data/data-services';
import { BookModelSchema, BookModelType } from './setup/test-model';
import { IDataServices } from '../models/interfaces';

describe('Test Data Layer', () => {
    let _db:IDataServices;
    let filePath:string;

    beforeAll(async () => {
        filePath = './src/tests/setup/testData.json'

        _db = new DataServices(filePath, BookModelSchema);
        await _db.connect();
    })

    afterAll(async () => {
       await _db.disconnect();
    })


    it('Should return all 4 books', async () => {
        const data = await _db.select() || [];
        expect(data).toHaveLength(4)

    })

    it('First Book author should be Ernest Hemingway', async () => {
        const data = await _db.select() || [];
        const item:BookModelType | null = data[0] as BookModelType;

        expect(item?.author).toEqual('Ernest Hemingway')

    })

    it('Get Book By ID', async () => {
        const result: BookModelType | null = await _db.selectById(4);

        if(!result) return
        expect(result[0]?.title).toEqual('Ulysses')
    })

})
