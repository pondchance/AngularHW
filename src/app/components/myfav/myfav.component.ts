import { Component, OnInit } from '@angular/core';
import { GetphotoService } from '../../services/getphoto.service';
@Component({
  selector: 'app-myfav',
  templateUrl: './myfav.component.html',
  styleUrls: ['./myfav.component.css']
})
export class MyfavComponent implements OnInit {
  private seriesName:String
  private Description:String
  

  private seriesName2:String
  private Description2:String

  private seriesName3:String
  private Description3:String
  ngOnInit() {
    this.seriesName =" Stranger Things (TV Series 2016– ) "
    this.Description="When a young boy disappears, his mother,a police chief, and his friends must confront terrifying forces in order to get him back."
 
    this.seriesName2="Doctor Who (TV Series 2005– )"
    this.Description2="The further adventures of the time travelling alien adventurer, a Time Lord/Lady known as the Doctor who can change appearance and gender, and his/her companions."
 
    this.seriesName3="13 Reasons Why (TV Series 2017– ) "
    this.Description3="Follows teenager Clay Jensen, in his quest to uncover the story"
     + "behind his classmate and crush, Hannah, and her decision to end her life."

  }

}

