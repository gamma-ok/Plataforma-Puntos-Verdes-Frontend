import { Component } from '@angular/core';
import { EventEmitter, Input, Output } from '@angular/core';
import { NgClass } from '@angular/common';

@Component({
  selector: 'app-recolector-sidebar',
  standalone: true,
  imports: [NgClass],
  templateUrl: './recolector-sidebar.html',
  styleUrl: './recolector-sidebar.css'
})
export class RecolectorSidebar {
  @Input() isOpen = false;
  @Output() closeSidebar = new EventEmitter<void>();

  close() {
    this.closeSidebar.emit();
  }
}
