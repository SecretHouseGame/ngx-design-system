import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChatAnnouncementComponent } from './chat-announcement.component';

describe('AnnouncementMessageComponent', () => {
  let component: ChatAnnouncementComponent;
  let fixture: ComponentFixture<ChatAnnouncementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChatAnnouncementComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ChatAnnouncementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
