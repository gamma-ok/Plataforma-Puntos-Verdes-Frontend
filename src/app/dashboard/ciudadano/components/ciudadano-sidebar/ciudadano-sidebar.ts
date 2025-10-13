import { Component } from '@angular/core';
import { EventEmitter, Input, Output } from '@angular/core';
import { NgClass } from '@angular/common';

@Component({
  selector: 'app-ciudadano-sidebar',
  standalone: true,
  imports: [NgClass],
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
