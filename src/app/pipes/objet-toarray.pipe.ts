import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'objetToarray'
})
export class ObjetToarrayPipe implements PipeTransform {

  transform(object: any = []): any {
    return  Object.values(object);
  }

}
