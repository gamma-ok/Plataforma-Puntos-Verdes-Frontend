import { Component } from '@angular/core';
import { EventEmitter, Input, Output } from '@angular/core';
import { NgClass } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-recolector-sidebar',
  standalone: true,
  imports: [NgClass, RouterModule],
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
