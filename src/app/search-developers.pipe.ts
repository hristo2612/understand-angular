import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'searchDevelopers'
})
export class SearchDevelopersPipe implements PipeTransform {

  transform(pipeData: any, pipeModifier?: any): any {
    return pipeData.filter(item => {
      return (
        item['name'].toLowerCase().includes(pipeModifier.toLowerCase()) ||
        item['reKnown'].toLowerCase().includes(pipeModifier.toLowerCase())
      );
    });
  }

}
