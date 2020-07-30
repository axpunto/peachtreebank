import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})

export class FilterPipe implements PipeTransform {

  transform(items: any[], searchText: string): any[] {
    if(!items) return [];
    if(!searchText) return items;
    return items.filter( entry => {
      const entryText = entry.merchant;
      const searchCriteria = entryText.toLowerCase();
      return searchCriteria.includes(searchText);
    });
   }

}