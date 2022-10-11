import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { Tecnico } from 'src/app/models/tecnicos';
import { TecnicoService } from 'src/app/services/tecnico.service';

@Component({
  selector: 'app-tecnico',
  templateUrl: './tecnico.component.html',
  styleUrls: ['./tecnico.component.css']
})
export class TecnicoComponent implements AfterViewInit {

  tecnicos: Tecnico[] = [];

  displayedColumns: string[] = ['id', 'nome', 'cpf', 'telefone'];
  dataSource = new MatTableDataSource<Tecnico>(this.tecnicos);

  @ViewChild(MatPaginator) paginator!: MatPaginator;

  constructor(
    private service: TecnicoService,
    private router: Router){}
  

  ngAfterViewInit() {
    this.findAll()
  }

  findAll(): void{
    this.service.findAll().subscribe((resposta) => {
      this.tecnicos = resposta;
      this.dataSource = new MatTableDataSource<Tecnico>(this.tecnicos);
      this.dataSource.paginator = this.paginator;
    })
  }

  navigateToCreate(): void {
    this.router.navigate(['tecnicos/create'])
  }
}