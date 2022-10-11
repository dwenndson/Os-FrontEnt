import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TecnicoService } from 'src/app/services/tecnico.service';

@Component({
  selector: 'app-tecnico-create',
  templateUrl: './tecnico-create.component.html',
  styleUrls: ['./tecnico-create.component.css']
})
export class TecnicoCreateComponent implements OnInit {

  constructor(
    private router: Router,
    private service: TecnicoService
  ) { }

  ngOnInit(): void {
  }

  salvar(): void {

  }
  cancel():void {
    this.router.navigate(['/tecnicos'])
  }
}
