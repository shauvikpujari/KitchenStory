import { PresentationDirective } from './presentation.directive';

describe('PresentationDirective', () => {
  it('should create an instance', () => {
    let elRefMock={nativeElement:document.createElement('div')};
    const directive = new PresentationDirective(elRefMock);
    expect(directive).toBeTruthy();
  });
});
