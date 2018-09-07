import { Hello } from '../src/components/hello';

describe('hello', () => {
    it('should out hello', ()=>{
        expect(Hello()).toBe('hello');
    })
})