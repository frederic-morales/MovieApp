import { Component, inject } from '@angular/core';
import { ApiRequestService } from '../../shared/services/api-request.service';
import { MoviesCorouselComponent } from '../corousels/movies-corousel/movies-corousel.component';



@Component({
  selector: 'app-home-page',
  standalone: true,
  imports: [MoviesCorouselComponent],
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.css'
})
export class HomePageComponent {
  //  ngOnInit(){
  //   this.getAll()
  //  }

  //  private requestService = inject(ApiRequestService)

  //  private getAll(){
  //   this.requestService.getMovies().subscribe((res) => {
  //     console.log(res);
  //   })
  //  }
}
