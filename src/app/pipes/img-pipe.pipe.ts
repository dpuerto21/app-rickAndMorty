import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'imgPipe'
})

export class ImgPipePipe implements PipeTransform {

  transform(value: string  ): any {
    return value.replace('https://rickandmortyapi.com/api/character/avatar/22.jpeg', '')
  }

}
