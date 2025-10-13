import { Component } from '@angular/core';
import { EventEmitter, Input, Output } from '@angular/core';
import { NgClass } from '@angular/common';

@Component({
  selector: 'app-municipalidad-sidebar',
  standalone: true,
  imports: [NgClass],
  templateUrl: './municipalidad-sidebar.html',
  styleUrl: './municipalidad-sidebar.css'
})
export class MunicipalidadSidebar {
  @Input() isOpen = false;
  @Output() closeSidebar = new EventEmitter<void>();

  close() {
    this.closeSidebar.emit();
  }
}
