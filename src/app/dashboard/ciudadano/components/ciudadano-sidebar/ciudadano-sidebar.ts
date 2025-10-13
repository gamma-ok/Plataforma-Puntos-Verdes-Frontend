import { Component } from '@angular/core';
import { EventEmitter, Input, Output } from '@angular/core';
import { NgClass } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-ciudadano-sidebar',
  standalone: true,
  imports: [NgClass, RouterModule],
  templateUrl: './ciudadano-sidebar.html',
  styleUrl: './ciudadano-sidebar.css'
})
export class CiudadanoSidebar {
  @Input() isOpen = false;
  @Output() closeSidebar = new EventEmitter<void>();

  close() {
    this.closeSidebar.emit();
  }
}
