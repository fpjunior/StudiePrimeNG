import { Component } from '@angular/core';
import {MenuItem} from 'primeng/api';
import {SelectItem} from 'primeng/api';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {
  title = 'teste2';
   cities: SelectItem[];

    selectedCities: string[];
 
selectedValue: string;
  public items: MenuItem[];

  ngOnInit() {
      this.items = [{
        label: 'Principal',
        items: [{
                label: 'Novo', 
                icon: 'pi pi-fw pi-plus',
                items: [
                    {label: 'Projeto'},
                    {label: 'Outros'},
                ]
            },
            {label: 'Abrir'},
            {label: 'Sair'}
        ]
    },
    {
        label: 'Editar',
        icon: 'pi pi-fw pi-pencil',
        items: [
            {label: 'Deletar', icon: 'pi pi-fw pi-trash'},
            {label: 'Atualizar', icon: 'pi pi-fw pi-refresh'}
          ]
      }];
      
      
  }


  
}
