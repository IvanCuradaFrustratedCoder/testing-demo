import axios from 'axios';
import sinon from 'sinon';
import { HttpService } from './HttpService';

describe('Spy example', () => {
    const sandbox = sinon.createSandbox();
    let axiosSpy: sinon.SinonSpy;

    beforeEach(() => {
        axiosSpy = sandbox.spy(axios, 'get');
    });
    afterEach(() => {
        sandbox.restore();
    });

    it('should call axios.get', async () => {
        const service = new HttpService();
        await service.get();
        expect(axiosSpy.called).toBe(true);
    });
})