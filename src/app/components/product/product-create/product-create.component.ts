import { PorductService } from './../porduct.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-product-create',
  templateUrl: './product-create.component.html',
  styleUrls: ['./product-create.component.css']
})
export class ProductCreateComponent implements OnInit {

  constructor(private porductService: PorductService,
    private router: Router) { }

  ngOnInit(): void {
    
}
    createProduct(): void{
      this.porductService.showMenssge('Produto criado!')
    }

    cancel(): void{
      this.router.navigate(['/products'])
    }
}
