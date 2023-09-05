import { Component } from '@angular/core';
import { routes } from 'src/app/core/helpers/routes';
interface data {
  value: string;
}
@Component({
  selector: 'app-addproduct',
  templateUrl: './addproduct.component.html',
  styleUrls: ['./addproduct.component.scss']
})
export class AddproductComponent {
  public routes = routes;
  public selectedValue1 = '';
  public selectedValue2 = '';
  public selectedValue3 = '';
  public selectedValue4 = '';
  public selectedValue5 = '';
  public selectedValue6 = '';
  public selectedValue7 = '';



   

 
  selectedList1: data[] = [
    {value: 'Choose Sub Category'},
    {value: 'Fruits'},
  ];
  selectedList2: data[] = [
    {value: 'Choose Category'},
    {value: 'Computers'},
  ];
  selectedList3: data[] = [
    {value: 'Choose Brand'},
    {value: 'Brand'},
  ];
  selectedList4: data[] = [
    {value: 'Choose Tax'},
    {value: '2%'},
  ];
  selectedList5: data[] = [
    {value: 'Percentage'},
    {value: '10%'},
    {value: '20%'},
  ];
  selectedList6: data[] = [
    {value: 'Closed'},
    {value: 'Open'},
  ];
  selectedList7: data[] = [
    {value: 'Closed'},
    {value: 'Open'},
  ];
}
