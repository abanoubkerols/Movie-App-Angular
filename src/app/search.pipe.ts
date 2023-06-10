import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'search'
})
export class SearchPipe implements PipeTransform {

  transform(movies :any[] ,searchTerm :string ) :any[] {
    return movies.filter((ele)=>ele.title.toLowerCase().includes(searchTerm.toLowerCase()))
  }

}
